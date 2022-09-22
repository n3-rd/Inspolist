<template>
    <div>
        <div class="w-screen h-screen flex justify-center items-center">



<div class="card min-w-96 py-12 bg-base-100 shadow-xl flex justify-center items-center" v-if="user">
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
<div v-if="userWebsites">

<div class="h2 text-4xl py-4 font-bold text-center">Websites</div>

<div class="websites py-2 w-screen">
<div class="grid grid-cols-1 md:grid-cols-3 gap-3 mx-4 pt-6">
    <div class="grid-item mb-12 h-[16rem] w-full relative bg-zinc-100" v-for="userWebsite in userWebsites" :key="userWebsite.uid">
        <div class="item__inner w-full h-full bg-center bg-cover" :style="{
            'background-image': 'url(' + userWebsite.image + ')',
        }">
            <!-- add overlay with external link icon -->
            <div class="
      item__overlay
      hidden
      z-[9999]
      h-full
      w-full
      bg-[#00000084]
      justify-center
      items-center
    ">
                <button @click="openExternalLink(userWebsite.url)" class="
        btn
        border-white
        text-white
        hover:bg-white hover:text-black
        btn-outline
        opacity-100
      ">
                    open
                </button>
                <!-- card name -->
                <div class="
        item__name
        absolute
        bottom-0
        left-0
        p-2
        text-white
        font-semibold font-display
      ">
                    {{ userWebsite.name }}
                </div>
            </div>
        </div>
        <div class="item-name font-display font-bold text-lg" data-theme="light">
            {{userWebsite.name}}
        </div>
        <div class="item-dev font-display text-sm opacity-95">
            {{userWebsite.developer}}
        </div>
    </div>
</div>
</div>
</div>

</div>
</div>
    </div>
</template>

<script>
import {auth} from '../firebaseConfig'

    export default{
        data(){
            return{
                user: auth.currentUser,
            }
        },
        // meth
        mounted(){
            setInterval(() => {
        auth.onAuthStateChanged((user) => {
        if (user) {
          this.user = user
        } else {
          this.user = null
        }
      })
      }, 1000)
        }
    }
</script>