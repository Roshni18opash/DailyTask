//Create Type alias...
type Product={
    product_id:number;
    product_name:string;
    product_price:number;
    quantity:number;
}
//Create typed object...
const product:Product={
     product_id:1,
    product_name:"Laptop",
    product_price:3500,
    quantity:7,
};
const product1:Product={
     product_id:2,
    product_name:"Tablet",
    product_price:2500,
    quantity:5,
};
const totalPrice=(product:Product)=>{
    return product.product_price * product.quantity
}
console.log(totalPrice(product));
