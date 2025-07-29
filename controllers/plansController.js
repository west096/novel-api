const { loadPlans, savePlans } = require('../utils/fileHandler');

let plans = loadPlans(); //서버 시작할 때 JSON파일 불러옴

const pool = require('../utils/db');

exports.getPlans = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM plans ORDER BY id ASC');
    res.json(result.rows);
  } catch (err) {
    console.error('Error fetching plans:', err);
    res.status(500).json({ error: 'DB error' });
  }
};

exports.createPlan = async (req, res) => {
  const { title, genre, author } = req.body;

  if (!title || !author) {
    return res.status(400).json({ error: 'title과 author는 필수입니다.' });
  }

  try {
    const result = await pool.query(
      `INSERT INTO plans (title, genre, author)
      VALUES ($1, $2, $3)
      RETURNING *`,
      [title, genre, author]
    );

    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.log(req.body);//
    console.error('Error inserting plan:', err);
    res.status(500).json({ error: 'DB error' });
  }
};

exports.updatePlan = async (req, res) => {
  const { id } = req.params;
  const { title, genre, author } = req.body;

  try {
    const result = await pool.query(
      `UPDATE plans
      SET title = $1, genre = $2, author = $3
      WHERE id=$4
      RETURNING *`,
      [title, genre, author, id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Plan not found' });
    }

    res.json(result.rows[0]);
  } catch (error) {
    console.error(`Error updating plan:`, error);
    res.status(500).json({ error: 'DB error' });
  }
};

exports.deletePlan = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query('DELETE FROM plans WHERE id = $1 RETURNING *', [id]);

    if (result.rowCount === 0) {
      return res.status(404).json({ error: 'Plan not found' });
    }

    res.status(200).json({ message: 'Plan deleted successfully' });
  } catch (err) {
    console.error('DB Error:', err);
    res.status(500).json({ error: 'DB error' });
  }
};