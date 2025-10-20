export interface Tip {
  _id?: string;          // ID generado por MongoDB
  text: string;          // contenido del tip o afirmación
  category?: string;     // gratitud, mentalidad, visualización, etc.
  type?: string;
  createdAt?: string;
  updatedAt?: string;
}
