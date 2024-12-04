export default defineEventHandler(async (event) => {

   const { code } = event.context.params
   const { currencyApiKey } = useRuntimeConfig()

   const uri = `https://api.currencyapi.com/v3/latest`
   const result = await $fetch(uri, {
      query: {
         apikey: currencyApiKey,
         currencies: code
      }
   })
   return {
      message: "Success get data",
      data: result.data
   }
})