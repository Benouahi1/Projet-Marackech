import { Pipe, PipeTransform } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr-MA';
import { formatCurrency, getCurrencySymbol } from '@angular/common';

registerLocaleData(localeFr, 'fr');

@Pipe({
  name: 'dirhamsCurrency'
})
export class DirhamsCurrencyPipe implements PipeTransform {

  transform(
    value: number,
    currencyCode: string = 'درهم',
    display:
        | 'code'
        | 'symbol'
        | 'symbol-narrow'
        | string
        | boolean = 'symbol',
    digitsInfo: string = '3.2-2',
    locale: string = 'fr',
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
