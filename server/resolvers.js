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
                }
            )
            return to_return
        },
        sellOrders: async () => {
            let to_return = null
            await prisma.sells.findMany().then(
                (resp)=>{
                    for (const [index, element] of resp.entries()) {
                        resp[index].id = element.order_id
                        delete resp[index].order_id
                        to_return = resp
                    }
                }
            )
            return to_return
        }
    }
}

module.exports = resolvers