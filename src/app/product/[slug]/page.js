// // src/app/product/[slug]/page.js

// import ProductClient from "./ProductClient";


// async function fetchProductBySlug(slug) {
//     const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
    
//     const res = await fetch(`${baseUrl}/api/products/${slug}`, {
//         cache: 'no-store' 
//     });

//     if (!res.ok) return null; // Returns null if product doesn't exist

//     return res.json();
// }

// export default async function ProductPage(props) {
//     const { slug } = await props.params;
//     const product = await fetchProductBySlug(slug); 

//     if (!product) {
//         return <h1 className="text-center text-2xl py-20">Product not found</h1>;
//     }
    
//     return <ProductClient product={product} />;
// }












// src/app/product/[slug]/page.js
import ProductClient from "./ProductClient";
import { connectDB } from "../../../../lib/mongodb"; // Adjust path to your mongodb.js
import Product from "../../../../models/Product"; // Adjust path to your Product model

async function getProduct(slug) {
    try {
        await connectDB();
        // Look up the product directly in Atlas
        const product = await Product.findOne({ slug: slug }).lean();
        
        if (!product) return null;

        // Convert MongoDB _id to string so it can be passed to Client Component
        return JSON.parse(JSON.stringify(product));
    } catch (error) {
        console.error("Database error:", error);
        return null;
    }
}

export default async function ProductPage(props) {
    const { slug } = await props.params;
    const product = await getProduct(slug); 

    if (!product) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <h1 className="text-center text-xl font-light uppercase tracking-widest">
                    Product not found
                </h1>
            </div>
        );
    }
    
    return <ProductClient product={product} />;
}