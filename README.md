# prisma-error
Example reproduction of prisma error https://github.com/prisma/prisma/issues/13864

# Run
Simply run `docker compose up` and watch the console.

# Code
The main code can be found in `app/index.js` it basically inserts 2000 rows of example data, which can be seen in `app/testdata.json` which contains only one property with a very long string (> 500kB) and then selects them with `findMany`.


In my case it broke with the 1067the row, but this may be hardware specific.
