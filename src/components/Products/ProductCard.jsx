import React from 'react'

const ProductCard = ({data}) => {
  return (
    <div className='mb-10'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 place-items-center'>
            {/*card section*/}
            {data.map((data) => (
                <div className='group' key={data.id}>
                    <div className='relative'>
                        <img src={data.img} alt="" 
                        className='h-[180px] w-[260px] object-cover rounded-md' />
                        {/*hover button */}
                        <div className='hidden group-hover:flex absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 h-full w-full text-center group-hover:backdrop-blur-sm justify-center items-center duration-200'>
                            <button className='bg-primary text-white font-poppins cursor-pointer hover:scale-105 duration-300 py-2 px-8 rounded-full relative z-10'>Add to Cart</button>
                        </div>
                    </div>
                    <div className='leading-7'>
                        <h2 className='font-semibold'>{data.title}</h2>
                        <h2 className='font-bold'>${data.price}</h2>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default ProductCard