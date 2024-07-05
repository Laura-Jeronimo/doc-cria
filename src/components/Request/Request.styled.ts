import { Divider, Grid, Typography, alpha, styled } from "@mui/material";
import { MethodProps } from "./Request.types";

export const GridRequest = styled(Grid)({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
});

export const Method = styled('div')<MethodProps>(({ theme, method }) => ({
    ... (method === "post") && {
        backgroundColor: theme.palette.success.main,
        border: `solid 1px ${theme.palette.success.dark}`,
    },
    ... (method === "get") && {
        backgroundColor: alpha(theme.palette.info.main, 0.7),
        border: `solid 1px ${theme.palette.info.main}`,
    },
    padding: theme.spacing(0.2),
    fontWeight: 500,
    borderRadius: theme.spacing(0.3),
    fontSize: theme.spacing(0.6),
    color: theme.palette.primary.contrastText,
}));

export const Endpoint = styled(Typography)(({ theme }) => ({
    fontSize: theme.spacing(0.775),
    color: theme.palette.grey[700],
    fontWeight: 500,
    marginLeft: theme.spacing(0.3),
}));

export const Divisor = styled(Divider)(({ theme }) => ({
    marginRight: theme.spacing(2),
    marginBottom: theme.spacing(1)
}))

export const MethodName = styled(Typography)(({ theme }) => ({
    fontWeight: 800,
    fontSize: theme.spacing(1.5),
}));

export const Descricao = styled(Typography)(({ theme }) => ({
    color: theme.palette.grey[500],
    marginTop: theme.spacing(0.2)
}));

export const EndpointSwagger = styled('div')<MethodProps>(({theme, method}) => ({
    ... (method === 'get') && {
        background: theme.palette.info.light,
    },
    ... (method === 'post') && {
        background: theme.palette.success.light,
    },
    display: 'flex',
    alignItems: 'center',
    borderRadius: theme.spacing(0.3),
    padding: theme.spacing(0.3)
}))