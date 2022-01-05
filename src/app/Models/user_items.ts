import { User } from "./user";
import { Item } from "./item";

export interface User_items
{
    user: User;
    items: Item[];
}