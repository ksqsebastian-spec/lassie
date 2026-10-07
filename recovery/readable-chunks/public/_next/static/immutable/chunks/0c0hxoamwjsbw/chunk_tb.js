export function tb(t) {
    this.map = {};
    if (t instanceof tb) {
        t.forEach(function(t, e) {
            this.append(e, t);
        }, this);
    } else if (Array.isArray(t)) {
        t.forEach(function(t) {
            this.append(t[0], t[1]);
        }, this);
    } else if (t) {
        Object.getOwnPropertyNames(t).forEach(function(e) {
            this.append(e, t[e]);
        }, this);
    }
}
const ab = [
    "DELETE",
    "GET",
    "HEAD",
    "OPTIONS",
    "POST",
    "PUT"
];
export function ub(t, e) {
    let body = (e = e || {}).body;
    if (t instanceof ub) {
        if (t.bodyUsed) {
            throw new TypeError("Already read");
        }
        this.url = t.url;
        this.credentials = t.credentials;
        if (!e.headers) {
            this.headers = new tb(t.headers);
        }
        this.method = t.method;
        this.mode = t.mode;
        this.signal = t.signal;
        if (!(body || t._bodyInit == null)) {
            body = t._bodyInit;
            t.bodyUsed = true;
        }
    } else {
        this.url = String(t);
    }
    this.credentials = e.credentials || this.credentials || "same-origin";
    if (!(!e.headers && this.headers)) {
        this.headers = new tb(e.headers);
    }
    this.method = ((t)=>{
        const e = t.toUpperCase();
        if (ab.indexOf(e) > -1) {
            return e;
        }
        return t;
    })(e.method || this.method || "GET");
    this.mode = e.mode || this.mode || null;
    this.signal = e.signal || this.signal;
    this.referrer = null;
    if ((this.method === "GET" || this.method === "HEAD") && body) {
        throw new TypeError("Body not allowed for GET or HEAD requests");
    }
    this._initBody(body);
}
export function cb(t, e) {
    if (!e) {
        e = {};
    }
    this.type = "default";
    this.status = e.status === undefined ? 200 : e.status;
    this.ok = this.status >= 200 && this.status < 300;
    this.statusText = "statusText" in e ? e.statusText : "OK";
    this.headers = new tb(e.headers);
    this.url = e.url || "";
    this._initBody(t);
}
