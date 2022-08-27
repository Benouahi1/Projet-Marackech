import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { TranslateModule } from "@ngx-translate/core";
import { PagesModule } from "../pages.module";
import { MaterialsModule } from "../utils/materials/materials.module";
import { JuridiqueComponent } from "./juridique.component"
import { UpdStatusComponent } from "./upd-status/upd-status.component";
import { AddStatusComponent } from "./add-status/add-status.component";
import { StatusComponent } from "./status/status.component";
import { EvenementComponent } from "./evenement/evenement.component";
import { AddEvenementComponent } from "./add-evenement/add-evenement.component";
import { UpdEvenementComponent } from "./upd-evenement/upd-evenement.component";
import { AddJugementsComponent } from "./add-jugements/add-jugements.component";
import { DetailleJugementsComponent } from "./detaille-jugements/detaille-jugements.component";
import { JugementsComponent } from "./jugements/jugements.component";
import { UpdJugementsComponent } from "./upd-jugements/upd-jugements.component";
@NgModule({
	declarations: [UpdStatusComponent,
		AddStatusComponent,
		StatusComponent,
		EvenementComponent,
		AddEvenementComponent,
		UpdEvenementComponent,
		AddJugementsComponent,
		DetailleJugementsComponent,
		JugementsComponent,
		UpdJugementsComponent,


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
		  component: JuridiqueComponent,
		  children: [

			{
				path: "status",
				component: StatusComponent,
			  },
			  {
				path: "evenement",
				component:EvenementComponent,
			  },
			  {
				path: "upd-status",
				component: UpdStatusComponent,
			  },
			  {
				path: "upd-evenement",
				component: UpdEvenementComponent,
			  },
			  {
				path: "add-status",
				component: AddStatusComponent,
			  },
			  {
				path: "add-evenement",
				component: AddEvenementComponent,
			  }, {
				path: "add-jugements",
				component: AddJugementsComponent,
			  },
			  {
				path: "detaille-jugements",
				component: DetailleJugementsComponent,
			  },
			  {
				path: "jugements",
				component: JugementsComponent,
			  },
			  {
				path: "upd-jugements",
				component: UpdJugementsComponent,
			  },
		  ]
		}
	  ]),
	]
  })
  export class JuridiqueModule { }
