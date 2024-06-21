import Logo from "assets/Logo/LogoExtenso.svg"
import *  as Styled from "./Footer.styled"
import { BiLogoInstagram, BiLogoLinkedin, BiLogoTiktok, BiLogoTwitter } from "react-icons/bi";
import * as Color from "@mui/material/colors";
import { Link, Typography } from "@mui/material";
export const Footer = () => {
    return (
        <Styled.Footer>
            <Styled.GridLogo>
                <Styled.LogoImagem src={Logo} />
                <Styled.Icons>
                    <BiLogoInstagram style={{
                        background: 'linear-gradient(to top right, #833ab4, #fd1d1d, #fcb045)',
                        borderRadius: '50%',
                        padding: '4px',
                        color: 'white',
                        fontSize: '32px',
                    }} href="https://www.instagram.com/cria.redacao/?utm_source=site&utm_medium=rodape" />
                    <BiLogoTwitter style={{
                        background: Color.blue[800],
                        borderRadius: '50%',
                        padding: '4px',
                        color: 'white',
                        fontSize: '32px',
                    }} href="https://twitter.com/criaredacao/?utm_source=site&utm_medium=rodape" />
                    <BiLogoTiktok style={{
                        background: Color.grey[900],
                        borderRadius: '50%',
                        padding: '4px',
                        color: 'white',
                        fontSize: '32px',
                    }} href="https://www.tiktok.com/@cria.redacao/?utm_source=site&utm_medium=rodape" />
                    <BiLogoLinkedin style={{
                        background: Color.blue[500],
                        borderRadius: '50%',
                        padding: '4px',
                        color: 'white',
                        fontSize: '32px',
                    }} href="https://www.linkedin.com/company/cria-redacao/" />
                </Styled.Icons>
            </Styled.GridLogo>
            <Styled.Infos>
                <Styled.Titulo>Informações de contato</Styled.Titulo>
                <Styled.Paragrafo>Para maiores informações, entre em contato através do e-mail: <Link href="mailto:suporte@cria.net.br">suporte@cria.net.br</Link></Styled.Paragrafo>
            </Styled.Infos>
        </Styled.Footer >
    )
}