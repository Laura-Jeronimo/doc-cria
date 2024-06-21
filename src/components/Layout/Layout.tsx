import { LayoutProps } from "./Layout.types";
import * as Styled from './Layout.styled';
import { HeaderBar } from "components/HeaderBar";
import { Sidebar } from "components/Sidebar";
import { useScreenSize } from "utils/useScreenSize";
import { Footer } from "components/Footer";

export function Layout({ children }: LayoutProps) {

    const { isLargeScreen } = useScreenSize()

    return (
        <>
            <Styled.wrapperContainer>
                <HeaderBar />
                <Styled.wrapperMainDiv>
                    {isLargeScreen && <Sidebar />}
                    <Styled.wrapper_Footer>
                        <Styled.wrapper_contentDiv>
                            {children}
                        </Styled.wrapper_contentDiv>
                        <Footer />
                    </Styled.wrapper_Footer>
                </Styled.wrapperMainDiv>
            </Styled.wrapperContainer>
        </>
    );
}