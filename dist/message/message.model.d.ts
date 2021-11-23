import { Model } from "sequelize-typescript";
import { User } from "src/users/user.model";
interface RoleCreattionAttr {
    value: string;
    description: string;
}
export declare class Role extends Model<Role, RoleCreattionAttr> {
    id: number;
    value: string;
    description: string;
    users: User[];
}
export {};
