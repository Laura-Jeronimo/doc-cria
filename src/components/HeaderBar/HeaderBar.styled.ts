import { styled, alpha, AppBar, Toolbar, Grid, InputBase, Select } from "@mui/material";

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
        width: theme.spacing(5)
    },
}));
