const express = require("express");
const bodyParser = require("body-parser");
const userRoutes = require("./routes/userRoutes");

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

app.use("/", userRoutes);
app.use("/", (_req, res) => res.status(404).render("404", {pageTitle: "404", styles: []}));

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
