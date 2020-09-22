import envalid from 'envalid';

export default () => {
    return envalid.cleanEnv(process.env, {
        PORT: envalid.port({ default: 8080 }),
        KEY_FILE: envalid.str(),
        GOOGLE_CLOUD_PROJECT: envalid.str({ default: '' }),
    });
};
