<template>
<div class="flex justify-center items-center  h-screen">
    <div class="w-96 p-6 shadow-lg bg-slate-50 rounded">
        <div class="shrink-0 mb-2 flex justify-center items-center">
                <img id="" class="h-20 w-14 object-cover rounded-full" src="../assets/restaurant_logo.png" alt="Current profile photo" />
        </div>
        <h1 class="text-center text-blue-600 font-bold text-lg">Sign Up</h1>
        <ul>
            <li v-for="item in error" :key="item" class="text-red-800 list-disc list-inside text-center ">
                {{ item }} not valid
            </li>
        </ul>
        <form>
            <!-- trim remove space -->
            <span class="block text-sm font-medium text-slate-700">Name</span>
            <input type="name" id="name" v-model.trim="formData.name" placeholder="Enter your Name" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400  focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" />

            <span class="block text-sm font-medium text-slate-700">Email</span>
            <input type="email" id="email" v-model="formData.email" placeholder="Enter your Email" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400  focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" />

            <span class="block text-sm font-medium text-slate-700">Password</span>
            <input type="password" id="password" v-model="formData.password" placeholder="Enter your Password" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" />
            <span class="block text-sm font-medium text-slate-700">Country</span>

            <select name="country" id="country" v-model="formData.country" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1">
                <option value="Bangladesh">Bangladesh</option>
                <option value="China">China</option>
                <option value="india">India</option>

            </select>

            <span class="block text-sm font-medium text-slate-700 mt-3">Gender</span>
            <span class=" text-sm font-medium text-slate-700 px-1">Male</span>
            <input type="radio" value="male" name="gender" v-model="formData.gender" />
            <span class=" text-sm font-medium text-slate-700 px-1">Female</span>
            <input type="radio" value="female" name="gender" v-model="formData.gender" />

            <span class="block text-sm font-medium text-slate-700 mt-3 mb-3">Profile Picture</span>
            <div class="flex items-center space-x-6">
            <div class="shrink-0 ">
                <img id="img_preview" v-if="formData.gender=='male'" class="h-16 w-16 object-cover rounded-full" src="../assets/male.png" alt="Current profile photo" />
                <img id="img_preview" v-if="formData.gender=='female'" class="h-16 w-16 object-cover rounded-full" src="../assets/female.png" alt="Current profile photo" />
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
                <button class="rounded-full border border-1 px-6 py-2 mt-6 text-lime-950 font-semibold border-violet-900 hover:border-violet-700 hover:bg-lime-200 " type="button" v-on:click="SignUp">
                    Signup</button>
            </div>
            <div class="text-center mt-2">
                <p> Already a member? <router-link to="/signin" class="text-violet-700 font-semibold">Login</router-link></p>
            </div>

        </form>

    </div>
</div>
<!-- <div v-show="submitted" class="flex justify-center items-center mt-5">

    <div class="w-96 p-6 shadow-lg bg-slate-50 rounded">
        <h1 class="text-center text-blue-600 font-bold my-4 mb-6">Thanks for Sign Up !</h1>
        <p>Name: {{ formData.name }}</p>
        <p>Email: {{ formData.email }}</p>
        <p>Password: {{ formData.password }}</p>
        <p>Country: {{ formData.country }}</p>
        <p>Gender:{{ formData.gender }} </p>
    </div>

</div> -->
</template>

<script>
import axios from 'axios'
export default {
    name: 'SignUp',
    mounted() {
        let user = localStorage.getItem('user-info');
        if (user) {
            this.$router.push({
                name: 'Home'
            });
        }
    },

    data() {
        return {
            formData: {
                name: "",
                email: "",
                password: "",
                country: "",
                gender: "male",
                image:"",
               

            },
           
            error: [],
         
        };
    },



    methods: {
        async SignUp() {
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
                let result = await axios.post("http://localhost:3000/users", {
                    name: this.formData.name,
                    email: this.formData.email,
                    password: this.formData.password,
                    country: this.formData.country,
                    gender: this.formData.gender,
                    image:this.formData.image,

                });
                console.log(result);
                if(result.status==201){
                    console.log("Sign Up Done");
                }
                // localStorage.setItem("user-info",JSON.stringify(result.data));
                this.$router.push({name:'Signin'});
            }
          

            // console.warn(this.formData,this.error);

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

        }
    },
};
</script>

<style>

</style>
