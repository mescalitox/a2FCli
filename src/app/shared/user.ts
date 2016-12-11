export class User {
    private id: number;
    private name: string;
    private codename: string;

    constructor($id: number, $name: string, $codename: string) {
        this.id = $id;
        this.name = $name;
        this.codename = $codename;
    }

}
