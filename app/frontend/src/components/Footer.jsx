import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

        <div>
            <img src={assets.logo} className='mb-5 w-48 sm:w-40' alt="" />
            <p className='w-full md:w-2/3 text-gray-600'>
            Modas é simplesmente um texto sem conteúdo da indústria gráfica e de composição tipográfica.
            </p>
        </div>

        <div>
            <p className='text-xl font-medium mb-5'>EMPRESA</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>
                  <Link to='/' className='cursor-pointer hover:text-black'>INÍCIO</Link>
                </li>
                <li>
                  <Link to='/sobre' className='cursor-pointer hover:text-black'>SOBRE NÓS</Link>
                </li>
                <li>
                  <Link to='/pagamento' className='cursor-pointer hover:text-black'>ENTREGA</Link>
                </li>
                <li>
                  <Link to='/politica' className='cursor-pointer hover:text-black'>POLÍTICA DE PRIVACIDADE</Link>
                </li>
            </ul>
        </div>

        <div>
            <p className='text-xl font-medium mb-5'>ENTRE EM CONTATO</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>(55)992372732</li>
                <li>lzmichelotti@gmail.com</li>
            </ul>
        </div>

      </div> 
      <div>
          <hr />
          <p className='py-5 text-sm text-center'>Copyright 2024@ michelotti.com - Todos Direitos Reservados</p>
      </div>

    </div> 
  )
}

export default Footer