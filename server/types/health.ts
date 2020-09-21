export default class Health {
    private _status: string;

    constructor(status: string) {
        this._status = status;
    }

    get status(): string {
        return this._status;
    }

    set status(value: string) {
        this._status = value;
    }
}