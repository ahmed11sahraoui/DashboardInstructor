import axios, { AxiosResponse } from 'axios';
import { CreateExerciceInput } from '@/Dto/ExerciceDto';
import { Cours } from '@/sharedTypes/cours';
import { Exercice } from '@/sharedTypes/exercice';
export default async function getAllCours(): Promise<Cours[]> {
  try {
    const response: AxiosResponse<Cours[]> = await axios.get(
      'http://localhost:3000/api/cours/getAll'
    );
    // const apiUrl = process.env.REACT_APP_API_URL;
    // console.log('API URL:', apiUrl);

    // if (!apiUrl) {
    //   throw new Error('API URL is not defined in environment variables.');
    // }

    // Make a GET request to the API endpoint

    // Assuming the response contains data in JSON format
    const apiData: Cours[] = response.data;
    console.log(apiData);
    return apiData;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error; // Rethrow the error to propagate it to the caller
  }
}
