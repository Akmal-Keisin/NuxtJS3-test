export default defineEventHandler(async (event) => {

   const { code } = event.context.params
   const { currencyApiKey } = useRuntimeConfig()

   const uri = `https://api.currencyapi.com/v3/latest?apikey=${currencyApiKey}&currencies=${code}`
   const { data } = await $fetch(uri)

   return {
      message: "Success get data",
      data: data
   }
})