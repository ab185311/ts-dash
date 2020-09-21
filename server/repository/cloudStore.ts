import {DocumentReference, Firestore} from "@google-cloud/firestore";
import {Menu} from "../types/menu";
import logger from "../util/logger";
import validateEnv from "../util/validateEnv";

const {KEY_FILE, PROJECT_ID} = validateEnv();

export class CloudStore {

    private static COLLECTION: string = 'menus';
    private static firestore: Firestore = new Firestore({
        projectId: PROJECT_ID,
        keyFilename: KEY_FILE
    });

    public static async updateMenu(menu: Menu): Promise<any> {
        logger.debug(menu);
        const menusRef: DocumentReference = this.firestore.collection(this.COLLECTION).doc(menu.tenantId);
        await menusRef.set(Object.assign({}, menu));
    }

    public static async getMenu(tenantId: string): Promise<any> {
        logger.debug(tenantId);
        const menusRef: DocumentReference = this.firestore.collection(this.COLLECTION).doc(tenantId);
        const doc = await menusRef.get();
        if (doc.exists) {
            return doc.data();
        } else {
            logger.warn('No menu exists for Tenant');
        }
    }
}