import axios from 'axios'
import {
  left_Side_Bar,
  right_Sidebar,
  CreateHeader,
  CreateFooter,
  player_musics,
  reloadNewRel

} from "../../modules/ui.js";

import {
  getAverageRGB
} from "../../modules/avarage.js"
const PUBLIC_URL = import.meta.env.VITE_PUBLIC_URL
const token = localStorage.getItem('token')
let left_sidebar = document.querySelector('.left_sidebar')
let header = document.querySelector('header')
let footer = document.querySelector('footer')
let right_sidebar = document.querySelector('.right_sidebar')
let artists_box_container=document.querySelector('.artists_box_container')
let player = document.querySelector('.player')

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

        tracks.data.items.forEach(track => {
          artistsids.push(track.track.artists[0].id)
        })

        axios.get(`${PUBLIC_URL}/artists?ids=${artistsids}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
          .then(response => {
           
            reloadNewRel(response.data.artists.slice(0, 4), artists_box_container)
          })
      })
  })
player_musics(player)

right_Sidebar([1], right_sidebar)
CreateFooter(footer)
CreateHeader(header)
left_Side_Bar(left_sidebar)



let name_proffill = document.querySelector('.name_proffill')
let img_proffill = document.querySelector('.img_proffill')
let name_proffill2=document.querySelector('.name_proffill2')
axios.get(`${PUBLIC_URL}/me`, {
  headers: {
    Authorization: `Bearer ${token}`
  }
})
  .then(res => {
    console.log(res);

    if (res.data.images.length > 0) {
      img_proffill.src = res.data.images[1].url
    } else {
      img_proffill.src = '/img/user.jpg'
    }
name_proffill2.innerHTML = res.data.display_name
    name_proffill.innerHTML = res.data.display_name
    const img = new Image();


    img.crossOrigin = "Anonymous";


    img.onload = function () {
      var rgb = getAverageRGB(img);

      let blur = document.querySelector('.profil_box');



      blur.style.background = `
      linear-gradient(
        to right,
        rgb(${rgb.r}, ${rgb.g}, ${rgb.b}),
        rgb(${rgb.r}, ${rgb.g}, ${rgb.b})
      )`;
    }
    img.src = res.data.images[1].url


  }
  )