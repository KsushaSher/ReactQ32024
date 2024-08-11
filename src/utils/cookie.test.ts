import { getCookie, setCookie } from './cookie';

describe('Cookie', () => {
  it('setCookie', () => {
    setCookie('key', 'value');
    expect(document.cookie).equal(JSON.stringify({ key: 'value' }));
  });
  it('getCookie', () => {
    const value = getCookie(JSON.stringify({ key: 'value' }), 'key');
    expect(value).equal('value');
  });
});
