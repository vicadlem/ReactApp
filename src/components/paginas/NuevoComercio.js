import React, { useEffect, useState, useContext } from 'react';
import { useFormik} from 'formik';
import * as Yup from 'yup';

const NuevoComercio = () => {
    const formik = useFormik ({
        initialValues: {
            nombre: '',
            CedJuridica: '',
            categoria: '',
            telCelu: '',
            distrito: '',
            direccion: '',
            email: '',
            descripción: '',
            img: '',
        },
        validationSchema: Yup.object({
            nombre: Yup.string()
                .min(3, 'Los nombre del comercio debe tener al menos 3 caracteres')
                .required('El nombre del comercio es obligatorio'),
            CedJuridica: Yup.string()
                .min(10, 'La Cédula Jurídica debe contener 10 caracteres')
                .max(10, 'La Cédula Jurídica debe contener sólo 10 caracteres')
                .required('La Cédula Jurídica es obligatoria'),
            categoria: Yup.string()
                .required('La categoría es obligatoria'),
            telCelu: Yup.string()
                .min(8, 'El número telefónico debe contener 8 caracteres')
                .max(8, 'El número telefónico debe contener sólo 8 caracteres')
                .required('El número telefónico es obligatorio'),
            distrito: Yup.string()
                .required('El distrito es obligatorio'),
            direccion: Yup.string()
                .required('El distrito es obligatorio'),
            email: Yup.string()
                .required('El correo es obligatorio'),
            
        }),
        onSubmit: comercio => {
            console.log(comercio);
        }
    })
    return ( 
        <>
            <h1 className="text-3xl font-light mb-4">Nuevo comercio</h1>

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
                                placeholder="Nombre del comercio"
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
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">Cédula Jurídica</label>
                            <input 
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="CedJuridica"
                                type="text"
                                placeholder="Ejemplo: 3-111-999999"
                                value={formik.values.CedJuridica}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            { formik.touched.CedJuridica && formik.errors.CedJuridica ? (
                                <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5" role="alert">
                                    <p className="font-bold">Hubo un error:</p>
                                    <p>{formik.errors.CedJuridica} </p>
                                </div>
                            ) : null }
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">Categoría</label>
                            <input 
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="categoria"
                                type="text"
                                placeholder="Nombre de la categoría"
                                value={formik.values.categoria}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            { formik.touched.categoria && formik.errors.categoria ? (
                                <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5" role="alert">
                                    <p className="font-bold">Hubo un error:</p>
                                    <p>{formik.errors.categoria} </p>
                                </div>
                            ) : null }
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">Teléfono celular</label>
                            <input 
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="telCelu"
                                type="text"
                                placeholder="Número telefónico"
                                value={formik.values.telCelu}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            { formik.touched.telCelu && formik.errors.telCelu ? (
                                <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5" role="alert">
                                    <p className="font-bold">Hubo un error:</p>
                                    <p>{formik.errors.telCelu} </p>
                                </div>
                            ) : null }
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">Distrito</label>
                            <select 
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="distrito"
                                type="text"
                                placeholder="Distrito"
                                value={formik.values.distrito}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            >
                                <option value="">-- Seleccione --</option>
                                <option value="hojancha">-- Hojancha --</option>
                                <option value="monteRomo">-- Monte Romo --</option>
                                <option value="puertoCarrillo">-- Puerto Carrillo --</option>
                                <option value="huacas">-- Huacas --</option>
                                <option value="matambu">-- Matambú --</option>
                            </select>
                            { formik.touched.distrito && formik.errors.distrito ? (
                                <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5" role="alert">
                                    <p className="font-bold">Hubo un error:</p>
                                    <p>{formik.errors.distrito} </p>
                                </div>
                            ) : null }
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">Dirección</label>
                            <input 
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="direccion"
                                type="text"
                                placeholder="Dirección del comercio"
                                value={formik.values.direccion}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            { formik.touched.direccion && formik.errors.direccion ? (
                                <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5" role="alert">
                                    <p className="font-bold">Hubo un error:</p>
                                    <p>{formik.errors.direccion} </p>
                                </div>
                            ) : null }
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">Email</label>
                            <input 
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="email"
                                type="text"
                                placeholder="Dirección del correo electrónico"
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            { formik.touched.email && formik.errors.email ? (
                                <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5" role="alert">
                                    <p className="font-bold">Hubo un error:</p>
                                    <p>{formik.errors.email} </p>
                                </div>
                            ) : null }
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">Descripción</label>
                            <textarea 
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-40"
                                id="descripción"
                                placeholder="Agregue una descripción del comercio"
                                value={formik.values.descripción}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            ></textarea>
                            { formik.touched.descripción && formik.errors.descripción ? (
                                <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5" role="alert">
                                    <p className="font-bold">Hubo un error:</p>
                                    <p>{formik.errors.descripción} </p>
                                </div>
                            ) : null }
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">Imagen</label>
                            <input 
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="img"
                                type="file"
                                value={formik.values.img}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            { formik.touched.img && formik.errors.img ? (
                                <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5" role="alert">
                                    <p className="font-bold">Hubo un error:</p>
                                    <p>{formik.errors.img} </p>
                                </div>
                            ) : null }
                        </div>
                        <input
                            type="submit"
                            className="bg-gray-800 hover:bg-gray-900 w-full mt-5 p-2 text-white uppercase font-bold"
                            value="Agregar comercio"
                        />
                    </form>
                </div>
            </div>          

          
        </>
     );
}
 
export default NuevoComercio;