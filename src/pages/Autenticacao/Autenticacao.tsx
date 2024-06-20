import { Grid, Typography } from "@mui/material"
import * as Styled from './Autenticacao.styled'
import { Request } from "components/Request"
import { Parameters } from "components/Parameters"

export const Autenticacao = () => {
    return (
        <Grid container>
            <Styled.Titulo>Informações Gerais de Autenticação</Styled.Titulo>
            <Styled.Paragrafo>Todas as APIs respondem ao processo de autenticação contido na API de Login <Styled.Url>https://api.cria.net.br/api/v1</Styled.Url>. O método de login <Styled.Url>https://api.cria.net.br/api/v1/auth/login</Styled.Url> funciona via JWT e espera receber um conteúdo do tipo x-www-form-urlencoded contendo usuário e senha para retornar um objeto JSON contendo um token de autenticação. Cada token emitido possui validade de 15 minutos. Após este período, é necessário repetir o login. Recomendamos que suas requisições possuam condições para recuperar o token de acesso a cada vez que algum método responder com código 403. O token pode ser invalidado a qualquer momento utilizando o método de logout. Para recuperar ou obter credenciais, entre em contato com suporte@cria.net.br ou diretamente com um administrador do sistema.</Styled.Paragrafo>
            <Styled.GridEndpoint>
                <Request method="post" endpoint="/auth/login" name="Login" description="Autentica um usuário já registrado." />
                <Styled.ParameterTitle>PARÂMETROS</Styled.ParameterTitle>
                <Parameters parameter="Username" type="string" description="Seu nome de usuário." />
                <Parameters parameter="Password" type="string" description="Sua senha." />
            </Styled.GridEndpoint>
        </Grid>
    )
}