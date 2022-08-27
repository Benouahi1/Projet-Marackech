export class PageConfig {
	public defaults: any = {



		
		//*****************ADIL******************/
		/*
		'personnel': {
			'personnel-index': {
				page: {
					title: 'الموظفين',
					translate: "MENU.LISTEPERSONNELS",
					desc: 'قائمة الموظفين'
				},
			},
			'personnel-new': {
				page: {
					title: 'الموظفين',
					translate: "MENU.AJOUTERPERSONNEL",
					desc: 'إضافة موظف'
				},
			},
			'personnel-show': {
				page: {
					title: 'الموظفين',
					translate: "PERSONNEL.TITRE_SHOW",
					desc: 'معلومات الموظف'
				},

			},
		},
		'presence': {
			page: {
				title: 'الحضور',
				translate: "MENU.PRESENCES",
				desc: ''
			},
			'presence-index': {
				page: {
					title: 'الحضور',
					translate: "MENU.LISTEPRESENCES",
					desc: 'قائمة الحضور'
				},
			},
			'presence-new': {
				page: {
					title: 'الحضور',
					desc: 'إضافة سجل الحضور'
				},
			},
			'presence-show': {
				page: {
					title: 'الحضور',
					desc: 'معلومات سجل الحضور'
				},

			},
		},
		'permanence': {
			page: {
				title: 'الدوام',
				translate: "MENU.PERMANENCES",
				desc: ''
			},
			'permanence-index': {
				page: {
					title: 'الدوام',
					translate: "MENU.LISTESENCES",
					desc: 'قائمة الدوام'
				},
			},
			'permanence-new': {
				page: {
					title: 'الدوام',
					desc: 'إضافة دوام'
				},
			},
			'permanence-show': {
				page: {
					title: 'الدوام',
					desc: 'معلومات  الدوام'
				},

			},
		},
		*/
		//*****************NAIMA******************/
	/* 	'affaires-conseil': {
			page: {
				title: 'المجالس',
				desc: 'Latest updates and statistic charts'
			},
			'session-list': {
				page: {
					title: ' الدورات',
					desc: 'لائحة الدورات'
				},
			},
			'reunion-commission-form': {
				page: {
					title: '  اجتماع اللجان ',
					desc: 'إضافة اجتماع اللجنة  '
				},

			},
			'commission-conseil-form': {
				page: {
					title: ' اللجان',
					desc: 'إضافة لجنة  '
				},

			},
			'point-form': {
				page: {
					title: ' النقاط',
					desc: 'إضافة نقطة   '
				},

			},
		},
		'reclamations': {
			page: {
				title: 'الشكايات',
				desc: 'Latest updates and statistic charts'
			},
			'reclamation-detail': {
				page: {
					title: ' الشكايات',
					desc: 'لائحةالشكايات'
				},
			},
			'reclamations-form': {
				page: {
					title: ' الشكايات',
					desc: 'إضافة شكاية'
				},
			},
			'reclamations-list': {
				page: {
					title: ' الشكايات',
					desc: 'تفاصيل الشكاية '
				},

			},
		},
		'personne-physique': {
			page: {
				title: 'الأشخاص الماديين',
				desc: 'Latest updates and statistic charts'
			},
			'personne-physique-list': {
				page: {
					title: ' الأشخاص الماديين',
					desc: ' لائحة الأشخاص الماديين'
				},
			},
			'personne-physique-form': {
				page: {
					title: ' الأشخاص الماديين',
					desc: 'إضافة شخص مادي'
				},
			},
			'personne-physique-detail': {
				page: {
					title: ' الأشخاص الماديين',
					desc: 'تفاصيل الشخص المادي '
				},

			},
		}, */
		//******************RACHID*****************/
		error: {
			404: {
				page: { title: "404 Not Found", desc: "", subheader: false }
			},
			403: {
				page: {
					title: "403 Access Forbidden",
					desc: "",
					subheader: false
				}
			}
		},
	};

	public get configs(): any {
		return this.defaults;
	}
}
