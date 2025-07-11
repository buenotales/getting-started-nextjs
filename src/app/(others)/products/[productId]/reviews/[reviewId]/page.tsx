import { notFound } from "next/navigation"

function getRandomInt(count: number) {
    return Math.floor(count * Math.random())
}

export default async function ProductReview({
    params
}: {
    params: Promise<{ productId: string, reviewId: string }>
}) {
    const random = getRandomInt(2);
    if (random === 1) {
        throw new Error("Error loading review")
    }
    const { productId, reviewId } = await params
    if (parseInt(reviewId) > 1000) {
        notFound()
    }

    return <h1>Review {reviewId} from product {productId}</h1>
}