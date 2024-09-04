import { FacebookLogo, InstagramLogo, LinkedinLogo } from "@phosphor-icons/react";

function Footer() {

    let data = new Date().getFullYear()

  return (
    <>
    <div className="flex justify-center bg-red-500 text-white">
             <div className="container flex flex-col items-center py-4">
                 <p className='text-xl font-bold'>
                     E-Commerce Farmácia | Copyright: {data}
                 </p>
                 <p className='text-lg'>Acesse nossas redes sociais</p>
                 <div className='flex gap-2'>
                     <a href="" target="_blank">
                         <LinkedinLogo size={48} weight='bold' className="hover:size-14" />
                     </a>
                     <a href="" target="_blank">
                     <InstagramLogo size={48} weight='bold' className="hover:size-14" />
                     </a>
                     <a href="" target="_blank">
                     <FacebookLogo size={48} weight='bold' className="hover:size-14" />
                     </a>
                 </div>
             </div>
         </div>
     </>
  )
}

export default Footer
