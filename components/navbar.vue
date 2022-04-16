<template>
  <nav>
    <ul class="flex flex-col lg:flex-row uppercase gap-8 py-16 px-8 text-4xl font-extrabold">
      <li :style="$route.path == '/'? 'text-shadow: -16px -17px 1px rgba(206,206,194,0.43)':''">
        <router-link to="/">Home</router-link>
      </li>
      <li :style="$route.path == '/contact'? 'text-shadow: -16px -17px 1px rgba(206,206,194,0.43)':''">
        <nuxt-link to="/contact">Contact</nuxt-link>
      </li>
    </ul>
  </nav>
</template>
