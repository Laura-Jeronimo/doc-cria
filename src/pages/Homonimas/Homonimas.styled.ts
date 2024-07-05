import { Divider, Typography, styled } from "@mui/material";

export const Titulo = styled(Typography)(({ theme }) => ({
    fontWeight: 600,
    fontSize: theme.spacing(1.8),
    marginTop: theme.spacing(2),
}));

export const Paragrafo = styled(Typography)(({ theme }) => ({
    textAlign: 'justify',
}));

