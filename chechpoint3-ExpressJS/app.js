const path = require("path");
const express = require("express");
const app = express();

const workingHoursMiddleware = (req, res, next) => {
  const now = new Date();
  const dayOfWeek = now.getDay();
  const hourOfDay = now.getHours();

  if ((dayOfWeek >=1 && dayOfWeek <=5) && (hourOfDay >= 9 && hourOfDay < 17)) {
  } else {
    res
      .status(503)
      .send(
        "Désolé, le site web est disponible uniquement pendant les heures de travail (du lundi au vendredi, de 9h à 17h)."
      );
  }
};

app.use(express.static(path.join(__dirname, "Public")));
app.use(express.static(path.join(__dirname, "views")));

app.use(workingHoursMiddleware);
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.get("/services", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "services.html"));
});

app.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "contact.html"));
});

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
