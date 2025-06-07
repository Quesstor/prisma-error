const { PrismaClient } = require("./prisma")
const { PrismaPg } = require("@prisma/adapter-pg")
const DB = new PrismaClient({ adapter: new PrismaPg({ connectionString: "postgresql://app:app@postgres/app" }) })

  ;
(async () => {
  await DB.order.deleteMany()
  await DB.orderLine.deleteMany()
  await DB.invoice.deleteMany()
  await DB.order.create({
    data: {
      invoices: { create: { PDF: { create: {} } } },
      orderLines: { create: [{ properties: { fu: "bar" } }, { properties: { one: 1 } }] }
    }
  })

  // works
  const ols = await DB.orderLine.findMany({ select: { order: true, properties: true } })
  console.log("orderLine -> order works", ols)

  // works
  await DB.order.findMany({ select: { invoices: { select: { PDF: true } } } })
  console.log("order -> invoices -> PDF works")

  // works
  await DB.order.findMany({ select: { invoices: true, orderLines: true } })
  console.log("order -> invoices & orderLines works")

  // Failed with error: Expected object, got object
  const r = await DB.orderLine.findMany({ select: { order: { select: { invoices: true } } } })
  console.log("yay, works!")
  console.log(JSON.stringify(r, null, 2))

})()
