<template>
  <div class="fixed w-full z-[999]">
    <div class="navbar bg-base-100 border-zinc-900 border-b-2">
      <div class="navbar-start">
        <div class="dropdown">
          <label tabindex="0" class="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" />
            </svg>
          </label>
          <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li>
              <router-link to="/">Homepage</router-link>
            </li>
            <li>
              <router-link to="/addwebsite">Add your website</router-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="navbar-center">
        <router-link to="/" class="btn btn-ghost normal-case text-xl">Inspolist</router-link>
      </div>
      <div class="navbar-end">

        <button class="btn btn-ghost btn-circle" data-toggle-theme="light,black" data-act-class="ACTIVECLASS">
            <svg width="32" height="32" viewBox="0 0 48 48"><mask id="svgIDa"><g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="4"><path fill="#fff" stroke="#fff" d="m24.003 4l5.27 5.27h9.457v9.456l5.27 5.27l-5.27 5.278v9.456h-9.456L24.004 44l-5.278-5.27H9.27v-9.456L4 23.997l5.27-5.27V9.27h9.456L24.003 4Z"/><path fill="#000" stroke="#000" d="M27 17c0 8-5 9-10 9c0 4 6.5 8 12 4s2-13-2-13Z"/></g></mask><path fill="#38e5ba" d="M0 0h48v48H0z" mask="url(#svgIDa)"/></svg>

        </button>
      </div>
    </div>
  </div>
</template>

<script>
  import { themeChange } from 'theme-change'

  export default {
    name: 'TitleBar',
    methods: {
      toggleTheme() {
        themeChange()

        if (localStorage.getItem('theme') === 'dark') {
          localStorage.setItem('theme', 'light')
        } else {
          localStorage.setItem('theme', 'dark')
        }



      },
    },
    mounted() {
      themeChange(false)
    },
  }


</script>