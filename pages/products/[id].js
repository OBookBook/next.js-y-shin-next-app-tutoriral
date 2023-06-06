// 任意のidに対応したwebページを表示
// http://localhost:3000/products/smartphone
// http://localhost:3000/products/pc
// http://localhost:3000/products/headph
// http://localhost:3000/products/7487377242
import { useRouter } from "next/router";

const Product = () => {
  const router = useRouter();
  const { id } = router.query;// { } これは分割代入
  return (
    <div>
      {id}
    </div>
  );
}

export default Product;
