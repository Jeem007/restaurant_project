<template>
   <div class="card flex align-items-center justify-content-center justify-center items-center mt-10 pb-6">
        <Card style="width: 25em">
            <template #header>
                <img alt="user header" src="https://primefaces.org/cdn/primevue/images/usercard.png" />
            </template>
            <template #title>  <h1 class="text-center text-blue-950 font-bold">404 !! Page Not Found</h1>
        </template>
            
            
        </Card>
    </div>
</template>
<script>
import Card from 'primevue/card';
export default {
    name: 'PageNotFound',
    components:{
        Card,
    },

    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style lang="" scoped>
    
</style>