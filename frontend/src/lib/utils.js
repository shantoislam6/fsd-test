import axios from 'axios';

export function delay(miliseconds) {
  return new Promise((res) => {
    setTimeout(() => {
      res(miliseconds);
    }, miliseconds);
  });
}

export const apiFetch = axios.create({
  baseURL: import.meta.env.VITE_API_BASE,
  timeout: 1000 * 60,
  headers: { 'Content-Type': 'application/json' },
});
