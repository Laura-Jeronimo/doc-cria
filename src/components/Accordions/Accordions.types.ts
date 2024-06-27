
export interface Response {
    response: number;
    description: string;
    details?: string;
}

export interface AccordionsProps {
    responses: Response[];
}