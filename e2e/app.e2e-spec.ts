import { Testacli2Page } from './app.po';

describe('testacli2 App', function() {
  let page: Testacli2Page;

  beforeEach(() => {
    page = new Testacli2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
