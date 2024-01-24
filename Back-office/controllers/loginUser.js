const db = require("../configs/database");
const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();

// Middleware untuk parsing body dari request
router.use(bodyParser.urlencoded({ extended: true }));

// Endpoint untuk melakukan login
router.post('/', (req, res) => {
    const { username, password } = req.body;

    // Query untuk mencari pengguna berdasarkan username dan password
    const query = 'SELECT * FROM users WHERE username = ? AND password = ?';
    
    // Langsung gunakan query tanpa memanggil db.query lagi
    db.query(query, [username, password], (error, results, fields) => {
        if (error) {
            console.error('Error executing query:', error);
            res.status(500).json({ message: 'Internal Server Error' });
            return;
        }

        // Jika pengguna ditemukan, kirimkan respons berhasil bersama dengan token
        if (results.length > 0) {
            const user = results[0];
            const authToken = generateAuthToken(user); // Fungsi untuk menghasilkan token, sesuaikan dengan kebutuhan Anda
            res.status(200).json({ message: 'Login successful', authToken });
        } else {
            // Jika pengguna tidak ditemukan, kirimkan respons gagal
            res.status(401).json({ message: 'Invalid credentials' });
        }
    });
});

// Fungsi untuk menghasilkan token (contoh sederhana, sesuaikan dengan kebutuhan Anda)
const generateAuthToken = (user) => {
    const authToken = `Bearer ${user.id}-${user.username}`; // Contoh token, sesuaikan dengan kebutuhan Anda
    return authToken;
}

module.exports = router;
