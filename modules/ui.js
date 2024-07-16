import axios from "axios"
import { millisToMinutesAndSeconds } from "../modules/avarage.js";
const PUBLIC_URL = import.meta.env.VITE_PUBLIC_URL
let token = localStorage.getItem('token')
function reloadSingers(arr, place) {
    place.innerHTML = ''
    for (let item of arr) {

        const boxGlav = document.createElement('a');
        boxGlav.className = 'box_glav';
        boxGlav.href = `/pages/artists/index.html?id=${item.id}`
        // Create the box div
        const box = document.createElement('div');
        box.className = 'box';

        // Create the singer div
        const singer = document.createElement('div');
        singer.className = 'singer';

        // Create the singer photo div
        const singerPhoto = document.createElement('div');
        singerPhoto.className = 'singer_photo';
        singerPhoto.style.backgroundImage = `url(${item.images[0].url})`

        const anchor = document.createElement('a');
        anchor.href = '#';
        anchor.textContent = item.name;


        // Append the singer photo to the singer div
        singer.appendChild(singerPhoto);

        // Create the singer name div
        const singerName = document.createElement('div');
        singerName.className = 'singer_name';

        // Create the anchor tag for the singer name

        // anchor.textContent = item.name;

        // Append the anchor to the singer name div
        singerName.appendChild(anchor);

        // Create the span for the artist text
        const artistSpan = document.createElement('span');
        artistSpan.textContent = 'Artist';

        // Append the artist span to the singer name div
        singerName.appendChild(artistSpan);

        // Append the singer name div to the singer div
        singer.appendChild(singerName);

        // Append the singer div to the box div
        box.appendChild(singer);

        // Append the box div to the main container div
        boxGlav.appendChild(box);

        // Create the img element
        const img = document.createElement('img');
        img.src = '/img/volume-2.svg';
        img.alt = '';

        // Append the img to the main container div
        boxGlav.appendChild(img);

        // Append the main container div to the body or any other container
        place.appendChild(boxGlav);

        let page = location.search.split('=').at(-1)
        if (page === item.id) {
            boxGlav.classList.add('active-artist')
        }

        // axios.get(`https://api.spotify.com/v1/artists/${item.id}/top-tracks`, {
        //     headers: {
        //         Authorization: `Bearer ${token}`
        //     }
        // })
        //     .then(res => {
        //         console.log(res);
        //     })
    }
    // let boxes = document.querySelectorAll('.box');
    // boxes.forEach(element => {
    //     element.onclick = () => {
    //         boxes.forEach(el => el.parentElement.classList.remove('active-class'));
    //         element.parentElement.classList.add('active-class');
    //     }
    // })
}

export function rel_music(arr, place) {
    for (let item of arr) {
        let divElement = document.createElement('a');
        divElement.href = `/pages/artists/index.html?id=${item.id}`
        divElement.classList.add('item_music');


        let innerDivElement = document.createElement('div');
        innerDivElement.classList.add('music_name');

        // Создаем элемент img
        let imgElement = document.createElement('img');
        imgElement.src = item.images[0].url
        imgElement.alt = '';

        // Добавляем img во вложенный div
        innerDivElement.appendChild(imgElement);

        // Создаем элемент span
        let spanElement = document.createElement('span');
        spanElement.textContent = item.name

        // Добавляем span во вложенный div
        innerDivElement.appendChild(spanElement);

        // Добавляем вложенный div в основной div
        divElement.appendChild(innerDivElement);

        // Создаем кнопку (элемент button)
        let buttonElement = document.createElement('button');

        // Создаем элемент img для кнопки
        let buttonImgElement = document.createElement('img');
        buttonImgElement.src = '/img/Polygon 1.png';
        buttonImgElement.alt = '';

        // Добавляем img в кнопку
        buttonElement.appendChild(buttonImgElement);

        // Добавляем кнопку в основной div
        divElement.appendChild(buttonElement);

        // Находим контейнер, в который вы хотите вставить созданный элемент
        // Замените 'your-container-id' на id вашего контейнера

        // Вставляем созданный элемент в контейнер
        place.appendChild(divElement);
    }
}
export function reloadNewRel(arr, place) {
    place.innerHTML = ''
    for (let item of arr) {
        const albumDiv = document.createElement('a');
        albumDiv.classList.add('album');
        albumDiv.href = `/pages/artists/index.html?id=${item.id}`
        // Создаем <div class="img">
        const imgDiv = document.createElement('div');
        imgDiv.classList.add('img');

        // Создаем <img> внутри <div class="img">
        const imgElement = document.createElement('img');
        imgElement.src = item.images[0].url
        imgDiv.appendChild(imgElement);

        // Добавляем <div class="img"> в основной контейнер <div class="album">
        albumDiv.appendChild(imgDiv);

        // Создаем <div class="data">
        const dataDiv = document.createElement('div');
        dataDiv.classList.add('data');

        // Создаем <span class="name">
        const nameSpan = document.createElement('span');
        nameSpan.classList.add('name');
        nameSpan.textContent = item.name
        dataDiv.appendChild(nameSpan);

        // Создаем <span class="title">
        const titleSpan = document.createElement('span');
        titleSpan.classList.add('title');
        titleSpan.textContent = item.type
        dataDiv.appendChild(titleSpan);

        // Добавляем <div class="data"> в основной контейнер <div class="album">
        albumDiv.appendChild(dataDiv);

        // Создаем <button>
        const buttonElement = document.createElement('button');

        // Создаем <img> внутри <button>
        const buttonImg = document.createElement('img');
        buttonImg.src = '/img/Polygon 1.png';
        buttonImg.alt = '';
        buttonElement.appendChild(buttonImg);

        // Добавляем <button> в основной контейнер <div class="album">
        albumDiv.appendChild(buttonElement);

        // Теперь добавляем созданный контейнер <div class="album"> в документ
        place.appendChild(albumDiv);
    }
}
export function reloadNewRel2(arr, place) {
    place.innerHTML = ''
    for (let item of arr) {
        const albumDiv = document.createElement('a');
        albumDiv.classList.add('album');
        albumDiv.href = `/pages/album/index.html?id=${item.id}`
        // Создаем <div class="img">
        const imgDiv = document.createElement('div');
        imgDiv.classList.add('img');

        // Создаем <img> внутри <div class="img">
        const imgElement = document.createElement('img');
        imgElement.src = item.images[0].url
        imgDiv.appendChild(imgElement);

        // Добавляем <div class="img"> в основной контейнер <div class="album">
        albumDiv.appendChild(imgDiv);

        // Создаем <div class="data">
        const dataDiv = document.createElement('div');
        dataDiv.classList.add('data');

        // Создаем <span class="name">
        const nameSpan = document.createElement('span');
        nameSpan.classList.add('name');
        if (item.name.length > 18) {
            nameSpan.innerHTML = item.name.slice(0, 10) + '..';
        } else {
            nameSpan.innerHTML = item.name;
        }

        dataDiv.appendChild(nameSpan);

        // Создаем <span class="title">
        const titleSpan = document.createElement('span');
        titleSpan.classList.add('title');
        titleSpan.textContent = item.type
        dataDiv.appendChild(titleSpan);

        // Добавляем <div class="data"> в основной контейнер <div class="album">
        albumDiv.appendChild(dataDiv);

        // Создаем <button>
        const buttonElement = document.createElement('button');

        // Создаем <img> внутри <button>
        const buttonImg = document.createElement('img');
        buttonImg.src = '/img/Polygon 1.png';
        buttonImg.alt = '';
        buttonElement.appendChild(buttonImg);

        // Добавляем <button> в основной контейнер <div class="album">
        albumDiv.appendChild(buttonElement);

        // Теперь добавляем созданный контейнер <div class="album"> в документ
        place.appendChild(albumDiv);
    }
}
let path = window.location.pathname
export function left_Side_Bar(place) {
    place.innerHTML = ''
    const topDiv = document.createElement('div')
    topDiv.classList.add('top')

    const topItemHome = document.createElement('a')
    topItemHome.classList.add('top_item', 'home', 'active')

    const homeImg = document.createElement('img')
    topItemHome.href = '/'
    homeImg.src = '/img/Home_Fill_S (1).png'
    homeImg.alt = ''
    homeImg.title = 'Главная'

    const homeLink = document.createElement('a')
    homeLink.classList.add('main-elem')
    homeLink.href = '/'
    homeLink.textContent = 'Главная'

    topItemHome.appendChild(homeImg)
    topItemHome.appendChild(homeLink)

    const topItemSearch = document.createElement('a')
    topItemSearch.classList.add('top_item', 'search')
    topItemSearch.href = '/pages/search/'

    const searchImg = document.createElement('img')
    searchImg.src = '/img/Search_S (1).png'
    searchImg.alt = ''
    searchImg.title = 'Поиск'
    // searchImg.onclick = () => {

    // }
    const searchLink = document.createElement('a');
    searchLink.classList.add('main-elem');
    searchLink.href = '/pages/search/';
    searchLink.textContent = 'Поиск';

    topItemSearch.appendChild(searchImg);
    topItemSearch.appendChild(searchLink);

    topDiv.appendChild(topItemHome);
    topDiv.appendChild(topItemSearch);

    const bottomDiv = document.createElement('div');
    bottomDiv.classList.add('bottom');

    const bottomItem = document.createElement('div');
    bottomItem.classList.add('bootom_item');

    const libraryDiv = document.createElement('div');
    libraryDiv.classList.add('library');

    const libraryImg = document.createElement('img');
    libraryImg.src = '/img/Library_S (1).png';
    libraryImg.alt = '';

    const libraryLink = document.createElement('a');
    libraryLink.classList.add('active2');
    libraryLink.href = '#';
    libraryLink.innerHTML = 'Моя <br> библиотека';

    libraryDiv.appendChild(libraryImg);
    libraryDiv.appendChild(libraryLink);

    const libraryIconsDiv = document.createElement('div');
    libraryIconsDiv.classList.add('library-icons');

    const plusButton = document.createElement('button');


    const plusImg = document.createElement('img');
    plusImg.src = '/img/Search_S (1).png';

    plusButton.appendChild(plusImg);

    let isInputVisible = false;

    plusImg.onclick = () => {
        if (!isInputVisible) {
            // Показываем input_search плавно
            input_search.style.display = 'block';
            setTimeout(() => {
                input_search.classList.add('animate');
                input_search.style.opacity = '1'; // Делаем видимым
                plusImg.style.width = '50%';
                plusImg.style.height = '50%';
                plusImg.classList.add('index');

                isInputVisible = true;
            }, 10); // Небольшая задержка перед добавлением класса animate
        } else {
            // Скрываем input_search плавно
            input_search.classList.remove('animate');
            input_search.style.opacity = '0'; // Делаем невидимым
            plusImg.style.width = ''; // Сбрасываем явно заданные значения
            plusImg.style.height = '';
            plusImg.classList.remove('index');

            // Через 0.3 секунды (по времени анимации) скрываем input_search
            setTimeout(() => {
                input_search.style.display = 'none';
                isInputVisible = false;
            }, 300);
        }
    };

    const input_search = document.createElement('input');
    input_search.classList.add('inp')
    let contaiber_artist = document.createElement('div')
    contaiber_artist.classList.add('contaiber-artist')


    libraryIconsDiv.appendChild(plusButton);
    libraryIconsDiv.appendChild(input_search);

    bottomItem.appendChild(libraryDiv);
    bottomItem.appendChild(libraryIconsDiv);

    bottomDiv.appendChild(bottomItem);

    // Добавляем созданные элементы в DOM

    place.appendChild(topDiv);
    place.appendChild(bottomDiv);
    bottomDiv.appendChild(contaiber_artist)


    // Устанавливаем стили в зависимости от текущего пути
    if (path.includes('/pages/search/')) {
        searchLink.style.color = 'white';
        searchImg.src = '/img/Search_Fill_S.png';
        homeImg.src = '/img/Home_S.png';
        homeLink.style.color = 'gray';
    } else if (path.includes('/pages/artists/')) {
        searchLink.style.color = 'gray';
        searchImg.src = '/img/Search_S (1).png';
        homeImg.src = '/img/Home_S.png';
        homeLink.style.color = 'gray';
    } else if (path === '/') {
        searchLink.style.color = 'gray';
        searchImg.src = '/img/Search_S (1).png';
        homeImg.src = '/img/Home_Fill_S (1).png';
        homeLink.style.color = 'white';
    } else if (path.includes('/pages/profil/')) {
        searchLink.style.color = 'gray';
        searchImg.src = '/img/Search_S (1).png';
        homeImg.src = '/img/Home_S.png';
        homeLink.style.color = 'gray';
    } else if (path.includes('/pages/album/')) {
        searchLink.style.color = 'gray';
        searchImg.src = '/img/Search_S (1).png';
        homeImg.src = '/img/Home_S.png';
        homeLink.style.color = 'gray';
    } else if (path.includes('/pages/tracks/')) {
        searchLink.style.color = 'gray';
        searchImg.src = '/img/Search_S (1).png';
        homeImg.src = '/img/Home_S.png';
        homeLink.style.color = 'gray';
    }



    let artistsids = []

    axios.get(`${PUBLIC_URL}/me/playlists`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
        .then(res => {

            axios.get(`${PUBLIC_URL}/playlists/${res.data.items[0].id}/tracks`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
                .then(tracks => {
                    // tracks.data.items.forEach(track => {
                    //     artistsids.push(track.track.artists[0].id)
                    // })
                    const uniqueArtistsIds = new Set();


                    tracks.data.items.forEach(track => {
                        track.track.artists.forEach(artist => {
                            uniqueArtistsIds.add(artist.id);
                        });
                    });


                    const uniqueArtistsIdsArray = Array.from(uniqueArtistsIds);
                    axios.get(`${PUBLIC_URL}/artists?ids=${uniqueArtistsIdsArray}`, {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    })
                        .then(response => {
                            reloadSingers(response.data.artists, contaiber_artist)


                            input_search.onkeyup = (e) => {
                                let key_word = e.target.value.trim().toLowerCase()
                                const filteredNames = response.data.artists.filter(names => {
                                    const title = names.name.toLowerCase();
                                    console.log(title);
                                    return title.includes(key_word)

                                })
                                reloadSingers(filteredNames, contaiber_artist)
                            }
                        })
                })
        })
}
export function right_Sidebar(arr, place) {
    for (let item of arr) {
        const newMusicBox = document.createElement('div');
        newMusicBox.classList.add('new_music_box');

        const newMusicHeading = document.createElement('p');
        newMusicHeading.textContent = 'Название '

        const iconsDiv = document.createElement('div');
        iconsDiv.classList.add('icons');

        const ellipsisIcon = document.createElement('div');
        ellipsisIcon.classList.add('ellipsis-icon');
        ellipsisIcon.innerHTML = '&hellip;';

        const xIcon = document.createElement('div');
        xIcon.classList.add('x-icon');
        xIcon.textContent = '×';
        let container = document.querySelector('.container')
xIcon.onclick=()=>{
    place.style.display='none'
    container.style.width = 'calc(100% - 310px)';
}


        iconsDiv.appendChild(ellipsisIcon);
        iconsDiv.appendChild(xIcon);

        newMusicBox.appendChild(newMusicHeading);
        newMusicBox.appendChild(iconsDiv);

        const imagesBox = document.createElement('div');
        imagesBox.classList.add('images_box');

        let albumImg = document.createElement('img');

        albumImg.classList.add('albumImg')
        albumImg.src = '/img/channels4_profile.jpg';

        const namesBox = document.createElement('div');
        namesBox.classList.add('names_Box');

        const songTitle = document.createElement('p');
        songTitle.textContent = 'Название трека';

        const artistName = document.createElement('span');
        artistName.textContent = 'Название трека'

        namesBox.appendChild(songTitle);
        namesBox.appendChild(artistName);

        imagesBox.appendChild(albumImg);
        imagesBox.appendChild(namesBox);

        const dannnieActris = document.createElement('div');
        dannnieActris.classList.add('dannnie_actris');

        const photoAct = document.createElement('div');
        photoAct.classList.add('photo_act');
        const aboutArtist = document.createElement('p');
        aboutArtist.textContent = 'Об исполнителе';
        photoAct.appendChild(aboutArtist);

        const dannie = document.createElement('div');
        dannie.classList.add('dannie');

        const artistInfo = document.createElement('p');
        artistInfo.textContent = 'Название трека';

        const monthlyListeners = document.createElement('p');
        // photoAct.style.backgroundImage = `url(${item.images[0].url})` ||`url('/img/images.jfif')`
        monthlyListeners.classList.add('ppp')
        monthlyListeners.textContent = ` слушателей за месяц`;

        const subscribeButton = document.createElement('button');
        subscribeButton.textContent = 'Подписаться';

        const loremText = document.createElement('h4');
        loremText.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus quaerat, iusto explicabo aperiam beatae est sint vitae sed ullam .';

        dannie.appendChild(artistInfo);
        dannie.appendChild(monthlyListeners);

        dannie.appendChild(subscribeButton);
        dannie.appendChild(loremText);

        dannnieActris.appendChild(photoAct);
        dannnieActris.appendChild(dannie);

        // Добавляем созданные элементы в DOM
        place.appendChild(newMusicBox);
        place.appendChild(imagesBox);
        place.appendChild(dannnieActris);

    }
}


export function CreateHeader(place) {
    const leftHandSide = document.createElement('div');
    leftHandSide.classList.add('left-hand_side');

    const backButton = document.createElement('button');
    const backArrowImg = document.createElement('img');
    backArrowImg.src = '/img/211686_back_arrow_icon.png';
    backArrowImg.alt = '';
    backButton.appendChild(backArrowImg);

    const forwardButton = document.createElement('button');
    const forwardArrowImg = document.createElement('img');
    forwardArrowImg.src = '/img/211688_forward_arrow_icon (2).png';
    forwardArrowImg.alt = '';
    const input = document.createElement('input')

    input.placeholder = 'Что хочешь включить ?'
    input.classList.add('inp_search')
    forwardButton.appendChild(forwardArrowImg);

    leftHandSide.appendChild(backButton);
    leftHandSide.appendChild(forwardButton);
    leftHandSide.append(input)

    // Создаем элементы для правой части
    const rightHandSide = document.createElement('div');
    rightHandSide.classList.add('right-hand_side');

    const premiumButton = document.createElement('button');
    premiumButton.classList.add('prem');
    premiumButton.textContent = 'Узнать больше о Premium';

    const downloadButton = document.createElement('a');
    downloadButton.href = 'https://www.spotify.com/uz/download/windows/'
    downloadButton.classList.add('down');

    const downloadImg = document.createElement('img');
    downloadImg.src = '/img/8725634_cloud_download_icon.png';
    downloadImg.alt = '';

    const downloadSpan = document.createElement('span');
    downloadSpan.textContent = 'Установить приложение';

    downloadButton.appendChild(downloadImg);
    downloadButton.appendChild(downloadSpan);

    const bellDiv = document.createElement('div');
    bellDiv.classList.add('bell');

    const bellImg = document.createElement('img');
    bellImg.src = '/img/1814091_alarm_bell_sound_icon.png';
    bellImg.alt = '';
    bellDiv.appendChild(bellImg);

    const profileButton = document.createElement('button');
    profileButton.classList.add('profile');
    let profile = document.querySelector('.profile')
    axios.get(`${PUBLIC_URL}/me/playlists`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
        .then(res => {

            profileButton.textContent = res.data.items[0].owner.display_name.slice(0, 1)
        })
    // let modal_proffil = document.querySelector('.modal_proffil')

    modal_prof()
    document.querySelector('.modal').style.display = 'none'
    profileButton.onclick = () => {
        profileButton.classList.toggle('active')
        if (profileButton.classList.contains('active')) {
            document.querySelector('.modal').style.display = 'block'
        } else {
            document.querySelector('.modal').style.display = 'none'
        }
    }

    rightHandSide.appendChild(premiumButton);
    rightHandSide.appendChild(downloadButton);
    rightHandSide.appendChild(bellDiv);
    rightHandSide.appendChild(profileButton);


    place.append(leftHandSide);
    place.append(rightHandSide);

    backButton.onclick = () => {
        window.history.back()
    }

    forwardButton.onclick = () => {
        window.history.forward()
    }
    if (path.includes('/pages/search/')) {
        input.style.display = 'block'
        premiumButton.style.display = 'none'
        rightHandSide.style.paddingBlock = '10px 0'
    } else {
        input.style.display = 'none'
        premiumButton.style.display = 'block'
    }
}

export function CreateFooter(place) {
    const glavFooter = document.createElement('div');
    glavFooter.classList.add('glav_footer');

    // Создаем контейнеры для каждого блока в футере
    const itemFooter1 = document.createElement('div');
    itemFooter1.classList.add('item_footer');

    const itemFooter2 = document.createElement('div');
    itemFooter2.classList.add('item_footer');

    const itemFooter3 = document.createElement('div');
    itemFooter3.classList.add('item_footer');

    const itemFooter4 = document.createElement('div');
    itemFooter4.classList.add('item_footer');

    const itemFooterIcons = document.createElement('div');
    itemFooterIcons.classList.add('item_footer_icons');

    // Создаем элементы для первого блока
    const companySpan = document.createElement('span');
    companySpan.textContent = 'Компания';

    const aboutUsLink = document.createElement('a');
    aboutUsLink.href = 'https://www.spotify.com/uz/about-us/contact/';
    aboutUsLink.textContent = 'О нас';

    const vacanciesLink = document.createElement('a');
    vacanciesLink.href = 'https://www.lifeatspotify.com/';
    vacanciesLink.textContent = 'Вакансии';

    const newsLink = document.createElement('a');
    newsLink.href = 'https://newsroom.spotify.com/';
    newsLink.textContent = 'Новости';

    itemFooter1.appendChild(companySpan);
    itemFooter1.appendChild(aboutUsLink);
    itemFooter1.appendChild(vacanciesLink);
    itemFooter1.appendChild(newsLink);

    // Создаем элементы для второго блока
    const communitiesSpan = document.createElement('span');
    communitiesSpan.textContent = 'Сообщества';

    const artistsLink = document.createElement('a');
    artistsLink.href = 'https://artists.spotify.com/home';
    artistsLink.textContent = 'Для артистов';

    const developersLink = document.createElement('a');
    developersLink.href = 'https://developer.spotify.com/';
    developersLink.textContent = 'Разработчики';

    const adsLink = document.createElement('a');
    adsLink.href = 'https://ads.spotify.com/en-US/';
    adsLink.textContent = 'Реклама';

    const investorsLink = document.createElement('a');
    investorsLink.href = 'https://investors.spotify.com/home/default.aspx';
    investorsLink.textContent = 'Инвесторы';

    const vendorsLink = document.createElement('a');
    vendorsLink.href = 'https://spotifyforvendors.com/';
    vendorsLink.textContent = 'Поставщики';

    itemFooter2.appendChild(communitiesSpan);
    itemFooter2.appendChild(artistsLink);
    itemFooter2.appendChild(developersLink);
    itemFooter2.appendChild(adsLink);
    itemFooter2.appendChild(investorsLink);
    itemFooter2.appendChild(vendorsLink);

    // Создаем элементы для третьего блока
    const usefulLinksSpan = document.createElement('span');
    usefulLinksSpan.textContent = 'Полезные ссылки';

    const supportLink = document.createElement('a');
    supportLink.href = 'https://support.spotify.com/uz/';
    supportLink.textContent = 'Поддержка';

    const mobileAppLink = document.createElement('a');
    mobileAppLink.href = 'https://www.spotify.com/uz/download/windows/';
    mobileAppLink.textContent = 'Бесплатное мобильное приложение';

    const premiumSingleUserLink = document.createElement('a');
    premiumSingleUserLink.href = 'https://www.spotify.com/uz/premium/?ref=spotifycom_footer_premium_individual';
    premiumSingleUserLink.textContent = 'Премиум для одного пользователя';

    itemFooter3.appendChild(usefulLinksSpan);
    itemFooter3.appendChild(supportLink);
    itemFooter3.appendChild(mobileAppLink);
    itemFooter3.appendChild(premiumSingleUserLink);

    // Создаем элементы для четвертого блока
    const spotifyPlansSpan = document.createElement('span');
    spotifyPlansSpan.textContent = 'Планы Spotify';

    const premiumDuoLink = document.createElement('a');
    premiumDuoLink.href = 'https://www.spotify.com/uz/duo/?ref=spotifycom_footer_premium_duo';
    premiumDuoLink.textContent = 'Премиум Duo';

    const premiumFamilyLink = document.createElement('a');
    premiumFamilyLink.href = 'https://www.spotify.com/uz/family/?ref=spotifycom_footer_premium_family';
    premiumFamilyLink.textContent = 'Премиум Family';

    const premiumStudentLink = document.createElement('a');
    premiumStudentLink.href = 'https://www.spotify.com/uz/student/?ref=spotifycom_footer_premium_student';
    premiumStudentLink.textContent = 'Премиум Student';

    const spotifyFreeLink = document.createElement('a');
    spotifyFreeLink.href = 'https://www.spotify.com/uz/free/?ref=spotifycom_footer_free';
    spotifyFreeLink.textContent = 'Spotify Free';

    itemFooter4.appendChild(spotifyPlansSpan);
    itemFooter4.appendChild(premiumDuoLink);
    itemFooter4.appendChild(premiumFamilyLink);
    itemFooter4.appendChild(premiumStudentLink);
    itemFooter4.appendChild(spotifyFreeLink);

    // Создаем элементы для блока с иконками
    const instagramButton = document.createElement('button');
    const instagramImg = document.createElement('img');
    instagramImg.src = '/img/2959748_instagram_photo_share_icon.png';
    instagramImg.alt = '';
    instagramButton.appendChild(instagramImg);

    const twitterButton = document.createElement('button');
    const twitterImg = document.createElement('img');
    twitterImg.src = '/img/765208_media_social_twitter_icon.png';
    twitterImg.alt = '';
    twitterButton.appendChild(twitterImg);

    const facebookButton = document.createElement('button');
    const facebookImg = document.createElement('img');
    facebookImg.src = '/img/216077_social_facebook_circular_icon.png';
    facebookImg.alt = '';
    facebookButton.appendChild(facebookImg);

    itemFooterIcons.appendChild(instagramButton);
    itemFooterIcons.appendChild(twitterButton);
    itemFooterIcons.appendChild(facebookButton);

    // Добавляем все созданные элементы в основной контейнер для футера
    glavFooter.appendChild(itemFooter1);
    glavFooter.appendChild(itemFooter2);
    glavFooter.appendChild(itemFooter3);
    glavFooter.appendChild(itemFooter4);
    glavFooter.appendChild(itemFooterIcons);

    // Создаем контейнер для нижней части футера
    const footerBottom = document.createElement('div');
    footerBottom.classList.add('footer_bottom');

    // Создаем элементы для нижней части футера
    const bottomItem1 = document.createElement('div');
    bottomItem1.classList.add('bottom_item');

    const legalInfoLink = document.createElement('a');
    legalInfoLink.href = 'https://www.spotify.com/uz/legal/end-user-agreement/';
    legalInfoLink.textContent = 'Юридическая информация';

    const safetyPrivacyLink = document.createElement('a');
    safetyPrivacyLink.href = 'https://www.spotify.com/uz/safetyandprivacy/reporting-content';
    safetyPrivacyLink.textContent = 'Центр безопасности и конфиденциальности';

    bottomItem1.appendChild(legalInfoLink);
    bottomItem1.appendChild(safetyPrivacyLink);

    const bottomItem2 = document.createElement('div');
    bottomItem2.classList.add('bottom_item');

    const spotifyAbSpan = document.createElement('span');
    spotifyAbSpan.textContent = '© 2024 Spotify AB';

    bottomItem2.appendChild(spotifyAbSpan);

    // Добавляем нижнюю часть футера в основной контейнер для футера
    footerBottom.appendChild(bottomItem1);
    footerBottom.appendChild(bottomItem2);
    place.appendChild(glavFooter);
    place.appendChild(footerBottom);
}

let num = 1
export function singer_artists(arr, place) {
    let item_controls = document.querySelector('.item_controls')
    let names_Box = document.querySelector('.names_Box p')
    let new_music_box = document.querySelector('.new_music_box p')
    let ppp = document.querySelector('.ppp')
    let follow = document.querySelector('.follow')
    place.innerHTML = ''
    for (let item of arr) {
        console.log(item);
      
        const itemMusicsBox = document.createElement('div');
        itemMusicsBox.classList.add('item_musics_box');

        // Создаем левую часть (div с классом "left")
        const leftDiv = document.createElement('div');
        leftDiv.classList.add('left');

        // Создаем параграф (p) с текстом "1"
        const paragraph = document.createElement('p');
        paragraph.classList.add('paragraph')
        paragraph.textContent = num++

        // Создаем изображение (img) с указанным src и alt
        const img = document.createElement('img');
        img.src = item.album.images[0].url
        img.alt = '';

        // Создаем ссылку (a) с пустым href и текстом "Espresso"
        const link = document.createElement('a');
        link.href = `/pages/tracks/index.html?id=${item.id}`;
        link.textContent = item.name
        // let songAnimation = document.createElement('div')
        // let animationLine1 = document.createElement('span')
        // let animationLine2 = document.createElement('span')
        // let animationLine3 = document.createElement('span')
        // let animationLine4 = document.createElement('span')
        // let animationLine5 = document.createElement('span')

        // songAnimation.classList.add('song-animation')
        // Добавляем параграф, изображение и ссылку в левую часть (div "left")

        leftDiv.append(paragraph)
        // leftDiv.appendChild(songAnimation);
        // songAnimation.append(animationLine1,
        //     animationLine2,
        //     animationLine3,
        //     animationLine4,
        //     animationLine5)
        leftDiv.appendChild(img);
        leftDiv.appendChild(link);

        // Создаем центральную часть (div с классом "center")
        const centerDiv = document.createElement('div');
        centerDiv.classList.add('center');

        // Создаем заголовок h4 с текстом "718 878 943"
        const h4Center = document.createElement('h4');
        h4Center.textContent = `${item.popularity}/100`;

        // Добавляем заголовок h4 в центральную часть (div "center")
        centerDiv.appendChild(h4Center);

        // Создаем правую часть (div с классом "right")
        const rightDiv = document.createElement('div');
        rightDiv.classList.add('right');

        // Создаем заголовок h4 с текстом "2:55"
        const h4Right = document.createElement('h4');
        h4Right.classList.add('pop')
        h4Right.textContent = millisToMinutesAndSeconds(item.duration_ms)
        console.log(item);
        // Добавляем заголовок h4 в правую часть (div "right")
        rightDiv.appendChild(h4Right);

        // Добавляем левую, центральную и правую части в общий контейнер (div "item_musics_box")
        itemMusicsBox.appendChild(leftDiv);
        itemMusicsBox.appendChild(centerDiv);
        itemMusicsBox.appendChild(rightDiv);

        place.appendChild(itemMusicsBox);
        console.log(item);

        let audio = document.querySelector('audio')
        const playButton = document.getElementById('play');
        const pauseButton = document.getElementById('pause');



        let id = location.search.split('=').at(-1);
        let currentSongIndex = 0;
        const songs = [];
        let albumImg = document.querySelector('.albumImg')

        axios.get(`${PUBLIC_URL}/artists/${id}/top-tracks`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(res => {
            let tracks = res.data.tracks
            console.log(tracks);
            tracks.forEach(track => {
                songs.push(track.preview_url)
            })

            // let new_music_box_p=document.querySelector('.new_music_box p')
            // console.log(tracks.name)

            // audio.src = songs[currentSongIndex]
            // albumImg.src = tracks[currentSongIndex].album.images[0].url
            // albumImg.src='/img/channels4_profile.jpg'
            let backwardImg = document.querySelector('.backwardImg')
            let forwardImg = document.querySelector('.forwardImg')

            backwardImg.onclick = () => {
                let currentIndex = songs.indexOf(audio.src)
                currentSongIndex = (currentIndex - 1 + songs.length) % songs.length
                audio.src = songs[currentSongIndex]
                audio.play()
                // new_music_box_p.innerHTML=tracks[currentSongIndex].name
                albumImg.src = tracks[currentSongIndex].album.images[0].url
                dannnie_actrists(tracks[currentSongIndex], item_controls)
                names_Box.innerHTML = tracks[currentSongIndex].name
            }

            forwardImg.onclick = () => {
                let currentIndex = songs.indexOf(audio.src)
                currentSongIndex = (currentIndex + 1) % songs.length
                audio.src = songs[currentSongIndex]

                audio.play()
                // new_music_box_p.innerHTML=tracks[currentSongIndex].name
                albumImg.src = tracks[currentSongIndex].album.images[0].url
                dannnie_actrists(tracks[currentSongIndex], item_controls)
                names_Box.innerHTML = tracks[currentSongIndex].name
            }
            const repeatImg = document.querySelector('.act');
            let isRepeatOn = false;

            repeatImg.onclick = () => {
                if (!isRepeatOn) {
                    repeatImg.src = '/img/6127257_multimedia_music_refresh_repeat_song_icon (1).png';
                    isRepeatOn = true;


                    audio.addEventListener('ended', onTrackEnded);
                } else {
                    repeatImg.src = '/img/6127257_multimedia_music_refresh_repeat_song_icon (2).png';
                    isRepeatOn = false;


                    audio.removeEventListener('ended', onTrackEnded);
                }
            }


            function onTrackEnded() {

                audio.currentTime = 0;
                audio.play();
            }
            new_music_box.innerHTML = item.artists[0].name
            ppp.innerHTML = follow.innerHTML
        })


        itemMusicsBox.onclick = () => {

            audio.src = item.preview_url;
            albumImg.src = item.album.images[0].url;
            names_Box.innerHTML = item.name
            // new_music_box_p.innerHTML=tracks[0].name
            if (audio.paused) {

                audio.play();
                pauseButton.style.display = 'none';
                playButton.style.display = 'block';

            } else {

                audio.pause();
                playButton.style.display = 'block';
                pauseButton.style.display = 'none';
            }

            dannnie_actrists(item, item_controls);
        };

    }


}


export function player_musics(place) {

    const audio = document.createElement('audio');
    audio.id = 'audio';
    audio.src = '/img/happy-birthday-155461.mp3';

    // Create item_controls div (parent container)
    const itemControls = document.createElement('div');
    itemControls.className = 'item_controls';


    const itemControls2 = document.createElement('div');
    itemControls2.className = 'item_controls2';

    // Create elem div
    const elemDiv = document.createElement('div');
    elemDiv.className = 'elem';
    const shuffleImg = document.createElement('img');
    shuffleImg.src = '/img/raphael_shuffle.png';
    shuffleImg.alt = '';
    const backwardImg = document.createElement('img');
    backwardImg.src = '/img/nazad.png';
    backwardImg.alt = '';
    const playPauseButton = document.createElement('button');
    playPauseButton.className = 'icons_playandpause';
    const playImg = document.createElement('img');
    playImg.id = 'play';
    playImg.className = 'play';
    playImg.src = '/img/9057022_play_pause_icon.png';
    playImg.alt = '';
    const pauseImg = document.createElement('img');
    pauseImg.id = 'pause';
    pauseImg.className = 'pause';
    pauseImg.src = '/img/1868967_arrow_control_go_music_pause_icon.png';
    pauseImg.alt = '';
    playPauseButton.appendChild(playImg);
    playPauseButton.appendChild(pauseImg);
    const forwardImg = document.createElement('img');
    forwardImg.src = '/img/вперед.png';
    forwardImg.classList.add('forwardImg')
    backwardImg.classList.add('backwardImg')
    forwardImg.alt = '';
    const repeatImg = document.createElement('img');
    repeatImg.src = '/img/6127257_multimedia_music_refresh_repeat_song_icon (2).png';
    repeatImg.classList.add('act')
    repeatImg.style.width = '8%'
    repeatImg.alt = '';
    elemDiv.appendChild(shuffleImg);
    elemDiv.appendChild(backwardImg);
    elemDiv.appendChild(playPauseButton);
    elemDiv.appendChild(forwardImg);
    elemDiv.appendChild(repeatImg);

    // Create progress-bar div
    const progressBarDiv = document.createElement('div');
    progressBarDiv.className = 'progress-bar';
    const currentTimeSpan = document.createElement('span');
    currentTimeSpan.className = 'time';
    currentTimeSpan.id = 'current-time';
    currentTimeSpan.textContent = '0:00';
    const progressInput = document.createElement('input');
    progressInput.type = 'range';
    progressInput.id = 'progress';
    progressInput.value = '0';
    progressInput.max = '100';
    const durationSpan = document.createElement('span');
    durationSpan.className = 'time';
    durationSpan.id = 'duration';
    durationSpan.textContent = '0:00';
    progressBarDiv.appendChild(currentTimeSpan);
    progressBarDiv.appendChild(progressInput);
    progressBarDiv.appendChild(durationSpan);

    // Append elem and progress-bar to item_controls2
    itemControls2.appendChild(elemDiv);
    itemControls2.appendChild(progressBarDiv);

    // Create item_controls3 div
    const itemControls3 = document.createElement('div');
    itemControls3.className = 'item_controls3';
    const microphoneImg = document.createElement('img');
    microphoneImg.src = '/img/ph_microphone-stage.png';
    microphoneImg.alt = '';
    const speakerDiv = document.createElement('div');
    speakerDiv.className = 'speaker';
    const speakerImg = document.createElement('img');
    speakerImg.src = '/img/fluent_speaker-2-24-regular.png';
    speakerImg.alt = '';
    const volumeInput = document.createElement('input');
    volumeInput.id = 'volume';
    volumeInput.type = 'range';
    volumeInput.min = '0';
    volumeInput.max = '100';
    volumeInput.value = '100';
    speakerDiv.appendChild(speakerImg);
    speakerDiv.appendChild(volumeInput);
    const arrowsImg = document.createElement('img');
    arrowsImg.src = '/img/tabler_arrows-diagonal.png';
    arrowsImg.alt = '';
    itemControls3.appendChild(microphoneImg);
    itemControls3.appendChild(speakerDiv);
    itemControls3.appendChild(arrowsImg);

    // Append everything to the main container (assuming it's called 'container')

    place.appendChild(audio);
    place.appendChild(itemControls);
    place.appendChild(itemControls2);
    place.appendChild(itemControls3);


    // let albumImg=document.querySelector('.albumImg')
    // console.log(albumImg);

    // axios.get(`${PUBLIC_URL}/artists/${id}/top-tracks`, {
    //   headers: {
    //     Authorization: `Bearer ${token}`
    //   }
    // })
    //   .then(res => {
    //     let tracks = res.data.tracks
    //     console.log(res);
    //     tracks.forEach(track => {
    //       songs.push(track.preview_url)
    //     })
    //     console.log(songs)

    //     audio.src = songs[currentSongIndex]
    //   })





    document.addEventListener('DOMContentLoaded', () => {
        const audio = document.getElementById('audio');
        const playButton = document.getElementById('play');
        const pauseButton = document.getElementById('pause');
        const progressBar = document.getElementById('progress');
        const currentTimeEl = document.getElementById('current-time');
        const durationEl = document.getElementById('duration');
        const volumeBar = document.getElementById('volume');
        function formatTime(seconds) {
            const minutes = Math.floor(seconds / 60);
            const secs = Math.floor(seconds % 60);
            return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
        }



        audio.addEventListener('timeupdate', () => {
            const progress = (audio.currentTime / audio.duration) * 100;
            progressBar.value = progress;
            progressBar.style.backgroundSize = `${progress}% 100%`;
            currentTimeEl.textContent = formatTime(audio.currentTime);
        });

        audio.addEventListener('loadedmetadata', () => {
            durationEl.textContent = formatTime(audio.duration);
        });

        progressBar.addEventListener('input', () => {
            const newTime = (progressBar.value / 100) * audio.duration;
            audio.currentTime = newTime;

        });


        volumeBar.addEventListener('input', () => {
            audio.volume = volumeBar.value / 100;
            volumeBar.style.backgroundSize = `${audio.volume * 100}% 100%`;
        });
        volumeBar.style.backgroundSize = `${audio.volume * 100}% 100%`;
        let icons_playandpause = document.querySelector('.icons_playandpause')
        icons_playandpause.onclick = () => {
            if (audio.paused) {
                playButton.style.display = 'block'
                pauseButton.style.display = 'none'
                audio.play()
            } else {
                pauseButton.style.display = 'block'
                playButton.style.display = 'none'
                audio.pause()
            }
        }
        if (audio.paused) {
            pauseButton.style.display = 'block';
            playButton.style.display = 'none';
        } else {
            playButton.style.display = 'block';
            pauseButton.style.display = 'none';
        }
    });

}


 function dannnie_actrists(item, place) {
    place.innerHTML = ''

    console.log(item);
    // Создание элементов для отображения дополнительной информации о песне
    const imgDiv = document.createElement('div');
    imgDiv.classList.add('img');

    const songImg = document.createElement('img');
    songImg.classList.add('song')
    songImg.src = item.album.images[0].url;
    songImg.alt = '';
    imgDiv.appendChild(songImg);

    place.appendChild(imgDiv);

    const namesDiv = document.createElement('div');
    namesDiv.classList.add('names');

    const songNameSpan = document.createElement('span');
    songNameSpan.textContent = item.name;
    namesDiv.appendChild(songNameSpan);

    const artistPara = document.createElement('p');
    artistPara.textContent = item.name;
    namesDiv.appendChild(artistPara);

    place.appendChild(namesDiv);

    const imgCorrectDiv = document.createElement('div');
    imgCorrectDiv.classList.add('img_correct');

    const correctImg = document.createElement('img');
    correctImg.src = '/img/619543_add_done_good_ok_tick_icon.png';
    correctImg.alt = '';
    imgCorrectDiv.appendChild(correctImg);

    place.appendChild(imgCorrectDiv);
}

function modal_prof() {
    const modalDiv = document.createElement('div');
    modalDiv.classList.add('modal_proffil');

    // Create the first item <div class="item_proffil">
    const item1Div = document.createElement('a');
    item1Div.classList.add('item_proffil');
    item1Div.href = '/pages/profil/'
    // Create the <a> tag inside the first item
    const link1 = document.createElement('a');
    link1.href = '/pages/profil/'
    link1.textContent = 'Профиль'; // Text inside the <a> tag

    // Create the <svg> tag inside the first item (simplified version, adjust viewBox and path data as needed)
    const svg1 = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg1.setAttribute('viewBox', '0 0 16 16');
    svg1.setAttribute('class', 'Svg-sc-ytk21e-0 kcUFwU');

    // Add <path> elements to the first <svg>
    const path1_1 = document.createElement('path');
    path1_1.setAttribute('d', 'M1 2.75A.75.75 0 0 1 1.75 2H7v1.5H2.5v11h10.219V9h1.5v6.25a.75.75 0 0 1-.75.75H1.75a.75.75 0 0 1-.75-.75V2.75z');
    const path1_2 = document.createElement('path');
    path1_2.setAttribute('d', 'M15 1v4.993a.75.75 0 1 1-1.5 0V3.56L8.78 8.28a.75.75 0 0 1-1.06-1.06l4.72-4.72h-2.433a.75.75 0 0 1 0-1.5H15z');

    // Append <path> elements to the <svg>
    svg1.appendChild(path1_1);
    svg1.appendChild(path1_2);

    // Append <a> and <svg> to the first item <div>
    item1Div.appendChild(link1);
    item1Div.appendChild(svg1);

    // Create the second item <div class="item_proffil">
    const item2Div = document.createElement('div');
    item2Div.classList.add('item_proffil');

    // Create the <a> tag inside the second item
    const link2 = document.createElement('a');
    link2.setAttribute('href', '#');
    link2.textContent = 'Переход на премиум'; // Text inside the <a> tag

    // Create the <svg> tag inside the second item (simplified version, adjust viewBox and path data as needed)
    const svg2 = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg2.setAttribute('viewBox', '0 0 16 16');
    svg2.setAttribute('class', 'Svg-sc-ytk21e-0 kcUFwU');

    // Add <path> elements to the second <svg>
    const path2_1 = document.createElement('path');
    path2_1.setAttribute('d', 'M1 2.75A.75.75 0 0 1 1.75 2H7v1.5H2.5v11h10.219V9h1.5v6.25a.75.75 0 0 1-.75.75H1.75a.75.75 0 0 1-.75-.75V2.75z');
    const path2_2 = document.createElement('path');
    path2_2.setAttribute('d', 'M15 1v4.993a.75.75 0 1 1-1.5 0V3.56L8.78 8.28a.75.75 0 0 1-1.06-1.06l4.72-4.72h-2.433a.75.75 0 0 1 0-1.5H15z');

    // Append <path> elements to the <svg>
    svg2.appendChild(path2_1);
    svg2.appendChild(path2_2);

    // Append <a> and <svg> to the second item <div>
    item2Div.appendChild(link2);
    item2Div.appendChild(svg2);

    // Create the third item <div class="leave">
    const leaveDiv = document.createElement('div');
    leaveDiv.classList.add('leave');
    leaveDiv.onclick = () => {
        localStorage.clear()
        location.assign('/pages/signin/')
    }


    // Create the <a> tag inside the third item
    const leaveLink = document.createElement('a');
    leaveLink.setAttribute('href', '#');
    leaveLink.textContent = 'Выйти'; // Text inside the <a> tag

    // Append <a> to the third item <div>
    leaveDiv.appendChild(leaveLink);

    // Append all items to the main container <div>
    modalDiv.appendChild(item1Div);
    modalDiv.appendChild(item2Div);
    modalDiv.appendChild(leaveDiv);
    let modal = document.querySelector('.modal')
    modal.append(modalDiv)
}
export function albums_musics(arr, place) {
    let num = 1
    let item_controls = document.querySelector('.item_controls')
    let new_music_box_p = document.querySelector('.new_music_box p')
    place.innerHTML=''
    console.log(new_music_box_p);
    for (let item of arr) {
        // Создаем основной div элемент с классом "albums_musics"
        let albumsMusicsDiv = document.createElement('div');
        albumsMusicsDiv.classList.add('albums_musics');

        // Создаем элемент для номера песни (<p class="song_number">1</p>)
        let songNumber = document.createElement('p');
        songNumber.classList.add('song_number');
        songNumber.textContent = num; // Используем переменную num для номера песни
        albumsMusicsDiv.appendChild(songNumber); // Добавляем <p class="song_number">1</p> в основной div

        // Создаем div для названия песни и описания (<div class="box_song_name">...</div>)
        let boxSongNameDiv = document.createElement('div');
        boxSongNameDiv.classList.add('box_song_name');

        // Создаем элемент для названия песни (<span class="song_name">fdsf</span>)
        let songNameSpan = document.createElement('a');
        songNameSpan.classList.add('song_name');
        songNameSpan.href = `/pages/tracks/index.html?id=${item.id}`
        songNameSpan.textContent = item.name; // Используем свойство name из объекта item для названия песни
        boxSongNameDiv.appendChild(songNameSpan); // Добавляем <span class="song_name">fdsf</span> в div

        // Создаем элемент <p> для описания песни
        let descriptionP = document.createElement('p');
        descriptionP.classList.add('alb')
        descriptionP.textContent = item.artists[0].name // Используем свойство description из объекта item для описания песни
        boxSongNameDiv.appendChild(descriptionP); // Добавляем <p> в div

        // Добавляем div с названием песни и описанием в основной div
        albumsMusicsDiv.appendChild(boxSongNameDiv);

        // Создаем элемент для продолжительности песни (<span class="song_duration">3:22</span>)
        let songDurationSpan = document.createElement('span');
        songDurationSpan.classList.add('song_duration');

        songDurationSpan.textContent = millisToMinutesAndSeconds(item.duration_ms) // Используем свойство duration из объекта item для продолжительности песни
        albumsMusicsDiv.appendChild(songDurationSpan);

        // Добавляем сформированный блок с песней в указанное место (place)
        place.appendChild(albumsMusicsDiv);




        num++;

        let id = location.search.split('=').at(-1);
        let currentSongIndex = 0;
        const songs = [];
       
        // let albumImg = document.querySelector('.albumImg')
    
        let audio = document.querySelector('audio')
        axios.get(`${PUBLIC_URL}/albums/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(res => {
            let tracks = res.data.tracks.items
            tracks.forEach(track => {
                songs.push(track.preview_url)
              
            })


            // audio.src = songs[currentSongIndex]
            // albumImg.src = tracks[currentSongIndex].album.images[0].url
            // albumImg.src='/img/channels4_profile.jpg'

            let backwardImg = document.querySelector('.backwardImg')
            let forwardImg = document.querySelector('.forwardImg')
console.log(backwardImg);
            backwardImg.onclick = () => {

                let currentIndex = songs.indexOf(audio.src)
                currentSongIndex = (currentIndex - 1 + songs.length) % songs.length
                audio.src = songs[currentSongIndex]
                audio.play()
                // new_music_box_p.innerHTML = track_name[currentIndex]
                albumImg.src = tracks[currentSongIndex].album.images[0].url
                dannnie_actrists(tracks[currentSongIndex], item_controls)
            }

            forwardImg.onclick = () => {
                let currentIndex = songs.indexOf(audio.src)
                currentSongIndex = (currentIndex + 1) % songs.length
                audio.src = songs[currentSongIndex]
                audio.play()
                // new_music_box_p.innerHTML = track_name[currentIndex]
                albumImg.src = tracks[currentSongIndex].album.images[0].url
                dannnie_actrists(tracks[currentSongIndex], item_controls)
            }
            const repeatImg = document.querySelector('.act');
            let isRepeatOn = false;

            repeatImg.onclick = () => {
                if (!isRepeatOn) {
                    repeatImg.src = '/img/6127257_multimedia_music_refresh_repeat_song_icon (1).png';
                    isRepeatOn = true;


                    audio.addEventListener('ended', onTrackEnded);
                } else {
                    repeatImg.src = '/img/6127257_multimedia_music_refresh_repeat_song_icon (2).png';
                    isRepeatOn = false;


                    audio.removeEventListener('ended', onTrackEnded);
                }
            }

            
            function onTrackEnded() {

                audio.currentTime = 0;
                audio.play();
            }
        })


        const playButton = document.getElementById('play');
        const pauseButton = document.getElementById('pause');
        let photo_act = document.querySelector('.photo_act')


        albumsMusicsDiv.onclick = () => {
            audio.src = item.preview_url
            new_music_box_p.innerHTML = item.name
            //   dannnie_actrists(item, item_controls)
            axios.get(`${PUBLIC_URL}/artists/${item.artists[0].id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then(res => {
                photo_act.style.backgroundImage = `url(${res.data.images[0].url})`

            })

            if (audio.paused) {
                playButton.style.display = 'block'
                pauseButton.style.display = 'none'
                audio.play()
            } else {
                pauseButton.style.display = 'block'
                playButton.style.display = 'none'
                audio.pause()
            }

            dannnie_actrists(item, item_controls)

        }
        // console.log(item);
    }
}