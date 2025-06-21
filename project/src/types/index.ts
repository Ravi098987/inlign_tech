export interface Program {
  id: string;
  title: string;
  description: string;
  duration: string;
  level: string;
  icon: string;
  features: string[];
  color: string;
}

export interface Certificate {
  id: string;
  studentName: string;
  program: string;
  issueDate: string;
  certificateNumber: string;
}

export interface ContactForm {
  name: string;
  email: string;
  phone: string;
  program: string;
  message: string;
}