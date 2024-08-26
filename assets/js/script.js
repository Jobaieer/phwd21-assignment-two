/**
 ** 21 Days of Code : Assignment-2
 ** Script Js File
 ** Written by Jobaieer
 */

//Product Section

//Array of objects

const imagesArray = [
  {
    url: "./img/main-product-images/item2.png",
  },
  {
    url: "./img/main-product-images/item4.png",
  },
  {
    url: "./img/main-product-images/item6.png",
  },
  {
    url: "./img/main-product-images/item1.png",
  },
  {
    url: "./img/main-product-images/item3.png",
  },
  {
    url: "./img/main-product-images/item5.png",
  },
];

function seeMoreProducts() {
  const productContainer = document.getElementById("products");

  let productDiv = document.createElement("div");

  //for loop
  for (const item of imagesArray) {
    //console.log(item);
    let productDivImage = document.createElement("div");

    productDivImage.classList.add("product-card");
    productDivImage.innerHTML = `
    <img src="${item.url}" />
    `;

    productContainer.appendChild(productDivImage);

    console.log(productDivImage);
  }

  console.log("click", productContainer);
}

//Newsletter Subscriber by Email

function subEmail(event) {
  event.preventDefault();

  const email = event.target.email.value;

  console.log(email);

  const successContainer = document.getElementById("success_container");

  console.log("successContainer");

  const emailParagraph = document.createElement("p");
  emailParagraph.innerText = `[${email}] Thanks for subscribe!`;

  console.log(emailParagraph);

  successContainer.appendChild(emailParagraph);
}

//Footer Email Submit

function submitMail(event) {
  event.preventDefault();

  const email = event.target.email.value;

  console.log(email);

  const submittedContainer = document.getElementById("submitted_container");

  console.log("submittedContainer");

  const emailParagraph = document.createElement("h6");
  emailParagraph.innerText = `Thanks for submit your mail.`;

  console.log(emailParagraph);

  submittedContainer.appendChild(emailParagraph);
}
