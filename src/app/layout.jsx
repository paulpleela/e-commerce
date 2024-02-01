import { Inter } from "next/font/google";
import "./globals.scss";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { getProducts } from "@/db/api";
import Checkout from "./checkout/page";
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Home | E-Commerce",
    template: "%s | E-Commerce",
  },
  description: "Explore a wide range of products including tables, chairs, shelves, and more.",
};

export default async function RootLayout({ children }) {
  let products;
  let products_obj;
  try {
    products = await getProducts();
    products_obj = products.reduce((result, product) => {
      const { _id, title, images, price } = product;
    
      result[_id.toString()] = {
        title,
        image: images[0],
        price
      };
      return result;
    }, {});

  } catch {
    console.error("Error fetching products");
  }

  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar products={products_obj}/>
          {children}
           <Checkout products={products_obj}/>
           <SpeedInsights />
        <Footer />
      </body>
    </html>
  );
}
