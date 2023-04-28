import { ErrorMessage } from "./error"
import { useCreateProducts } from '../hooks/createProduct';

export function CreateProduct() {

  const {error, setValue, submitHandler, value} = useCreateProducts()

  return (
    <form onSubmit={submitHandler}>
      <input 
        type="text" 
        className="border py-2 px-4 mb-4 w-full outline-0"
        placeholder="Enter product title"
        value={value}
        onChange={event => setValue(event.target.value)}
    />

    {error && <ErrorMessage error={error} />}

    <button 
      type="submit"
      className="py-2 px-4 border bg-yellow-400 hover:text-white" 
    >
      Create
    </button>
    </form>
  )
}