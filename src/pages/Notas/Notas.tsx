import { Grid } from "@mui/material";
import * as Styled from './Notas.styled'
import { Endpoint } from "components/Endpoint";

export const Notas = () => {

  const Headers = [
    { parameter: "Content-Type", description: "application/json" },
    { parameter: "Authorization", description: "seu_token" }
  ];

  const Parameters = [
    { parameter: "tema", type: "string", description: "O tema sobre o qual a redação foi escrita." },
    { parameter: "redacao", type: "string", description: "A redação escrita pelo aluno." },
    { parameter: "motivador", type: "string", description: "O texto motivador completo associado à redação proposta." }
  ];

  const createResponse = (details: string) => [
    {
      response: 200,
      description: "Success.",
      details: details
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

  const responseNotas = createResponse(`{
    "Nota": 0
  }`);

  const responseTodas = createResponse(`{
    "numeroDePalavrasPorFrase": 0,
    "TypeTokenRatio": 0,
    "numeroDePalavrasUnicas": 0,
    "numeroMedioDeSilabasPorPalavra": 0,
    "frequenciaDePalavrasDeBaixaIncidencia": 0,
    "complexidadeSemantica": 0,
    "numeroMedioDeSentencasPorParagrafo": 0,
    "quantidadeDeParagrafosComUmaSentenca": 0,
    "quantidadeDeSentencasSemVerbo": 0,
    "razaoEntreVerbosEPalavras": 0,
    "quantidadeDeSentencasiniciadasComLocucoesConjuntivas": 0,
    "mediaOracoesPorSentenca": 0
  }`);

  const responseEstatisticas = createResponse(`{
    "Resultado": 0
  }`);


  return (
    <>
      <Grid>
        <Styled.Titulo>Notas</Styled.Titulo>
        <Styled.Paragrafo>Atribui notas para um texto baseado nas 5 competências do ENEM.</Styled.Paragrafo>

        <Endpoint
          method="post"
          url="apinotas.cria.net.br/api/v1/services/notacomp1"
          name="Nota da competência 1"
          description='Classifica a redação de acordo com os critérios da competência 1.'
          headers={Headers}
          parameters={Parameters}
          responses={responseNotas}
        />

        <Endpoint
          method="post"
          url="apinotas.cria.net.br/api/v1/services/notacomp2"
          name="Nota da competência 2"
          description='Classifica a redação de acordo com os critérios da competência 2.'
          headers={Headers}
          parameters={Parameters}
          responses={responseNotas}
        />

        <Endpoint
          method="post"
          url="apinotas.cria.net.br/api/v1/services/notacomp3"
          name="Nota da competência 3"
          description='Classifica a redação de acordo com os critérios da competência 3.'
          headers={Headers}
          parameters={Parameters}
          responses={responseNotas}
        />

        <Endpoint
          method="post"
          url="apinotas.cria.net.br/api/v1/services/notacomp4"
          name="Nota da competência 4"
          description='Classifica a redação de acordo com os critérios da competência 4.'
          headers={Headers}
          parameters={Parameters}
          responses={responseNotas}
        />

        <Endpoint
          method="post"
          url="apinotas.cria.net.br/api/v1/services/notacomp5"
          name="Nota da competência 5"
          description='Classifica a redação de acordo com os critérios da competência 5.'
          headers={Headers}
          parameters={Parameters}
          responses={responseNotas}
        />

      </Grid>

      <Styled.Divisor />

      <Grid>
        <Styled.Titulo>Estatísticas</Styled.Titulo>
        <Styled.Paragrafo>Execita as medidas estatísicas da redação.</Styled.Paragrafo>

        <Endpoint
          method="post"
          url="apinotas.cria.net.br/api/v1/estatisticas/featuresEstatisticasTodas"
          name="Todas as estatísticas."
          description='Wrapper para executar todas as medidas estatísticas contidas nesta API.'
          headers={Headers}
          parameters={Parameters}
          responses={responseTodas}
        />

        <Endpoint
          method="post"
          url="apinotas.cria.net.br/api/v1/estatisticas/frequenciaDePalavrasDeBaixaIncidencia"
          name="Frequência de palavras de baixa incidência."
          description='Calcula a frequência de palavras de baixa incidência.'
          headers={Headers}
          parameters={Parameters}
          responses={responseEstatisticas}
        />

        <Endpoint
          method="post"
          url="apinotas.cria.net.br/api/v1/estatisticas/mediaOracoesPorSentenca"
          name="Média de orações por sentença."
          description='Calcula a média de orações por sentença.'
          headers={Headers}
          parameters={Parameters}
          responses={responseEstatisticas}
        />

        <Endpoint
          method="post"
          url="apinotas.cria.net.br/api/v1/estatisticas/numeroDePalavrasPorFrase"
          name="Número de palavras por frase."
          description='Calcula o número de palavras por frase.'
          headers={Headers}
          parameters={Parameters}
          responses={responseEstatisticas}
        />

        <Endpoint
          method="post"
          url="apinotas.cria.net.br/api/v1/estatisticas/numeroDePalavrasUnicas"
          name="Número de palavras únicas."
          description='Calcula o número de palavras únicas.'
          headers={Headers}
          parameters={Parameters}
          responses={responseEstatisticas}
        />

        <Endpoint
          method="post"
          url="apinotas.cria.net.br/api/v1/estatisticas/numeroMedioDeSentencasPorParagrafo"
          name="Número médio de sentenças por parágrafo."
          description='Calcula o número médio de sentenças por parágrafo.'
          headers={Headers}
          parameters={Parameters}
          responses={responseEstatisticas}
        />

        <Endpoint
          method="post"
          url="apinotas.cria.net.br/api/v1/estatisticas/numeroMedioDeSilabasPorPalavra"
          name="Número médio de sílabas por palavra."
          description='Calcula o número médio de sílabas por palavra.'
          headers={Headers}
          parameters={Parameters}
          responses={responseEstatisticas}
        />

        <Endpoint
          method="post"
          url="apinotas.cria.net.br/api/v1/estatisticas/quantidadeDeParagrafosComUmaSentenca"
          name="Quantidade de palavras com uma sentença."
          description='Calcula a quantidade de parágrafos com uma sentença.'
          headers={Headers}
          parameters={Parameters}
          responses={responseEstatisticas}
        />

        <Endpoint
          method="post"
          url="apinotas.cria.net.br/api/v1/estatisticas/quantidadeDeSentencasSemVerbo"
          name="Quantidade de sentenças sem verbo."
          description='Calcula a quantidade de sentenças sem verbo.'
          headers={Headers}
          parameters={Parameters}
          responses={responseEstatisticas}
        />

        <Endpoint
          method="post"
          url="apinotas.cria.net.br/api/v1/estatisticas/quantidadeDeSentencasiniciadasComLocucoesConjuntivas"
          name="Quantidade de sentenças iniciadas com locuções conjuntivas."
          description='Calcula a quantidade de sentenças iniciadas com locuções conjuntivas.'
          headers={Headers}
          parameters={Parameters}
          responses={responseEstatisticas}
        />

        <Endpoint
          method="post"
          url="apinotas.cria.net.br/api/v1/estatisticas/razaoEntreVerbosEPalavras"
          name="Razão entre verbos e palavras."
          description='Calcula a razão entre verbos e palavras.'
          headers={Headers}
          parameters={Parameters}
          responses={responseEstatisticas}
        />

        <Endpoint
          method="post"
          url="apinotas.cria.net.br/api/v1/estatisticas/typeTokenRatio"
          name="Diversidade lexical."
          description=' Calcula a medida da diversidade lexical.'
          headers={Headers}
          parameters={Parameters}
          responses={responseEstatisticas}
        />

      </Grid>
    </>

  );
}