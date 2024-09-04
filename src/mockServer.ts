export interface User {
  email: string;
  password: string;
}

export const mockUsers: User[] = [
  { email: "y-lab1@best.ru", password: "password1" },
  { email: "y-lab2@best.ru", password: "password2" },
];

export const authenticateUser = async (
  email: string,
  password: string
): Promise<boolean> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const user = mockUsers.find(
        (user) => user.email === email && user.password === password
      );
      resolve(!!user);
    }, 1000);
  });
};
