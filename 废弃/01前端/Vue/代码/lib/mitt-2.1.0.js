! function (e, n) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = n() : "function" == typeof define && define.amd ? define(n) : (e = e || self).mitt = n()
}(this, function () {
    return function (e) {
        return {
            all: e = e || new Map,
            on: function (n, t) {
                var f = e.get(n);
                f && f.push(t) || e.set(n, [t])
            },
            off: function (n, t) {
                var f = e.get(n);
                f && f.splice(f.indexOf(t) >>> 0, 1)
            },
            emit: function (n, t) {
                (e.get(n) || []).slice().map(function (e) {
                    e(t)
                }), (e.get("*") || []).slice().map(function (e) {
                    e(n, t)
                })
            }
        }
    }
});
//# sourceMappingURL=mitt.umd.js.map