export interface Duplicate {
  id: number;
  date: string;
  deadline: string;
  status: string;
  invoice: string;
}

export interface UC {
  id: number;
  uc: number;
  address: string;
  status: string;
  invoice: Duplicate[];
}
