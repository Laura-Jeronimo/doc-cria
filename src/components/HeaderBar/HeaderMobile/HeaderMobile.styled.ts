import { Box, Button, List, styled } from "@mui/material";

export const Drawer = styled(Box)(({ theme }) => ({
  width: "80vw",
  padding: "0.938rem",
  paddingTop: "1.563rem",
  [theme.breakpoints.between("sm", "md")]: {
    width: "40vw"
  },
  [theme.breakpoints.up("md")]: {
    width: "30vw"
  }
}));

export const ItemLista = styled(Button)(({ theme }) => ({
  fontSize: "1rem",
  color: theme.palette.grey[500],
  paddingBottom: "2rem"
}));

export const Lista = styled(List)({
  display: "flex",
  flexDirection: "column"
});