import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { TranslateModule } from "@ngx-translate/core";
import { PagesModule } from "../pages.module";
import { MaterialsModule } from "../utils/materials/materials.module";
import { AddProgrammeComponent } from "./add-programme/add-programme.component";
import { ListProgrammeComponent } from "./list-programme/list-programme.component";
import { ProgrammeComponent } from "./programme.component";
import { UpdtProgrammeComponent } from "./updt-programme/updt-programme.component";
import { DetailleProgrammeComponent } from './detaille-programme/detaille-programme.component';
@NgModule({
	declarations: [ProgrammeComponent,
		AddProgrammeComponent,
		ListProgrammeComponent,
		UpdtProgrammeComponent,
		DetailleProgrammeComponent,
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
		  component: ProgrammeComponent,
		  children: [
			{
				path: "add-programme",
				component: AddProgrammeComponent,
			},
			{
				path: "list-programme",
				component: ListProgrammeComponent,
			},
			{
				path: "updt-programme",
				component: UpdtProgrammeComponent,
			},
			{
				path: "detaille-programme",
				component: DetailleProgrammeComponent,
			}
		  ]


		}

	  ]),

	]
  })
  export class ProgrammeModule { }
