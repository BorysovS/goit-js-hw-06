const categories = document.querySelectorAll('.item');
const categoriesArr = [...categories];
console.log("Number of categories:", categoriesArr.length);

const elements = categoriesArr.map(element => { 
   console.log('Category:', element.firstElementChild.textContent)
    const elementsList = element.lastElementChild
    const products = [...elementsList.children]
    console.log('Elements:', products.length) 
})