import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { TranslateModule } from "@ngx-translate/core";
import { PagesModule } from "../pages.module";
import { MaterialsModule } from "../utils/materials/materials.module";
import { AddAvocatComponent } from "./add-avocat/add-avocat.component";
import { AvocatComponent } from "./avocat/avocat.component";
import {DetailleAvocatComponent} from "./detaille-avocat/detaille-avocat.component";
import {UpdAvocatComponent} from "./upd-avocat/upd-avocat.component";
import { ContratsComponent } from "./contrats.component";

@NgModule({
	declarations: [
		AddAvocatComponent,
		DetailleAvocatComponent,
		UpdAvocatComponent,
		AvocatComponent,

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
			component: ContratsComponent,
			children: [

			  {
				  path: "add-avocat",
				  component: AddAvocatComponent,
				},
				{
					path: "avocat",
					component: AvocatComponent,
				  },
				  {
					path: "upd-avocat",
					component: UpdAvocatComponent,
				  },
				  {
					path: "detaille-avocat",
					component: DetailleAvocatComponent,
				  },




			]


		  }

		]),

	  ]
	})
	export class ContratsModule { }
