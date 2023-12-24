import { Router } from "express";
import convertTonumber from "/Users/nicozaffaroni95/Desktop/Proyectos/Ecommerce-Backend/middlewares/convert-to-number-middleware.js";
import uploader from "/Users/nicozaffaroni95/Desktop/Proyectos/Ecommerce-Backend/utils/multer.util.js";

const router = Router();

const pets = [];

//Mostrar todos los pets en servidor
router.get("/", (req, res) => {
  res.json({ payload: pets });
});

//Mostar pet especifico
router.get("/:pid", convertTonumber, (req, res) => {
  const { pid } = req.params;

  const pet = pets.find((pet) => pet.id === pid);

  if (!pet) return res.status(404).json({ error: "Pet not found" });

  res.json({ payload: pet });
});

router.get("/", (req, res) => {
  const { limit } = req.query;
  if (limit) {
    return res.json({ pets: manager.pets });
  }
});

// Crear Nuevo pet
router.post("/", uploader.single("img"), (req, res) => {
  const newPet = {
    id,
    name,
    breed,
    age,
  };

  pets.push(newPet);

  res.status(201).json({ payload: "pet created" });
});

//Modificar pet , (Enviando todos los campos obligatoriamente)

router.put("/:pid", (req, res) => {
  const { pid } = req.params;

  const { name, breed, age } = req.body;

  if (!id || !name || !breed || !age)
    return res.status(400).json({ error: "Bad request" });

  const pet = pets.find((pet) => pet.id === pid);

  if (!pet) return res.status(404).json({ error: "Pet not found" });
  pet.id = id;
  pet.name = name;
  pet.breed = breed;
  pet.age = age;

  res.json({ payload: "Pet : update  " });
});

//Modifica pet sin tener que enviar todos los params de nuevo

router.patch("/:pid", (req, res) => {
  const { pid } = req.params;

  const { name, breed, age } = req.body;

  const pet = pets.find((pet) => pet.id === pid);

  if (!pet) return res.status(404).json({ error: "Pet not found" });

  pet.name = name;
  pet.breed = breed;
  pet.age = age;

  res.json({ payload: "Pet : update  " });
});

// ELiminar Pet
router.delete("/:pId", (req, res) => {
  const { pId } = req.params;

  const petIndex = pets.findIndex((pet) => pet.id === pId);

  if (!petIndex === -1) return res.status(404).json({ error: "Pet not found" });

  pets.splice(petIndex, 1);

  res.json({ payload: "pet deleted" });
});

export default router;
