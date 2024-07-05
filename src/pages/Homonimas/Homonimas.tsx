import { Grid } from "@mui/material";
import * as Styled from './Homonimas.styled'
import { Endpoint } from "components/Endpoint";

export const Homonimas = () => {

  const Headers = [
    { parameter: "Content-Type", description: "application/json" },
    { parameter: "Authorization", description: "seu_token" }
  ];

  const Parameters = [
    { parameter: "tema", type: "string", description: "O tema sobre o qual a redação foi escrita." },
    { parameter: "redacao", type: "string", description: "A redação escrita pelo aluno." },
    { parameter: "motivador", type: "string", description: "O texto motivador completo associado à redação proposta." }
  ];

  const response = [
    {
      response: 200,
      description: "Success.",
      details: `{
"homonimos": [
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

  return (
    <Grid>
      <Styled.Titulo>Palavras ambíguas.</Styled.Titulo>
      <Styled.Paragrafo>Analise o possível uso errôneo de palavras homônimas e parônimas.</Styled.Paragrafo>

      <Endpoint
        method="post"
        url="apipalavrasambiguas.cria.net.br/api/v1/services/homonimas"
        name="Homônimas e parônimas"
        description='Classifica palavras homônimas de acordo ao contexto e identifica possíveis desvios.'
        headers={Headers}
        parameters={Parameters}
        responses={response}
      />

    </Grid>

  );
}