import { useEffect, useState } from "react"
import Categoria from "../../../models/Categoria"
import { buscar, deletar } from "../../../services/Service"
import { useNavigate, useParams } from "react-router-dom"
import { RotatingLines } from "react-loader-spinner"

function DeletarCategoria() {

    let navigate = useNavigate()

    const [categoria, setCategoria] = useState<Categoria>({} as Categoria)

    const [isLoading, setIsLoading] = useState<boolean>(false)

    const { id } = useParams<{ id: string }>()

    async function buscarPorId(id: string) {
        try {
            await buscar(`/categorias/${id}`, setCategoria)
        } catch (error: any) {
            console.log(error, error.message)
        }
    }

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    function retornar() {
        navigate('/categorias')
    }

    async function deletarCategoria() {
        setIsLoading(true)

        try {
            await deletar(`/categorias/${id}`)
            alert('A Categoria foi apagada com sucesso!')
        } catch (error: any) {

            console.error(error.message)
        }

        setIsLoading(false)
        retornar()
    }

    return (
        <div className='container w-1/3 mx-auto'>
            <h1 className='text-4xl text-center my-4'>Deletar Categoria</h1>

            <p className='text-center font-semibold mb-4'>Você tem certeza de que deseja apagar a categoria a seguir?</p>

            <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
                <header className='py-2 text-center px-6 bg-red-500 text-white font-bold text-2xl'>Categoria</header>
                <p className='p-8 text-3xl text-center bg-slate-200 h-full'>{categoria.nome}</p>
                <div className="flex">
                    <button className='text-slate-100 font-bold bg-red-400 hover:bg-red-600 w-full py-2' onClick={retornar} >Não</button>
                    <button
                        className='w-full font-bold text-slate-100 bg-[#51ba5f] hover:bg-[#0a903f]  flex items-center justify-center'
                        onClick={deletarCategoria}
                    >
                        {isLoading ? <RotatingLines
                            strokeColor="white"
                            strokeWidth="5"
                            animationDuration="0.75"
                            width="24"
                            visible={true}
                        /> :
                            <span>Sim</span>
                        }
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DeletarCategoria