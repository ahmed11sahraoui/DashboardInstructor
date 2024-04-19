import { TypeQuestionEnum } from '@/enums/question.enum';
import { contentType } from '@/sharedTypes/exercice';

export class Cours {
  id!: string;
  name!: string;
  content!: string;
  chapitreId!: string;
  isLocked!: boolean;
  images!: [string];
}
