import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './pages/Inicial/home'
import "./index.css"
import { Header } from './components/Cabecalho/header'
import { Footer } from './components/Rodape/footer'
createRoot(document.getElementById('root')!).render(
<StrictMode>
<Header />
<Home />
<Footer/>
</StrictMode>,
)