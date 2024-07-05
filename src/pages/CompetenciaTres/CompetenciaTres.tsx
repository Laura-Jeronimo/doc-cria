import { Grid } from "@mui/material";
import * as Styled from './CompetenciaTres.styled'
import { Endpoint } from "components/Endpoint";

export const CompetenciaTres = () => {

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

        if (endpoint === 'plagio') {
            response200 = `{
  "Plagio": [
    {
      "redacao": {
        "ocorrencia": "string",
        "start": 0,
        "end": 0
      },
      "plagio": {
        "ocorrencia": "string",
        "url": "string"
      },
      "similaridade": 0
    }
  ]
}`
        }
        else if (endpoint === 'modelosprontos') {
            response200 = `{
  "ModeloPronto": [
    "string"
  ]
}`
        }
        else if (endpoint === 'pdf_modelosprontos') {
            response200 = `{
  "pdf": "string"
}`
        }
        else if (endpoint === 'politica') {
            response200 = `{
  "OpiniaoPoliticaList": [
    {}
  ]
}`
        }
        else {
            response200 = `{
  "${endpoint}List": [
    {
      "ocorrencia": "string",
      "start": 0,
      "end": 0
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
            <Styled.Titulo>Competência três</Styled.Titulo>
            <Styled.Paragrafo>Verifica a seleção, relação, organização e interpretação de informações, fatos, opiniões e argumentos autorais em defesa de um ponto de vista.</Styled.Paragrafo>

            <Endpoint
                method="post"
                url="apicompetenciatres.cria.net.br/api/v1/services/PlagioNota1000"
                name="Plágio de redações nota 1000"
                description="Identifica palavras ou expressões que possam ter sido diretamente copiadas de redações históricas publicadas com nota máxima no ENEM, critério este que indica a possibilidade de plágio."
                headers={Headers}
                parameters={Parameters}
                responses={createResponse("plagio")}
            />

            <Endpoint
                method="post"
                url="apicompetenciatres.cria.net.br/api/v1/services/cliches"
                name="Clichês"
                description="Identifica o uso de expressões clichês, indicando carência de ideias autorais."
                headers={Headers}
                parameters={Parameters}
                responses={createResponse("Cliches")}
                example="'Muito se tem discutido', 'a esperança é a última que morre' ou 'algo precisa ser feito'."
            />

            <Endpoint
                method="post"
                url="apicompetenciatres.cria.net.br/api/v1/services/ditadospopulares"
                name="Ditados populares"
                description="Identifica o uso de ditados populares."
                headers={Headers}
                parameters={Parameters}
                responses={createResponse("Ditados")}
                example="'quem não chora, não mama', 'quem desdenha quer comprar' ou 'o pior cego é aquele que não quer ver'."
            />

            <Endpoint
                method="post"
                url="apicompetenciatres.cria.net.br/api/v1/services/generalizacoes"
                name="Generalizações"
                description="Identifica o uso de termos e expressões que passam o sentimento de generalização."
                headers={Headers}
                parameters={Parameters}
                responses={createResponse("Generalizacoes")}
                example="'as mulheres são ruins em matemática' ou 'escolas não atendem às necessidades'."
            />

            <Endpoint
                method="post"
                url="apicompetenciatres.cria.net.br/api/v1/services/modelos_prontos"
                name="Modelos prontos"
                description="Indica a possibilidade da redação ter sido elaborada com base em um modelo pronto público."
                headers={Headers}
                parameters={Parameters}
                responses={createResponse("modelosprontos")}
            />

            <Endpoint
                method="post"
                url="apicompetenciatres.cria.net.br/api/v1/services/pdf_modelosprontos"
                name="PDF modelos prontos"
                description="Gera um pdf da redação e de modelos prontos que podem ter sido base para elaboração do texto."
                headers={Headers}
                parameters={Parameters}
                responses={createResponse("pdf_modelosprontos")}
            />

            <Endpoint
                method="post"
                url="apicompetenciatres.cria.net.br/api/v1/services/politica"
                name="Opinião política"
                description="Indica o uso de viés político na redação."
                headers={Headers}
                parameters={Parameters}
                responses={createResponse("politica")}
            />

            <Endpoint
                method="post"
                url="apicompetenciatres.cria.net.br/api/v1/services/redundancia"
                name="Redundância"
                description="Indica o uso de termos redundantes em uma mesma frase ou expressão."
                headers={Headers}
                parameters={Parameters}
                responses={createResponse("Redundancia")}
                example="'a chuva que cai', 'acreditar por convicção' ou 'alerta prévio'."
            />
        </Grid>
    );
}