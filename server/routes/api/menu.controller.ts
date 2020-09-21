import {Request, Response, Router} from 'express';
import {updateMenu, getMenu} from "../../service/menu.service";
import {MenuItem} from "../../types/menuItem";

export const menuRouter = Router();
const menuPath: string = '/menu';

menuRouter.get(menuPath, async (request: Request, response: Response): Promise<void> => {
    try {
        // @ts-ignore
        const menus = await getMenu(request.tenantId);
        response.send(menus);
    } catch (e) {
        response.status(500).send(e.message);
    }
});
menuRouter.post(menuPath, async (request: Request, response: Response): Promise<void> => {
    try {
        const menuItems: MenuItem[] = request.body;
        // @ts-ignore
        await updateMenu(menuItems, request.tenantId);
        response.send(menuItems);
    } catch (e) {
        response.status(500).send(e.message);
    }
});