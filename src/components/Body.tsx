import { ErrorMessage } from './details/error';
import { Product } from './details/Product';
import { Loader } from './details/loader';
import { useProducts } from './hooks/products';
import { Modal } from './details/Modal';
import { CreateProduct } from './details/createProduct';

function Body() {
  const {loading, products, error} = useProducts()

  return (
    <div className="container max-auto max-w-2xl pt-5">
      { loading && <Loader />}
      { error && <ErrorMessage error={error}/>}
      { products.map(product => <Product product={product} key={product.id} />) }

      <Modal title="Create your product">
        <CreateProduct />
      </Modal>
    </div>
  )
}

export default Body;