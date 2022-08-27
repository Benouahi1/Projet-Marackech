import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AddAffaireJudiciaireComponent } from "./add-affaire-judiciaire/add-affaire-judiciaire.component";
import { AffaireJudiciaireComponent } from "./affaire-judiciaire.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { TranslateModule } from "@ngx-translate/core";
import { PagesModule } from "../pages.module";
import { MaterialsModule } from "../utils/materials/materials.module";
import { ListAffaireJudiciaireComponent } from "./list-affaire-judiciaire/list-affaire-judiciaire.component";
import { ShowAffaireJudiciaireComponent } from "./show-affaire-judiciaire/show-affaire-judiciaire.component";
import { EditAffaireJudiciaireComponent } from "./edit-affaire-judiciaire/edit-affaire-judiciaire.component";
import { AddAffaireJudiciaireDetailComponent } from "./add-affaire-judiciaire-detail/add-affaire-judiciaire-detail.component";
import { TabStatusComponent } from "./tab-status/tab-status.component";
import { TabEvenementComponent } from "./tab-evenement/tab-evenement.component";
import { TabAvocatComponent } from "./tab-avocat/tab-avocat.component";
import { TabJugementComponent } from "./tab-jugement/tab-jugement.component";
import { MatStepperModule } from "@angular/material/stepper";

@NgModule({
	declarations: [
		AddAffaireJudiciaireComponent,
		AffaireJudiciaireComponent,
		ListAffaireJudiciaireComponent,
		ShowAffaireJudiciaireComponent,
		EditAffaireJudiciaireComponent,
		AddAffaireJudiciaireDetailComponent,
		TabStatusComponent,
		TabEvenementComponent,
		TabAvocatComponent,
		TabJugementComponent,
	],
	imports: [
		MatStepperModule,
		PagesModule,
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		TranslateModule.forChild(),
		MaterialsModule,
		RouterModule.forChild([
			{
				path: "",
				component: AffaireJudiciaireComponent,
				children: [
					{
						path: "add-affaire-judiciare",
						component: AddAffaireJudiciaireComponent,
					},
					{
						path: "list-affaire-judiciare",
						component: ListAffaireJudiciaireComponent,
					},
					{
						path: "edit-affaire-judiciare",
						component: EditAffaireJudiciaireComponent,
					},
					{
						path: "show-affaire-judiciare",
						component: ShowAffaireJudiciaireComponent,
					},
					{
						path: "add-affaire-judiciare-detail",
						component: AddAffaireJudiciaireDetailComponent,
					},
					{
						path: "tab-status",
						component: TabStatusComponent,
					},
					{
						path: "tab-avocat",
						component: TabAvocatComponent,
					},
					{
						path: "tab-jugement",
						component: TabJugementComponent,
					},
					{
						path: "tab-evenement",
						component: TabEvenementComponent,
					},
				],
			},
		]),
	],
})
export class AffaireJudiciaireModule {}
