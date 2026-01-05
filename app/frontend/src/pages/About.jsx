import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>

      <div className='text-2xl text-center pt-8 border-t'>
          <Title text1={'SOBRE'} text2={'NÓS'}/>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
          <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
          <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
              <p>Desde o início, nos dedicamos a criar uma curadoria cuidadosa, selecionando produtos que não apenas atendem às necessidades do dia a dia, mas que também trazem sofisticação e praticidade para a vida de nossos clientes.</p>
              <p>Mais do que vender produtos, nos dedicamos a proporcionar uma experiência de compra impecável, priorizando a transparência e a satisfação total de nossos clientes.</p>
              <b className='text-gray-800'>Nossa Missão</b>
              <p>Nossa missão é oferecer peças exclusivas que unem as últimas tendências globais a um padrão de qualidade rigoroso, garantindo estilo e conforto em cada detalhe.</p>
          </div>
      </div>

      <div className='text-xl py-4'>
        <Title text1={'POR QUE'} text2={'NOS ESCOLHER'}/>
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Garantia de Qualidade:</b>
            <p className='text-gray-600'>Qualidade é a nossa prioridade inegociável. Selecionamos cada produto rigorosamente e realizamos inspeções detalhadas para garantir durabilidade, acabamento premium e sua total satisfação.</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Conveniência:</b>
            <p className='text-gray-600'>Com nossa interface intuitiva e processo de compra simplificado, você encontra e adquire o que precisa em poucos cliques. Compre do conforto da sua casa com total segurança e agilidade.</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Atendimento ao Cliente Excepcional:</b>
            <p className='text-gray-600'>Nossa equipe de suporte dedicada está sempre pronta para ajudar. Seja para tirar dúvidas, resolver problemas ou acompanhar seu pedido, garantimos um atendimento humanizado e eficiente em todas as etapas.</p>
          </div>
          
      </div>
      
      <NewsletterBox/>

    </div>
  )
}

export default About