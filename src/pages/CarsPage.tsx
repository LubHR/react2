import React, {useEffect, useState} from 'react';
import CarsComponent from "../components/CarsComponent";
import {authService, carService} from "../service/api.service";
import {AxiosError} from "axios";
import {CarsPaginationModel} from "../models/CarsPaginationModel";
import {useNavigate, useSearchParams} from "react-router-dom";
import PaginationComponent from "../components/PaginationComponent";

const CarsPage = () => {

    const [query]=useSearchParams()

    let navigate = useNavigate()

    const [carPaginated, setCarPaginated] = useState<CarsPaginationModel>({
        items:[],
        prev: null,
        next: null,
        total_items: 0,
        total_pages: 0
    })

    useEffect(() => {
        const getCarsData = async () => {
            try {
                let responce = await carService.getCars(query.get('page') || '1')
                setCarPaginated(responce)
            }catch (e){
                const axiosError = e as AxiosError;
                if(axiosError && axiosError?.response?.status === 401){
                    try {
                        await authService.refresh()
                    }catch (e){
                        return navigate('/')
                    }
                }
            }
        }

        getCarsData();

    }, [query]);

    return (
        <div>
            <CarsComponent cars={carPaginated.items} />
            <PaginationComponent next={carPaginated.next} prev={carPaginated.prev}/>
        </div>
    );
};

export default CarsPage;