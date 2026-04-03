//Create typed object...
var product = {
    product_id: 1,
    product_name: "Laptop",
    product_price: 3500,
    quantity: 7,
};
var product1 = {
    product_id: 2,
    product_name: "Tablet",
    product_price: 2500,
    quantity: 5,
};
var totalPrice = function (product) {
    return product.product_price * product.quantity;
};
console.log(totalPrice(product));
