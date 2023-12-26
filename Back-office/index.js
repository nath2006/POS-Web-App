const express = require("express");

const PORT = 3020;
const app = express();

app.get("/", (req, res) => {
	res.send("API Ready To GO!");
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
})