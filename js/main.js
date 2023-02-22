const userName = document.getElementById('name-lastname');
const errorName = document.getElementById('error-name');
const kmToGo = document.getElementById('km-to-go');
const errorKM = document.getElementById('error-km');
const userAge = document.getElementById('user-age');
const errorAge = document.getElementById('error-age');
const nameElement = document.getElementById('name-element');
const priceElement = document.getElementById('price');
const calculateBtn = document.getElementById('generate-btn');
const pricePerkm = 0.21;
const underageDiscount = 20;
const overageDiscount = 40;


calculateBtn.addEventListener('click', ()=>{
    errorAge.innerHTML = '';
    errorKM.innerHTML = '';
    errorName.innerHTML = '';
    if(isFinite(userName.value) || isNaN(kmToGo.value) || userAge.value <= 0){
        if(isFinite(userName.value)){
            errorName.innerHTML = 'Insert a valid name';
        }
        if(isNaN(kmToGo.value)){
            errorKM.innerHTML = 'Insert a valid route';
        }
        if(userAge.value <= 0){
            errorAge.innerHTML = 'Please select a field';
        }
        userName.value = '';
        kmToGo.value = '';
        userAge.value = '0';
    }else {
        let price = pricePerkm * Number(kmToGo.value);
        if(userAge.value == 1){
            price = price * ((100-underageDiscount)/100);
        }else if(userAge.value == 2){
            price = price;
        }else {
            price = price * ((100-overageDiscount)/100);
        }
        priceElement.innerHTML = `${price.toFixed(2)}€`;
        nameElement.innerHTML = userName.value;
    }
    userName.value = '';
    kmToGo.value = '';
    userAge.value = '0';
})