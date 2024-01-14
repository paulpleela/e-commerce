
# E-Commerce

A comprehensive online shop designed for clean and easy product browsing and ordering.

> This project is currently hosted at [https://ecom-paulpleela.vercel.app](https://ecom-paulpleela.vercel.app)

- [Features](#features)
  - [Home Page](#home-page)
  - [Products Page](#products-page)
  - [Product Page](#product-page)
  - [Cart & Checkout](#cart--checkout)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
- [License](#license)


## Features

### Home Page

* **Interactive Image Maps:** Room images offering design inspiration with our products. Users can click on a product indicator to link to that product page for more information.
* **Popular Products Carousel:** A scrollable section displaying the most popular products. Users can click on a card to link to that product page for more information.
![home page](https://i.imgur.com/XYXnHlx.png)

### Products Page

* **Product Cards:** Users can browse all of the available products and click on a card to link to that product page for more information.
* **Category Selector:** Users can easily use the radio buttons to filter and show only the products in each category.
![products page](https://i.imgur.com/HHFXCBI.png)

### Product Page

* **Product Images:** Users can scroll to see multiple product images or click side images to automatically scroll to that image.
* **Quantity Selector:** Users can easily increase, decrease, or type in their desired quantity, and add them to the cart to purchase.
* **Suggested Products Carousel:** A scrollable section displaying related products in the same category along with the most popular products. Users can click on a card to link to that product page for more information.
![product page](https://i.imgur.com/5osePyj.png)

### Cart & Checkout

* **Shopping Cart:** Users can view all the products in their cart and edit the quantity or remove a product from the cart. This feature is available in the navbar from every page.
* **Checkout Summary:** Users can view a summary of all the products in their cart and see the total cost.
![cart & checkout](https://i.imgur.com/GgZXxKK.png)


## Technologies Used

* **React**
* **SCSS**
* **NextJS** (App Router)
* **MongoDB**


## Getting Started

Follow these steps to set up and run the Homework Calendar web application on your local machine:


### Running Locally in Development Mode

1. Clone this repository:

    ```bash
    git clone https://github.com/paulpleela/e-commerce.git
    ```

2. Install the required dependencies:

    ```bash
    npm install
    ```

3. Set up environmental variables:

    Add the following KEY=VALUE into the .env.local file at the root directory.

    ```bash
    NEXT_PUBLIC_MONGODB_URL=
    ```

4. Run the application:

    ```bash
    npm run dev
    ```

5. Open your web browser and go to [http://localhost:3000](http://localhost:3000).


## License

[MIT](https://choosealicense.com/licenses/mit/)
\**This project is meant solely for learning purposes. All images and icons belong to their respective owners.**
