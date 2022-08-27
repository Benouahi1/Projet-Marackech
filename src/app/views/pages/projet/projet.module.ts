import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { TranslateModule } from "@ngx-translate/core";
import { PagesModule } from "../pages.module";
import { MaterialsModule } from "../utils/materials/materials.module";
import { ProjetComponent } from './projet.component';
import { AddProjetComponent } from './add-projet/add-projet.component';
import { ListProjetComponent } from './list-projet/list-projet.component';
import { DetailleProjetComponent } from './detaille-projet/detaille-projet.component';
import { UpdProjetComponent } from './upd-projet/upd-projet.component';




@NgModule({
  declarations: [
	ProjetComponent,
	AddProjetComponent,
	ListProjetComponent,
	DetailleProjetComponent,
	UpdProjetComponent,

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
		  component: ProjetComponent,
		  children: [
			{
				path: "add-projet",
				component: AddProjetComponent,
			},
			{
				path: "list-projet",
				component: ListProjetComponent,
			},
			{
				path: "updt-projet",
				component: UpdProjetComponent
			},
			{
				path: "detaille-projet",
				component: DetailleProjetComponent,
			},
		
		  ]


		}

	  ]),
  ]
})
export class ProjetModule { }
