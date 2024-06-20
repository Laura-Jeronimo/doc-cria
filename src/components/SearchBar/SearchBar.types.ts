import { InputBaseProps } from "@mui/material";
import type { Dispatch, SetStateAction } from "react";

export interface SearchBarProps extends InputBaseProps {
    value: string;
    setValue: Dispatch<SetStateAction<string>>;
    iconVariant?: "primary" | "grey";
}
