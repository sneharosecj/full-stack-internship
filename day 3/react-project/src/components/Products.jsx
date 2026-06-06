import React,{useEffect,useState} from 'react'
import axios from 'axios'
import Product from './Product'
const Products = () => {

    const [data, setData] = useState([])
    const productsUrl = "https://fakestoreapi.com/products"
    console.log(productsUrl)
    useEffect(() => {
        const fetchData = async () => {
            try{
                const response = await axios.get(productsUrl)
                console.log(response.data)
                setData(response.data)
            } catch(error){
                console.error(error)
            }
        }
        fetchData()
    },[])
    return (
        <div className='grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-4'>
            {data.map((product,index) => (
                    <Product
                    key={product.id}
                    title={product.title}
                    description={product.description}
                    price={product.price}
                    image={product.image}
                    />
            ))}
            
        </div>
    )
}       
export default Products
