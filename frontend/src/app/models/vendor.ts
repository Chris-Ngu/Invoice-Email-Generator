export class Vendor {
    private name: string;
    private street: string;
    private province: string;
    private country: string;
    private phone: string;
    private email: string;

    constructor(name: string,
        street: string,
        province: string,
        country: string,
        phone: string,
        email: string
    ) {
        this.name = name;
        this.street = street;
        this.province = province;
        this.country = province;
        this.phone = phone;
        this.email = email;
    }

}
