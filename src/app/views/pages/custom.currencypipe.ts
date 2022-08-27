import { Pipe, PipeTransform } from '@angular/core';
import { formatCurrency, getCurrencySymbol } from '@angular/common';
import { registerLocaleData } from '@angular/common';
import localeAr from '@angular/common/locales/ar-MA';
registerLocaleData(localeAr, 'ar');

import localeFr from '@angular/common/locales/fr';
registerLocaleData(localeFr, 'fr');
@Pipe({
  name: 'macurrency',
})
export class MycurrencyPipe implements PipeTransform {
  code: any;
  constructor() {
    if (localStorage.getItem("language") == 'fr') {
      this.code = 'Dhs';
    }
    else {
      this.code = 'درهم';
    }
  }

  transform(value: number, currencyCode: string = this.code,
    display:
      | 'code'
      | 'symbol'
      | 'symbol-narrow'
      | string
      | boolean = 'symbol',
    digitsInfo: string = '3.2-2',
    locale: string = localStorage.getItem("language"),
  ): string | null {
    return formatCurrency(
      value,
      locale,
      getCurrencySymbol(currencyCode, 'wide'),
      currencyCode,
      digitsInfo,
    );
  }
}