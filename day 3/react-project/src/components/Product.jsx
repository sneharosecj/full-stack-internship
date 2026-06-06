import React from 'react'
const Product = ({title,description,price,image}) => {
    return (
        <div className='bg-white shadow-md rounded-lg overflow-hidden border hover:shadow-xl transition'>
           <img src={image} alt={title} className='w-full h-48 object-cover'/>
        <div>
            <h2 className='text-lg font-bold text-gray-800'>
                {title}
            </h2>
            <p>{description} </p>
            <p>{price}</p>
            
        </div>

        </div>
    )
}
export default Product
