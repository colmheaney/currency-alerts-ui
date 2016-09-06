import { CurrencyAlertsAngularcliPage } from './app.po';

describe('currency-alerts-angularcli App', function() {
  let page: CurrencyAlertsAngularcliPage;

  beforeEach(() => {
    page = new CurrencyAlertsAngularcliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
