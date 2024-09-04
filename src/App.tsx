import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/navbar/Navbar"
import Home from "./pages/home/Home"
import Footer from "./components/footer/Footer"
import ListarCategoria from "./components/categoria/listarcategoria/ListarCategoria"
import DeletarCategoria from "./components/categoria/deletarcategoria/DeletarCategoria"
import FormCategoria from "./components/categoria/formcategoria/FormCategoria"
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";

function App() {
  

  return (
    <>
    <ToastContainer/>
     <BrowserRouter>
     <Navbar/>
     <div className="min-h-[80vh]">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/categorias' element={<ListarCategoria />} />
        <Route path='/deletarCategoria/:id' element={<DeletarCategoria />} />
        <Route path='/editarCategoria/:id' element={<FormCategoria />} />
        <Route path='/cadastroCategoria/' element={<FormCategoria />} />
      </Routes>
     </div>
     <Footer/>
     
     </BrowserRouter> 
    </>
  )
}

export default App
