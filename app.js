//Importamos Express
import express from 'express'
//Importamos Cors
import cors from 'cors'
//importamos la conexion a la BD
import conectarBD from './configDB/db.js'
//Importamos las rutas
import citasRoutes from './routes/Routes_Citas.js'


const app = express();
app.use(express.json());
app.use(cors());
app.use('/citas',citasRoutes);

//Verificamos la conexion a la base de Datos
try{
    await conectarBD.authenticate();
    console.log('Conexion DB Exitosa');
    }catch(error){
    console.log('Error de Conexion DB',error);
}


app.get('/',(req,res)=>{res.send('Hola')})

//Constante para configuracion local o nube de puerto
const port = process.env.PORT || 5000; 

app.listen(port,()=>{console.log('Servidor Conectado');})
