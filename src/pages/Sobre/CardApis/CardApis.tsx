import { CardApisProps } from "./CardApis.types";
import * as Styled from './CardApis.styled';
import { Grid } from "@mui/material";

export const CardApis = ({ icon, title, url, description, ...rest}: CardApisProps) => {

    return (
        <Grid item lg={5.9} xl={5.9} md={12} sm={12} xs={12}>
            <Styled.CardApis {...rest}>
            {icon}
            <Styled.TituloCard>{title}</Styled.TituloCard>
            <Styled.UrlCard>{url}</Styled.UrlCard>
            <Styled.Descricao>{description}</Styled.Descricao>
        </Styled.CardApis>
        </Grid>
    )

}