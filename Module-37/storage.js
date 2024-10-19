// use arrow function 
const addProduct = () => {
    const productId = document.getElementById('productId');
    const id = productId.value;

    const productValue = document.getElementById('productValue');
    const value = productValue.value;

    if (id && value) {
        localStorage.setItem(id, value);
        productId.value = '';
        productValue.value = '';
    }
}
