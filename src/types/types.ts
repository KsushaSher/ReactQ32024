export interface IFormValues {
  name: string;
  age: number;
  email: string;
  password: string;
  confirmPassword: string;
  gender: string;
  termsAccepted: boolean;
  country: string;
  image?: FileList | null;
}

export type IErrors = Partial<{
  [key in keyof IFormValues]: string;
}>;
