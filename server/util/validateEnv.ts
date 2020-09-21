import {cleanEnv, port, str} from 'envalid';

export default () => {
    return cleanEnv(process.env, {
        PORT: port({default: 8080}),
        KEY_FILE: str(),
        PROJECT_ID: str()
    });
}