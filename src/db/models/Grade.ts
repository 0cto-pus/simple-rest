import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IGrade {
  code: string;
  value: number;
}

export interface IStudent extends Document {
  name: string;
  surname: string;
  stdNumber: string;
  grades: IGrade[];
}

const GradeSchema: Schema = new Schema({
  code: {
    type: String,
    required: true,
  },
  value: {
    type: Number,
    required: true,
  },
});

const StudentSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  surname: {
    type: String,
    required: true,
  },
  stdNumber: {
    type: String,
    required: true,
    unique: true,
  },
  grades: [GradeSchema],
});

const Student: Model<IStudent> = mongoose.model<IStudent>(
  'Student',
  StudentSchema
);

export default Student;
