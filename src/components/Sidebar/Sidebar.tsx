// import { useScreenSize } from "utils/useScreenSize"
import { Grid } from "@mui/material"
import * as Styled from "./Sidebar.styled"

export const Sidebar = () => {

    // const { isLargeScreen } = useScreenSize()

    return (
        <Styled.SidebarWrapper>
            <Styled.CollapseItem in={true} timeout={'auto'} unmountOnExit>
                <Styled.Item></Styled.Item>
            </Styled.CollapseItem>
        </Styled.SidebarWrapper>
    )
}