import { styled, alpha, AppBar, Toolbar, Grid, InputBase, Select, IconButton, inputBaseClasses } from "@mui/material";
import { RiMenuLine, RiSearchLine } from "react-icons/ri";

export const Appbar = styled(AppBar)(({ theme }) => ({
    display: "flex",
    background: theme.palette.secondary.dark,
    position: "fixed",
    zIndex: 2,
    height: theme.spacing(5),
    alignItems: "center",
    justifyContent: "center"
}));

export const MenuContent = styled(Toolbar)(() => ({
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    height: "100%"
}));

export const GridValidacaoTela = styled(Grid)<{ responsivo: boolean }>(({ theme, responsivo }) => ({
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
    ...(responsivo ? {
        display: "flex",
        [theme.breakpoints.up("lg")]: {
            display: "none"
        }
    } : {
        display: "none",
        [theme.breakpoints.up("lg")]: {
            display: "flex"
        }
    })
}));

export const GridCentro = styled(Grid)({
    display: "flex",
    alignItems: "center"
});

export const GridInicial = styled(GridCentro)({
    justifyContent: "space-between",
    position: "relative",
    height: "100%"
});

export const LogoImagem = styled("img")(({ theme }) => ({
    width: theme.spacing(10),
    [theme.breakpoints.down("md")]: {
        width: theme.spacing(6)
    },
}));

export const Icon = styled(IconButton)(({ theme }) => ({
    padding: "0",
    margin: "0",
    color: theme.palette.secondary.main,
}));

export const IconResponsivo = styled(RiMenuLine)({
    color: "white"
});

export const SearchBar = styled(InputBase)(({ theme }) => ({
    backgroundColor: alpha(theme.palette.secondary.contrastText, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.secondary.contrastText, 0.25),
    },
    borderRadius: theme.spacing(20.375),
    padding: theme.spacing(0.625),
    height: theme.spacing(2.5),
    fontSize: theme.spacing(0.875),
    fontWeight: 600,
    width: "100%",
    [`&.${inputBaseClasses.focused}`]: {
        border: `${theme.spacing(0.02)} solid ${theme.palette.grey[300]}`,
    },
    [`&.${inputBaseClasses.error}`]: {
        border: `1px solid ${theme.palette.error.main}`,
        color: theme.palette.error.main,
    },
    color: theme.palette.secondary.contrastText
}));

export const SearchIcon = styled(RiSearchLine)(({ theme }) => ({
    color: theme.palette.secondary.contrastText,
    fontSize: theme.spacing(1.5),
    marginRight: theme.spacing(0.625),
}));

export const GridSearchMenu = styled(Grid)({
    alignItems: 'center', 
    display: 'flex'
})