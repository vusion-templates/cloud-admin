import moduleOrder from './moduleOrder';
const cache = {};
const moduleConfig = {};
function importAll(r) {
    r.keys().forEach((key) => {
        const [moduleDir, moduleEnv] = key.replace(/(.*?)\/module\/(.*?)\.js/, '$1||$2').split('||');
        const envs = cache[moduleDir] = cache[moduleDir] || {};
        envs[moduleEnv] = r(key).default;
    });
}

// 这里会解析 views/ 目录下 module/**/*.js 文件，如果需要添加新的路由，请按此方案命名
importAll(require.context('./', true, /module\/(.*?)\.js$/));

Object.keys(cache).forEach((key) => {
    const moduleEnvs = cache[key];
    if (moduleEnvs.base && moduleEnvs.base.module) {
        moduleConfig[moduleEnvs.base.module] = moduleEnvs.base;
    } else {
        console.error(key + ' 模块的 module/base.js 不存在，或未声明 module 信息');
    }
});

const sort = function (modules, moduleOrder) {
    return moduleOrder.map((moduleKey) => {
        if (typeof moduleKey === 'string' && moduleKey !== '|') {
            return modules[moduleKey];
        } else {
            return moduleKey;
        }
    });
};
export default moduleConfig;
export const sortModuleConfig = sort(moduleConfig, moduleOrder);
