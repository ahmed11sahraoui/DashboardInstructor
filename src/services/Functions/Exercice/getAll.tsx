import React, { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import { ExerciceGetAllResponse } from '@/Dto/ExerciceDto';

export default async function getAll(): Promise<ExerciceGetAllResponse> {
  try {
    // Make a GET request to the API endpoint
    const response: AxiosResponse<ExerciceGetAllResponse> = await axios.get(
      'http://localhost:3000/api/exercice/getAll'
    );

    // Assuming the response contains data in JSON format
    const apiData: ExerciceGetAllResponse = response.data;
    console.log(apiData);
    return apiData;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error; // Rethrow the error to propagate it to the caller
  }
}
