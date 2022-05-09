import { AxiosError, AxiosResponse } from "axios";
import { config } from "../config/config";
import { axiosInstance } from "../utils/AxiosInstance";

const getBooksByTitle = (title: string) => {
    return axiosInstance.get(`${config.apiUrl}/book/title/` + title)
        .then((response: AxiosResponse) => {
            return response.data;
        }).catch((error: AxiosError) => {
            throw new Error(`Something went wrong while trying to get books list, 
                            ${(error.response ? error.response?.data?.message : error.message)}`);
        })
}

const addBookToLibrary = (bookId: string, userId: string | undefined, isAvailable: boolean) => {
    return axiosInstance.post(`${config.apiUrl}/book`, {userId, bookId, available: isAvailable})
        .then((response: AxiosResponse) => {
            return response.data;
        }).catch((error: AxiosError) => {
            throw new Error(`Something went wrong while trying to create a book, 
                            ${(error.response ? error.response?.data?.message : error.message)}`);
        })
}

const getBookById = (id: string) => {
    return axiosInstance.get(`${config.apiUrl}/book/` + id)
        .then((response: AxiosResponse) => {
            return response.data;
        }).catch((error: AxiosError) => {
            throw new Error(`Something went wrong while trying to get book with id ${id}, 
                            ${(error.response ? error.response?.data?.message : error.message)}`);
        })
}

const bookService = {
    getBooksByTitle,
    addBookToLibrary,
    getBookById
};

export default bookService;