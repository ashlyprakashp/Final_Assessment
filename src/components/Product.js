import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductList from "./ProductList";
import SideBar from "./SideBar";

const baseURL = " https://jsonplaceholder.typicode.com/photos";

function Product() {


    const [productList, setProductList] = useState([]);

    useEffect(() => {
        axios.get(baseURL).then((response) => {
            setProductList(response.data);
        });
    }, [])

    return (
        <>

            <div className="contentWrap">
                <SideBar/>
                <div className="listItems">
                    <ProductList list={productList} />
                </div>
            </div>
        </>
    );
}

export default Product;