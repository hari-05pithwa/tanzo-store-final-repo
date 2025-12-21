// src/app/product/[slug]/page.js

import ProductClient from "./ProductClient";


async function fetchProductBySlug(slug) {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
    
    const res = await fetch(`${baseUrl}/api/products/${slug}`, {
        cache: 'no-store' 
    });

    if (!res.ok) return null; // Returns null if product doesn't exist

    return res.json();
}

export default async function ProductPage(props) {
    const { slug } = await props.params;
    const product = await fetchProductBySlug(slug); 

    if (!product) {
        return <h1 className="text-center text-2xl py-20">Product not found</h1>;
    }
    
    return <ProductClient product={product} />;
}