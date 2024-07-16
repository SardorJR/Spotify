import axios from 'axios'
import {

    left_Side_Bar,
    right_Sidebar,
    player_musics,
    CreateHeader,
    albums_musics,


} from "../../modules/ui.js";
import { getAverageRGB } from "../../modules/avarage.js";

let left_sidebar = document.querySelector('.left_sidebar')
let token = localStorage.getItem('token')
let header = document.querySelector('header')
let player = document.querySelector('.player')
let right_sidebar = document.querySelector('.right_sidebar')
let name = document.querySelector('.name')
let img2 = document.querySelector('.img')
let label = document.querySelector('.label')
let container_albums_musics = document.querySelector('.container_albums_musics')
// let player2 = document.querySelector('#i')
// player_musics(player2)
player_musics(player)
// CreateFooter(footer)
CreateHeader(header)
left_Side_Bar(left_sidebar)
right_Sidebar([1], right_sidebar)

let id = location.search.split('=').at(-1)

const PUBLIC_URL = import.meta.env.VITE_PUBLIC_URL
axios.get(`${PUBLIC_URL}/albums/${id}`, {
    headers: {
        Authorization: `Bearer ${token}`
    }
})
    .then(res => {

        const img = new Image();
        img.crossOrigin = "Anonymous";

        img.onload = function () {
            var rgb = getAverageRGB(img);

            let blur = document.querySelector('.albums');

            blur.style.background = `
            linear-gradient(
                to top,
                rgba(15, 14, 14, 0.8),
                rgb(${rgb.r}, ${rgb.g}, ${rgb.b})
            )`;
            
      let container = document.querySelector('.container');


     
      container.addEventListener('scroll', () => {
    
        const scrollPosition = container.scrollTop;

        if (scrollPosition > 320) {

          document.querySelector('header').style.background = '#00000080'
          document.querySelector('.cont_box').style.background = `
  
         linear-gradient(
         rgb(${rgb.r}, ${rgb.g}, ${rgb.b}),
         rgb(${rgb.r}, ${rgb.g}, ${rgb.b})
         )`

        } else {
     
          document.querySelector('header').style.background = 'none'
          document.querySelector('.cont_box').style.background = 'none';
        }
      });

        };

        img.src = res.data.images[1].url
        img2.src = res.data.images[1].url
        label.innerHTML = res.data.label



        // let album=[]
        // album.push()

        albums_musics(res.data.tracks.items, container_albums_musics)
        let albumImg = document.querySelector('.images_box img')
        
        // console.log();
        albumImg.src = res.data.images[0].url
        if (name.length > 20) {
            name.innerHTML = res.data.name.slice(0, 20) + '..'
        } else {
            name.innerHTML = res.data.name
        }
    })
