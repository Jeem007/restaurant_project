<template>
    <div>
        <!-- <AppHeader/> -->
    </div>
    <div class="flex justify-center items-center h-screen ">
    <div class="w-96 p-6 shadow-lg bg-slate-50 rounded">
        <h1 class="text-center text-blue-600 font-bold text-lg mt-2 mb-4">Add Restaurant</h1>
        <ul>
            <li v-for="item in error" :key="item" class="text-red-800 list-disc list-inside text-center ">
                {{ item }} not valid
            </li>
        </ul>
        <form>
            <!-- trim remove space -->
            <span class="block text-sm font-medium text-slate-700">Restaurant Name</span>
            <input type="name" id="name" v-model.trim="formData.name" placeholder="Enter Restaurant Name" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400  focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" />

            <span class="block text-sm font-medium text-slate-700">Restaurant Email</span>
            <input type="email" id="email" v-model="formData.email" placeholder="Enter Contact Email" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400  focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" />
            <span class="block text-sm font-medium text-slate-700">Restaurant Phone</span>
            <input type="text" id="phone" v-model="formData.phone" placeholder="Enter Phone No." class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400  focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" />
            <span class="block text-sm font-medium text-slate-700">Restaurant Address</span>
            <input type="text" id="address" v-model="formData.address" placeholder="Enter Restaurant Address" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400  focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" />
            <span class="block text-sm font-medium text-slate-700">Description</span>
            <textarea name="" id="" cols="3" rows="2" v-model="formData.description" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400  focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" ></textarea>

        

            <span class="block text-sm font-medium text-slate-700 mt-3 mb-3">Restaurant Logo</span>
            <div class="flex items-center space-x-6">
            <div class="shrink-0 ">
                <img id="img_preview" class="h-16 w-16 object-cover rounded-full" src="../assets/restaurant_logo.png" alt="Current profile photo" />
            </div>
            <label class="block">
                
                <input type="file" id="image" v-on:change="previewFile()"  class="block w-full text-sm text-slate-500
            file:mr-4 file:py-2 file:px-4
            file:rounded-full file:border-0
            file:text-sm file:font-semibold
            file:bg-violet-50 file:text-violet-700
            hover:file:bg-violet-100
            " />
            </label>
        </div>

            <div class="flex justify-center items-center">
                <button class="rounded-full border border-1 px-6 py-2 mt-6 text-lime-950 font-semibold border-violet-900 hover:border-violet-700 hover:bg-lime-200 " type="button" v-on:click="addRestaurant">
                    Add Restaurnat</button>
            </div>

        </form>

    </div>
</div>
</template>

<script>
// import AppHeader from './AppHeader.vue';
import axios from 'axios';
export default {
    name: 'AddRestaurant',
    components:{
        // AppHeader,
    },
    mounted() {
        let user = localStorage.getItem('user-info');
        if(!user){
            this.$router.push({name:'Signin'});
           
    }
    },

    data() {
        return {
            formData: {
                name: "",
                email: "",
                phone: "",
                address: "",
                description:"",
                image:"",
               

            },
            error: [],
        };
    },

    methods: {
        async addRestaurant() {
          const img =document.getElementById('img_preview').getAttribute('src');
          this.formData.image = img;
           
            this.error = [];
            for (const item in this.formData) {
                if (this.formData[item] === "" || this.formData[item].length === 0) {
                    this.error.push(item);
                    console.log(this.formData);
                }


            }
            if (this.error.length === 0 || img ==! '' ) {
            
                // alert("Data have been Submitted");
                this.signup = false;
                this.submitted = true;
                let result = await axios.post("http://localhost:3000/restaurants", {
                    name: this.formData.name,
                    email: this.formData.email,
                    phone: this.formData.phone,
                    address: this.formData.address,
                    description:this.formData.description,
                    image:this.formData.image,

                });
                console.log(result);
                if(result.status==201){
                    console.log("Restaurant Updated");
                }
                // localStorage.setItem("user-info",JSON.stringify(result.data));

                this.$router.push({name:'Home'});
            }
    },
    previewFile(){
            const preview = document.getElementById("img_preview");
            const file = document.getElementById('image').files[0];
            const reader = new FileReader();
            reader.addEventListener("load",function(){
                //convert image to base64 String
                preview.src = reader.result;
            }, false);

            if(file){
                reader.readAsDataURL(file);
               
            }

        },
    },
};
</script>

<style >
    
</style>