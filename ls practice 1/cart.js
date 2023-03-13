const addProduct =  () => {

const product = document.getElementById('product');
const productValue = product.value;

const quantity = document.getElementById('quantity');
const quantityValue = quantity.value;
console.log(productValue,quantityValue );
displayProductOnTheUI(productValue, quantityValue)
saveProductToLocalStorage(productValue, quantityValue);
product.value = '';
quantity.value ='';

}

const displayProductOnTheUI = (product, quantity) => {
    const ul = document.getElementById('product-Container');
    const li = document.createElement('li');
    li.innerText = `${product}: ${quantity}`;
    ul.appendChild(li);
}

const getStoredShoppingCart = ()=>{
    let cart = {};
    const storedCart = localStorage.getItem('cart');
    if(storedCart){
        cart = JSON.parse(storedCart);
    }
    return cart;
}

const saveProductToLocalStorage = (product, quantity) =>{
 const cart = getStoredShoppingCart();
 cart[product] = quantity;
 const cartStringify = JSON.stringify(cart);
 localStorage.setItem('cart',cartStringify);
}

const displayProductFromLocalStorage =()=>{
    const savedCart = getStoredShoppingCart();
    for (const product in savedCart){
        const quantity = savedCart[product];
        displayProductOnTheUI(product,quantity);
    }
}

displayProductFromLocalStorage();
