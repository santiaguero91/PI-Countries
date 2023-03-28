import React from "react";
import style from "../styles/Pagination.module.css"


export default function Pagination ({ countriesPerPage, allCountries, pagination, currentPage, setCurrentPage}){
const pageNumber = []
for (let i = 0; i < Math.ceil(allCountries/countriesPerPage);i++) {
    pageNumber.push(i+1)
}   
const nextPage = currentPage + 1;
const previousPage = currentPage - 1;
const handleNextPage = ()=> {
    if(currentPage === pageNumber.length) return;
    setCurrentPage(nextPage)
}
const handlePreviousPage = ()=> {
    if(currentPage === 1) return;
    setCurrentPage(previousPage)
}

    return(
    <nav> 
        <button onClick={() => handlePreviousPage()}>Previous</button>
        <button onClick={() => handleNextPage()}>Next</button>
        <div>
            <ul className={style.pagination}>
            {
                pageNumber && pageNumber.map(number =>(
                <li  className="number" key={number}>
                <button 
                onClick={() => pagination(number)} 
                className={number === currentPage ? (style.active) : "color"} 
                >{number}</button>
                </li>
                ))
            }
            </ul>
        </div>
        </nav>
    )
}