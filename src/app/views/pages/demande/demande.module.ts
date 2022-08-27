import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AddDemandeComponent } from "./add-demande/add-demande.component";
import { ListDemandesComponent } from "./list-demandes/list-demandes.component";
import { DemandeComponent } from "./demande.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { TranslateModule } from "@ngx-translate/core";
import { PagesModule } from "../pages.module";
import { MaterialsModule } from "../utils/materials/materials.module";
import { EditDemandeComponent } from "./edit-demande/edit-demande.component";
import { ShowDemandeComponent } from './show-demande/show-demande.component';
import { MatStepperModule } from "@angular/material/stepper";

@NgModule({
	declarations: [
		AddDemandeComponent,
		ListDemandesComponent,
		EditDemandeComponent,
		ShowDemandeComponent,
		DemandeComponent,
	],
	imports: [
		PagesModule,
		CommonModule,
		FormsModule,
		MatStepperModule,
		ReactiveFormsModule,
		TranslateModule.forChild(),
		MaterialsModule,
		RouterModule.forChild([
			{
				path: "",
				component: DemandeComponent,
				children: [
					{
						path: "add-demande",
						component: AddDemandeComponent,
					},
					{
						path: "list-demandes",
						component: ListDemandesComponent,
					},
					{
						path: "edit-demande",
						component: EditDemandeComponent,
					},
					{
						path: "show-demande",
						component: ShowDemandeComponent,
					},
				],
			},
		]),
	],
})
export class DemandeModule {}
