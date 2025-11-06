import { MANUFACTURER } from "../salesPortal/addProductPage/MANUFACTURER";

export interface IAddProduct {
    name: string;
    manufacturer: MANUFACTURER;
    price: number;
    amount: number;
    notes?: string;
}