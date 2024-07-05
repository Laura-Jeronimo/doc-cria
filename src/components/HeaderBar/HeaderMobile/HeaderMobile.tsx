import { Drawer, Typography } from '@mui/material';
import { HeaderMobileProps } from './HeaderMobile.types';
import * as Styled from './HeaderMobile.styled'
import { NavLink } from 'react-router-dom';

export const HeaderMobile = ({ isOpen, toggleDrawer }: HeaderMobileProps) => {
    return (
        <Drawer anchor='left' open={isOpen} onClose={toggleDrawer(false)}>
            <Styled.Drawer onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
                <Styled.Lista>
                    <NavLink to="/">
                        <Styled.ItemLista>
                            <Typography>Introdução</Typography>
                        </Styled.ItemLista>
                    </NavLink>
                    <NavLink to="/autenticacao">
                        <Styled.ItemLista>
                            <Typography>Autenticação</Typography>
                        </Styled.ItemLista>
                    </NavLink>
                    <NavLink to="/autenticacao">
                        <Styled.ItemLista>
                            <Typography>Autenticação</Typography>
                        </Styled.ItemLista>
                    </NavLink>
                    <NavLink to="/competencia-um">
                        <Styled.ItemLista>
                            <Typography>Competência um</Typography>
                        </Styled.ItemLista>
                    </NavLink>
                    <NavLink to="/competencia-dois">
                        <Styled.ItemLista>
                            <Typography>Competência dois</Typography>
                        </Styled.ItemLista>
                    </NavLink>
                    <NavLink to="/competencia-tres">
                        <Styled.ItemLista>
                            <Typography>Competência três</Typography>
                        </Styled.ItemLista>
                    </NavLink>
                    <NavLink to="/competencia-quatro">
                        <Styled.ItemLista>
                            <Typography>Competência quatro</Typography>
                        </Styled.ItemLista>
                    </NavLink>
                    <NavLink to="/competencia-cinco">
                        <Styled.ItemLista>
                            <Typography>Competência cinco</Typography>
                        </Styled.ItemLista>
                    </NavLink>
                    <NavLink to="/notas">
                        <Styled.ItemLista>
                            <Typography>Notas</Typography>
                        </Styled.ItemLista>
                    </NavLink>
                    <NavLink to="/analise-introducao">
                        <Styled.ItemLista>
                            <Typography>Análise de introdução</Typography>
                        </Styled.ItemLista>
                    </NavLink>
                    <NavLink to="/ambiguas">
                        <Styled.ItemLista>
                            <Typography>Homônimas e parônimas</Typography>
                        </Styled.ItemLista>
                    </NavLink>
                    <NavLink to="/utilidades">
                        <Styled.ItemLista>
                            <Typography>Utilidades</Typography>
                        </Styled.ItemLista>
                    </NavLink>

                </Styled.Lista>
            </Styled.Drawer>
        </Drawer>
    )
} 