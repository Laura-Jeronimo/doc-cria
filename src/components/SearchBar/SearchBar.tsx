import { IconButton } from "@mui/material";
import { RiCloseLine } from "react-icons/ri";
import * as Styled from "./SearchBar.styled";
import { SearchBarProps } from "./SearchBar.types";

export const SearchBar = ({ value, setValue, ...rest }: SearchBarProps) => {
    return (
        <Styled.StyledInputText
            {...rest}
            value={value}
            onChange={(ev: any) => setValue(ev.target.value)}
            placeholder={"Procurar..."}
            startAdornment={<Styled.SearchIcon />}
            endAdornment={(
                <IconButton
                    title="Limpar"
                    aria-label="limpar"
                    size="small"
                    style={{ visibility: value ? 'visible' : 'hidden', color: 'white' }}
                    onClick={() => setValue("")}
                >
                    <RiCloseLine />
                </IconButton>
            )}
        />
    )
}