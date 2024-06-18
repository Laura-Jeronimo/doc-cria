import { LayoutProps } from "./Layout.types";
import * as Styled from './Layout.styled';
import { HeaderBar } from "components/HeaderBar";
import { Sidebar } from "components/Sidebar";

export function Layout({ children }: LayoutProps) {
    return (
        <Styled.StyledLayoutContainer>
            <HeaderBar />
            <Sidebar />
            {children}
        </Styled.StyledLayoutContainer>
    );
}