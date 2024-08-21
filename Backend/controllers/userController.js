const pool = require('../config/db');

exports.getUser = async (req, res) => {
  const userId = req.user.userId;

  try {
    const user = await pool.query('SELECT * FROM users WHERE userId = $1', [userId]);

    if (user.rows.length === 0) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json(user.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
};
