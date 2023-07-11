
const orders = document.querySelectorAll('.order');
const subtotalAmount = document.getElementById('subtotal-amount');
const totalAmount = document.getElementById('total-amount');
const checkoutButton = document.getElementById('checkout');
const confirmationMessage = document.getElementById('confirmation');

let subtotal = 0;


orders.forEach(order => {
    const minusButton = order.querySelector('.fa-minus');
    const plusButton = order.querySelector('.fa-plus');
    const numberElement = order.querySelector('.number');
    const priceElement = order.querySelector('.price p');



    minusButton.addEventListener('click', () => {
        let number = parseInt(numberElement.textContent);
        if (number > 1) {
            number--;
            numberElement.textContent = number;
            subtotal -= parseFloat(priceElement.textContent.replace('$', ''));
            updateTotals();
        }
    });

    plusButton.addEventListener('click', () => {
        let number = parseInt(numberElement.textContent);
        number++;
        numberElement.textContent = number;
        subtotal += parseFloat(priceElement.textContent.replace('$', ''));
        updateTotals();
    });
});


checkoutButton.addEventListener('click', () => {

    document.querySelector('.content').style.display = 'none';

    confirmationMessage.classList.remove('hidden');
});


function updateTotals() {
    const shippingCost = 2.00;
    const vatRate = 0.2; 

    subtotalAmount.textContent = '$' + subtotal.toFixed(2);

    const totalSubtotal = subtotal + shippingCost;
    const totalVAT = totalSubtotal * vatRate;
    const totalAmountValue = totalSubtotal + totalVAT;

    totalAmount.textContent = '$' + totalAmountValue.toFixed(2);
}


// setTimeout(() => {
//     container.classList.remove("hidden");
// }, 1500);
