
const cartTable= document.getElementById('cart-table');
const cartRow = document.getElementsByClassName('cart-row');

function addToCart(){
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
    console.log(cartRow.length);
}