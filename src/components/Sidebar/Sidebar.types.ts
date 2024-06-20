export interface SidebarProps {
    title?: string;
    isActive: boolean;
    onChange?: (val: boolean) => void;
}
export interface SubMenuProps { 
    isActive: boolean;
 }