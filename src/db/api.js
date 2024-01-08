import dbConnect from "./connection";
import { Products, Orders } from "./models";

export const getProducts = async () => {
    try {
        const db = await dbConnect();
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
        const db = await dbConnect();
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
        const db = await dbConnect();
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
        const db = await dbConnect();
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
        const db = await dbConnect();
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
        const db = await dbConnect();
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
        const db = await dbConnect();
        const order = await Orders.findById(id);
        return order;
    }
    catch(error) {
        console.log(error);
        throw new Error("Failed to fetch order.");
    }
}
