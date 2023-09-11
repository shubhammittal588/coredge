import React, { useState, useEffect, createContext } from 'react'

const ProductContext = createContext()

const ProductProvider = ({children}) => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        try {
          const response = await fetch('https://fakestoreapi.com/products');
          const json = await response.json();
          setProducts(json);
        } catch (error) {
          console.error(error);
        }
    };
     
    const addCart = dato => {
        if(cart.some( product => product.id === dato.id)) {
            const updateCart = cart.map( car => car.id === dato.id ? dato : car)
            setCart(updateCart)
        }else{
            setCart([...cart,dato])
        }        
    }

    const calculaTotal = () => {
        let Total
        let totalFinal = 0
       try {
            cart.forEach(car => {
                const producto = products.find( elemento => elemento.id === car.id)
                Total = producto.price * car.qty
                totalFinal = totalFinal + Total
                Total = 0
            });
       } catch (error) {
        
       }
        return totalFinal
     }

     const removerCart = datos => {
        const carroActualizado = cart.filter( car => car.id !== datos.id)
        setCart(carroActualizado)
     }

     const CleanCart = () => {
        setCart([])
     }
    return (
        <ProductContext.Provider
        value={{
            products,
            cart,
            addCart,
            calculaTotal,
            removerCart,
            CleanCart
        }}
        >
        {children}
        </ProductContext.Provider>
    )
}

export{
    ProductProvider
}

export default ProductContext
