import { Angular4BoilerplatePage } from './app.po';

describe('angular4-boilerplate App', () => {
  let page: Angular4BoilerplatePage;

  beforeEach(() => {
    page = new Angular4BoilerplatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
