// Import modules
import express from 'express';
import db from './src/assets/database.js';

// Create Express application
const app = express();
// Parse JSON request bodies
app.use(express.json());

// app.get('/', (req, res) => {
//     const query = 'SELECT * FROM pins';
//     const pins = db.prepare(query).all();
//     res.json({pins: pins});
// });

// POST request to Pin endpoint
app.post('/api/create-pin', (req, res) => {
    try {
        const { name, lat, lon, rating, picture, difficulty } = req.body;
        console.log("Map clicked at:", lat, lon, "!");
       
        const stmt = db.prepare('INSERT INTO pins (name, lat, lon, rating, picture, difficulty) VALUES (?, ?, ?, ?, ?, ?)');
        const checkIfExists = db.prepare('SELECT Count(*) as count from pins WHERE name = ?');
        
        // Check if a pin with the same name already exists
        const { count} = checkIfExists.get(name);
        if (count === 0) {
            // If no pin with the same name exists, insert the pin
            stmt.run(name, lat, lon, rating, picture, difficulty);
            console.log(`Inserted pin with name ${name}`);
            res.status(200).json('Pin inserted successfully');
        } else {
            console.log(`Pin with name ${name} already exists, skipping insertion.`);
            res.status(409).json('Pin already exists');
        }

    } catch (error) {
    console.error('Error Inserting pins:' , error);
    res.status(500).json({ error: 'Failed to insert pins'});
    }
});


export default app;