import { Collapse, Typography, styled } from "@mui/material"

export const SidebarWrapper = styled("div")(({ theme }) => ({
    transition: "all 0.3s",
    position: "fixed",
    width: "18%",
    height: "100%",
    marginTop: theme.spacing(5),
    background: theme.palette.secondary.dark,
    color: theme.palette.secondary.contrastText,
    "&::after": {
        content: '""',
        position: "absolute",
        top: 0,
        right: 0,
        bottom: 0,
        width: theme.spacing(0.25),
        boxShadow: `${theme.spacing(0.1875)} 0px ${theme.spacing(0.1875)} #0000001a`,
    },
}));

export const CollapseItem = styled(Collapse)(({theme}) => ({
    paddingLeft:theme.spacing(1.5),
}))

export const Item = styled(Typography)(({theme}) => ({
    paddingLeft:theme.spacing(2),
    paddinTop: theme.spacing(2)
}))