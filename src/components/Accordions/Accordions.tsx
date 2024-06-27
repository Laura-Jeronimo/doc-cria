import { AccordionsProps } from "./Accordions.types";
import * as Styled from './Accordions.styled'
import { ExpandMore } from "@mui/icons-material";
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";

export const Accordions = ({ responses }: AccordionsProps) => {
    return (
        <>
            <Styled.Title>Responses</Styled.Title>
            <Styled.DivAccordions>
                {responses.map((item) => (
                    <Styled.ResponseAccordion>
                        <Styled.ResponseSummary expandIcon={item.details ? <ExpandMore /> : ""}>
                            <div>
                                <Styled.StatusIcon response={item.response} /> {item.response} <br />
                                <Styled.Response>{item.description}</Styled.Response>
                            </div>
                        </Styled.ResponseSummary>
                        {item.details &&
                            <Styled.ResponseDetails>
                                <SyntaxHighlighter>
                                    {item.details}
                                </SyntaxHighlighter>
                            </Styled.ResponseDetails>
                        }
                    </Styled.ResponseAccordion>
                ))}
            </Styled.DivAccordions>
        </>

    )
}