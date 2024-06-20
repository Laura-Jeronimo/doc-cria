import { Chip, Grid, Typography } from "@mui/material"
import * as Styled from './Parameters.styled'
import { ParametersProps } from "./Parameters.types"

export const Parameters = ({ parameter, type, description }: ParametersProps) => {
    return (
        <>
            <Styled.GridParameter>
                <Styled.GridType>
                    <Chip label={parameter}/>
                    <Styled.Type>{type}</Styled.Type>
                </Styled.GridType>
                <Styled.Descricao>{description}</Styled.Descricao>
            </Styled.GridParameter>
        </>
    )
}