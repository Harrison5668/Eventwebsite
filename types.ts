
export interface Speaker {
  id: string;
  name: string;
  role: string;
  organization: string;
  imageUrl: string;
}

export interface Stat {
  label: string;
  value: string;
  suffix?: string;
}

export interface Feature {
  title: string;
  description: string;
}

export interface Package {
  name: string;
  price: string;
  tag?: string;
  features: string[];
  color: string;
}
