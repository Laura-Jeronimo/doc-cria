import { Accordion, AccordionDetails, AccordionSummary, Typography, alpha, styled } from "@mui/material";
import { FaCircle } from "react-icons/fa";

export const DivAccordions = styled('div')(({theme}) => ({
    marginTop: theme.spacing(0.5)
}));

export const ResponseAccordion = styled(Accordion)(({theme}) => ({
    background: alpha(theme.palette.grey[200], 0.4),
    border: `1px solid ${theme.palette.grey[300]}`,
}));

export const ResponseSummary = styled(AccordionSummary)(({theme}) => ({
    fontWeight: 700,
}));

export const StatusIcon = styled(FaCircle)<{response: number}>(({theme, response}) => ({
    color: response === 200 ? theme.palette.success.dark : theme.palette.error.dark,
}));

export const Response = styled(Typography)(({theme}) => ({
    fontSize: theme.spacing(0.8)
}));

export const ResponseDetails = styled(AccordionDetails)(({theme}) => ({
    fontWeight: 500,
    borderTop: `1px solid ${theme.palette.grey[300]}`,
}));