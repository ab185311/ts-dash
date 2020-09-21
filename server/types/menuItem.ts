export class MenuItem {
    private _id: string;
    private _text: string;
    private _iconHint: string;
    private _url: string;
    private _priority: number;
    private _rolesAllowed: string[];
    private _items: MenuItem[];

    constructor(id: string, text: string, iconHint: string, url: string, priority: number, rolesAllowed: string[], items: MenuItem[]) {
        this._id = id;
        this._text = text;
        this._iconHint = iconHint;
        this._url = url;
        this._priority = priority;
        this._rolesAllowed = rolesAllowed;
        this._items = items;
    }

    get id(): string {
        return this._id;
    }

    set id(value: string) {
        this._id = value;
    }

    get text(): string {
        return this._text;
    }

    set text(value: string) {
        this._text = value;
    }

    get iconHint(): string {
        return this._iconHint;
    }

    set iconHint(value: string) {
        this._iconHint = value;
    }

    get url(): string {
        return this._url;
    }

    set url(value: string) {
        this._url = value;
    }

    get priority(): number {
        return this._priority;
    }

    set priority(value: number) {
        this._priority = value;
    }

    get rolesAllowed(): string[] {
        return this._rolesAllowed;
    }

    set rolesAllowed(value: string[]) {
        this._rolesAllowed = value;
    }

    get items(): MenuItem[] {
        return this._items;
    }

    set items(value: MenuItem[]) {
        this._items = value;
    }
}