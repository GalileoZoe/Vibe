export interface Text {
  _id?: string;           // ID generado por MongoDB
  userId: string;         // referencia al usuario
  sessionId: string;      // referencia a la sesión
  text: string;           // contenido del texto generado
  type?: string;          // tipo de texto
  category?: string;      // opcional, para filtrar tipo de tip
  createdAt?: string;
  updatedAt?: string;
}
