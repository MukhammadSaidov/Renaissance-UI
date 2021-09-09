let categories = [
    {
        id: 1,
        name: 'Интерьеры'
    },
    {
        id: 2,
        name: 'Архитектура'
    },
    {
        id: 3,
        name: 'Строительство'
    },
    {
        id: 4,
        name: 'Ремонт'
    },
]

let items = [
    {
        categorie_id: 1,
        img: 'https://images.unsplash.com/photo-1505409859467-3a796fd5798e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
        title: 'Разработка интерьера для загородного дома',
    },
    {
        categorie_id: 2,
        img: 'https://images.unsplash.com/photo-1464075208758-5623fb69e13b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80',
        title: 'Разработка интерьера для загородного дома',
    },
    {
        categorie_id: 4,
        img: 'https://images.unsplash.com/photo-1526055577108-80193f001dde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
        title: 'Разработка интерьера для загородного дома',
    },
    {
        categorie_id: 1,
        img: 'https://images.unsplash.com/photo-1525896544042-354764aa27e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=668&q=80',
        title: 'Разработка интерьера для загородного дома',
    },
    {
        categorie_id: 2,
        img: 'https://images.unsplash.com/photo-1489171078254-c3365d6e359f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1778&q=80',
        title: 'Разработка интерьера для загородного дома',
    },
    {
        categorie_id: 2,
        img: 'https://images.unsplash.com/photo-1497366672149-e5e4b4d34eb3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
        title: 'Разработка интерьера для загородного дома',
    },
    {
        categorie_id: 1,
        img: 'https://images.unsplash.com/photo-1614959541555-4550895d4b2d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80',
        title: 'Разработка интерьера для загородного дома',
    },
    {
        categorie_id: 4,
        img: 'https://images.unsplash.com/photo-1577701244709-a4b6fa3b4057?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
        title: 'Разработка интерьера для загородного дома',
    },
    {
        categorie_id: 3,
        img: 'https://images.unsplash.com/photo-1543490791-db8323d8e5b2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
        title: 'Разработка интерьера для загородного дома',
    },
    {
        categorie_id: 4,
        img: 'https://images.unsplash.com/photo-1558211583-d26f610c1eb1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=995&q=80',
        title: 'Разработка интерьера для загородного дома',
    },
    {
        categorie_id: 1,
        img: 'https://images.unsplash.com/photo-1544690205-44c11f2deecb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
        title: 'Разработка интерьера для загородного дома',
    },
    {
        categorie_id: 2,
        img: 'https://images.unsplash.com/photo-1625585598750-3535fe40efb3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
        title: 'Разработка интерьера для загородного дома',
    },
]


const filter = document.querySelector('.filter')
const filter_images = document.querySelector('#filter_images')


for(let itembek of items) {
    let img = document.createElement('img')
    img.setAttribute('src', itembek.img)
}

for (let item of categories){
    let btn = document.createElement('button')
    btn.innerText = item.name
    btn.classList.add('btnfilter')
    btn.setAttribute('id', item.id)
    filter.append(btn)
}

let buttonFilter = document.querySelectorAll(".btnfilter")

for(let item of buttonFilter){
    item.addEventListener('click', () => {
        filter_images.innerHTML = ''

        for(let itemm of items){
            if( item.getAttribute('id') == itemm.categorie_id){
                 let img = document.createElement('img')
                 img.setAttribute('src' , itemm.img)
                filter_images.append(img)
            }
        }
    });
}
