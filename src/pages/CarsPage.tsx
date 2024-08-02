import React, {useEffect, useState} from 'react';
import CarsComponent from "../component/CarsComponent";
import {carsService} from "../service/axious";
import {CarsPaginatedModel} from "../model/CarsPaginatedModel";
import {AxiosError} from "axios";

const CarsPage = () => {

    const [carPaginared, setCarPaginared] = useState<CarsPaginatedModel >({
        items:[],
        next:null,
        prev:null,
        total_items:0,
        total_pages:0
    })

    useEffect(() => {
        const getcarsData = async () => {
            try {
                const respoce = await carsService.getCars()
                setCarPaginared(respoce)
            }catch (e){
                const axiosError = e as AxiosError
                if(axiosError && axiosError?.response?.status === 401){
                    console.log(axiosError.message)
                }
            }
        }
        getcarsData()
    }, []);

    return (
        <div>
            <CarsComponent cars={carPaginared.items}/>
        </div>
    );
};

export default CarsPage;