export const getCookie = (cookie?: string, key?: string): string =>
  (key && JSON.parse(cookie || '{}')?.[key]) || '';

export const setCookie = (key: string, value?: string) => {
  document.cookie = JSON.stringify({
    ...JSON.parse(document.cookie || '{}'),
    [key]: value,
  });
};
