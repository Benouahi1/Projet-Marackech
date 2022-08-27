import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { TranslateModule } from "@ngx-translate/core";
import { PagesModule } from "../pages.module";
import { MaterialsModule } from "../utils/materials/materials.module";
import { DelegitaireComponent } from "./delegitaire.component";
import { DelegitairesComponent } from "./delegitaires/delegitaires.component";
import { SDLComponent } from "./sdl/sdl.component";
import { UpdSDLComponent } from "./upd-sdl/upd-sdl.component";
import { UpdDelegitaireComponent } from "./upd-delegitaire/upd-delegitaire.component";
import { DetailleSDLComponent } from "./detaille-sdl/detaille-sdl.component";
import { DetailleDelegitaireComponent } from "./detaille-delegitaire/detaille-delegitaire.component";
import { AddDelegitaireComponent } from "./add-delegitaire/add-delegitaire.component";
import { AddSDLComponent } from "./add-sdl/add-sdl.component";
@NgModule({
	declarations: [SDLComponent,
		DelegitairesComponent,
		DelegitaireComponent,
		UpdSDLComponent,
		UpdDelegitaireComponent,
		DetailleSDLComponent,
		DetailleDelegitaireComponent,
		AddDelegitaireComponent,
		AddSDLComponent,

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
		  component: DelegitaireComponent,
		  children: [

			{
				path: "delegitaires",
				component: DelegitairesComponent
			  },
			  {
				path: "sdl",
				component: SDLComponent
			  },
			  {
				path: "upd-sdl",
				component: UpdSDLComponent
			  },
			  {
				path: "upd-delegitaire",
				component: UpdDelegitaireComponent
			  },
			  {
				path: "detaille-sdl",
				component: DetailleSDLComponent
			  },
			  {
				path: "detaille-delegitaire",
				component: DetailleDelegitaireComponent
			  },
			  {
				path: "add-sdl",
				component: AddSDLComponent
			  },
			  {
				path: "add-delegitaire",
				component: AddDelegitaireComponent
			  }

		  ]


		}

	  ]),

	]
  })
  export class DelegitairesModule { }



