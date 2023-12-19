const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios'); 
const mysql = require('mysql2'); 

const app = express();
const port = 3001;

app.use(bodyParser.json());


const connection = mysql.createConnection({
  host: 'localhost', 
  user: 'root',      
  password: 'password',  
  database: 'local_database', 
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL');
});

app.post('/api/signup', (req, res) => {
  try {
    const { batch, name, age } = req.body;

  
    if (!batch || !name || !age) {
      return res.status(400).json({ error: 'Please provide batch, name, and age' });
    }

  
    const parsedAge = parseInt(age, 10);
    if (isNaN(parsedAge) || parsedAge < 18 || parsedAge > 100) {
      return res.status(400).json({ error: 'Age must be between 18 and 100' });
    }

   
    connection.query(
      'INSERT INTO users (batch, name, age) VALUES (?, ?, ?)',
      [batch, name, parsedAge],
      (error, results) => {
        if (error) {
          console.error('Error inserting user into MySQL:', error);
          return res.status(500).json({ error: 'Internal server error' });
        }

        const insertedUserId = results.insertId;
        const newUser = { id: insertedUserId, batch, name, age: parsedAge };

        return res.status(201).json({ message: 'User signed up successfully', user: newUser });
      }
    );
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
