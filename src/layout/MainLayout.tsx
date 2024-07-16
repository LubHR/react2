import React from 'react';
import PaginationComponents from "../components/PaginationComponents";
import CharacterComponent from "../components/CharacterComponent";

const MainLayout = () => {

    return (
        <div>
            <CharacterComponent/>
            <PaginationComponents/>
        </div>
    );
};

export default MainLayout;