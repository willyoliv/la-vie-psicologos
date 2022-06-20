import { Routes as WrapperRoutes, Route, BrowserRouter } from 'react-router-dom';
import Login from './pages/Login';
import PsicologoCreate from "./pages/Psicologo/Create";
import PsicologoList from "./pages/Psicologo/List";

export default function Routes() {
  return (
    <BrowserRouter>
      <WrapperRoutes>
        <Route path="/cadastro" element={<PsicologoCreate />} />
        <Route path="/lista" element={<PsicologoList />} />
        <Route path="/login" element={<Login />} />
      </WrapperRoutes>
    </BrowserRouter>
  );
}