<template>
<!-- <div class="bg-slate-100 text-lime-600 w-full px-4 py-2 flex justify-between font-semibold mb-2">
    <div class="flex items-center">

        <img src="../assets/restaurant_logo.png" alt="Company Logo" class="h-20 w-15 mr-2"> 
        <router-link to="/" exact class="mr-4">Home</router-link>
        <router-link v-if="storeData=true" v-bind:to="'/profile/'+id" class="mr-4">Profile</router-link>
        <router-link to="/add-restaurant" exact class="mr-4">Add Restaurant</router-link>
        <router-link to="/list-restaurant" exact class="mr-4">List Restaurant</router-link>
    </div>

    <a href="#" class="text-right font-semibold px-4 py-5" v-on:click="logout()">Logout</a>
</div> -->

<div class=" bg-slate-100 text-lime-600 py-1 px-6 shadow md:flex justify-between ">

    <div class="flex items-center cursor-pointer">
        <span>
            <img src="../assets/restaurant_logo.png" alt="Company Logo" class="h-20 w-15 mr-2">
        </span>
    </div>

    <span @click="MenuOpen" class="absolute md:hidden right-6 top-1.5 cursor-pointer text-4xl">
        <i :class="[open ? 'bi bi-x':'bi bi-filter-left']"></i>
    </span>
    <ul class="md:flex md:items-center md:px-0 px-6 md:py-0 py-8 md:pb-0 pb-10 md:static absolute bg-slate-100 md:w-auto w-full top-18 duration-700 ease-in" :class="[open ? 'left-0' : 'left-[-100%]']">
        <li class=" md:mx-4 md:my-0 my-4">
            <router-link to="/" exact class=" font-semibold hover:text-green-900">Home</router-link>
        </li>
        <li class=" md:mx-4  md:my-0 my-4">
            <router-link v-if="storeData=true" v-bind:to="'/profile/'+id" class="font-semibold hover:text-green-900">Profile</router-link>
        </li>
        <li class=" md:mx-4 md:my-0 my-4">
            <router-link to="/add-restaurant" exact class="font-semibold hover:text-green-900 ">Add Restaurant</router-link>
        </li>
        <li class=" md:mx-4 md:my-0 my-4">
            <router-link to="/list-restaurant" exact class="font-semibold hover:text-green-900 ">List Restaurant</router-link>
        </li>

        <li class=" md:mx-4 md:my-0 my-4">
            <a href="#" class="font-semibold hover:text-green-900 " v-on:click="logout()">Logout</a>
        </li>
    </ul>

</div>
</template>

<script>
export default {
   
    name: 'AppHeader',

    data() {
        return {
          
            id: "",
            open : false,
        };
    },

    methods: {
        logout() {
            console.log("logout");
            localStorage.clear();
            this.$router.push({
                name: 'Signin'
            });
        },
        MenuOpen(){
            this.open = !this.open;
        }

    },
    async mounted() {
        let user = localStorage.getItem('user-info');
        this.id = JSON.parse(user).id;
        if (!user) {
            this.$router.push({
                name: 'Signin'
            });

        }

    },
};
</script>

<style scoped>
.router-link-active {
    border: 1px solid white;
    background-color: white;
    border-radius: 5px;
    widows: 70%;
    padding: 10px;
    margin: 15px 0px;
    color: green;
    cursor: pointer;
    font-weight: 600;
}
</style>
