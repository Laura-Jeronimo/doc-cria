import { Accordion, AccordionDetails, AccordionSummary, Divider, Grid, Stack, Typography, alpha, styled } from "@mui/material";
import { FaCircle } from "react-icons/fa";

export const Titulo = styled(Typography)(({ theme }) => ({
    fontWeight: 600,
    fontSize: theme.spacing(1.8),
    marginTop: theme.spacing(2),
}));

export const Paragrafo = styled(Typography)(({ theme }) => ({
    textAlign: 'justify',
}));

export const Url = styled('a')(({ theme }) => ({
    color: theme.palette.primary.dark,
    fontWeight: 500
}));

export const GridEndpoint = styled(Grid)(({ theme }) => ({
    marginTop: theme.spacing(2),
    width: '100%',
    [theme.breakpoints.up('md')]: {
        display: 'flex',
        justifyContent: 'space-between'
    } 
}));

export const Divisor = styled(Divider)(({theme}) => ({
    width: '99%',
    marginTop: theme.spacing(1),
}));

export const ParameterTitle = styled(Typography)(({ theme }) => ({
    fontWeight: 600,
    color: theme.palette.grey[800],
    marginTop: theme.spacing(2),
}));

export const GridCode = styled(Stack)(({ theme }) => ({
    justifyContent: 'flex-start',
    padding: theme.spacing(1),
    [theme.breakpoints.up('md')]:{
        width: '52%'
    }
}));

export const ResponseAccordion = styled(Accordion)(({theme}) => ({
    background: alpha(theme.palette.grey[200], 0.4),
    border: `1px solid ${theme.palette.grey[300]}`,
}));

export const ResponseSummary = styled(AccordionSummary)(({theme}) => ({
    fontWeight: 700,
}));

export const ResponseDetails = styled(AccordionDetails)(({theme}) => ({
    fontWeight: 500,
    borderTop: `1px solid ${theme.palette.grey[300]}`,
}));

export const Response = styled(Typography)(({theme}) => ({
    fontSize: theme.spacing(0.8)
}));

export const StatusIcon = styled(FaCircle)(({theme}) => ({
    color: theme.palette.success.dark,
}));

export const StatusIconErro = styled(FaCircle)(({theme}) => ({
    color: theme.palette.error.dark,
}));