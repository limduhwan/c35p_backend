const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
const Router = require('./routes/routes');
require('./lib/database-manager').connect();

app.use('/', Router);
app.use(cors());

// app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
