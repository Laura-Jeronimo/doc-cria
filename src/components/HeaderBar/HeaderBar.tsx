import { Box, Modal, InputBase, Typography } from "@mui/material";
import * as Styled from "./HeaderBar.styled";
import Logo from "assets/Logo/LogoExtenso.svg";
import { useNavigate } from "react-router-dom";
import { SearchBar } from "components/SearchBar";
import { useState } from "react";
import { HeaderMobile } from "./HeaderMobile/HeaderMobile";
import { theme } from "styles/theme";
import { useSearch } from "components/SearchBar/SearchContext";

export const HeaderBar = () => {
  const navigate = useNavigate();

  const [drawerAbrir, setDrawerAbrir] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const { search, setSearch, globalItems } = useSearch();

  const filteredItems = globalItems.filter((item) =>
    item.toLowerCase().includes(search.toLowerCase())
  );

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setDrawerAbrir(open);
    };

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  return (
    <Box>
      <Styled.Appbar>
        <Styled.MenuContent>
          <Styled.GridValidacaoTela container responsivo={false}>
            <Styled.GridInicial item md={7} lg={5} xl={3}>
              <Styled.LogoImagem onClick={() => navigate("/")} src={Logo} />
            </Styled.GridInicial>
            <Styled.GridInicial item md={5} lg={3} xl={2}>
              <SearchBar onClick={handleOpenModal} />
            </Styled.GridInicial>
          </Styled.GridValidacaoTela>

          <Styled.GridValidacaoTela container responsivo>
            <Styled.LogoImagem onClick={() => navigate("/")} src={Logo} />
            <Styled.Icon
              size="large"
              aria-label="show more"
              aria-controls="teste"
              aria-haspopup="true"
              onClick={toggleDrawer(!drawerAbrir)}
              color="inherit"
            >
              <Styled.IconResponsivo />
            </Styled.Icon>

            <HeaderMobile isOpen={drawerAbrir} toggleDrawer={toggleDrawer} />
          </Styled.GridValidacaoTela>
        </Styled.MenuContent>
      </Styled.Appbar>

      <Modal
        open={modalOpen}
        onClose={handleCloseModal}
        sx={{
          backdropFilter: "blur(10px)",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: theme.palette.background.paper,
            borderRadius: 2,
            boxShadow: 24,
            padding: 2,
          }}
        >
          <Typography variant="h6" component="h2">
            Pesquisa
          </Typography>
          <InputBase
            sx={{
              padding: theme.spacing(0.8),
              marginTop: theme.spacing(1),
              borderRadius: theme.spacing(3),
              boxShadow: "rgba(0, 0, 0, 0.25) 0px 0px 16px 0px",
            }}
            placeholder="Digite a sua pesquisa"
            inputProps={{ 'aria-label': 'search' }}
            fullWidth
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <div>
            {filteredItems.length > 0 ? (
              filteredItems.map((item, index) => <div key={index}>{item}</div>)
            ) : (
              <div>No results found</div>
            )}
          </div>
        </Box>
      </Modal>
    </Box>
  );
};
