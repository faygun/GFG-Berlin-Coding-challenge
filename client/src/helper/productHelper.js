import axios from 'axios';
import { getConfig } from '../helper/helper';

export async function getProductData(){
    let response = await axios.get('/api/product', getConfig())
    return response.data;
}