import { Button, Box, TextField } from "@mui/material"
import axios from "axios"
import { useState } from "react"

function Formulario(props) {
    const [Cargando, setCargando] = useState (false)
    const [datosFormulario, setDatosFormulario] = useState( {nombre:'', password:''})

    const hacerPeticion = async() => {
        try {
            const response = await axios.get('http://localhost:4567/tipo-usuario')
            console.log(response)
            return response.data

        } catch (error) {
            throw error
        }
    }

    const cambiosFormulario = (evento) =>{
        const {name, value} = evento.target
        setDatosFormulario( {...datosFormulario, [name] : value})
    }

    const procesarFormulario = async(evento)=>{
        evento.preventDefault()
        console.log("Datos recuperados del form", datosFormulario)
        setCargando(true)
        try {
            const response = await hacerPeticion()
            console.log(response)
            setCargando(false)
            if(datosFormulario.nombre === response.tipousuario){
                console.log("Es correcto")
            }else{
                console.log("No es correcto")
            }
        } catch (error) {
            console.log("error", error)
            setCargando(false)
        }
    }
    return (
        <>
            <h1>Inicio de sesión</h1>
            <form onSubmit={ procesarFormulario }>
                <Box m={5}>
                    <TextField label="Nombre:" variant="outlined" fullWidth onChange={cambiosFormulario} name="nombre" value={datosFormulario.nombre}></TextField>
                </Box>
                <Box m={5}>
                    <TextField label="Contraseña: " variant="outlined" type="password" fullWidth onChange={cambiosFormulario} name="password" value={datosFormulario.password}></TextField>
                </Box>
                <Box m={5}>
                    <Button variant="contained" type="submit" color="primary" fullWidth disabled={Cargando}>Iniciar sesión</Button>
                </Box>
            </form>
        </>
    )
}

export default Formulario;