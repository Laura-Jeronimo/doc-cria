import { InputBase, inputBaseClasses, styled, alpha } from "@mui/material";
import { RiSearchLine } from "react-icons/ri";

export const StyledInputText = styled(InputBase)(({ theme }) => ({
    backgroundColor: alpha(theme.palette.secondary.contrastText, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.secondary.contrastText, 0.25),
    },
    borderRadius: theme.spacing(20.375),
    padding: theme.spacing(0.625),
    height: theme.spacing(2.5),
    fontSize: theme.spacing(0.875),
    fontWeight: 600,
    width: "100%",
    [`&.${inputBaseClasses.focused}`]: {
        border: `${theme.spacing(0.02)} solid ${theme.palette.grey[300]}`,
    },
    [`&.${inputBaseClasses.error}`]: {
        border: `1px solid ${theme.palette.error.main}`,
        color: theme.palette.error.main,
    },
    color: theme.palette.secondary.contrastText
}));

export const SearchIcon = styled(RiSearchLine)(({ theme }) => ({
    color: theme.palette.secondary.contrastText,
    fontSize: theme.spacing(1.5),
    marginRight: theme.spacing(0.625),
}));
