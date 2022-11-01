export function setStorageToken(authorization: string | undefined) {
  if (!authorization) throw new Error('authorization is undefined');
  window.localStorage.setItem('token', JSON.stringify(authorization));
}

export function getStorageToken() {
  return JSON.parse(window.localStorage.getItem('token') || '""');
}

export function deleteStorageToken() {
  window.localStorage.removeItem('token');

}
