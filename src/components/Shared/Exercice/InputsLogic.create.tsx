import {
  TypeQuestionEnum,
  TypeQuestionEnumCommun
} from '@/enums/question.enum';
import React, {ReactElement} from 'react';
import { ArrayInput, BooleanInput, Create, NumberInput, SelectInput, SimpleForm, SimpleFormIterator, TextInput, required } from 'react-admin';


export function generate_inputs(
  selectedType: TypeQuestionEnum | undefined
): ReactElement {

  if (
    selectedType &&
      // @ts-ignore
    Object.values(TypeQuestionEnumCommun).includes(selectedType)
  ) {
    return (
        <>
            <TextInput source="content.text" label="Text" validate={required()}  name=""/>
            <ArrayInput source="content.options" name="">
                <SimpleFormIterator>
                    <TextInput source="text" name="" label="Option Text" validate={required()} />
                    <BooleanInput source="isCorrect" name="" label="Is Correct" />
                </SimpleFormIterator>
            </ArrayInput>
  </>
    );
  } else if (selectedType === TypeQuestionEnum.QCM_MULTI_ANSWER_IMAGES) {
    return (
        <>
          <label htmlFor={`contentTextMain`}>Text</label>
          <input
              className="border-black border-2 rounded-md"
              type="text"
              id={`contentTextMain`}
              name={`contentTextMain`}
              required
          />
          <label htmlFor={`optionimage`}>image</label>
          <input
              className="border-black border-2 rounded-md"
              type="text"
              id={`optionimage`}
              name={`optionimage`}
              required
          />
          <div>
          <label htmlFor={`isCorrect`}>Is Correct</label>
          <input
              className="border-black border-2 rounded-md"
              type="checkbox"
              id={`isCorrect`}
              name={`isCorrect`}
          />
          </div>
        </>
    );
  } else if (selectedType === TypeQuestionEnum.QCM_MULTI_ANSWER_WORDS_IMAGES) {
    return (
        <>
            <label htmlFor={`contentTextMain`}>Text</label>
            <input
                className="border-black border-2 rounded-md"
                type="text"
                id={`contentTextMain`}
                name={`contentTextMain`}
                required
            />
            <label htmlFor={`optionText`}>Option Text</label>
            <input
                className="border-black border-2 rounded-md"
                type="text"
                id={`optionText`}
                name={`optionText`}
                required
            />
            <label htmlFor={`optionimage`}>image</label>

            <input
                className="border-black border-2 rounded-md"
                type="text"
                id={`optionimage`}
                name={`optionimage`}
                required
            />
            <div>
            <label htmlFor={`isCorrect$`}>Is Correct</label>
            <input
                type="checkbox"
                id={`isCorrect`}
                name={`isCorrect`}
            />
        </div>
        </>
    );
  } else if (selectedType === TypeQuestionEnum.DRAG_DROP_IN_TABLE_IMAGES) {
      return (
          <>
              <label htmlFor={`contentTextMain`}>Text</label>
              <input
                  className="border-black border-2 rounded-md"
                  type="text"
                  id={`contentTextMain`}
                  name={`contentTextMain`}
                  required
              />
          </>
      );
  } else if (selectedType === TypeQuestionEnum.DRAG_DROP_WORDS_TO_IMAGE) {
      return (
          <>
              <label htmlFor={`contentTextMain`}>Text</label>
              <input
                  className="border-black border-2 rounded-md"
                  type="text"
                  id={`contentTextMain`}
                  name={`contentTextMain`}
                  required
              />
          </>
      );
  } else if (selectedType === TypeQuestionEnum.SELECT_TABLE) {
      return (
          <>
              <label htmlFor={`contentTextMain`}>Text</label>
              <input
                  className="border-black border-2 rounded-md"
                  type="text"
                  id={`contentTextMain`}
                  name={`contentTextMain`}
                  required
              />
          </>
      );
  } else if (
    selectedType === TypeQuestionEnum.COLOR ||
    selectedType === TypeQuestionEnum.ARROW
  ) {
      return (
          <>
              <label htmlFor={`contentTextMain`}>Text</label>
              <input
                  className="border-black border-2 rounded-md"
                  type="text"
                  id={`contentTextMain`}
                  name={`contentTextMain`}
                  required
              />
          </>
      );
  } else if (selectedType === TypeQuestionEnum.ARROW_SOUND) {
      return (
          <>
              <label htmlFor={`contentTextMain`}>Text</label>
              <input
                  className="border-black border-2 rounded-md"
                  type="text"
                  id={`contentTextMain`}
                  name={`contentTextMain`}
                  required
              />
          </>
      );
  } else if (selectedType === TypeQuestionEnum.VIDEO) {
      return (
          <>
              <label htmlFor={`contentTextMain`}>Text</label>
              <input
                  className="border-black border-2 rounded-md"
                  type="text"
                  id={`contentTextMain`}
                  name={`contentTextMain`}
                  required
              />
          </>
      );
  } else if (selectedType === TypeQuestionEnum.READ) {
      return (
          <>
              <label htmlFor={`contentTextMain`}>Text</label>
              <input
                  className="border-black border-2 rounded-md"
                  type="text"
                  id={`contentTextMain`}
                  name={`contentTextMain`}
                  required
              />
          </>
      );
  } else if (selectedType === TypeQuestionEnum.READ_IMAGE) {
      return (
          <>
              <label htmlFor={`contentTextMain`}>Text</label>
              <input
                  className="border-black border-2 rounded-md"
                  type="text"
                  id={`contentTextMain`}
                  name={`contentTextMain`}
                  required
              />
          </>
      );
  } else if (
    selectedType === TypeQuestionEnum.MAKE_PHRASE ||
    selectedType === TypeQuestionEnum.MAKE_PHRASE_FROM_TABLE
  ) {
      return (
          <>
              <label htmlFor={`contentTextMain`}>Text</label>
              <input
                  className="border-black border-2 rounded-md"
                  type="text"
                  id={`contentTextMain`}
                  name={`contentTextMain`}
                  required
              />
          </>
      );
  }
}
