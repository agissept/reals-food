const listMenu = [{
        name: "Ratatouille",
        image: "assets/image/menu1.png",
        rating: 5,
        price: 15
    },
    {
        name: "Caponata",
        image: "assets/image/menu2.png",
        rating: 4,
        price: 10
    },
    {
        name: "Cassoulet",
        image: "assets/image/menu3.png",
        rating: 3,
        price: 16
    },
    {
        name: "Pot-au-feu",
        image: "assets/image/menu4.png",
        rating: 5,
        price: 11
    },
    {
        name: "Piperade",
        image: "assets/image/menu5.png",
        rating: 4,
        price: 15
    }
];

const containerListMenu = document.getElementById("list-menu");


for (let i = 0; i < listMenu.length; i++) {
    const itemMenu = createItemMenu(listMenu[i]);
    containerListMenu.appendChild(itemMenu.cloneNode(true));
}


function createItemMenu(menu) {
    const menuContainer = document.createElement('section');
    menuContainer.className = 'menu';

    const menuImage = document.createElement('img');
    menuImage.setAttribute('src', menu.image);
    menuImage.className = 'menu-image';

    const menuName = document.createElement('div');
    menuName.className = 'menu-name center-vertical';

    const menuH3 = document.createElement('h3');
    menuH3.innerText = menu.name;

    const menuRating = document.createElement('div');
    menuRating.className = 'rating';

    menuName.appendChild(menuH3);
    menuName.appendChild(menuRating);

    const ul = document.createElement('ul');
    menuRating.appendChild(ul);


    for (let i = 0; i < 5; i++) {
        const li = document.createElement('li');
        const star = document.createElement('img');

        if(menu.rating <= i){
            star.setAttribute('src', 'assets/image/star-faded.png');

        }else{
            star.setAttribute('src', 'assets/image/star.png');
        }
        li.appendChild(star);

        
        ul.appendChild(li.cloneNode(true));
    }

    const menuPrice = document.createElement('div');
    menuPrice.className = 'price center-vertical';
    menuPrice.innerHTML = '<h2>$' + menu.price + '</h2>';

    menuContainer.appendChild(menuImage);
    menuContainer.appendChild(menuName);
    menuContainer.appendChild(menuPrice);

    return menuContainer;
}
