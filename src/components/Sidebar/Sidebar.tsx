import { useScreenSize } from "utils/useScreenSize"
import { Grid } from "@mui/material"
import * as Styled from "./Sidebar.styled"
import { useNavigate } from "react-router-dom"
import { useState } from "react"

export const Sidebar = () => {

    const { isLargeScreen } = useScreenSize()
    const navigate = useNavigate()

    const [openComp1, setOpenComp1] = useState(false);
    const handleComp1Click = () => {
        setOpenComp1(!openComp1);
    };

    return (
        <>
            {isLargeScreen &&
                <Styled.SidebarWrapper>
                    <Grid>
                        <Styled.GridLista >
                            <Styled.ItemListaTexto
                                isActive={location.pathname === "/"}
                                onClick={() => { navigate("/"); }}
                                primary="Introdução" />
                        </Styled.GridLista>
                    </Grid>
                    <Grid>
                        <Styled.GridLista >
                            <Styled.ItemListaTexto
                                isActive={location.pathname === "/autenticacao"}
                                onClick={() => { navigate("/autenticacao"); }}
                                primary="Autenticação" />
                        </Styled.GridLista>
                    </Grid>

                    <Grid>
                        <Styled.GridLista >
                            <Styled.ItemListaTexto
                                isActive={location.pathname === "/competencia-um"}
                                onClick={() => { navigate("/competencia-um"); }}
                                primary="Competência um" />
                        </Styled.GridLista>
                    </Grid>

                    <Grid>
                        <Styled.GridLista >
                            <Styled.ItemListaTexto
                                isActive={location.pathname === "/competencia-dois"}
                                onClick={() => { navigate("/competencia-dois"); }}
                                primary="Competência dois" />
                        </Styled.GridLista>
                    </Grid>

                    <Grid>
                        <Styled.GridLista >
                            <Styled.ItemListaTexto
                                isActive={location.pathname === "/competencia-tres"}
                                onClick={() => { navigate("/competencia-tres"); }}
                                primary="Competência três" />
                        </Styled.GridLista>
                    </Grid>

                    <Grid>
                        <Styled.GridLista >
                            <Styled.ItemListaTexto
                                isActive={location.pathname === "/competencia-quatro"}
                                onClick={() => { navigate("/competencia-quatro"); }}
                                primary="Competência quatro" />
                        </Styled.GridLista>
                    </Grid>

                    <Grid>
                        <Styled.GridLista >
                            <Styled.ItemListaTexto
                                isActive={location.pathname === "/competencia-cinco"}
                                onClick={() => { navigate("/competencia-cinco"); }}
                                primary="Competência cinco" />
                        </Styled.GridLista>
                    </Grid>

                    <Grid>
                        <Styled.GridLista >
                            <Styled.ItemListaTexto
                                isActive={location.pathname === "/notas"}
                                onClick={() => { navigate("/notas"); }}
                                primary="Notas" />
                        </Styled.GridLista>
                    </Grid>

                    <Grid>
                        <Styled.GridLista >
                            <Styled.ItemListaTexto
                                isActive={location.pathname === "/analise-introducao"}
                                onClick={() => { navigate("/analise-introducao"); }}
                                primary="Análise de Introdução" />
                        </Styled.GridLista>
                    </Grid>

                    <Grid>
                        <Styled.GridLista >
                            <Styled.ItemListaTexto
                                isActive={location.pathname === "/ambiguas"}
                                onClick={() => { navigate("/ambiguas"); }}
                                primary="Homônimas e parônimas" />
                        </Styled.GridLista>
                    </Grid>

                    <Grid>
                        <Styled.GridLista >
                            <Styled.ItemListaTexto
                                isActive={location.pathname === "/utilidades"}
                                onClick={() => { navigate("/utilidades"); }}
                                primary="Utilidades" />
                        </Styled.GridLista>
                    </Grid>
                </Styled.SidebarWrapper>
            }
        </>
    )
}