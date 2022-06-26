# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

# Explicación prueba técnica:

He comenzado la prueba con un create React app. Desde la App, podemos ver dos rutas, la parte de la lista de los artículos, llamada ArticleSummary, que sería el enrutado donde la aplicación se levanta, y, por otro lado, encontramos el ArticleDetail, donde podemos observar el detalle del artículo enrutado por su ID.

El estado global de la aplicación se gestiona con el contexto de React para poder acceder a los artículos desde cualquier punto de la aplicación, en este caso, también podrías eliminar, añadir artículos, filtrarlos, guardar el artículo seleccionado y setear el tipo filtrado.

He decidido utilizar la context api en lugar de Redux, ya que pensé que Redux podría ser excesivamente complejo para gestionar un estado tan sencillo, de hecho, consideré no meter el contexto pensando que la aplicación es tan pequeña que le aportaría demasiada complejidad, pero me decanté por utilizarlo para evitar prop drilling en algunos componentes.

En este caso, la aplicación tiene todos los componentes, incluidas las vistas principales, en la carpeta components, ya que consideré que por el momento no era necesario cambiar a una estructura de ficheros algo más compleja, puesto que son pocas carpetas, pero si el proyecto fuese a crecer consideraría anidar estos ficheros de una manera más eficiente, una forma podría ser carpetas por vistas y dentro de esas carpetas añadir los componentes que se usan en esa vista, los componentes genéricos podrían ir fuera.

### Componentes

He querido tener componentes lo más dummies posibles, para facilitar su legibilidad y entendimiento, siempre que he visto la oportunidad he extraído parte de la lógica a custom hooks, en el proyecto podréis encontrar varios de ellos, testeados de manera independiente.

Por otro lado, he querido reutilizar los componentes todo lo que pudiera, ya que no quería añadir demasiados componentes para un proyecto de esta envergadura, con lo que he buscado soluciones, como el componente modal, que es muy flexible y recibe un children, de esta manera me ahorro lógica repetida de un componente modal, o el ejemplo del GenericButton, siendo un botón que se utiliza en toda la aplicación.

### Tests

Los test son una parte importante de este proyecto. Por un lado, cada componente tiene su fichero de test, podréis encontrar los test en cada carpeta de componente, de esta manera, desde componentes como la App testeo flujos, siendo tests de integración, de manera que si bajas hacia abajo los test son cada vez más precisos y unitarios, así estoy testeando la aplicación al completo.

He decidido utilizar la testing library, ya que me parece una forma muy eficiente de testear aplicaciones de front, siendo que las testeas desde un punto de vista muy cercano al usuario.

Consideré añadir cypress para testear flujos como eliminar artículo o añadirlo, pero al final me decanté por solucionarlo con la testing library, puesto que cypress no me iba a aportar mucho más de lo que me estaba aportando la testing library en este caso.

## Estilos

Los estilos los he realizado con styled components, podría haber utilizado otras soluciones, pero personalmente esta es la que más me gusta a día de hoy, es muy práctico poder tener un archivo TypeScript con objetos definiendo colores, breakpoints, etc.
Por otro lado, la aplicación la he hecho responsive, podréis encontrar un archivo breakpoints en la carpeta /src donde guardo los diferentes valores de los breakpoints a utilizar en la aplicación.

## Conclusión

En mi caso me ha parecido una prueba sencilla donde he podido solucionar las tareas que me han ido surgiendo con relativa soltura. He visto que habéis añadido alguna cosa más en el wireframe que eran opcionales y que yo he decidido no añadir, como por ejemplo, pasar a la siguiente página desde la vista de detalle. Lo he hecho conscientemente, ya que considero que con lo que he estado realizando ya podéis haceros una idea aproximada de mi nivel y no veía necesario añadir más funcionalidades, pudiendo utilizar ese tiempo para mejorar el código, revisar que no me dejo algo sin testear, fijarme bien que el responsive cuadra en todos los dispositivos, ir archivo por archivo revisando que no me deje una importación sin utilizar o algo que pudiera mejorar como namings. Espero que os encaje la prueba, muchas gracias por la oportunidad.
