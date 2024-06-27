import { Grid } from "@mui/material"
import * as Styled from './Sobre.styled'
import { CardApis } from "./CardApis"
import { useNavigate } from "react-router-dom"

export const Sobre = () => {

    const navigate = useNavigate();

    return (
        <Grid container>
            <Styled.Titulo>Sobre o CRIA</Styled.Titulo>
            <Grid>
                <Styled.Paragrafo>O CRIA é um corretor de redações baseado em Inteligência Artificial (IA). Através de algoritmos avançados de linguística e aprendizado de máquina, o corretor inteligente atribui uma nota baseada nos parâmetros do ENEM.</Styled.Paragrafo>
                <Styled.Paragrafo>O CRIA aprendeu a corrigir redações por meio de milhares de redações já corrigidas por professores especialistas em redações. Assim, ele fornece um feedback de notas padrão ENEM e em seguida uma análise detalhada para o aprimoramento sobre: gramática, estrutura, coesão e coerção textual, detecção de fuga ao tema, análise da introdução e da conclusão dos textos para apoio pleno e ainda ajuda os estudantes a melhorar suas habilidades de escrita por meio de um tutor inteligente.</Styled.Paragrafo>
                <Styled.Paragrafo>Este software foca em auxiliar escolas, estudantes e professores, aumentando a produção de textos com qualidade no ambiente escolar e consequentemente melhorar o desempenho na escrita e aprovação nos vestibulares.</Styled.Paragrafo>
            </Grid>
            <Styled.Subtitulo>Informações gerais e arquitetura</Styled.Subtitulo>
            <Styled.Paragrafo>O CRIA integra aprendizado de máquinas, aprendizado profundo, processamento de linguagem natural e comunicação web. Devido à complexidade das tecnologias utilizadas, foi construído usando micro-serviços, visando melhor performance e segurança para os usuários. Abaixo estão listados os subdomínios acessíveis da URL <Styled.Url>cria.net.br</Styled.Url>. </Styled.Paragrafo>
            <Styled.GridCards>
                <CardApis onClick={() => navigate('/autenticacao')} icon={<Styled.LoginIcon />} title="API Login & Gateway" url="https://api.cria.net.br/api/v1" description="API para login e gateway de correções." />
                <CardApis icon={<Styled.Comp1Icon />} title="Competência 1" url="https://apicompetenciaum.cria.net.br/api/v1" description="Norma culta da língua portuguesa, retorna desvios em ortografia, gramática, gerundismo, nomes próprios, uso de vírgula, gírias, entre outros." />
                <CardApis icon={<Styled.Comp2Icon />} title="Competência 2" url="https://apicompetenciadois.cria.net.br/api/v1" description="Estrutura do Gênero Textual e Adesão ao Tema." />
                <CardApis icon={<Styled.Comp3Icon />} title="Competência 3" url="https://apicompetenciatres.cria.net.br/api/v1" description="Avaliação de vocabulário, detecção de cópias de textos motivadores, modelos prontos e redações nota mil." />
                <CardApis icon={<Styled.Comp4Icon />} title="Competência 4" url="https://apicompetenciaquatro.cria.net.br/api/v1" description="Coerência e coesão, uso de conectivos, repetição de palavras e queísmo." />
                <CardApis icon={<Styled.Comp5Icon />} title="Competência 5" url="https://apicompetenciacinco.cria.net.br/api/v1" description="Identificação de termos impróprios que infringem os direitos humanos, identificação de intervenção e agentes da intervenção." />
                <CardApis icon={<Styled.NotasIcon />} title="Classificação de Notas" url="https://apinotas.cria.net.br/api/v1" description="Classificação de notas por competência do ENEM." />
                <CardApis icon={<Styled.IntroIcon />} title="Análise de Introdução" url="https://apianaliseintro.cria.net.br/api/v1" description="Análise de contexto, defesa de tese e retomada ao tema." />
                <CardApis icon={<Styled.HomonIcon />} title="Palavras Homófonas e Parônimas" url="https://apipalavrasambiguas.cria.net.br/api/v1" description="Classificação de emprego de termos homófonos e parônimos." />
                <CardApis icon={<Styled.UtilsIcon />} title="Utilidades" url="https://apiutilidades.cria.net.br/api/v1" description="Utilidades do sistema, extração e geração de PDFs com dados do sistema." />
            </Styled.GridCards>
        </Grid>
    )
}

