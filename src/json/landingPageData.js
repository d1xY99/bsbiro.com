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
    title: 'Knjigovodstvo',
    imageUrl: UIUX,
    animation: 'right',
  },
  {
    title: 'Softverski inžinjering',
    imageUrl: Web,
    animation: 'left',
  },
  {
    title: 'Poslovno savjetovanje',
    imageUrl: Mobile,
    animation: 'up',
  },
];



export const Advantages = [
  [{
    title: 'Komunikativni',
    description: 'Otvoreno komuniciramo s klijentima i redovito ih informiramo o svemu što je važno.',
    imageUrl: Communicative,
  },
  {
    title: 'Upravljanje',
    description: 'Profesionalno upravljamo svim knjigovodstvenim uslugama za vašu sigurnost i pouzdanost.',
    imageUrl: Management,
  }],
  [{
    title: 'Suradnja',
    description: 'Naš tim usko surađuje kako bi sve vaše knjigovodstvene obaveze bile ispunjene na vrijeme.',
    imageUrl: Collaborative,
  },
  {
    title: 'Povjerenje klijenata',
    description: 'Imamo brojne zadovoljne klijente koji nam već godinama ukazuju povjerenje.',
    imageUrl: Favorite,
  }],
];


export const Recenzije = [
  {
    id: 1,
    name: 'Amra Hadžić',
    testimoni: 'Hvala ekipi iz BS Biro, zaista ste profesionalni i ljubazni! Sve preporuke.',
    imageUrl: Amra, 
  },
  {
    id: 2,
    name: 'Tarik Šabanović',
    testimoni: 'Suradnja s BS Biro je uvijek efikasna i bez stresa. Sve je transparentno i uredno.',
    imageUrl: Tarik, 
  },
  {
    id: 3,
    name: 'Lejla Karić',
    testimoni: 'BS Biro nam je značajno olakšao poslovanje. Topla preporuka za sve poduzetnike!',
    imageUrl: Lejla, 
  },
];

