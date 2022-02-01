import React from 'react';
import { useFormik} from 'formik';
import * as Yup from 'yup';

const NuevoProducto = () => {
    const formik = useFormik ({
        initialValues: {
            nombre: '',
            perteneceA: '',
            foto: '',
        },
        validationSchema: Yup.object({
            nombre: Yup.string()
                .min(3, 'Los productos deben tener al menos 3 caracteres')
                .required('El nombre del producto es obligatorio'),
            perteneceA: Yup.string()
                .required('El Nombre de la categoría es obligatorio'),
            foto: Yup.string()
                .required('El Nombre de la categoría es obligatorio'),
        }),
        onSubmit: categoria => {
            console.log(categoria);
        }
    })
    return ( 
        <>
            <h1 className="text-3xl font-light mb-4">Nuevo producto</h1>

            <div className="flex justify-center mt-10">
                <div className="w-full max-w-3xl">
                    <form
                        onSubmit={formik.handleSubmit}
                    >

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">Nombre</label>
                            <input 
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="nombre"
                                type="text"
                                placeholder="Nombre del producto"
                                value={formik.values.nombre}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            { formik.touched.nombre && formik.errors.nombre ? (
                                <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5" role="alert">
                                    <p className="font-bold">Hubo un error:</p>
                                    <p>{formik.errors.nombre} </p>
                                </div>
                            ) : null }
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">Pertenece al emprendimiento:</label>
                            <input 
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="perteneceA"
                                type="text"
                                value={formik.values.perteneceA}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            { formik.touched.perteneceA && formik.errors.perteneceA ? (
                                <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5" role="alert">
                                    <p className="font-bold">Hubo un error:</p>
                                    <p>{formik.errors.perteneceA} </p>
                                </div>
                            ) : null }
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">Foto</label>
                            <input 
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="foto"
                                type="file"
                                value={formik.values.foto}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            { formik.touched.foto && formik.errors.foto ? (
                                <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5" role="alert">
                                    <p className="font-bold">Hubo un error:</p>
                                    <p>{formik.errors.foto} </p>
                                </div>
                            ) : null }
                        </div>
                        <input
                            type="submit"
                            className="bg-gray-800 hover:bg-gray-900 w-full mt-5 p-2 text-white uppercase font-bold"
                            value="Agregar producto"
                        />
                    </form>
                </div>
            </div>   
          
        </>
     );
}
 
export default NuevoProducto;