import { AppPage } from './app.po';

describe('Test Page load and page components', function () {
  let page: AppPage;

  beforeEach(function () {
    page = new AppPage();
  });

  it('Test SVG table clicks', function () {
    page.navigateTo();
    element(by.css("*[id='mat-tab-content-0-0'] > div > app-svg-render > div > table > tbody > tr:nth-of-type(1) > td.mat-cell.cdk-column-name.mat-column-name.ng-star-inserted")).click();
    element(by.css("*[id='mat-tab-content-0-0'] > div > app-svg-render > div > table > tbody > tr:nth-of-type(6) > td.mat-cell.cdk-column-childrenCount.mat-column-childrenCount.ng-star-inserted")).click();
    element(by.css("*[id='mat-tab-content-0-0'] > div > app-svg-render > div > table > tbody > tr:nth-of-type(6) > td.mat-cell.cdk-column-name.mat-column-name.ng-star-inserted")).click();
    element(by.css("*[id='mat-tab-content-0-0'] > div > app-svg-render > div > table > tbody > tr:nth-of-type(15) > td.mat-cell.cdk-column-name.mat-column-name.ng-star-inserted")).click();
    element(by.css("*[id='mat-tab-content-0-0'] > div > app-svg-render > div > table > tbody > tr:nth-of-type(24) > td.mat-cell.cdk-column-name.mat-column-name.ng-star-inserted")).click();
    element(by.css("*[id='mat-tab-content-0-0'] > div > app-svg-render > div > table > tbody > tr:nth-of-type(31) > td.mat-cell.cdk-column-name.mat-column-name.ng-star-inserted")).click();
    element(by.css("*[id='mat-tab-content-0-0'] > div > app-svg-render > div > table > tbody > tr:nth-of-type(35) > td.mat-cell.cdk-column-name.mat-column-name.ng-star-inserted")).click();
    element(by.css("*[id='mat-tab-content-0-0'] > div > app-svg-render > div > table > tbody > tr:nth-of-type(24) > td.mat-cell.cdk-column-name.mat-column-name.ng-star-inserted")).click();
    element(by.css("*[id='mat-tab-content-0-0'] > div > app-svg-render > div > table > tbody > tr:nth-of-type(24) > td.mat-cell.cdk-column-name.mat-column-name.ng-star-inserted")).click();
    element(by.css("*[id='mat-tab-content-0-0'] > div > app-svg-render > div > table > tbody > tr:nth-of-type(24) > td.mat-cell.cdk-column-name.mat-column-name.ng-star-inserted")).click();
    element(by.css("*[id='mat-tab-content-0-0'] > div > app-svg-render > div > table > tbody > tr:nth-of-type(24) > td.mat-cell.cdk-column-name.mat-column-name.ng-star-inserted")).click();
    element(by.css("*[id='mat-tab-content-0-0'] > div > app-svg-render > div > table > tbody > tr:nth-of-type(25) > td.mat-cell.cdk-column-name.mat-column-name.ng-star-inserted")).click();
    element(by.css("*[id='mat-tab-content-0-0'] > div > app-svg-render > div > table > tbody > tr:nth-of-type(25) > td.mat-cell.cdk-column-name.mat-column-name.ng-star-inserted")).click();
    element(by.css("*[id='mat-tab-content-0-0'] > div > app-svg-render > div > table > tbody > tr:nth-of-type(25) > td.mat-cell.cdk-column-name.mat-column-name.ng-star-inserted")).click();
    element(by.css("*[id='mat-tab-content-0-0'] > div > app-svg-render > div > table > tbody > tr:nth-of-type(25) > td.mat-cell.cdk-column-name.mat-column-name.ng-star-inserted")).click();
    element(by.css("*[id='mat-tab-content-0-0'] > div > app-svg-render > div > table > tbody > tr:nth-of-type(25) > td.mat-cell.cdk-column-name.mat-column-name.ng-star-inserted")).click();
    element(by.css("*[id='mat-tab-content-0-0'] > div > app-svg-render > div > table > tbody > tr:nth-of-type(30) > td.mat-cell.cdk-column-name.mat-column-name.ng-star-inserted")).click();
    element(by.css("*[id='mat-tab-content-0-0'] > div > app-svg-render > div > table > tbody > tr:nth-of-type(30) > td.mat-cell.cdk-column-name.mat-column-name.ng-star-inserted")).click();
    element(by.css("*[id='mat-tab-content-0-0'] > div > app-svg-render > div > table > tbody > tr:nth-of-type(30) > td.mat-cell.cdk-column-name.mat-column-name.ng-star-inserted")).click();
    element(by.css("*[id='mat-tab-content-0-0'] > div > app-svg-render > div > table > tbody > tr:nth-of-type(30) > td.mat-cell.cdk-column-name.mat-column-name.ng-star-inserted")).click();
    element(by.css("*[id='mat-tab-content-0-0'] > div > app-svg-render > div > table > tbody > tr:nth-of-type(35) > td.mat-cell.cdk-column-name.mat-column-name.ng-star-inserted")).click();
    element(by.css("*[id='mat-tab-content-0-0'] > div > app-svg-render > div > table > tbody > tr:nth-of-type(35) > td.mat-cell.cdk-column-name.mat-column-name.ng-star-inserted")).click();
    element(by.css("*[id='mat-tab-content-0-0'] > div > app-svg-render > div > table > tbody > tr:nth-of-type(35) > td.mat-cell.cdk-column-name.mat-column-name.ng-star-inserted")).click();
    element(by.css("*[id='mat-tab-content-0-0'] > div > app-svg-render > div > table > tbody > tr:nth-of-type(35) > td.mat-cell.cdk-column-name.mat-column-name.ng-star-inserted")).click();
  });

  it('Test Tab changes', function () {
    page.navigateTo();
    element(by.css("*[id='mat-tab-label-0-1'] > div.mat-tab-label-content")).click();
    element(by.css("*[id='mat-tab-label-0-0'] > div.mat-tab-label-content")).click();
  });
});
