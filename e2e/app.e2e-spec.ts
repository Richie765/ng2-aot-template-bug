import { NgxPage } from './app.po';

describe('ngx App', () => {
  let page: NgxPage;

  beforeEach(() => {
    page = new NgxPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
