<template>
    <div class="w-screen h-screen flex justify-center items-center">
        <div class="card w-96 py-12 bg-base-100 shadow-xl flex justify-center items-center" v-if="user">
            <div class="avatar">
  <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
    <img :src="user.photoURL" />
  </div>
</div>

<div class="username py-2">
    <h1 class="text-2xl font-bold">{{user.displayName}}</h1>
</div>

<div class="email py-2">
    <h1 class="text-xl font-bold text-blue-600">{{user.email}}</h1>
</div>
        </div>

        <div class="card w-96 py-12 bg-base-100 shadow-xl flex justify-center items-center" v-else>
            <div class="py-4">
                <button class="btn btn-primary btn-md btn-wide" @click="googleSignIn">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                      alt="Google logo"
                      class="w-6 h-6"
                    />
                    Sign in with Google
                  </button>
            </div>

            <div class="py-2">
                <router-link to="/login" class="text-blue-500"
                  >Already have an account? Login here</router-link
                >
              </div>

            <div class="py">
                <router-link to="/register" class="text-blue-500"
                  >Don't have an account? Register here</router-link
                >

            </div>
            </div>

    </div>
</template>

<script>
import {auth} from '../firebaseConfig'

    export default{
        data(){
            return{
                user: auth.currentUser
            }
        },
    }
</script>