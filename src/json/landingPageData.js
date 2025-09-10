/* eslint-disable  */

// Services Img Imports
import Web from '../assets/images/Services/Web.png';
import Mobile from '../assets/images/Services/Mobile.png';
import UIUX from '../assets/images/Services/Design.png';

// Advantages
import Communicative from '../assets/images/Advantages/Communicative.png';
import Collaborative from '../assets/images/Advantages/Collaborative.png';
import Management from '../assets/images/Advantages/Management.png';
import Favorite from '../assets/images/Advantages/Favorite.png';

// Recenzije
import Amra from '../assets/images/Recenzije/Amra.jpg';
import Lejla from '../assets/images/Recenzije/Lejla.jpg';
import Tarik from '../assets/images/Recenzije/Tarik.jpg';


export const Services = [
  {
    key: 'knjigovodstvo',
    imageUrl: UIUX,
    animation: 'right',
  },
  {
    key: 'softver',
    imageUrl: Web,
    animation: 'left',
  },
  {
    key: 'savjetovanje',
    imageUrl: Mobile,
    animation: 'up',
  },
];

// Advantages
export const Advantages = [
  [
    {
      key: 'komunikativni',
      imageUrl: Communicative,
    },
    {
      key: 'upravljanje',
      imageUrl: Management,
    },
  ],
  [
    {
      key: 'suradnja',
      imageUrl: Collaborative,
    },
    {
      key: 'povjerenje',
      imageUrl: Favorite,
    },
  ],
];

// Recenzije
export const Recenzije = [
  {
    key: 'amra',
    imageUrl: Amra,
  },
  {
    key: 'tarik',
    imageUrl: Tarik,
  },
  {
    key: 'lejla',
    imageUrl: Lejla,
  },
];