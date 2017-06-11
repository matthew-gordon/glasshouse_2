import { GlasshousePage } from './app.po';

describe('glasshouse App', () => {
  let page: GlasshousePage;

  beforeEach(() => {
    page = new GlasshousePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
