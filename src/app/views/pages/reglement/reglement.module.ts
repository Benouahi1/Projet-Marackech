import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PagesModule } from "../pages.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TranslateModule } from "@ngx-translate/core";
import { MaterialsModule } from "../utils/materials/materials.module";
import { RouterModule } from "@angular/router";

import { FactureComponent } from "./facture/facture.component";
import { ReglementComponent } from "./reglement.component";
import { ListFacturesComponent } from "./list-factures/list-factures.component";
import { ShowFactureComponent } from "./show-facture/show-facture.component";

@NgModule({
	declarations: [
		ReglementComponent,
		FactureComponent,
		ListFacturesComponent,
		ShowFactureComponent,
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
				component: ReglementComponent,
				children: [
					{
						path: "facture",
						component: FactureComponent,
					},
					{
						path: "list-factures",
						component: ListFacturesComponent,
					},
					{
						path: "show-facture",
						component: ShowFactureComponent,
					},
				],
			},
		]),
	],
})
export class ReglementModule {}
