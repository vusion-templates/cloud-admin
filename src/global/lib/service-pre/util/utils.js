export function resolvePath(url, path) {
    if (path)
        return url.replace(/\{(.*?)\}/g, (a, b) => (path[b] || a));
    return url;
}
