import { Grid, Stack, Typography, styled } from "@mui/material";


export const Footer = styled("footer")(({ theme }) => ({
    alignItems: "center",
    paddingTop: theme.spacing(2),
    justifyContent: 'center',
    paddingBottom: theme.spacing(2),
    marginLeft: 'auto',
    marginRight: 'auto',
    display: "flex",
    width: "100%",
    background: theme.palette.secondary.dark,
    marginTop: theme.spacing(2),
    gap: theme.spacing(2)

}))

export const Icons = styled(Grid)(({ theme }) => ({
    display: "flex",
    gap: theme.spacing(0.6),
}))

export const GridLogo = styled(Stack)(({ theme }) => ({
    alignItems: 'flex-start',
    gap: theme.spacing(1),
    marginLeft: "4%",
}))

export const LogoImagem = styled("img")(({ theme }) => ({
    width: theme.spacing(8),
}));

export const Infos = styled(Stack)(({theme}) => ({
    gap:theme.spacing(0.4)
}));

export const Titulo = styled(Typography)(({theme}) => ({
    fontWeight: 600,
    fontSize: theme.spacing(1.3),
    color: theme.palette.primary.contrastText
}));

export const Paragrafo = styled(Typography)(({theme}) => ({
    paddingRight: theme.spacing(1),
    fontSize: theme.spacing(1),
    fontWeight: 400,
    textAlign: 'justify',
    color: theme.palette.primary.contrastText
}));

