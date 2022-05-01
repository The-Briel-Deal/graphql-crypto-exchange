const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const resolvers = {
    Query: {
        buyOrders: async () => {
            let to_return = null
            await prisma.buys.findMany().then(
                (resp)=>{
                    for (const [index, element] of resp.entries()) {
                        resp[index].id = element.order_id
                        delete resp[index].order_id
                        to_return = resp
                    }
                
                // console.log(resp)
                })
            
            return to_return
            
            // Example Data Below
            // [
            //     {
            //         id: 1,
            //         limit: 24,
            //         user: {
            //             id: 1,
            //             name: "Gabriel"
            //         }
            //     },
            //     {
            //         id: 2,
            //         limit: 21,
            //         user: {
            //             id: 1,
            //             name: "Gabriel"
            //         }
            //     },
            //     {
            //         id: 3,
            //         limit: 27,
            //         user: {
            //             id: 1,
            //             name: "Gabriel"
            //         }
            //     }
            // ]
        }
    }
}

module.exports = resolvers