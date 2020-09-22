import express from 'express';
import { getMenu, updateMenu } from '../../service/menu.service';

export const menuRouter = express.Router();
const menuPath = '/menu';

menuRouter.get(menuPath, async (request, response) => {
    try {
        const menus = await getMenu(request.tenantId);
        response.send(menus);
    } catch (e) {
        response.status(500).send(e.message);
    }
});
menuRouter.post(menuPath, async (request, response) => {
    try {
        const menuItems = request.body;
        // @ts-ignore
        await updateMenu(menuItems, request.tenantId);
        response.send(menuItems);
    } catch (e) {
        response.status(500).send(e.message);
    }
});
