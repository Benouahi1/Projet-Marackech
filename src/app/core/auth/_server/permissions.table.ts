export class PermissionsTable {
	public static permissions: any = [
        {
            id: 1,
            name: 'accessToPersonnelModule',
            level: 1,
            title: 'personnel module'
        },
        {
            id: 2,
            name: 'canCreatePersonnel',
            parentId: 1,
            level: 2,
            title: 'new'
        },
        {
            id: 3,
            name: 'cabReadIndexPersonnels',
            parentId: 1,
            level: 2,
            title: 'index'
        },
        {
            id: 4,
            name: 'canShowPersonnel',
            level: 2,
            parentId: 1,
            title: 'show'
        },
        {
            id: 5,
            name: 'canEditPersonnel',
            level: 2,
            parentId: 1,
            title: 'Edit'
        },
        {
            id: 6,
            name: 'canDeletePersonnel',
            level: 2,
            parentId: 1,
            title: 'Delete'
        },
        {
            id: 7,
            name: 'accessToPresenceModule',
            level: 1,
            title: 'presence module'
        },
        {
            id: 8,
            name: 'accessToPermanenceModule',
            level: 1,
            title: 'permanence module'
        },
        {
            id: 9,
            name: 'accessToNotationModule',
            level: 1,
            title: 'notation module'
        },
        {
            id: 10,
            name: 'accessToAttestationModule',
            level: 1,
            title: 'attestation module'
        },
        {
            id: 11,
            name: 'accessToCongenModule',
            level: 1,
            title: 'conge module'
        },
    ];
}
