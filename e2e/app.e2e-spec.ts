import { TestdeployPage } from './app.po';

describe('testdeploy App', function() {
  let page: TestdeployPage;

  beforeEach(() => {
    page = new TestdeployPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
