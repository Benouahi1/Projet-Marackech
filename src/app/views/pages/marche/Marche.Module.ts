import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { TranslateModule } from "@ngx-translate/core";
import { PagesModule } from "../pages.module";
import { MaterialsModule } from "../utils/materials/materials.module";
import { ListTypeEmbalageComponent } from "./list-type-embalage/list-type-embalage.component";
import { MarcheComponent } from "./Marche.component";
import { ListTypeHangarComponent } from './list-type-Hangar/list-type-Hangar.component';
import { AddTypeHangarComponent } from './add-type-Hangar/add-type-Hangar.component';
import { ListTypeTarifictionComponent } from './list-type-Tarifiction/list-type-Tarifiction.component';
import { AddTypeTarifictionComponent } from './add-type-Tarifiction/add-type-Tarifiction.component';
import { AddTypeProduitComponent } from './add-type-Produit/add-type-Produit.component';
import { ListTypeProduitComponent } from './list-type-Produit/list-type-Produit.component';
import { AddTypeEmbalageComponent } from "./add-type-embalage/add-type-embalage.component";
import { ModificationTypeEmbalageComponent } from "./modification-type-embalage/modification-type-embalage.component";
import { ModificationTypeHangarComponent } from "./modification-type-hangar/modification-type-Hangar.component";
import { ModificationTypeProduitComponent } from "./modification-type-produit/modification-type-Produit.component";
import { ModificationTypeTarifictionComponent } from "./modification-type-tarifiction/modification-type-tarifiction.component";
import { DetailTypeEmbalageComponent } from "./detail-type-embalage/detail-type-embalage.component";
import { DetailTypeHangarComponent } from "./detail-type-hangar/detail-type-hangar.component";
import { DetailTypeProduitComponent } from "./detail-type-produit/detail-type-produit.component";
import { DetailTypeTarifictionComponent } from "./detail-type-tarifiction/detail-type-tarifiction.component";

@NgModule({
  declarations: [DetailTypeTarifictionComponent,
	DetailTypeProduitComponent,
	DetailTypeHangarComponent,
	DetailTypeEmbalageComponent,
	ModificationTypeTarifictionComponent,ModificationTypeProduitComponent,ModificationTypeHangarComponent,ModificationTypeEmbalageComponent,ListTypeEmbalageComponent,MarcheComponent,AddTypeEmbalageComponent,ListTypeHangarComponent,AddTypeHangarComponent,ListTypeTarifictionComponent,AddTypeTarifictionComponent,AddTypeProduitComponent,ListTypeProduitComponent
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
        component: MarcheComponent,
        children: [
		  {
			path: "detail-type-tarifiction",
			component: DetailTypeTarifictionComponent
		  },
		  {
			path: "detail-type-embalage",
			component: DetailTypeEmbalageComponent
		  },
		  {
			path: "detail-type-hangar",
			component: DetailTypeHangarComponent
		  },
		  {
			path: "detail-type-produit",
			component: DetailTypeProduitComponent
		  },
          {
            path: "list-type-embalage",
            component: ListTypeEmbalageComponent
          },
		  {
            path: "modification-type-tarifiction",
            component: ModificationTypeTarifictionComponent
          },
		  {
            path: "modification-type-embalage",
            component: ModificationTypeEmbalageComponent
          },
		  {
            path: "modification-type-Hangar",
            component: ModificationTypeHangarComponent
          },
		  {
            path: "modification-type-Produit",
            component: ModificationTypeProduitComponent
          },
          {
            path: "add-type-embalage",
            component: AddTypeEmbalageComponent
          },
          {
            path: "list-type-Hangar",
            component: ListTypeHangarComponent
          },
          {
            path: "add-type-Hangar",
            component: AddTypeHangarComponent
          },
          {
            path: "list-type-Tarifiction",
            component: ListTypeTarifictionComponent
          },
          {
            path: "add-type-Tarifiction",
            component: AddTypeTarifictionComponent
          },
          {
            path: "list-type-Produit",
            component: ListTypeProduitComponent
          },
          {
            path: "add-type-Produit",
            component: AddTypeProduitComponent
          },
        ]


      }

    ]),

  ]
})
export class MarcheModule { }
