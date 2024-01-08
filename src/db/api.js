import dbConnect from "./connection";
import { Products, Orders } from "./models";

export const getProducts = async () => {
    try {
        dbConnect();
        const products = await Products.find();
        return products;
    }
    catch(error) {
        console.log(error);
        throw new Error("Failed to fetch products.");
    }
}

export const getProductsByCategory = async (category) => {
    try {
        dbConnect();
        const products = await Products.find({ category });
        return products;
    }
    catch(error) {
        console.log(error);
        throw new Error("Failed to fetch products.");
    }
}

export const getProductById = async (id) => {
    try {
        dbConnect();
        const product = await Products.findById(id);
        return product;
    }
    catch(error) {
        console.log(error);
        throw new Error("Failed to fetch product.");
    }
}

export const getPopularProducts = async () => {
    try {
        dbConnect();
        const products = await Products.find({ popular: true });
        return products;
    }
    catch(error) {
        console.log(error);
        throw new Error("Failed to fetch products.");
    }
}


export const getOrders = async () => {
    try {
        dbConnect();
        const orders = await Orders.find();
        return orders;
    }
    catch(error) {
        console.log(error);
        throw new Error("Failed to fetch orders.");
    }
}

export const getOrdersByStatus = async (status) => {
    try {
        dbConnect();
        const orders = await Orders.find({ status });
        return orders;
    }
    catch(error) {
        console.log(error);
        throw new Error("Failed to fetch orders.");
    }
}

export const getOrderById = async (id) => {
    try {
        dbConnect();
        const order = await Orders.findById(id);
        return order;
    }
    catch(error) {
        console.log(error);
        throw new Error("Failed to fetch order.");
    }
}
