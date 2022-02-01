import React from 'react';
import { Routes, Route } from 'react-router';

import Inicio from './components/paginas/Inicio';
import NuevaCategoría from './components/paginas/NuevaCategoria';
import NuevoComercio from './components/paginas/NuevoComercio';
import NuevoProducto from './components/paginas/NuevoProducto';
import Sidebar from './components/ui/Sidebar';



function App() {
  return (
    <div className="md:flex min-h-screen">
      <Sidebar />
      <div className="md:w-2/5 xl:w-4/5 p-6">
        <Routes>
          <Route path="/" element={<Inicio />  } />  
          <Route path="/nueva-categoria" element={<NuevaCategoría />  } />
          <Route path="/nuevo-comercio" element={<NuevoComercio />  } />
          <Route path="/nuevo-producto" element={<NuevoProducto />  } />      
        </Routes>
      </div> 
    </div>
  )
}

export default App;
