import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

export const fetchHttpResponse = async (url: string, headers: AxiosRequestConfig): Promise<AxiosResponse> => {
    try {
        const response = await axios.get(url, headers);
        return response;
    } catch (error) {
        console.log(error);
        throw error;
    }
};
