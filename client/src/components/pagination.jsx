import React from "react";

const Pagination = ({totalPosts, postPerPage, setCurrentPage, currentPage}) => {
    let pages = []
    for(let i=1; i<= Math.ceil(totalPosts/postPerPage); i++){
        pages.push(i)
    }
    return(
    <div>
        {pages.map((page, index) => {
            return <button className={page === currentPage ? 'active' : ''} key={index} onClick={() => setCurrentPage(page)}>{page}</button>
        })}
    </div>
    )
}

export default Pagination