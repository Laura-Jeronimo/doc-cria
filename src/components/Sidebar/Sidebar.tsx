// import { useScreenSize } from "utils/useScreenSize"
import { Typography } from "@mui/material"
import * as Styled from "./Sidebar.styled"

export const Sidebar = () => {

    // const { isLargeScreen } = useScreenSize()

    return (
        <Styled.SidebarWrapper>
            <Styled.CollapseItem in={true} timeout={'auto'} unmountOnExit>
                <Styled.Item>
                    <Typography>Sobre o CRIA</Typography>
                </Styled.Item>
            </Styled.CollapseItem>
        </Styled.SidebarWrapper>
    )
}