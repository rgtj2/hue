import { HuePage } from './app.po';

describe('hue App', function() {
  let page: HuePage;

  beforeEach(() => {
    page = new HuePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
