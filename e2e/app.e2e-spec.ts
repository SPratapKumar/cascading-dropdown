import { CascadingDropdownsPage } from './app.po';

describe('cascading-dropdowns App', () => {
  let page: CascadingDropdownsPage;

  beforeEach(() => {
    page = new CascadingDropdownsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
