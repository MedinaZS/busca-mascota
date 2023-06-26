
export interface ResultReporte {
  id: number;
  report_type: string;
  title: string;
  description: string;
  picture: string;
  name: string;
  phone: string;
  specie: string;
  age: number;
  sex: string;
  ubication_resume: string;
  country: string;
  postal_code: string | null;
  city: string | null;
  address: string | null;
  latitude: number;
  longitude: number;
  report_state: boolean;
  created_at: string;
  edited_at: string;
  last_time_seen: string;
  accept_terms: boolean;
  allowed: boolean;
}

export interface ResultAdopciones {
  id: number;
  title: string;
  name: string;
  description: string;
  specie: string;
  age: number;
  sex: string;
  city: string;
  country: string;
  phone: string;
  picture: string;
}