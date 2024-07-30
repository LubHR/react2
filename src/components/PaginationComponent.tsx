import React, {FC} from 'react';
import {useSearchParams} from "react-router-dom";
import {PaginatPageModel} from "../models/PaginatPageModel";

interface IProps {
    next: null | PaginatPageModel,
    prev: null | PaginatPageModel
}

const PaginationComponent:FC<IProps> = ({next,prev}) => {

    const [query, setQuery] = useSearchParams({page: "1"});

    const changePage = (nextORprev: string) => {
        switch (nextORprev) {
            case 'next':
                setQuery({...next})
                break;
            case 'prev':
                setQuery({...prev})
                break;
        }
    }

    return (
        <div>
            <button disabled={!prev} onClick={()=>{
                changePage('prev')
            }}>
                prev
            </button>
            <button disabled={!next} onClick={()=>{
                changePage('next')
            }}>
                next
            </button>
        </div>
    );
};

export default PaginationComponent;