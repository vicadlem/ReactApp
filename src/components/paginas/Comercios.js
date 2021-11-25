import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';

const Comercios = () => {
    return ( 
        <>
            <h1 className="text-3xl font-light mb-4">Comercios</h1>
            <Link to="/nuevo-comercio" className="  bg-blue-800 hover:bg-blue-700, inline-block mb-5 p-2 text-white uppercase font-bold">
                Agregar comercio
            </Link>
            <br/>
            <Link to="/nueva-categoria" className="  bg-blue-800 hover:bg-blue-700, inline-block mb-5 p-2 text-white uppercase font-bold">
                Agregar categoría
            </Link>
            <br/>
            <Link to="/nuevo-producto" className="  bg-blue-800 hover:bg-blue-700, inline-block mb-5 p-2 text-white uppercase font-bold">
                Agregar producto
            </Link>

          
        </>
     );
}
 
export default Comercios;