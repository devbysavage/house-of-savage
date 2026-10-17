import Image from "next/image";
import { TransitionLink } from "./transition-link";

type Product = { name: string; category: string; image: string; href?: string };
export function ProductGrid({ products, columns = 4 }: { products: readonly Product[]; columns?: 3 | 4 }) {
  return <div className={`product-grid product-grid-${columns}`}>
    {products.map((product, index) => <article className="product-card" key={`${product.name}-${index}`}>
      <TransitionLink href={product.href || "/contact"} className="product-image-link" aria-label={`Ask about ${product.name}`}>
        <div className="product-image-wrap"><Image src={product.image} alt={product.name} width={720} height={900} sizes="(max-width: 640px) 48vw, (max-width: 1024px) 32vw, 24vw" loading={index < 4 ? "eager" : "lazy"}/><span className="product-arrow">↗</span></div>
        <div className="product-meta"><span>{product.category}</span><span>Enquire ↗</span></div><h3>{product.name}</h3>
      </TransitionLink>
    </article>)}
  </div>;
}
