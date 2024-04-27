import react from "react"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Home from "./pages/Home"
import CadastroCliente from "./pages/CadastroCliente"
import CadastroMarca from "./pages/CadastroMarca"
import CadastroProduto from "./pages/CadastroProduto"
import CadastroTransporte from "./pages/CadastroTransporte"
import CadastroTipoTransporte from "./pages/CadastroTipoTransporte"
import CadastroVendedor from "./pages/CadastroVendedor"
import CadastroFornecedor from "./pages/CadastroFornecedor"
import CadastroTabelaPreco from "./pages/CadastroTabelaPreco"
import CadastroPedido from "./pages/CadastroPedido"
import CadastroOrcamento from "./pages/CadastroOrcamento"
import CadastroPesquisa from "./pages/CadastroPesquisa"
import GestaoCliente from "./pages/GestaoCliente" 
import NotFound from "./pages/NotFound"
import ProtectedRoute from "./components/ProtectedRoute"


function Logout() {
  localStorage.clear()
  return <Navigate to="/login" />
}

function RegisterAndLogout() {
  localStorage.clear()
  return <Register />
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastro/cliente" element={<CadastroCliente />} />
        <Route path="/cadastro/marca" element={<CadastroMarca />} />
        <Route path="/cadastro/produto" element={<CadastroProduto />} />
        <Route path="/cadastro/transporte" element={<CadastroTransporte />} />
        <Route path="/cadastro/tipotransporte" element={<CadastroTipoTransporte />} />
        <Route path="/cadastro/vendedor" element={<CadastroVendedor />} />
        <Route path="/cadastro/tabelaprecos" element={<CadastroTabelaPreco />} />
        <Route path="/cadastro/fornecedor" element={<CadastroFornecedor />} />
        <Route path="/cadastro/pedido" element={<CadastroPedido />} />
        <Route path="/cadastro/orcamento" element={<CadastroOrcamento />} />
        <Route path="/cadastro/pesquisa" element={<CadastroPesquisa />} />
        <Route path="/gestao/cliente" element={<GestaoCliente />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/register" element={<RegisterAndLogout />} />
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App