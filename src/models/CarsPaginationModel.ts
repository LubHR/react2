import {PaginatPageModel} from "./PaginatPageModel";

export interface CarsPaginationModel {
    next: null | PaginatPageModel,
    prev: null | PaginatPageModel,
    total_items: number,
    total_pages: number,
    items: []
}