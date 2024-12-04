<template>
   <Head>
      <Title>Nuxt Test | {{ product.title }}</Title>
      <Meta name="description" :content="product.description"/>
   </Head>
   <ProductDetail :product="product"/>
</template>

<script setup>
const { id } = useRoute().params
const uri = `https://fakestoreapi.com/products/${id}`

// Fetch the product
const { data: product } = await useFetch(uri)
if (!product.value) {
   throw createError({
      statusCode: 404,
      statusMessage: "Product Not Found",
      fatal: true
   })
}

definePageMeta({
   layout: 'products'
})
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