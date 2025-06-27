import Link from "next/link"

export default function ProductList() {

    const productId = 100;

    return (
        <>
            <Link href="/">Home</Link>
            <h2><Link href={`/products/${productId}`} replace>Product {productId}</Link></h2>
            <h2><Link href={`/products/${productId}`}>Product {productId}</Link></h2>
            <h2><Link href={`/products/${productId}`}>Product {productId}</Link></h2>
        </>
    )
}