import { useEffect, useState } from "react";

const useDisplayProducts = () => {
    const [displayProducts, setDisplayProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/fruit')
            .then(res => res.json())
            .then(data => setDisplayProducts(data))
    }, []);

    return [displayProducts, setDisplayProducts];
}

export default useDisplayProducts;