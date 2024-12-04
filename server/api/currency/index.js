export default defineEventHandler(async (event) => {

   const { currencyApiKey } = useRuntimeConfig()
   const { data } = await $fetch(`https://api.currencyapi.com/v3/latest?apikey=${currencyApiKey}`)

   return {
      message: "Success get data",
      data: data
   }
})