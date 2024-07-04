import { Grid } from "@mui/material";
import * as Styled from './CompetenciaQuatro.styled'
import { Endpoint } from "components/Endpoint";

export const CompetenciaQuatro = () => {

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

    if (endpoint === 'conectivos') {
      response200 = `{
  "conectivos": [
    {}
  ]
}`
    }
    else if (endpoint === 'palavrasrepetidas') {
      response200 = `{
  "StopWordLis": [
    {}
  ],
  "OutrasLis": [
    {}
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
      <Styled.Titulo>Competência quatro</Styled.Titulo>
      <Styled.Paragrafo>Analisa o conhecimento dos mecanismos linguísticos necessários para a construção da argumentação</Styled.Paragrafo>

      <Endpoint
        method="post"
        url="apicompetenciaquatro.cria.net.br/api/v1/services/conectivos"
        name="Conectivos"
        description={`Identifica e categoriza conectivos utilizados no texto. As possibilidades de categorias são:
  - Adicao;
  - Afimacao;
  - alternancia;
  - comparacao_conformidade;
  - conclusao_final_resumo;
  - condicao_hipotese;
  - duvida;
  - exemplificacao;
  - introducao_sequencia_relevancia;
  - negacao;
  - oposicao_concessao;
  - proporcao;
  - reformulacao;
  - surpresa;
  - tempo;
  - lugar;`}
        headers={Headers}
        parameters={Parameters}
        responses={createResponse("conectivos")}
        example="'e' classificado como 'adição', 'ou' classificado como 'alternância'."
      />

      <Endpoint
        method="post"
        url="apicompetenciaquatro.cria.net.br/api/v1/services/palavrasrepetidas"
        name="Palavras repetidas"
        description="Detecta o uso repetitivo de palavras e suas respectivas incidências"
        headers={Headers}
        parameters={Parameters}
        responses={createResponse("palavrasrepetidas")}
      />

    </Grid>
  );
}