export class User {
  id: string;
  username: string;
  password?: string;
  firstName: string;
  lastName: string;
  token?: string;
}

export const userRegistered: User[] = [
  { id: '1', username: 'johndoe@doe.com', password: 'Portal1.', firstName: 'John', lastName: 'Doe' },
  { id: '2', username: 'lauraspencer@doe.com', password: '222222', firstName: 'Laura', lastName: 'Spencer' },
];
