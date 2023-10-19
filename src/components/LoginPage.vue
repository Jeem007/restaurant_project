<template>
<div>
    <div class="flex justify-center items-center h-screen">
        <div class="w-96 p-6 shadow-lg bg-slate-50 rounded">
            <div class="shrink-0 mb-2 flex justify-center items-center">
                <img id="" class="h-20 w-14 object-cover rounded-full" src="../assets/restaurant_logo.png" alt="Current profile photo" />
            </div>
                 <div>
                    <p id="error" class="text-center text-red-700 font-semibold"></p>
                </div>

            <!-- <ul>
                <li v-for="item in error" :key="item" class="text-red-800 list-disc list-inside text-center ">
                    {{ item }} not valid
                </li>
            </ul> -->
            <form>

                <span class="block text-sm font-medium text-slate-700">Email</span>
                <input type="email" id="email" placeholder="Enter your Email" v-model="email" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400  focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" />

                <span class="block text-sm font-medium text-slate-700">Password</span>
                <input type="password" id="password" placeholder="Enter your Password" v-model="password" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" />

                <div class="flex justify-center items-center">
                    <button class="rounded-full border border-1 px-6 py-2 mt-6 text-lime-950 font-semibold border-amber-900 hover:border-violet-700 hover:bg-lime-200 " type="button" v-on:click="LogIn">
                        Login</button>
                </div>
                <div class="text-center mt-2">
                    <p> Dont have an account? <router-link to="/signup" class="text-violet-700 font-semibold">SignUp</router-link>
                    </p>
                </div>

               

            </form>

        </div>
    </div>
</div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'LoginPage',
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
            email: "",
            password: "",
        };
    },

    methods: {
    //    async LogIn() {
    //      //http://localhost:3000/users?email=peter@test.com&password=peter1234
       
    //         let result = await axios.get(
    //             `http://localhost:3000/users?email=${this.email}&password${this.password}`
               
    //         );
    //         console.warn(result);
    //              if(result.status==200 && result.data.length > 0){
    //                 console.log("log in Done");
    //                 localStorage.setItem("user-info",JSON.stringify(result.data[0]));
    //                  this.$router.push({name:'Home'});
    //             }
    //             else{
    //                 document.getElementById('error').innerHTML="Invalid email or Password";
    //             }
               
    //     }

    async LogIn() {
    try {
        // Make an HTTP GET request to fetch user data by email
        const response = await axios.get(`http://localhost:3000/users?email=${this.email}`);

        if (response.status === 200 && response.data.length > 0) {
            const user = response.data[0];

            // Check if the password matches
            if (user.password === this.password) {
                console.log("Log in Done");
                localStorage.setItem("user-info", JSON.stringify(user));
                this.$router.push({ name: 'Home' });
            } else {
                document.getElementById('error').innerHTML = "Invalid Password";
            }
        } else {
            document.getElementById('error').innerHTML = "User not found";
        }
    } catch (error) {
        console.error("Error while logging in:", error);
        // Handle errors, e.g., network issues, server errors, etc.
    }
}




    },
};
</script>

<style >

</style>
