// pages/product/[id].js
import { useRouter } from 'next/router';

export default function ProductPage() {
  const router = useRouter();
  const { id } = router.query;

  // Додаємо перевірку, щоб уникнути помилок під час рендеру (наприклад, коли id ще не отримано)
  if (!id) {
    return <h1>Завантаження...</h1>;
  }

  return <h1>Товар {id}</h1>;
}
