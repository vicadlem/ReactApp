import React from 'react';
import ReactDOM from 'react-dom';
import './css/main.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client";

const client = new ApolloClient({
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache()
});

const OBTENER_CATEGORIAS = gql`
  query GetCategories {
    obtenerEmprendimientos(input: {
      categoria: "617ad13b25b1cf43a97fb41c"
    }) {
      nombre
      id
      CedJuridica
      categoria
      telCelular
      distrito
      direccion
      email
      descripcion
      archivosMultimedia
    }
  }
`;

function ObtenerProductos() {
  const { loading, error, data } = useQuery(OBTENER_CATEGORIAS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.obtenerEmprendimientos.map(({ nombre, id, CedJuridica, categoria, telCelular, distrito, direccion, email, descripcion, archivosMultimedia }) => (
    <div key={categoria}>
      <p>
        {categoria}: {id, nombre, CedJuridica, telCelular, distrito, direccion, email, descripcion, archivosMultimedia}
      </p>
    </div>
  ));
}

function App() {
  return <div className="App" />
}

ReactDOM.render(
  <Router>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Router>, document.getElementById('root')
 
);

reportWebVitals();
