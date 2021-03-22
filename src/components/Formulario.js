import React, {useState} from 'react';
import Error from './Error'
import PropType from 'prop-types'

const Formulario = ({busqueda,guardarBusqueda,guardarConsulta}) => {


    const [error,guardarError] = useState(false);

    //Extraer ciudad y pais
    const {ciudad,pais} = busqueda;

    //Funcion que coloca los elementos en el state
    const handleChange = e => {
        //Actualiza el state
        guardarBusqueda({
            ...busqueda, 
            [e.target.name]: e.target.value
        })
    }
//cuando el usuario da Submit al Form

const handleSubmit = e => {
    e.preventDefault();
    //Validar
    if(ciudad.trim() === "" || pais.trim() === ""){
        guardarError(true);
        return;
    }
    guardarError(false);
    //pasarlo al componente principal
    guardarConsulta(true);
}

    return ( 
        <form
        onSubmit={handleSubmit}
        >
            {error ? <Error mensaje="Ambos campos son obligatorios"/> : null}
            <div className="input-field col s12">
                <input 
                type="text"
                name="ciudad"
                id="ciudad"
                value={ciudad}
                onChange={handleChange}
                />
                <label htmlFor="ciudad">Ciudad: </label>
            </div>
            <div className="input-field col s12">
                <select
                name="pais"
                id="pais"
                value={pais}
                onChange={handleChange}
                >
                    <option value="">--Seleccione un Pais--</option>
                    <option value="US">Estados Unidos</option>
                    <option value="US">Estados Unidos</option>
                    <option value="MX">México</option>
                    <option value="AR">Argentina</option>
                    <option value="CO">Colombia</option>
                    <option value="CR">Costa Rica</option>
                    <option value="ES">España</option>
                    <option value="PE">Perú</option>
                </select>
                <label htmlFor="pais">Pais: </label>
            </div>
            <div className="input-field col s12">
                <input  
                    type="submit"
                    value="Buscar Clima"
                    className="waves-effect waves-light btn-large btn-block yellow accent-4"
                />
            </div>
        </form>
     );
}

Formulario.prototype = {
    busqueda:PropType.object.isRequired,
    guardarBusqueda:PropType.func.isRequired,
    guardarConsulta: PropType.func.isRequired
}
export default Formulario;