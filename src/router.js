import {createRouter, createWebHistory} from 'vue-router';

import PostDetails from './Pages/PostAccomodation/postDetails.vue';
import AccomodationDetails from './Pages/accomodation/AccomodationDetails.vue';
import Lists from './Pages/accomodation/Lists.vue';
import UserRegistration from './pages/accomodation/UserRegistration.vue';
import ContactOwner  from './pages/requests/contactOwner.vue';
import RequestsReceived from './pages/requests/RequestsReceived.vue';
import UserProfile from './Pages/UserProfile/UserProfile.vue';


const router = createRouter({
    history: createWebHistory(),
    routes:[
        {path:'/', redirect: '/availablelists'},
        {path: '/availablelists', component:Lists},
        {path: '/availablelists/:id', 
            component: AccomodationDetails,
        children:[
            {path: '/contact', component: ContactOwner} // availablelists/list1/contact.
        ]},
        {path:'/postdetails', component:PostDetails},
        {path: '/register', component:UserRegistration},
        {path:'/requests', component:RequestsReceived},
        {path:'./userprofile', components:UserProfile}
    ]
});

export default router;