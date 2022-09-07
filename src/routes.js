const Home = () => import('./pages/Home.vue');
const AddWebsite = () => import('./pages/AddWebsite.vue');
const Login = () => import('./pages/Login.vue');
const Register = () => import('./pages/Register.vue');
const Profile = () => import('./pages/Profile.vue');

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
    {
        path: '/login',
        component: Login,
        name: 'Login',
        meta: {
            title: 'Login',
            description: 'Login page',
            keywords: 'login, page',
        },
    },
    {
        path: '/register',
        component: Register,
        name: 'Register',
        meta: {
            title: 'Register',
            description: 'Register page',
            keywords: 'register, page',
        },
    },
    {
        path: '/profile',
        component: Profile,
        name: 'Profile',
        meta: {
            title: 'Profile',
            description: 'Profile page',
            keywords: 'profile, page',
        },
    },
]

export default routes;