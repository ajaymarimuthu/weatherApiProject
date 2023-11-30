import PropTypes from 'prop-types';

import "./Pagination.css"

const Pagination = ({ productsDataLen, productsPerPage,setCurrentPage,currentPage }) => {

    let pages = [];
  
    for (let i = 1; i <= Math.ceil(productsDataLen / productsPerPage); i++) {
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
 
Pagination.propTypes = {
    productsDataLen: PropTypes.number.isRequired,
    productsPerPage: PropTypes.number.isRequired, 
    setCurrentPage: PropTypes.func.isRequired,
    currentPage: PropTypes.number.isRequired,
  };
  

export default Pagination