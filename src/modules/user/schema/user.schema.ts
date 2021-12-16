import { Document, model, Schema, SchemaTimestampsConfig } from 'mongoose';

export type UserDocument = Document &
  SchemaTimestampsConfig & {
    email: string;
    name: string;
    age?: number;
    password: string;
  };

const schema = new Schema<UserDocument>(
  {
    email: { type: String, required: true, unique: true, trim: true },
    name: { type: String, required: true, trim: true },
    age: { type: Number, required: false },
    password: { type: String, required: true, trim: true }
  },
  { timestamps: true }
);

export const User = model<UserDocument>('User', schema);
