import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import fs from 'fs';
import contactHandler from './api/contact.js';

function logToFile(msg, data) {
    const timestamp = new Date().toISOString();
    fs.appendFileSync('debug.log', `[${timestamp}] ${msg} ${JSON.stringify(data, null, 2)}\n`);
}


dotenv.config();

const app = express();
const PORT = 3009;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Debug middleware
app.use((req, res, next) => {
    logToFile(`${req.method} ${req.path}`, req.body);
    console.log(`[API SERVER] ${req.method} ${req.path}`);
    console.log(`[API SERVER] Body:`, req.body);
    next();
});

// Proxy requests to the Vercel-style handler
app.post('/api/contact', async (req, res) => {
    console.log('[DEBUG] Calling the contactHandler with body:', req.body);
    try {
        await contactHandler(req, res);
    } catch (error) {
        console.error('[ERROR] Error in contactHandler:', error);
        logToFile('ERROR in contactHandler', { message: error.message, stack: error.stack });
        if (!res.headersSent) {
            res.status(500).json({ error: 'Internal Server Error', details: error.message });
        }
    }
});

app.listen(PORT, () => {
    console.log(`Development API server running at http://localhost:${PORT}`);
    console.log(`Frontend should now be able to reach http://localhost:3009/api/contact via proxy.`);
});
