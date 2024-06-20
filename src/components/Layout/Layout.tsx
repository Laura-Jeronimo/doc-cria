import { LayoutProps } from "./Layout.types";
import * as Styled from './Layout.styled';
import { HeaderBar } from "components/HeaderBar";
import { Sidebar } from "components/Sidebar";
import { useScreenSize } from "utils/useScreenSize";

export function Layout({ children }: LayoutProps) {

    const { isLargeScreen } = useScreenSize()

    return (
        <>

            <Styled.wrapperContainer>
                <HeaderBar />
                <Styled.wrapperMainDiv>
                    {isLargeScreen && <Sidebar />}
                    <Styled.wrapper_contentDiv>
                        {children}
                    </Styled.wrapper_contentDiv>
                </Styled.wrapperMainDiv>
            </Styled.wrapperContainer>
        </>
    );
}