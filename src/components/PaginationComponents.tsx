import React from 'react';
import {useSearchParams} from "react-router-dom";

const PaginationComponents = () => {

    const[query,setQuery]=useSearchParams({page:'0'})

    return (
        <div>
            <button onClick={() => {
                const page = query.get('page')
                if (page) {
                    let currentPage = +page
                    currentPage--;
                    setQuery({page: currentPage.toString()})
                }
            }}>prev
            </button>
            <button onClick={() => {
                const page = query.get('page')
                if (page) {
                    let currentPage = +page
                    currentPage++;
                    setQuery({page: currentPage.toString()})
                }
            }}>next
            </button>
        </div>
    );
};

export default PaginationComponents;