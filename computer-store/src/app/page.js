import Bebra from './homepage/Bebra.json';

export default function Home() {
  
  return (
    <div>
      <ul>
        {Bebra.products.map((product) => {
          return <li key={product.id}>
          <div>Назва: {product.name}</div>
          <div>Ціна: {product.price}</div>
          <div>ID: {product.id}</div>
        </li>
        })}
      </ul>
    </div>
  )
}
