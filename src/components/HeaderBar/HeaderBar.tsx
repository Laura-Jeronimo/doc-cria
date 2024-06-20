import { Box } from "@mui/material"
import * as Styled from "./HeaderBar.styled"
import Logo from "assets/Logo/LogoExtenso.svg"
import { useNavigate } from "react-router-dom"
import { SearchBar } from "components/SearchBar"
import { useState } from "react"

export const HeaderBar = () => {

    const navigate = useNavigate();

    const [search, setSearch] = useState('');

    return (
        <Box>
            <Styled.Appbar>
                <Styled.MenuContent>
                    <Styled.GridValidacaoTela container responsivo={false}>
                        <Styled.GridInicial item md={7} lg={5} xl={3}>
                            <Styled.LogoImagem onClick={() => navigate('/')} src={Logo} />
                        </Styled.GridInicial>
                        <Styled.GridInicial item md={5} lg={3} xl={2}>
                            <SearchBar value={search} setValue={setSearch} />
                        </Styled.GridInicial>
                    </Styled.GridValidacaoTela>
                </Styled.MenuContent>
            </Styled.Appbar>
        </Box>
    )
}