import  React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const PageCreator = (pagesNumber, setCurrentPage) => {
    let pageElement = []

    for (let i = 0; i <= pagesNumber; i++){
        pageElement.push(<p onClick={() => setCurrentPage(i)}>{i}</p>)
    }

    return pageElement
}

const Pagination = ({ total, setCurrentPage, valueOffset }) => {
    const [pages, setPages] = useState(0)
    useEffect(() => {
        const numberPage = total / valueOffset
        setPages(Math.ceil(numberPage))
    }, [total])
    if (total === 0){
        return null
    }
    return(
        <div>{PageCreator(pages, setCurrentPage)}</div>
    )

}

const PaginationContainer = styled.div`

`

export default Pagination