import { CardProps } from "@mui/material";

export interface CardApisProps extends CardProps {
    icon: any;
    title: string;
    url: string;
    description: string;
}