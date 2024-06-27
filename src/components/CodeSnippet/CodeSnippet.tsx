import { Tabs } from '@mui/material';
import { useState } from 'react';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { CodeSnippetProps } from './CodeSnippet.types';
import * as Styled from './CodeSnippet.styled'

export const CodeSnippet = ({ snippets }: CodeSnippetProps) => {

    const [selectedLanguage, setSelectedLanguage] = useState(snippets[0].language);

    const handleTabClick = (event: React.ChangeEvent<{}>, language: string) => {
        setSelectedLanguage(language);
      };

    const selectedSnippet = snippets.find(snippet => snippet.language === selectedLanguage);

    return (
        <Styled.StyledDiv>
            <Tabs
                value={selectedLanguage}
                onChange={handleTabClick}
                variant="scrollable"
                scrollButtons     
                allowScrollButtonsMobile         
                indicatorColor="secondary"
                textColor="secondary"
            >
                {snippets.map((snippet) => (
                    <Styled.TabLanguage
                        key={snippet.language}
                        value={snippet.language}
                        label={snippet.label}
                        active={selectedLanguage === snippet.language}
                    />
                ))}
            </Tabs>
            {selectedSnippet && (
                <Styled.StyledSyntaxHighlighter language={selectedSnippet.language} style={vscDarkPlus}>
                    {selectedSnippet.code}
                </Styled.StyledSyntaxHighlighter>
            )}
        </Styled.StyledDiv>
    )   
}