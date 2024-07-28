import React, {useEffect, useState} from 'react';
import CarsComponent from "../components/CarsComponent";
import {carService} from "../service/api.service";
import {AxiosError} from "axios";
import {CarsPaginationModel} from "../models/CarsPaginationModel";

const CarsPage = () => {

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
                let responce = await carService.getCars()
                setCarPaginated(responce)
            }catch (e){
                const axiosError = e as AxiosError;
                if(axiosError && axiosError?.response?.status === 401){
                    console.log(axiosError);
                }
            }
        }

        getCarsData();

    }, []);

    return (
        <div>
            <CarsComponent cars={carPaginated.items} />
        </div>
    );
};

export default CarsPage;