import { Box, InputBase, Modal, Typography, styled } from "@mui/material";

export const MuiModal = styled(Modal)(({ theme }) => ({
    backdropFilter: "blur(10px)",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 3
}))

export const BoxSearch = styled('div')(({ theme }) => ({
    background: theme.palette.secondary.contrastText,
    padding: theme.spacing(1.25),
    boxShadow: `${theme.spacing(0)} ${theme.spacing(0)} ${theme.spacing(1.875)} rgba(0, 0, 0, 0.25)`,
    borderRadius: theme.spacing(1),
    overflowY: "auto",
    zIndex: 3,
    maxHeight: "90vh",
    [theme.breakpoints.up("lg")]: {
        width: '40%',
    },
    [theme.breakpoints.down("lg")]: {
        width: '80%',
    },
}))

export const StyledInput = styled(InputBase)(({ theme }) => ({
    padding: theme.spacing(0.5),
    marginTop: theme.spacing(1),
    borderRadius: theme.spacing(3),
    boxShadow: "rgba(0, 0, 0, 0.25) 0px 0px 16px 0px",
}))

export const TextSearch = styled(Typography)(({ theme }) => ({
    color: theme.palette.grey[700],
    fontSize: theme.spacing(1.115),
    fontWeight: 600
}))

export const DivResults = styled('div')(({ theme }) => ({
    padding: theme.spacing(0.5)
}))