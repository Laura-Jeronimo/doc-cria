import { Box } from "@mui/material"
import * as Styled from "./HeaderBar.styled"
import Logo from "assets/Logo/LogoExtenso.svg"
import { useNavigate } from "react-router-dom"
import { SearchBar } from "components/SearchBar"
import { useState } from "react"
import { HeaderMobile } from "./HeaderMobile/HeaderMobile"

export const HeaderBar = () => {

    const navigate = useNavigate();

    const [search, setSearch] = useState('');

    const [drawerAbrir, setDrawerAbrir] = useState(false);

    const toggleDrawer = (open: boolean) =>
        (event: React.KeyboardEvent | React.MouseEvent) => {
            if (
                event.type === 'keydown' &&
                ((event as React.KeyboardEvent).key === 'Tab' ||
                    (event as React.KeyboardEvent).key === 'Shift')
            ) {
                return;
            }

            setDrawerAbrir(open);
        };

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


                    <Styled.GridValidacaoTela container responsivo>
                        <Styled.LogoImagem onClick={() => navigate("/")} src={Logo} />
                        <Styled.Icon
                            size="large"
                            aria-label="show more"
                            aria-controls="teste"
                            aria-haspopup="true"
                            onClick={toggleDrawer(!drawerAbrir)}
                            color="inherit"

                        >
                            <Styled.IconResponsivo />
                        </Styled.Icon>

                        <HeaderMobile isOpen={drawerAbrir} toggleDrawer={toggleDrawer} />
                    </Styled.GridValidacaoTela>
                </Styled.MenuContent>
            </Styled.Appbar>
        </Box>
    )
}