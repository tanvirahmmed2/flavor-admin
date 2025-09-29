import React from 'react'
import { useContext } from 'react'
import { ShopContext } from '../components/Context'

const Reserve = () => {
    const {reserve}= useContext(ShopContext)

  return (
    <div className='w-full flex flex-col items-center justify-center gap-4 text-center'>
        <h1 className='text-2xl font-semibold'>Reserve seats</h1>
        <div className='w-full grid grid-cols-4 justify-items-center gap-2'>
            <p>Name</p>
            <p>Guest</p>
            <p>Phone</p>
            <p>Date</p>
        </div>
        {
            reserve? <div className='w-full'>
                {reserve.map((res)=>{
                    const {name, guest, phone, date}=res
                    return <div className='w-full grid grid-cols-4 justify-items-center gap-2'>
                        <h1>{name}</h1>
                        <p>{guest}</p>
                        <p>{phone}</p>
                        <p>{date}</p>
                    </div>
                })}
            </div>:<p>No reserve found</p>
        }
    </div>
  )
}

export default Reserve
