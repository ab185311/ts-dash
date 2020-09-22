import envalid from 'envalid';

export default () => {
    return envalid.cleanEnv(process.env, {
        PORT: envalid.port({ default: 8080 }),
        KEY_FILE: envalid.str(),
        PROJECT_ID: envalid.str(),
    });
};
