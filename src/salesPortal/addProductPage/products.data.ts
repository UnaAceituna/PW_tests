import { IAddProduct } from "../../types/product.types";
import { MANUFACTURER } from "./MANUFACTURER";

const productData: IAddProduct = {
    name: "Lana Del Rey",
    manufacturer: MANUFACTURER.APPLE,
    price: 2000,
    amount: 10,
    notes: "su-su-summertime sadness",
}

export default productData;