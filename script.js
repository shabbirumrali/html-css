console.log("Hello World!");

const h1 = document.querySelector('h1');

h1.addEventListener('click', () => {
    const element = document.createElement('p');
    element.innerText = "Hello p tag";
    h1.appendChild(element);
    console.log('CLicked')
})