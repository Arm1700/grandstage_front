import Gallery from "../components/pages/gallery/Gallery";
import Contacts from '../components/pages/contacts/Contacts'
import Courses from '../components/pages/courses/Courses'
import Events from '../components/pages/events/Events'
import Home from '../components/pages/home/Home'
import Certificates from "../components/pages/certificate/Certificates";
import AboutUs from "../components/pages/about/AboutUs";

export const routesArray = [
  {
    id: 1,
    name: 'HOME',
    component: Home,
    path: '/',
  },
  {
    id: 2,
    name: 'COURSES',
    component: Courses,
    path: '/course-category',
  },
  {
    id: 4,
    name: 'GALLERY',
    component: Gallery,
    path: '/gallery',
  },


  {
    id: 3,
    name: 'EVENTS',
    component: Events,
    path: '/events',
  },
  {
    id: 6,
    name: 'CERTIFICATES',
    component: Certificates,
    path: '/certificates',
  },
  {
    id: 7,
    name: 'ABOUT US',
    component: AboutUs,
    path: '/about-us',
  },
  {
    id: 5,
    name: 'CONTACT US',
    component: Contacts,
    path: '/contacts',
  },


]
