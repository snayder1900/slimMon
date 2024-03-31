import React, { useState, useEffect } from 'react';
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
require('dotenv').config();
const express = require('express');
const app = express();
app.use(express.json());
const router = express.Router();

const connection = mongoose.connect(DB_HOST, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})


function getProductsApi() {
    const [datos, setDatos] = useState([]);

  useEffect(() => {
      


// to do: peticion a mongoDB



    }, [])
    
    return (

         <div>
      <h1>Lista de alimentos y calorías</h1>
      <ul>
        {datos.map(alimento => (
          <li key={alimento._id.$oid}>
            {alimento.title} - {alimento.calories} calorías
          </li>
        ))}
      </ul>
    </div>

    );
}

export default getProductsApi;







