import React, { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import { ExerciceGetAllResponse } from '@/Dto/ExerciceDto';




export default async function getAll(): Promise<ExerciceGetAllResponse> {
  
 
  try {
    const response: AxiosResponse<ExerciceGetAllResponse> = await axios.get("http://localhost:3000/api/exercice/getAll");
    // const apiUrl = process.env.REACT_APP_API_URL;
    // console.log('API URL:', apiUrl);

    // if (!apiUrl) {
    //   throw new Error('API URL is not defined in environment variables.');
    // }

    // Make a GET request to the API endpoint
    

    // Assuming the response contains data in JSON format
    const apiData: ExerciceGetAllResponse = response.data;
    console.log(apiData);
    return apiData;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error; // Rethrow the error to propagate it to the caller
  }
}
