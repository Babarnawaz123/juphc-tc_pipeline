const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());

function calculateTax(income) {
  if (income <= 10000) return income * 0.1;
  if (income <= 50000) return 1000 + (income - 10000) * 0.2;
  return 9000 + (income - 50000) * 0.3;
}

app.get("/", (req, res) => {
  res.send("Tax Calculator API is running.");
});

app.post("/calculate", (req, res) => {
  const { income } = req.body;
  if (typeof income !== "number" || income < 0) {
    return res.status(400).json({ error: "Invalid income value" });
  }
  const tax = calculateTax(income);
  res.json({ income, tax });
});

if (require.main === module) {
  app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
}

module.exports = { app, calculateTax };
