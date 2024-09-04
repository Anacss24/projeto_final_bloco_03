
import { Link } from 'react-router-dom'

function NavBar() {
    return (
        <>
            <div className='w-full flex justify-center py-4 '>

                <div className="container flex justify-between text-lg">

                    <Link to='/' className="text-2xl font-bold">
                    <img src="public/medicina.png" alt="Logo Farmácia" className='w-12' />
                    </Link>
                    <div className='flex items-center gap-4'>
                        <Link to='/produtos' className="hover:text-red-500">Produtos</Link>
                        <Link to='/categorias' className="hover:text-red-500">Categorias</Link>
                        <Link to='/cadastroCategoria' className="hover:text-red-500" >Cadastrar Categoria</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavBar