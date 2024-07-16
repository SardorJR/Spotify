import axios from 'axios'
import {
  rel_music,
  reloadNewRel,
  left_Side_Bar,
  right_Sidebar,
  CreateHeader,
  CreateFooter,
  player_musics,
  reloadNewRel2

} from "../spotify2/modules/ui.js";
let music_box = document.querySelector('.music_box')
let album_box_container = document.querySelector('.album_box_container')
let artists_box_container = document.querySelector('.artists_box_container')
let left_sidebar = document.querySelector('.left_sidebar')
let header = document.querySelector('header')
let footer = document.querySelector('footer')
// let hash = location.hash.split('=')[1]
// let token = localStorage.getItem('token')
const hash = location.hash
const token = localStorage.getItem('token')
let player = document.querySelector('.player')
let right_sidebar = document.querySelector('.right_sidebar')
player_musics(player)
CreateFooter(footer)
CreateHeader(header)
left_Side_Bar(left_sidebar)
right_Sidebar([1], right_sidebar)
const PUBLIC_URL = import.meta.env.VITE_PUBLIC_URL


// let elems = document.querySelectorAll('.top .top_item');
// let homeBtn = document.querySelector('.top .home')
// let searchBtn = document.querySelector('.top .search')
axios.get(`${PUBLIC_URL}/browse/new-releases`, {
  headers: {
    Authorization: `Bearer ${token}`
  }
})
  .then(res => {
    console.log(res.data.albums);
    reloadNewRel2(res.data.albums.items, album_box_container);
  })
axios.get(`https://api.spotify.com/v1/recommendations/available-genre-seeds`, {
  headers: {
    Authorization: `Bearer ${token}`
  }
})
  .then(res => {
    console.log(res);

  })

// elems.forEach(element => {
//   element.onclick = () => {
//     elems.forEach(el => el.classList.remove('active'))
//     element.classList.add('active')
//     if (homeBtn.classList.contains('active')) {
//       console.log(homeBtn.children[0]);
//       homeBtn.children[0].src = '/img/Home_Fill_S (1).png'
//     } else {
//       homeBtn.children[0].src = '/img/Home_S.png'
//     }
//     if (searchBtn.classList.contains('active')) {

//       searchBtn.children[0].src = '/img/Search_Fill_S.png'
//     } else {
//       searchBtn.children[0].src = '/img/Search_S (1).png'
//     }
//   }
// })
// let right_sidebar = document.querySelector('.right_sidebar')
// right_Sidebar([1], right_sidebar)
let x = document.querySelector('.x-icon')
console.log(x);
let container = document.querySelector('.container')
x.onclick = () => {
  right_sidebar.style.display = 'none'
  container.style.width = 'calc(100% - 310px)';
}

container.addEventListener('scroll', () => {

  const scrollPosition = container.scrollTop;

  if (scrollPosition > 30) {

    document.querySelector('.cont_box').style.background = '#0f0e0e'
  } else {
    document.querySelector('.cont_box').style.background = 'none'
  }
})


if (!token && hash) {
  let token = hash.split('=')[1]

  localStorage.setItem('token', token)
  location.href = ""
}


let artistsids = []
let name=document.querySelector('.top p b')
let profile=document.querySelector('.profile')
axios.get(`${PUBLIC_URL}/me/playlists`, {
  headers: {
    Authorization: `Bearer ${token}`
  }
})
  .then(res => {

    name.innerHTML=res.data.items[0].owner.display_name
console.log(res.data.items[0].owner.display_name);
    axios.get(`${PUBLIC_URL}/playlists/${res.data.items[0].id}/tracks`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(tracks => {

        tracks.data.items.forEach(track => {
          artistsids.push(track.track.artists[0].id)
        })
        // const uniqueArtistsIds = new Set();

        // tracks.data.items.forEach(track => {
        //   track.track.artists.forEach(artist => {
        //     uniqueArtistsIds.add(artist.id);
        //   });
        // });
      
   
        // const uniqueArtistsIdsArray = Array.from(uniqueArtistsIds);
        // artistsids.push(uniqueArtistsIdsArray)
        axios.get(`${PUBLIC_URL}/artists?ids=${artistsids}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
          .then(response => {
      
            const uniqueArtists = response.data.artists.filter((artist, index, self) =>
              index === self.findIndex((t) => (
                t.id === artist.id
              ))
            );
          
            // Проверяем содержимое uniqueArtists, чтобы убедиться, что нет дубликатов
            console.log('Unique artists:', uniqueArtists);
          
            // Вызываем функции с уникальными данными
            rel_music(uniqueArtists.slice(2, 6), music_box);
            reloadNewRel(uniqueArtists, artists_box_container);
          })
      })
  })

// const hash = location.hash
// const token = localStorage.getItem('token')


// if(!token && hash) {
//     const token = hash.split('=')[1]

//     localStorage.setItem('token', token)
//     location.href = ""
// }

// fetch(`${PUBLIC_URL}/me`, {
//     method: 'get',
//     headers: {
//         Authorization: `Bearer ${token}`
//     }
// })
//     .then(res => res.json())
//     .then(res=>console.log(res))

// console.log(token);

let act = document.querySelectorAll('.active-button')
act.forEach(elem => {
  elem.onclick = () => {
    act.forEach(el => {
      el.classList.remove('act')

    })

    elem.classList.add('act')
  }
})












