import {MenuItem} from "../types/menuItem";
import {Menu} from "../types/menu";
import {CloudStore} from "../repository/cloudStore";

const updateMenu = async (menu: MenuItem[], tenantId: string): Promise<any> =>
    await CloudStore.updateMenu(new Menu(menu, tenantId));

const getMenu = async (tenantId: string): Promise<any> =>
    await CloudStore.getMenu(tenantId);

export {
    updateMenu,
    getMenu
}