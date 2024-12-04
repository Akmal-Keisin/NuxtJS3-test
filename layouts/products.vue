<template>
   <header class="shadow-sm bg-white">
      <nav class="container mx-auto p-4">
         <NuxtLink to="/products" class="font-bold">Hello World Merch</NuxtLink>
      </nav>
   </header>
   <div class="container mx-auto p-4">
      <slot/>
   </div>
   <footer class="container mx-auto p-4 justify-between border-t-2">
      <ul class="flex gap-4">
         <li><NuxtLink to="/">Home</NuxtLink></li>
         <li><NuxtLink to="/about">About</NuxtLink></li>
         <li><NuxtLink to="/products">Products</NuxtLink></li>
      </ul>
   </footer>
</template>

<script setup>

</script>

<style scoped>
   .router-link-exact-active {
      color: rgb(0, 140, 255);
   }
</style>