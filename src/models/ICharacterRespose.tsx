import {ICharacter} from "./ICharacter";

export interface ICharacterRespose {
    info:{
        count: number,
        pages: number,
        next: string | null
        prev: string | null
    }
    results: ICharacter[]
}