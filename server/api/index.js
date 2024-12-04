export default defineEventHandler( async (event) => {
   
   // Handle query parameter
   const { name } = getQuery(event);
   
   // Handle post data
   const { age, address } = await readBody(event)
   return {
      message: `Hello, ${name}`,
      data: { age, address }
   }
})