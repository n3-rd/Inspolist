<template>
    <div class="page w-screen h-screen overflow-hidden">
      <div class="page__inner w-full h-full flex flex-row justify-center items-center overflow-hidden">
          <div class=" h-full flex justify-center flex-col items-center">

              <h1 class="text-4xl font-bold">Register new account</h1>

              <div class="py-4">
                  <input type="text" placeholder="Username" class="username input input-bordered input-md btn-wide" />
              </div>
              <div class="py-4">
                  <input type="password" placeholder="Password" class="username input input-bordered input-md btn-wide" />
              </div>
              <div class="py-4">
                  <button class="btn btn-primary btn-md btn-wide">Register</button>
              </div>
              <div class="py-2">
                  <router-link to="/login" class="text-blue-500">Already have an account? Login here</router-link>
              </div>

          </div>
      </div>
    </div>
  </template>