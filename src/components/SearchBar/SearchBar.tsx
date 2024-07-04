import { IconButton } from "@mui/material";
import { RiCloseLine } from "react-icons/ri";
import * as Styled from "./SearchBar.styled";
import { useSearch } from "./SearchContext"; 

export const SearchBar = ({ onClick, ...rest }: any) => {
    const { search, setSearch } = useSearch();

    return (
        <Styled.StyledInputText
            {...rest}
            value={search}
            onChange={(ev: any) => setSearch(ev.target.value)}
            placeholder={"Procurar..."}
            startAdornment={<Styled.SearchIcon />}
            endAdornment={(
                <IconButton
                    title="Limpar"
                    aria-label="limpar"
                    size="small"
                    style={{ visibility: search ? 'visible' : 'hidden', color: 'white' }}
                    onClick={() => setSearch("")}
                >
                    <RiCloseLine />
                </IconButton>
            )}
            onClick={onClick}
        />
    );
}
