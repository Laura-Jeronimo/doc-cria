import { Grid } from "@mui/material"
import * as Styled from './Autenticacao.styled'
import { Endpoint } from "components/Endpoint"

export const Autenticacao = () => {

    const authHeaders = [
        { parameter: "Accept", description: "application/json" },
        { parameter: "Authorization", description: "seu_token" }
    ];

    const responsesLogin = [
        {
            response: 200,
            description: "Login bem sucedido.",
            details: `{
  "access_token": "Token a ser utilizado." ,
  "expires_in": Tempo de validade em segundos. [int],
  "message": "Logado com sucesso",
  "status": "success ",
  "token_type": "bearer"
}
`       },
        {
            response: 400,
            description: "Erro em validação de dados."
        },
        {
            response: 401,
            description: "Username ou senha não combinam."
        },
        {
            response: 500,
            description: "Internal server error."
        },
    ];
    const responsesLogout = [
        {
            response: 200,
            description: "Log out realizado. O token não é mais válido.",
        },
        {
            response: 400,
            description: "Erro de Validação."
        },
        {
            response: 401,
            description: "Token invalidado."
        },
        {
            response: 500,
            description: "Internal server error."
        }
    ];
    const responsesUser = [
        {
            response: 200,
            description: "Atualmente o token é válido.",
            details: `{
  "username": "string",
  "cnpj": "string",
  "email": "string",
  "public_id": "string",
  "token_expires_in": "string"
}`
        },
        {
            response: 400,
            description: "Erro de validação."
        },
        {
            response: 401,
            description: "Token inválido."
        }
    ];

    return (
        <Grid>
            <Styled.Titulo>Informações Gerais de Autenticação</Styled.Titulo>
            <Styled.Paragrafo>Todas as APIs respondem ao processo de autenticação contido na API de Login <Styled.Url>https://api.cria.net.br/api/v1</Styled.Url>. O método de login <Styled.Url>https://api.cria.net.br/api/v1/auth/login</Styled.Url> funciona via JWT e espera receber um conteúdo do tipo x-www-form-urlencoded contendo usuário e senha para retornar um objeto JSON contendo um token de autenticação. Cada token emitido possui validade de 15 minutos. Após este período, é necessário repetir o login. Recomendamos que suas requisições possuam condições para recuperar o token de acesso a cada vez que algum método responder com código 403. O token pode ser invalidado a qualquer momento utilizando o método de logout. Para recuperar ou obter credenciais, entre em contato com suporte@cria.net.br ou diretamente com um administrador do sistema.</Styled.Paragrafo>

            <Endpoint
                method="post"
                url="https://api.cria.net.br/api/v1/auth/login"
                name="Login"
                description="Autentica um usuário já registrado."
                headers={[
                    { parameter: "Accept", description: "application/json" },
                    { parameter: "Content-Type", description: "application/x-www-form-urlencoded" }
                ]}
                parameters={[
                    { parameter: "Username", type: "string", description: "Seu nome de usuário." },
                    { parameter: "Password", type: "string", description: "Sua senha." }
                ]}
                responses={responsesLogin}
            />

            <Endpoint
                method="post"
                url="https://api.cria.net.br/api/v1/auth/logout"
                name="Logout"
                description="Desativa o token utilizado na requisição."
                headers={authHeaders}
                responses={responsesLogout}
            />

            <Endpoint
                method="get"
                url="https://api.cria.net.br/api/v1/auth/user"
                name="Detalhes do usuário autenticado"
                description="Recupera informações do usuário autenticado."
                headers={authHeaders}
                responses={responsesUser}
            />

        </Grid>
    )
}