// CLI Command:  npm i vue-router@next

import {createWebHistory,createRouter} from 'vue-router'
import HomePage from './components/HomePage'
import SignUp from './components/SignUp'
import LoginPage from './components/LoginPage'
import ProfileInfo from './components/ProfileInfo'
import AddRestaurant from './components/AddRestaurant'
import ListRestaurant from './components/ListRestaurant'
import UpdateRestaurant from './components/UpdateRestaurant'
import PageNotFound from './components/PageNotFound'

const routes = [
   {
        name: "Home",
        path:"/",
        component: HomePage,
     

   },
   {
     name: "Signup",
        path:"/signup",
        component: SignUp,
   },
   {
     name: "Signin",
        path:"/signin",
        component: LoginPage,
   },
   {
     name: "ProfileInfo",
        path:"/profile/:id",
        component: ProfileInfo
   },
   {
     name: "Add-Restaurant",
        path:"/add-restaurant",
        component: AddRestaurant
   },
   {
     name: "List-Restaurant",
        path:"/list-restaurant",
        component: ListRestaurant
   },
   {
     name: "Update-Restaurant",
        path:"/update-restaurant/:id",
        component: UpdateRestaurant
   },

  {
        name: "NotFound",
       path:"/:pathMatch(.*)*",
       component: PageNotFound
  },
];



const router = createRouter({
    history:createWebHistory(),
    routes
})
export default router;