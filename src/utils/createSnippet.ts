import { Parameter } from "components/Parameters/Parameters.types";

export function cUrlCode(url: string, method: string, headers: Parameter[], payload?: Parameter[]) {

    const headersString = headers.map(h => `-- header '${h.parameter}: ${h.description}'`).join(',\ \n');
    const isJsonContentdescription = headers.some(h => h.parameter === 'Content-Type' && h.description === 'application/json');
    const isUrlEncodedContentdescription = headers.some(h => h.parameter === 'Content-Type' && h.description === 'application/x-www-form-urlencoded');

    let code = `curl --location --request ${method.toUpperCase()} ${url} \ 
${headersString}\n`

    if (payload) {
        if (isUrlEncodedContentdescription) {
            const payloadString = payload.map(p => `--data-urlencode '${p.parameter}={${p.description}}'`).join(',\ \n');
            code += `${payloadString}`
        }
        else if (isJsonContentdescription) {
            const payloadString = payload.map(p => `"${p.parameter}": ${p.description}`).join(',\n\t');
            code += `--data '{
    ${payloadString}
}'`
        }
    }

    return (
        code
    )
}

export function NodeJsCode(url: string, method: string, headers: Parameter[], payload?: Parameter[]) {

    let code = `const axios = require('axios');\n`
    const isJsonContentdescription = headers.some(h => h.parameter === 'Content-Type' && h.description === 'application/json');
    const isUrlEncodedContentdescription = headers.some(h => h.parameter === 'Content-Type' && h.description === 'application/x-www-form-urlencoded');

    if (payload) {
        const payloadString = payload.map(p => `'${p.parameter}': '{${p.description}}'`).join(',\n\t');
        if (isUrlEncodedContentdescription) {
            code += `const qs = require('qs');
let data = qs.stringify({
    ${payloadString}
});\n`
        }
        else if (isJsonContentdescription) {
            code += `let data = JSON.stringify({
    ${payloadString}
});`
        }
    }

    const headersString = headers.map(h => `'${h.parameter}': '${h.description}'`).join(',\n\t\t');
    code += `
let config = {
    method = '${method}',
    maxBodyLength: Infinity,
    url: '${url}',
    headers: {
        ${headersString}
}${payload ? ',\n\t\tdata: data\n};' : '};'}

axios.request(config).then((response) => {
    console.log(JSON.stringify(response.data));
}).catch((error) => {
    console.log(error);
});`

    return (
        code
    )
}

export function PythonCode(url: string, method: string, headers: Parameter[], payload?: Parameter[]) {

    const headersString = headers.map(h => `'${h.parameter}':'${h.description}'`).join(',\n\t');
    const isJsonContentdescription = headers.some(h => h.parameter === 'Content-Type' && h.description === 'application/json');
    const isUrlEncodedContentdescription = headers.some(h => h.parameter === 'Content-Type' && h.description === 'application/x-www-form-urlencoded');

    let code = `import requests
${payload && isJsonContentdescription ? 'import json' : ''}
url = "${url}"\n\n`

    if (payload) {
        if (isUrlEncodedContentdescription) {
            const payloadString = payload.map(p => `${p.parameter}={${p.description}}`).join('&');
            code += `payload = '${payloadString}'\n\n`
        }
        else if (isJsonContentdescription) {
            const payloadString = payload.map(p => `"${p.parameter}": "${p.description}"`).join(',\n\t');
            code += `payload = json.dumps({
    ${payloadString}
})\n\n`
        }
    }

    code += `headers = {
    ${headersString}
}
        
response = requests.request("${method.toUpperCase()}", url, headers=headers ${payload ? `, data=payload` : ''})
    
print(response.text)
    `

    return (
        code
    )
}

export function PHPCode(url: string, method: string, headers: Parameter[], payload?: Parameter[]) {
    let code = `<?php

$curl = curl_init();

curl_setopt_array($curl, array(
    CURLOPT_URL => '${url}',
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_ENCODING => '',
    CURLOPT_MAXREDIRS => 10,
    CURLOPT_TIMEOUT => 0,
    CURLOPT_FOLLOWLOCATION => true,
    CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
    CURLOPT_CUSTOMREQUEST => '${method.toUpperCase()}',
`
    const isJsonContentdescription = headers.some(h => h.parameter === 'Content-Type' && h.description === 'application/json');
    const isUrlEncodedContentdescription = headers.some(h => h.parameter === 'Content-Type' && h.description === 'application/x-www-form-urlencoded');

    if (payload) {
        if (isUrlEncodedContentdescription) {
            const payloadString = payload.map(p => `${p.parameter}={${p.description}}`).join('&');
            code += `\tCURLOPT_POSTFIELDS => ${payloadString}\n`
        }
        if (isJsonContentdescription) {
            const payloadString = payload.map(p => `"${p.parameter}": "${p.description}"`).join(',\n\t\t');
            code += `\tCURLOPT_POSTFIELDS => '{
        ${payloadString}
    }'\n`
        }
    }

    const headersString = headers.map(h => `'${h.parameter}: ${h.description}'`).join(',\n\t\t');

    code += `\tCURLOPT_HTTPHEADER => array(
        ${headersString}
    ),
));

$response = curl_exec($curl);

curl_close($curl);
echo $response;`

    return (
        code
    )
}

export function CsharpCode(url: string, method: string, headers: Parameter[], payload?: Parameter[]) {

    const headersString = headers.map(h => `client.DefaultRequestHeaders.Add("${h.parameter}", "${h.description}");`).join('\n\t\t');
    const isJsonContentdescription = headers.some(h => h.parameter === 'Content-Type' && h.description === 'application/json');
    const isUrlEncodedContentdescription = headers.some(h => h.parameter === 'Content-Type' && h.description === 'application/x-www-form-urlencoded');

    let code = `using System;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;

class Program
{
    static async Task Main(string[] args)
    {
        var client = new HttpClient();
        ${headersString}
        
        var url = "${url}";
    `;

    if (payload) {
        if (isUrlEncodedContentdescription) {
            const payloadString = payload.map(p => `${p.parameter}={${p.description}}`).join('&');
            code += `
        var content = new StringContent("${payloadString}", System.Text.Encoding.UTF8, "application/x-www-form-urlencoded");
            `;
        }
        else if (isJsonContentdescription) {
            const payloadString = payload.map(p => `"${p.parameter}": "${p.description}"`).join(',\n\t\t\t');
            code += `
        var content = new StringContent("{${payloadString}}", System.Text.Encoding.UTF8, "application/json");
            `;
        }
    }

    code += `
        var response = await client.${method.toUpperCase()}Async(url ${payload ? ', content' : ''});
        var responseString = await response.Content.ReadAsStringAsync();
        Console.WriteLine(responseString);
    }
}
`;

    return (
        code
    );
}

