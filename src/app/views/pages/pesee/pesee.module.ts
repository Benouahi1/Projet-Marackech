import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PagesModule } from "../pages.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TranslateModule } from "@ngx-translate/core";
import { MaterialsModule } from "../utils/materials/materials.module";
import { RouterModule } from "@angular/router";

import { ListPeseesComponent } from "./list-pesees/list-pesees.component";
import { AddPeseeComponent } from "./add-pesee/add-pesee.component";
import { PeseeComponent } from "./pesee.component";
import { AddPeseeEtape2Component } from "./add-pesee-etape2/add-pesee-etape2.component";
import { ShowPeseeComponent } from './show-pesee/show-pesee.component';

@NgModule({
	declarations: [
		AddPeseeComponent,
		PeseeComponent,
		ListPeseesComponent,
		AddPeseeEtape2Component,
		ShowPeseeComponent,
	],
	imports: [
		PagesModule,
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		TranslateModule.forChild(),
		MaterialsModule,
		RouterModule.forChild([
			{
				path: "",
				component: PeseeComponent,
				children: [
					{
						path: "add-pesee",
						component: AddPeseeComponent,
					},
					{
						path: "add-pesee-etape2",
						component: AddPeseeEtape2Component,
					},
					{
						path: "list-pesees",
						component: ListPeseesComponent,
					},
					{
						path: "show-pesee",
						component: ShowPeseeComponent,
					},
				],
			},
		]),
	],
})
export class PeseeModule {}
