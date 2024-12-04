export default defineEventHandler(async (event) => {

   const { currencyApiKey } = useRuntimeConfig()
   const result = await $fetch(`https://api.currencyapi.com/v3/latest`, {
      query: {
         apikey: currencyApiKey
      }
   })
   return {
      message: "Success get data",
      data: result.data
   }
})