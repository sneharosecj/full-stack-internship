import React,{useState} from 'react'

const Counter = () => {
    
    const [count, setCount] = useState(0)
    const handleIncrement = () => {
        setCount(count + 1)
    }

return (
    <div  className='flex flex-col items-center justify-center p-6 bg gray-50 rounded-xl shadow mx-auto mt-10'>
        <h2 className='text-2xl font-semibold mb-4'> Counter:{count}</h2>
<div className='space-x-2'>
    <button className='px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 tansition'onClick={handleIncrement}>
        Add 1
        </button>
        
        <button className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 tansition'onClick={() => setCount(0)}>
            reset
        </button>

        </div>
    </div>
)

}

export default Counter