import { Grid, Typography, styled } from "@mui/material";


export const GridParameter = styled(Grid)(({ theme }) => ({
    marginTop: theme.spacing(0.5),
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: theme.spacing(0.6),
    border: `1px solid ${theme.palette.grey[400]}`,
    padding: theme.spacing(0.5)
}));

export const Parameter = styled(Typography)(({ theme }) => ({
    fontWeight: 500,
}))

export const Type = styled(Typography)(({ theme }) => ({
    color: theme.palette.grey[500],
    fontWeight: 500,
    fontSize: theme.spacing(0.8)
}));

export const Descricao = styled(Typography)(({ theme }) => ({
    textAlign: 'right',
    marginLeft: theme.spacing(1)
}));

export const ParameterTitle = styled(Typography)(({ theme }) => ({
    fontWeight: 600,
    color: theme.palette.grey[800],
    marginTop: theme.spacing(2),
}));