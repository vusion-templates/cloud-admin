import mixins from './util/mixins';
class Service {
    constructor(apiSchemaList, serviceConfig, requester) {
        this.serviceConfig = serviceConfig;
        this.apiSchemaList = apiSchemaList;
        this.requester = requester;
        this.initService();
    }

    initService() {
        Object.entries(this.apiSchemaList).forEach(([apiName, apiSchema]) => {
            this[apiName] = function (requestObj) {
                return this.requester(mixins(this.serviceConfig, apiSchema, requestObj));
            };
            if (Object.defineProperty) {
                Object.defineProperty(this, '$' + apiName, {
                    value: this[apiName],
                    configurable: false,
                    writable: false,
                    enumerable: false,
                });
            } else {
                this['$' + apiName] = this[apiName];
            }
        });
    }
}
export default Service;
