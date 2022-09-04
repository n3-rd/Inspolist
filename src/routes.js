const Home = () => import('./pages/Home.vue');
const AddWebsite = () => import('./pages/AddWebsite.vue');

const routes = [
    {
        path: '/',
        component: Home,
        name: 'home',
        meta: {
            title: 'Home',
            description: 'Home page',
            keywords: 'home, page',
        },
    },
    {
        path: '/addwebsite',
        component: AddWebsite,
        name: 'Add Website',
        meta: {
            title: 'Add Website',
            description: 'Add Website page',
            keywords: 'add, website, page',
        },
    },
]

export default routes;