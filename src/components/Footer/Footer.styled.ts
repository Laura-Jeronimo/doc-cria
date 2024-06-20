import { Grid, Stack, styled } from "@mui/material";


export const Footer = styled("footer")(({ theme }) => ({
    height: theme.spacing(8),
    alignItems: "center",
    // justifyContent: "center",
    display: "flex",
    width: "100%",
    background: theme.palette.secondary.light

}))

export const Icons = styled(Grid)(({ theme }) => ({
    display: "flex",
    gap: theme.spacing(1),
    color: 'red',
}))

export const GridLogo = styled(Stack)(({ theme }) => ({
    alignItems: 'center',
    gap: theme.spacing(2),
}))

export const LogoImagem = styled("img")(({ theme }) => ({
    width: theme.spacing(8),
}));

