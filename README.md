# Berni Store
## _ecommerce Reactjs_


El proyecto consiste en un e-commerce construido utilizando ReactJS como framework de JavaScript para el desarrollo de la interfaz de usuario. Bootstrap, por su parte, se ha utilizado para la creación de un diseño responsivo y atractivo para los usuarios.

Para la navegación entre las diferentes secciones del sitio, se ha utilizado React RouterDOM, permitiendo una experiencia de usuario fluida y sin interrupciones. Además, se ha integrado SweetAlert para crear alertas y notificaciones atractivas y de fácil comprensión para el usuario.

Además, en este proyecto se ha utilizado Firebase como base de datos en tiempo real para almacenar y gestionar los productos y órdenes de compra


## Rubrica de evaluacion
Descripcion de componentes

#### NavBar
 componente incluido con posibilidad de navegar entra categorias e ir hacia el carrito 
 
#### CartWidget
componente incluido en el navbar en el cual se visualiza la cantidad de productos que integran el carrito en tiempo real

#### ItemListContainer
componente en el cua se renderizan los productos en tiempo real obtenidos desde firebase dependiendo la categorai seleccionada, a su vez se incorpora un banner indicando la categoria en la que se encuntra( todos, guitarras, bajo y amplificadores).
Tambien se incorpora un caroussel con imagenes utilizable tambien para poder navegar entre categorias.

#### ItemList
Contenido dentro de ItemListContainer este componente renderiza los productos atravez de un metodo .map();

#### ItemDetailContainer
Componente que tomae el producto seleccionado de firebase con react router dom renderizando el componente ItemDetail

#### ItemDetail
    - ItemQuantitySelector = (ItemCount.jsx)
    - Description
    - AddItemButton = (AddToCart.jsx)
    
Componente que renderiza el producto junto con sus propiedades ( titulo, tipo , categoria, descripcion, precio, img, marca y caracteristica).
Se incopora el componente ItemCount que modifica la cantidad de productos atravez de props con las cuales al hacer click en el boton agregara al carrito se dispara la funcion AddToCart (la cual es provista por el CartContext) generando el carrito con la cantidad seleccionada y disparando un alert(SweetAlert).


#### Checkout = (carrito)
    - Brief (detalle de compra) = (ModalCheckout.jsx)

En este componente se renderizan los productos del carrito atravez de el componente ItemCart( en el cual se le pasan las funciones provistas por CartProvider para modificar en carrito) con sus respectivas propiedades en tiempo real y se visualiza la totalidad de la compra junto con un boton de checkout que despliega el ModalCheckout para finalizar la compra y generar la orden de compra en firebase piediendo datos atravez de inputs (enviados a firebase), en caso de no haber productos se renderiza un mensaje y la opcion de volver a comprar
Una vez finalizada la compra se dispara un mensaje con el id de la orden creada en firebase.



#### CartContext/CartProvider

Se utiliza UseContext para el manejo del carrito en el cual se realizan las operaciones atravez de funciones
Tambien se guarda y obtiene el carrito atravez de LocalStorage


enlace de video

[![Watch the video](https://res.cloudinary.com/dmzrvnlgb/image/upload/v1676145078/coderproyecto_zh7owc.png)](https://youtu.be/nIVWGGgAmn0)
