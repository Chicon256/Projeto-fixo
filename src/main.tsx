import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter as 
  Router } from 'react-router-dom'
  import Rota from './Components/Rotas/index.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Router >
    <Rota/>
  </Router>,
)
