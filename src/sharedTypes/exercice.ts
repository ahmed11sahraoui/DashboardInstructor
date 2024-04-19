import { TypeQuestionEnum } from '@/enums/question.enum';

export class Exercice {
  id!: string;
  description!: string;
  order!: number;
  typeQuestion!: TypeQuestionEnum;
  content!: contentType;
  estTermine!: boolean;
  courId!: string;
  createdAt!: Date;
  updatedAt!: Date;
  isLocked!: boolean;
}

export type contentType = {
  text: string;
  options: optionsType;
  words: Word[];
};

export type optionsType = {
  text: string;
  image: string;
  isCorrect: boolean;
}[];

export type Word = {
  text: string;
  order: number;
  correctOrder: boolean;
};
