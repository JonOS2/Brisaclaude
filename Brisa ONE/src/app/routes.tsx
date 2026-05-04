import { createBrowserRouter } from "react-router";
import { RootLayout } from "./components/root-layout";
import { WizardLayout } from "./components/wizard-layout";
import { DadosPrograma } from "./pages/dados-programa";
import { EstruturaEtapas } from "./pages/estrutura-etapas";
import { EtapaInscricao } from "./pages/etapa-inscricao";
import { EtapaNivelamento } from "./pages/etapa-nivelamento";
import { EtapaImersao } from "./pages/etapa-imersao";
import { RevisaoFinal } from "./pages/revisao-final";
import { Pessoas } from "./pages/pessoas";
import { PessoaPerfil } from "./pages/pessoa-perfil";
import { Dashboard } from "./pages/dashboard";
import { Carreira } from "./pages/carreira";
import { Programas } from "./pages/programas";
import { ProgramaDetalhe } from "./pages/programa-detalhe";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Dashboard,
      },
      {
        path: "carreira",
        Component: Carreira,
      },
      {
        path: "programas",
        Component: Programas,
      },
      {
        path: "programas/:id",
        Component: ProgramaDetalhe,
      },
      {
        path: "pessoas",
        Component: Pessoas,
      },
      {
        path: "pessoas/:id",
        Component: PessoaPerfil,
      },
      {
        path: "cadastro",
        Component: WizardLayout,
        children: [
          { index: true, Component: DadosPrograma },
          { path: "estrutura-etapas", Component: EstruturaEtapas },
          { path: "etapa-inscricao", Component: EtapaInscricao },
          { path: "etapa-nivelamento", Component: EtapaNivelamento },
          { path: "etapa-imersao", Component: EtapaImersao },
          { path: "revisao-final", Component: RevisaoFinal },
        ],
      },
    ],
  },
]);
