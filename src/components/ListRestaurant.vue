<template>
    <AppHeader/>
<div class="h-screen">
    <div class=" p-6 w-full md:w-auto">
        <!-- <input type="text" v-model="search" placeholder="Search Restaurant"> -->
    <div class="overflow-x-auto">
        <table class="w-full bg-white shadow-md rounded-lg">
            <thead class="bg-slate-100">
                <tr>
                    <th class="px-6 py-3 text-left text-violet-800 font-semibold">Restaurant ID</th>
                    <th class="px-6 py-3 text-left text-violet-800 font-semibold">Restaurant Name</th>
                    <th class="px-6 py-3 text-left text-violet-800 font-semibold">Restaurant Email</th>
                    <th class="px-6 py-3 text-left text-violet-800 font-semibold">Restaurant Phone</th>
                    <th class="px-6 py-3 text-left text-violet-800 font-semibold">Restaurant Address</th>
                    <th class="px-6 py-3 text-center text-violet-800 font-semibold">Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="data in restaurantData" :key="data.id" class="border-b border-slate-300">
                    <td class="px-6 py-4">#{{ data.id }}</td>
                    <td class="px-6 py-4">{{ data.name }}</td>
                    <td class="px-6 py-4">{{ data.email }}</td>
                    <td class="px-6 py-4">{{ data.phone }}</td>
                    <td class="px-6 py-4">{{ data.address }}</td>
                    <td class="px-6 py-4 text-center">
                        <router-link :to="'/update-restaurant/'+data.id" class="text-blue-500 ">Update</router-link>
                        <p v-on:click="deleteRestaurant(data.id)" class="text-red-500 cursor-pointer ">Delete</p>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</div>


</div>
<AppFooter/>

</template>

<script>
import axios from 'axios';
import AppHeader from './AppHeader.vue';
import AppFooter from './AppFooter.vue';


export default {
    name: 'ListRestaurant',
    components:{
        AppHeader,AppFooter,
    },
    async mounted() {
       
        this.loadData()

    },

    data() {
        return {
            restaurantData:[],
            search:"",
        };
    },


    methods: {
       async deleteRestaurant(id){
            console.warn(id);
            let result = await axios.delete("http://localhost:3000/restaurants/"+id);
            if(result.status == 200 ){
                this.loadData()
            }

        },


        async loadData(){
        let user = localStorage.getItem('user-info');
        if (!user) {
            this.$router.push({
                name: 'Signin'
            });

        }

        let result = await axios.get("http://localhost:3000/restaurants");
        console.warn(result.data);
        this.restaurantData = result.data;
        },

    },
    // computed:{
    //     filterdRestaurant(){
    //         return this.restaurantData.filter((data)=>{
    //             return data.name.match(this.search);
    //         });
    //     }
    // }
};
</script>

<style>
    
</style>