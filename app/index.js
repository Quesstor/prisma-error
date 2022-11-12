const { PrismaClient } = require("@prisma/client")
const fs = require("fs")

const testdata = JSON.parse(fs.readFileSync(__dirname + "/testdata.json"))
const DB = new PrismaClient();

(async () => {
  await DB.document.deleteMany()
  for (let i = 0; i < 2000; i += 1) {
    await DB.document.create({
      data: { data: testdata }
    })
    console.log("Insert", i)
  }
  console.log("Selecting documents ...")
  const works = await DB.document.findMany({ take: 1066 })
  console.log("Selected", works.length)
  const breaks = await DB.document.findMany({ take: 1067 })
})()
