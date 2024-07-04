import { Autenticacao } from "pages/Autenticacao";
import { CompetenciaCinco } from "pages/CompetenciaCinco";
import { CompetenciaDois } from "pages/CompetenciaDois";
import { CompetenciaQuatro } from "pages/CompetenciaQuatro";
import { CompetenciaTres } from "pages/CompetenciaTres";
import { CompetenciaUm } from "pages/CompetenciaUm";
import { Sobre } from "pages/Sobre";
import { Route, Routes } from "react-router-dom";

export const Router: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Sobre />} />
            <Route path="/autenticacao" element={<Autenticacao />} />
            <Route path="/competencia-um" element={<CompetenciaUm />} />
            <Route path="/competencia-dois" element={<CompetenciaDois />} />
            <Route path="/competencia-tres" element={<CompetenciaTres />} />
            <Route path="/competencia-quatro" element={<CompetenciaQuatro />} />
            <Route path="/competencia-cinco" element={<CompetenciaCinco />} />
        </Routes>
    )
}

