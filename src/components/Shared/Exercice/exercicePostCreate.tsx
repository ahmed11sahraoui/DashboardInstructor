import React, { ReactElement, useEffect, useState } from 'react';
import { generate_inputs } from '@/components/Shared/Exercice/InputsLogic.create';
import { TypeQuestionEnum } from '@/enums/question.enum';
import getAllCours from '@/services/Functions/Cour/cours.service';
import { Cours } from '@/sharedTypes/cours';
import {BooleanInput, Create, required, SelectInput, SimpleForm, TextInput} from "react-admin";

const ExercicePostCreate: React.FC = (props) => {
  const [selectedType, SetSelectedType] = useState<TypeQuestionEnum>();
  const [formData, setFormData] = useState({
    name: '',
    typeQuestion: '',
    courId: '',
    isLocked: false
  });

  const [Cours, setCours] = useState<Cours[]>([]);
  const questionTypesArrayValuesMap = Object.values(TypeQuestionEnum).map(
    (value) => ({ label: value, value })
  );

  useEffect(() => {
    getAllCours().then((value) => {
      setCours(value);
    });
  }, []);

  return (
    <>
      return (
      <Create title="Create a Exercice " {...props}>
        <SimpleForm>
          <TextInput source="name" validate={required()} />

          <SelectInput onChange={(e) => SetSelectedType(e.target.value)} source="typeQuestion" choices={questionTypesArrayValuesMap} />
          <SelectInput source="courId" choices={Cours} />
          <BooleanInput label="isLocked" source="isLocked" />


        </SimpleForm>
      </Create>
      );
    </>
  );
}
export default ExercicePostCreate;