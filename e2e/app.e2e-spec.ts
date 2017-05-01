import { SysticketPage } from './app.po';

describe('systicket App', () => {
  let page: SysticketPage;

  beforeEach(() => {
    page = new SysticketPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
