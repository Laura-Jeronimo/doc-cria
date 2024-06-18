import ReactDOM from 'react-dom/client'
import moment from "moment";
import { BrowserRouter } from "react-router-dom";
import { StyledEngineProvider, ThemeProvider } from "@mui/material";
import { theme } from "styles/theme"
import App from './App'
import "styles/index.scss";

moment.locale('pt-BR');

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </StyledEngineProvider>
  </BrowserRouter>
);
