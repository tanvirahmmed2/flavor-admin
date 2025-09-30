import React from 'react'
import { useContext } from 'react'
import { ShopContext } from '../components/Context'
import { useState } from 'react'

const Reserve = () => {
    const [problem, setProblem]= useState('')
    const { reserve } = useContext(ShopContext)


    const deletReserve=async(id)=>{
        console.log(id)
        try {
            const res= await fetch('http://localhost:5000/reserve/delete',{
                method:"POST",
                credentials: 'include',
                headers:{
                    Accept: 'application/json'
                },
                body: JSON.stringify({id})

            })
            const data= await res.json()
            if(data.success){
                setProblem(data.message)
            }else{
                setProblem(data.message)
            }
        } catch (error) {
            setProblem(error)
        }
    }
    return (
        <div className='w-full flex flex-col items-center justify-center gap-4 text-center'>
            <h1 className='text-2xl font-semibold'>Reserve seats</h1>
            <div className='w-full grid grid-cols-5 justify-center items-start gap-2 border-2'>
                <p>Name</p>
                <p>Guest</p>
                <p>Phone</p>
                <p>Date</p>
                <p>Delete</p>
            </div>


            {
                reserve ? <div className='w-full flex flex-col items-center justify-center gap-4'>
                    {reserve.map((res) => {
                        const { name, guest, phone, date, _id } = res
                        return <div className='w-full grid grid-cols-5 justify-center items-start gap-2' key={_id}>
                            <h1>{name}</h1>
                            <p>{guest}</p>
                            <p>{phone}</p>
                            <p>{date}</p>
                            <button onClick={()=> deletReserve(_id)}>Delete</button>
                        </div>
                    })}
                </div> : <p>No reserve found</p>
            }
            <p>{problem}</p>
        </div>
    )
}

export default Reserve
