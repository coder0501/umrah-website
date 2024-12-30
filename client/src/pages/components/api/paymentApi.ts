// frontend/src/api/paymentApi.ts
import axios from 'axios';

export const processPayment = async (paymentData: any) => {
    const response = await axios.post('http://localhost:5000/payments/process', paymentData);
    return response.data;
};

                                      


