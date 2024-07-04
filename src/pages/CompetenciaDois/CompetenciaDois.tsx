import { Grid } from "@mui/material";
import * as Styled from './CompetenciaDois.styled'
import { Endpoint } from "components/Endpoint";

export const CompetenciaDois = () => {

    const Headers = [
        { parameter: "Content-Type", description: "application/json" },
        { parameter: "Authorization", description: "seu_token" }
    ];

    const Parameters = [
        { parameter: "tema", type: "string", description: "O tema sobre o qual a redação foi escrita." },
        { parameter: "redacao", type: "string", description: "A redação escrita pelo aluno." },
        { parameter: "motivador", type: "string", description: "O texto motivador completo associado à redação proposta." }
    ];

    function createResponse(endpoint: string) {

        let response200 = ''

        if (endpoint === 'classificacaotextual') {
            response200 = `{
  "genero": true,
  "tese": true,
  "argumentacao": true,
  "intervensao": true,
  "normaCulta": true
}`
        }
        else if (endpoint === 'fugaaotema') {
            response200 = `{
  "fugaAoTema": true,
  "probabilidade": 0
}`
        }
        else if (endpoint === 'primeirapessoa') {
            response200 = `{
  "primeiraPessoa": [
    {}
  ]
}`
        }
        else if (endpoint === 'similaridadesemantica') {
            response200 = `{
  "similaridadeSemantica": 0,
  "listaSimilaridade": [
    {}
  ]
}`
        }
        else if (endpoint === 'copiamotivador') {
            response200 = `{
  "CopiaDoTextoMotivador": [
    {
      "redacao": {
        "ocorrencia": "string",
        "start": 0,
        "end": 0
      },
      "motivador": {
        "ocorrencia": "string",
        "start": 0,
        "end": 0
      },
      "similaridade": 0
    }
  ]
}`
        }

        return [
            {
                response: 200,
                description: "Success.",
                details: response200
            },
            {
                response: 400,
                description: "Erro de validação."
            },
            {
                response: 500,
                description: "Internal server error."
            },
        ];

    };

    return (
        <Grid>
            <Styled.Titulo>Competência dois</Styled.Titulo>
            <Styled.Paragrafo>Análise da compreensão da proposta de redação e aplicação de conceitos das várias áreas de conhecimento para desenvolver o tema, dentro dos limites estruturais do texto dissertativo-argumentativo em prosa.</Styled.Paragrafo>

            <Endpoint
                method="post"
                url="apicompetenciadois.cria.net.br/api/v1/services/classificacaotextual"
                name="Classificação textual"
                description={`Indentifica critérios para que o texto seja considerado como modalidade dissertativo-argumentativo, sendo considerado apenas aqueles que tiverem todos os critérios como veredadeiro. Os critérios são: 
  - Classificação geral de modalidade;
  - Presença de defesa de tese;
  - Presença de argumentação;
  - Presença de proposta de intervenção;
  - Adesão à norma culta da língua portuguesa.`}
                headers={Headers}
                parameters={Parameters}
                responses={createResponse("classificacaotextual")}
            />

            <Endpoint
                method="post"
                url="apicompetenciadois.cria.net.br/api/v1/services/fugaaotema"
                name="Fuga ao tema"
                description="Calcula a probabilidade de uma redação ter fugido ao tema através da classificação de representações vetoriais."
                headers={Headers}
                parameters={Parameters}
                responses={createResponse("fugaaotema")}
            />

            <Endpoint
                method="post"
                url="apicompetenciadois.cria.net.br/api/v1/services/primeirapessoa"
                name="Primeira pessoa"
                description="Identifica o uso de pronomes que indicam a primeira pessoa."
                headers={Headers}
                parameters={Parameters}
                responses={createResponse("primeirapessoa")}
                example="'Eu' ou 'Nós' mesmo que contidos em outras expressões."
            />

            <Endpoint
                method="post"
                url="apicompetenciadois.cria.net.br/api/v1/services/similaridadesemantica"
                name="Similaridade semântica"
                description="Identifica termos e expressões que possuam alta similaridade com o texto motivador. Indicanto palavras e expressões que suportam a aderência ao tema."
                headers={Headers}
                parameters={Parameters}
                responses={createResponse("similaridadesemantica")}
            />

            <Endpoint
                method="post"
                url="apicompetenciadois.cria.net.br/api/v1/services/CopiaDoTextoMotivador"
                name="Cópia do texto motivador"
                description="Identifica palavras ou expressões que possam ter sido diretamente copiadas do texto motivado, critério este que indica a possibilidade de plágio."
                headers={Headers}
                parameters={Parameters}
                responses={createResponse("copiamotivador")}
            />
        </Grid>
    );
}