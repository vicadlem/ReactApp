import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router';

import Comercios from './components/paginas/Comercios';
import Productos from './components/paginas/Productos';
import NuevaCategoría from './components/paginas/NuevaCategoria';
import NuevoComercio from './components/paginas/NuevoComercio';
import NuevoProducto from './components/paginas/NuevoProducto';
import Sidebar from './components/ui/Sidebar';



function App() {
  useEffect(() => {
    fetch('http://localhost:4000', {
      method: 'POST',
      Headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query: `
        {
          obtenerCategorias {
            nombre
          }
        }
      `})
    })
    .then(res => res.json())
    .then(res => {
      console.log(res.categoria)
    })
  })
  return (
    <div className="md:flex min-h-screen">
      <Sidebar />
      <div className="md:w-2/5 xl:w-4/5 p-6">
        <Routes>
          <Route path="/" element={<Comercios />  } />  
          <Route path="/producto" element={<Productos />  } />
          <Route path="/nueva-categoria" element={<NuevaCategoría />  } />
          <Route path="/nuevo-comercio" element={<NuevoComercio />  } />
          <Route path="/nuevo-producto" element={<NuevoProducto />  } />      
        </Routes>
      </div> 
    </div>
  )
}

export default App;
