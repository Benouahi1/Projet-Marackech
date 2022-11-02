// Angular
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
// Components
import { BaseComponent } from "./views/theme/base/base.component";
// Auth
//import { AuthGuard } from "./core/auth";
import { ErrorPageComponent } from "./views/theme/content/error-page/error-page.component";

const routes: Routes = [
	{
		path: "auth",
		loadChildren: () =>
			import("./views/pages/auth/auth.module").then((m) => m.AuthModule),
	},

	{
		path: "pages",
		component: BaseComponent,
		children: [

			{
				path: "Marche",
				loadChildren: () =>
					import("./views/pages/Marche/Marche.module").then(
						(m) => m.MarcheModule
					),
			},
			{
				path: "statistiques1",
				loadChildren: () =>
					import(
						"./views/pages/statistiques1/statistiques.module"
					).then((m) => m.StatistiquesModule),
			},
			{
				path: "pesee",
				loadChildren: () =>
					import("./views/pages/pesee/pesee.module").then(
						(m) => m.PeseeModule
					),
			},
			{
				path: "reglement",
				loadChildren: () =>
					import("./views/pages/reglement/reglement.module").then(
						(m) => m.ReglementModule
					),
			},
			{
				path: "evenement",
				loadChildren: () =>
					import("./views/pages/evenement/evenement.module").then(
						(m) => m.EvenementModule
					),
			},
			{
				path: "delegitaire",
				loadChildren: () =>
					import("./views/pages/delegitaire/delegitaire.Module").then((m) => m.DelegitairesModule)
			},
			{
				path: "paramaitre",
				loadChildren: () =>
					import("./views/pages/paramaitre/paramaitre.module").then((m) => m.ParamaitreModule)
			},
			{
				path: "contrats",
				loadChildren: () =>
					import("./views/pages/contrats/contrats.module").then((m) => m.ContratsModule)
			},
			{
				path: "juridique",
				loadChildren: () =>
					import("./views/pages/juridique/juridique.Module").then((m) => m.JuridiqueModule)
			},

			{
				path: "demande",
				loadChildren: () =>
					import("./views/pages/demande/demande.module").then((m) => m.DemandeModule)
			},

			{
				path: "affaire-judiciaire",
				loadChildren: () =>
					import("./views/pages/affaire-judiciaire/affaire-judiciaire.module").then((m) => m.AffaireJudiciaireModule)
			},

			{
				path: "statistiques",
				loadChildren: () =>
					import("./views/pages/statistiques/statistiques.module").then((m) => m.StatistiquesModule)
			},
			{
				path: "Marchee",
				loadChildren: () =>
					import("./views/pages/Marchee/Marchee.module").then(
						(m) => m.MarcheeModule
					)
			},
			{
				path: "Convention",
				loadChildren: () =>
					import("./views/pages/Convention/convention.module").then(
						(m) => m.ConventionModule
					),
			},
			{
				path: "Projet",
				loadChildren: () =>
					import("./views/pages/Projet/Projet.module").then(
						(m) => m.ProjetModule
					),
			},
			{
				path: "Programme",
				loadChildren: () =>
					import("./views/pages/programme/programme.module").then(
						(m) => m.ProgrammeModule
					),
			},



			{ path: "", redirectTo: "Marche", pathMatch: "full" },

		],
	},

	{ path: "", redirectTo: "auth", pathMatch: "full" },
	{ path: "**", redirectTo: "auth", pathMatch: "full" },
];
@NgModule({
	imports: [RouterModule.forRoot(routes, { useHash: true })],
	exports: [RouterModule],
})
export class AppRoutingModule {}
