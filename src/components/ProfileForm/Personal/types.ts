export interface FormValues {
  firstName: string;
  lastName: string;
  phone: string;
  social: string;
  country: string;
  gender: string;
  ageRange: string;
  nationalId: string;
  bio: string;
}

export interface ServerValues {
  firstName: string;
  lastName: string;
  phone: string;
  social: string;
  country: string;
  gender: string;
  ageRange: string;
  nationalId?: string;
  bio: string;
}
