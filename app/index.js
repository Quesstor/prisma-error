const { PrismaClient } = require("./prisma")
const { PrismaPg } = require("@prisma/adapter-pg")
const DB = new PrismaClient({ adapter: new PrismaPg({ connectionString: "postgresql://app:app@postgres/app" }) })

  ;
(async () => {

  // works
  await DB.orderLine.findMany({ select: { order: true } })
  console.log("orderLine -> order works")

  // works
  await DB.order.findMany({ select: { invoices: { select: { PDF: true } } } })
  console.log("order -> invoices -> PDF works")

  // works
  await DB.order.findMany({ select: { invoices: true, orderLines: true } })
  console.log("order -> invoices & orderLines works")

  // Fails with error: Expected object, got object
  await DB.orderLine.findMany({ select: { order: { select: { invoices: true } } } })

})()
