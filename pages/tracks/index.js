import axios from 'axios'
import {

    left_Side_Bar,
    right_Sidebar,
    player_musics,
    CreateHeader,
    CreateFooter,
    reloadNewRel2,
    reloadNewRel,
    albums_musics
} from "../../modules/ui.js";
import { getAverageRGB } from "../../modules/avarage.js";
let left_sidebar = document.querySelector('.left_sidebar')
let footer = document.querySelector('footer')
let header = document.querySelector('header')
let player = document.querySelector('.player')
let right_sidebar = document.querySelector('.right_sidebar')
let img_artist = document.querySelector('.img_artist img')
let tracks_container_h2 = document.querySelector('.tracks_container h2')
let container_albums_musics=document.querySelector('.container_albums_musics')
console.log(img_artist);
player_musics(player)
CreateFooter(footer)
CreateHeader(header)
left_Side_Bar(left_sidebar)
right_Sidebar([1], right_sidebar)

const PUBLIC_URL = import.meta.env.VITE_PUBLIC_URL
const token = localStorage.getItem('token')
let albumImg=document.querySelector('.albumImg')
let id = location.search.split('=').at(-1)
let new_music_box_p=document.querySelector('.new_music_box p')
axios.get(`${PUBLIC_URL}/tracks/${id}`, {
    headers: {
        Authorization: `Bearer ${token}`
    }
})
    .then(response => {
        console.log(response);
        new_music_box_p.innerHTML=response.data.name
        albumImg.src=response.data.album.images[0].url
        img_artist.src = response.data.album.images[0].url
        tracks_container_h2.innerHTML = response.data.album.name

        const tracks = response.data.artists[0].id;

        axios.get(`${PUBLIC_URL}/artists/${tracks}/top-tracks`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(res => {
                console.log(res);
                albums_musics(res.data.tracks, container_albums_musics)
            })


      
   

        const img = new Image();


        img.crossOrigin = "Anonymous";


        img.onload = function () {
            var rgb = getAverageRGB(img);

            let blur = document.querySelector('.tracks_container');



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

                    document.querySelector('header').style.background = '#00000080'
                    document.querySelector('header').style.height = '65px'
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

        img.src = response.data.album.images[0].url;



    })  
   