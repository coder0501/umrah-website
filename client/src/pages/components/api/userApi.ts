// frontend/src/api/userApi.ts
import axios from 'axios';

export const addUser = async (userData: any) => {
    const response = await axios.post('http://localhost:5000/personal-info/add', userData);
    return response.data;
};
