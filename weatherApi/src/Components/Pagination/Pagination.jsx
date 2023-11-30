// import React from 'react'

import "./Pagination.css"

const Pagination = ({ productsDataLen, productsPerPage,setCurrentPage,currentPage }) => {

    let pages = [];

    console.log("productsDataLen",productsDataLen);
    console.log("productsPerPage",productsPerPage);


    for (let i = 1; i <= Math.ceil(productsDataLen / productsPerPage); i++) {

        console.log("ï------",i);

        pages.push(i);

    }

 

    return (
        <div className="btn">


           {pages.map((page,i)=>{
            return (
                <a onClick={()=>{setCurrentPage(page)}} className={page == currentPage ? "pageBtn active ":"pageBtn"} key={i}>{page}</a>
            )
           })}


        </div>
    )
}

export default Pagination