function solve() {
   let textArea = document.querySelector('body> div > textarea');
   let totalPrice = 0;
   let listOfThings = [];
   let addBtn = document.getElementsByClassName('add-product');
   let arrayBtn = Array.from(addBtn);

   for (let i = 0; i < arrayBtn.length; i++) {
      arrayBtn[i].addEventListener('click', function one() {
         let name = document.querySelector(`body > div > div:nth-child(${i + 2}) > div.product-details > div`).textContent;
         let price = document.querySelector(`body > div > div:nth-child(${i + 2}) > div.product-line-price`).textContent;
         if (!listOfThings.includes(name)) {
            listOfThings.push(name);
         }
         let result = `Added ${name} for ${price} to the cart.\n`;
         totalPrice += Number(price);
         textArea.value += result;
      })
   }
   let checkOut = document.querySelector('body > div > button');
   checkOut.addEventListener('click', function two() {
      let finalString = `You bought ${listOfThings.join(', ')} for ${totalPrice.toFixed(2)}.`;
      textArea.value += finalString;
      disableButtons();

   })
   function disableButtons() {
      let buttons = Array.from(document.querySelectorAll('button'));
      buttons.forEach(button => button.disabled = true)
   }

}