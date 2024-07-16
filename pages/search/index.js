import axios from 'axios'
import {

  left_Side_Bar,
  right_Sidebar,
  player_musics,
  CreateHeader,
  CreateFooter,
  singer_artists,
  reloadNewRel2
} from "../../modules/ui.js";

let left_sidebar = document.querySelector('.left_sidebar')
let footer = document.querySelector('footer')
let header = document.querySelector('header')
let player = document.querySelector('.player')
let right_sidebar = document.querySelector('.right_sidebar')
let album_box_container = document.querySelector('.album_box_container')
let artists_box_container = document.querySelector('.artists_box_container')
let img2 = document.querySelector('.img2 img')
let name = document.querySelector('.name a')
player_musics(player)
CreateFooter(footer)
CreateHeader(header)
left_Side_Bar(left_sidebar)
right_Sidebar([1], right_sidebar)

const PUBLIC_URL = import.meta.env.VITE_PUBLIC_URL
const token = localStorage.getItem('token')
let musics_container = document.querySelector('.musics-container')
let inp_search = document.querySelector('.inp_search')


// inp_search.onkeyup = () => {
//   axios.get(`https://api.spotify.com/v1/search?q=${inp_search.value}`, {
//     headers: {
//       Authorization: `Bearer ${token}`
//     }
//   })
//     .then(res => {
//       console.log(res.data)
//     })
// }


// axios.get('https://api.spotify.com/v1/search', {
//   params: {
//     q: 'remaster%20track:Doxy%20artist:Miles%20Davis',
//     type: 'artist'
//   },
//   headers: {
//     Authorization: `Bearer ${token}`
//   }
// })
// .then(res => {
//   console.log(res.data); // Выводим данные ответа в консоль
// })
// .catch(error => {
//   console.error('Ошибка при выполнении запроса:', error); // Логируем ошибку в консоль
// });

let timeoutId;
const albumBox = document.querySelector('.album_box_container2');
inp_search.onkeyup = () => {
  clearTimeout(timeoutId)
  timeoutId = setTimeout(() => {

    const searchQuery = inp_search.value.trim();
    if (searchQuery === '') {
      document.querySelector('.album_box2').style.display = 'none';
      document.querySelector('.album_box').style.display = 'none';
      document.querySelector('.artists_box3').style.display = 'none';
      return
    } else {
      document.querySelector('.album_box2').style.display = 'block';
      document.querySelector('.artists_box3').style.display = 'block';
      document.querySelector('.album_box').style.display = 'flex';
    }
    axios.get('https://api.spotify.com/v1/search', {
      params: {
        q: searchQuery,
        type: 'artist,track,album,playlist'
      },
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(res => {


        const results = res.data.artists.items[0].images[0].url;
        const track = res.data.tracks.items
        console.log(track);
        name.innerHTML = res.data.artists.items[0].name;
        img2.src = results;
        singer_artists(track.slice(0, 4), musics_container)
        const artistId = res.data.artists.items[0].id;
        console.log(artistId);
        albumBox.onclick = () => {
          window.location.href = `/pages/artists/index.html?id=${artistId}`

        }


        const uniqueAlbums = res.data.albums.items
        reloadNewRel2(uniqueAlbums, album_box_container);

        // // Обновляем артистов, избегая повторений
        // const uniqueArtists = getUniqueItems(results.artists.items, artists_box_container);
        // reloadNewRel(uniqueArtists.slice(0, 4), artists_box_container);
        // results.artists.items.forEach(artist => {
        //   if (artist.images.length > 0) {
        //     const img = document.createElement('img');
        //     img.src = artist.images[0].url; // Берем первое изображение артиста (обычно оно самое крупное)
        //     img.alt = artist.name; // Устанавливаем alt для изображения
        //     im.appendChild(img); // Добавляем изображение в контейнер .im
        //   }
        // });

        // results.tracks.items.forEach(track => {
        //   if (track.album.images.length > 0) {
        //     const img = document.createElement('img');
        //     img.src = track.album.images[0].url; // Берем первое изображение альбома
        //     img.alt = track.album.name; // Устанавливаем alt для изображения
        //     im.appendChild(img); // Добавляем изображение в контейнер .im
        //   }
        // });

        // results.albums.items.forEach(album => {
        //   if (album.images.length > 0) {
        //     const img = document.createElement('img');
        //     img.src = album.images[0].url; // Берем первое изображение альбома
        //     img.alt = album.name; // Устанавливаем alt для изображения
        //     im.appendChild(img); // Добавляем изображение в контейнер .im
        //   }
        // });

        // results.playlists.items.forEach(playlist => {
        //   if (playlist.images.length > 0) {
        //     const img = document.createElement('img');
        //     img.src = playlist.images[0].url; // Берем первое изображение плейлиста
        //     img.alt = playlist.name; // Устанавливаем alt для изображения
        //     im.appendChild(img); // Добавляем изображение в контейнер .im
        //   }
        // });

      })
      .catch(error => {
        console.error('Ошибка при выполнении запроса:', error); // Логируем ошибку в консоль
      });
  }, 500); // Устанавливаем задержку в 500 мс (или другое подходящее значение)
};
// function getUniqueItems(newItems, container) {
//   const currentItems = Array.from(container.children).map(child => child.dataset.id); // Предполагаем, что у элементов есть data-id
//   const uniqueItems = newItems.filter(item => !currentItems.includes(item.id)); // Проверяем наличие item.id в текущих элементах
//   return uniqueItems;
// }
let container = document.querySelector('.container')
container.addEventListener('scroll', () => {

  const scrollPosition = container.scrollTop;

  if (scrollPosition > 30) {

    document.querySelector('.cont_box').style.background = '#0f0e0e'
  } else {
    document.querySelector('.cont_box').style.background = 'none'
  }
})

