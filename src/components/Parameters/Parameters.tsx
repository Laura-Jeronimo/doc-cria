import { Chip, Divider, Grid, Typography } from "@mui/material"
import * as Styled from './Parameters.styled'
import { ParametersProps } from "./Parameters.types"

export const Parameters = ({ parameter, type, description }: ParametersProps) => {
    return (
        <>
            <Styled.GridParameter>
                <Grid>
                    <Styled.Parameter>{parameter}</Styled.Parameter>
                    {type && <Styled.Type>{type}</Styled.Type>}
                </Grid>
                <Styled.Descricao>{description}</Styled.Descricao>
            </Styled.GridParameter>
        </>
    )
}