import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddParamaitreComponent } from './add-paramaitre/add-paramaitre.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { TranslateModule } from "@ngx-translate/core";
import { PagesModule } from "../pages.module";
import { MaterialsModule } from "../utils/materials/materials.module";
import { ParamaitreComponent } from './paramaitre.component';


@NgModule({
  declarations: [
	AddParamaitreComponent,
	ParamaitreComponent
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
        component: ParamaitreComponent,
        children: [

		  {
			path: "add-paramaitre",
			component: AddParamaitreComponent
		  },


        ]


      }

    ]),
  ]
})
export class ParamaitreModule { }
