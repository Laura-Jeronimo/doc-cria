import { Typography, styled } from "@mui/material";
import { Card } from "components/Card";

export const CardApis = styled(Card)(({theme}) => ({
    cursor: 'pointer',
    width: '48%',
    "&: hover":{
        transform: 'translateY(-4px)',
        boxShadow: '0 4px 25px 0 rgba(0, 0, 0, 0.3), 0 0 1px 0 rgba(0, 0, 0, 0.25)'      
    }
}));

export const TituloCard = styled(Typography)(({theme}) => ({
    fontWeight: 700,
    margin: theme.spacing(0.1)
}));

export const UrlCard = styled(Typography)(({theme}) => ({
    fontSize: theme.spacing(0.725),
    textDecoration: 'underline'
}));

export const Descricao = styled(Typography)(({theme}) => ({
    marginTop: theme.spacing(2),
    textAlign: 'justify'
}));
