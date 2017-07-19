import { DreamListPage } from './app.po';

describe('dream-list App', () => {
  let page: DreamListPage;

  beforeEach(() => {
    page = new DreamListPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
