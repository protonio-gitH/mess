import { BelongsToMany, Column, DataType, Model, Table } from "sequelize-typescript";
import { Role } from "src/roles/roles.model";
import { UserRoles } from "src/roles/user-roles.model";
interface UserCreattionAttr{
    email:string;
    password:string
}
@Table({tableName:'users'})
export class User extends Model <User,UserCreattionAttr>{
    @Column({type:DataType.INTEGER,unique:true,autoIncrement:true,primaryKey:true})
    id:number;
    @Column({type:DataType.STRING,unique:true,allowNull:false})
    email:string;
    @Column({type:DataType.STRING,allowNull:true})
    password:string;
    @Column({type:DataType.BOOLEAN,defaultValue:false})
    bannend:boolean;
    @Column({type:DataType.STRING,allowNull:true})
    banReason:string;

    @BelongsToMany(()=>Role,()=>UserRoles)
    role:Role[]
}
