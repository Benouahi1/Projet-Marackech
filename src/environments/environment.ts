// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
	production: false,
	isMockEnabled: false, // You have to switch this, when your real back-end is done
	authTokenKey: 'accessToken', //'authce9d77b308c149d5992a80073637e4d5'

	// ------------------------ NAIMA SAHIH-----------------
	reclamationUrl: "http://localhost:9101/Reclamation/",
	reservationUrl: "http://localhost:9101/Reservation/",
	autorisationUrl: "http://localhost:9101/Autorisation/Autorisation/",
	bienReservationUrl:"http://localhost:9101/BiensReservation/",
	espaceReservationUrl:"http://localhost:9101/EspacesReservation/",
    bienUrl : 'http://localhost:9101/Autorisation/Biens/',
    espaceUrl : 'http://localhost:9101/EspaceReservation/',
	ppsourceUrl: "http://localhost:9101/Ppsource/PPSource",
	pmsourceUrl: "http://localhost:9101/Pmsource/PMSource",
	marcheUrl: "http://localhost:9101/Marche",
	affaireConseilUrl: "http://localhost:9101/AffaireConseil/AffaireConseil/",
	// ------------------------ ADIL MOUCHTAKI-----------------
	personnelUrl : 'http://localhost:9101/Personnel',
	attestationUrl:'http://localhost:9101/Attestation',
	notationUrl:'http://localhost:9101/Notation',
	permanenceUrl : 'http://localhost:9101/Permanence',
	presenceUrl:'http://localhost:9101/Presence',
	userUrl:'http://localhost:9101/Users',
	organisationUrl:'http://localhost:9101/Organisation',
	patrimoineUrl: 'http://localhost:9101/PC',
	immatriculationUrl: 'http://localhost:9101/Immatriculation',
	biencommunalUrl: 'http://localhost:9101/BC',
	projetUrl: 'http://localhost:9101/Projet',

	// ------------------------ RACHID SABRI--------------------
	API_BUREAU_ORDRE_URL: "http://localhost:9101/bureau-order",
	API_IMMOBILISATION_URL: "http://localhost:9101/immobilisation",
	API_INSERT_PUB_URL: "http://localhost:9101/insertion-publicitaire",
	API_ASSOCIATION_URL: "http://localhost:9101/association",
	API_SUBVENTION_URL: "http://localhost:9101/subvention",
	API_CONVENTION: "http://localhost:9101/convention",
	API_PROJET_PARTENARIAT: "http://localhost:9101/projet-partenariat",
	API_ACTIVITE_URL: "http://localhost:9101/activite",
	API_LOCAUX_URL: "http://localhost:9101/locaux",
	API_INTERVENTION_URL: "http://localhost:9101/intervention-rapide",
	API_PROJET_URBANISME_URL: "http://localhost:9101/projet-urbanisme",
	API_ALFRESCO_URL:"http://localhost:9101/alfresco",


	/// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
	/*
	reclamationUrl : 'http://marrakech.jamaati.hvc.ma:9101/gateway/Reclamation/Reclamations/Reclamation/',
	ppsourceUrl : 'http://marrakech.jamaati.hvc.ma:9101/gateway/Ppsource/PpSource/PPSource',
	pmsourceUrl:'http://marrakech.jamaati.hvc.ma:9101/gateway/Pmsource/PmSource/PMSource',
	reservationUrl:'http://marrakech.jamaati.hvc.ma:9101/gateway/Reservation/Reservations/Reservation/' ,
	bienReservationUrl:"http://marrakech.jamaati.hvc.ma:9101/gateway/Reservation/Reservations/BiensReservation/",
	espaceReservationUrl:"http://marrakech.jamaati.hvc.ma:9101/gateway/Reservation/Reservations/EspacesReservation/",
	bienUrl : 'http://marrakech.jamaati.hvc.ma:9101/gateway/Autorisation/Autorisations/Biens/',
    espaceUrl : 'http://marrakech.jamaati.hvc.ma:9101/gateway/Autorisation/Autorisations/EspaceReservation/',
	autorisationUrl:'http://marrakech.jamaati.hvc.ma:9101/gateway/Autorisation/Autorisations/Autorisation/',
	marcheUrl:'http://marrakech.jamaati.hvc.ma:9101/gateway/Marche/Marches',
	affaireConseilUrl:'http://marrakech.jamaati.hvc.ma:9101/gateway/AffaireConseil/AffairesConseil/AffaireConseil/',
	personnelUrl : 'http://marrakech.jamaati.hvc.ma:9101/gateway/Personnel/Personnel',
	attestationUrl:'http://marrakech.jamaati.hvc.ma:9101/gateway/Attestation/Attestation' ,
	notationUrl:'http://marrakech.jamaati.hvc.ma:9101/gateway/Notation/Notation',
	permanenceUrl : 'http://marrakech.jamaati.hvc.ma:9101/gateway/Permanence/Permanence',
	presenceUrl:'http://marrakech.jamaati.hvc.ma:9101/gateway/Presence/Presence',
	userUrl:'http://marrakech.jamaati.hvc.ma:9101/gateway/Users/Users',
	organisationUrl:'http://marrakech.jamaati.hvc.ma:9101/gateway/Organisation/Organisation',
	patrimoineUrl: 'http://marrakech.jamaati.hvc.ma:9101/gateway/PC/PatrimoineCommunal',
	immatriculationUrl: 'http://marrakech.jamaati.hvc.ma:9101/gateway/Immatriculation/Immatriculation',
	biencommunalUrl: 'http://marrakech.jamaati.hvc.ma:9101/gateway/BC/SuiviBienCommunal',
	projetUrl: 'http://marrakech.jamaati.hvc.ma:9101/gateway/Projet/Projet',
	// ------------------------ RACHID SABRI---------------------[Url back-end]
	API_BUREAU_ORDRE_URL:'http://marrakech.jamaati.hvc.ma:9101/gateway/bureau-order/bureau-order',
	API_IMMOBILISATION_URL:'http://marrakech.jamaati.hvc.ma:9101/gateway/immobilisation/immobilisation',
	API_INSERT_PUB_URL:'http://marrakech.jamaati.hvc.ma:9101/gateway/insertion-publicitaire/insertion-publicitaire',
	API_ASSOCIATION_URL:'http://marrakech.jamaati.hvc.ma:9101/gateway/association/association',
	API_SUBVENTION_URL:'http://marrakech.jamaati.hvc.ma:9101/gateway/subvention/subvention',
	API_CONVENTION:'http://marrakech.jamaati.hvc.ma:9101/gateway/convention/convention',
	API_PROJET_PARTENARIAT:'http://marrakech.jamaati.hvc.ma:9101/gateway/projet-partenariat/projet-partenariat',
	API_ACTIVITE_URL:'http://marrakech.jamaati.hvc.ma:9101/gateway/activite/activite',
	API_LOCAUX_URL:'http://marrakech.jamaati.hvc.ma:9101/gateway/locaux/locaux',
	API_INTERVENTION_URL:'http://marrakech.jamaati.hvc.ma:9101/gateway/intervention-rapide/intervention-rapide',
	API_PROJET_URBANISME_URL:'http://marrakech.jamaati.hvc.ma:9101/gateway/projet-urbanisme/projet-urbanisme',
	API_ALFRESCO_URL:'http://marrakech.jamaati.hvc.ma:9101/gateway/alfresco/alfresco',
	*/
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
