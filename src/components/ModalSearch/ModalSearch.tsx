import * as Styled from "./ModalSearch.styled";
import { ModalSearchProps } from "./ModalSearch.types";
import { useEndpoints } from "contexts/endpoints";
import { useState, useEffect, useLayoutEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export const ModalSearch = ({ open, handleClose }: ModalSearchProps) => {
    const { endpoints } = useEndpoints();
    const [search, setSearch] = useState('');
    const navigate = useNavigate();

    const handleClickEndpoint = () => {
        handleClose();
        setSearch('');
    };

    const handleLinkClick = (path: string, hash: string) => {
        navigate(`${path}#${hash}`);
        handleClickEndpoint();
    };

    const filteredEndpoints = endpoints.filter(endpoint =>
        endpoint.name.toLowerCase().includes(search.toLowerCase())
    );

    useEffect(() => {
        const hash = window.location.hash;
        if (hash) {
            const id = hash.substring(1);
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, []);

    useLayoutEffect(() => {
        const hash = window.location.hash;
        if (hash) {
            const id = hash.substring(1); 
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, [search, endpoints]); 

    return (
        <Styled.MuiModal open={open} onClose={() => handleClose()}>
            <Styled.BoxSearch>
                <Styled.TextSearch>Busque por um endpoint</Styled.TextSearch>
                <Styled.StyledInput
                    placeholder="Digite a sua pesquisa..."
                    fullWidth
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <div>
                    {(filteredEndpoints?.length || 0) > 0 && search !== '' ? (
                        filteredEndpoints?.map((item, index) => (
                            <Styled.DivResults key={index}>
                                <Link
                                    to={`${item.path}#${item.name
                                        .toLowerCase()
                                        .replace(/ /g, '-')
                                        .normalize('NFD')
                                        .replace(/[\u0300-\u036f]/g, '')}`}
                                    onClick={() => handleLinkClick(item.path, item.name)}
                                >
                                    {item.name}
                                </Link>
                            </Styled.DivResults>
                        ))
                    ) : (search !== '' &&
                        <Styled.DivResults>Nenhum resultado encontrado.</Styled.DivResults>
                    )}
                </div>
            </Styled.BoxSearch>
        </Styled.MuiModal>
    );
};
