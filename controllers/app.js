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

    console.log("HOLOOO")
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
                <p>${product.price}</p>
                <p>${product.name}</p>
                </div>
                <figure>
                    <img src="./icons/bt_add_to_cart.svg" alt="">
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
        price: 120,
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        description: 'Con esta bici podrás subir la cuesta de San Juan de Quito-Ecuador sin problemas'
    },
    {
        id: 2, 
        name: 'Laptop',
        price: 820,
        image: 'https://www.computron.com.ec/wp-content/uploads/2023/06/15-EF2526LA-BTS-2.jpg',
        description: 'Con esta laptop podrás jugar a 120fps'
    },
    {
        id: 3, 
        name: 'Pantalla',
        price: 220,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAyowHjv9ZIy1a8WmZRFr29fgLuICea91EpIO3tQb40A&s',
        description: 'Con esta laptop tendrás siempre una visión 20/20'
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
        info__price.innerHTML = product_list[data_id-1].price;
        info__name.innerHTML = product_list[data_id-1].name;
        info__description.innerHTML = product_list[data_id-1].description;

    });
    
}

product_detail__close.addEventListener('click', () => {    
    product_detail_container.classList.add('inactive');
});

