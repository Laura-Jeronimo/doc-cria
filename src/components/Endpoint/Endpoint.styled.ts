import { styled, Grid, Divider } from "@mui/material";


export const GridEndpoint = styled(Grid)(({ theme }) => ({
    marginTop: theme.spacing(2),
    width: '100%',
    [theme.breakpoints.up('md')]: {
        display: 'flex',
        justifyContent: 'space-between'
    } 
}));

export const GridInfos = styled(Grid)(({theme}) => ({
    width: '100%',
    marginRight: theme.spacing(2)
}))

export const Divisor = styled(Divider)(({theme}) => ({
    width: '99%',
    marginTop: theme.spacing(2),
}));