<template>
  <div class="page w-screen h-screen overflow-hidden">
    <div class="page__inner w-full h-full flex flex-row justify-center items-center overflow-hidden">
        <div class=" h-full flex justify-center flex-col items-center">

            <h1 class="text-4xl font-bold">Login to Inspolist</h1>

            <div class="py-4">
                <input type="text" placeholder="Username" class="username input input-bordered input-md btn-wide" />
            </div>
            <div class="py-4">
                <input type="password" placeholder="Password" class="username input input-bordered input-md btn-wide" />
            </div>
            <div class="py-4">
                <button class="btn btn-primary btn-md btn-wide">Login</button>
            </div>
            <div class="py-2">
                <router-link to="/register" class="text-blue-500">Don't have an account? Register here</router-link>
            </div>
            <div class="py-4">
                <router-link to="#" class="text-blue-500">Forgot password?</router-link>
            </div>

        </div>
    </div>
  </div>
</template>