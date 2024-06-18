import { Box } from "@mui/material"
import * as Styled from "./HeaderBar.styled"
import Logo from "assets/Logo/LogoExtenso.svg"
import { useNavigate } from "react-router-dom"

export const HeaderBar = () => {

    const navigate = useNavigate();

    return (
        <Box>
            <Styled.Appbar>
                <Styled.MenuContent>
                    <Styled.GridValidacaoTela container responsivo={false}>
                        <Styled.GridFinal md={7} lg={5} xl={3}>
                            <Styled.LogoImagem onClick={() => navigate('/')} src={Logo} />
                        </Styled.GridFinal>
                    </Styled.GridValidacaoTela>
                </Styled.MenuContent>
            </Styled.Appbar>
        </Box>
    )
}