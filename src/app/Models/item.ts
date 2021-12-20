import { ItemGEInfo } from "./itemgeinfo";

export interface Item
{
    id: number;
    name: string;
    rsid: number;
    geinfo: ItemGEInfo;
}