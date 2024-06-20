import { Divider, Grid, Typography, alpha, styled } from "@mui/material";


export const GridRequest = styled(Grid)({
    display: 'flex',
    alignItems: 'center'
});

export const Method = styled('div')<{method: string}>(({theme, method}) => ({
    ... (method === "post") && {
        backgroundColor: alpha(theme.palette.success.main, 0.4),
        border: `solid 1px ${theme.palette.success.main}`,
    },
    ... (method === "get") && {
        backgroundColor: alpha(theme.palette.info.main, 0.4),
        border: `solid 1px ${theme.palette.info.main}`,
    },
    padding: theme.spacing(0.2),
    fontWeight: 600,
    marginTop: theme.spacing(0.5),
    marginBottom: theme.spacing(0.5),
    borderRadius: theme.spacing(0.3),
    fontSize: theme.spacing(0.6),
    color: theme.palette.grey[800],
}));

export const Endpoint = styled(Typography)(({theme}) => ({
    fontSize: theme.spacing(0.775),
    color: theme.palette.grey[600],
    fontWeight: 500,
    marginLeft: theme.spacing(0.3)
}));

export const Divisor = styled(Divider)(({theme}) => ({
    marginRight: theme.spacing(2)
}))

export const MethodName = styled(Typography)(({theme}) => ({
    fontWeight: 500,
    marginTop: theme.spacing(0.5),
    fontSize: theme.spacing(1.2),
}));

export const Descricao = styled(Typography)(({theme}) => ({
    color: theme.palette.grey[500],
}))