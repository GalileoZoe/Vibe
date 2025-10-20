export class CreatePrompt {
  text: string;
  type?: 'input' | 'choice' | 'rating';
  category?: string;
}
