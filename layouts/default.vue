<template>
   <header class="p-4 shadow-sm bg-white gap-3">
      <nav class="mx-auto p-4 flex justify-between">
         <NuxtLink to="/" class="font-bold">Hello World App</NuxtLink>
         <ul class="flex gap-4">
            <li><NuxtLink to="/">Home</NuxtLink></li>
            <li><NuxtLink to="/about">About</NuxtLink></li>
            <li><NuxtLink to="/products" class="btn text-white">Products</NuxtLink></li>
            <li><NuxtLink to="/products/abc">Products ABC</NuxtLink></li>
         </ul>
      </nav>
   </header>
   <div class="container mx-auto p-4">
      <slot/>
   </div>
</template>

<script setup>

</script>

<style scoped>
   .router-link-exact-active {
      color: rgb(0, 140, 255);
   }
</style>