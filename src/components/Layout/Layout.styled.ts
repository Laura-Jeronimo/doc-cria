import { styled, Box, Container } from "@mui/material";

export const StyledLayoutContainer = styled(Box)(({ theme }) => ({
    height: "100%",
    width: "100%",
    margin: 0,
    padding: 0,
    overflowY: "auto",
    background: "#ffffff",
}));

export const wrapperContainer = styled(Container)(({ theme }) => ({
    height: '100%',
    width: '100% !important',
    margin: '0',
    padding: '0',
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '100% !important',
    paddingLeft: '0 !important',
    paddingRight: '0 !important',

    '&:_content': {
        width: '100%',
        overflowY: 'auto',
    },
}));


export const wrapperMainDiv = styled('div')(({ theme }) => ({
    display: 'flex',
    height: '100% !important',

}));

export const wrapper_Footer = styled('div')({
    overflowX: 'hidden',
    flexBasis: "100%",

})
export const wrapper_contentDiv = styled('div')({
    overflowX: 'hidden',
    marginTop: '90px',
    flexBasis: "100%",
    paddingRight: "4%",
    paddingLeft: "4%",

    ['@media (min-width: 1200px)']: {
        width: '100%',
        display: 'block',
    },
})