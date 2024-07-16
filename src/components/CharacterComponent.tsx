import React, {useEffect, useState} from 'react';
import {characterService} from "../service/axious.service";
import {ICharacter} from "../models/ICharacter";
import {useSearchParams} from "react-router-dom";

const CharacterComponent = () => {

    const[query,setQuery] = useSearchParams()

    const [character, setCharacter] = useState<ICharacter[]>([])

    const currentpage = query.get('page') || '1'
    useEffect(() => {
        characterService.getAll(currentpage).then(value => {
            setCharacter(value.data.results)
        })
    }, [query]);

    return (
        <div>
            {
                character.map(character => <div key={character.id}>{character.id} - {character.name}</div>)
            }
        </div>
    );
};

export default CharacterComponent;