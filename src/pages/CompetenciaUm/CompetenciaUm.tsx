import { Grid } from "@mui/material";
import * as Styled from './CompetenciaUm.styled'
import { Endpoint } from "components/Endpoint";

export const CompetenciaUm = () => {

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

        if (endpoint === 'ortografia') {
            response200 = `{
    "ortografia": [
      {}
    ],
    "nomesProprios": [
      {}
    ],
    "siglas": [
      {}
    ],
    "recomendacoes": [
      {}
    ]
  }`
        }
        else if (endpoint === 'subjetivismo') {
            response200 = `{
  "locucaoBi": [
    {}
  ],
  "locucaoTri": [
    {}
  ]
}`
        }
        else {
           response200 = `{
    "${endpoint}": [
        {}
    ]
}

`
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
            <Styled.Titulo>Competência um</Styled.Titulo>
            <Styled.Paragrafo>Verifica o domínio da modalidade escrita formal da Língua Portuguesa.</Styled.Paragrafo>

            <Endpoint
                method="post"
                url="apicompetenciaum.cria.net.br/api/v1/services/frasesmaiusculas"
                name="Frases maiúsculas"
                description="Identifica o uso equivocado de frases e expressões que deveriam ser escritos iniciando com a letra maiúscula."
                headers={Headers}
                parameters={Parameters}
                responses={createResponse("frasePropria")}
                example="'ministério da educação' que deveria ser escrito como 'Ministério da Educação'."
            />

            <Endpoint
                method="post"
                url="apicompetenciaum.cria.net.br/api/v1/services/gerundismo"
                name="Gerundismo"
                description="Identifica o emprego do gerúndio."
                headers={Headers}
                parameters={Parameters}
                responses={createResponse("gerundismo")}
                example="'vou estar fazendo' que poderia ser escrito como 'estarei fazendo'"
            />

            <Endpoint
                method="post"
                url="apicompetenciaum.cria.net.br/api/v1/services/girias"
                name="Gírias"
                description="Identifica o uso de expressões informais."
                headers={Headers}
                parameters={Parameters}
                responses={createResponse("girias")}
                example="'blz' ao invés de 'beleza', 'bj' ao invés de 'beijo' e expressões como 'boca no trambone'."
            />

            <Endpoint
                method="post"
                url="apicompetenciaum.cria.net.br/api/v1/services/gramatica"
                name="Gramática"
                description="Identifica desvios gramaticais."
                headers={Headers}
                parameters={Parameters}
                responses={createResponse("gramatica")}
                example="'cachorro pretos' ao invés de 'cachorro preto' ou 'cachorros pretos'."
            />

            <Endpoint
                method="post"
                url="apicompetenciaum.cria.net.br/api/v1/services/ortografia"
                name="Ortografia"
                description="Identifica desvios ortográficos em substantivos próprios, siglas e demais termos. Assim como recomenda possibilidades de substituição da palavra equivocada."
                headers={Headers}
                parameters={Parameters}
                responses={createResponse("ortografia")}
            />

            <Endpoint
                method="post"
                url="apicompetenciaum.cria.net.br/api/v1/services/subjetivismo"
                name="Subjetivismo"
                description="Identifica o uso de termos que levam a subjetividade no texto."
                headers={Headers}
                parameters={Parameters}
                responses={createResponse("subjetivismo")}
            />

            <Endpoint
                method="post"
                url="apicompetenciaum.cria.net.br/api/v1/services/virgula"
                name="Vírgula"
                description="Identifica o emprego equivocado da vírgula. "
                headers={Headers}
                parameters={Parameters}
                responses={createResponse("virgula")}
            />

            <Endpoint
                method="post"
                url="apicompetenciaum.cria.net.br/api/v1/services/vozpassiva"
                name="Voz passiva"
                description="Identifica o uso de voz passiva."
                headers={Headers}
                parameters={Parameters}
                responses={createResponse("vozPassiva")}
            />
        </Grid>
    );
}