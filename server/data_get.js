const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

function getRandomInt(min, max) {
    return min+Math.floor(Math.random() * max);
  }

for (let i = 0; i<100; i++) {

    prisma.sells.create({
        data: {
            limit: getRandomInt(2,20)
        }
    }).then(()=>{
        console.log('done')
    })
}