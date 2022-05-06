import { useEffect, useState } from "react";

const useDisplayProducts = () => {
    const [displayProducts, setDisplayProducts] = useState([]);

    useEffect(() => {
        fetch('https://frozen-island-93381.herokuapp.com/fruit')
            .then(res => res.json())
            .then(data => setDisplayProducts(data))
    }, []);

    return [displayProducts, setDisplayProducts];
}

export default useDisplayProducts;