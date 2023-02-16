import axios from 'axios';
const URL_ROOT = process.env.REACT_APP_API_URL;

const getCategories = async (data) => {
    const response = await axios.get(`${URL_ROOT}/categories`);
    return response.data;
};

export { getCategories };

