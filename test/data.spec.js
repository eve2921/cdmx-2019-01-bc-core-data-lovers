require('../src/data/lol.js');


describe('example', () => {
  it('is a function', () => {
    expect(typeof example).toBe('function');
  });

  it('returns `example`', () => {
    expect(example()).toBe('example');
  });
});

it('Debería devolver el obj charmander',()=>{
  expect(window.filter(pokemonPrueba, 'charmander')[3]).toEqual({charmander});
}); 
});


