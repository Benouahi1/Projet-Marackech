import { MatPaginatorIntl } from "@angular/material/paginator";

const arabicRangeLabel = (page: number, pageSize: number, length: number) => {
    if (length == 0 || pageSize == 0) { return `0 de ${length}`; }
  
    length = Math.max(length, 0);
  
    const startIndex = page * pageSize;
  
    // If the start index exceeds the list length, do not try and fix the end index to the end.
    const endIndex = startIndex < length ?
      Math.min(startIndex + pageSize, length) :
      startIndex + pageSize;
  
    return `${startIndex + 1} - ${endIndex} de ${length}`;
  }
  
  export function getArabicPaginatorIntl() {
    const paginatorIntl = new MatPaginatorIntl();
    paginatorIntl.itemsPerPageLabel = 'مصفوفة لكل صفحة:';
    paginatorIntl.nextPageLabel = 'الصفحة التالية';
    paginatorIntl.previousPageLabel = 'الصفحة السابقة';
    paginatorIntl.firstPageLabel = 'الصفحة الأولى';
    paginatorIntl.lastPageLabel = 'الصفحة الأخيرة';
    paginatorIntl.getRangeLabel = arabicRangeLabel;
    return paginatorIntl;
  }