const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const pool = require('../config/db'); // Import your database configuration


const saltRounds = 10;
const secretKey = "d9ae5d4eef98462401e7b50508e712754ff4ca15f4fede90bd6145c81d8fb7a5";

exports.signup = async (req, res) => {
  const { username, password, email } = req.body;

  try {
    const userExists = await pool.query(
      'SELECT * FROM users WHERE username = $1 OR email = $2',
      [username, email]
    );

    if (userExists.rows.length > 0) {
      return res.status(400).json({ message: 'Username or email already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const result = await pool.query(
      'INSERT INTO users (username, password, email) VALUES ($1, $2, $3) RETURNING *',
      [username, hashedPassword, email]
    );

    res.status(201).json({ message: 'Signup successful, Please login', success: true });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
};

exports.signin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await pool.query('SELECT * FROM users WHERE email = $1', [email]);

    if (user.rows.length === 0) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    const validPassword = await bcrypt.compare(password, user.rows[0].password);

    if (!validPassword) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    const token = jwt.sign({ userId: user.rows[0].userid }, secretKey, { expiresIn: '1h' });

    res.json({ 
            success: true, 
            message: 'Sign in successful', 
            token, 
            user: {
                userid: user.rows[0].userid,
                username: user.rows[0].username,
                email: user.rows[0].email,
            }
        });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
};