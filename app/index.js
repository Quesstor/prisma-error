const { PrismaClient } = require("@prisma/client")
const fs = require("fs")

const testdata = JSON.parse(fs.readFileSync(__dirname + "/testdata.json"))
const DB = new PrismaClient()
const insertionCount = 1100

const batchCount = 100;
(async () => {
  await DB.document.deleteMany()
  for (let i = 0; i < insertionCount; i += batchCount) {
    console.log(`Creating ${batchCount} rows ${i}/${insertionCount}`)
    await DB.document.createMany({ data: Array(batchCount).fill({ data: testdata }) })
  }
  console.log("Selecting documents ...")
  const works = await DB.document.findMany({ take: 1066 })
  console.log("Selected", works.length)
  const breaks = await DB.document.findMany({ take: 1067 })
})()
