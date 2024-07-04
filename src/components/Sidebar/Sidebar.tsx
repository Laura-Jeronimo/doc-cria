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
                    <Styled.GridLista onClick={handleComp1Click}>
                        <Styled.ItemListaTexto
                            isActive={false}
                            onClick={() => navigate("/competencia-um")}
                            primary="Competência 1" />
                        {openComp1 ? (
                            <Styled.IconeAbrir />
                        ) : (
                            <Styled.IconeFechar />
                        )}
                    </Styled.GridLista>
                    <Styled.CollapseItens in={openComp1} timeout="auto" unmountOnExit>
                        
                    </Styled.CollapseItens>
                    <Styled.GridLista onClick={handleComp1Click}>
                        <Styled.ItemListaTexto
                            isActive={false}
                            onClick={() => navigate("/competencia-dois")}
                            primary="Competência 2" />
                        {openComp1 ? (
                            <Styled.IconeAbrir />
                        ) : (
                            <Styled.IconeFechar />
                        )}
                    </Styled.GridLista>
                    <Styled.CollapseItens in={openComp1} timeout="auto" unmountOnExit>
                        
                    </Styled.CollapseItens>
                    <Styled.GridLista onClick={handleComp1Click}>
                        <Styled.ItemListaTexto
                            isActive={false}
                            onClick={() => navigate("/competencia-tres")}
                            primary="Competência 3" />
                        {openComp1 ? (
                            <Styled.IconeAbrir />
                        ) : (
                            <Styled.IconeFechar />
                        )}
                    </Styled.GridLista>
                    <Styled.CollapseItens in={openComp1} timeout="auto" unmountOnExit>
                        
                    </Styled.CollapseItens>
                    <Styled.GridLista onClick={handleComp1Click}>
                        <Styled.ItemListaTexto
                            isActive={false}
                            onClick={() => navigate("/competencia-quatro")}
                            primary="Competência 4" />
                        {openComp1 ? (
                            <Styled.IconeAbrir />
                        ) : (
                            <Styled.IconeFechar />
                        )}
                    </Styled.GridLista>
                    <Styled.CollapseItens in={openComp1} timeout="auto" unmountOnExit>
                        
                    </Styled.CollapseItens>
                    <Styled.GridLista onClick={handleComp1Click}>
                        <Styled.ItemListaTexto
                            isActive={false}
                            onClick={() => navigate("/competencia-cinco")}
                            primary="Competência 5" />
                        {openComp1 ? (
                            <Styled.IconeAbrir />
                        ) : (
                            <Styled.IconeFechar />
                        )}
                    </Styled.GridLista>
                    <Styled.CollapseItens in={openComp1} timeout="auto" unmountOnExit>
                        
                    </Styled.CollapseItens>
                    <Styled.GridLista onClick={handleComp1Click}>
                        <Styled.ItemListaTexto
                            isActive={false}
                            primary="Notas" />
                        {openComp1 ? (
                            <Styled.IconeAbrir />
                        ) : (
                            <Styled.IconeFechar />
                        )}
                    </Styled.GridLista>
                    <Styled.CollapseItens in={openComp1} timeout="auto" unmountOnExit>
                        
                    </Styled.CollapseItens>
                    <Styled.GridLista onClick={handleComp1Click}>
                        <Styled.ItemListaTexto
                            isActive={false}
                            primary="Análise de introdução" />
                        {openComp1 ? (
                            <Styled.IconeAbrir />
                        ) : (
                            <Styled.IconeFechar />
                        )}
                    </Styled.GridLista>
                    <Styled.CollapseItens in={openComp1} timeout="auto" unmountOnExit>
                        
                    </Styled.CollapseItens>
                    <Styled.GridLista onClick={handleComp1Click}>
                        <Styled.ItemListaTexto
                            isActive={false}
                            primary="Homônimas e parônimas" />
                        {openComp1 ? (
                            <Styled.IconeAbrir />
                        ) : (
                            <Styled.IconeFechar />
                        )}
                    </Styled.GridLista>
                    <Styled.CollapseItens in={openComp1} timeout="auto" unmountOnExit>
                        
                    </Styled.CollapseItens>
                    <Styled.GridLista onClick={handleComp1Click}>
                        <Styled.ItemListaTexto
                            isActive={false}
                            primary="Utilidades" />
                        {openComp1 ? (
                            <Styled.IconeAbrir />
                        ) : (
                            <Styled.IconeFechar />
                        )}
                    </Styled.GridLista>
                    <Styled.CollapseItens in={openComp1} timeout="auto" unmountOnExit>
                        
                    </Styled.CollapseItens>
                </Styled.SidebarWrapper>
            }
        </>
    )
}