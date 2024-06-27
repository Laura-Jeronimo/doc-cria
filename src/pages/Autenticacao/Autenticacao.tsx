import { Grid } from "@mui/material"
import * as Styled from './Autenticacao.styled'
import { Request } from "components/Request"
import { Parameters } from "components/Parameters"
import { CodeSnippet } from "components/CodeSnippet"
import { ExpandMore } from "@mui/icons-material"
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight"
import { Accordions } from "components/Accordions"

export const Autenticacao = () => {

    const snippets = [
        {
            language: 'bash',
            label: 'cURL',
            code: `curl --location 'https://api.cria.net.br/api/v1/auth/login' \\
--header 'Content-Type: application/x-www-form-urlencoded' \\
--header 'Accept: application/json' \\
--data-urlencode 'username={username}' \\
--data-urlencode 'password={password}'`
        },
        {
            language: 'javascript',
            label: 'NodeJS',
            code: `const axios = require('axios');
const qs = require('qs');
let data = qs.stringify({
    'username': '{username}',
    'password': '{password}' 
});

let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'https://api.cria.net.br/api/v1/auth/login',
    headers: { 
        'Content-Type': 'application/x-www-form-urlencoded', 
        'Accept': 'application/json'
    },
    data : data
};

axios.request(config).then((response) => {
    console.log(JSON.stringify(response.data));
}).catch((error) => {
    console.log(error);
});`
        },
        {
            language: 'python',
            label: 'Python',
            code: `import requests

url = "https://api.cria.net.br/api/v1/auth/login"

payload = 'username={username}&password={password}'
headers = {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Accept': 'application/json'
}

response = requests.request("POST", url, headers=headers, data=payload)

print(response.text)`
        },
        {
            language: 'php',
            label: 'PHP',
            code: `<?php

$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => 'https://uat-api.cria.net.br/api/v1/auth/login',
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => '',
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => 'POST',
  CURLOPT_POSTFIELDS => 'username=CriaBackEnd&password=cr14U53rL0g1n',
  CURLOPT_HTTPHEADER => array(
    'Content-Type: application/x-www-form-urlencoded',
    'Accept: application/json'
  ),
));

$response = curl_exec($curl);

curl_close($curl);
echo $response;
?>`
        },
        {
            language: 'csharp',
            label: 'C#',
            code: `var client = new HttpClient();
var request = new HttpRequestMessage(HttpMethod.Post, "https://uat-api.cria.net.br/api/v1/auth/login");
request.Headers.Add("Accept", "application/json");
var collection = new List<KeyValuePair<string, string>>();
collection.Add(new("username", "CriaBackEnd"));
collection.Add(new("password", "cr14U53rL0g1n"));
var content = new FormUrlEncodedContent(collection);
request.Content = content;
var response = await client.SendAsync(request);
response.EnsureSuccessStatusCode();
Console.WriteLine(await response.Content.ReadAsStringAsync());`
        }
    ];

    const responsesLogin = [
        {
            response: 200,
            description: "Login bem sucedido.",
            details: `"access_token": "Token a ser utilizado", \n"expires_in": "900",\n"message": "Logado com sucesso",\n"status": "success",\n"token_type": "bearer"`
        },
        {
            response: 400,
            description: "Erro em validação de dados."
        },
        {
            response: 401,
            description: "Username ou senha não combinam."
        },
        {
            response: 500,
            description: "Internal server error."
        },
    ]

    return (
        <Grid container>
            <Styled.Titulo>Informações Gerais de Autenticação</Styled.Titulo>
            <Styled.Paragrafo>Todas as APIs respondem ao processo de autenticação contido na API de Login <Styled.Url>https://api.cria.net.br/api/v1</Styled.Url>. O método de login <Styled.Url>https://api.cria.net.br/api/v1/auth/login</Styled.Url> funciona via JWT e espera receber um conteúdo do tipo x-www-form-urlencoded contendo usuário e senha para retornar um objeto JSON contendo um token de autenticação. Cada token emitido possui validade de 15 minutos. Após este período, é necessário repetir o login. Recomendamos que suas requisições possuam condições para recuperar o token de acesso a cada vez que algum método responder com código 403. O token pode ser invalidado a qualquer momento utilizando o método de logout. Para recuperar ou obter credenciais, entre em contato com suporte@cria.net.br ou diretamente com um administrador do sistema.</Styled.Paragrafo>

            <Styled.Divisor />

            <Styled.GridEndpoint>

                <Grid>
                    <Request method="post" endpoint="/auth/login" name="Login" description="Autentica um usuário já registrado." />

                    <Styled.ParameterTitle>HEADERS</Styled.ParameterTitle>
                    <Parameters parameter="Accept" description="application/json" />
                    <Parameters parameter="Content-Type" description="application/x-www-form-urlencoded" />

                    <Styled.ParameterTitle>PARÂMETROS</Styled.ParameterTitle>
                    <Parameters parameter="Username" type="string" description="Seu nome de usuário." />
                    <Parameters parameter="Password" type="string" description="Sua senha." />

                    <Styled.ParameterTitle>RESPONSES</Styled.ParameterTitle>
                    <Accordions responses={responsesLogin} />
                </Grid>

                <Styled.GridCode>
                    <CodeSnippet snippets={snippets} />
                </Styled.GridCode>

            </Styled.GridEndpoint>

            <Styled.Divisor />

            <Styled.GridEndpoint>

                <Grid>
                    <Request method="post" endpoint="/auth/logout" name="Logout" description="Desativa o token utilizado na requisição." />

                    <Styled.ParameterTitle>HEADERS</Styled.ParameterTitle>
                    <Parameters parameter="Accept" description="application/json" />
                    <Parameters parameter="Authorization" description="seu_token" />

                </Grid>

                <Styled.GridCode>
                    <CodeSnippet snippets={snippets} />
                </Styled.GridCode>

            </Styled.GridEndpoint>

        </Grid>
    )
}