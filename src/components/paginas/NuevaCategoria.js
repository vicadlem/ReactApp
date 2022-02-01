import React from 'react';
import { useFormik} from 'formik';
import * as Yup from 'yup';


const NuevaCategoría = () => {
    const formik = useFormik ({
        initialValues: {
            nombre: '',
        },
        validationSchema: Yup.object({
            nombre: Yup.string()
                .min(3, 'Las categorías deben tener al menos 3 caracteres')
                .required('El Nombre de la categoría es obligatorio'),
        }),
        onSubmit: categoria => {
            console.log(categoria);
        }
    })

    return ( 
        <>
            <h1 className="text-3xl font-light mb-4">Nueva categoría</h1>

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
                                placeholder="Nombre de la categoría"
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
                        <input
                            type="submit"
                            className="bg-gray-800 hover:bg-gray-900 w-full mt-5 p-2 text-white uppercase font-bold"
                            value="Agregar categoría"
                        />
                    </form>
                </div>
            </div>          
        </>
     );
}
 
export default NuevaCategoría;