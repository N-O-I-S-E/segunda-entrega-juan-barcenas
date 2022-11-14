const usuario = prompt('cual es su nombre?')

function menuInicio() {
    
    let bienvenida = parseInt(prompt(`Bienvenido ${usuario}, Que le gustaria comprar?
    \nIngresa 1 para NFT
    \nIngresa 2 para Compra de bitcoin`));
    
   
    
        if (bienvenida !== null) {
          while (bienvenida !== 1 && bienvenida !==2 && bienvenida !==3) {
            bienvenida = parseInt(prompt(`Bienvenido  ${usuario}, Que le gustaria comprar?
                        \nIngresa 1 para nft
                        \nIngresa 2 para Compra de criptomonedas`));
          }
        
          menuOpcion(bienvenida);
        }
    }
    
    function menuOpcion (opcion){
        
        switch (opcion){
            case 1:
                nft();            
                break;
            case 2:
                criptomonedas();
                break;
            case 3:
                salida();
                break;
    
        }
    
    }
    
    function criptomonedas() {
        let bitcointext = `Cotización de hoy del Bitcoin (XBT) en Bolsa. Información en tiempo real de los valores y precios de la sesión analizada por los mejores expertos.
                    bitcoin = 16324.9                        
                            
                            Quiere Comprar??? Si/NO`;
    
        let bitcoinOpcion = prompt(bitcointext);
        bitcoinOpcion = bitcoinOpcion.toLowerCase();
        
    
        switch (bitcoinOpcion){
            case 'si':
                let cantidad = parseInt(prompt(`cuantos bitcoins desa comprar?`));            
                alert(`Te van a costar los ${cantidad} bitcoins: ${cantidad * 16324.9 } dolares`);
                break;
            case 'no':
                menuInicio();
        }
    
    
    }
    
    
    // // NFT
    
    
    class ProductoDisponibles {
        constructor (id, nombre, precio, stock) {
            this.id = id;
            this.nombre = nombre;
            this.precio = precio;
            this.stock = stock;
        }
        controlStock(){
            this.stock = this.stock - 1;
        }
    };
    
    const producto0 = new ProductoDisponibles(0, 'Crossroad ', 2000, 100);
    const producto1 = new ProductoDisponibles(1, 'CryptoPunk', 3000, 100);
    const producto2 = new ProductoDisponibles(2, 'Human One', 1100, 100);
    const producto3 = new ProductoDisponibles(3, 'Human two', 2200, 100);
    
    const productos = [producto0, producto1, producto2, producto3];
    
    
    
    
    function nft(){
        
        let listaProductos = `Bienvenido ${usuario}
         Ingrese el codigo del nft quedesea comprar
          Si desea salir Ingrese 99\n\n`;
    
        for (item of productos){
            listaProductos += `Codigo: ${item.id} - Producto: ${item.nombre} - Precio: ${item.precio} Pesos \n`
        }
        
        let seleccionProducto = parseInt(prompt(listaProductos));
    
        carrito = [];  
           
        while(seleccionProducto != 99){
    
            switch(seleccionProducto){
                case 0:
                    
                    carrito.push(productos[0])
                    alert(`Agregaste al Carrito: ${productos[0].nombre}`)
                    productos[0].controlStock()
                    break;
                case 1:
                    carrito.push(productos[1])
                    alert(`Agregaste al Carrito: ${productos[1].nombre}`)
                    productos[1].controlStock()
                    break;
                case 2:
                    carrito.push(productos[2])
                    alert(`Agregaste al Carrito: ${productos[2].nombre}`)
                    productos[2].controlStock()
                    break;
                case 3:
                    carrito.push(productos[3])
                    alert(`Agregaste al Carrito: ${productos[3].nombre}`)
                    productos[3].controlStock()
                    break;
                default:
                    alert(`No existe ese producto`)
                    break;
            }
            seleccionProducto = parseInt(prompt(listaProductos));
        }
        alert("Cerramos la compra")
    
        
        mostrarCarrito()
    
    
    
       
    
    
    };
    
    function mostrarCarrito(){
        let carritoCompras = '';
        let precioCarrito = 0;
    
        for (itemsElegidos of carrito){
            carritoCompras += `\n - ${itemsElegidos.nombre}`
            precioCarrito += itemsElegidos.precio
        }
        if (precioCarrito === 0){
            alert(`Espero que la proxima visita compres Algo!!`);
        }   else {
            alert(`Compraste: \n ${carritoCompras} \n El total es de ${precioCarrito} Pesos\nMuchas Gracias ${usuario} Vuelve Pronto`);
        };
        
    
    }
   
    const mercaditoCompra =  menuInicio();

    const inventarioDeCriptomonedas = ['bitcoin','etereum','Tether']
    inventarioDeCriptomonedas.push('USD Coin');
    inventarioDeCriptomonedas.sort();
    console.log(inventarioDeCriptomonedas)
    
    
    
   