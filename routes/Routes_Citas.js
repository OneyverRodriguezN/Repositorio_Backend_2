// Importamos Express
import express from 'express';
// Importamos el controlador
import {getAllCitas,getCita,addCitas, modificarCita,eliminarCita} from '../controllers/CitasController.js'

const router = express.Router();

// Rutas de metodos CRUD
router.get('/', getAllCitas);
router.get('/:id', getCita);
router.post('/', addCitas);
router.put('/:id', modificarCita);
router.delete('/:id', eliminarCita);


export default router;