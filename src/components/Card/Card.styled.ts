import { Card as CardMui } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledCard = styled(CardMui)(({ theme }) => ({
    borderRadius: theme.spacing(2),
    boxShadow: 'rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 0px',
    border: `${theme.spacing(0.02)} solid ${theme.palette.grey[300]}`,
    padding: theme.spacing(2),
    margin: theme.spacing(0.5),
    [theme.breakpoints.down('sm')]: {
        width: "100%"
    }
}));
