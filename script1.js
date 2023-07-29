
const Quntity = document.getElementsByClassName('quantity');
const Price = document.getElementsByClassName('price');
const Stotal = document.getElementsByClassName('stotal');
const pdPrice = document.getElementById('pd-price');
const totalBill = document.getElementsByClassName('total-bill');
const deliveryCharge = document.getElementById('delivery-charge');
const Discount = document.getElementById('discount');
const amountPaid = document.getElementById('paid');
const applyCoupon= document.getElementById('apply-coupon');
const cartTable= document.getElementById('cart-table');
const cartRow = document.getElementsByClassName('cart-row');
const cartHeader = document.getElementById('cart-header')

// let xx = document.getElementById('xx');
const checkQuantity =()=>{
    for(var i=0;i<Quntity.length;i++){
        if(Quntity[i].value<1){
            Quntity[i].value = 1;
            alert("Atleast 1 product should be selected.");
            // console.log(Quntity[i].value);
        }
    }
    subTotal();
    setPdPrice();
    setTotalPrice();

}
checkQuantity();

function subTotal(){
    for(var i=0;i<Stotal.length;i++){
        Stotal[i].innerHTML = Price[i].innerHTML * Quntity[i].value ;
    }

    // console.log(Price[0].innerHTML * Quntity[0].value);
}

function setPdPrice(){
    var s = 0;
    for(var i=0;i<Stotal.length;i++){
        var a = parseInt(Stotal[i].innerHTML) ;
        s = a + s;
    }
    pdPrice.innerHTML = s;
    // console.log(pdPrice);    
}

function setTotalPrice(){
    var a = parseInt(pdPrice.innerHTML) ;
    var b = parseInt(deliveryCharge.innerHTML) ; 
    var c = parseInt(Discount.innerHTML) ;
    amountPaid.innerHTML = a + b - c;
    // console.log(amountPaid.innerHTML);    
}

function setDiscount(){
    if(applyCoupon.value === 'DISCOUNT'){
        Discount.innerHTML =  20;
        setTotalPrice();
    } 
    console.log(applyCoupon.value);
}

function deleteItem(){

    cartRow[0].remove(); 
    checkCart();  
    checkQuantity();
    
    console.log(cartRow.length);
}

function checkCart(){
    if(cartRow.length==0){
        cartHeader.innerHTML = `
        <th colspan="6">Your Cart is empty!!</th>
        `
        deliveryCharge.innerHTML=0;
    }
}

function addToCart(e){
    cartTable.innerHTML =cartTable.innerHTML + `
    <tr class="cart-row">
        <td><i onclick="deleteItem()" class="fa-solid fa-trash-can"></i></td>
        <td><img class="cart-img" src="img/pd5.jpg" alt=""></td>
        <td>Winter Hat</td>
        <td><input oninput="checkQuantity()" onchange="subTotal()" class="quantity" type="number" value="1"></td>
        <td>$<span class="price">15</span></td>
        <td>$<span class="stotal">15</span></td>
    </tr>
    `; 
    e.preventDefault();

    console.log(cartRow.length);
}