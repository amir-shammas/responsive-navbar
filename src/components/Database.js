import {FaBehance, FaFacebook, FaLinkedin, FaTwitter} from 'react-icons/fa';


const links = [
     {
          id: 1,
          url: '/',
          text: 'خانه',
     },
     {
          id: 2,
          url: '/',
          text: 'درباره ما',
     },
       {
          id: 3,
          url: '/',
          text: 'تماس با ما',
     },
       {
          id: 4,
          url: '/',
          text: 'پروژه ها',
     },
];


const socials = [
     {
          id: 1,
          url: 'https://twitter.com',
          icon: <FaTwitter />
     },
     {
          id: 2,
          url: 'https://behance.com',
          icon: <FaBehance />
     },
     {
          id: 3,
          url: 'https://facebook.com',
          icon: <FaFacebook />
     },
     {
          id: 4,
          url: 'https://linkedin.com',
          icon: <FaLinkedin />
     },
];

export { links , socials };
