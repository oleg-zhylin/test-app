import { Injectable } from "@angular/core";

@Injectable()
export class UserEntity {
    public firstName: string;
    public lastName: string;
    public age: number;

    constructor (data: any) {
        if (this.isString(data.firstName)) {
            this.firstName = data.firstName;
        }
        if (this.isString(data.lastName)) {
            this.lastName = data.lastName;
        }
        
        this.age = data.age;
    }

    isString (str) {
        if (str && typeof str === 'string' && str.length > 0 && str != 'undefined') {
            return true;
        }
        throw "Validation Error";
    }
}

