import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { TranslateModule } from "@ngx-translate/core";
import { PagesModule } from "../pages.module";
import { MaterialsModule } from "../utils/materials/materials.module";
import { AddMarcheeComponent } from "./add-marchee/add-marchee.component";
import { DetailleMarcheeComponent } from "./detaille-marchee/detaille-marchee.component";
import { ListMarcheeComponent } from "./list-marchee/list-marchee.component";
import { MarcheeComponent } from "./marchee.component";
import { UpdMarcheeComponent } from "./upd-marchee/upd-marchee.component";



@NgModule({
  declarations: [
	MarcheeComponent,
	ListMarcheeComponent,
	AddMarcheeComponent,
	UpdMarcheeComponent,
	DetailleMarcheeComponent,
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
        component: MarcheeComponent,
        children: [
		  {
			path: "detail-marche",
			component: DetailleMarcheeComponent
		  },
		  {
			path: "add-marche",
			component: AddMarcheeComponent
		  },
		  {
			path: "upd-marche",
			component: UpdMarcheeComponent
		  },
		  {
			path: "list-marche",
			component: ListMarcheeComponent
		  },


        ]


      }

    ]),
  ]
})
export class MarcheeModule { }
