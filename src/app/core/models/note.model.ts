export interface NoteModel {
  id: number;
  title: string;
  description: string;
  status: 'pending' | 'completed';
  createdBy: number;
  updatedBy: number;
  clientId: number;
  businessId: number;
  createdAt: Date;
  updatedAt: Date;
}
