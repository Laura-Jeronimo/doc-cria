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
                </Styled.Lista>
            </Styled.Drawer>
        </Drawer>
    )
} 