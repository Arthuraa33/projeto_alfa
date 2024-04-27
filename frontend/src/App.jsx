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
        <Route path="/" element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route path="/cadastro/cliente" element={
            <ProtectedRoute>
              <CadastroCliente />
            </ProtectedRoute>
          }
        />
        <Route path="/cadastro/fornecedor" element={
            <ProtectedRoute>
              <CadastroFornecedor />
            </ProtectedRoute>
          }
        />
        <Route path="/cadastro/marca" element={
            <ProtectedRoute>
              <CadastroMarca />
            </ProtectedRoute>
          }
        />
        <Route path="/cadastro/orcamento" element={
            <ProtectedRoute>
              <CadastroOrcamento />
            </ProtectedRoute>
          }
        />
        <Route path="/cadastro/pedido" element={
            <ProtectedRoute>
              <CadastroPedido />
            </ProtectedRoute>
          }
        />
        <Route path="/cadastro/pesquisa" element={
            <ProtectedRoute>
              <CadastroPesquisa />
            </ProtectedRoute>
          }
        />
        <Route path="/cadastro/produto" element={
            <ProtectedRoute>
              <CadastroProduto />
            </ProtectedRoute>
          }
        />
        <Route path="/cadastro/tabelaprecos" element={
            <ProtectedRoute>
              <CadastroTabelaPreco />
            </ProtectedRoute>
          }
        />
        <Route path="/cadastro/tipotransporte" element={
            <ProtectedRoute>
              <CadastroTipoTransporte />
            </ProtectedRoute>
          }
        />
        <Route path="/cadastro/transporte" element={
            <ProtectedRoute>
              <CadastroTransporte />
            </ProtectedRoute>
          }
        />
        <Route path="/cadastro/vendedor" element={
            <ProtectedRoute>
              <CadastroVendedor />
            </ProtectedRoute>
          }
        />
        <Route path="/gestao/cliente" element={
            <ProtectedRoute>
              <GestaoCliente />
            </ProtectedRoute>
          }
        />

        <Route path="/register" element={
            <ProtectedRoute>
              <RegisterAndLogout />
            </ProtectedRoute>
          }
        />

        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App