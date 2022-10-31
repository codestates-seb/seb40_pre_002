export function setStorageToken(authorization: string | undefined) {
  if (!authorization) throw new Error('authorization is undefined');
  window.localStorage.setItem('token', authorization);
}

export function getStorageToken() {
  return window.localStorage.getItem('token');
}
