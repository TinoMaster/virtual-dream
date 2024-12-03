export interface TaskModel {
  id: number;
  title: string;
  description: string;
  status: 'pending' | 'in-progress' | 'completed';
  assignedTo: number;
  createdAt: Date;
  updatedAt: Date;
}
