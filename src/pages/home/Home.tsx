

function Home() {

    
  return (
    <>
    <div className=" bg-red-500 flex justify-center">
        <div className=" container grid grid-cols-2  text-white ">
            <div className="flex flex-col gap-4 items-center justify-center py-4">
                <h2 className="text-5xl font-bold">
                    Farmácia Bem-Estar
                </h2>
                <p className="text-xl">
                    Tudo o que você precisa em um só lugar
                </p>
        </div>
        <div className="flex justify-center">
            <img
                src="public/2392942-removebg-preview.png"
                alt="Imagem da Página Home"
                className="w-2/3"
            />
        </div>
    </div>
</div >
</>
  )
}

export default Home