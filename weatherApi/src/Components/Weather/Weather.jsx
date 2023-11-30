import Pagination from "../Pagination/Pagination";
import Status from "../StatusComponent/Status";
import "./Weather.css"

import { useEffect, useState } from "react";

const Weather = () => {

  const [data, setData] = useState([])

  const [currentPage, setCurrentPage] = useState(1)
  const [productsPerPage, setproductPerPage] = useState(5)

  const lastProductIndex = currentPage * productsPerPage;
  const firstProductIndex = lastProductIndex - productsPerPage;

  const productsData = data.slice(firstProductIndex, lastProductIndex);


  const fetchData = async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();

    setData(data);

    // console.log(data);
  }
  // console.log(data);
  useEffect(() => {


    fetchData()

  }, [])

  return (
    <>

      <div className="heading">
   

        <h1 >Products List</h1>
        <Status />
      </div>




      <div className="card_container">



        {productsData?.map((product, id) => {
          return (


            <div className="card" key={id}>


              <div className="img_container">
                <img src={product.image} alt="" />
              </div>

              <h1 className="card_title">{product.title}</h1>
            </div>

          )
        })}



      </div>

      <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} productsDataLen={data.length} productsPerPage={productsPerPage} />

    </>

  )
}

export default Weather