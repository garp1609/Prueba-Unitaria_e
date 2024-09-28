const holaMundo = require('./index');

test('Imprime Hola Mundo', () => {
    expect(holaMundo()).toBe('Hola Mundo');
});