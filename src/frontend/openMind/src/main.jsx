import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import App from './App.jsx'
import { AuthProvider } from './AuthContext.jsx';
import { createBrowserRouter , RouterProvider} from 'react-router-dom'

import Home from './pages/Home.jsx'
import Cadastro from './pages/Cadastro.jsx'
import Login from './pages/Login.jsx'
import Postagens from './pages/Postagens.jsx'
import Categorias from './pages/Categorias.jsx'
import MeuPerfil from './pages/MeuPerfil.jsx'

import CriarCategoria from './pages/Admin/CriarCategoria.jsx'
import ListaCategorias from './pages/Admin/ListaCategorias.jsx'
import Admin from './pages/Admin/Admin.jsx'
import NovaPostagem from './pages/novaPostagem.jsx'
import Busca from './pages/Busca.jsx';

const router = createBrowserRouter([
  {
     path: '/',
      element: <App />, // Layout com Header
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: '/cadastro',
          element: <Cadastro/>
        },
        {
          path:'/login',
          element: <Login/>
        },
        {
          path: '/postagens',
          element: <Postagens/>
        },
        {
          path: '/categorias',
          element: <Categorias/>
        },
        {
          path: '/perfil',
          element: <MeuPerfil/>
        },
        {
          path: '/novaPostagem',
          element: <NovaPostagem/>
        },
        {
          path: '/buscar',
          element: <Busca/>
        },
        {
          path: '/admin',
          element: <Admin/>
        },
        {
          path: '/admin/criarcategorias',
          element: <CriarCategoria/>
        },
        {
          path: '/admin/listarcategorias',
          element: <ListaCategorias/>
        }

    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
)
