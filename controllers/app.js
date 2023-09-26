// DESKTOP MENU (CLASE 7 AND CLASE 11 UNION)
const navbar_email = document.querySelector('.navbar-email');
const desktop_menu = document.querySelector('.desktop-menu');

navbar_email.addEventListener('click', () => {

    if(!product_detail__menu.classList.toggle('inactive')){
        desktop_menu.classList.toggle('inactive');
        product_detail__menu.classList.toggle('inactive');
    }else{
        desktop_menu.classList.toggle('inactive');
    }

});

// DESKTOP MENU FOR MOBILE
const menu_mobile__icon = document.querySelector('.menu');
const menu_mobile__desktop = document.querySelector('.mobile-menu');

menu_mobile__icon.addEventListener('click', () => {

    if(!product_detail__menu.classList.contains('inactive')){
        menu_mobile__desktop.classList.toggle('inactive');
        product_detail__menu.classList.toggle('inactive');
    }else{
        menu_mobile__desktop.classList.toggle('inactive');
    }

});

//SHOPPING CART - PRODUCT DETAIL MENU (CLASE 13)
const product_detail__icon = document.querySelector('.navbar-shopping-cart');
const product_detail__menu = document.querySelector('#shopping-cart');

product_detail__icon.addEventListener('click', () => {

    if(!menu_mobile__desktop.classList.contains('inactive')){
        menu_mobile__desktop.classList.toggle('inactive');
        product_detail__menu.classList.toggle('inactive');
    }else if(!desktop_menu.classList.contains('inactive')) {
        desktop_menu.classList.toggle('inactive');
        product_detail__menu.classList.toggle('inactive');
    }else{
        product_detail__menu.classList.toggle('inactive');
    }

});

// PRODUCT LIST (CLASE 6)
const product_list = [];

product_list.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

product_list.push({
    name: 'Pantalla',
    price: 220,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

product_list.push({
    name: 'Laptop',
    price: 820,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

product_list.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

product_list.push({
    name: 'Pantalla',
    price: 220,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

const render_products = (product_list) => {
    
    let product_card = '';
    const cards_container = document.querySelector('.cards-container');

    for(product of product_list){
    
        product_card += `<div class="product-card">
            <img src="${product.image}" alt="Product Image">
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

render_products(product_list);

