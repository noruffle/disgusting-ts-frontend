import axios from "axios"
import { useState } from "react"
import { ProductData } from "../../data/data"
import { IProduct } from "../../interfaces/product.interface"

export function useCreateProducts() {
  const [value, setValue] = useState('')
  const [error, setError] = useState('')
  
  const submitHandler = async (event: React.FormEvent) => {
    event.preventDefault()
    setError('')
  
    if (value.trim().length === 0 ) {
      setError('Please enter valid title')
      return
    }
    ProductData.title = value
  
    const response = await axios.post<IProduct>('https://fakestoreapi.com/products', ProductData)
  }

  return {value, setValue, error, submitHandler}
}