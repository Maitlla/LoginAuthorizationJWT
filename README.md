# Proyecto de cero en React

Creamos nuestro repositorio en GitHub (o similar).

Clonamos en local, cuidando de que la capeta del proyecto no contenga mayusculas o espacios.

    git clone https://github.com/Maitlla/autenticacionweb.git

Ejecutamos la herramienta de node create-react-app para que complete la plantilla básica de React en nuestro repositorio clonado.

    npx create-react-app autenticacionweb.git/

Se borra el Css que hay dentro de APP.css que es para el logo de React

El componente principal es el fichero src/App.js 

## Realizamos nuestro commit inicial.

    cd autenticacionweb.git/
    git add .
    git commit -m "First commit"
    git remote add <name> <url>

git remote add autenticacionweb https://github.com/Maitlla/autenticacionweb.git

    git push <name>

git push autenticacionweb

Después para subir los commit solo git push

    git push


## Para arrancar React

La primera vez npm run build, y se creará un compilado de producción de la aplicación en el directorio build/ del proyecto.

    npm run build

Después siempre npm start para arrancar el proyecto

    npm start


## Para desinstalar un paquete equivocado en node: 

    npm uninstall comosellame

## Rectificar un git add antes de git commit -m

    git reset

## Fuera de src

    .env.template

En el .env estaría información como PORT=3000 contraseñas, etc... que no se deben subir a github

    .gitignore

Añadir en su interior, ejemplos:

    node_modules/
    .env

    **/uploads/
    loquesea.db


## Estructura dentro de src: 

Dentro de la carpeta el fichero o ficheros `.jsx` que sean, y el `.css` si se necesita. Podrían estar otras carpetas dentro con su fichero `.jsx`

Al mismo nivel que App.js dentro de src posible `defines.mjs`

#### `carpeta components` 

#### `carpeta storage`

Ejemplo: 

SharedStorage.jsx


    import { useState, createContext } from "react";

    export const Context = createContext(); 

    export function ContextProvider ( {children} ) {

        const store = useState({
            id: 0,
            password: "",
            token: "",
        });

        return (
            <Context.Provider value={store}>
                {children}
            </Context.Provider>
        )
    }


#### `carpeta services`

Como en storage, dentro estaría el Context, pero ademas otro fichero para autorización en el Login.

ContextProvider.jsx

Authorization.jsx


    import { useContext } from "react"
    import { context } from "./ContextProvider"

    function Authorization({children}) {

        const { state } = useContext(context)

        return (
            <div id="Authorization">
                { state.token ? children : <h1>Please, login for view this content.</h1>}
            </div>
        )
    }

    export default Authorization

#### `carpeta views`

--

## En el frontend

Instalamos las dependencias.

    npm install 

Lo que se instala:

    ├── @testing-library/jest-dom@5.16.4
    ├── @testing-library/react@13.3.0
    ├── @testing-library/user-event@13.5.0
    ├── react-dom@18.1.0
    ├── react-router-dom@6.3.0
    ├── react-scripts@5.0.1
    ├── react@18.1.0
    └── web-vitals@2.1.4

## En el backend

Iniciamos el proyecto de node: 

    npm init -y

    npm install express         

    npm install jsonwebtoken

Creamos dentro del backend nuestro index.mjs

Estaría la base de datos db.mjs

Ejemplo: Base de datos de nombre db en sqlite3  

    import sqlite3 from 'sqlite3';

    const db = new sqlite3.Database('./chat.db', (err) => {
        if (err) {
            console.error(err.message);
        }
        console.log('Connected to the chat database.');
    });

Tablas de la base de datos, ejemplo:

    db.run(`
        CREATE TABLE
            IF NOT EXISTS
            users(
                id INTEGER PRIMARY KEY,
                name TEXT NOT NULL,
                password TEXT NOT NULL
            )
    `);

Exportar las funciones que sean:

    export function insertUser ( userObject, callback ) {
        const { id, name, password } = userObject;
        const sql = `
            INSERT INTO users (id, name, password)
            values (${id}, "${name}", "${password}");
        `;
        db.run(sql,callback);
    }


    export function getUsers ( callback ) {
        db.all("SELECT id, name FROM users", callback);
    }

Exportar la Base de datos, poner al final del código

    export default db;



## Enrutamiento en React

Para conectar varias vistas (componentes React) en una sola aplicación grande.

    npm install --save react-router
