// Services Img Imports
import Web from '../assets/images/Services/Web.png';
import Mobile from '../assets/images/Services/Mobile.png';
import UIUX from '../assets/images/Services/Design.png';

// Portfolio Img Imports
// import Recruiting from '../assets/images/Portfolio/Recruiting.png';
// import Stream from '../assets/images/Portfolio/Stream.png';
import Freelance from '../assets/images/Portfolio/Freelance.png';
// import Aura from '../assets/images/Portfolio/Aura.png';
// import Surtido from '../assets/images/Portfolio/Surtido.png';
// import ManagementApp from '../assets/images/Portfolio/ManagementApp.png';
// import SkillSwap from '../assets/images/Portfolio/SkillSwap.png';
// import skillswap from '../assets/images/Portfolio/skillswap2.png';
// import DTC from '../assets/images/Portfolio/DTC.png';
import skillswapadmin from '../assets/images/Portfolio/skillswapadmin.png';
import dtcadmin from '../assets/images/Portfolio/dtc-admin.png';
import facerecoadmin from '../assets/images/Portfolio/face-reco-admin.png';
import jobportal from '../assets/images/Portfolio/jobportal.png';
import officemanagement from '../assets/images/Portfolio/Office-time-managment.png';

// Advantages
import Communicative from '../assets/images/Advantages/Communicative.png';
import Collaborative from '../assets/images/Advantages/Collaborative.png';
import Management from '../assets/images/Advantages/Management.png';
import Favorite from '../assets/images/Advantages/Favorite.png';

// TeamMembers
import CEO from '../assets/images/TeamMembers/CEO.jpg';
import HRD from '../assets/images/TeamMembers/HRD.jpg';
import Finance from '../assets/images/TeamMembers/Finance.jpg';
import ProjectManager from '../assets/images/TeamMembers/Project-manager.jpg';

export const Services = [
  {
    title: 'Web Development',
    imageUrl: Web,
    animation: 'left',
  },
  {
    title: 'Mobile Development',
    imageUrl: Mobile,
    animation: 'up',
  },
  {
    title: 'UI/UX Design',
    imageUrl: UIUX,
    animation: 'right',
  },
];

export const Portfolios = [
  {
    id: 'asd1293uasdads1',
    title: 'Job Portal',
    imageUrl: jobportal,
    type: 'Mobile Apps',
    responsibility: [
      'Mobile Development',
      'UI/UX Design',
    ],
    credit: 'https://github.com/MrShekh/kavya_panicker_mini_project/releases/download/v1.0.0/app-release.apk',
    description: 'A job portal mobile application that allows users to search, filter, and apply for jobs. The app supports resume uploads, job recommendations, and employer job listings.',
  },
  {
    id: 'asd1293uhjkhkjh2',
    title: 'Office-time Management App',
    imageUrl: officemanagement,
    type: 'Mobile Apps',
    responsibility: [
      'Mobile Development',
      'UI/UX Design',
    ],
    credit: 'https://github.com/MrShekh/react-native-face-reco-project/releases/download/v1.0.0/application-fa62b3be-8de6-4969-a790-5b400bf1ef8b.apk',
    description: 'An attendance tracking mobile app that utilizes GPS and face recognition to verify employee check-ins and check-outs. Designed for efficient time management in organizations.',
  },
  {
    id: 'asd1293uvbvcbbd3',
    title: 'Freelance',
    imageUrl: Freelance,
    type: 'Mobile Apps',
    responsibility: [
      'Mobile Development',
      'UI/UX Design',
    ],
    credit: 'https://dribbble.com/shots/15223131-Freelance-Mobile-App-Concept',
    description: 'A freelance service mobile app concept where users can offer their skills and get hired for short-term projects. Includes profile creation, project bids, and secure messaging.',
  },
  {
    id: 'asd1293ufgdfgs4',
    title: 'Skill Swap Admin',
    imageUrl: skillswapadmin,
    type: 'Website',
    responsibility: [
      'Web Development',
      'UI/UX Design',
    ],
    credit: 'https://skill-swap-admin.netlify.app/',
    description: 'Admin dashboard for managing the Skill Swap platform, enabling monitoring of users, reviewing skill posts, approving swap requests, banning users, and publishing announcements.',
  },
  {
    id: 'asd1293ulskmnb5',
    title: 'DTC Admin',
    imageUrl: dtcadmin,
    type: 'Website',
    responsibility: [
      'Web Development',
      'UI/UX Design',
    ],
    credit: 'https://dtc-admin.netlify.app/',
    description: 'A dashboard for a Delhi-Transportation-Corporation (DTC) system. Admins can manage customers, Crew, and Buses. Features data visualization, live analytics, and CRUD operations.',
  },
  {
    id: 'asd1293ulkmnbj6',
    title: 'Office-time Management App',
    imageUrl: facerecoadmin,
    type: 'Website',
    responsibility: [
      'Web Development',
      'UI/UX Design',
    ],
    credit: 'https://admin-face-recogniton.vercel.app/login',
    description: 'A web-based admin panel for managing office attendance using facial recognition and geolocation. HR can view attendance logs, manage user records, and track working hours.',
  },
];

export const Advantages = [
  [{
    title: 'Communicative',
    description: 'We communicate our project ideas and progress to make it clear.',
    imageUrl: Communicative,
  },
  {
    title: 'Management',
    description: 'We manage our project properly to make our project done well.',
    imageUrl: Management,
  }],
  [{
    title: 'Collaborative​',
    description: 'Our team are very collaborative to make our project done well.',
    imageUrl: Collaborative,
  },
  {
    title: 'Favorite',
    description: "We've did so many project and all of our client love it.",
    imageUrl: Favorite,
  }],
];
export const TeamMembers = [
  {
    name: 'Shekh Asif',
    position: 'Full Stack Developer',
    imageUrl: CEO,
    link: 'https://shekhasifsportfolio.netlify.app/',
  },
  {
    name: 'Kavya Panicker',
    position: 'UI/UX Designer & Full Stack Developer',
    imageUrl: HRD,
    
  },
  {
    name: 'Mrunal Gaikwad',
    position: 'Finance',
    imageUrl: Finance,
  },
  {
    name: 'Abhishek Vishwakarma',
    position: 'Project Manager',
    imageUrl: ProjectManager,
    link: 'https://my-portfolio-vishwabhisheks-projects.vercel.app//',
  },
];
