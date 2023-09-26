// const h1 = document.querySelector('h1');
// const p = document.querySelector('p');
// const paragraph_class = document.querySelector('.paragraph__class');
// const paragraph__id = document.querySelector('#paragraph__id');
// const input = document.querySelector('.input');

// console.log(input.value);

// console.log({h1, paragraph_class, paragraph__id, input});

// h1.innerHTML = "Esto está modificado desde el DOM";

// console.log(h1.getAttribute('class'));
// h1.setAttribute('class', 'rojo');

// h1.classList.add('rojo');
// h1.classList.remove('vegde');

// h1.classList.toggle('verde');
// h1.classList.contains('verde');

// input.value = "123456";

// // console.log(document.createElement('img'));

// const img = document.createElement('img');
// img.setAttribute('src', 'https://sergioescobar.cl/wp-content/uploads/2022/08/changan-05.png');
// paragraph__id.innerHTML = "";
// paragraph__id.appendChild(img);

const form = document.querySelector('#form');

const input1 = document.querySelector('#input1');
const input2 = document.querySelector('#input2');

const button = document.querySelector('button');
const result = document.querySelector('.result');

const btnOnClick = (e) => {
    console.log(e);
    e.preventDefault();
    my_result = Number(input1.value) + Number(input2.value);
    result.innerHTML = "Resultado: " + my_result;
};

form.addEventListener("submit", btnOnClick);

