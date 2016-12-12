export class User {
    public id: number;
    public name: string;
    public codename: string;

    constructor($id: number, $name: string, $codename: string) {
        this.id = $id;
        this.name = $name;
        this.codename = $codename;
    }

}
