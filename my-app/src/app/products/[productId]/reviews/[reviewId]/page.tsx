import { notFound } from "next/navigation"

export default function reviews({
    params
}:
{
    params: {
        reviewId: string,
        productId: string
    }
}){

    if(parseInt(params.reviewId) > 1000){
        notFound();
    }

    return (
        <div>
            review { params.reviewId } for product { params.productId }          
        </div>
    )
}