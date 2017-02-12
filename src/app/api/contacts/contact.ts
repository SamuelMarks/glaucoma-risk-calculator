export interface Record {
  id?: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface Contact extends ContactBase, Record {
}

export interface ContactBase {
  name?: string;
  email: string;
  owner: string;
}
