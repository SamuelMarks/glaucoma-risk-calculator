import { FrontendAngular2ScaffoldPage } from './app.po';

describe('stockrankr-web-frontend App', function() {
  let page: FrontendAngular2ScaffoldPage;

  beforeEach(() => {
    page = new FrontendAngular2ScaffoldPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
