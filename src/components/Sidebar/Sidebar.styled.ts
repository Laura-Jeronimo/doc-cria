import { styled } from "@mui/material/styles";
import { Collapse, Grid, ListItemIcon, ListItemText } from "@mui/material";
import { SubMenuProps } from "./Sidebar.types";
import { MdKeyboardArrowDown, MdKeyboardArrowUp, MdAccountBalance } from "react-icons/md";

export const SidebarWrapper = styled("div")(({ theme }) => ({
    transition: "all 0.3s",
    position: "relative",
    width: "22%",
    marginTop: theme.spacing(5),
    background: theme.palette.secondary.contrastText,
    "&::after": {
        content: '""',
        position: "absolute",
        top: 0,
        right: 0,
        bottom: 0,
        width: theme.spacing(0.25),
        boxShadow: `${theme.spacing(0.1875)} 0px ${theme.spacing(0.1875)} #0000001a`,
    },
}));    

export const IconeFechar = styled(MdKeyboardArrowDown)(({ theme }) => ({
    cursor: "pointer",
    color: theme.palette.grey[500]
}));

export const IconeAbrir = styled(MdKeyboardArrowUp)(({ theme }) => ({
    cursor: "pointer",
    color: theme.palette.grey[500]
}));

export const ItemListaTexto = styled(ListItemText)<SubMenuProps>(({ theme, isActive }) => ({
    display: "flex",
    alignItems: "center",
    position: "relative",
    left: theme.spacing(0.2),

    "& .css-1tfeiaa-MuiTypography-root": {
        color: isActive ? theme.palette.grey[700] : theme.palette.grey[500],
        fontSize: theme.spacing(0.938),
        fontWeight: isActive ? 600 : 500,
        cursor: "pointer",
    },
    "&::before": {
        content: '""',
        position: "absolute",
        top: "50%",
        transform: "translateY(-50%)",
        height: theme.spacing(3.438),
        width: isActive ? theme.spacing(0.125) : 0,
        background: theme.palette.grey[700],
        right: theme.spacing(-0.438)
    },
}));

export const GridLista = styled(Grid)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    padding: `${theme.spacing(0.625)} ${theme.spacing(0.625)} ${theme.spacing(0.625)} ${theme.spacing(0.625)}`,
}));

export const CollapseItens = styled(Collapse)(({ theme }) => ({
    paddingLeft: theme.spacing(1.5)
}));