//import { Chapitre, Cour, Trimestre } from '@prisma/client';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ArrayInput, BooleanInput, Create, NumberInput, SelectInput, SimpleForm, SimpleFormIterator, TextInput, required } from 'react-admin';

const ExerciceCreate: React.FC = (props) =>{ 
  //const [nameCours,setNames]=useState<Cour[]>([])
  const [selectedType,setSelected]=useState<string>("")

//   useEffect(()=>{

//   (  async ()=>{
   
//    const {data}=await axios.get('http://localhost:3000/api/cours/getAll')

//    setNames(data.data)

//     })()

//   },[])
  
  const Type1 = [
    { id: "QCM_COMPLETE_PHRASE_WITH_WORD", name: "QCM_COMPLETE_PHRASE_WITH_WORD" },
    { id: "QCM_COMPLETE_PHRASE_WITH_PHRASE", name: "QCM_COMPLETE_PHRASE_WITH_PHRASE" },
    { id: "QCM_CHOOSE_PHRASE", name: "QCM_CHOOSE_PHRASE" },
    { id: "QCM_CHOOSE_WORD", name: "QCM_CHOOSE_WORD" },
    { id: "QCM_OPTION", name: "QCM_OPTION" },
    { id: "QCM_DRAG_SMALL", name: "QCM_DRAG_SMALL" },
    { id: "QCM_DRAG_BIG", name: "QCM_DRAG_BIG" },
    { id: "QCM_MULTI_ANSWER_WORDS", name: "QCM_MULTI_ANSWER_WORDS" },
    { id: "QCM_MULTI_ANSWER_PHRASE_SMALL", name: "QCM_MULTI_ANSWER_PHRASE_SMALL" },
  ];
  
  const Type2 = [{ id: "QCM_MULTI_ANSWER_IMAGES", name: "QCM_MULTI_ANSWER_IMAGES" }];
  const Type3 = [{ id: "QCM_MULTI_ANSWER_WORDS_IMAGES", name: "QCM_MULTI_ANSWER_WORDS_IMAGES" }];
  const Type4 = [{ id: "DRAG_DROP_IN_TABLE_IMAGES", name: "DRAG_DROP_IN_TABLE_IMAGES" }];
  const Type5 = [{ id: "DRAG_DROP_WORDS_TO_IMAGE", name: "DRAG_DROP_WORDS_TO_IMAGE" }];
  const Type6 = [{ id: "SELECT_TABLE", name: "SELECT_TABLE" }];
  const Type7 = [
    { id: "COLOR", name: "COLOR" },
    { id: "ARROW", name: "ARROW" },
  ];
  const Type8 = [{ id: "ARROW_SOUND", name: "ARROW_SOUND" }];
  const Type9 = [{ id: "VIDEO", name: "VIDEO" }];
  const Type10 = [{ id: "READ", name: "READ" }];
  const Type11 = [{ id: "READ_IMAGE", name: "READ_IMAGE" }];
  const Type12 = [
    { id: "MAKE_PHRASE", name: "MAKE_PHRASE" },
    { id: "MAKE_PHRASE_FROM_TABLE", name: "MAKE_PHRASE_FROM_TABLE" },
  ];
  

  const types=[...Type1,...Type2,...Type3,...Type4,...Type5,...Type6,...Type7,...Type8,...Type9,...Type10,...Type11,...Type12]

  const typeInputMapping: Record<string, React.ReactNode> = {
    QCM_COMPLETE_PHRASE_WITH_WORD: (
      <>
        <TextInput source="content.text" label="Text" validate={required()} />
        <ArrayInput source="content.options">
          <SimpleFormIterator>
            <TextInput source="text" label="Option Text" validate={required()} />
            <BooleanInput source="isCorrect" label="Is Correct" />
          </SimpleFormIterator>
        </ArrayInput>
      </>
    ),
    QCM_COMPLETE_PHRASE_WITH_PHRASE:(
      <>
      <TextInput source="content.text" label="Text" validate={required()} />
      <ArrayInput source="content.options">
        <SimpleFormIterator>
          <TextInput source="text" label="Option Text" validate={required()} />
          <BooleanInput source="isCorrect" label="Is Correct" />
        </SimpleFormIterator>
      </ArrayInput>
    </>
    ),
    QCM_CHOOSE_PHRASE:(
      <>
      <TextInput source="content.text" label="Text" validate={required()} />
      <ArrayInput source="content.options">
        <SimpleFormIterator>
          <TextInput source="text" label="Option Text" validate={required()} />
          <BooleanInput source="isCorrect" label="Is Correct" />
        </SimpleFormIterator>
      </ArrayInput>
    </>
    ),
    QCM_CHOOSE_WORD:(
      <>
      <TextInput source="content.text" label="Text" validate={required()} />
      <ArrayInput source="content.options">
        <SimpleFormIterator>
          <TextInput source="text" label="Option Text" validate={required()} />
          <BooleanInput source="isCorrect" label="Is Correct" />
        </SimpleFormIterator>
      </ArrayInput>
    </>
    ),
    QCM_OPTION:(
      <>
      <TextInput source="content.text" label="Text" validate={required()} />
      <ArrayInput source="content.options">
        <SimpleFormIterator>
          <TextInput source="text" label="Option Text" validate={required()} />
          <BooleanInput source="isCorrect" label="Is Correct" />
        </SimpleFormIterator>
      </ArrayInput>
    </>
    ),
    QCM_DRAG_SMALL:(
      <>
      <TextInput source="content.text" label="Text" validate={required()} />
      <ArrayInput source="content.options">
        <SimpleFormIterator>
          <TextInput source="text" label="Option Text" validate={required()} />
          <BooleanInput source="isCorrect" label="Is Correct" />
        </SimpleFormIterator>
      </ArrayInput>
    </>
    ),
    QCM_DRAG_BIG:(
      <>
      <TextInput source="content.text" label="Text" validate={required()} />
      <ArrayInput source="content.options">
        <SimpleFormIterator>
          <TextInput source="text" label="Option Text" validate={required()} />
          <BooleanInput source="isCorrect" label="Is Correct" />
        </SimpleFormIterator>
      </ArrayInput>
    </>
    ),
    QCM_MULTI_ANSWER_WORDS:(
      <>
      <TextInput source="content.text" label="Text" validate={required()} />
      <ArrayInput source="content.options">
        <SimpleFormIterator>
          <TextInput source="text" label="Option Text" validate={required()} />
          <BooleanInput source="isCorrect" label="Is Correct" />
        </SimpleFormIterator>
      </ArrayInput>
    </>
    ),
    QCM_MULTI_ANSWER_PHRASE_SMALL:(
      <>
      <TextInput source="content.text" label="Text" validate={required()} />
      <ArrayInput source="content.options">
        <SimpleFormIterator>
          <TextInput source="text" label="Option Text" validate={required()} />
          <BooleanInput source="isCorrect" label="Is Correct" />
        </SimpleFormIterator>
      </ArrayInput>
    </>
    ),
    QCM_MULTI_ANSWER_IMAGES:(
      <>
      <TextInput source="content.text" label="Text" validate={required()} />
      <ArrayInput source="content.options">
        <SimpleFormIterator>
          <TextInput source="image" label="Option Image" validate={required()} />
          <BooleanInput source="isCorrect" label="Is Correct" />
        </SimpleFormIterator>
      </ArrayInput>
    </>
    ),
    QCM_MULTI_ANSWER_WORDS_IMAGES:(
      <>
      <TextInput source="content.text" label="Text" validate={required()} />
      <ArrayInput source="content.options">
        <SimpleFormIterator>
          <TextInput source="text" label="Option Text" validate={required()} />
          <TextInput source="image" label="Option Image" validate={required()} />

          <BooleanInput source="isCorrect" label="Is Correct" />
        </SimpleFormIterator>
      </ArrayInput>
    </>
    ),
    DRAG_DROP_IN_TABLE_IMAGES:(
      <>
      <TextInput source="content.text" label="Text" validate={required()} />
      <ArrayInput source="content.columns">
        <SimpleFormIterator>
          <TextInput source="text" label="Option Text" validate={required()} />
          <TextInput source="background" label="Option background" validate={required()} />

        </SimpleFormIterator>
      </ArrayInput>
      <ArrayInput source="content.options">
        <SimpleFormIterator>
          <NumberInput  source="columnIndex" label="Option columnIndex" validate={required()} />
          <TextInput source="image" label="Option Image" validate={required()} />

        </SimpleFormIterator>
      </ArrayInput>
    </>
    ),
    DRAG_DROP_WORDS_TO_IMAGE:(
      <>
      <TextInput source="content.text" label="Text" validate={required()} />

      <ArrayInput source="content.options">
        <SimpleFormIterator>
        <TextInput source="text" label="Option Text" validate={required()} />

          <NumberInput  source="order" label="Option order" validate={required()} />
          <TextInput source="image" label="Option Image" validate={required()} />

        </SimpleFormIterator>
      </ArrayInput>
    </>
    ),
    SELECT_TABLE:(
      <>
      <TextInput source="content.text" label="Text" validate={required()} />

      <ArrayInput source="content.columns">
        <SimpleFormIterator>
        <TextInput source="text" label="Option Text" validate={required()} />

          <TextInput  source="background" label="Option background" validate={required()} />
          <ArrayInput source="options">
          <SimpleFormIterator>
          <TextInput source="image" label="Option Image" validate={required()} />
          <BooleanInput source="isCorrect" label="Is Correct" />
          </SimpleFormIterator>
          </ArrayInput>

        </SimpleFormIterator>
      </ArrayInput>
    </>
    ),
  
    COLOR:(
      <>
      <TextInput source="content.text" label="Text" validate={required()} />

      <ArrayInput source="content.tuples">
        <SimpleFormIterator>
        <TextInput source="text1" label="Option text1" validate={required()} />

          <NumberInput  source="order1" label="Option order1" validate={required()} />
          <TextInput source="text2" label="Option text2" validate={required()} />

          <NumberInput  source="order2" label="Option order2" validate={required()} />
        

        </SimpleFormIterator>
      </ArrayInput>
    </>
    ),
    ARROW:(
      <>
      <TextInput source="content.text" label="Text" validate={required()} />

      <ArrayInput source="content.tuples">
        <SimpleFormIterator>
        <TextInput source="text1" label="Option text1" validate={required()} />

          <NumberInput  source="order1" label="Option order1" validate={required()} />
          <TextInput source="text2" label="Option text2" validate={required()} />

          <NumberInput  source="order2" label="Option order2" validate={required()} />
        

        </SimpleFormIterator>
      </ArrayInput>
    </>
    ),
    ARROW_SOUND:(
      <>
      <TextInput source="content.text" label="Text" validate={required()} />

      <ArrayInput source="content.tuples">
        <SimpleFormIterator>
        <TextInput source="text" label="Option text" validate={required()} />

          <NumberInput  source="textOrder" label="Option textOrder" validate={required()} />
          <TextInput source="sound" label="Option sound" validate={required()} />

          <NumberInput  source="soundOrder" label="Option soundOrder" validate={required()} />
        

        </SimpleFormIterator>
      </ArrayInput>
    </>
    ),
    VIDEO:(
      <>
      <TextInput source="content.text" label="Text" validate={required()} />

      <TextInput source="content.link" label="link" validate={required()} />

    </>
    ),
    READ:(
      <>
      <TextInput source="content.text" label="Text" validate={required()} />

      <TextInput source="content.image" label="image" validate={required()} />

    </>
    ),
    READ_IMAGE:(
      <>
      <TextInput source="content.text" label="Text" validate={required()} />

      <TextInput source="content.image" label="image" validate={required()} />

    </>
    ),
    MAKE_PHRASE:(
      <>
      <TextInput source="content.text" label="Text" validate={required()} />

      <ArrayInput source="content.words">
        <SimpleFormIterator>
        <TextInput source="text" label="Option text" validate={required()} />

          <NumberInput  source="order" label="Option order" validate={required()} />

          <NumberInput  source="correctOrder" label="Option correctOrder" validate={required()} />
        

        </SimpleFormIterator>
      </ArrayInput>
    </>
    ),
    MAKE_PHRASE_FROM_TABLE:(
      <>
      <TextInput source="content.text" label="Text" validate={required()} />

      <ArrayInput source="content.words">
        <SimpleFormIterator>
        <TextInput source="text" label="Option text" validate={required()} />

          <NumberInput  source="order" label="Option order" validate={required()} />

          <NumberInput  source="correctOrder" label="Option correctOrder" validate={required()} />
        

        </SimpleFormIterator>
      </ArrayInput>
    </>
    ),
  };

  return (
    <Create title="Create a Exercice " {...props}>
      <SimpleForm>
        <TextInput source="name" validate={required()} />
        
        <SelectInput onChange={(e) => setSelected(e.target.value)} source="typeQuestion" choices={types} />
        
        <BooleanInput label="isLocked" source="isLocked" />

        {selectedType && typeInputMapping[selectedType]}

      </SimpleForm>
    </Create>
  );
};

export default ExerciceCreate;