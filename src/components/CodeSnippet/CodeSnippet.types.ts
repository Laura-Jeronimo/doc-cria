import { Parameter } from "components/Parameters/Parameters.types";

// export interface Snippet {
//     language: string;
//     label: string;
//     code: string;
// }

// export interface CodeSnippetProps {
//     snippets: Snippet[]
// }

export interface CodeSnippetProps {
    url: string;
    method: string;
    headers: Parameter[]
    payload?: Parameter[]
}