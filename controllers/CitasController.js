// Importar el modelo
import Citas from '../models/Citas.js'

// Metodos o Funciones CRUD

//Funcion o metodo Mostrar todas las Citas
export const getAllCitas = async(req,res) =>{
    try {
        
        const citas = await Citas.findAll();
        res.json(citas);

    } catch (error) {
        res.json({msg: error.message})
    }
}

//Funcion o metodo Mostrar una Cita
export const getCita = async(req,res) =>{
    try {
        const cita = await Citas.findAll({
            where: {id:req.params.id}
        });
        res.json(cita[0]);
    } catch (error) {
        res.json({msg: error.message})
    }
}

//Funcion o metodo agregar una Cita
export const addCitas = async(req,res) =>{
    try {
        await Citas.create(req.body)
        res.json({msg:'Cita Agregada'})

    } catch (error) {
        res.json({msg: error.message})
    }
}

//Funcion Modificar Cita
export const modificarCita = async(req,res) =>{
    try {
        await Citas.update(req.body, {
            where:{id: req.params.id}
        })
        res.json({msg:'Cita Modificada'})

    } catch (error) {
        res.json({msg: error.message})
    }
}

//Funcion Eliminar Cita
export const eliminarCita = async(req,res) =>{
    try {
        await Citas.destroy({
            where:{id: req.params.id}
        })
        res.json({msg:'Cita Eliminada'})
    } catch (error) {
        res.json({msg: error.message})
    }
}
