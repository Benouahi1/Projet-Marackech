import { Injectable } from "@angular/core";
import { DatePipe } from '@angular/common';
import * as XLSX from "xlsx";
import * as $ from "jquery";
import { TranslateService } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: "root",
})
export class FilesUtilsService {
	constructor(
		private http: HttpClient,
		private datePipe:DatePipe,
		private translate: TranslateService,
		) {}
	// =====================================================
	// export data as excel file
	// =====================================================
	exportToExcel(tableId: string, name?: string) {
		let now = new Date();
		let timeSpan = this.datePipe.transform(now, "ddMMyyyyHHmmss");
		//let timeSpans = new Date().toISOString();
		let prefix = name;
		let fileName = `${prefix}-${timeSpan}`;
		let targetTableElm = document.getElementById(tableId);
		let wb = XLSX.utils.table_to_book(targetTableElm, <
			XLSX.Table2SheetOpts
		>{ sheet: prefix });
		XLSX.writeFile(wb, `${fileName}.xlsx`);
	}
	// =====================================================
	// file size detector
	// =====================================================
	fileSizeDetector(): void {
		$(function () {
			// We can attach the `fileselect` event to all file inputs on the page
			$(document).on("change", ":file", function () {
				var input = $(this),
					numFiles = input.get(0).files
						? input.get(0).files.length
						: 1,
					label = input.val().replace(/\\/g, "/").replace(/.*\//, "");
				input.trigger("fileselect", [numFiles, label]);
			});

			// We can watch for our custom `fileselect` event like this
			$(document).ready(function () {
				$(":file").on("fileselect", function (event, numFiles, label) {
					var input = $(this).parents(".input-group").find(":text"),
						log = numFiles > 1 ? numFiles + " وثائق مختارة" : label; // this.translate.instant("PAGES.GENERAL.??");

					if (input.length) {
						input.val(log);
					} else {
						if (log) alert(log);
					}
				});
			});
		});
	}
	// =====================================================
	// options file
	// =====================================================
	getFileName(file: any) {
		if (file.lastIndexOf(".") != -1 && file.lastIndexOf(".") != 0)
			return file.substring(0, file.lastIndexOf("."));
	}
	// =====================================================
	// extrension file
	// =====================================================
	getExtensionFile(file: any) {
		if (file.lastIndexOf(".") != -1 && file.lastIndexOf(".") != 0) {
			var ext = file.substring(file.lastIndexOf(".") + 1);
			switch (ext) {
				case "txt":
					return "txt.svg";
				case "pdf":
					return "pdf.svg";
				case "jpg":
					return "jpg.svg";
				case "png":
					return "png.svg";
				case "doc":
					return "doc.svg";
				case "docx":
					return "doc.svg";
				case "xls":
					return "xls.svg";
				case "xlsx":
					return "xls.svg";
				case "ppt":
					return "ppt.svg";
				case "pptx":
					return "ppt.svg";
				case "csv":
					return "csv.svg";
				case "xml":
					return "xml.svg";
				case "zip":
					return "zip.svg";
				case "rar":
					return "zip.svg";
				case "html":
					return "html.svg";
				default:
					return "file.svg";
			}
		} else return "";
	}
}
