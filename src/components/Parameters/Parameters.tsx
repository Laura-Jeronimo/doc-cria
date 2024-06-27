import { Grid } from "@mui/material"
import * as Styled from './Parameters.styled'
import { Parameter, ParametersProps } from "./Parameters.types"

export const Parameters = ({ parameters, title }: ParametersProps) => {
    return (
        <>
            <Styled.ParameterTitle>{title}</Styled.ParameterTitle>
            {parameters.map((parameter: Parameter) => (
                <Styled.GridParameter>

                    <Grid>
                        <Styled.Parameter>{parameter.parameter}</Styled.Parameter>
                        {parameter.type && <Styled.Type>{parameter.type}</Styled.Type>}
                    </Grid>
                    <Styled.Descricao>{parameter.description}</Styled.Descricao>
                </Styled.GridParameter>
            ))} 
        </>
    )
}