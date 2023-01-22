// Sidebar imports
import {
  UilEstate,
  UilClipboardAlt,
  UilUsersAlt,
  UilPackage,
  UilChart,
  UilUsdSquare,
  UilMoneyWithdrawal,
} from "@iconscout/react-unicons";

// Recent Card Imports
import img1 from "../img/urban-user.png";
/* import img2 from "../imgs/img2.png";
import img3 from "../imgs/img3.png"; */

// Sidebar Data
export const SidebarData = [
  {
    icon: UilEstate,
    heading: "Dashboard",
  },
  {
    icon: UilClipboardAlt,
    heading: "Cursos",
  },
  {
    icon: UilUsersAlt,
    heading: "Usuarios",
  },
  {
    icon: UilPackage,
    heading: 'Evaluaciones'
  },
  {
    icon: UilChart,
    heading: 'Estadísticas'
  },
];

// Analytics Cards Data
export const cardsData = [
  {
    title: "Cursos",
    color: {
      backGround: "linear-gradient(180deg, #a8e3b5 0%, #a2e0af 100%)",
      boxShadow: "0px 10px 20px 0px #8eeda4",
    },
    barValue: 70,
    value: "25,970",
    png: UilUsdSquare,
  },
  {
    title: "Revenue",
    color: {
      backGround: "linear-gradient(180deg, #f5a27d 0%, #f3a784 100%)",
      boxShadow: "0px 10px 20px 0px #ffb18f",
    },
    barValue: 80,
    value: "14,270",
    png: UilMoneyWithdrawal,
  },
  {
    title: "Usuarios",
    color: {
      backGround:
        "linear-gradient(#f8d49a -146.42%, #ffca71 -46.42%)",
      boxShadow: "0px 10px 20px 0px #F9D59B",
    },
    barValue: 60,
    value: "4,270",
    png: UilClipboardAlt,
  },
];

/* let usuarios = [];

fetch('http://localhost:3002/api/last-users')
.then(response => {
  return response.json();
})
.then(datos => {

  for (let i = 0; i < datos.data.length; i++) {
    const element = datos.data[i];
    usuarios.push(element)
  }
  datos.data.map(element => {
  return usuarios.push(element)
  })
})
console.log(usuarios); */

// Recent Update Card Data
export const UpdatesData = [
  {
    img: img1,
    name: "James",
    last: "Bond",
    time: "30 minutes ago",
  },
  {
    img: img1,
    name: "Wonder Woman",
    noti: "has received Samsung gadget for charging battery.",
    time: "30 minutes ago",
  },
  {
    img: img1,
    name: "Iron Man",
    noti: "has ordered Apple smart watch, samsung Gear 2500mh battery.",
    time: "2 hours ago",
  },
];

