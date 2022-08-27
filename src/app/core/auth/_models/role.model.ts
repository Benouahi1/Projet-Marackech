import { BaseModel } from '../../_base/crud';

export class Role extends BaseModel {
    id: number;
    title: string;
    description: string;
    permissions: number[];
    isCoreRole = false;

    clear(): void {
        this.id = undefined;
        this.title = '';
        this.description = '';
        this.permissions = [];
        this.isCoreRole = false;
	}
}
