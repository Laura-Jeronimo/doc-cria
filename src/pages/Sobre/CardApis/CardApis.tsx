import { CardApisProps } from "./CardApis.types";
import * as Styled from './CardApis.styled';

export const CardApis = ({ icon, title, url, description, ...rest}: CardApisProps) => {

    return (
        <Styled.CardApis {...rest}>
            {icon}
            <Styled.TituloCard>{title}</Styled.TituloCard>
            <Styled.UrlCard>{url}</Styled.UrlCard>
            <Styled.Descricao>{description}</Styled.Descricao>
        </Styled.CardApis>
    )

}