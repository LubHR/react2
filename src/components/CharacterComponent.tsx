import React, {useEffect, useState} from 'react';
import {characterService} from "../service/axious.service";
import {ICharacter} from "../models/ICharacter";
import {useSearchParams} from "react-router-dom";

const CharacterComponent = () => {

    const [query,setQuery] = useSearchParams({page: '1'})

    const [characters, setCharacter] = useState<ICharacter[]>([])

    useEffect(() => {
        const currentPage = query.get('page') || '1'
        console.log(currentPage)
        characterService.getAll(currentPage).then(value => {
            setCharacter(value.data.results)
        })
    }, [query]);

    return (
        <div>
            {
                characters.map(character => <div key={character.id}>{character.id} - {character.name}</div>)
            }
        </div>
    );
};

export default CharacterComponent;