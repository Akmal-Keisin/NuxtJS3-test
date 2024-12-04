<template>
   <h2>About</h2>
   <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita, fuga vel beatae quae asperiores sint officia
      ratione laboriosam magnam dolore?</p>
   <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita, fuga vel beatae quae asperiores sint officia
      ratione laboriosam magnam dolore?</p>
   <p>{{ data }}</p>
   <p>{{ currencies }}</p>
   <p>{{ currency }}</p>
</template>
<script setup>
   useHead({
      title: "About Page",
      meta: [
         { name: "description", content: "About Page" }
      ]
   })

   const { data } = await useFetch(`/api?name=Keisin`, {
      method: 'POST',
      body: {
         age: 20,
         address: "Kota Semarang"
      }
   })

   const { data: currencies } = await useFetch('/api/currency')
   const { data: currency } = await useFetch('/api/currency/IDR') 
</script>
<style scoped>
   h2 {
      margin-bottom: 20px;
      font-size: 36px;
   }

   p {
      margin: 20px 0;
   }
</style>