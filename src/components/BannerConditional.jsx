import React from 'react'
import './styles/bannerConditional.css'

const BannerConditional = ({categoria}) => {

  return (
    <div className='container-fluid bannercontenedor'>
      {categoria === "Guitarras" ? (
        <div className='d-flex align-items-center justify-content-center flex-wrap banner--content'>
            <img className='banner--img m-auto' src="https://res.cloudinary.com/dmzrvnlgb/image/upload/v1675608739/freepik--character-1--inject-2_1_ziqbyh.png" alt="guitar" />
            <h2 className='text-center text-white mx-5 my-2'><span className='text-warning'>G</span>UITARRAS </h2>
        </div>
      ) : categoria === "Bajos" ? (
        <div className='d-flex align-items-center justify-content-center flex-wrap banner--content'>
            <img className='banner--img m-auto' src="https://res.cloudinary.com/dmzrvnlgb/image/upload/v1675608475/freepik--character-1--inject-2_lpgihc.png" alt="bass" />
            <h2 className='text-center text-white mx-5 my-2'><span className='text-warning'>B</span>AJOS</h2>
        </div>
      ) : categoria === "Amplificadores" ? (
        <div className='d-flex align-items-center justify-content-center flex-wrap banner--content'>
            <img className='banner--img m-auto' src="https://res.cloudinary.com/dmzrvnlgb/image/upload/v1675609038/Group_1_1_ql4nwe.png" alt="amp" />
            <h2 className='text-center text-white mx-5 my-2'><span className='text-warning'>A</span>MPLIFICADORES</h2>
        </div>
      ) : (
        <div className='d-flex align-items-center justify-content-center flex-wrap banner--content'>
            <img className='banner--img m-auto' src="https://res.cloudinary.com/dmzrvnlgb/image/upload/v1673792529/freepik--Headphones--inject-41_lrzbkl.png" alt="logo" />
            <h2 className='text-center text-white mx-5 my-2'><span className='text-warning'>TODOS</span> Nuestros Productos</h2>
        </div>
      )}
    </div>
  )
}

export default BannerConditional