import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StatistiquesComponent } from "./statistiques.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { TranslateModule } from "@ngx-translate/core";
import { PagesModule } from "../pages.module";
import { MaterialsModule } from "../utils/materials/materials.module";
import { DashboardComponent } from "./dashboard/dashboard.component";

@NgModule({
	declarations: [DashboardComponent, StatistiquesComponent],
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
				component: StatistiquesComponent,
				children: [
					{
						path: "dashboard",
						component: DashboardComponent,
					},
				],
			},
		]),
	],
})
export class StatistiquesModule {}
