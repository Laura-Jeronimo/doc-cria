import { Tab, alpha, styled, Stack } from "@mui/material";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

export const StyledDiv = styled('div')(({ theme }) => ({
    borderRadius: theme.spacing(1),
    background: alpha(theme.palette.grey[200], 0.4),
    boxShadow: 'rgba(0, 0, 0, 0.25) 0px 0px 32px 0px',
    padding: theme.spacing(2)
}));

export const GridCode = styled(Stack)(({ theme }) => ({
    justifyContent: 'flex-start',
    [theme.breakpoints.down('lg')]:{
        marginTop: theme.spacing(1)
    },
    [theme.breakpoints.up('md')]:{
        width: '50%',
        padding: theme.spacing(1),
    }
}));

export const TabLanguage = styled(Tab)<{ active: boolean }>(({ theme, active }) => ({
    ... (active) && {
        fontWeight: 'bold',
    }
}));

export const StyledSyntaxHighlighter = styled(SyntaxHighlighter)(({ theme }) => ({
    borderRadius: theme.spacing(1),
    '&::-webkit-scrollbar':{
        width: theme.spacing(1.5),
        height: theme.spacing(0.5)
    },
    '&::-webkit-scrollbar-track': {
        borderRadius: theme.spacing(1),
        background: theme.palette.grey[100],
        border: '1px solid #cacaca',
        boxShadow: 'inset 0 0 6px rgba(0, 0, 0, .3)'
    },
    '&::-webkit-scrollbar-thumb':{
        borderRadius: theme.spacing(1),
        background: theme.palette.grey[800]
    }
}));

