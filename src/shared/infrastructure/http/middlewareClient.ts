export const fetchFromMiddleware = async <T>(url: string): Promise<T> => {
  const res = await fetch(url);

  if (!res.ok) throw Error;

  return res.json();
};
