import { ReactNode } from 'react';
export default interface EventType {
  _id: number;
  title: string;
  date: string | Date;
}