export default function (d, b) {
    for (const p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    //noinspection CommaExpressionJS
    d.prototype = b === null
        ? Object.create(b)
        : (__.prototype = b.prototype, new __());
}
//# sourceMappingURL=extends.js.map