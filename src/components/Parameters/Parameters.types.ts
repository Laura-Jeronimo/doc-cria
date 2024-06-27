
export interface Parameter {
    parameter: string;
    type?: string;
    description: string;
}

export interface ParametersProps {
    parameters: Parameter[], 
    title: string;
}