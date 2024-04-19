//   typeQuestion: `${TypeQuestion}`;

// 'TemplateLiteralType' is not supported, fallback into 'z.any()'
// ref https://github.com/fabien0102/ts-to-zod/issues/64
// so we do it old school

import { Exercice } from '@/sharedTypes/exercice';

export type ExerciceGetAllResponse =
  | {
      status: 'OK';
      data: Exercice[];
    }
  | { status: 'ERROR'; message: string };

export type CreateExerciceInput = (
  | {
      typeQuestion:
        | 'QCM_COMPLETE_PHRASE_WITH_WORD'
        | 'QCM_COMPLETE_PHRASE_WITH_PHRASE'
        | 'QCM_CHOOSE_PHRASE'
        | 'QCM_CHOOSE_WORD'
        | 'QCM_OPTION'
        | 'QCM_DRAG_SMALL'
        | 'QCM_DRAG_BIG'
        | 'QCM_MULTI_ANSWER_WORDS'
        | 'QCM_MULTI_ANSWER_PHRASE_SMALL';
      content: {
        text: string;
        options: { text: string; isCorrect: boolean }[];
      };
    }
  | {
      typeQuestion: 'QCM_MULTI_ANSWER_IMAGES';
      content: {
        text: string;
        options: { image: string; isCorrect: boolean }[];
      };
    }
  | {
      typeQuestion: 'QCM_MULTI_ANSWER_WORDS_IMAGES';
      content: {
        text: string;
        options: {
          text: string;
          image: string;
          isCorrect: boolean;
        }[];
      };
    }
  | {
      typeQuestion: 'DRAG_DROP_IN_TABLE_IMAGES';
      content: {
        text: string;
        columns: { text: string; background: string }[];
        options: { columnIndex: number; image: string }[];
      };
    }
  | {
      typeQuestion: 'DRAG_DROP_WORDS_TO_IMAGE';
      content: {
        text: string;
        options: {
          text: string;
          order: number;
          image: string;
        }[];
      };
    }
  | {
      typeQuestion: 'SELECT_TABLE';
      content: {
        columns: {
          text: string;
          background: string;
          options: {
            image: string;
            isCorrect: boolean;
          }[];
        }[];
      };
    }
  | {
      typeQuestion: 'COLOR' | 'ARROW';
      content: {
        text: string;
        tuples: {
          text1: string;
          order1: number;
          text2: string;
          order2: number;
        }[];
      };
    }
  | {
      typeQuestion: 'ARROW_SOUND';
      content: {
        text: string;
        tuples: {
          text: string;
          textOrder: number;
          sound: string;
          soundOrder: number;
        }[];
      };
    }
  | {
      typeQuestion: 'VIDEO';
      content: {
        text: string;
        link: string;
      };
    }
  | {
      typeQuestion: 'READ';
      content: {
        text: string;
        image: string;
      };
    }
  | {
      typeQuestion: 'READ_IMAGE';
      content: {
        text: string;
        image: string;
      };
    }
  | {
      typeQuestion: 'MAKE_PHRASE' | 'MAKE_PHRASE_FROM_TABLE';
      content: {
        text: string;
        words: {
          text: string;
          order: number;
          correctOrder: number;
        }[];
      };
    }
) & {
  isLocked?: boolean;
  courId: string;
  order: number;
  description?: string;
  estTermine: boolean;
};
export type ExerciceResponse =
  | {
      status: 'OK';
      data: Exercice;
    }
  | { status: 'ERROR'; message: string };

// export type ExerciceByIdResponse =
//   | {
//       status: "OK";
//       data: Exercice & { cour: Cours };
//     }
//   | { status: "ERROR"; message: string };
export type ExerciceDeleteResponse =
  | { status: 'OK'; data: Exercice }
  | { status: 'ERROR'; message: string };
export type ExerciceResponseWithExercices =
  | {
      status: 'OK';
      data: Exercice & { exercices: Exercice[] };
    }
  | { status: 'ERROR'; message: string };
export type DeleteExerciceById = {
  id: string;
};
