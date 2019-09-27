import methods from '../methods';
import { resolvePath } from './utils';
const bodyMethods = [methods.PATCH, methods.POST, methods.PUT];
export default function mixins(serviceConfig, apiSchema, requestObj) {
    const apiSchemaURL = apiSchema.url;
    requestObj = requestObj || {};
    serviceConfig = serviceConfig || {};
    const outURL = {
        ...apiSchemaURL,
    };
    const out = {
        url: outURL,
        config: {
            ...serviceConfig.config,
            ...apiSchema.config,
            ...requestObj.config,
        },
    };
    if (requestObj.path) {
        outURL.path = resolvePath(apiSchemaURL.path, requestObj.path);
    }
    if (serviceConfig.prefix) {
        outURL.path = serviceConfig.prefix + outURL.path;
    }
    if (bodyMethods.includes(outURL.method)) {
        outURL.body = {
            ...apiSchemaURL.body,
            ...requestObj.body,
        };
    }
    if (apiSchemaURL.query || requestObj.query) {
        outURL.query = {
            ...apiSchemaURL.query,
            ...requestObj.query,
        };
    }
    if (apiSchemaURL.headers || requestObj.headers || serviceConfig.headers) {
        outURL.headers = {
            ...serviceConfig.headers,
            ...apiSchemaURL.headers,
            ...requestObj.headers,
        };
    }
    return out;
}
