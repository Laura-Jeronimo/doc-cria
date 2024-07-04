import { EndpointProps } from "./Endpoint.types";
import * as Styled from './Endpoint.styled'
import { Grid, Typography } from "@mui/material";
import { Request } from "components/Request";
import { Parameters } from "components/Parameters";
import { Accordions } from "components/Accordions";
import { CodeSnippet } from "components/CodeSnippet";

export const Endpoint = ({ method, url, name, description, headers, parameters, responses, example }: EndpointProps) => {

    const endpoint = url.split('/').slice(-2).join('/')

    return (
        <>
            <Styled.Divisor />
            <Styled.GridEndpoint>
                <Styled.GridInfos>
                    <Request method={method} endpoint={endpoint} name={name} description={description} />
                    {example && <Styled.Example><b>Exemplo: </b>{example}</Styled.Example>}
                    {headers && <Parameters title="HEADERS" parameters={headers} />}
                    {parameters && <Parameters title="PARÂMETROS" parameters={parameters} />}
                    {responses && <Accordions responses={responses} />}
                </Styled.GridInfos>

                <CodeSnippet url={url} method={method} headers={headers} payload={parameters}/>
            </Styled.GridEndpoint>
        </>
    )
};