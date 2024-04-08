import { TypeQuestionEnum } from '@/Dto/ExerciceDto';
import React, { ReactElement, useEffect, useState } from 'react';

export default function ExercicePostCreate() {
  const [nameCours, setNameCours] = useState([]);
  const [selectedType, setSelectedType] = useState('');
  const [nbrClick, SetNbrClick] = useState(0);
  const [
    nbrClick_1_DRAG_DROP_IN_TABLE_IMAGES,
    SetNbrClick_1_DRAG_DROP_IN_TABLE_IMAGES
  ] = useState({ value: 0, enable: false });
  const [
    nbrClick_2_DRAG_DROP_IN_TABLE_IMAGES,
    SetNbrClick_2_DRAG_DROP_IN_TABLE_IMAGES
  ] = useState({ value: 0, enable: false });
  const [formData, setFormData] = useState({
    name: '',
    typeQuestion: '',
    courId: '',
    isLocked: false
  });

  useEffect(() => {
    fetchNameCours();
  }, []);

  const fetchNameCours = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/cours/getAll');
      const data = await response.json();
      setNameCours(data.data);
    } catch (error) {
      console.error('Error fetching nameCours:', error);
    }
  };
  const handleNbrClick = () => {
    SetNbrClick(nbrClick + 1);
  };

  const handlenbrClick_1_DRAG_DROP_IN_TABLE_IMAGES = () => {
    SetNbrClick_1_DRAG_DROP_IN_TABLE_IMAGES((prevState) => ({
      ...prevState,
      value: prevState.value + 1
    }));
  };

  const handlenbrClick_2_DRAG_DROP_IN_TABLE_IMAGES = () => {
    SetNbrClick_2_DRAG_DROP_IN_TABLE_IMAGES((prevState) => ({
      ...prevState,
      value: prevState.value + 1
    }));
  };
  const ChangeStaterClick_1_DRAG_DROP_IN_TABLE_IMAGES = () => {
    SetNbrClick_1_DRAG_DROP_IN_TABLE_IMAGES((prevState) => ({
      ...prevState,
      enable: (prevState.enable = true)
    }));
    SetNbrClick_2_DRAG_DROP_IN_TABLE_IMAGES((prevState) => ({
      ...prevState,
      enable: (prevState.enable = true)
    }));
  };

  const ShowInputsDRAG_DROP_IN_TABLE_IMAGES = () => {
    if (
      nbrClick_1_DRAG_DROP_IN_TABLE_IMAGES.enable &&
      nbrClick_2_DRAG_DROP_IN_TABLE_IMAGES.enable
    ) {
      return (
        <>
          <button onClick={handlenbrClick_1_DRAG_DROP_IN_TABLE_IMAGES}>
            Add Input1
          </button>
          <button onClick={handlenbrClick_2_DRAG_DROP_IN_TABLE_IMAGES}>
            Add Input2
          </button>
        </>
      );
    }
  };

  const types = [
    {
      id: 'QCM_COMPLETE_PHRASE_WITH_WORD',
      name: 'QCM_COMPLETE_PHRASE_WITH_WORD'
    },
    {
      id: 'QCM_COMPLETE_PHRASE_WITH_PHRASE',
      name: 'QCM_COMPLETE_PHRASE_WITH_PHRASE'
    },
    { id: 'QCM_CHOOSE_PHRASE', name: 'QCM_CHOOSE_PHRASE' },
    { id: 'QCM_CHOOSE_WORD', name: 'QCM_CHOOSE_WORD' },
    { id: 'QCM_OPTION', name: 'QCM_OPTION' },
    { id: 'QCM_DRAG_SMALL', name: 'QCM_DRAG_SMALL' },
    { id: 'QCM_DRAG_BIG', name: 'QCM_DRAG_BIG' },
    { id: 'QCM_MULTI_ANSWER_WORDS', name: 'QCM_MULTI_ANSWER_WORDS' },
    {
      id: 'QCM_MULTI_ANSWER_PHRASE_SMALL',
      name: 'QCM_MULTI_ANSWER_PHRASE_SMALL'
    },
    { id: 'QCM_MULTI_ANSWER_IMAGES', name: 'QCM_MULTI_ANSWER_IMAGES' },
    {
      id: 'QCM_MULTI_ANSWER_WORDS_IMAGES',
      name: 'QCM_MULTI_ANSWER_WORDS_IMAGES'
    },
    { id: 'DRAG_DROP_IN_TABLE_IMAGES', name: 'DRAG_DROP_IN_TABLE_IMAGES' },
    { id: 'DRAG_DROP_WORDS_TO_IMAGE', name: 'DRAG_DROP_WORDS_TO_IMAGE' },
    { id: 'SELECT_TABLE', name: 'SELECT_TABLE' },
    { id: 'COLOR', name: 'COLOR' },
    { id: 'ARROW', name: 'ARROW' },
    { id: 'ARROW_SOUND', name: 'ARROW_SOUND' },
    { id: 'VIDEO', name: 'VIDEO' },
    { id: 'READ', name: 'READ' },
    { id: 'READ_IMAGE', name: 'READ_IMAGE' },
    { id: 'MAKE_PHRASE', name: 'MAKE_PHRASE' },
    { id: 'MAKE_PHRASE_FROM_TABLE', name: 'MAKE_PHRASE_FROM_TABLE' }
  ];

  const handleTypeChange = (e) => {
    setSelectedType(e.target.value);
    SetNbrClick(0);
    SetNbrClick_1_DRAG_DROP_IN_TABLE_IMAGES((prevState) => ({
      ...prevState,
      value: (prevState.value = 0),
      enable: (prevState.enable = false)
    }));
    SetNbrClick_2_DRAG_DROP_IN_TABLE_IMAGES((prevState) => ({
      ...prevState,
      value: (prevState.value = 0),
      enable: (prevState.enable = false)
    }));
    setFormData({
      ...formData,
      typeQuestion: e.target.value
    });
  };

  function generateInput_First_9(selectedType: string): ReactElement | null {
    if (
      selectedType === 'QCM_COMPLETE_PHRASE_WITH_WORD' ||
      selectedType === 'QCM_COMPLETE_PHRASE_WITH_PHRASE' ||
      selectedType === 'QCM_CHOOSE_PHRASE' ||
      selectedType === 'QCM_CHOOSE_WORD' ||
      selectedType === 'QCM_OPTION' ||
      selectedType === 'QCM_DRAG_SMALL' ||
      selectedType === 'QCM_DRAG_BIG' ||
      selectedType === 'QCM_MULTI_ANSWER_WORDS' ||
      selectedType === 'QCM_MULTI_ANSWER_PHRASE_SMALL'
    ) {
      const inputs: ReactElement[] = [
        <>
          <label htmlFor={`contentTextMain`}>Text</label>
          <input
            type="text"
            id={`contentTextMain`}
            name={`contentTextMain`}
            required
          />
        </>
      ];
      for (let i = 0; i < nbrClick; i++) {
        inputs.push(
          <div key={i}>
            <label htmlFor={`optionText${i}`}>Option Text</label>
            <input
              type="text"
              id={`optionText${i}`}
              name={`optionText${i}`}
              required
            />
            <label htmlFor={`isCorrect${i}`}>Is Correct</label>
            <input
              type="checkbox"
              id={`isCorrect${i}`}
              name={`isCorrect${i}`}
            />
          </div>
        );
      }
      return <div>{inputs}</div>;
    }
    return null;
  }
  function generateInput_QCM_MULTI_ANSWER_IMAGES(
    selectedType: string
  ): ReactElement | null {
    if (selectedType === 'QCM_MULTI_ANSWER_IMAGES') {
      const inputs: ReactElement[] = [
        <>
          <label htmlFor={`contentTextMain`}>Text</label>
          <input
            type="text"
            id={`contentTextMain`}
            name={`contentTextMain`}
            required
          />
        </>
      ];
      for (let i = 0; i < nbrClick; i++) {
        inputs.push(
          <div key={i}>
            <label htmlFor={`optionimage${i}`}>image</label>
            <input
              type="text"
              id={`optionimage${i}`}
              name={`optionimage${i}`}
              required
            />
            <label htmlFor={`isCorrect${i}`}>Is Correct</label>
            <input
              type="checkbox"
              id={`isCorrect${i}`}
              name={`isCorrect${i}`}
            />
          </div>
        );
      }
      return <div>{inputs}</div>;
    }
    return null;
  }
  function generateInput_QCM_MULTI_ANSWER_WORDS_IMAGES(
    selectedType: string
  ): ReactElement | null {
    if (selectedType === 'QCM_MULTI_ANSWER_WORDS_IMAGES') {
      const inputs: ReactElement[] = [
        <>
          <label htmlFor={`contentTextMain`}>Text</label>
          <input
            type="text"
            id={`contentTextMain`}
            name={`contentTextMain`}
            required
          />
        </>
      ];
      for (let i = 0; i < nbrClick; i++) {
        inputs.push(
          <div key={i}>
            <label htmlFor={`optionText${i}`}>Option Text</label>
            <input
              type="text"
              id={`optionText${i}`}
              name={`optionText${i}`}
              required
            />
            <label htmlFor={`optionimage${i}`}>image</label>
            <input
              type="text"
              id={`optionimage${i}`}
              name={`optionimage${i}`}
              required
            />
            <label htmlFor={`isCorrect${i}`}>Is Correct</label>
            <input
              type="checkbox"
              id={`isCorrect${i}`}
              name={`isCorrect${i}`}
            />
          </div>
        );
      }
      return <div>{inputs}</div>;
    }
    return null;
  }

  function generateInput_DRAG_DROP_IN_TABLE_IMAGES(
    selectedType: string
  ): ReactElement | null {
    //ChangeStaterClick_1_DRAG_DROP_IN_TABLE_IMAGES ();
    if (selectedType === 'DRAG_DROP_IN_TABLE_IMAGES') {
      const inputs1: ReactElement[] = [
        <>
          <label htmlFor={`contentTextMain`}>Text</label>
          <input
            type="text"
            id={`contentTextMain`}
            name={`contentTextMain`}
            required
          />
        </>
      ];
      const inputs2: ReactElement[] = [
        <>
          <label htmlFor={`contentTextMain`}>Text</label>
          <input
            type="text"
            id={`contentTextMain`}
            name={`contentTextMain`}
            required
          />
        </>
      ];
      for (let i = 0; i < nbrClick_1_DRAG_DROP_IN_TABLE_IMAGES.value; i++) {
        inputs1.push(
          <div key={i}>
            <label htmlFor={`optionText${i}`}>Option Text</label>
            <input
              type="text"
              id={`optionText${i}`}
              name={`optionText${i}`}
              required
            />
            <label htmlFor={`Option Background${i}`}>Option Background</label>
            <input
              type="text"
              id={`Option Background${i}`}
              name={`Option Background${i}`}
              required
            />
          </div>
        );
      }
      for (let j = 0; j < nbrClick_2_DRAG_DROP_IN_TABLE_IMAGES.value; j++) {
        inputs2.push(
          <div key={j}>
            <label htmlFor={`optionColumnsIndex${j}`}>
              Option ColumnsIndex
            </label>
            <input
              type="number"
              id={`optionColumnsIndex${j}`}
              name={`optionColumnsIndex${j}`}
              required
            />
            <label htmlFor={`optionimage${j}`}>image</label>
            <input
              type="text"
              id={`optionimage${j}`}
              name={`optionimage${j}`}
              required
            />
          </div>
        );
      }
      return (
        <div>
          {inputs1} {inputs2}
        </div>
      );
    }
    return null;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log('Form Data:', formData);
    } catch (error) {
      console.error('Error creating exercice:', error);
    }
  };

  return (
    <div>
      <h1>Create a Exercice</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Name"
          name="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <select onChange={handleTypeChange} value={formData.typeQuestion}>
          <option value="">Select Type</option>
          {types.map((type) => (
            <option key={type.id} value={type.id}>
              {type.name}
            </option>
          ))}
        </select>
        <select
          name="courId"
          value={formData.courId}
          onChange={(e) => setFormData({ ...formData, courId: e.target.value })}
        >
          <option value="">Select Cour</option>
          {nameCours.map((cour) => (
            <option key={cour.id} value={cour.id}>
              {cour.name}
            </option>
          ))}
        </select>
        <input
          type="checkbox"
          id="isLocked"
          name="isLocked"
          checked={formData.isLocked}
          onChange={(e) =>
            setFormData({ ...formData, isLocked: e.target.checked })
          }
        />
        <label htmlFor="isLocked">Is Locked</label>

        {/* Render type-specific input fields */}
        {generateInput_First_9(selectedType)}
        {generateInput_QCM_MULTI_ANSWER_IMAGES(selectedType)}
        {generateInput_QCM_MULTI_ANSWER_WORDS_IMAGES(selectedType)}
        {generateInput_DRAG_DROP_IN_TABLE_IMAGES(selectedType)}

        <button onClick={handleNbrClick}>Add Input</button>
        {ShowInputsDRAG_DROP_IN_TABLE_IMAGES()}
      </form>
    </div>
  );
}
