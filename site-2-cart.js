// function addtoCart(item){
//     var selecttedItem=document.createElement("div");
//     selecttedItem.classList.add('cartImg');
//   }

const cartContainer = document.querySelector('.cart-container');


  
var addItemId=0;
function addToCart(item){
  console.log('hello cart');
  addItemId+=1;
   var selectedItem=document.createElement('div');
   selectedItem.classList.add('cartImg');
   selectedItem.setAttribute('id',addItemId);
   var img=document.createElement('img');
  //  img.setAttribute('src',item.children[0].currentSrc);
 img.setAttribute('src',item.children[0].children[0].currentSrc);
  img.style.border = "1px solid black";

   var price =  document.createElement('div');
   price.innerText=item.children[2].innerText;
   price.classList.add('price');
   var label=document.createElement('div');
   label.innerText=item.children[1].innerText;
   label.classList.add('label')
   var select=document.createElement('span');
  //  select.innerText=item.children[2].children[1].value;
   label.append(select);
   var delBtn=document.createElement('button');
   delBtn.classList.add('cart-button');
   delBtn.innerText='Delete';
   delBtn.setAttribute('onclick','del('+addItemId+')');
   var cartItems=document.getElementById('title');
   selectedItem.append(img);
   selectedItem.append(price);
   selectedItem.append(label);
   selectedItem.append(delBtn);
   var box =document.createElement('div');
   box.classList.add('box')
   box.appendChild(selectedItem)
   cartItems.append(box);

}



function del(item){
  document.getElementById(item).remove();
}

function openCart(){
  cartContainer.classList.toggle('active');
}
