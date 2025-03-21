const express = require('express');
const app = express();

app.use(express.json());
app.post('/calculate-average', (req, res) => {
    const { numbers } = req.body;
    if (!Array.isArray(numbers) || numbers.length === 0) {
        return res.status(400).json({ error: "Invalid input. Provide an array of numbers." });
    }
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    const average = sum / numbers.length;
    res.json({
        numbers,
        average,
        responseTime: `${new Date().toISOString()}`
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
