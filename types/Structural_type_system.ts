/* eslint-disable */
type VerifyUserFn = (user: User, sentValue: User) => boolean;
type User = { username: string; password: string };
const verifyUser: VerifyUserFn = (user, sentValue) => {
  return (
    user.username === sentValue.username && user.password === sentValue.password
  )
}

const bdUser = { username: 'joao', password: '123456' };
const sendUser = { username: 'joao', password: '12346', permission: '' };
// Ao eu atribuir algo a mais o java script não se importa portanto que esteja
// em ordem oque o tipo solicita EX username e password
const loggedIn = verifyUser(bdUser, sendUser);
console.log(loggedIn)
