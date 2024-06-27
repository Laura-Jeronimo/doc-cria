import { RequestProps } from "./Request.types";
import * as Styled from './Request.styled'

export const Request = ({ method, endpoint, name, description }: RequestProps) => {

    return (
        <>
            <Styled.GridRequest>
                <Styled.MethodName>{name}</Styled.MethodName>
                <Styled.EndpointSwagger method={method}>
                    <Styled.Method method={method}>{method.toUpperCase()}</Styled.Method>
                    <Styled.Endpoint>{endpoint}</Styled.Endpoint>   
                </Styled.EndpointSwagger>
            </Styled.GridRequest>
            <Styled.Descricao>{description}</Styled.Descricao>
        </>
    )
}