import Welcome from './components/welcome.vue';
import About from './components/pages/about.vue';
import Barbers from './components/pages/barbers.vue';
import Careers from './components/pages/careers.vue';
import Book from './components/pages/book.vue';


export const routes = [
    { path: '', component: Welcome},
    { path: '/about', component: About},
    { path: '/barbers', component: Barbers},
    { path: '/careers', component: Careers},
    { path: '/book', component: Book}
];