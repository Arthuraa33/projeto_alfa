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
import CadastroAreaVenda from "./pages/CadastroAreaVenda"
import CadastroClassificacaoCliente from "./pages/CadastroClassificacaoCliente"
import GestaoCliente from "./pages/GestaoCliente" 
import GestaoDashboard from "./pages/GestaoDashboard" 
import TarefasKanban from "./pages/Tarefas/TarefasKanban" 
import CadastroStatusTarefas from "./pages/Tarefas/CadastroStatusTarefas"
import CadastroTipoTarefas from "./pages/Tarefas/CadastroTipoTarefas"
import CadastroTarefas from "./pages/Tarefas/CadastroTarefas"
import NotFound from "./pages/NotFound"
import ProtectedRoute from "./components/ProtectedRoute"
import HomeApp from "./pages/HomeApp"
import GestaoFornecedor from "./pages/GestaoCadastros/GestaoFornecedor"


function Logout() {
  localStorage.clear()
  return <Navigate to="/" />
}

function RegisterAndLogout() {
  localStorage.clear()
  return <Register />
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/cadastro/cliente" element={
            <ProtectedRoute>
              <CadastroCliente />
            </ProtectedRoute>
          }
        />
        <Route path="/cadastro/areavenda" element={
            <ProtectedRoute>
              <CadastroAreaVenda />
            </ProtectedRoute>
          }
        />
        <Route path="/cadastro/classificacaocliente" element={
            <ProtectedRoute>
              <CadastroClassificacaoCliente />
            </ProtectedRoute>
          }
        />
        <Route path="/cadastro/areavenda" element={
            <ProtectedRoute>
              <CadastroAreaVenda />
            </ProtectedRoute>
          }
        />
        <Route path="/cadastro/classificacaocliente" element={
            <ProtectedRoute>
              <CadastroClassificacaoCliente />
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

        <Route path="/gestao/fornecedor" element={
            <ProtectedRoute>
              <GestaoFornecedor />
            </ProtectedRoute>
          }
        />

        <Route path="/gestao/dashboard" element={
            <ProtectedRoute>
              <GestaoDashboard />
            </ProtectedRoute>
          }
        />     

        <Route path="/tarefas/statustarefa" element={
            <ProtectedRoute>
              <CadastroStatusTarefas />
            </ProtectedRoute>
          }
        />

        <Route path="/tarefas/tipotarefa" element={
            <ProtectedRoute>
              <CadastroTipoTarefas />
            </ProtectedRoute>
          }
        />

        <Route path="/tarefas/tarefa" element={
            <ProtectedRoute>
              <CadastroTarefas />
            </ProtectedRoute>
          }
        />

        <Route path="/tarefas/kanban" element={
            <ProtectedRoute>
              <TarefasKanban />
            </ProtectedRoute>
          }
        />

        <Route path="/logout" element={
            <ProtectedRoute>
              <Logout />
            </ProtectedRoute>
          } 
        />

        <Route path="/app" element={
            <ProtectedRoute>
              <HomeApp />
            </ProtectedRoute>
          } 
        />

        <Route path="/" element={ <Home /> } />
        <Route path="/register" element={ <RegisterAndLogout /> }/>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App