import * as Styled from "./Card.styled";
import { CardInterfaceProps } from "./Card.types";

export function Card({ children, ...rest }: CardInterfaceProps) {
    return (
        <Styled.StyledCard {...rest}>
            {children}
        </Styled.StyledCard>);
}