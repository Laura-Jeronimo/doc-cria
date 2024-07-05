import { Grid } from "@mui/material";
import * as Styled from './AnaliseIntroducao.styled'
import { Endpoint } from "components/Endpoint";

export const AnaliseIntroducao = () => {

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
    return [
      {
        response: 200,
        description: "Success.",
        details: `{
  "${endpoint}": [
    {}
  ]
}`
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
  }

  return (
    <Grid>
      <Styled.Titulo>Análise de Introdução</Styled.Titulo>
      <Styled.Paragrafo>Realiza a análise de todos os períodos da introdução baseado nos componentes de uma introdução completa.</Styled.Paragrafo>

      <Endpoint
        method="post"
        url="apianaliseintro.cria.net.br/api/v1/services/contexto"
        name="Contexto"
        description='Classifica e calcula a probabilidade das frases da introdução de acordo ao contexto abordado.'
        headers={Headers}
        parameters={Parameters}
        responses={createResponse('contexto')}
      />

      <Endpoint
        method="post"
        url="apianaliseintro.cria.net.br/api/v1/services/defesa"
        name="Defesa de tese"
        description='Classifica e calcula a probabilidade ads frases da introdução de acordo a presença ou não de uma defesa de tese.'
        headers={Headers}
        parameters={Parameters}
        responses={createResponse('defesa')}
      />

      <Endpoint
        method="post"
        url="apianaliseintro.cria.net.br/api/v1/services/retomada"
        name="Retomada ao tema"
        description='Identifica palavras da introdução que podem expressar retomada ao tema.'
        headers={Headers}
        parameters={Parameters}
        responses={createResponse('retomada')}
      />

    </Grid>

  );
}