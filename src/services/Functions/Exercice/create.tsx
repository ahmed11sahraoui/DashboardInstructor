import axios, { AxiosResponse } from 'axios';
import { CreateExerciceInput } from '@/Dto/ExerciceDto';

export default async function create(
  data: CreateExerciceInput
): Promise<CreateExerciceInput> {
  try {
    // Make a POST request to the API endpoint with the provided data
    const response: AxiosResponse<CreateExerciceInput> = await axios.post(
      'http://localhost:3000/api/exercice/create',
      data
    );

    // Assuming the response contains data in JSON format
    const responseData: CreateExerciceInput = response.data;
    console.log(responseData);
    return responseData;
  } catch (error) {
    console.error('Error creating data:', error);
    throw error; // Rethrow the error to propagate it to the caller
  }
}
