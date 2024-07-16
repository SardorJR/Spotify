import axios from 'axios'
import {
  left_Side_Bar,
  right_Sidebar,
  CreateHeader,
  CreateFooter,
  singer_artists,
  player_musics,
  reloadNewRel2

} from "../../modules/ui.js";
import{
  getAverageRGB
} from "../../modules/avarage.js"

let token = localStorage.getItem('token')
let left_sidebar = document.querySelector('.left_sidebar')
let header = document.querySelector('header')
let footer = document.querySelector('footer')
let right_sidebar = document.querySelector('.right_sidebar')
let image_box = document.querySelector('.image_box')
let musics_container = document.querySelector('.musics-container')
let name = document.querySelector('.name')
let player = document.querySelector('.player')
let album_box_container=document.querySelector('.album_box_container')
player_musics(player)


CreateFooter(footer)
CreateHeader(header)
left_Side_Bar(left_sidebar)
let id = location.search.split('=').at(-1)
const PUBLIC_URL = import.meta.env.VITE_PUBLIC_URL
axios.get(`${PUBLIC_URL}/artists/${id}`, {
  headers: {
    Authorization: `Bearer ${token}`
  }
})
  .then(res => {
  
    let confirmed_h4=document.querySelector('.follow')
    let followers=res.data.followers.total.toLocaleString('ru-RU')
    confirmed_h4.innerHTML=`${followers} слушателей за месяц`
  
    let a2 = []
   
    a2.push(res.data)
    right_Sidebar(a2, right_sidebar)
    let photo_act=document.querySelector('.photo_act')
    let dannie=document.querySelector('.dannie p')
    dannie.innerHTML=res.data.name
    photo_act.style.backgroundImage = `url(${res.data.images[0].url})`
    name.innerHTML = res.data.name
    image_box.style.backgroundImage = `url(${res.data.images[0].url})`
    const imageUrl = res.data.images[0].url

    image_box.style.backgroundImage = `url(${imageUrl})`;

    const img = new Image();

 
    img.crossOrigin = "Anonymous";


    img.onload = function () {
      var rgb = getAverageRGB(img);

      let blur = document.querySelector('.blur');



      blur.style.background = `
      linear-gradient(
        to top,
       rgba(15, 14, 14,0.3),
       rgba(15, 14, 14,0.2),
       rgba(15, 14, 14,0.3)
      ),
      linear-gradient(
        to top,
         rgba(15, 14, 14,0.8),
        rgb(${rgb.r}, ${rgb.g}, ${rgb.b})
      )`

   
      let container = document.querySelector('.container');


     
      container.addEventListener('scroll', () => {
    
        const scrollPosition = container.scrollTop;

        if (scrollPosition > 340) {

          document.querySelector('.cont_box-header').style.background = '#00000080'
          document.querySelector('.cont_box').style.background = `
  
         linear-gradient(
         rgb(${rgb.r}, ${rgb.g}, ${rgb.b}),
         rgb(${rgb.r}, ${rgb.g}, ${rgb.b})
         )`

        } else {
     
          document.querySelector('.cont_box-header').style.background = 'none'
          document.querySelector('.cont_box').style.background = 'none';
        }
      });

    };

    img.src = imageUrl;

  

  })




let backwardImg = document.querySelector('.backwardImg')
let forwardImg = document.querySelector('.forwardImg')

axios.get(`${PUBLIC_URL}/artists/${id}/top-tracks`, {
  headers: {
    Authorization: `Bearer ${token}`
  }
})
  .then(response => {

    singer_artists(response.data.tracks, musics_container)


  })

// axios.get(`${PUBLIC_URL}/artists/${id}/albums`, {
//   headers: {
//     Authorization: `Bearer ${token}`
//   }
// })
// .then(res => {

//   let see_All=document.querySelector('.see_All')
//   see_All.onclick=()=>{
//     reloadNewRel2(albums, album_box_container);
//     see_All.innerHTML='Показать первые 8'
//   }
//   const albums = res.data?.items;
//   if (albums) {
//     reloadNewRel2(albums.slice(0, 8), album_box_container);
//   } else {
//     console.error('Unexpected response structure:', res.data);
//   }
// })
axios.get(`${PUBLIC_URL}/artists/${id}/albums`, {
  headers: {
    Authorization:`Bearer ${token}`
  }
})
.then(res => {
  const see_All = document.querySelector('.see_All');
  const album_box_container = document.querySelector('.album_box_container');
  let showAll = false

  const albums = res.data?.items;
  if (albums) {
    reloadNewRel2(albums.slice(0, 8), album_box_container)

    see_All.onclick = () => {
      if (showAll) {
        reloadNewRel2(albums.slice(0, 8), album_box_container)
        see_All.innerHTML = 'Показать все'
      } else {
        reloadNewRel2(albums, album_box_container)
        see_All.innerHTML = 'Показать первые 8'
      }
      showAll = !showAll
    };
  } else {
    console.error('Unexpected response structure:', res.data);
  }
})


// let currentSongIndex = 0
// const songs = []

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

// backwardImg.onclick = () => {
//   let currentIndex = songs.indexOf(audio.src)
//   currentSongIndex = (currentIndex - 1 + songs.length) % songs.length
//   audio.src = songs[currentSongIndex]
//   audio.play()
  
// }

// forwardImg.onclick = () => {
//   let currentIndex = songs.indexOf(audio.src)
//   currentSongIndex = (currentIndex + 1) % songs.length
//   audio.src = songs[currentSongIndex]
//   audio.play()
// }

