import { useContext } from 'react'
import ProductContext from './productContext'

const useProduct = () => {
    return useContext(ProductContext)
}

export default useProduct