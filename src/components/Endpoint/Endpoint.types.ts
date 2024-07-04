import { Response } from "components/Accordions/Accordions.types";
// import { Snippet } from "components/CodeSnippet/CodeSnippet.types";
import { Parameter } from "components/Parameters/Parameters.types";

export interface EndpointProps {
    method: string,
    url: string,
    name: string,
    description: string,
    headers: Parameter[],
    parameters?: Parameter[],
    responses?: Response[],
    example?: string;
}

