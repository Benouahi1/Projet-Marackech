import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { TranslateModule } from "@ngx-translate/core";
import { PagesModule } from "../pages.module";
import { MaterialsModule } from "../utils/materials/materials.module";
import { ConventionComponent } from './convention.component';
import { AddConventionComponent } from './add-convention/add-convention.component';
import { UpdConventionComponent } from './upd-convention/upd-convention.component';
import { DetailleConventionComponent } from './detaille-convention/detaille-convention.component';
import { ListConventionComponent } from './list-convention/list-convention.component';
import { TabAComponent } from './tab-a/tab-a.component';
import { UpdTableComponent } from './upd-table/upd-table.component';
import { DetailleTableComponent } from './detaille-table/detaille-table.component';
import { AddTableComponent } from './add-table/add-table.component';




@NgModule({
  declarations: [
	ConventionComponent,
	AddConventionComponent,
	UpdConventionComponent,
	DetailleConventionComponent,
	ListConventionComponent,
	TabAComponent,
	UpdTableComponent,
	DetailleTableComponent,
	AddTableComponent,

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
		  component: ConventionComponent,
		  children: [
			{
				path: "add-convention",
				component: AddConventionComponent,
			},
			{
				path: "list-convention",
				component: ListConventionComponent,
			},
			{
				path: "updt-convention",
				component: UpdConventionComponent,
			},
			{
				path: "detaille-convention",
				component: DetailleConventionComponent,
			},
			{
				path: "tabA-convention",
				component: TabAComponent,
			},
			{
				path: "add-tab-convention",
				component: AddTableComponent,
			},
			{
				path: "upd-tab-convention",
				component: UpdTableComponent,
			},
			{
				path: "detaille-tab-convention",
				component: DetailleTableComponent,
			}
		  ]


		}

	  ]),
  ]
})
export class ConventionModule { }
