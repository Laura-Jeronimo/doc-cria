import { useEndpoints } from "contexts/endpoints";
import { AnaliseIntroducao } from "pages/AnaliseIntroducao";
import { Autenticacao } from "pages/Autenticacao";
import { CompetenciaCinco } from "pages/CompetenciaCinco";
import { CompetenciaDois } from "pages/CompetenciaDois";
import { CompetenciaQuatro } from "pages/CompetenciaQuatro";
import { CompetenciaTres } from "pages/CompetenciaTres";
import { CompetenciaUm } from "pages/CompetenciaUm";
import { Homonimas } from "pages/Homonimas";
import { Notas } from "pages/Notas";
import { Sobre } from "pages/Sobre";
import { Utilidades } from "pages/Utilidades";
import { useEffect, useRef } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

export const Router = () => {

    const paths = {
        CompetenciaUm: "/competencia-um",
        CompetenciaDois: "/competencia-dois",
        CompetenciaTres: "/competencia-tres",
        CompetenciaQuatro: "/competencia-quatro",
        CompetenciaCinco: "/competencia-cinco",
        Notas: "/notas",
        AnaliseIntroducao: "/analise-introducao",
        Homonimas: "/ambiguas",
        Utilidades: "/utilidades"
    };

    const { registerEndpoint } = useEndpoints();
    const hasRegistered = useRef(false);

    const endpointsData = [
        {
            component: CompetenciaUm,
            endpoints: [
                { name: "Frases maiúsculas" },
                { name: "Gerundismo" },
                { name: "Gírias" },
                { name: "Gramática" },
                { name: "Ortografia" },
                { name: "Subjetivismo" },
                { name: "Vírgula" },
                { name: "Voz passiva" },

            ].map(endpoint => ({
                ...endpoint,
                path: paths.CompetenciaUm,
            })),
        },
        {
            component: CompetenciaDois,
            endpoints: [
                { name: "Classificação textual" },
                { name: "Fuga ao tema" },
                { name: "Primeira pessoa" },
                { name: "Similaridade semântica" },
                { name: "Cópia do texto motivador" },
            ].map(endpoint => ({
                ...endpoint,
                path: paths.CompetenciaDois,
            })),
        },
        {
            component: CompetenciaTres,
            endpoints: [
                { name: "Plágio de redações nota 1000" },
                { name: "Clichês" },
                { name: "Ditados populares" },
                { name: "Generalizações" },
                { name: "Modelos prontos" },
                { name: "PDF modelos prontos" },
                { name: "Opinião política" },
                { name: "Redundância" },
            ].map(endpoint => ({
                ...endpoint,
                path: paths.CompetenciaTres,
            })),
        },
        {
            component: CompetenciaQuatro,
            endpoints: [
                { name: "Conectivos" },
                { name: "Palavras repetidas" },
            ].map(endpoint => ({
                ...endpoint,
                path: paths.CompetenciaQuatro,
            })),
        },
        {
            component: CompetenciaCinco,
            endpoints: [
                { name: "Agentes" },
                { name: "Baixo calão (experimental)" },
                { name: "Termos impróprios" },
                { name: "Intervenção" },
            ].map(endpoint => ({
                ...endpoint,
                path: paths.CompetenciaCinco,
            })),
        },
        {
            component: AnaliseIntroducao,
            endpoints: [
                { name: "Contexto" },
                { name: "Defesa de tese" },
                { name: "Retomada ao tema" },
            ].map(endpoint => ({
                ...endpoint,
                path: paths.AnaliseIntroducao,
            })),
        }, {
            component: Homonimas,
            endpoints: [
                { name: "Homônimas e parônimas" },
            ].map(endpoint => ({
                ...endpoint,
                path: paths.Homonimas,
            })),
        }, {
            component: Utilidades,
            endpoints: [
                { name: "Processa PDF" },
                { name: "Firewall" },
                { name: "Resumão" },
                { name: "PDF da redação" },
            ].map(endpoint => ({
                ...endpoint,
                path: paths.Utilidades,
            })),
        }, {
            component: Notas,
            endpoints: [
                { name: "Nota da competência 1" },
                { name: "Nota da competência 2" },
                { name: "Nota da competência 3" },
                { name: "Nota da competência 4" },
                { name: "Nota da competência 5" },
                { name: "Todas as estatísticas." },
            ].map(endpoint => ({
                ...endpoint,
                path: paths.Notas,
            })),
        },
    ];

    useEffect(() => {
        if (!hasRegistered.current) {
            endpointsData.forEach(({ endpoints }) => {
                endpoints.forEach(registerEndpoint);
            });
            hasRegistered.current = true;
        }
    }, [registerEndpoint]);

    return (
        <Routes>
            <Route path="/" element={<Sobre />} />
            <Route path="/autenticacao" element={<Autenticacao />} />
            <Route path="/competencia-um" element={<CompetenciaUm />} />
            <Route path="/competencia-dois" element={<CompetenciaDois />} />
            <Route path="/competencia-tres" element={<CompetenciaTres />} />
            <Route path="/competencia-quatro" element={<CompetenciaQuatro />} />
            <Route path="/competencia-cinco" element={<CompetenciaCinco />} />
            <Route path="/notas" element={<Notas />} />
            <Route path="/analise-introducao" element={<AnaliseIntroducao />} />
            <Route path="/ambiguas" element={<Homonimas />} />
            <Route path="/utilidades" element={<Utilidades />} />
        </Routes>
    )
}

