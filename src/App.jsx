import React from 'react'
import Logo from './assets/react.svg'

const App = () => {
  return (
    <div>
      {/*Nav section  */}
      <div className='flex justify-between bg-slate-400 p-5'>
            <div className='flex gap-5'>
              <img src={Logo} alt="react logo" />
              <p>REACT</p>
            </div>
            <div>
              <ul className='flex gap-10'>
                <li>HOME</li>
                <li>ABOUT</li>
                <li>CONTACT</li>
                <li>SERVICES</li>
              </ul>
            </div>
      </div>
      {/* Header section */}
      <div className='font-bold text-4xl text-center mt-20'>
          <p>REACT JS PROJECT</p>
      </div>
      {/*Card section  */}
      <section className='grid grid-cols-3 gap-10 mt-20 mb-20'>
        <div className='shadow-lg  '>
        <img className='h-100 w-full object-contain' src="https://www.tiffbenson.com/wp-content/uploads/2023/02/Yves-Saint-Laurent-LIBRE-Eau-de-Parfum-Intense.png" alt="" />
        <p className='font-bold pl-2'>YSL Libre Intense </p>
        <p className='font-semibold pl-2'>₦250,000</p>
        <button className='px-2 py-2 flex justify-self-end rounded-md mb-2 hover:bg-slate-700 hover:text-blue-300 bg-blue-300 font-semibold '>ADD TO CART</button>
        </div>
        <div className='shadow-lg'>
          <img className='h-100 w-full object-contain' src="https://media.ahlens.se/image/upload/f_auto,t_ProductList/products/bg_removed/36/14/27/3614273961752_1.jpg" alt="" />
          <p className='font-bold pl-2'>Paradoxe Intense Eau de Parfum Spray </p>
          <p className='font-semibold pl-2'>₦250,000</p>
          <button className='px-2 py-2 flex justify-self-end rounded-md mb-2 hover:bg-slate-700 hover:text-blue-300 bg-blue-300 font-semibold '>ADD TO CART</button>
        </div>
        <div className='shadow-lg'>
          <img className='h-100 w-full object-contain' src="https://www.mazaya.eg/media/catalog/product/y/s/ysl_dmi_fram_myslf_edp_packshot_front_60ml_3000x3000px_3614273852821_rgb.png?store=en&image-type=image" alt="" />
          <p className='font-bold pl-2'>MYSLF Eau de Parfum</p>
          <p className='font-semibold pl-2'>₦250,000</p>
          <button className='px-2 py-2 flex justify-self-end rounded-md mb-2 hover:bg-slate-700 hover:text-blue-300 bg-blue-300 font-semibold '>ADD TO CART</button>
        </div>
      </section>
    </div>
  )
}

export default App
