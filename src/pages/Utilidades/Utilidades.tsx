import { Grid } from "@mui/material";
import * as Styled from './Utilidades.styled'
import { Endpoint } from "components/Endpoint";

export const Utilidades = () => {

  const Headers = [
    { parameter: "Content-Type", description: "application/json" },
    { parameter: "Authorization", description: "seu_token" }
  ];

  const HeadersPDF = [
    { parameter: "Content-Type", description: "application/x-www-form-urlencoded" },
    { parameter: "Authorization", description: "seu_token" }
  ];

  const Parameters = [
    { parameter: "tema", type: "string", description: "O tema sobre o qual a redação foi escrita." },
    { parameter: "redacao", type: "string", description: "A redação escrita pelo aluno." },
    { parameter: "motivador", type: "string", description: "O texto motivador completo associado à redação proposta." }
  ];

  const ParametersPDF = [
    { parameter: 'TEXTO_MOTIVADOR_ID', type: 'integer', description: 'Texto motivador ID para ser processado.' }
  ];

  const ParametersRedacao = [
    { parameter: "tema", type: "string", description: "O tema sobre o qual a redação foi escrita." },
    { parameter: "redacao", type: "string", description: "A redação escrita pelo aluno." },
    { parameter: "nome", type: "string", description: "Nome do aluno." },
    { parameter: "notaTotal", type: "integer", description: "Nota total da redação." },
    { parameter: "turma", type: "string", description: "Turma do aluno." },
    { parameter: "genero", type: "string", description: "Gênero textual da redação."},
    { parameter: "notaComp1", type: "integer", description: "Nota da competência um." },
    { parameter: "notaComp2", type: "integer", description: "Nota da competência dois." },
    { parameter: "notaComp3", type: "integer", description: "Nota da competência três." },
    { parameter: "notaComp4", type: "integer", description: "Nota da competência quatro." },
    { parameter: "notaComp5", type: "integer", description: "Nota da competência cinco." },
  ];

  const ParametersResumao = [
    { parameter: 'valores', type: 'string', description: 'JSON com lista de comentários para gerar o PDF.' }
  ];

  const responseFirewall = [
    {
      response: 200,
      description: "Success.",
      details: `{
  "response": "string"
}
`
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

  const responseProcessaPDF = [
    {
      response: 200,
      description: "Success.",
      details: `{
  "message": "string"
}
`
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

  const responseResumao = [
    {
      response: 200,
      description: "Success.",
      details: `{
  "pdf": "string"
}
`
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
      <Styled.Titulo>Utilidades</Styled.Titulo>
      <Styled.Paragrafo>Métodos gerais que são úteis no processo de correção da redação.</Styled.Paragrafo>

      <Endpoint
        method="post"
        url="apiutilidades.cria.net.br/api/v1/process/processapdf"
        name="Processa PDF"
        description='Extrai o texto de um pdf salvo no banco SQL.'
        headers={HeadersPDF}
        parameters={ParametersPDF}
        responses={responseProcessaPDF}
      />

      <Endpoint
        method="post"
        url="apiutilidades.cria.net.br/api/v1/services/firewall"
        name="Firewall"
        description={`Classifica critérios de aceitação para as redações. São eles:
  - FO1: Tipos de entrada inválido.
  - F02: Tamanho mínimo de redação não atingido
  - F03: Repetição desnecessária de parágrafos
  - F04: Repetição desnecessária de frases
  - F05: Redação não escrita no idioma português.`}
        headers={Headers}
        parameters={Parameters}
        responses={responseFirewall}
      />

      <Endpoint
        method="post"
        url="apiutilidades.cria.net.br/api/v1/services/resumao"
        name="Resumão"
        description='Recebe os comentários da correção e gera um pdf deles.'
        headers={HeadersPDF}
        parameters={ParametersResumao}
        responses={responseResumao}
      />

      <Endpoint
        method="post"
        url="apiutilidades.cria.net.br/api/v1/services/redacao"
        name="PDF da redação"
        description='Recebe redação e gera PDF da correção.'
        headers={Headers}
        parameters={ParametersRedacao}
        responses={responseResumao}
      />

    </Grid>

  );
}