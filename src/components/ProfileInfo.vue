<template>
<AppHeader />
<div class="card flex align-items-center justify-content-center justify-center items-center mt-10 pb-6">
    <Card style="width: 25em">

        <template #header>
            <div class="flex justify-center items-center">
                <img alt="user header" :src="ProfileData.image" class="w-32 h-32 rounded-full" />
            </div>
        </template>
        <template #title> {{ ProfileData.name }}</template>
        <template #subtitle> {{ ProfileData.email }} </template>
        <template #content>
            <p>Country: {{ProfileData.country }}</p>
            <p>Gender: {{ProfileData.gender }}</p>
            <p class="text-justify pt-2">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque
                quas!
            </p>
        </template>

    </Card>
</div>
</template>

<script>
import axios from 'axios';
import Card from 'primevue/card';
import AppHeader from './AppHeader.vue';
export default {
    name: 'ProfileInfo',

    data() {
        return {

            id: this.$route.params.id,
            ProfileData: {

            },
        };
    },
    components: {
        Card,
        AppHeader,
    },

    async mounted() {

        let result = await axios.get("http://localhost:3000/users/" + this.id);
        console.warn(result.data);
        this.ProfileData = result.data;
        let user = localStorage.getItem('user-info');
        if (!user) {
            this.$router.push({
                name: 'Signin'
            });
        }

    },

    methods: {

    },
};
</script>

<style lang="" scoped>

</style>
