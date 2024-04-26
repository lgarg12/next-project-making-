export default function ProdudctDetails({ params }: {params: {productId: string}}){
    return (
        <div>
            Details about product {params.productId}
        </div>
    )
}