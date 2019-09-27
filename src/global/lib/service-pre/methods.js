let methods;
(function (methods) {
    methods['GET'] = 'GET';
    methods['POST'] = 'POST';
    methods['HEAD'] = 'HEAD';
    methods['PUT'] = 'PUT';
    methods['PATCH'] = 'PATCH';
    methods['DELETE'] = 'DELETE';
})(methods || (methods = {}));
export default methods;
