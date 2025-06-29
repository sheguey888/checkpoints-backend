import { readFile } from "fs/promises";

readFile("./welcome.txt", { encoding: "utf8" })
  .then((data) => {
    console.log('Contenu du fichier "welcome.txt" :', data);
  })
  .catch((err) => {
    console.error("Erreur :", err);
  });
