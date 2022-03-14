const plusMinus =( isIncreasing)=>{
    let productInput = document.getElementById('product-number');
    let productNumber = productInput.value;
    if(isIncreasing){
        productNumber = getInputValue() + 1;
    }
    else if( productNumber > 0){
        productNumber = getInputValue() - 1;
    }
    productInput.value = productNumber;
    updatePrice(isIncreasing, productNumber);
}
function getInputValue() {
    const productInput = document.getElementById('product-number');
    const productNumber = parseInt(productInput.value);
    return productNumber;
}
const updatePrice =(isIncreasing)=>{
    const productPriceText = document.getElementById('product-price');
    let productPrice = productPriceText.innerText;
    productPrice = getInputValue() *125 ;
    productPriceText.innerText = productPrice;
}
const plusClick =()=>{
    plusMinus(true)
}
const minusClick =()=>{
    plusMinus(false)
}