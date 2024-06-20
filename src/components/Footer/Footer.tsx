import Logo from "assets/Logo/LogoExtenso.svg"
import *  as Styled from "./Footer.styled"
import { BiLogoInstagram, BiLogoLinkedin, BiLogoTiktok, BiLogoTwitter } from "react-icons/bi";
export const Footer = () => {
    return (
        <Styled.Footer>
            <Styled.GridLogo>
                <Styled.LogoImagem src={Logo} />
                <Styled.Icons>
                    <BiLogoInstagram className="icon" size={22} href="https://www.instagram.com/cria.redacao/?utm_source=site&utm_medium=rodape" />
                    <BiLogoTwitter className="icon" size={22} href="https://twitter.com/criaredacao/?utm_source=site&utm_medium=rodape" />
                    <BiLogoTiktok className="icon" size={22} href="https://www.tiktok.com/@cria.redacao/?utm_source=site&utm_medium=rodape" />
                    <BiLogoLinkedin className="icon" size={22} href="https://www.linkedin.com/company/cria-redacao/" />
                </Styled.Icons>
            </Styled.GridLogo>
        </Styled.Footer >
    )
}