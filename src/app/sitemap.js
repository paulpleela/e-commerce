import { getProducts } from "@/db/api";

export default async function sitemap() {
    const categories = [
        "all",
        "tables",
        "chairs",
        "shelves",
        "lighting",
        "decor",
      ];

    const category_pages = categories.map((category) => ({
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/products/${category}`,
        priority: 0.8
    }))

    const products = await getProducts();

    const product_pages = products.map(({_id}) => ({
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/products/id/${_id.toString()}`,
        priority: 0.6
    }))

    return [
        {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}`,
            priority: 1
        },
        {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/checkout`,
            priority: 0
        },
        ...category_pages,
        ...product_pages
    ]
}