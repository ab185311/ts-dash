import firestore from '@google-cloud/firestore';
import logger from '../util/logger';
import validateEnv from '../util/validateEnv';

const { KEY_FILE, PROJECT_ID } = validateEnv();

export class CloudStore {
    static COLLECTION = 'menus';
    static firestore = new firestore.Firestore({
        projectId: PROJECT_ID,
        keyFilename: KEY_FILE,
    });

    static async updateMenu(menu) {
        logger.debug(menu);
        const menusRef = this.firestore
            .collection(this.COLLECTION)
            .doc(menu.tenantId);
        await menusRef.set(Object.assign({}, menu));
    }

    static async getMenu(tenantId) {
        logger.debug(tenantId);
        const menusRef = this.firestore
            .collection(this.COLLECTION)
            .doc(tenantId);
        const doc = await menusRef.get();
        if (doc.exists) {
            return doc.data();
        } else {
            logger.warn('No menu exists for Tenant');
        }
    }
}
