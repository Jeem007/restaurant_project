<template>
<AppHeader />
<div>
    <!-- <h1 class="text-center text-blue-950 font-bold"> Hello {{ name }}</h1> -->
</div>
<div class="p-10 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-5 mb-5">
    <!--Card 1-->
    <div v-for="data in restaurantData" :key="data.id" class="rounded overflow-hidden shadow-lg">
        <div class="flex justify-center items-center">
            <img class="h-24 w-70 rounded-full" :src="data.image" alt="Mountain">
        </div>
        <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2 text-center">{{data.name}}</div>
            <p class="text-gray-700 text-base text-justify">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
            </p>
        </div>
        <div class="px-6 pt-4 pb-2">
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Address: {{ data.address }}</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Email: {{ data.email }}</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Phone: {{ data.phone }}</span>

        </div>
    </div>

</div>

<AppFooter />
</template>

<script>
// import Card from 'primevue/card';
import AppHeader from './AppHeader.vue';
import AppFooter from './AppFooter.vue';
import axios from 'axios';
export default {
    name: 'HomePage',
    async mounted() {
        let user = localStorage.getItem('user-info');
        // this.name = JSON.parse(user).name;
        if (!user) {
            this.$router.push({
                name: 'Signin'
            });

        }

        let result = await axios.get("http://localhost:3000/restaurants");
        console.warn(result.data);
        this.restaurantData = result.data;

    },
    data() {
        return {
            title: "Vue JS Tutorial",
            data: null,
            name: '',
            restaurantData: [],
        }
    },
    meta: {
        title: "Home Page"
    },
    components: {
        AppHeader,
        AppFooter,
    },
    props: {
        // title: String
    },

}
</script>

<style scoped>

</style>
