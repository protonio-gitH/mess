import { Model } from "sequelize-typescript";
import { Role } from "src/roles/roles.model";
interface UserCreattionAttr {
    email: string;
    password: string;
}
export declare class User extends Model<User, UserCreattionAttr> {
    id: number;
    email: string;
    password: string;
    bannend: boolean;
    banReason: string;
    role: Role[];
}
export {};
