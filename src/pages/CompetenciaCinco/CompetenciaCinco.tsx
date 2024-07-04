import { Grid } from "@mui/material";
import * as Styled from './CompetenciaCinco.styled'
import { Endpoint } from "components/Endpoint";

export const CompetenciaCinco = () => {

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

    if (endpoint in ['entidades', 'baixoCalao']) {
      response200 = `{
  "${endpoint}": [
    {}
  ]
}`
    }
    else if (endpoint === 'improprios') {
      response200 = `{
  "preconceitos": [
    {}
  ],
  "baixoCalao": [
    {}
  ]
}`
    }
    else if (endpoint === 'intervencao') {
      response200 = `{
  "conclusao": "string",
  "start": 0,
  "end": 0,
  "intervensao": "string",
  "probabilidade": 0
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
      <Styled.Titulo>Competência cinco</Styled.Titulo>
      <Styled.Paragrafo>Verifica a proposta de intervenção para o problema abordado, respeitando os direitos humanos.</Styled.Paragrafo>

      <Endpoint
        method="post"
        url="apicompetenciacinco.cria.net.br/api/v1/services/agente"
        name="Agentes"
        description='Detecta a presença de agentes de intervensão no último parágrafo do texto.'
        headers={Headers}
        parameters={Parameters}
        responses={createResponse("entidades")}
      />

      <Endpoint
        method="post"
        url="apicompetenciacinco.cria.net.br/api/v1/services/baixocalao-experimental"
        name="Baixo calão (experimental)"
        description="Detecta o uso de palavras e termos de baixo calão. Método em experimentação, use com cautela. "
        headers={Headers}
        parameters={Parameters}
        responses={createResponse("baixoCalao")}
      />

      <Endpoint
        method="post"
        url="apicompetenciacinco.cria.net.br/api/v1/services/improprios"
        name="Termos impróprios"
        description="Detecta o uso de termos impróprios para o contexto de redações escolares e de concursos."
        headers={Headers}
        parameters={Parameters}
        responses={createResponse("improprios")}
      />

      <Endpoint
        method="post"
        url="apicompetenciacinco.cria.net.br/api/v1/services/intervensao"
        name="Intervenção"
        description="Classifica a qualidade e presença da proposta de intervensão."
        headers={Headers}
        parameters={Parameters}
        responses={createResponse("intervencao")}
      />

    </Grid>
  );
}