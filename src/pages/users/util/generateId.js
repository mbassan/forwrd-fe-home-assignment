const CHARSET = 'abcdefghijklmnopqrstuvwxyz0123456789';

export function generateId() {
  let randomString = '';
  const charactersLength = CHARSET.length;
  for (let i = 0; i < 8; i++) {
    randomString += CHARSET.charAt(Math.floor(Math.random() * charactersLength));
  }
  return randomString;
}
