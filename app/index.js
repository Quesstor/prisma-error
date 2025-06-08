const { PrismaClient } = require("./prisma")
const { PrismaPg } = require("@prisma/adapter-pg")
const DB = new PrismaClient({ adapter: new PrismaPg({ connectionString: "postgresql://app:app@postgres/app" }) })

  ;
(async () => {
  const user = await DB.user.create({ data: { logs: { create: {} } } })

  await Promise.all([
    await DB.user.findUnique({ where: { id: user.id }, select: { logs: { take: 1 } } }),
    await DB.user.findUnique({ where: { id: user.id }, select: { logs: { take: 1 } } }),
  ])
  console.log("WORKS in Promise.all")
  await new Promise(r => setTimeout(r, 1000));


  (async () => await DB.user.findUnique({ where: { id: user.id }, select: { logs: {} } }))()
  await DB.user.findUnique({ where: { id: user.id }, select: { logs: {} } })
  console.log("WORKS without take 1")
  await new Promise(r => setTimeout(r, 1000));


  (async () => await DB.user.findFirst({ where: { id: user.id }, select: { logs: { take: 1 } } }))()
  await DB.user.findFirst({ where: { id: user.id }, select: { logs: { take: 1 } } })
  console.log("WORKS with findFirst")
  await new Promise(r => setTimeout(r, 1000));


  // Errors with TypeError: Cannot convert undefined or null to object
  (async () => await DB.user.findUnique({ where: { id: user.id }, select: { logs: { take: 1 } } }))()
  await DB.user.findUnique({ where: { id: user.id }, select: { logs: { take: 1 } } })
  console.log("Fails")
})()
