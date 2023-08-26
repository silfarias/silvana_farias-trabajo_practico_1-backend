// Imports
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const path = require('path');
require('dotenv').config();


const app = express();
const port = process.env | 3000

  
app.listen(port, () => 
console.log(`Servidor corriendo en http://localhost:${port}`));