// components/ProductCard.tsx
import Image from "next/image";
import styles from "./ProductCard.module.css";

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
}

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image
          src={product.image}
          alt={product.name}
          layout="responsive"
          width={300}
          height={300}
          className={styles.image}
        />
      </div>
      <div className={styles.info}>
        <h3 className={styles.name}>{product.name}</h3>
        <p className={styles.price}>{product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
