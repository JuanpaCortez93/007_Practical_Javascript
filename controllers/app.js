// DESKTOP MENU (CLASE 7 AND CLASE 11 UNION)
const navbar_email = document.querySelector('.navbar-email');
const desktop_menu = document.querySelector('.desktop-menu');

navbar_email.addEventListener('click', () => {

    if(!product_detail__menu.classList.contains('inactive')){
        product_detail__menu.classList.toggle('inactive');
    }else if(!product_detail_container.classList.contains('inactive')){
        product_detail_container.classList.add('inactive');
    }

    desktop_menu.classList.toggle('inactive');
    

});

// DESKTOP MENU FOR MOBILE
const menu_mobile__icon = document.querySelector('.menu');
const menu_mobile__desktop = document.querySelector('.mobile-menu');

menu_mobile__icon.addEventListener('click', () => {

    if(!product_detail__menu.classList.contains('inactive')){
        product_detail__menu.classList.toggle('inactive');
    }else if(!product_detail_container.classList.contains('inactive')){
        product_detail_container.classList.add('inactive');
    }
    
    menu_mobile__desktop.classList.toggle('inactive');
    

});

//SHOPPING CART - PRODUCT DETAIL MENU (CLASE 13)
const product_detail__icon = document.querySelector('.navbar-shopping-cart');
const product_detail__menu = document.querySelector('#shopping-cart');

product_detail__icon.addEventListener('click', () => {

    if(!menu_mobile__desktop.classList.contains('inactive')){
        menu_mobile__desktop.classList.toggle('inactive');
    }else if(!desktop_menu.classList.contains('inactive')) {
        desktop_menu.classList.toggle('inactive');
    }else if(!product_detail_container.classList.contains('inactive')){
        product_detail_container.classList.add('inactive');
    }
    
    product_detail__menu.classList.toggle('inactive');
    

});

// PRODUCT LIST (CLASE 6)

const render_products = (product_list) => {
    
    let product_card = '';
    const cards_container = document.querySelector('.cards-container');

    for(product of product_list){
    
        product_card += `<div class="product-card">
            <img class="product-card__image" data-id='${product.id}' src="${product.image}" alt="Product Image">
            <div class="product-info">
                <div>
                <p>$${product.price}</p>
                <p>${product.name}</p>
                </div>
                <figure>
                    <img class='add-product' data-id='${product.id}' src="./icons/bt_add_to_cart.svg" alt="">
                </figure>
            </div>
        </div>`;
    
        cards_container.innerHTML = product_card;
    }
}

const product_list = [
    {
        id: 1, 
        name: 'Bike',
        price: 120.99,
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        description: 'Con esta bici podrás subir la cuesta de San Juan de Quito-Ecuador sin problemas'
    },
    {
        id: 2, 
        name: 'Laptop',
        price: 820.99,
        image: 'https://www.computron.com.ec/wp-content/uploads/2023/06/15-EF2526LA-BTS-2.jpg',
        description: 'Con esta laptop podrás jugar a 120fps'
    },
    {
        id: 3, 
        name: 'Pantalla',
        price: 220.99,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAyowHjv9ZIy1a8WmZRFr29fgLuICea91EpIO3tQb40A&s',
        description: 'Con esta laptop tendrás siempre una visión 20/20'
    },
    {
        id: 4, 
        name: 'Impresora',
        price: 180.99,
        image: 'https://thumbs.dreamstime.com/b/impresora-44688812.jpg',
        description: 'Esta nueva impresora permite imprimir 30 hojas en tan solo 20 segundos'
    }
];

render_products(product_list);

// PRODUCT LIST (CLASE 12)

const product_detail_container = document.querySelector('#product-detail');
const product_card_image = document.querySelectorAll('.product-card__image');
const product_detail__close = document.querySelector('#product-detail-close__img');

const info__img = document.querySelector('#product-info__img');
const info__price = document.querySelector('#product-info__price');
const info__name = document.querySelector('#product-info__name');
const info__description = document.querySelector('#product-info__description');

const add_to_cart_button = document.querySelector('.add-to-cart-button');

for (let i = 0 ; i < product_card_image.length; i++){

    product_card_image[i].addEventListener('click', () => {

        if(!desktop_menu.classList.contains('inactive')){
            desktop_menu.classList.toggle('inactive');
        }else if(!product_detail__menu.classList.contains('inactive')){
            product_detail__menu.classList.toggle('inactive');
        }
            
        product_detail_container.classList.remove('inactive');
        const data_id = product_card_image[i].getAttribute('data-id');

        info__img.setAttribute('src', product_list[data_id-1].image);
        info__price.innerHTML = "$" + product_list[data_id-1].price;
        info__name.innerHTML = product_list[data_id-1].name;
        info__description.innerHTML = product_list[data_id-1].description;

        add_to_cart_button.setAttribute('data-id', product_list[data_id-1].id);

    });
    
}

product_detail__close.addEventListener('click', () => {    
    product_detail_container.classList.add('inactive');
});


//ADD PRODUCTS
var total_price_value = 0;
var products_cart_counter_value = 0;

const render_prices = (product_list) => {

    const add_product_button = document.querySelectorAll('.add-product');
    const total_price_info = document.querySelector('#total_price');
    const order_list = document.querySelector('.order-list');
    const products_cart_counter_info = document.querySelector('.products-cart-counter');

    for(let i=0; i<add_product_button.length; i++){
        add_product_button[i].addEventListener('click', () => {
            const data_id = add_product_button[i].getAttribute('data-id');
            total_price_value += product_list[data_id - 1].price;
            total_price_info.innerHTML = total_price_value;
        
            products_cart_counter_value += 1;
            products_cart_counter_info.innerHTML = products_cart_counter_value;

            const html_text = `
            <div class="shopping-cart" data-id="${data_id}">
                <figure>
                    <img src="${product_list[data_id-1].image}" alt="bike">
                </figure>
                <p>${product_list[data_id-1].name}</p>
                <p>$${product_list[data_id-1].price}</p>
                <img src="./icons/icon_close.png" alt="close" class="erase-product">
            </div>`
        
            order_list.innerHTML += html_text;
            
            if(product_detail__menu.classList.contains('inactive')){
                product_detail_container.classList.add('inactive');    
                product_detail__menu.classList.toggle('inactive');
            }

            //DELETE PRODUCTS

            const erase_product__item = document.querySelectorAll('.erase-product');

            for(let j = 0; j<erase_product__item.length; j++){
                erase_product__item[j].addEventListener('click', ()=>{
                    const shopping_cart = document.querySelectorAll('.shopping-cart');
                    const data_id = shopping_cart[j].getAttribute('data-id');
                    total_price_value -= product_list[data_id - 1].price;
                    total_price_info.innerHTML = total_price_value.toFixed(2);

                    shopping_cart[j].remove();

                    products_cart_counter_value -= 1;
                    products_cart_counter_info.innerHTML = products_cart_counter_value;


                });
            }

        });
    }

    const add_product_button__detailed = document.querySelectorAll('.add-to-cart-button');

    for(let i=0; i < add_product_button__detailed.length; i++){
        add_product_button__detailed[i].addEventListener('click', () => {
            const data_id = add_product_button__detailed[i].getAttribute('data-id');
            total_price_value += product_list[data_id - 1].price;
            total_price_info.innerHTML = total_price_value;
        
            order_list.innerHTML += html_text;
            products_cart_counter_value += 1;

            const html_text = `
            <div class="shopping-cart" data-id="${data_id}">
                <figure>
                    <img src="${product_list[data_id-1].image}" alt="bike">
                </figure>
                <p>${product_list[data_id-1].name}</p>
                <p>$${product_list[data_id-1].price}</p>
                <button type="button"></button>
                <img src="./icons/icon_close.png" alt="close" class="erase-product" data-id="${products_cart_counter_value}">
            </div>`
        
            products_cart_counter_info.innerHTML = products_cart_counter_value;

            if(product_detail__menu.classList.contains('inactive')){
                product_detail_container.classList.add('inactive');    
                product_detail__menu.classList.toggle('inactive');
            }

            //DELETE PRODUCTS

            const erase_product__item = document.querySelectorAll('.erase-product');

            for(let j = 0; j<erase_product__item.length; j++){
                erase_product__item[j].addEventListener('click', ()=>{
                    const shopping_cart = document.querySelectorAll('.shopping-cart');
                    const data_id = shopping_cart[j].getAttribute('data-id');
                    total_price_value -= product_list[data_id - 1].price;
                    total_price_info.innerHTML = total_price_value.toFixed(2);

                    shopping_cart[j].remove();

                    products_cart_counter_value -= 1;
                    products_cart_counter_info.innerHTML = products_cart_counter_value;


                });
            }

        });
    }

}

render_prices(product_list);



