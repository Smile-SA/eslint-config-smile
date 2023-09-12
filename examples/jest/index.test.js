const main = require('./index.js');

describe('main', () => {
  beforeEach(() => {
    jest.spyOn(console, 'log');
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should log in the console', () => {
    main('H2G2', 42);
    expect(console.log).toHaveBeenCalled();
  });

  it('should not log in the console', () => {
    main('H2G2', 12);
    expect(console.log).not.toHaveBeenCalled();
  });
});
