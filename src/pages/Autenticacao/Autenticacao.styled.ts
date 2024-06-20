import { Grid, Typography, styled } from "@mui/material";

export const Titulo = styled(Typography)(({theme}) => ({
    fontWeight: 600,
    fontSize: theme.spacing(1.8),
    marginTop: theme.spacing(2),
}));

export const Paragrafo = styled(Typography)(({theme}) => ({
    paddingRight: theme.spacing(2),
    textAlign: 'justify',
}));

export const Url = styled('a')(({theme}) => ({
    color: theme.palette.primary.dark,
    fontWeight: 500
}));

export const GridEndpoint = styled(Grid)(({theme}) => ({
    marginTop: theme.spacing(2),
    width: '100%',
}));

export const ParameterTitle = styled(Typography)(({theme}) => ({
    fontWeight: 700,
    marginTop: theme.spacing(2),
}))