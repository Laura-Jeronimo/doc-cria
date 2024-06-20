import { Grid, Typography, styled } from "@mui/material";


export const GridParameter = styled(Grid)(({theme}) => ({
    margin: theme.spacing(1),
}));

export const GridType = styled(Grid)(({theme}) => ({
    display: 'flex',
    alignItems: 'center'
}));

export const Type = styled(Typography)(({theme}) => ({
    marginLeft: theme.spacing(0.5),
    color: theme.palette.grey[500],
    fontWeight: 500,
    fontSize: theme.spacing(0.8)
}));

export const Descricao = styled(Typography)(({theme}) => ({
    margin: theme.spacing(0.5)
}));
