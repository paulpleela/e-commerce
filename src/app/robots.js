export default function robots() {
    return {
        rules: [
            {
                userAgents: "*",
                allow: "/",
                disallow: ["/checkout"]
            }
        ],
        sitemap: `${process.env.NEXT_PUBLIC_BASE_URL}/sitemap.xml`
    }
}