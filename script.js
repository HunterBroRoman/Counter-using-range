const form = document.querySelector('.form');
const quantityRef = document.querySelector('.amount');
const totalRef = document.createElement('span');

const imagesContainer = document.querySelector('.images-gallery');

form.append(totalRef)

totalRef.before('Загальна вартість: ');
totalRef.after(' ГРН.');

const formHandler = (form) => {

  const {
    elements: {
      price,
      quantity
    }
  } = form;

  const totalPrice = Number(price.value * quantity.value).toFixed(2);

  totalRef.innerHTML = totalPrice;
  quantityRef.innerHTML = quantity.value;
}

form.addEventListener('input', e => {
  formHandler(e.currentTarget)
});