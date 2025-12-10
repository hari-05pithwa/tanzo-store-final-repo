import { menProducts } from "@/data/menProducts";
import { womenProducts } from "@/data/womenProducts";
import ProductClient from "./ProductClient";

export default async function ProductPage(props) {
  const { slug } = await props.params;

  const product =
    menProducts.find((p) => p.slug === slug) ||
    womenProducts.find((p) => p.slug === slug);

  return <ProductClient product={product} />;
}
