import {MenuItem} from "./menuItem";

export class Menu {
    private _menuItems: MenuItem[];
    private _tenantId: string;

    constructor(menuItems: MenuItem[], tenantId: string) {
        this._menuItems = menuItems;
        this._tenantId = tenantId;
    }

    get menuItems(): MenuItem[] {
        return this._menuItems;
    }

    set menuItems(value: MenuItem[]) {
        this._menuItems = value;
    }

    get tenantId(): string {
        return this._tenantId;
    }

    set tenantId(value: string) {
        this._tenantId = value;
    }
};