import  React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const PageCreator = (pagesNumber, setCurrentPage) => {
    let pageElement = []

    for (let i = 0; i <= pagesNumber; i++){
        pageElement.push(<StyledPaginastion onClick={() => setCurrentPage(i)}>{i}</StyledPaginastion>)
    }

    return pageElement
}

const Pagination = ({ total, setCurrentPage, valueOffset }) => {
    const [pages, setPages] = useState(0)

    useEffect(() => {
        const numberPage = total / valueOffset
        setPages(Math.floor(numberPage))
    }, [total])
    if (total === 0){
        return null
    }
    return(
        <div>
            <PaginationContainer>
                {PageCreator(pages, setCurrentPage)}
            </PaginationContainer>
        </div>
    )

}

const StyledPaginastion = styled.a`
    margin: 3px 6px;
    cursor: pointer;
`

const PaginationContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`

export default Pagination