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
          width={300}
          height={300}
          className={styles.image}
          style={{ height: "auto", width: "100%", objectFit: "cover" }} // tương đương layout responsive
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
