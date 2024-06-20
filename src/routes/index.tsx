import { Autenticacao } from "pages/Autenticacao";
import { Sobre } from "pages/Sobre";
import { Route, Routes } from "react-router-dom";

export const Router: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Sobre />} />
            <Route path="/autenticacao" element={<Autenticacao />} />
        </Routes>
    )
}

