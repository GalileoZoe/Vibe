export interface Session {
  _id?: string; // generado por MongoDB
  userId: string; // referencia al usuario
  questionsAnswered: {
    questionId: string;
    answer: string;
  }[];
  generatedTexts: string[]; // IDs de textos generados
  createdAt?: string;
  updatedAt?: string;
}
