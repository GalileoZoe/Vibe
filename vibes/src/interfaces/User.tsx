export interface User {
  _id?: string;           // ID generado por MongoDB
  name: string;
  email: string;
  password?: string;
  avatar?: string;
  age?: number;
  gender?: string;
  bio?: string;
  preferences?: {
    dailyReminders?: boolean;
    preferredCategories?: string[];
    theme?: 'light' | 'dark' | 'dev';
    [key: string]: any;
  };
  createdAt?: string;
  updatedAt?: string;
}
