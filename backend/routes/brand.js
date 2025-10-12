const express = require('express');
const router = express.Router();

router.get('/batches', (req, res) => {
  res.json([{ id: '001', name: 'Herb-X', status: 'claimed' }]);
});

module.exports = router;
