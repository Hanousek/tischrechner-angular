import { TischrechnerPage } from './app.po';

describe('tischrechner App', () => {
  let page: TischrechnerPage;

  beforeEach(() => {
    page = new TischrechnerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
