import { createRequire } from "node:module";
var __create = Object.create;
var __getProtoOf = Object.getPrototypeOf;
var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __toESM = (mod, isNodeMode, target) => {
  target = mod != null ? __create(__getProtoOf(mod)) : {};
  const to = isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target;
  for (let key of __getOwnPropNames(mod))
    if (!__hasOwnProp.call(to, key))
      __defProp(to, key, {
        get: () => mod[key],
        enumerable: true
      });
  return to;
};
var __commonJS = (cb, mod) => () => (mod || cb((mod = { exports: {} }).exports, mod), mod.exports);
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, {
      get: all[name],
      enumerable: true,
      configurable: true,
      set: (newValue) => all[name] = () => newValue
    });
};
var __require = /* @__PURE__ */ createRequire(import.meta.url);

// node_modules/fast-decode-uri-component/index.js
var require_fast_decode_uri_component = __commonJS((exports, module) => {
  var UTF8_ACCEPT = 12;
  var UTF8_REJECT = 0;
  var UTF8_DATA = [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    4,
    4,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    6,
    7,
    7,
    7,
    7,
    7,
    7,
    7,
    7,
    7,
    7,
    7,
    7,
    8,
    7,
    7,
    10,
    9,
    9,
    9,
    11,
    4,
    4,
    4,
    4,
    4,
    4,
    4,
    4,
    4,
    4,
    4,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    12,
    0,
    0,
    0,
    0,
    24,
    36,
    48,
    60,
    72,
    84,
    96,
    0,
    12,
    12,
    12,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    24,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    24,
    24,
    24,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    24,
    24,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    48,
    48,
    48,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    48,
    48,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    48,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    127,
    63,
    63,
    63,
    0,
    31,
    15,
    15,
    15,
    7,
    7,
    7
  ];
  function decodeURIComponent2(uri) {
    var percentPosition = uri.indexOf("%");
    if (percentPosition === -1)
      return uri;
    var length = uri.length;
    var decoded = "";
    var last = 0;
    var codepoint = 0;
    var startOfOctets = percentPosition;
    var state = UTF8_ACCEPT;
    while (percentPosition > -1 && percentPosition < length) {
      var high = hexCodeToInt(uri[percentPosition + 1], 4);
      var low = hexCodeToInt(uri[percentPosition + 2], 0);
      var byte = high | low;
      var type = UTF8_DATA[byte];
      state = UTF8_DATA[256 + state + type];
      codepoint = codepoint << 6 | byte & UTF8_DATA[364 + type];
      if (state === UTF8_ACCEPT) {
        decoded += uri.slice(last, startOfOctets);
        decoded += codepoint <= 65535 ? String.fromCharCode(codepoint) : String.fromCharCode(55232 + (codepoint >> 10), 56320 + (codepoint & 1023));
        codepoint = 0;
        last = percentPosition + 3;
        percentPosition = startOfOctets = uri.indexOf("%", last);
      } else if (state === UTF8_REJECT) {
        return null;
      } else {
        percentPosition += 3;
        if (percentPosition < length && uri.charCodeAt(percentPosition) === 37)
          continue;
        return null;
      }
    }
    return decoded + uri.slice(last);
  }
  var HEX = {
    "0": 0,
    "1": 1,
    "2": 2,
    "3": 3,
    "4": 4,
    "5": 5,
    "6": 6,
    "7": 7,
    "8": 8,
    "9": 9,
    a: 10,
    A: 10,
    b: 11,
    B: 11,
    c: 12,
    C: 12,
    d: 13,
    D: 13,
    e: 14,
    E: 14,
    f: 15,
    F: 15
  };
  function hexCodeToInt(c, shift) {
    var i = HEX[c];
    return i === undefined ? 255 : i << shift;
  }
  module.exports = decodeURIComponent2;
});

// node_modules/cookie/dist/index.js
var require_dist = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.parse = parse2;
  exports.serialize = serialize;
  var cookieNameRegExp = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/;
  var cookieValueRegExp = /^[\u0021-\u003A\u003C-\u007E]*$/;
  var domainValueRegExp = /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i;
  var pathValueRegExp = /^[\u0020-\u003A\u003D-\u007E]*$/;
  var __toString = Object.prototype.toString;
  var NullObject = /* @__PURE__ */ (() => {
    const C = function() {};
    C.prototype = Object.create(null);
    return C;
  })();
  function parse2(str, options) {
    const obj = new NullObject;
    const len = str.length;
    if (len < 2)
      return obj;
    const dec = options?.decode || decode2;
    let index = 0;
    do {
      const eqIdx = str.indexOf("=", index);
      if (eqIdx === -1)
        break;
      const colonIdx = str.indexOf(";", index);
      const endIdx = colonIdx === -1 ? len : colonIdx;
      if (eqIdx > endIdx) {
        index = str.lastIndexOf(";", eqIdx - 1) + 1;
        continue;
      }
      const keyStartIdx = startIndex(str, index, eqIdx);
      const keyEndIdx = endIndex(str, eqIdx, keyStartIdx);
      const key = str.slice(keyStartIdx, keyEndIdx);
      if (obj[key] === undefined) {
        let valStartIdx = startIndex(str, eqIdx + 1, endIdx);
        let valEndIdx = endIndex(str, endIdx, valStartIdx);
        const value = dec(str.slice(valStartIdx, valEndIdx));
        obj[key] = value;
      }
      index = endIdx + 1;
    } while (index < len);
    return obj;
  }
  function startIndex(str, index, max) {
    do {
      const code = str.charCodeAt(index);
      if (code !== 32 && code !== 9)
        return index;
    } while (++index < max);
    return max;
  }
  function endIndex(str, index, min) {
    while (index > min) {
      const code = str.charCodeAt(--index);
      if (code !== 32 && code !== 9)
        return index + 1;
    }
    return min;
  }
  function serialize(name, val, options) {
    const enc = options?.encode || encodeURIComponent;
    if (!cookieNameRegExp.test(name)) {
      throw new TypeError(`argument name is invalid: ${name}`);
    }
    const value = enc(val);
    if (!cookieValueRegExp.test(value)) {
      throw new TypeError(`argument val is invalid: ${val}`);
    }
    let str = name + "=" + value;
    if (!options)
      return str;
    if (options.maxAge !== undefined) {
      if (!Number.isInteger(options.maxAge)) {
        throw new TypeError(`option maxAge is invalid: ${options.maxAge}`);
      }
      str += "; Max-Age=" + options.maxAge;
    }
    if (options.domain) {
      if (!domainValueRegExp.test(options.domain)) {
        throw new TypeError(`option domain is invalid: ${options.domain}`);
      }
      str += "; Domain=" + options.domain;
    }
    if (options.path) {
      if (!pathValueRegExp.test(options.path)) {
        throw new TypeError(`option path is invalid: ${options.path}`);
      }
      str += "; Path=" + options.path;
    }
    if (options.expires) {
      if (!isDate(options.expires) || !Number.isFinite(options.expires.valueOf())) {
        throw new TypeError(`option expires is invalid: ${options.expires}`);
      }
      str += "; Expires=" + options.expires.toUTCString();
    }
    if (options.httpOnly) {
      str += "; HttpOnly";
    }
    if (options.secure) {
      str += "; Secure";
    }
    if (options.partitioned) {
      str += "; Partitioned";
    }
    if (options.priority) {
      const priority = typeof options.priority === "string" ? options.priority.toLowerCase() : undefined;
      switch (priority) {
        case "low":
          str += "; Priority=Low";
          break;
        case "medium":
          str += "; Priority=Medium";
          break;
        case "high":
          str += "; Priority=High";
          break;
        default:
          throw new TypeError(`option priority is invalid: ${options.priority}`);
      }
    }
    if (options.sameSite) {
      const sameSite = typeof options.sameSite === "string" ? options.sameSite.toLowerCase() : options.sameSite;
      switch (sameSite) {
        case true:
        case "strict":
          str += "; SameSite=Strict";
          break;
        case "lax":
          str += "; SameSite=Lax";
          break;
        case "none":
          str += "; SameSite=None";
          break;
        default:
          throw new TypeError(`option sameSite is invalid: ${options.sameSite}`);
      }
    }
    return str;
  }
  function decode2(str) {
    if (str.indexOf("%") === -1)
      return str;
    try {
      return decodeURIComponent(str);
    } catch (e) {
      return str;
    }
  }
  function isDate(val) {
    return __toString.call(val) === "[object Date]";
  }
});

// node_modules/xmlhttprequest-ssl/lib/XMLHttpRequest.js
var require_XMLHttpRequest = __commonJS((exports, module) => {
  var fs = __require("fs");
  var Url = __require("url");
  var spawn = __require("child_process").spawn;
  module.exports = XMLHttpRequest2;
  XMLHttpRequest2.XMLHttpRequest = XMLHttpRequest2;
  function XMLHttpRequest2(opts) {
    opts = opts || {};
    var self = this;
    var http = __require("http");
    var https = __require("https");
    var request;
    var response;
    var settings = {};
    var disableHeaderCheck = false;
    var defaultHeaders = {
      "User-Agent": "node-XMLHttpRequest",
      Accept: "*/*"
    };
    var headers = Object.assign({}, defaultHeaders);
    var forbiddenRequestHeaders = [
      "accept-charset",
      "accept-encoding",
      "access-control-request-headers",
      "access-control-request-method",
      "connection",
      "content-length",
      "content-transfer-encoding",
      "cookie",
      "cookie2",
      "date",
      "expect",
      "host",
      "keep-alive",
      "origin",
      "referer",
      "te",
      "trailer",
      "transfer-encoding",
      "upgrade",
      "via"
    ];
    var forbiddenRequestMethods = [
      "TRACE",
      "TRACK",
      "CONNECT"
    ];
    var sendFlag = false;
    var errorFlag = false;
    var abortedFlag = false;
    var listeners = {};
    this.UNSENT = 0;
    this.OPENED = 1;
    this.HEADERS_RECEIVED = 2;
    this.LOADING = 3;
    this.DONE = 4;
    this.readyState = this.UNSENT;
    this.onreadystatechange = null;
    this.responseText = "";
    this.responseXML = "";
    this.response = Buffer.alloc(0);
    this.status = null;
    this.statusText = null;
    var isAllowedHttpHeader = function(header) {
      return disableHeaderCheck || header && forbiddenRequestHeaders.indexOf(header.toLowerCase()) === -1;
    };
    var isAllowedHttpMethod = function(method) {
      return method && forbiddenRequestMethods.indexOf(method) === -1;
    };
    this.open = function(method, url, async, user, password) {
      this.abort();
      errorFlag = false;
      abortedFlag = false;
      if (!isAllowedHttpMethod(method)) {
        throw new Error("SecurityError: Request method not allowed");
      }
      settings = {
        method,
        url: url.toString(),
        async: typeof async !== "boolean" ? true : async,
        user: user || null,
        password: password || null
      };
      setState(this.OPENED);
    };
    this.setDisableHeaderCheck = function(state) {
      disableHeaderCheck = state;
    };
    this.setRequestHeader = function(header, value) {
      if (this.readyState != this.OPENED) {
        throw new Error("INVALID_STATE_ERR: setRequestHeader can only be called when state is OPEN");
      }
      if (!isAllowedHttpHeader(header)) {
        console.warn('Refused to set unsafe header "' + header + '"');
        return false;
      }
      if (sendFlag) {
        throw new Error("INVALID_STATE_ERR: send flag is true");
      }
      headers[header] = value;
      return true;
    };
    this.getResponseHeader = function(header) {
      if (typeof header === "string" && this.readyState > this.OPENED && response.headers[header.toLowerCase()] && !errorFlag) {
        return response.headers[header.toLowerCase()];
      }
      return null;
    };
    this.getAllResponseHeaders = function() {
      if (this.readyState < this.HEADERS_RECEIVED || errorFlag) {
        return "";
      }
      var result = "";
      for (var i in response.headers) {
        if (i !== "set-cookie" && i !== "set-cookie2") {
          result += i + ": " + response.headers[i] + `\r
`;
        }
      }
      return result.substr(0, result.length - 2);
    };
    this.getRequestHeader = function(name) {
      if (typeof name === "string" && headers[name]) {
        return headers[name];
      }
      return "";
    };
    this.send = function(data) {
      if (this.readyState != this.OPENED) {
        throw new Error("INVALID_STATE_ERR: connection must be opened before send() is called");
      }
      if (sendFlag) {
        throw new Error("INVALID_STATE_ERR: send has already been called");
      }
      var ssl = false, local = false;
      var url = Url.parse(settings.url);
      var host;
      switch (url.protocol) {
        case "https:":
          ssl = true;
        case "http:":
          host = url.hostname;
          break;
        case "file:":
          local = true;
          break;
        case undefined:
        case "":
          host = "localhost";
          break;
        default:
          throw new Error("Protocol not supported.");
      }
      if (local) {
        if (settings.method !== "GET") {
          throw new Error("XMLHttpRequest: Only GET method is supported");
        }
        if (settings.async) {
          fs.readFile(unescape(url.pathname), function(error, data2) {
            if (error) {
              self.handleError(error, error.errno || -1);
            } else {
              self.status = 200;
              self.responseText = data2.toString("utf8");
              self.response = data2;
              setState(self.DONE);
            }
          });
        } else {
          try {
            this.response = fs.readFileSync(unescape(url.pathname));
            this.responseText = this.response.toString("utf8");
            this.status = 200;
            setState(self.DONE);
          } catch (e) {
            this.handleError(e, e.errno || -1);
          }
        }
        return;
      }
      var port = url.port || (ssl ? 443 : 80);
      var uri2 = url.pathname + (url.search ? url.search : "");
      headers["Host"] = host;
      if (!(ssl && port === 443 || port === 80)) {
        headers["Host"] += ":" + url.port;
      }
      if (settings.user) {
        if (typeof settings.password == "undefined") {
          settings.password = "";
        }
        var authBuf = new Buffer(settings.user + ":" + settings.password);
        headers["Authorization"] = "Basic " + authBuf.toString("base64");
      }
      if (settings.method === "GET" || settings.method === "HEAD") {
        data = null;
      } else if (data) {
        headers["Content-Length"] = Buffer.isBuffer(data) ? data.length : Buffer.byteLength(data);
        var headersKeys = Object.keys(headers);
        if (!headersKeys.some(function(h) {
          return h.toLowerCase() === "content-type";
        })) {
          headers["Content-Type"] = "text/plain;charset=UTF-8";
        }
      } else if (settings.method === "POST") {
        headers["Content-Length"] = 0;
      }
      var agent = opts.agent || false;
      var options = {
        host,
        port,
        path: uri2,
        method: settings.method,
        headers,
        agent
      };
      if (ssl) {
        options.pfx = opts.pfx;
        options.key = opts.key;
        options.passphrase = opts.passphrase;
        options.cert = opts.cert;
        options.ca = opts.ca;
        options.ciphers = opts.ciphers;
        options.rejectUnauthorized = opts.rejectUnauthorized === false ? false : true;
      }
      errorFlag = false;
      if (settings.async) {
        var doRequest = ssl ? https.request : http.request;
        sendFlag = true;
        self.dispatchEvent("readystatechange");
        var responseHandler = function(resp2) {
          response = resp2;
          if (response.statusCode === 302 || response.statusCode === 303 || response.statusCode === 307) {
            settings.url = response.headers.location;
            var url2 = Url.parse(settings.url);
            host = url2.hostname;
            var newOptions = {
              hostname: url2.hostname,
              port: url2.port,
              path: url2.path,
              method: response.statusCode === 303 ? "GET" : settings.method,
              headers
            };
            if (ssl) {
              newOptions.pfx = opts.pfx;
              newOptions.key = opts.key;
              newOptions.passphrase = opts.passphrase;
              newOptions.cert = opts.cert;
              newOptions.ca = opts.ca;
              newOptions.ciphers = opts.ciphers;
              newOptions.rejectUnauthorized = opts.rejectUnauthorized === false ? false : true;
            }
            request = doRequest(newOptions, responseHandler).on("error", errorHandler);
            request.end();
            return;
          }
          setState(self.HEADERS_RECEIVED);
          self.status = response.statusCode;
          response.on("data", function(chunk) {
            if (chunk) {
              var data2 = Buffer.from(chunk);
              self.response = Buffer.concat([self.response, data2]);
            }
            if (sendFlag) {
              setState(self.LOADING);
            }
          });
          response.on("end", function() {
            if (sendFlag) {
              sendFlag = false;
              setState(self.DONE);
              self.responseText = self.response.toString("utf8");
            }
          });
          response.on("error", function(error) {
            self.handleError(error);
          });
        };
        var errorHandler = function(error) {
          if (request.reusedSocket && error.code === "ECONNRESET")
            return doRequest(options, responseHandler).on("error", errorHandler);
          self.handleError(error);
        };
        request = doRequest(options, responseHandler).on("error", errorHandler);
        if (opts.autoUnref) {
          request.on("socket", (socket) => {
            socket.unref();
          });
        }
        if (data) {
          request.write(data);
        }
        request.end();
        self.dispatchEvent("loadstart");
      } else {
        var contentFile = ".node-xmlhttprequest-content-" + process.pid;
        var syncFile = ".node-xmlhttprequest-sync-" + process.pid;
        fs.writeFileSync(syncFile, "", "utf8");
        var execString = "var http = require('http'), https = require('https'), fs = require('fs');" + "var doRequest = http" + (ssl ? "s" : "") + ".request;" + "var options = " + JSON.stringify(options) + ";" + "var responseText = '';" + "var responseData = Buffer.alloc(0);" + "var req = doRequest(options, function(response) {" + "response.on('data', function(chunk) {" + "  var data = Buffer.from(chunk);" + "  responseText += data.toString('utf8');" + "  responseData = Buffer.concat([responseData, data]);" + "});" + "response.on('end', function() {" + "fs.writeFileSync('" + contentFile + "', JSON.stringify({err: null, data: {statusCode: response.statusCode, headers: response.headers, text: responseText, data: responseData.toString('base64')}}), 'utf8');" + "fs.unlinkSync('" + syncFile + "');" + "});" + "response.on('error', function(error) {" + "fs.writeFileSync('" + contentFile + "', 'NODE-XMLHTTPREQUEST-ERROR:' + JSON.stringify(error), 'utf8');" + "fs.unlinkSync('" + syncFile + "');" + "});" + "}).on('error', function(error) {" + "fs.writeFileSync('" + contentFile + "', 'NODE-XMLHTTPREQUEST-ERROR:' + JSON.stringify(error), 'utf8');" + "fs.unlinkSync('" + syncFile + "');" + "});" + (data ? "req.write('" + JSON.stringify(data).slice(1, -1).replace(/'/g, "\\'") + "');" : "") + "req.end();";
        var syncProc = spawn(process.argv[0], ["-e", execString]);
        var statusText;
        while (fs.existsSync(syncFile)) {}
        self.responseText = fs.readFileSync(contentFile, "utf8");
        syncProc.stdin.end();
        fs.unlinkSync(contentFile);
        if (self.responseText.match(/^NODE-XMLHTTPREQUEST-ERROR:/)) {
          var errorObj = JSON.parse(self.responseText.replace(/^NODE-XMLHTTPREQUEST-ERROR:/, ""));
          self.handleError(errorObj, 503);
        } else {
          self.status = self.responseText.replace(/^NODE-XMLHTTPREQUEST-STATUS:([0-9]*),.*/, "$1");
          var resp = JSON.parse(self.responseText.replace(/^NODE-XMLHTTPREQUEST-STATUS:[0-9]*,(.*)/, "$1"));
          response = {
            statusCode: self.status,
            headers: resp.data.headers
          };
          self.responseText = resp.data.text;
          self.response = Buffer.from(resp.data.data, "base64");
          setState(self.DONE, true);
        }
      }
    };
    this.handleError = function(error, status2) {
      this.status = status2 || 0;
      this.statusText = error;
      this.responseText = error.stack;
      errorFlag = true;
      setState(this.DONE);
    };
    this.abort = function() {
      if (request) {
        request.abort();
        request = null;
      }
      headers = Object.assign({}, defaultHeaders);
      this.responseText = "";
      this.responseXML = "";
      this.response = Buffer.alloc(0);
      errorFlag = abortedFlag = true;
      if (this.readyState !== this.UNSENT && (this.readyState !== this.OPENED || sendFlag) && this.readyState !== this.DONE) {
        sendFlag = false;
        setState(this.DONE);
      }
      this.readyState = this.UNSENT;
    };
    this.addEventListener = function(event, callback) {
      if (!(event in listeners)) {
        listeners[event] = [];
      }
      listeners[event].push(callback);
    };
    this.removeEventListener = function(event, callback) {
      if (event in listeners) {
        listeners[event] = listeners[event].filter(function(ev) {
          return ev !== callback;
        });
      }
    };
    this.dispatchEvent = function(event) {
      if (typeof self["on" + event] === "function") {
        if (this.readyState === this.DONE && settings.async)
          setTimeout(function() {
            self["on" + event]();
          }, 0);
        else
          self["on" + event]();
      }
      if (event in listeners) {
        for (let i = 0, len = listeners[event].length;i < len; i++) {
          if (this.readyState === this.DONE)
            setTimeout(function() {
              listeners[event][i].call(self);
            }, 0);
          else
            listeners[event][i].call(self);
        }
      }
    };
    var setState = function(state) {
      if (self.readyState === state || self.readyState === self.UNSENT && abortedFlag)
        return;
      self.readyState = state;
      if (settings.async || self.readyState < self.OPENED || self.readyState === self.DONE) {
        self.dispatchEvent("readystatechange");
      }
      if (self.readyState === self.DONE) {
        let fire;
        if (abortedFlag)
          fire = "abort";
        else if (errorFlag)
          fire = "error";
        else
          fire = "load";
        self.dispatchEvent(fire);
        self.dispatchEvent("loadend");
      }
    };
  }
});

// node_modules/ms/index.js
var require_ms = __commonJS((exports, module) => {
  var s = 1000;
  var m = s * 60;
  var h = m * 60;
  var d = h * 24;
  var w = d * 7;
  var y = d * 365.25;
  module.exports = function(val, options) {
    options = options || {};
    var type = typeof val;
    if (type === "string" && val.length > 0) {
      return parse4(val);
    } else if (type === "number" && isFinite(val)) {
      return options.long ? fmtLong(val) : fmtShort(val);
    }
    throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(val));
  };
  function parse4(str) {
    str = String(str);
    if (str.length > 100) {
      return;
    }
    var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(str);
    if (!match) {
      return;
    }
    var n = parseFloat(match[1]);
    var type = (match[2] || "ms").toLowerCase();
    switch (type) {
      case "years":
      case "year":
      case "yrs":
      case "yr":
      case "y":
        return n * y;
      case "weeks":
      case "week":
      case "w":
        return n * w;
      case "days":
      case "day":
      case "d":
        return n * d;
      case "hours":
      case "hour":
      case "hrs":
      case "hr":
      case "h":
        return n * h;
      case "minutes":
      case "minute":
      case "mins":
      case "min":
      case "m":
        return n * m;
      case "seconds":
      case "second":
      case "secs":
      case "sec":
      case "s":
        return n * s;
      case "milliseconds":
      case "millisecond":
      case "msecs":
      case "msec":
      case "ms":
        return n;
      default:
        return;
    }
  }
  function fmtShort(ms) {
    var msAbs = Math.abs(ms);
    if (msAbs >= d) {
      return Math.round(ms / d) + "d";
    }
    if (msAbs >= h) {
      return Math.round(ms / h) + "h";
    }
    if (msAbs >= m) {
      return Math.round(ms / m) + "m";
    }
    if (msAbs >= s) {
      return Math.round(ms / s) + "s";
    }
    return ms + "ms";
  }
  function fmtLong(ms) {
    var msAbs = Math.abs(ms);
    if (msAbs >= d) {
      return plural(ms, msAbs, d, "day");
    }
    if (msAbs >= h) {
      return plural(ms, msAbs, h, "hour");
    }
    if (msAbs >= m) {
      return plural(ms, msAbs, m, "minute");
    }
    if (msAbs >= s) {
      return plural(ms, msAbs, s, "second");
    }
    return ms + " ms";
  }
  function plural(ms, msAbs, n, name) {
    var isPlural = msAbs >= n * 1.5;
    return Math.round(ms / n) + " " + name + (isPlural ? "s" : "");
  }
});

// node_modules/debug/src/common.js
var require_common = __commonJS((exports, module) => {
  function setup(env3) {
    createDebug.debug = createDebug;
    createDebug.default = createDebug;
    createDebug.coerce = coerce;
    createDebug.disable = disable;
    createDebug.enable = enable;
    createDebug.enabled = enabled;
    createDebug.humanize = require_ms();
    createDebug.destroy = destroy;
    Object.keys(env3).forEach((key) => {
      createDebug[key] = env3[key];
    });
    createDebug.names = [];
    createDebug.skips = [];
    createDebug.formatters = {};
    function selectColor(namespace) {
      let hash2 = 0;
      for (let i = 0;i < namespace.length; i++) {
        hash2 = (hash2 << 5) - hash2 + namespace.charCodeAt(i);
        hash2 |= 0;
      }
      return createDebug.colors[Math.abs(hash2) % createDebug.colors.length];
    }
    createDebug.selectColor = selectColor;
    function createDebug(namespace) {
      let prevTime;
      let enableOverride = null;
      let namespacesCache;
      let enabledCache;
      function debug(...args) {
        if (!debug.enabled) {
          return;
        }
        const self = debug;
        const curr = Number(new Date);
        const ms = curr - (prevTime || curr);
        self.diff = ms;
        self.prev = prevTime;
        self.curr = curr;
        prevTime = curr;
        args[0] = createDebug.coerce(args[0]);
        if (typeof args[0] !== "string") {
          args.unshift("%O");
        }
        let index = 0;
        args[0] = args[0].replace(/%([a-zA-Z%])/g, (match, format) => {
          if (match === "%%") {
            return "%";
          }
          index++;
          const formatter = createDebug.formatters[format];
          if (typeof formatter === "function") {
            const val = args[index];
            match = formatter.call(self, val);
            args.splice(index, 1);
            index--;
          }
          return match;
        });
        createDebug.formatArgs.call(self, args);
        const logFn = self.log || createDebug.log;
        logFn.apply(self, args);
      }
      debug.namespace = namespace;
      debug.useColors = createDebug.useColors();
      debug.color = createDebug.selectColor(namespace);
      debug.extend = extend;
      debug.destroy = createDebug.destroy;
      Object.defineProperty(debug, "enabled", {
        enumerable: true,
        configurable: false,
        get: () => {
          if (enableOverride !== null) {
            return enableOverride;
          }
          if (namespacesCache !== createDebug.namespaces) {
            namespacesCache = createDebug.namespaces;
            enabledCache = createDebug.enabled(namespace);
          }
          return enabledCache;
        },
        set: (v) => {
          enableOverride = v;
        }
      });
      if (typeof createDebug.init === "function") {
        createDebug.init(debug);
      }
      return debug;
    }
    function extend(namespace, delimiter) {
      const newDebug = createDebug(this.namespace + (typeof delimiter === "undefined" ? ":" : delimiter) + namespace);
      newDebug.log = this.log;
      return newDebug;
    }
    function enable(namespaces) {
      createDebug.save(namespaces);
      createDebug.namespaces = namespaces;
      createDebug.names = [];
      createDebug.skips = [];
      let i;
      const split = (typeof namespaces === "string" ? namespaces : "").split(/[\s,]+/);
      const len = split.length;
      for (i = 0;i < len; i++) {
        if (!split[i]) {
          continue;
        }
        namespaces = split[i].replace(/\*/g, ".*?");
        if (namespaces[0] === "-") {
          createDebug.skips.push(new RegExp("^" + namespaces.slice(1) + "$"));
        } else {
          createDebug.names.push(new RegExp("^" + namespaces + "$"));
        }
      }
    }
    function disable() {
      const namespaces = [
        ...createDebug.names.map(toNamespace),
        ...createDebug.skips.map(toNamespace).map((namespace) => "-" + namespace)
      ].join(",");
      createDebug.enable("");
      return namespaces;
    }
    function enabled(name) {
      if (name[name.length - 1] === "*") {
        return true;
      }
      let i;
      let len;
      for (i = 0, len = createDebug.skips.length;i < len; i++) {
        if (createDebug.skips[i].test(name)) {
          return false;
        }
      }
      for (i = 0, len = createDebug.names.length;i < len; i++) {
        if (createDebug.names[i].test(name)) {
          return true;
        }
      }
      return false;
    }
    function toNamespace(regexp) {
      return regexp.toString().substring(2, regexp.toString().length - 2).replace(/\.\*\?$/, "*");
    }
    function coerce(val) {
      if (val instanceof Error) {
        return val.stack || val.message;
      }
      return val;
    }
    function destroy() {
      console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
    }
    createDebug.enable(createDebug.load());
    return createDebug;
  }
  module.exports = setup;
});

// node_modules/debug/src/browser.js
var require_browser = __commonJS((exports, module) => {
  exports.formatArgs = formatArgs;
  exports.save = save;
  exports.load = load;
  exports.useColors = useColors;
  exports.storage = localstorage();
  exports.destroy = (() => {
    let warned = false;
    return () => {
      if (!warned) {
        warned = true;
        console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
      }
    };
  })();
  exports.colors = [
    "#0000CC",
    "#0000FF",
    "#0033CC",
    "#0033FF",
    "#0066CC",
    "#0066FF",
    "#0099CC",
    "#0099FF",
    "#00CC00",
    "#00CC33",
    "#00CC66",
    "#00CC99",
    "#00CCCC",
    "#00CCFF",
    "#3300CC",
    "#3300FF",
    "#3333CC",
    "#3333FF",
    "#3366CC",
    "#3366FF",
    "#3399CC",
    "#3399FF",
    "#33CC00",
    "#33CC33",
    "#33CC66",
    "#33CC99",
    "#33CCCC",
    "#33CCFF",
    "#6600CC",
    "#6600FF",
    "#6633CC",
    "#6633FF",
    "#66CC00",
    "#66CC33",
    "#9900CC",
    "#9900FF",
    "#9933CC",
    "#9933FF",
    "#99CC00",
    "#99CC33",
    "#CC0000",
    "#CC0033",
    "#CC0066",
    "#CC0099",
    "#CC00CC",
    "#CC00FF",
    "#CC3300",
    "#CC3333",
    "#CC3366",
    "#CC3399",
    "#CC33CC",
    "#CC33FF",
    "#CC6600",
    "#CC6633",
    "#CC9900",
    "#CC9933",
    "#CCCC00",
    "#CCCC33",
    "#FF0000",
    "#FF0033",
    "#FF0066",
    "#FF0099",
    "#FF00CC",
    "#FF00FF",
    "#FF3300",
    "#FF3333",
    "#FF3366",
    "#FF3399",
    "#FF33CC",
    "#FF33FF",
    "#FF6600",
    "#FF6633",
    "#FF9900",
    "#FF9933",
    "#FFCC00",
    "#FFCC33"
  ];
  function useColors() {
    if (typeof window !== "undefined" && window.process && (window.process.type === "renderer" || window.process.__nwjs)) {
      return true;
    }
    if (typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
      return false;
    }
    let m;
    return typeof document !== "undefined" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || typeof window !== "undefined" && window.console && (window.console.firebug || window.console.exception && window.console.table) || typeof navigator !== "undefined" && navigator.userAgent && (m = navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)) && parseInt(m[1], 10) >= 31 || typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
  }
  function formatArgs(args) {
    args[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + args[0] + (this.useColors ? "%c " : " ") + "+" + module.exports.humanize(this.diff);
    if (!this.useColors) {
      return;
    }
    const c = "color: " + this.color;
    args.splice(1, 0, c, "color: inherit");
    let index = 0;
    let lastC = 0;
    args[0].replace(/%[a-zA-Z%]/g, (match) => {
      if (match === "%%") {
        return;
      }
      index++;
      if (match === "%c") {
        lastC = index;
      }
    });
    args.splice(lastC, 0, c);
  }
  exports.log = console.debug || console.log || (() => {});
  function save(namespaces) {
    try {
      if (namespaces) {
        exports.storage.setItem("debug", namespaces);
      } else {
        exports.storage.removeItem("debug");
      }
    } catch (error) {}
  }
  function load() {
    let r;
    try {
      r = exports.storage.getItem("debug");
    } catch (error) {}
    if (!r && typeof process !== "undefined" && "env" in process) {
      r = process.env.DEBUG;
    }
    return r;
  }
  function localstorage() {
    try {
      return localStorage;
    } catch (error) {}
  }
  module.exports = require_common()(exports);
  var { formatters } = module.exports;
  formatters.j = function(v) {
    try {
      return JSON.stringify(v);
    } catch (error) {
      return "[UnexpectedJSONParseError]: " + error.message;
    }
  };
});

// node_modules/has-flag/index.js
var require_has_flag = __commonJS((exports, module) => {
  module.exports = (flag, argv = process.argv) => {
    const prefix = flag.startsWith("-") ? "" : flag.length === 1 ? "-" : "--";
    const position = argv.indexOf(prefix + flag);
    const terminatorPosition = argv.indexOf("--");
    return position !== -1 && (terminatorPosition === -1 || position < terminatorPosition);
  };
});

// node_modules/supports-color/index.js
var require_supports_color = __commonJS((exports, module) => {
  var os = __require("os");
  var tty = __require("tty");
  var hasFlag = require_has_flag();
  var { env: env3 } = process;
  var forceColor;
  if (hasFlag("no-color") || hasFlag("no-colors") || hasFlag("color=false") || hasFlag("color=never")) {
    forceColor = 0;
  } else if (hasFlag("color") || hasFlag("colors") || hasFlag("color=true") || hasFlag("color=always")) {
    forceColor = 1;
  }
  if ("FORCE_COLOR" in env3) {
    if (env3.FORCE_COLOR === "true") {
      forceColor = 1;
    } else if (env3.FORCE_COLOR === "false") {
      forceColor = 0;
    } else {
      forceColor = env3.FORCE_COLOR.length === 0 ? 1 : Math.min(parseInt(env3.FORCE_COLOR, 10), 3);
    }
  }
  function translateLevel(level) {
    if (level === 0) {
      return false;
    }
    return {
      level,
      hasBasic: true,
      has256: level >= 2,
      has16m: level >= 3
    };
  }
  function supportsColor(haveStream, streamIsTTY) {
    if (forceColor === 0) {
      return 0;
    }
    if (hasFlag("color=16m") || hasFlag("color=full") || hasFlag("color=truecolor")) {
      return 3;
    }
    if (hasFlag("color=256")) {
      return 2;
    }
    if (haveStream && !streamIsTTY && forceColor === undefined) {
      return 0;
    }
    const min = forceColor || 0;
    if (env3.TERM === "dumb") {
      return min;
    }
    if (process.platform === "win32") {
      const osRelease = os.release().split(".");
      if (Number(osRelease[0]) >= 10 && Number(osRelease[2]) >= 10586) {
        return Number(osRelease[2]) >= 14931 ? 3 : 2;
      }
      return 1;
    }
    if ("CI" in env3) {
      if (["TRAVIS", "CIRCLECI", "APPVEYOR", "GITLAB_CI", "GITHUB_ACTIONS", "BUILDKITE"].some((sign) => (sign in env3)) || env3.CI_NAME === "codeship") {
        return 1;
      }
      return min;
    }
    if ("TEAMCITY_VERSION" in env3) {
      return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(env3.TEAMCITY_VERSION) ? 1 : 0;
    }
    if (env3.COLORTERM === "truecolor") {
      return 3;
    }
    if ("TERM_PROGRAM" in env3) {
      const version = parseInt((env3.TERM_PROGRAM_VERSION || "").split(".")[0], 10);
      switch (env3.TERM_PROGRAM) {
        case "iTerm.app":
          return version >= 3 ? 3 : 2;
        case "Apple_Terminal":
          return 2;
      }
    }
    if (/-256(color)?$/i.test(env3.TERM)) {
      return 2;
    }
    if (/^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(env3.TERM)) {
      return 1;
    }
    if ("COLORTERM" in env3) {
      return 1;
    }
    return min;
  }
  function getSupportLevel(stream) {
    const level = supportsColor(stream, stream && stream.isTTY);
    return translateLevel(level);
  }
  module.exports = {
    supportsColor: getSupportLevel,
    stdout: translateLevel(supportsColor(true, tty.isatty(1))),
    stderr: translateLevel(supportsColor(true, tty.isatty(2)))
  };
});

// node_modules/debug/src/node.js
var require_node = __commonJS((exports, module) => {
  var tty = __require("tty");
  var util = __require("util");
  exports.init = init;
  exports.log = log;
  exports.formatArgs = formatArgs;
  exports.save = save;
  exports.load = load;
  exports.useColors = useColors;
  exports.destroy = util.deprecate(() => {}, "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
  exports.colors = [6, 2, 3, 4, 5, 1];
  try {
    const supportsColor = require_supports_color();
    if (supportsColor && (supportsColor.stderr || supportsColor).level >= 2) {
      exports.colors = [
        20,
        21,
        26,
        27,
        32,
        33,
        38,
        39,
        40,
        41,
        42,
        43,
        44,
        45,
        56,
        57,
        62,
        63,
        68,
        69,
        74,
        75,
        76,
        77,
        78,
        79,
        80,
        81,
        92,
        93,
        98,
        99,
        112,
        113,
        128,
        129,
        134,
        135,
        148,
        149,
        160,
        161,
        162,
        163,
        164,
        165,
        166,
        167,
        168,
        169,
        170,
        171,
        172,
        173,
        178,
        179,
        184,
        185,
        196,
        197,
        198,
        199,
        200,
        201,
        202,
        203,
        204,
        205,
        206,
        207,
        208,
        209,
        214,
        215,
        220,
        221
      ];
    }
  } catch (error) {}
  exports.inspectOpts = Object.keys(process.env).filter((key) => {
    return /^debug_/i.test(key);
  }).reduce((obj, key) => {
    const prop = key.substring(6).toLowerCase().replace(/_([a-z])/g, (_, k) => {
      return k.toUpperCase();
    });
    let val = process.env[key];
    if (/^(yes|on|true|enabled)$/i.test(val)) {
      val = true;
    } else if (/^(no|off|false|disabled)$/i.test(val)) {
      val = false;
    } else if (val === "null") {
      val = null;
    } else {
      val = Number(val);
    }
    obj[prop] = val;
    return obj;
  }, {});
  function useColors() {
    return "colors" in exports.inspectOpts ? Boolean(exports.inspectOpts.colors) : tty.isatty(process.stderr.fd);
  }
  function formatArgs(args) {
    const { namespace: name, useColors: useColors2 } = this;
    if (useColors2) {
      const c = this.color;
      const colorCode = "\x1B[3" + (c < 8 ? c : "8;5;" + c);
      const prefix = `  ${colorCode};1m${name} \x1B[0m`;
      args[0] = prefix + args[0].split(`
`).join(`
` + prefix);
      args.push(colorCode + "m+" + module.exports.humanize(this.diff) + "\x1B[0m");
    } else {
      args[0] = getDate() + name + " " + args[0];
    }
  }
  function getDate() {
    if (exports.inspectOpts.hideDate) {
      return "";
    }
    return new Date().toISOString() + " ";
  }
  function log(...args) {
    return process.stderr.write(util.formatWithOptions(exports.inspectOpts, ...args) + `
`);
  }
  function save(namespaces) {
    if (namespaces) {
      process.env.DEBUG = namespaces;
    } else {
      delete process.env.DEBUG;
    }
  }
  function load() {
    return process.env.DEBUG;
  }
  function init(debug) {
    debug.inspectOpts = {};
    const keys = Object.keys(exports.inspectOpts);
    for (let i = 0;i < keys.length; i++) {
      debug.inspectOpts[keys[i]] = exports.inspectOpts[keys[i]];
    }
  }
  module.exports = require_common()(exports);
  var { formatters } = module.exports;
  formatters.o = function(v) {
    this.inspectOpts.colors = this.useColors;
    return util.inspect(v, this.inspectOpts).split(`
`).map((str) => str.trim()).join(" ");
  };
  formatters.O = function(v) {
    this.inspectOpts.colors = this.useColors;
    return util.inspect(v, this.inspectOpts);
  };
});

// node_modules/debug/src/index.js
var require_src = __commonJS((exports, module) => {
  if (typeof process === "undefined" || process.type === "renderer" || false || process.__nwjs) {
    module.exports = require_browser();
  } else {
    module.exports = require_node();
  }
});

// node_modules/ws/lib/stream.js
var require_stream = __commonJS((exports, module) => {
  var { Duplex } = __require("stream");
  function emitClose(stream) {
    stream.emit("close");
  }
  function duplexOnEnd() {
    if (!this.destroyed && this._writableState.finished) {
      this.destroy();
    }
  }
  function duplexOnError(err) {
    this.removeListener("error", duplexOnError);
    this.destroy();
    if (this.listenerCount("error") === 0) {
      this.emit("error", err);
    }
  }
  function createWebSocketStream(ws, options) {
    let terminateOnDestroy = true;
    const duplex = new Duplex({
      ...options,
      autoDestroy: false,
      emitClose: false,
      objectMode: false,
      writableObjectMode: false
    });
    ws.on("message", function message(msg, isBinary) {
      const data = !isBinary && duplex._readableState.objectMode ? msg.toString() : msg;
      if (!duplex.push(data))
        ws.pause();
    });
    ws.once("error", function error(err) {
      if (duplex.destroyed)
        return;
      terminateOnDestroy = false;
      duplex.destroy(err);
    });
    ws.once("close", function close() {
      if (duplex.destroyed)
        return;
      duplex.push(null);
    });
    duplex._destroy = function(err, callback) {
      if (ws.readyState === ws.CLOSED) {
        callback(err);
        process.nextTick(emitClose, duplex);
        return;
      }
      let called = false;
      ws.once("error", function error(err2) {
        called = true;
        callback(err2);
      });
      ws.once("close", function close() {
        if (!called)
          callback(err);
        process.nextTick(emitClose, duplex);
      });
      if (terminateOnDestroy)
        ws.terminate();
    };
    duplex._final = function(callback) {
      if (ws.readyState === ws.CONNECTING) {
        ws.once("open", function open() {
          duplex._final(callback);
        });
        return;
      }
      if (ws._socket === null)
        return;
      if (ws._socket._writableState.finished) {
        callback();
        if (duplex._readableState.endEmitted)
          duplex.destroy();
      } else {
        ws._socket.once("finish", function finish() {
          callback();
        });
        ws.close();
      }
    };
    duplex._read = function() {
      if (ws.isPaused)
        ws.resume();
    };
    duplex._write = function(chunk, encoding, callback) {
      if (ws.readyState === ws.CONNECTING) {
        ws.once("open", function open() {
          duplex._write(chunk, encoding, callback);
        });
        return;
      }
      ws.send(chunk, callback);
    };
    duplex.on("end", duplexOnEnd);
    duplex.on("error", duplexOnError);
    return duplex;
  }
  module.exports = createWebSocketStream;
});

// node_modules/ws/lib/constants.js
var require_constants = __commonJS((exports, module) => {
  module.exports = {
    BINARY_TYPES: ["nodebuffer", "arraybuffer", "fragments"],
    EMPTY_BUFFER: Buffer.alloc(0),
    GUID: "258EAFA5-E914-47DA-95CA-C5AB0DC85B11",
    kForOnEventAttribute: Symbol("kIsForOnEventAttribute"),
    kListener: Symbol("kListener"),
    kStatusCode: Symbol("status-code"),
    kWebSocket: Symbol("websocket"),
    NOOP: () => {}
  };
});

// node_modules/ws/lib/buffer-util.js
var require_buffer_util = __commonJS((exports, module) => {
  var { EMPTY_BUFFER } = require_constants();
  var FastBuffer = Buffer[Symbol.species];
  function concat(list, totalLength2) {
    if (list.length === 0)
      return EMPTY_BUFFER;
    if (list.length === 1)
      return list[0];
    const target = Buffer.allocUnsafe(totalLength2);
    let offset = 0;
    for (let i = 0;i < list.length; i++) {
      const buf = list[i];
      target.set(buf, offset);
      offset += buf.length;
    }
    if (offset < totalLength2) {
      return new FastBuffer(target.buffer, target.byteOffset, offset);
    }
    return target;
  }
  function _mask(source, mask, output, offset, length) {
    for (let i = 0;i < length; i++) {
      output[offset + i] = source[i] ^ mask[i & 3];
    }
  }
  function _unmask(buffer, mask) {
    for (let i = 0;i < buffer.length; i++) {
      buffer[i] ^= mask[i & 3];
    }
  }
  function toArrayBuffer(buf) {
    if (buf.length === buf.buffer.byteLength) {
      return buf.buffer;
    }
    return buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.length);
  }
  function toBuffer2(data) {
    toBuffer2.readOnly = true;
    if (Buffer.isBuffer(data))
      return data;
    let buf;
    if (data instanceof ArrayBuffer) {
      buf = new FastBuffer(data);
    } else if (ArrayBuffer.isView(data)) {
      buf = new FastBuffer(data.buffer, data.byteOffset, data.byteLength);
    } else {
      buf = Buffer.from(data);
      toBuffer2.readOnly = false;
    }
    return buf;
  }
  module.exports = {
    concat,
    mask: _mask,
    toArrayBuffer,
    toBuffer: toBuffer2,
    unmask: _unmask
  };
  if (!process.env.WS_NO_BUFFER_UTIL) {
    try {
      const bufferUtil = (()=>{throw new Error("Cannot require module "+"bufferutil");})();
      module.exports.mask = function(source, mask, output, offset, length) {
        if (length < 48)
          _mask(source, mask, output, offset, length);
        else
          bufferUtil.mask(source, mask, output, offset, length);
      };
      module.exports.unmask = function(buffer, mask) {
        if (buffer.length < 32)
          _unmask(buffer, mask);
        else
          bufferUtil.unmask(buffer, mask);
      };
    } catch (e) {}
  }
});

// node_modules/ws/lib/limiter.js
var require_limiter = __commonJS((exports, module) => {
  var kDone = Symbol("kDone");
  var kRun = Symbol("kRun");

  class Limiter {
    constructor(concurrency) {
      this[kDone] = () => {
        this.pending--;
        this[kRun]();
      };
      this.concurrency = concurrency || Infinity;
      this.jobs = [];
      this.pending = 0;
    }
    add(job) {
      this.jobs.push(job);
      this[kRun]();
    }
    [kRun]() {
      if (this.pending === this.concurrency)
        return;
      if (this.jobs.length) {
        const job = this.jobs.shift();
        this.pending++;
        job(this[kDone]);
      }
    }
  }
  module.exports = Limiter;
});

// node_modules/ws/lib/permessage-deflate.js
var require_permessage_deflate = __commonJS((exports, module) => {
  var zlib = __require("zlib");
  var bufferUtil = require_buffer_util();
  var Limiter = require_limiter();
  var { kStatusCode } = require_constants();
  var FastBuffer = Buffer[Symbol.species];
  var TRAILER = Buffer.from([0, 0, 255, 255]);
  var kPerMessageDeflate = Symbol("permessage-deflate");
  var kTotalLength = Symbol("total-length");
  var kCallback = Symbol("callback");
  var kBuffers = Symbol("buffers");
  var kError = Symbol("error");
  var zlibLimiter;

  class PerMessageDeflate {
    constructor(options, isServer, maxPayload) {
      this._maxPayload = maxPayload | 0;
      this._options = options || {};
      this._threshold = this._options.threshold !== undefined ? this._options.threshold : 1024;
      this._isServer = !!isServer;
      this._deflate = null;
      this._inflate = null;
      this.params = null;
      if (!zlibLimiter) {
        const concurrency = this._options.concurrencyLimit !== undefined ? this._options.concurrencyLimit : 10;
        zlibLimiter = new Limiter(concurrency);
      }
    }
    static get extensionName() {
      return "permessage-deflate";
    }
    offer() {
      const params = {};
      if (this._options.serverNoContextTakeover) {
        params.server_no_context_takeover = true;
      }
      if (this._options.clientNoContextTakeover) {
        params.client_no_context_takeover = true;
      }
      if (this._options.serverMaxWindowBits) {
        params.server_max_window_bits = this._options.serverMaxWindowBits;
      }
      if (this._options.clientMaxWindowBits) {
        params.client_max_window_bits = this._options.clientMaxWindowBits;
      } else if (this._options.clientMaxWindowBits == null) {
        params.client_max_window_bits = true;
      }
      return params;
    }
    accept(configurations) {
      configurations = this.normalizeParams(configurations);
      this.params = this._isServer ? this.acceptAsServer(configurations) : this.acceptAsClient(configurations);
      return this.params;
    }
    cleanup() {
      if (this._inflate) {
        this._inflate.close();
        this._inflate = null;
      }
      if (this._deflate) {
        const callback = this._deflate[kCallback];
        this._deflate.close();
        this._deflate = null;
        if (callback) {
          callback(new Error("The deflate stream was closed while data was being processed"));
        }
      }
    }
    acceptAsServer(offers) {
      const opts = this._options;
      const accepted = offers.find((params) => {
        if (opts.serverNoContextTakeover === false && params.server_no_context_takeover || params.server_max_window_bits && (opts.serverMaxWindowBits === false || typeof opts.serverMaxWindowBits === "number" && opts.serverMaxWindowBits > params.server_max_window_bits) || typeof opts.clientMaxWindowBits === "number" && !params.client_max_window_bits) {
          return false;
        }
        return true;
      });
      if (!accepted) {
        throw new Error("None of the extension offers can be accepted");
      }
      if (opts.serverNoContextTakeover) {
        accepted.server_no_context_takeover = true;
      }
      if (opts.clientNoContextTakeover) {
        accepted.client_no_context_takeover = true;
      }
      if (typeof opts.serverMaxWindowBits === "number") {
        accepted.server_max_window_bits = opts.serverMaxWindowBits;
      }
      if (typeof opts.clientMaxWindowBits === "number") {
        accepted.client_max_window_bits = opts.clientMaxWindowBits;
      } else if (accepted.client_max_window_bits === true || opts.clientMaxWindowBits === false) {
        delete accepted.client_max_window_bits;
      }
      return accepted;
    }
    acceptAsClient(response) {
      const params = response[0];
      if (this._options.clientNoContextTakeover === false && params.client_no_context_takeover) {
        throw new Error('Unexpected parameter "client_no_context_takeover"');
      }
      if (!params.client_max_window_bits) {
        if (typeof this._options.clientMaxWindowBits === "number") {
          params.client_max_window_bits = this._options.clientMaxWindowBits;
        }
      } else if (this._options.clientMaxWindowBits === false || typeof this._options.clientMaxWindowBits === "number" && params.client_max_window_bits > this._options.clientMaxWindowBits) {
        throw new Error('Unexpected or invalid parameter "client_max_window_bits"');
      }
      return params;
    }
    normalizeParams(configurations) {
      configurations.forEach((params) => {
        Object.keys(params).forEach((key) => {
          let value2 = params[key];
          if (value2.length > 1) {
            throw new Error(`Parameter "${key}" must have only a single value`);
          }
          value2 = value2[0];
          if (key === "client_max_window_bits") {
            if (value2 !== true) {
              const num = +value2;
              if (!Number.isInteger(num) || num < 8 || num > 15) {
                throw new TypeError(`Invalid value for parameter "${key}": ${value2}`);
              }
              value2 = num;
            } else if (!this._isServer) {
              throw new TypeError(`Invalid value for parameter "${key}": ${value2}`);
            }
          } else if (key === "server_max_window_bits") {
            const num = +value2;
            if (!Number.isInteger(num) || num < 8 || num > 15) {
              throw new TypeError(`Invalid value for parameter "${key}": ${value2}`);
            }
            value2 = num;
          } else if (key === "client_no_context_takeover" || key === "server_no_context_takeover") {
            if (value2 !== true) {
              throw new TypeError(`Invalid value for parameter "${key}": ${value2}`);
            }
          } else {
            throw new Error(`Unknown parameter "${key}"`);
          }
          params[key] = value2;
        });
      });
      return configurations;
    }
    decompress(data, fin, callback) {
      zlibLimiter.add((done) => {
        this._decompress(data, fin, (err, result) => {
          done();
          callback(err, result);
        });
      });
    }
    compress(data, fin, callback) {
      zlibLimiter.add((done) => {
        this._compress(data, fin, (err, result) => {
          done();
          callback(err, result);
        });
      });
    }
    _decompress(data, fin, callback) {
      const endpoint = this._isServer ? "client" : "server";
      if (!this._inflate) {
        const key = `${endpoint}_max_window_bits`;
        const windowBits = typeof this.params[key] !== "number" ? zlib.Z_DEFAULT_WINDOWBITS : this.params[key];
        this._inflate = zlib.createInflateRaw({
          ...this._options.zlibInflateOptions,
          windowBits
        });
        this._inflate[kPerMessageDeflate] = this;
        this._inflate[kTotalLength] = 0;
        this._inflate[kBuffers] = [];
        this._inflate.on("error", inflateOnError);
        this._inflate.on("data", inflateOnData);
      }
      this._inflate[kCallback] = callback;
      this._inflate.write(data);
      if (fin)
        this._inflate.write(TRAILER);
      this._inflate.flush(() => {
        const err = this._inflate[kError];
        if (err) {
          this._inflate.close();
          this._inflate = null;
          callback(err);
          return;
        }
        const data2 = bufferUtil.concat(this._inflate[kBuffers], this._inflate[kTotalLength]);
        if (this._inflate._readableState.endEmitted) {
          this._inflate.close();
          this._inflate = null;
        } else {
          this._inflate[kTotalLength] = 0;
          this._inflate[kBuffers] = [];
          if (fin && this.params[`${endpoint}_no_context_takeover`]) {
            this._inflate.reset();
          }
        }
        callback(null, data2);
      });
    }
    _compress(data, fin, callback) {
      const endpoint = this._isServer ? "server" : "client";
      if (!this._deflate) {
        const key = `${endpoint}_max_window_bits`;
        const windowBits = typeof this.params[key] !== "number" ? zlib.Z_DEFAULT_WINDOWBITS : this.params[key];
        this._deflate = zlib.createDeflateRaw({
          ...this._options.zlibDeflateOptions,
          windowBits
        });
        this._deflate[kTotalLength] = 0;
        this._deflate[kBuffers] = [];
        this._deflate.on("data", deflateOnData);
      }
      this._deflate[kCallback] = callback;
      this._deflate.write(data);
      this._deflate.flush(zlib.Z_SYNC_FLUSH, () => {
        if (!this._deflate) {
          return;
        }
        let data2 = bufferUtil.concat(this._deflate[kBuffers], this._deflate[kTotalLength]);
        if (fin) {
          data2 = new FastBuffer(data2.buffer, data2.byteOffset, data2.length - 4);
        }
        this._deflate[kCallback] = null;
        this._deflate[kTotalLength] = 0;
        this._deflate[kBuffers] = [];
        if (fin && this.params[`${endpoint}_no_context_takeover`]) {
          this._deflate.reset();
        }
        callback(null, data2);
      });
    }
  }
  module.exports = PerMessageDeflate;
  function deflateOnData(chunk) {
    this[kBuffers].push(chunk);
    this[kTotalLength] += chunk.length;
  }
  function inflateOnData(chunk) {
    this[kTotalLength] += chunk.length;
    if (this[kPerMessageDeflate]._maxPayload < 1 || this[kTotalLength] <= this[kPerMessageDeflate]._maxPayload) {
      this[kBuffers].push(chunk);
      return;
    }
    this[kError] = new RangeError("Max payload size exceeded");
    this[kError].code = "WS_ERR_UNSUPPORTED_MESSAGE_LENGTH";
    this[kError][kStatusCode] = 1009;
    this.removeListener("data", inflateOnData);
    this.reset();
  }
  function inflateOnError(err) {
    this[kPerMessageDeflate]._inflate = null;
    err[kStatusCode] = 1007;
    this[kCallback](err);
  }
});

// node_modules/ws/lib/validation.js
var require_validation = __commonJS((exports, module) => {
  var { isUtf8 } = __require("buffer");
  var tokenChars = [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    0,
    1,
    1,
    1,
    1,
    1,
    0,
    0,
    1,
    1,
    0,
    1,
    1,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    1,
    0,
    1,
    0
  ];
  function isValidStatusCode(code) {
    return code >= 1000 && code <= 1014 && code !== 1004 && code !== 1005 && code !== 1006 || code >= 3000 && code <= 4999;
  }
  function _isValidUTF8(buf) {
    const len = buf.length;
    let i = 0;
    while (i < len) {
      if ((buf[i] & 128) === 0) {
        i++;
      } else if ((buf[i] & 224) === 192) {
        if (i + 1 === len || (buf[i + 1] & 192) !== 128 || (buf[i] & 254) === 192) {
          return false;
        }
        i += 2;
      } else if ((buf[i] & 240) === 224) {
        if (i + 2 >= len || (buf[i + 1] & 192) !== 128 || (buf[i + 2] & 192) !== 128 || buf[i] === 224 && (buf[i + 1] & 224) === 128 || buf[i] === 237 && (buf[i + 1] & 224) === 160) {
          return false;
        }
        i += 3;
      } else if ((buf[i] & 248) === 240) {
        if (i + 3 >= len || (buf[i + 1] & 192) !== 128 || (buf[i + 2] & 192) !== 128 || (buf[i + 3] & 192) !== 128 || buf[i] === 240 && (buf[i + 1] & 240) === 128 || buf[i] === 244 && buf[i + 1] > 143 || buf[i] > 244) {
          return false;
        }
        i += 4;
      } else {
        return false;
      }
    }
    return true;
  }
  module.exports = {
    isValidStatusCode,
    isValidUTF8: _isValidUTF8,
    tokenChars
  };
  if (isUtf8) {
    module.exports.isValidUTF8 = function(buf) {
      return buf.length < 24 ? _isValidUTF8(buf) : isUtf8(buf);
    };
  } else if (!process.env.WS_NO_UTF_8_VALIDATE) {
    try {
      const isValidUTF8 = (()=>{throw new Error("Cannot require module "+"utf-8-validate");})();
      module.exports.isValidUTF8 = function(buf) {
        return buf.length < 32 ? _isValidUTF8(buf) : isValidUTF8(buf);
      };
    } catch (e) {}
  }
});

// node_modules/ws/lib/receiver.js
var require_receiver = __commonJS((exports, module) => {
  var { Writable } = __require("stream");
  var PerMessageDeflate = require_permessage_deflate();
  var {
    BINARY_TYPES,
    EMPTY_BUFFER,
    kStatusCode,
    kWebSocket
  } = require_constants();
  var { concat, toArrayBuffer, unmask } = require_buffer_util();
  var { isValidStatusCode, isValidUTF8 } = require_validation();
  var FastBuffer = Buffer[Symbol.species];
  var GET_INFO = 0;
  var GET_PAYLOAD_LENGTH_16 = 1;
  var GET_PAYLOAD_LENGTH_64 = 2;
  var GET_MASK = 3;
  var GET_DATA = 4;
  var INFLATING = 5;
  var DEFER_EVENT = 6;

  class Receiver extends Writable {
    constructor(options = {}) {
      super();
      this._allowSynchronousEvents = options.allowSynchronousEvents !== undefined ? options.allowSynchronousEvents : true;
      this._binaryType = options.binaryType || BINARY_TYPES[0];
      this._extensions = options.extensions || {};
      this._isServer = !!options.isServer;
      this._maxPayload = options.maxPayload | 0;
      this._skipUTF8Validation = !!options.skipUTF8Validation;
      this[kWebSocket] = undefined;
      this._bufferedBytes = 0;
      this._buffers = [];
      this._compressed = false;
      this._payloadLength = 0;
      this._mask = undefined;
      this._fragmented = 0;
      this._masked = false;
      this._fin = false;
      this._opcode = 0;
      this._totalPayloadLength = 0;
      this._messageLength = 0;
      this._fragments = [];
      this._errored = false;
      this._loop = false;
      this._state = GET_INFO;
    }
    _write(chunk, encoding, cb) {
      if (this._opcode === 8 && this._state == GET_INFO)
        return cb();
      this._bufferedBytes += chunk.length;
      this._buffers.push(chunk);
      this.startLoop(cb);
    }
    consume(n) {
      this._bufferedBytes -= n;
      if (n === this._buffers[0].length)
        return this._buffers.shift();
      if (n < this._buffers[0].length) {
        const buf = this._buffers[0];
        this._buffers[0] = new FastBuffer(buf.buffer, buf.byteOffset + n, buf.length - n);
        return new FastBuffer(buf.buffer, buf.byteOffset, n);
      }
      const dst = Buffer.allocUnsafe(n);
      do {
        const buf = this._buffers[0];
        const offset = dst.length - n;
        if (n >= buf.length) {
          dst.set(this._buffers.shift(), offset);
        } else {
          dst.set(new Uint8Array(buf.buffer, buf.byteOffset, n), offset);
          this._buffers[0] = new FastBuffer(buf.buffer, buf.byteOffset + n, buf.length - n);
        }
        n -= buf.length;
      } while (n > 0);
      return dst;
    }
    startLoop(cb) {
      this._loop = true;
      do {
        switch (this._state) {
          case GET_INFO:
            this.getInfo(cb);
            break;
          case GET_PAYLOAD_LENGTH_16:
            this.getPayloadLength16(cb);
            break;
          case GET_PAYLOAD_LENGTH_64:
            this.getPayloadLength64(cb);
            break;
          case GET_MASK:
            this.getMask();
            break;
          case GET_DATA:
            this.getData(cb);
            break;
          case INFLATING:
          case DEFER_EVENT:
            this._loop = false;
            return;
        }
      } while (this._loop);
      if (!this._errored)
        cb();
    }
    getInfo(cb) {
      if (this._bufferedBytes < 2) {
        this._loop = false;
        return;
      }
      const buf = this.consume(2);
      if ((buf[0] & 48) !== 0) {
        const error = this.createError(RangeError, "RSV2 and RSV3 must be clear", true, 1002, "WS_ERR_UNEXPECTED_RSV_2_3");
        cb(error);
        return;
      }
      const compressed = (buf[0] & 64) === 64;
      if (compressed && !this._extensions[PerMessageDeflate.extensionName]) {
        const error = this.createError(RangeError, "RSV1 must be clear", true, 1002, "WS_ERR_UNEXPECTED_RSV_1");
        cb(error);
        return;
      }
      this._fin = (buf[0] & 128) === 128;
      this._opcode = buf[0] & 15;
      this._payloadLength = buf[1] & 127;
      if (this._opcode === 0) {
        if (compressed) {
          const error = this.createError(RangeError, "RSV1 must be clear", true, 1002, "WS_ERR_UNEXPECTED_RSV_1");
          cb(error);
          return;
        }
        if (!this._fragmented) {
          const error = this.createError(RangeError, "invalid opcode 0", true, 1002, "WS_ERR_INVALID_OPCODE");
          cb(error);
          return;
        }
        this._opcode = this._fragmented;
      } else if (this._opcode === 1 || this._opcode === 2) {
        if (this._fragmented) {
          const error = this.createError(RangeError, `invalid opcode ${this._opcode}`, true, 1002, "WS_ERR_INVALID_OPCODE");
          cb(error);
          return;
        }
        this._compressed = compressed;
      } else if (this._opcode > 7 && this._opcode < 11) {
        if (!this._fin) {
          const error = this.createError(RangeError, "FIN must be set", true, 1002, "WS_ERR_EXPECTED_FIN");
          cb(error);
          return;
        }
        if (compressed) {
          const error = this.createError(RangeError, "RSV1 must be clear", true, 1002, "WS_ERR_UNEXPECTED_RSV_1");
          cb(error);
          return;
        }
        if (this._payloadLength > 125 || this._opcode === 8 && this._payloadLength === 1) {
          const error = this.createError(RangeError, `invalid payload length ${this._payloadLength}`, true, 1002, "WS_ERR_INVALID_CONTROL_PAYLOAD_LENGTH");
          cb(error);
          return;
        }
      } else {
        const error = this.createError(RangeError, `invalid opcode ${this._opcode}`, true, 1002, "WS_ERR_INVALID_OPCODE");
        cb(error);
        return;
      }
      if (!this._fin && !this._fragmented)
        this._fragmented = this._opcode;
      this._masked = (buf[1] & 128) === 128;
      if (this._isServer) {
        if (!this._masked) {
          const error = this.createError(RangeError, "MASK must be set", true, 1002, "WS_ERR_EXPECTED_MASK");
          cb(error);
          return;
        }
      } else if (this._masked) {
        const error = this.createError(RangeError, "MASK must be clear", true, 1002, "WS_ERR_UNEXPECTED_MASK");
        cb(error);
        return;
      }
      if (this._payloadLength === 126)
        this._state = GET_PAYLOAD_LENGTH_16;
      else if (this._payloadLength === 127)
        this._state = GET_PAYLOAD_LENGTH_64;
      else
        this.haveLength(cb);
    }
    getPayloadLength16(cb) {
      if (this._bufferedBytes < 2) {
        this._loop = false;
        return;
      }
      this._payloadLength = this.consume(2).readUInt16BE(0);
      this.haveLength(cb);
    }
    getPayloadLength64(cb) {
      if (this._bufferedBytes < 8) {
        this._loop = false;
        return;
      }
      const buf = this.consume(8);
      const num = buf.readUInt32BE(0);
      if (num > Math.pow(2, 53 - 32) - 1) {
        const error = this.createError(RangeError, "Unsupported WebSocket frame: payload length > 2^53 - 1", false, 1009, "WS_ERR_UNSUPPORTED_DATA_PAYLOAD_LENGTH");
        cb(error);
        return;
      }
      this._payloadLength = num * Math.pow(2, 32) + buf.readUInt32BE(4);
      this.haveLength(cb);
    }
    haveLength(cb) {
      if (this._payloadLength && this._opcode < 8) {
        this._totalPayloadLength += this._payloadLength;
        if (this._totalPayloadLength > this._maxPayload && this._maxPayload > 0) {
          const error = this.createError(RangeError, "Max payload size exceeded", false, 1009, "WS_ERR_UNSUPPORTED_MESSAGE_LENGTH");
          cb(error);
          return;
        }
      }
      if (this._masked)
        this._state = GET_MASK;
      else
        this._state = GET_DATA;
    }
    getMask() {
      if (this._bufferedBytes < 4) {
        this._loop = false;
        return;
      }
      this._mask = this.consume(4);
      this._state = GET_DATA;
    }
    getData(cb) {
      let data = EMPTY_BUFFER;
      if (this._payloadLength) {
        if (this._bufferedBytes < this._payloadLength) {
          this._loop = false;
          return;
        }
        data = this.consume(this._payloadLength);
        if (this._masked && (this._mask[0] | this._mask[1] | this._mask[2] | this._mask[3]) !== 0) {
          unmask(data, this._mask);
        }
      }
      if (this._opcode > 7) {
        this.controlMessage(data, cb);
        return;
      }
      if (this._compressed) {
        this._state = INFLATING;
        this.decompress(data, cb);
        return;
      }
      if (data.length) {
        this._messageLength = this._totalPayloadLength;
        this._fragments.push(data);
      }
      this.dataMessage(cb);
    }
    decompress(data, cb) {
      const perMessageDeflate = this._extensions[PerMessageDeflate.extensionName];
      perMessageDeflate.decompress(data, this._fin, (err, buf) => {
        if (err)
          return cb(err);
        if (buf.length) {
          this._messageLength += buf.length;
          if (this._messageLength > this._maxPayload && this._maxPayload > 0) {
            const error = this.createError(RangeError, "Max payload size exceeded", false, 1009, "WS_ERR_UNSUPPORTED_MESSAGE_LENGTH");
            cb(error);
            return;
          }
          this._fragments.push(buf);
        }
        this.dataMessage(cb);
        if (this._state === GET_INFO)
          this.startLoop(cb);
      });
    }
    dataMessage(cb) {
      if (!this._fin) {
        this._state = GET_INFO;
        return;
      }
      const messageLength = this._messageLength;
      const fragments = this._fragments;
      this._totalPayloadLength = 0;
      this._messageLength = 0;
      this._fragmented = 0;
      this._fragments = [];
      if (this._opcode === 2) {
        let data;
        if (this._binaryType === "nodebuffer") {
          data = concat(fragments, messageLength);
        } else if (this._binaryType === "arraybuffer") {
          data = toArrayBuffer(concat(fragments, messageLength));
        } else {
          data = fragments;
        }
        if (this._allowSynchronousEvents) {
          this.emit("message", data, true);
          this._state = GET_INFO;
        } else {
          this._state = DEFER_EVENT;
          setImmediate(() => {
            this.emit("message", data, true);
            this._state = GET_INFO;
            this.startLoop(cb);
          });
        }
      } else {
        const buf = concat(fragments, messageLength);
        if (!this._skipUTF8Validation && !isValidUTF8(buf)) {
          const error = this.createError(Error, "invalid UTF-8 sequence", true, 1007, "WS_ERR_INVALID_UTF8");
          cb(error);
          return;
        }
        if (this._state === INFLATING || this._allowSynchronousEvents) {
          this.emit("message", buf, false);
          this._state = GET_INFO;
        } else {
          this._state = DEFER_EVENT;
          setImmediate(() => {
            this.emit("message", buf, false);
            this._state = GET_INFO;
            this.startLoop(cb);
          });
        }
      }
    }
    controlMessage(data, cb) {
      if (this._opcode === 8) {
        if (data.length === 0) {
          this._loop = false;
          this.emit("conclude", 1005, EMPTY_BUFFER);
          this.end();
        } else {
          const code = data.readUInt16BE(0);
          if (!isValidStatusCode(code)) {
            const error = this.createError(RangeError, `invalid status code ${code}`, true, 1002, "WS_ERR_INVALID_CLOSE_CODE");
            cb(error);
            return;
          }
          const buf = new FastBuffer(data.buffer, data.byteOffset + 2, data.length - 2);
          if (!this._skipUTF8Validation && !isValidUTF8(buf)) {
            const error = this.createError(Error, "invalid UTF-8 sequence", true, 1007, "WS_ERR_INVALID_UTF8");
            cb(error);
            return;
          }
          this._loop = false;
          this.emit("conclude", code, buf);
          this.end();
        }
        this._state = GET_INFO;
        return;
      }
      if (this._allowSynchronousEvents) {
        this.emit(this._opcode === 9 ? "ping" : "pong", data);
        this._state = GET_INFO;
      } else {
        this._state = DEFER_EVENT;
        setImmediate(() => {
          this.emit(this._opcode === 9 ? "ping" : "pong", data);
          this._state = GET_INFO;
          this.startLoop(cb);
        });
      }
    }
    createError(ErrorCtor, message, prefix, statusCode, errorCode) {
      this._loop = false;
      this._errored = true;
      const err = new ErrorCtor(prefix ? `Invalid WebSocket frame: ${message}` : message);
      Error.captureStackTrace(err, this.createError);
      err.code = errorCode;
      err[kStatusCode] = statusCode;
      return err;
    }
  }
  module.exports = Receiver;
});

// node_modules/ws/lib/sender.js
var require_sender = __commonJS((exports, module) => {
  var { Duplex } = __require("stream");
  var { randomFillSync } = __require("crypto");
  var PerMessageDeflate = require_permessage_deflate();
  var { EMPTY_BUFFER } = require_constants();
  var { isValidStatusCode } = require_validation();
  var { mask: applyMask, toBuffer: toBuffer2 } = require_buffer_util();
  var kByteLength = Symbol("kByteLength");
  var maskBuffer = Buffer.alloc(4);
  var RANDOM_POOL_SIZE = 8 * 1024;
  var randomPool;
  var randomPoolPointer = RANDOM_POOL_SIZE;

  class Sender {
    constructor(socket, extensions, generateMask) {
      this._extensions = extensions || {};
      if (generateMask) {
        this._generateMask = generateMask;
        this._maskBuffer = Buffer.alloc(4);
      }
      this._socket = socket;
      this._firstFragment = true;
      this._compress = false;
      this._bufferedBytes = 0;
      this._deflating = false;
      this._queue = [];
    }
    static frame(data, options) {
      let mask;
      let merge = false;
      let offset = 2;
      let skipMasking = false;
      if (options.mask) {
        mask = options.maskBuffer || maskBuffer;
        if (options.generateMask) {
          options.generateMask(mask);
        } else {
          if (randomPoolPointer === RANDOM_POOL_SIZE) {
            if (randomPool === undefined) {
              randomPool = Buffer.alloc(RANDOM_POOL_SIZE);
            }
            randomFillSync(randomPool, 0, RANDOM_POOL_SIZE);
            randomPoolPointer = 0;
          }
          mask[0] = randomPool[randomPoolPointer++];
          mask[1] = randomPool[randomPoolPointer++];
          mask[2] = randomPool[randomPoolPointer++];
          mask[3] = randomPool[randomPoolPointer++];
        }
        skipMasking = (mask[0] | mask[1] | mask[2] | mask[3]) === 0;
        offset = 6;
      }
      let dataLength;
      if (typeof data === "string") {
        if ((!options.mask || skipMasking) && options[kByteLength] !== undefined) {
          dataLength = options[kByteLength];
        } else {
          data = Buffer.from(data);
          dataLength = data.length;
        }
      } else {
        dataLength = data.length;
        merge = options.mask && options.readOnly && !skipMasking;
      }
      let payloadLength = dataLength;
      if (dataLength >= 65536) {
        offset += 8;
        payloadLength = 127;
      } else if (dataLength > 125) {
        offset += 2;
        payloadLength = 126;
      }
      const target = Buffer.allocUnsafe(merge ? dataLength + offset : offset);
      target[0] = options.fin ? options.opcode | 128 : options.opcode;
      if (options.rsv1)
        target[0] |= 64;
      target[1] = payloadLength;
      if (payloadLength === 126) {
        target.writeUInt16BE(dataLength, 2);
      } else if (payloadLength === 127) {
        target[2] = target[3] = 0;
        target.writeUIntBE(dataLength, 4, 6);
      }
      if (!options.mask)
        return [target, data];
      target[1] |= 128;
      target[offset - 4] = mask[0];
      target[offset - 3] = mask[1];
      target[offset - 2] = mask[2];
      target[offset - 1] = mask[3];
      if (skipMasking)
        return [target, data];
      if (merge) {
        applyMask(data, mask, target, offset, dataLength);
        return [target];
      }
      applyMask(data, mask, data, 0, dataLength);
      return [target, data];
    }
    close(code, data, mask, cb) {
      let buf;
      if (code === undefined) {
        buf = EMPTY_BUFFER;
      } else if (typeof code !== "number" || !isValidStatusCode(code)) {
        throw new TypeError("First argument must be a valid error code number");
      } else if (data === undefined || !data.length) {
        buf = Buffer.allocUnsafe(2);
        buf.writeUInt16BE(code, 0);
      } else {
        const length = Buffer.byteLength(data);
        if (length > 123) {
          throw new RangeError("The message must not be greater than 123 bytes");
        }
        buf = Buffer.allocUnsafe(2 + length);
        buf.writeUInt16BE(code, 0);
        if (typeof data === "string") {
          buf.write(data, 2);
        } else {
          buf.set(data, 2);
        }
      }
      const options = {
        [kByteLength]: buf.length,
        fin: true,
        generateMask: this._generateMask,
        mask,
        maskBuffer: this._maskBuffer,
        opcode: 8,
        readOnly: false,
        rsv1: false
      };
      if (this._deflating) {
        this.enqueue([this.dispatch, buf, false, options, cb]);
      } else {
        this.sendFrame(Sender.frame(buf, options), cb);
      }
    }
    ping(data, mask, cb) {
      let byteLength2;
      let readOnly;
      if (typeof data === "string") {
        byteLength2 = Buffer.byteLength(data);
        readOnly = false;
      } else {
        data = toBuffer2(data);
        byteLength2 = data.length;
        readOnly = toBuffer2.readOnly;
      }
      if (byteLength2 > 125) {
        throw new RangeError("The data size must not be greater than 125 bytes");
      }
      const options = {
        [kByteLength]: byteLength2,
        fin: true,
        generateMask: this._generateMask,
        mask,
        maskBuffer: this._maskBuffer,
        opcode: 9,
        readOnly,
        rsv1: false
      };
      if (this._deflating) {
        this.enqueue([this.dispatch, data, false, options, cb]);
      } else {
        this.sendFrame(Sender.frame(data, options), cb);
      }
    }
    pong(data, mask, cb) {
      let byteLength2;
      let readOnly;
      if (typeof data === "string") {
        byteLength2 = Buffer.byteLength(data);
        readOnly = false;
      } else {
        data = toBuffer2(data);
        byteLength2 = data.length;
        readOnly = toBuffer2.readOnly;
      }
      if (byteLength2 > 125) {
        throw new RangeError("The data size must not be greater than 125 bytes");
      }
      const options = {
        [kByteLength]: byteLength2,
        fin: true,
        generateMask: this._generateMask,
        mask,
        maskBuffer: this._maskBuffer,
        opcode: 10,
        readOnly,
        rsv1: false
      };
      if (this._deflating) {
        this.enqueue([this.dispatch, data, false, options, cb]);
      } else {
        this.sendFrame(Sender.frame(data, options), cb);
      }
    }
    send(data, options, cb) {
      const perMessageDeflate = this._extensions[PerMessageDeflate.extensionName];
      let opcode = options.binary ? 2 : 1;
      let rsv1 = options.compress;
      let byteLength2;
      let readOnly;
      if (typeof data === "string") {
        byteLength2 = Buffer.byteLength(data);
        readOnly = false;
      } else {
        data = toBuffer2(data);
        byteLength2 = data.length;
        readOnly = toBuffer2.readOnly;
      }
      if (this._firstFragment) {
        this._firstFragment = false;
        if (rsv1 && perMessageDeflate && perMessageDeflate.params[perMessageDeflate._isServer ? "server_no_context_takeover" : "client_no_context_takeover"]) {
          rsv1 = byteLength2 >= perMessageDeflate._threshold;
        }
        this._compress = rsv1;
      } else {
        rsv1 = false;
        opcode = 0;
      }
      if (options.fin)
        this._firstFragment = true;
      if (perMessageDeflate) {
        const opts = {
          [kByteLength]: byteLength2,
          fin: options.fin,
          generateMask: this._generateMask,
          mask: options.mask,
          maskBuffer: this._maskBuffer,
          opcode,
          readOnly,
          rsv1
        };
        if (this._deflating) {
          this.enqueue([this.dispatch, data, this._compress, opts, cb]);
        } else {
          this.dispatch(data, this._compress, opts, cb);
        }
      } else {
        this.sendFrame(Sender.frame(data, {
          [kByteLength]: byteLength2,
          fin: options.fin,
          generateMask: this._generateMask,
          mask: options.mask,
          maskBuffer: this._maskBuffer,
          opcode,
          readOnly,
          rsv1: false
        }), cb);
      }
    }
    dispatch(data, compress, options, cb) {
      if (!compress) {
        this.sendFrame(Sender.frame(data, options), cb);
        return;
      }
      const perMessageDeflate = this._extensions[PerMessageDeflate.extensionName];
      this._bufferedBytes += options[kByteLength];
      this._deflating = true;
      perMessageDeflate.compress(data, options.fin, (_, buf) => {
        if (this._socket.destroyed) {
          const err = new Error("The socket was closed while data was being compressed");
          if (typeof cb === "function")
            cb(err);
          for (let i = 0;i < this._queue.length; i++) {
            const params = this._queue[i];
            const callback = params[params.length - 1];
            if (typeof callback === "function")
              callback(err);
          }
          return;
        }
        this._bufferedBytes -= options[kByteLength];
        this._deflating = false;
        options.readOnly = false;
        this.sendFrame(Sender.frame(buf, options), cb);
        this.dequeue();
      });
    }
    dequeue() {
      while (!this._deflating && this._queue.length) {
        const params = this._queue.shift();
        this._bufferedBytes -= params[3][kByteLength];
        Reflect.apply(params[0], this, params.slice(1));
      }
    }
    enqueue(params) {
      this._bufferedBytes += params[3][kByteLength];
      this._queue.push(params);
    }
    sendFrame(list, cb) {
      if (list.length === 2) {
        this._socket.cork();
        this._socket.write(list[0]);
        this._socket.write(list[1], cb);
        this._socket.uncork();
      } else {
        this._socket.write(list[0], cb);
      }
    }
  }
  module.exports = Sender;
});

// node_modules/ws/lib/event-target.js
var require_event_target = __commonJS((exports, module) => {
  var { kForOnEventAttribute, kListener } = require_constants();
  var kCode = Symbol("kCode");
  var kData = Symbol("kData");
  var kError = Symbol("kError");
  var kMessage = Symbol("kMessage");
  var kReason = Symbol("kReason");
  var kTarget = Symbol("kTarget");
  var kType = Symbol("kType");
  var kWasClean = Symbol("kWasClean");

  class Event {
    constructor(type) {
      this[kTarget] = null;
      this[kType] = type;
    }
    get target() {
      return this[kTarget];
    }
    get type() {
      return this[kType];
    }
  }
  Object.defineProperty(Event.prototype, "target", { enumerable: true });
  Object.defineProperty(Event.prototype, "type", { enumerable: true });

  class CloseEvent extends Event {
    constructor(type, options = {}) {
      super(type);
      this[kCode] = options.code === undefined ? 0 : options.code;
      this[kReason] = options.reason === undefined ? "" : options.reason;
      this[kWasClean] = options.wasClean === undefined ? false : options.wasClean;
    }
    get code() {
      return this[kCode];
    }
    get reason() {
      return this[kReason];
    }
    get wasClean() {
      return this[kWasClean];
    }
  }
  Object.defineProperty(CloseEvent.prototype, "code", { enumerable: true });
  Object.defineProperty(CloseEvent.prototype, "reason", { enumerable: true });
  Object.defineProperty(CloseEvent.prototype, "wasClean", { enumerable: true });

  class ErrorEvent extends Event {
    constructor(type, options = {}) {
      super(type);
      this[kError] = options.error === undefined ? null : options.error;
      this[kMessage] = options.message === undefined ? "" : options.message;
    }
    get error() {
      return this[kError];
    }
    get message() {
      return this[kMessage];
    }
  }
  Object.defineProperty(ErrorEvent.prototype, "error", { enumerable: true });
  Object.defineProperty(ErrorEvent.prototype, "message", { enumerable: true });

  class MessageEvent extends Event {
    constructor(type, options = {}) {
      super(type);
      this[kData] = options.data === undefined ? null : options.data;
    }
    get data() {
      return this[kData];
    }
  }
  Object.defineProperty(MessageEvent.prototype, "data", { enumerable: true });
  var EventTarget = {
    addEventListener(type, handler, options = {}) {
      for (const listener of this.listeners(type)) {
        if (!options[kForOnEventAttribute] && listener[kListener] === handler && !listener[kForOnEventAttribute]) {
          return;
        }
      }
      let wrapper;
      if (type === "message") {
        wrapper = function onMessage(data, isBinary) {
          const event = new MessageEvent("message", {
            data: isBinary ? data : data.toString()
          });
          event[kTarget] = this;
          callListener(handler, this, event);
        };
      } else if (type === "close") {
        wrapper = function onClose(code, message) {
          const event = new CloseEvent("close", {
            code,
            reason: message.toString(),
            wasClean: this._closeFrameReceived && this._closeFrameSent
          });
          event[kTarget] = this;
          callListener(handler, this, event);
        };
      } else if (type === "error") {
        wrapper = function onError(error) {
          const event = new ErrorEvent("error", {
            error,
            message: error.message
          });
          event[kTarget] = this;
          callListener(handler, this, event);
        };
      } else if (type === "open") {
        wrapper = function onOpen() {
          const event = new Event("open");
          event[kTarget] = this;
          callListener(handler, this, event);
        };
      } else {
        return;
      }
      wrapper[kForOnEventAttribute] = !!options[kForOnEventAttribute];
      wrapper[kListener] = handler;
      if (options.once) {
        this.once(type, wrapper);
      } else {
        this.on(type, wrapper);
      }
    },
    removeEventListener(type, handler) {
      for (const listener of this.listeners(type)) {
        if (listener[kListener] === handler && !listener[kForOnEventAttribute]) {
          this.removeListener(type, listener);
          break;
        }
      }
    }
  };
  module.exports = {
    CloseEvent,
    ErrorEvent,
    Event,
    EventTarget,
    MessageEvent
  };
  function callListener(listener, thisArg, event) {
    if (typeof listener === "object" && listener.handleEvent) {
      listener.handleEvent.call(listener, event);
    } else {
      listener.call(thisArg, event);
    }
  }
});

// node_modules/ws/lib/extension.js
var require_extension = __commonJS((exports, module) => {
  var { tokenChars } = require_validation();
  function push(dest, name, elem) {
    if (dest[name] === undefined)
      dest[name] = [elem];
    else
      dest[name].push(elem);
  }
  function parse4(header) {
    const offers = Object.create(null);
    let params = Object.create(null);
    let mustUnescape = false;
    let isEscaping = false;
    let inQuotes = false;
    let extensionName;
    let paramName;
    let start = -1;
    let code = -1;
    let end = -1;
    let i = 0;
    for (;i < header.length; i++) {
      code = header.charCodeAt(i);
      if (extensionName === undefined) {
        if (end === -1 && tokenChars[code] === 1) {
          if (start === -1)
            start = i;
        } else if (i !== 0 && (code === 32 || code === 9)) {
          if (end === -1 && start !== -1)
            end = i;
        } else if (code === 59 || code === 44) {
          if (start === -1) {
            throw new SyntaxError(`Unexpected character at index ${i}`);
          }
          if (end === -1)
            end = i;
          const name = header.slice(start, end);
          if (code === 44) {
            push(offers, name, params);
            params = Object.create(null);
          } else {
            extensionName = name;
          }
          start = end = -1;
        } else {
          throw new SyntaxError(`Unexpected character at index ${i}`);
        }
      } else if (paramName === undefined) {
        if (end === -1 && tokenChars[code] === 1) {
          if (start === -1)
            start = i;
        } else if (code === 32 || code === 9) {
          if (end === -1 && start !== -1)
            end = i;
        } else if (code === 59 || code === 44) {
          if (start === -1) {
            throw new SyntaxError(`Unexpected character at index ${i}`);
          }
          if (end === -1)
            end = i;
          push(params, header.slice(start, end), true);
          if (code === 44) {
            push(offers, extensionName, params);
            params = Object.create(null);
            extensionName = undefined;
          }
          start = end = -1;
        } else if (code === 61 && start !== -1 && end === -1) {
          paramName = header.slice(start, i);
          start = end = -1;
        } else {
          throw new SyntaxError(`Unexpected character at index ${i}`);
        }
      } else {
        if (isEscaping) {
          if (tokenChars[code] !== 1) {
            throw new SyntaxError(`Unexpected character at index ${i}`);
          }
          if (start === -1)
            start = i;
          else if (!mustUnescape)
            mustUnescape = true;
          isEscaping = false;
        } else if (inQuotes) {
          if (tokenChars[code] === 1) {
            if (start === -1)
              start = i;
          } else if (code === 34 && start !== -1) {
            inQuotes = false;
            end = i;
          } else if (code === 92) {
            isEscaping = true;
          } else {
            throw new SyntaxError(`Unexpected character at index ${i}`);
          }
        } else if (code === 34 && header.charCodeAt(i - 1) === 61) {
          inQuotes = true;
        } else if (end === -1 && tokenChars[code] === 1) {
          if (start === -1)
            start = i;
        } else if (start !== -1 && (code === 32 || code === 9)) {
          if (end === -1)
            end = i;
        } else if (code === 59 || code === 44) {
          if (start === -1) {
            throw new SyntaxError(`Unexpected character at index ${i}`);
          }
          if (end === -1)
            end = i;
          let value2 = header.slice(start, end);
          if (mustUnescape) {
            value2 = value2.replace(/\\/g, "");
            mustUnescape = false;
          }
          push(params, paramName, value2);
          if (code === 44) {
            push(offers, extensionName, params);
            params = Object.create(null);
            extensionName = undefined;
          }
          paramName = undefined;
          start = end = -1;
        } else {
          throw new SyntaxError(`Unexpected character at index ${i}`);
        }
      }
    }
    if (start === -1 || inQuotes || code === 32 || code === 9) {
      throw new SyntaxError("Unexpected end of input");
    }
    if (end === -1)
      end = i;
    const token = header.slice(start, end);
    if (extensionName === undefined) {
      push(offers, token, params);
    } else {
      if (paramName === undefined) {
        push(params, token, true);
      } else if (mustUnescape) {
        push(params, paramName, token.replace(/\\/g, ""));
      } else {
        push(params, paramName, token);
      }
      push(offers, extensionName, params);
    }
    return offers;
  }
  function format(extensions) {
    return Object.keys(extensions).map((extension) => {
      let configurations = extensions[extension];
      if (!Array.isArray(configurations))
        configurations = [configurations];
      return configurations.map((params) => {
        return [extension].concat(Object.keys(params).map((k) => {
          let values = params[k];
          if (!Array.isArray(values))
            values = [values];
          return values.map((v) => v === true ? k : `${k}=${v}`).join("; ");
        })).join("; ");
      }).join(", ");
    }).join(", ");
  }
  module.exports = { format, parse: parse4 };
});

// node_modules/ws/lib/websocket.js
var require_websocket = __commonJS((exports, module) => {
  var EventEmitter = __require("events");
  var https = __require("https");
  var http = __require("http");
  var net = __require("net");
  var tls = __require("tls");
  var { randomBytes, createHash } = __require("crypto");
  var { Duplex, Readable } = __require("stream");
  var { URL: URL2 } = __require("url");
  var PerMessageDeflate = require_permessage_deflate();
  var Receiver = require_receiver();
  var Sender = require_sender();
  var {
    BINARY_TYPES,
    EMPTY_BUFFER,
    GUID,
    kForOnEventAttribute,
    kListener,
    kStatusCode,
    kWebSocket,
    NOOP
  } = require_constants();
  var {
    EventTarget: { addEventListener: addEventListener2, removeEventListener: removeEventListener2 }
  } = require_event_target();
  var { format, parse: parse4 } = require_extension();
  var { toBuffer: toBuffer2 } = require_buffer_util();
  var closeTimeout = 30 * 1000;
  var kAborted = Symbol("kAborted");
  var protocolVersions = [8, 13];
  var readyStates = ["CONNECTING", "OPEN", "CLOSING", "CLOSED"];
  var subprotocolRegex = /^[!#$%&'*+\-.0-9A-Z^_`|a-z~]+$/;

  class WebSocket extends EventEmitter {
    constructor(address, protocols, options) {
      super();
      this._binaryType = BINARY_TYPES[0];
      this._closeCode = 1006;
      this._closeFrameReceived = false;
      this._closeFrameSent = false;
      this._closeMessage = EMPTY_BUFFER;
      this._closeTimer = null;
      this._extensions = {};
      this._paused = false;
      this._protocol = "";
      this._readyState = WebSocket.CONNECTING;
      this._receiver = null;
      this._sender = null;
      this._socket = null;
      if (address !== null) {
        this._bufferedAmount = 0;
        this._isServer = false;
        this._redirects = 0;
        if (protocols === undefined) {
          protocols = [];
        } else if (!Array.isArray(protocols)) {
          if (typeof protocols === "object" && protocols !== null) {
            options = protocols;
            protocols = [];
          } else {
            protocols = [protocols];
          }
        }
        initAsClient(this, address, protocols, options);
      } else {
        this._autoPong = options.autoPong;
        this._isServer = true;
      }
    }
    get binaryType() {
      return this._binaryType;
    }
    set binaryType(type) {
      if (!BINARY_TYPES.includes(type))
        return;
      this._binaryType = type;
      if (this._receiver)
        this._receiver._binaryType = type;
    }
    get bufferedAmount() {
      if (!this._socket)
        return this._bufferedAmount;
      return this._socket._writableState.length + this._sender._bufferedBytes;
    }
    get extensions() {
      return Object.keys(this._extensions).join();
    }
    get isPaused() {
      return this._paused;
    }
    get onclose() {
      return null;
    }
    get onerror() {
      return null;
    }
    get onopen() {
      return null;
    }
    get onmessage() {
      return null;
    }
    get protocol() {
      return this._protocol;
    }
    get readyState() {
      return this._readyState;
    }
    get url() {
      return this._url;
    }
    setSocket(socket, head, options) {
      const receiver = new Receiver({
        allowSynchronousEvents: options.allowSynchronousEvents,
        binaryType: this.binaryType,
        extensions: this._extensions,
        isServer: this._isServer,
        maxPayload: options.maxPayload,
        skipUTF8Validation: options.skipUTF8Validation
      });
      this._sender = new Sender(socket, this._extensions, options.generateMask);
      this._receiver = receiver;
      this._socket = socket;
      receiver[kWebSocket] = this;
      socket[kWebSocket] = this;
      receiver.on("conclude", receiverOnConclude);
      receiver.on("drain", receiverOnDrain);
      receiver.on("error", receiverOnError);
      receiver.on("message", receiverOnMessage);
      receiver.on("ping", receiverOnPing);
      receiver.on("pong", receiverOnPong);
      if (socket.setTimeout)
        socket.setTimeout(0);
      if (socket.setNoDelay)
        socket.setNoDelay();
      if (head.length > 0)
        socket.unshift(head);
      socket.on("close", socketOnClose);
      socket.on("data", socketOnData);
      socket.on("end", socketOnEnd);
      socket.on("error", socketOnError);
      this._readyState = WebSocket.OPEN;
      this.emit("open");
    }
    emitClose() {
      if (!this._socket) {
        this._readyState = WebSocket.CLOSED;
        this.emit("close", this._closeCode, this._closeMessage);
        return;
      }
      if (this._extensions[PerMessageDeflate.extensionName]) {
        this._extensions[PerMessageDeflate.extensionName].cleanup();
      }
      this._receiver.removeAllListeners();
      this._readyState = WebSocket.CLOSED;
      this.emit("close", this._closeCode, this._closeMessage);
    }
    close(code, data) {
      if (this.readyState === WebSocket.CLOSED)
        return;
      if (this.readyState === WebSocket.CONNECTING) {
        const msg = "WebSocket was closed before the connection was established";
        abortHandshake(this, this._req, msg);
        return;
      }
      if (this.readyState === WebSocket.CLOSING) {
        if (this._closeFrameSent && (this._closeFrameReceived || this._receiver._writableState.errorEmitted)) {
          this._socket.end();
        }
        return;
      }
      this._readyState = WebSocket.CLOSING;
      this._sender.close(code, data, !this._isServer, (err) => {
        if (err)
          return;
        this._closeFrameSent = true;
        if (this._closeFrameReceived || this._receiver._writableState.errorEmitted) {
          this._socket.end();
        }
      });
      this._closeTimer = setTimeout(this._socket.destroy.bind(this._socket), closeTimeout);
    }
    pause() {
      if (this.readyState === WebSocket.CONNECTING || this.readyState === WebSocket.CLOSED) {
        return;
      }
      this._paused = true;
      this._socket.pause();
    }
    ping(data, mask, cb) {
      if (this.readyState === WebSocket.CONNECTING) {
        throw new Error("WebSocket is not open: readyState 0 (CONNECTING)");
      }
      if (typeof data === "function") {
        cb = data;
        data = mask = undefined;
      } else if (typeof mask === "function") {
        cb = mask;
        mask = undefined;
      }
      if (typeof data === "number")
        data = data.toString();
      if (this.readyState !== WebSocket.OPEN) {
        sendAfterClose(this, data, cb);
        return;
      }
      if (mask === undefined)
        mask = !this._isServer;
      this._sender.ping(data || EMPTY_BUFFER, mask, cb);
    }
    pong(data, mask, cb) {
      if (this.readyState === WebSocket.CONNECTING) {
        throw new Error("WebSocket is not open: readyState 0 (CONNECTING)");
      }
      if (typeof data === "function") {
        cb = data;
        data = mask = undefined;
      } else if (typeof mask === "function") {
        cb = mask;
        mask = undefined;
      }
      if (typeof data === "number")
        data = data.toString();
      if (this.readyState !== WebSocket.OPEN) {
        sendAfterClose(this, data, cb);
        return;
      }
      if (mask === undefined)
        mask = !this._isServer;
      this._sender.pong(data || EMPTY_BUFFER, mask, cb);
    }
    resume() {
      if (this.readyState === WebSocket.CONNECTING || this.readyState === WebSocket.CLOSED) {
        return;
      }
      this._paused = false;
      if (!this._receiver._writableState.needDrain)
        this._socket.resume();
    }
    send(data, options, cb) {
      if (this.readyState === WebSocket.CONNECTING) {
        throw new Error("WebSocket is not open: readyState 0 (CONNECTING)");
      }
      if (typeof options === "function") {
        cb = options;
        options = {};
      }
      if (typeof data === "number")
        data = data.toString();
      if (this.readyState !== WebSocket.OPEN) {
        sendAfterClose(this, data, cb);
        return;
      }
      const opts = {
        binary: typeof data !== "string",
        mask: !this._isServer,
        compress: true,
        fin: true,
        ...options
      };
      if (!this._extensions[PerMessageDeflate.extensionName]) {
        opts.compress = false;
      }
      this._sender.send(data || EMPTY_BUFFER, opts, cb);
    }
    terminate() {
      if (this.readyState === WebSocket.CLOSED)
        return;
      if (this.readyState === WebSocket.CONNECTING) {
        const msg = "WebSocket was closed before the connection was established";
        abortHandshake(this, this._req, msg);
        return;
      }
      if (this._socket) {
        this._readyState = WebSocket.CLOSING;
        this._socket.destroy();
      }
    }
  }
  Object.defineProperty(WebSocket, "CONNECTING", {
    enumerable: true,
    value: readyStates.indexOf("CONNECTING")
  });
  Object.defineProperty(WebSocket.prototype, "CONNECTING", {
    enumerable: true,
    value: readyStates.indexOf("CONNECTING")
  });
  Object.defineProperty(WebSocket, "OPEN", {
    enumerable: true,
    value: readyStates.indexOf("OPEN")
  });
  Object.defineProperty(WebSocket.prototype, "OPEN", {
    enumerable: true,
    value: readyStates.indexOf("OPEN")
  });
  Object.defineProperty(WebSocket, "CLOSING", {
    enumerable: true,
    value: readyStates.indexOf("CLOSING")
  });
  Object.defineProperty(WebSocket.prototype, "CLOSING", {
    enumerable: true,
    value: readyStates.indexOf("CLOSING")
  });
  Object.defineProperty(WebSocket, "CLOSED", {
    enumerable: true,
    value: readyStates.indexOf("CLOSED")
  });
  Object.defineProperty(WebSocket.prototype, "CLOSED", {
    enumerable: true,
    value: readyStates.indexOf("CLOSED")
  });
  [
    "binaryType",
    "bufferedAmount",
    "extensions",
    "isPaused",
    "protocol",
    "readyState",
    "url"
  ].forEach((property) => {
    Object.defineProperty(WebSocket.prototype, property, { enumerable: true });
  });
  ["open", "error", "close", "message"].forEach((method) => {
    Object.defineProperty(WebSocket.prototype, `on${method}`, {
      enumerable: true,
      get() {
        for (const listener of this.listeners(method)) {
          if (listener[kForOnEventAttribute])
            return listener[kListener];
        }
        return null;
      },
      set(handler) {
        for (const listener of this.listeners(method)) {
          if (listener[kForOnEventAttribute]) {
            this.removeListener(method, listener);
            break;
          }
        }
        if (typeof handler !== "function")
          return;
        this.addEventListener(method, handler, {
          [kForOnEventAttribute]: true
        });
      }
    });
  });
  WebSocket.prototype.addEventListener = addEventListener2;
  WebSocket.prototype.removeEventListener = removeEventListener2;
  module.exports = WebSocket;
  function initAsClient(websocket2, address, protocols, options) {
    const opts = {
      allowSynchronousEvents: true,
      autoPong: true,
      protocolVersion: protocolVersions[1],
      maxPayload: 100 * 1024 * 1024,
      skipUTF8Validation: false,
      perMessageDeflate: true,
      followRedirects: false,
      maxRedirects: 10,
      ...options,
      socketPath: undefined,
      hostname: undefined,
      protocol: undefined,
      timeout: undefined,
      method: "GET",
      host: undefined,
      path: undefined,
      port: undefined
    };
    websocket2._autoPong = opts.autoPong;
    if (!protocolVersions.includes(opts.protocolVersion)) {
      throw new RangeError(`Unsupported protocol version: ${opts.protocolVersion} ` + `(supported versions: ${protocolVersions.join(", ")})`);
    }
    let parsedUrl;
    if (address instanceof URL2) {
      parsedUrl = address;
    } else {
      try {
        parsedUrl = new URL2(address);
      } catch (e) {
        throw new SyntaxError(`Invalid URL: ${address}`);
      }
    }
    if (parsedUrl.protocol === "http:") {
      parsedUrl.protocol = "ws:";
    } else if (parsedUrl.protocol === "https:") {
      parsedUrl.protocol = "wss:";
    }
    websocket2._url = parsedUrl.href;
    const isSecure = parsedUrl.protocol === "wss:";
    const isIpcUrl = parsedUrl.protocol === "ws+unix:";
    let invalidUrlMessage;
    if (parsedUrl.protocol !== "ws:" && !isSecure && !isIpcUrl) {
      invalidUrlMessage = `The URL's protocol must be one of "ws:", "wss:", ` + '"http:", "https", or "ws+unix:"';
    } else if (isIpcUrl && !parsedUrl.pathname) {
      invalidUrlMessage = "The URL's pathname is empty";
    } else if (parsedUrl.hash) {
      invalidUrlMessage = "The URL contains a fragment identifier";
    }
    if (invalidUrlMessage) {
      const err = new SyntaxError(invalidUrlMessage);
      if (websocket2._redirects === 0) {
        throw err;
      } else {
        emitErrorAndClose(websocket2, err);
        return;
      }
    }
    const defaultPort = isSecure ? 443 : 80;
    const key = randomBytes(16).toString("base64");
    const request = isSecure ? https.request : http.request;
    const protocolSet = new Set;
    let perMessageDeflate;
    opts.createConnection = opts.createConnection || (isSecure ? tlsConnect : netConnect);
    opts.defaultPort = opts.defaultPort || defaultPort;
    opts.port = parsedUrl.port || defaultPort;
    opts.host = parsedUrl.hostname.startsWith("[") ? parsedUrl.hostname.slice(1, -1) : parsedUrl.hostname;
    opts.headers = {
      ...opts.headers,
      "Sec-WebSocket-Version": opts.protocolVersion,
      "Sec-WebSocket-Key": key,
      Connection: "Upgrade",
      Upgrade: "websocket"
    };
    opts.path = parsedUrl.pathname + parsedUrl.search;
    opts.timeout = opts.handshakeTimeout;
    if (opts.perMessageDeflate) {
      perMessageDeflate = new PerMessageDeflate(opts.perMessageDeflate !== true ? opts.perMessageDeflate : {}, false, opts.maxPayload);
      opts.headers["Sec-WebSocket-Extensions"] = format({
        [PerMessageDeflate.extensionName]: perMessageDeflate.offer()
      });
    }
    if (protocols.length) {
      for (const protocol2 of protocols) {
        if (typeof protocol2 !== "string" || !subprotocolRegex.test(protocol2) || protocolSet.has(protocol2)) {
          throw new SyntaxError("An invalid or duplicated subprotocol was specified");
        }
        protocolSet.add(protocol2);
      }
      opts.headers["Sec-WebSocket-Protocol"] = protocols.join(",");
    }
    if (opts.origin) {
      if (opts.protocolVersion < 13) {
        opts.headers["Sec-WebSocket-Origin"] = opts.origin;
      } else {
        opts.headers.Origin = opts.origin;
      }
    }
    if (parsedUrl.username || parsedUrl.password) {
      opts.auth = `${parsedUrl.username}:${parsedUrl.password}`;
    }
    if (isIpcUrl) {
      const parts = opts.path.split(":");
      opts.socketPath = parts[0];
      opts.path = parts[1];
    }
    let req;
    if (opts.followRedirects) {
      if (websocket2._redirects === 0) {
        websocket2._originalIpc = isIpcUrl;
        websocket2._originalSecure = isSecure;
        websocket2._originalHostOrSocketPath = isIpcUrl ? opts.socketPath : parsedUrl.host;
        const headers = options && options.headers;
        options = { ...options, headers: {} };
        if (headers) {
          for (const [key2, value2] of Object.entries(headers)) {
            options.headers[key2.toLowerCase()] = value2;
          }
        }
      } else if (websocket2.listenerCount("redirect") === 0) {
        const isSameHost = isIpcUrl ? websocket2._originalIpc ? opts.socketPath === websocket2._originalHostOrSocketPath : false : websocket2._originalIpc ? false : parsedUrl.host === websocket2._originalHostOrSocketPath;
        if (!isSameHost || websocket2._originalSecure && !isSecure) {
          delete opts.headers.authorization;
          delete opts.headers.cookie;
          if (!isSameHost)
            delete opts.headers.host;
          opts.auth = undefined;
        }
      }
      if (opts.auth && !options.headers.authorization) {
        options.headers.authorization = "Basic " + Buffer.from(opts.auth).toString("base64");
      }
      req = websocket2._req = request(opts);
      if (websocket2._redirects) {
        websocket2.emit("redirect", websocket2.url, req);
      }
    } else {
      req = websocket2._req = request(opts);
    }
    if (opts.timeout) {
      req.on("timeout", () => {
        abortHandshake(websocket2, req, "Opening handshake has timed out");
      });
    }
    req.on("error", (err) => {
      if (req === null || req[kAborted])
        return;
      req = websocket2._req = null;
      emitErrorAndClose(websocket2, err);
    });
    req.on("response", (res) => {
      const location2 = res.headers.location;
      const statusCode = res.statusCode;
      if (location2 && opts.followRedirects && statusCode >= 300 && statusCode < 400) {
        if (++websocket2._redirects > opts.maxRedirects) {
          abortHandshake(websocket2, req, "Maximum redirects exceeded");
          return;
        }
        req.abort();
        let addr;
        try {
          addr = new URL2(location2, address);
        } catch (e) {
          const err = new SyntaxError(`Invalid URL: ${location2}`);
          emitErrorAndClose(websocket2, err);
          return;
        }
        initAsClient(websocket2, addr, protocols, options);
      } else if (!websocket2.emit("unexpected-response", req, res)) {
        abortHandshake(websocket2, req, `Unexpected server response: ${res.statusCode}`);
      }
    });
    req.on("upgrade", (res, socket, head) => {
      websocket2.emit("upgrade", res);
      if (websocket2.readyState !== WebSocket.CONNECTING)
        return;
      req = websocket2._req = null;
      const upgrade = res.headers.upgrade;
      if (upgrade === undefined || upgrade.toLowerCase() !== "websocket") {
        abortHandshake(websocket2, socket, "Invalid Upgrade header");
        return;
      }
      const digest = createHash("sha1").update(key + GUID).digest("base64");
      if (res.headers["sec-websocket-accept"] !== digest) {
        abortHandshake(websocket2, socket, "Invalid Sec-WebSocket-Accept header");
        return;
      }
      const serverProt = res.headers["sec-websocket-protocol"];
      let protError;
      if (serverProt !== undefined) {
        if (!protocolSet.size) {
          protError = "Server sent a subprotocol but none was requested";
        } else if (!protocolSet.has(serverProt)) {
          protError = "Server sent an invalid subprotocol";
        }
      } else if (protocolSet.size) {
        protError = "Server sent no subprotocol";
      }
      if (protError) {
        abortHandshake(websocket2, socket, protError);
        return;
      }
      if (serverProt)
        websocket2._protocol = serverProt;
      const secWebSocketExtensions = res.headers["sec-websocket-extensions"];
      if (secWebSocketExtensions !== undefined) {
        if (!perMessageDeflate) {
          const message = "Server sent a Sec-WebSocket-Extensions header but no extension " + "was requested";
          abortHandshake(websocket2, socket, message);
          return;
        }
        let extensions;
        try {
          extensions = parse4(secWebSocketExtensions);
        } catch (err) {
          const message = "Invalid Sec-WebSocket-Extensions header";
          abortHandshake(websocket2, socket, message);
          return;
        }
        const extensionNames = Object.keys(extensions);
        if (extensionNames.length !== 1 || extensionNames[0] !== PerMessageDeflate.extensionName) {
          const message = "Server indicated an extension that was not requested";
          abortHandshake(websocket2, socket, message);
          return;
        }
        try {
          perMessageDeflate.accept(extensions[PerMessageDeflate.extensionName]);
        } catch (err) {
          const message = "Invalid Sec-WebSocket-Extensions header";
          abortHandshake(websocket2, socket, message);
          return;
        }
        websocket2._extensions[PerMessageDeflate.extensionName] = perMessageDeflate;
      }
      websocket2.setSocket(socket, head, {
        allowSynchronousEvents: opts.allowSynchronousEvents,
        generateMask: opts.generateMask,
        maxPayload: opts.maxPayload,
        skipUTF8Validation: opts.skipUTF8Validation
      });
    });
    if (opts.finishRequest) {
      opts.finishRequest(req, websocket2);
    } else {
      req.end();
    }
  }
  function emitErrorAndClose(websocket2, err) {
    websocket2._readyState = WebSocket.CLOSING;
    websocket2.emit("error", err);
    websocket2.emitClose();
  }
  function netConnect(options) {
    options.path = options.socketPath;
    return net.connect(options);
  }
  function tlsConnect(options) {
    options.path = undefined;
    if (!options.servername && options.servername !== "") {
      options.servername = net.isIP(options.host) ? "" : options.host;
    }
    return tls.connect(options);
  }
  function abortHandshake(websocket2, stream, message) {
    websocket2._readyState = WebSocket.CLOSING;
    const err = new Error(message);
    Error.captureStackTrace(err, abortHandshake);
    if (stream.setHeader) {
      stream[kAborted] = true;
      stream.abort();
      if (stream.socket && !stream.socket.destroyed) {
        stream.socket.destroy();
      }
      process.nextTick(emitErrorAndClose, websocket2, err);
    } else {
      stream.destroy(err);
      stream.once("error", websocket2.emit.bind(websocket2, "error"));
      stream.once("close", websocket2.emitClose.bind(websocket2));
    }
  }
  function sendAfterClose(websocket2, data, cb) {
    if (data) {
      const length = toBuffer2(data).length;
      if (websocket2._socket)
        websocket2._sender._bufferedBytes += length;
      else
        websocket2._bufferedAmount += length;
    }
    if (cb) {
      const err = new Error(`WebSocket is not open: readyState ${websocket2.readyState} ` + `(${readyStates[websocket2.readyState]})`);
      process.nextTick(cb, err);
    }
  }
  function receiverOnConclude(code, reason) {
    const websocket2 = this[kWebSocket];
    websocket2._closeFrameReceived = true;
    websocket2._closeMessage = reason;
    websocket2._closeCode = code;
    if (websocket2._socket[kWebSocket] === undefined)
      return;
    websocket2._socket.removeListener("data", socketOnData);
    process.nextTick(resume, websocket2._socket);
    if (code === 1005)
      websocket2.close();
    else
      websocket2.close(code, reason);
  }
  function receiverOnDrain() {
    const websocket2 = this[kWebSocket];
    if (!websocket2.isPaused)
      websocket2._socket.resume();
  }
  function receiverOnError(err) {
    const websocket2 = this[kWebSocket];
    if (websocket2._socket[kWebSocket] !== undefined) {
      websocket2._socket.removeListener("data", socketOnData);
      process.nextTick(resume, websocket2._socket);
      websocket2.close(err[kStatusCode]);
    }
    websocket2.emit("error", err);
  }
  function receiverOnFinish() {
    this[kWebSocket].emitClose();
  }
  function receiverOnMessage(data, isBinary) {
    this[kWebSocket].emit("message", data, isBinary);
  }
  function receiverOnPing(data) {
    const websocket2 = this[kWebSocket];
    if (websocket2._autoPong)
      websocket2.pong(data, !this._isServer, NOOP);
    websocket2.emit("ping", data);
  }
  function receiverOnPong(data) {
    this[kWebSocket].emit("pong", data);
  }
  function resume(stream) {
    stream.resume();
  }
  function socketOnClose() {
    const websocket2 = this[kWebSocket];
    this.removeListener("close", socketOnClose);
    this.removeListener("data", socketOnData);
    this.removeListener("end", socketOnEnd);
    websocket2._readyState = WebSocket.CLOSING;
    let chunk;
    if (!this._readableState.endEmitted && !websocket2._closeFrameReceived && !websocket2._receiver._writableState.errorEmitted && (chunk = websocket2._socket.read()) !== null) {
      websocket2._receiver.write(chunk);
    }
    websocket2._receiver.end();
    this[kWebSocket] = undefined;
    clearTimeout(websocket2._closeTimer);
    if (websocket2._receiver._writableState.finished || websocket2._receiver._writableState.errorEmitted) {
      websocket2.emitClose();
    } else {
      websocket2._receiver.on("error", receiverOnFinish);
      websocket2._receiver.on("finish", receiverOnFinish);
    }
  }
  function socketOnData(chunk) {
    if (!this[kWebSocket]._receiver.write(chunk)) {
      this.pause();
    }
  }
  function socketOnEnd() {
    const websocket2 = this[kWebSocket];
    websocket2._readyState = WebSocket.CLOSING;
    websocket2._receiver.end();
    this.end();
  }
  function socketOnError() {
    const websocket2 = this[kWebSocket];
    this.removeListener("error", socketOnError);
    this.on("error", NOOP);
    if (websocket2) {
      websocket2._readyState = WebSocket.CLOSING;
      this.destroy();
    }
  }
});

// node_modules/ws/lib/subprotocol.js
var require_subprotocol = __commonJS((exports, module) => {
  var { tokenChars } = require_validation();
  function parse4(header) {
    const protocols = new Set;
    let start = -1;
    let end = -1;
    let i = 0;
    for (i;i < header.length; i++) {
      const code = header.charCodeAt(i);
      if (end === -1 && tokenChars[code] === 1) {
        if (start === -1)
          start = i;
      } else if (i !== 0 && (code === 32 || code === 9)) {
        if (end === -1 && start !== -1)
          end = i;
      } else if (code === 44) {
        if (start === -1) {
          throw new SyntaxError(`Unexpected character at index ${i}`);
        }
        if (end === -1)
          end = i;
        const protocol3 = header.slice(start, end);
        if (protocols.has(protocol3)) {
          throw new SyntaxError(`The "${protocol3}" subprotocol is duplicated`);
        }
        protocols.add(protocol3);
        start = end = -1;
      } else {
        throw new SyntaxError(`Unexpected character at index ${i}`);
      }
    }
    if (start === -1 || end !== -1) {
      throw new SyntaxError("Unexpected end of input");
    }
    const protocol2 = header.slice(start, i);
    if (protocols.has(protocol2)) {
      throw new SyntaxError(`The "${protocol2}" subprotocol is duplicated`);
    }
    protocols.add(protocol2);
    return protocols;
  }
  module.exports = { parse: parse4 };
});

// node_modules/ws/lib/websocket-server.js
var require_websocket_server = __commonJS((exports, module) => {
  var EventEmitter = __require("events");
  var http = __require("http");
  var { Duplex } = __require("stream");
  var { createHash } = __require("crypto");
  var extension = require_extension();
  var PerMessageDeflate = require_permessage_deflate();
  var subprotocol = require_subprotocol();
  var WebSocket = require_websocket();
  var { GUID, kWebSocket } = require_constants();
  var keyRegex = /^[+/0-9A-Za-z]{22}==$/;
  var RUNNING = 0;
  var CLOSING = 1;
  var CLOSED = 2;

  class WebSocketServer extends EventEmitter {
    constructor(options, callback) {
      super();
      options = {
        allowSynchronousEvents: true,
        autoPong: true,
        maxPayload: 100 * 1024 * 1024,
        skipUTF8Validation: false,
        perMessageDeflate: false,
        handleProtocols: null,
        clientTracking: true,
        verifyClient: null,
        noServer: false,
        backlog: null,
        server: null,
        host: null,
        path: null,
        port: null,
        WebSocket,
        ...options
      };
      if (options.port == null && !options.server && !options.noServer || options.port != null && (options.server || options.noServer) || options.server && options.noServer) {
        throw new TypeError('One and only one of the "port", "server", or "noServer" options ' + "must be specified");
      }
      if (options.port != null) {
        this._server = http.createServer((req, res) => {
          const body = http.STATUS_CODES[426];
          res.writeHead(426, {
            "Content-Length": body.length,
            "Content-Type": "text/plain"
          });
          res.end(body);
        });
        this._server.listen(options.port, options.host, options.backlog, callback);
      } else if (options.server) {
        this._server = options.server;
      }
      if (this._server) {
        const emitConnection = this.emit.bind(this, "connection");
        this._removeListeners = addListeners(this._server, {
          listening: this.emit.bind(this, "listening"),
          error: this.emit.bind(this, "error"),
          upgrade: (req, socket, head) => {
            this.handleUpgrade(req, socket, head, emitConnection);
          }
        });
      }
      if (options.perMessageDeflate === true)
        options.perMessageDeflate = {};
      if (options.clientTracking) {
        this.clients = new Set;
        this._shouldEmitClose = false;
      }
      this.options = options;
      this._state = RUNNING;
    }
    address() {
      if (this.options.noServer) {
        throw new Error('The server is operating in "noServer" mode');
      }
      if (!this._server)
        return null;
      return this._server.address();
    }
    close(cb) {
      if (this._state === CLOSED) {
        if (cb) {
          this.once("close", () => {
            cb(new Error("The server is not running"));
          });
        }
        process.nextTick(emitClose, this);
        return;
      }
      if (cb)
        this.once("close", cb);
      if (this._state === CLOSING)
        return;
      this._state = CLOSING;
      if (this.options.noServer || this.options.server) {
        if (this._server) {
          this._removeListeners();
          this._removeListeners = this._server = null;
        }
        if (this.clients) {
          if (!this.clients.size) {
            process.nextTick(emitClose, this);
          } else {
            this._shouldEmitClose = true;
          }
        } else {
          process.nextTick(emitClose, this);
        }
      } else {
        const server = this._server;
        this._removeListeners();
        this._removeListeners = this._server = null;
        server.close(() => {
          emitClose(this);
        });
      }
    }
    shouldHandle(req) {
      if (this.options.path) {
        const index = req.url.indexOf("?");
        const pathname = index !== -1 ? req.url.slice(0, index) : req.url;
        if (pathname !== this.options.path)
          return false;
      }
      return true;
    }
    handleUpgrade(req, socket, head, cb) {
      socket.on("error", socketOnError);
      const key = req.headers["sec-websocket-key"];
      const upgrade = req.headers.upgrade;
      const version = +req.headers["sec-websocket-version"];
      if (req.method !== "GET") {
        const message = "Invalid HTTP method";
        abortHandshakeOrEmitwsClientError(this, req, socket, 405, message);
        return;
      }
      if (upgrade === undefined || upgrade.toLowerCase() !== "websocket") {
        const message = "Invalid Upgrade header";
        abortHandshakeOrEmitwsClientError(this, req, socket, 400, message);
        return;
      }
      if (key === undefined || !keyRegex.test(key)) {
        const message = "Missing or invalid Sec-WebSocket-Key header";
        abortHandshakeOrEmitwsClientError(this, req, socket, 400, message);
        return;
      }
      if (version !== 8 && version !== 13) {
        const message = "Missing or invalid Sec-WebSocket-Version header";
        abortHandshakeOrEmitwsClientError(this, req, socket, 400, message);
        return;
      }
      if (!this.shouldHandle(req)) {
        abortHandshake(socket, 400);
        return;
      }
      const secWebSocketProtocol = req.headers["sec-websocket-protocol"];
      let protocols = new Set;
      if (secWebSocketProtocol !== undefined) {
        try {
          protocols = subprotocol.parse(secWebSocketProtocol);
        } catch (err) {
          const message = "Invalid Sec-WebSocket-Protocol header";
          abortHandshakeOrEmitwsClientError(this, req, socket, 400, message);
          return;
        }
      }
      const secWebSocketExtensions = req.headers["sec-websocket-extensions"];
      const extensions = {};
      if (this.options.perMessageDeflate && secWebSocketExtensions !== undefined) {
        const perMessageDeflate = new PerMessageDeflate(this.options.perMessageDeflate, true, this.options.maxPayload);
        try {
          const offers = extension.parse(secWebSocketExtensions);
          if (offers[PerMessageDeflate.extensionName]) {
            perMessageDeflate.accept(offers[PerMessageDeflate.extensionName]);
            extensions[PerMessageDeflate.extensionName] = perMessageDeflate;
          }
        } catch (err) {
          const message = "Invalid or unacceptable Sec-WebSocket-Extensions header";
          abortHandshakeOrEmitwsClientError(this, req, socket, 400, message);
          return;
        }
      }
      if (this.options.verifyClient) {
        const info = {
          origin: req.headers[`${version === 8 ? "sec-websocket-origin" : "origin"}`],
          secure: !!(req.socket.authorized || req.socket.encrypted),
          req
        };
        if (this.options.verifyClient.length === 2) {
          this.options.verifyClient(info, (verified, code, message, headers) => {
            if (!verified) {
              return abortHandshake(socket, code || 401, message, headers);
            }
            this.completeUpgrade(extensions, key, protocols, req, socket, head, cb);
          });
          return;
        }
        if (!this.options.verifyClient(info))
          return abortHandshake(socket, 401);
      }
      this.completeUpgrade(extensions, key, protocols, req, socket, head, cb);
    }
    completeUpgrade(extensions, key, protocols, req, socket, head, cb) {
      if (!socket.readable || !socket.writable)
        return socket.destroy();
      if (socket[kWebSocket]) {
        throw new Error("server.handleUpgrade() was called more than once with the same " + "socket, possibly due to a misconfiguration");
      }
      if (this._state > RUNNING)
        return abortHandshake(socket, 503);
      const digest = createHash("sha1").update(key + GUID).digest("base64");
      const headers = [
        "HTTP/1.1 101 Switching Protocols",
        "Upgrade: websocket",
        "Connection: Upgrade",
        `Sec-WebSocket-Accept: ${digest}`
      ];
      const ws = new this.options.WebSocket(null, undefined, this.options);
      if (protocols.size) {
        const protocol2 = this.options.handleProtocols ? this.options.handleProtocols(protocols, req) : protocols.values().next().value;
        if (protocol2) {
          headers.push(`Sec-WebSocket-Protocol: ${protocol2}`);
          ws._protocol = protocol2;
        }
      }
      if (extensions[PerMessageDeflate.extensionName]) {
        const params = extensions[PerMessageDeflate.extensionName].params;
        const value2 = extension.format({
          [PerMessageDeflate.extensionName]: [params]
        });
        headers.push(`Sec-WebSocket-Extensions: ${value2}`);
        ws._extensions = extensions;
      }
      this.emit("headers", headers, req);
      socket.write(headers.concat(`\r
`).join(`\r
`));
      socket.removeListener("error", socketOnError);
      ws.setSocket(socket, head, {
        allowSynchronousEvents: this.options.allowSynchronousEvents,
        maxPayload: this.options.maxPayload,
        skipUTF8Validation: this.options.skipUTF8Validation
      });
      if (this.clients) {
        this.clients.add(ws);
        ws.on("close", () => {
          this.clients.delete(ws);
          if (this._shouldEmitClose && !this.clients.size) {
            process.nextTick(emitClose, this);
          }
        });
      }
      cb(ws, req);
    }
  }
  module.exports = WebSocketServer;
  function addListeners(server, map3) {
    for (const event of Object.keys(map3))
      server.on(event, map3[event]);
    return function removeListeners() {
      for (const event of Object.keys(map3)) {
        server.removeListener(event, map3[event]);
      }
    };
  }
  function emitClose(server) {
    server._state = CLOSED;
    server.emit("close");
  }
  function socketOnError() {
    this.destroy();
  }
  function abortHandshake(socket, code, message, headers) {
    message = message || http.STATUS_CODES[code];
    headers = {
      Connection: "close",
      "Content-Type": "text/html",
      "Content-Length": Buffer.byteLength(message),
      ...headers
    };
    socket.once("finish", socket.destroy);
    socket.end(`HTTP/1.1 ${code} ${http.STATUS_CODES[code]}\r
` + Object.keys(headers).map((h) => `${h}: ${headers[h]}`).join(`\r
`) + `\r
\r
` + message);
  }
  function abortHandshakeOrEmitwsClientError(server, req, socket, code, message) {
    if (server.listenerCount("wsClientError")) {
      const err = new Error(message);
      Error.captureStackTrace(err, abortHandshakeOrEmitwsClientError);
      server.emit("wsClientError", err, socket, req);
    } else {
      abortHandshake(socket, code, message);
    }
  }
});

// src/infrastructure/cli/CLIProcess.ts
import path from "path";

class CLIProcess {
  static instance;
  pluginPath;
  constructor() {
    this.pluginPath = path.join(process.cwd(), "plugins", "animeav1.exe");
  }
  static getInstance() {
    if (!CLIProcess.instance)
      CLIProcess.instance = new CLIProcess;
    return CLIProcess.instance;
  }
  async run(method, args = []) {
    const fullArgs = [this.pluginPath, method, ...args.map(String)];
    const start = performance.now();
    const proc = Bun.spawn(fullArgs);
    const result = await new Response(proc.stdout).text();
    await proc.exited;
    if (true) {
      const end = performance.now();
      console.log(`[CLIProcess] ${method} (${(end - start).toFixed(2)} ms)`);
    }
    return result.trim();
  }
  runSync(method, args = []) {
    const fullArgs = [this.pluginPath, method, ...args.map(String)];
    const proc = Bun.spawnSync(fullArgs);
    return new TextDecoder().decode(proc.stdout).trim();
  }
}

// src/infrastructure/cli/ManifestClient.ts
class ManifestClient {
  static instance;
  cli = CLIProcess.getInstance();
  constructor() {}
  static getInstance() {
    if (!ManifestClient.instance)
      ManifestClient.instance = new ManifestClient;
    return ManifestClient.instance;
  }
  async getManifest() {
    return this.cli.runSync("getManifest");
  }
}

// src/infrastructure/database/dataBaseClient.ts
import path2 from "path";
var basepath = path2.join(import.meta.dir, "animeTV.db").toString();
var SQLITE = new Bun.SQL({
  adapter: "sqlite",
  filename: basepath,
  create: true,
  readwrite: true
});

// node_modules/@sinclair/typebox/build/esm/type/guard/value.mjs
var exports_value = {};
__export(exports_value, {
  IsUndefined: () => IsUndefined,
  IsUint8Array: () => IsUint8Array,
  IsSymbol: () => IsSymbol,
  IsString: () => IsString,
  IsRegExp: () => IsRegExp,
  IsObject: () => IsObject,
  IsNumber: () => IsNumber,
  IsNull: () => IsNull,
  IsIterator: () => IsIterator,
  IsFunction: () => IsFunction,
  IsDate: () => IsDate,
  IsBoolean: () => IsBoolean,
  IsBigInt: () => IsBigInt,
  IsAsyncIterator: () => IsAsyncIterator,
  IsArray: () => IsArray,
  HasPropertyKey: () => HasPropertyKey
});
function HasPropertyKey(value, key) {
  return key in value;
}
function IsAsyncIterator(value) {
  return IsObject(value) && !IsArray(value) && !IsUint8Array(value) && Symbol.asyncIterator in value;
}
function IsArray(value) {
  return Array.isArray(value);
}
function IsBigInt(value) {
  return typeof value === "bigint";
}
function IsBoolean(value) {
  return typeof value === "boolean";
}
function IsDate(value) {
  return value instanceof globalThis.Date;
}
function IsFunction(value) {
  return typeof value === "function";
}
function IsIterator(value) {
  return IsObject(value) && !IsArray(value) && !IsUint8Array(value) && Symbol.iterator in value;
}
function IsNull(value) {
  return value === null;
}
function IsNumber(value) {
  return typeof value === "number";
}
function IsObject(value) {
  return typeof value === "object" && value !== null;
}
function IsRegExp(value) {
  return value instanceof globalThis.RegExp;
}
function IsString(value) {
  return typeof value === "string";
}
function IsSymbol(value) {
  return typeof value === "symbol";
}
function IsUint8Array(value) {
  return value instanceof globalThis.Uint8Array;
}
function IsUndefined(value) {
  return value === undefined;
}

// node_modules/@sinclair/typebox/build/esm/type/clone/value.mjs
function ArrayType(value) {
  return value.map((value2) => Visit(value2));
}
function DateType(value) {
  return new Date(value.getTime());
}
function Uint8ArrayType(value) {
  return new Uint8Array(value);
}
function RegExpType(value) {
  return new RegExp(value.source, value.flags);
}
function ObjectType(value) {
  const result = {};
  for (const key of Object.getOwnPropertyNames(value)) {
    result[key] = Visit(value[key]);
  }
  for (const key of Object.getOwnPropertySymbols(value)) {
    result[key] = Visit(value[key]);
  }
  return result;
}
function Visit(value) {
  return IsArray(value) ? ArrayType(value) : IsDate(value) ? DateType(value) : IsUint8Array(value) ? Uint8ArrayType(value) : IsRegExp(value) ? RegExpType(value) : IsObject(value) ? ObjectType(value) : value;
}
function Clone(value) {
  return Visit(value);
}

// node_modules/@sinclair/typebox/build/esm/type/clone/type.mjs
function CloneType(schema, options) {
  return options === undefined ? Clone(schema) : Clone({ ...options, ...schema });
}

// node_modules/@sinclair/typebox/build/esm/value/guard/guard.mjs
function IsAsyncIterator2(value) {
  return IsObject2(value) && globalThis.Symbol.asyncIterator in value;
}
function IsIterator2(value) {
  return IsObject2(value) && globalThis.Symbol.iterator in value;
}
function IsStandardObject(value) {
  return IsObject2(value) && (globalThis.Object.getPrototypeOf(value) === Object.prototype || globalThis.Object.getPrototypeOf(value) === null);
}
function IsPromise(value) {
  return value instanceof globalThis.Promise;
}
function IsDate2(value) {
  return value instanceof Date && globalThis.Number.isFinite(value.getTime());
}
function IsMap(value) {
  return value instanceof globalThis.Map;
}
function IsSet(value) {
  return value instanceof globalThis.Set;
}
function IsTypedArray(value) {
  return globalThis.ArrayBuffer.isView(value);
}
function IsUint8Array2(value) {
  return value instanceof globalThis.Uint8Array;
}
function HasPropertyKey2(value, key) {
  return key in value;
}
function IsObject2(value) {
  return value !== null && typeof value === "object";
}
function IsArray2(value) {
  return globalThis.Array.isArray(value) && !globalThis.ArrayBuffer.isView(value);
}
function IsUndefined2(value) {
  return value === undefined;
}
function IsNull2(value) {
  return value === null;
}
function IsBoolean2(value) {
  return typeof value === "boolean";
}
function IsNumber2(value) {
  return typeof value === "number";
}
function IsInteger(value) {
  return globalThis.Number.isInteger(value);
}
function IsBigInt2(value) {
  return typeof value === "bigint";
}
function IsString2(value) {
  return typeof value === "string";
}
function IsFunction2(value) {
  return typeof value === "function";
}
function IsSymbol2(value) {
  return typeof value === "symbol";
}
function IsValueType(value) {
  return IsBigInt2(value) || IsBoolean2(value) || IsNull2(value) || IsNumber2(value) || IsString2(value) || IsSymbol2(value) || IsUndefined2(value);
}

// node_modules/@sinclair/typebox/build/esm/system/policy.mjs
var TypeSystemPolicy;
(function(TypeSystemPolicy2) {
  TypeSystemPolicy2.InstanceMode = "default";
  TypeSystemPolicy2.ExactOptionalPropertyTypes = false;
  TypeSystemPolicy2.AllowArrayObject = false;
  TypeSystemPolicy2.AllowNaN = false;
  TypeSystemPolicy2.AllowNullVoid = false;
  function IsExactOptionalProperty(value, key) {
    return TypeSystemPolicy2.ExactOptionalPropertyTypes ? key in value : value[key] !== undefined;
  }
  TypeSystemPolicy2.IsExactOptionalProperty = IsExactOptionalProperty;
  function IsObjectLike(value) {
    const isObject = IsObject2(value);
    return TypeSystemPolicy2.AllowArrayObject ? isObject : isObject && !IsArray2(value);
  }
  TypeSystemPolicy2.IsObjectLike = IsObjectLike;
  function IsRecordLike(value) {
    return IsObjectLike(value) && !(value instanceof Date) && !(value instanceof Uint8Array);
  }
  TypeSystemPolicy2.IsRecordLike = IsRecordLike;
  function IsNumberLike(value) {
    return TypeSystemPolicy2.AllowNaN ? IsNumber2(value) : Number.isFinite(value);
  }
  TypeSystemPolicy2.IsNumberLike = IsNumberLike;
  function IsVoidLike(value) {
    const isUndefined = IsUndefined2(value);
    return TypeSystemPolicy2.AllowNullVoid ? isUndefined || value === null : isUndefined;
  }
  TypeSystemPolicy2.IsVoidLike = IsVoidLike;
})(TypeSystemPolicy || (TypeSystemPolicy = {}));

// node_modules/@sinclair/typebox/build/esm/type/create/immutable.mjs
function ImmutableArray(value) {
  return globalThis.Object.freeze(value).map((value2) => Immutable(value2));
}
function ImmutableDate(value) {
  return value;
}
function ImmutableUint8Array(value) {
  return value;
}
function ImmutableRegExp(value) {
  return value;
}
function ImmutableObject(value) {
  const result = {};
  for (const key of Object.getOwnPropertyNames(value)) {
    result[key] = Immutable(value[key]);
  }
  for (const key of Object.getOwnPropertySymbols(value)) {
    result[key] = Immutable(value[key]);
  }
  return globalThis.Object.freeze(result);
}
function Immutable(value) {
  return IsArray(value) ? ImmutableArray(value) : IsDate(value) ? ImmutableDate(value) : IsUint8Array(value) ? ImmutableUint8Array(value) : IsRegExp(value) ? ImmutableRegExp(value) : IsObject(value) ? ImmutableObject(value) : value;
}

// node_modules/@sinclair/typebox/build/esm/type/create/type.mjs
function CreateType(schema, options) {
  const result = options !== undefined ? { ...options, ...schema } : schema;
  switch (TypeSystemPolicy.InstanceMode) {
    case "freeze":
      return Immutable(result);
    case "clone":
      return Clone(result);
    default:
      return result;
  }
}

// node_modules/@sinclair/typebox/build/esm/type/error/error.mjs
class TypeBoxError extends Error {
  constructor(message) {
    super(message);
  }
}

// node_modules/@sinclair/typebox/build/esm/type/symbols/symbols.mjs
var TransformKind = Symbol.for("TypeBox.Transform");
var ReadonlyKind = Symbol.for("TypeBox.Readonly");
var OptionalKind = Symbol.for("TypeBox.Optional");
var Hint = Symbol.for("TypeBox.Hint");
var Kind = Symbol.for("TypeBox.Kind");

// node_modules/@sinclair/typebox/build/esm/type/guard/kind.mjs
function IsReadonly(value) {
  return IsObject(value) && value[ReadonlyKind] === "Readonly";
}
function IsOptional(value) {
  return IsObject(value) && value[OptionalKind] === "Optional";
}
function IsAny(value) {
  return IsKindOf(value, "Any");
}
function IsArgument(value) {
  return IsKindOf(value, "Argument");
}
function IsArray3(value) {
  return IsKindOf(value, "Array");
}
function IsAsyncIterator3(value) {
  return IsKindOf(value, "AsyncIterator");
}
function IsBigInt3(value) {
  return IsKindOf(value, "BigInt");
}
function IsBoolean3(value) {
  return IsKindOf(value, "Boolean");
}
function IsComputed(value) {
  return IsKindOf(value, "Computed");
}
function IsConstructor(value) {
  return IsKindOf(value, "Constructor");
}
function IsDate3(value) {
  return IsKindOf(value, "Date");
}
function IsFunction3(value) {
  return IsKindOf(value, "Function");
}
function IsInteger2(value) {
  return IsKindOf(value, "Integer");
}
function IsIntersect(value) {
  return IsKindOf(value, "Intersect");
}
function IsIterator3(value) {
  return IsKindOf(value, "Iterator");
}
function IsKindOf(value, kind) {
  return IsObject(value) && Kind in value && value[Kind] === kind;
}
function IsLiteralValue(value) {
  return IsBoolean(value) || IsNumber(value) || IsString(value);
}
function IsLiteral(value) {
  return IsKindOf(value, "Literal");
}
function IsMappedKey(value) {
  return IsKindOf(value, "MappedKey");
}
function IsMappedResult(value) {
  return IsKindOf(value, "MappedResult");
}
function IsNever(value) {
  return IsKindOf(value, "Never");
}
function IsNot(value) {
  return IsKindOf(value, "Not");
}
function IsNull3(value) {
  return IsKindOf(value, "Null");
}
function IsNumber3(value) {
  return IsKindOf(value, "Number");
}
function IsObject3(value) {
  return IsKindOf(value, "Object");
}
function IsPromise2(value) {
  return IsKindOf(value, "Promise");
}
function IsRecord(value) {
  return IsKindOf(value, "Record");
}
function IsRef(value) {
  return IsKindOf(value, "Ref");
}
function IsRegExp2(value) {
  return IsKindOf(value, "RegExp");
}
function IsString3(value) {
  return IsKindOf(value, "String");
}
function IsSymbol3(value) {
  return IsKindOf(value, "Symbol");
}
function IsTemplateLiteral(value) {
  return IsKindOf(value, "TemplateLiteral");
}
function IsThis(value) {
  return IsKindOf(value, "This");
}
function IsTransform(value) {
  return IsObject(value) && TransformKind in value;
}
function IsTuple(value) {
  return IsKindOf(value, "Tuple");
}
function IsUndefined3(value) {
  return IsKindOf(value, "Undefined");
}
function IsUnion(value) {
  return IsKindOf(value, "Union");
}
function IsUint8Array3(value) {
  return IsKindOf(value, "Uint8Array");
}
function IsUnknown(value) {
  return IsKindOf(value, "Unknown");
}
function IsUnsafe(value) {
  return IsKindOf(value, "Unsafe");
}
function IsVoid(value) {
  return IsKindOf(value, "Void");
}
function IsKind(value) {
  return IsObject(value) && Kind in value && IsString(value[Kind]);
}
function IsSchema(value) {
  return IsAny(value) || IsArgument(value) || IsArray3(value) || IsBoolean3(value) || IsBigInt3(value) || IsAsyncIterator3(value) || IsComputed(value) || IsConstructor(value) || IsDate3(value) || IsFunction3(value) || IsInteger2(value) || IsIntersect(value) || IsIterator3(value) || IsLiteral(value) || IsMappedKey(value) || IsMappedResult(value) || IsNever(value) || IsNot(value) || IsNull3(value) || IsNumber3(value) || IsObject3(value) || IsPromise2(value) || IsRecord(value) || IsRef(value) || IsRegExp2(value) || IsString3(value) || IsSymbol3(value) || IsTemplateLiteral(value) || IsThis(value) || IsTuple(value) || IsUndefined3(value) || IsUnion(value) || IsUint8Array3(value) || IsUnknown(value) || IsUnsafe(value) || IsVoid(value) || IsKind(value);
}
// node_modules/@sinclair/typebox/build/esm/type/guard/type.mjs
var exports_type = {};
__export(exports_type, {
  TypeGuardUnknownTypeError: () => TypeGuardUnknownTypeError,
  IsVoid: () => IsVoid2,
  IsUnsafe: () => IsUnsafe2,
  IsUnknown: () => IsUnknown2,
  IsUnionLiteral: () => IsUnionLiteral,
  IsUnion: () => IsUnion2,
  IsUndefined: () => IsUndefined4,
  IsUint8Array: () => IsUint8Array4,
  IsTuple: () => IsTuple2,
  IsTransform: () => IsTransform2,
  IsThis: () => IsThis2,
  IsTemplateLiteral: () => IsTemplateLiteral2,
  IsSymbol: () => IsSymbol4,
  IsString: () => IsString4,
  IsSchema: () => IsSchema2,
  IsRegExp: () => IsRegExp3,
  IsRef: () => IsRef2,
  IsRecursive: () => IsRecursive,
  IsRecord: () => IsRecord2,
  IsReadonly: () => IsReadonly2,
  IsProperties: () => IsProperties,
  IsPromise: () => IsPromise3,
  IsOptional: () => IsOptional2,
  IsObject: () => IsObject4,
  IsNumber: () => IsNumber4,
  IsNull: () => IsNull4,
  IsNot: () => IsNot2,
  IsNever: () => IsNever2,
  IsMappedResult: () => IsMappedResult2,
  IsMappedKey: () => IsMappedKey2,
  IsLiteralValue: () => IsLiteralValue2,
  IsLiteralString: () => IsLiteralString,
  IsLiteralNumber: () => IsLiteralNumber,
  IsLiteralBoolean: () => IsLiteralBoolean,
  IsLiteral: () => IsLiteral2,
  IsKindOf: () => IsKindOf2,
  IsKind: () => IsKind2,
  IsIterator: () => IsIterator4,
  IsIntersect: () => IsIntersect2,
  IsInteger: () => IsInteger3,
  IsImport: () => IsImport,
  IsFunction: () => IsFunction4,
  IsDate: () => IsDate4,
  IsConstructor: () => IsConstructor2,
  IsComputed: () => IsComputed2,
  IsBoolean: () => IsBoolean4,
  IsBigInt: () => IsBigInt4,
  IsAsyncIterator: () => IsAsyncIterator4,
  IsArray: () => IsArray4,
  IsArgument: () => IsArgument2,
  IsAny: () => IsAny2
});
class TypeGuardUnknownTypeError extends TypeBoxError {
}
var KnownTypes = [
  "Argument",
  "Any",
  "Array",
  "AsyncIterator",
  "BigInt",
  "Boolean",
  "Computed",
  "Constructor",
  "Date",
  "Enum",
  "Function",
  "Integer",
  "Intersect",
  "Iterator",
  "Literal",
  "MappedKey",
  "MappedResult",
  "Not",
  "Null",
  "Number",
  "Object",
  "Promise",
  "Record",
  "Ref",
  "RegExp",
  "String",
  "Symbol",
  "TemplateLiteral",
  "This",
  "Tuple",
  "Undefined",
  "Union",
  "Uint8Array",
  "Unknown",
  "Void"
];
function IsPattern(value) {
  try {
    new RegExp(value);
    return true;
  } catch {
    return false;
  }
}
function IsControlCharacterFree(value) {
  if (!IsString(value))
    return false;
  for (let i = 0;i < value.length; i++) {
    const code = value.charCodeAt(i);
    if (code >= 7 && code <= 13 || code === 27 || code === 127) {
      return false;
    }
  }
  return true;
}
function IsAdditionalProperties(value) {
  return IsOptionalBoolean(value) || IsSchema2(value);
}
function IsOptionalBigInt(value) {
  return IsUndefined(value) || IsBigInt(value);
}
function IsOptionalNumber(value) {
  return IsUndefined(value) || IsNumber(value);
}
function IsOptionalBoolean(value) {
  return IsUndefined(value) || IsBoolean(value);
}
function IsOptionalString(value) {
  return IsUndefined(value) || IsString(value);
}
function IsOptionalPattern(value) {
  return IsUndefined(value) || IsString(value) && IsControlCharacterFree(value) && IsPattern(value);
}
function IsOptionalFormat(value) {
  return IsUndefined(value) || IsString(value) && IsControlCharacterFree(value);
}
function IsOptionalSchema(value) {
  return IsUndefined(value) || IsSchema2(value);
}
function IsReadonly2(value) {
  return IsObject(value) && value[ReadonlyKind] === "Readonly";
}
function IsOptional2(value) {
  return IsObject(value) && value[OptionalKind] === "Optional";
}
function IsAny2(value) {
  return IsKindOf2(value, "Any") && IsOptionalString(value.$id);
}
function IsArgument2(value) {
  return IsKindOf2(value, "Argument") && IsNumber(value.index);
}
function IsArray4(value) {
  return IsKindOf2(value, "Array") && value.type === "array" && IsOptionalString(value.$id) && IsSchema2(value.items) && IsOptionalNumber(value.minItems) && IsOptionalNumber(value.maxItems) && IsOptionalBoolean(value.uniqueItems) && IsOptionalSchema(value.contains) && IsOptionalNumber(value.minContains) && IsOptionalNumber(value.maxContains);
}
function IsAsyncIterator4(value) {
  return IsKindOf2(value, "AsyncIterator") && value.type === "AsyncIterator" && IsOptionalString(value.$id) && IsSchema2(value.items);
}
function IsBigInt4(value) {
  return IsKindOf2(value, "BigInt") && value.type === "bigint" && IsOptionalString(value.$id) && IsOptionalBigInt(value.exclusiveMaximum) && IsOptionalBigInt(value.exclusiveMinimum) && IsOptionalBigInt(value.maximum) && IsOptionalBigInt(value.minimum) && IsOptionalBigInt(value.multipleOf);
}
function IsBoolean4(value) {
  return IsKindOf2(value, "Boolean") && value.type === "boolean" && IsOptionalString(value.$id);
}
function IsComputed2(value) {
  return IsKindOf2(value, "Computed") && IsString(value.target) && IsArray(value.parameters) && value.parameters.every((schema) => IsSchema2(schema));
}
function IsConstructor2(value) {
  return IsKindOf2(value, "Constructor") && value.type === "Constructor" && IsOptionalString(value.$id) && IsArray(value.parameters) && value.parameters.every((schema) => IsSchema2(schema)) && IsSchema2(value.returns);
}
function IsDate4(value) {
  return IsKindOf2(value, "Date") && value.type === "Date" && IsOptionalString(value.$id) && IsOptionalNumber(value.exclusiveMaximumTimestamp) && IsOptionalNumber(value.exclusiveMinimumTimestamp) && IsOptionalNumber(value.maximumTimestamp) && IsOptionalNumber(value.minimumTimestamp) && IsOptionalNumber(value.multipleOfTimestamp);
}
function IsFunction4(value) {
  return IsKindOf2(value, "Function") && value.type === "Function" && IsOptionalString(value.$id) && IsArray(value.parameters) && value.parameters.every((schema) => IsSchema2(schema)) && IsSchema2(value.returns);
}
function IsImport(value) {
  return IsKindOf2(value, "Import") && HasPropertyKey(value, "$defs") && IsObject(value.$defs) && IsProperties(value.$defs) && HasPropertyKey(value, "$ref") && IsString(value.$ref) && value.$ref in value.$defs;
}
function IsInteger3(value) {
  return IsKindOf2(value, "Integer") && value.type === "integer" && IsOptionalString(value.$id) && IsOptionalNumber(value.exclusiveMaximum) && IsOptionalNumber(value.exclusiveMinimum) && IsOptionalNumber(value.maximum) && IsOptionalNumber(value.minimum) && IsOptionalNumber(value.multipleOf);
}
function IsProperties(value) {
  return IsObject(value) && Object.entries(value).every(([key, schema]) => IsControlCharacterFree(key) && IsSchema2(schema));
}
function IsIntersect2(value) {
  return IsKindOf2(value, "Intersect") && (IsString(value.type) && value.type !== "object" ? false : true) && IsArray(value.allOf) && value.allOf.every((schema) => IsSchema2(schema) && !IsTransform2(schema)) && IsOptionalString(value.type) && (IsOptionalBoolean(value.unevaluatedProperties) || IsOptionalSchema(value.unevaluatedProperties)) && IsOptionalString(value.$id);
}
function IsIterator4(value) {
  return IsKindOf2(value, "Iterator") && value.type === "Iterator" && IsOptionalString(value.$id) && IsSchema2(value.items);
}
function IsKindOf2(value, kind) {
  return IsObject(value) && Kind in value && value[Kind] === kind;
}
function IsLiteralString(value) {
  return IsLiteral2(value) && IsString(value.const);
}
function IsLiteralNumber(value) {
  return IsLiteral2(value) && IsNumber(value.const);
}
function IsLiteralBoolean(value) {
  return IsLiteral2(value) && IsBoolean(value.const);
}
function IsLiteral2(value) {
  return IsKindOf2(value, "Literal") && IsOptionalString(value.$id) && IsLiteralValue2(value.const);
}
function IsLiteralValue2(value) {
  return IsBoolean(value) || IsNumber(value) || IsString(value);
}
function IsMappedKey2(value) {
  return IsKindOf2(value, "MappedKey") && IsArray(value.keys) && value.keys.every((key) => IsNumber(key) || IsString(key));
}
function IsMappedResult2(value) {
  return IsKindOf2(value, "MappedResult") && IsProperties(value.properties);
}
function IsNever2(value) {
  return IsKindOf2(value, "Never") && IsObject(value.not) && Object.getOwnPropertyNames(value.not).length === 0;
}
function IsNot2(value) {
  return IsKindOf2(value, "Not") && IsSchema2(value.not);
}
function IsNull4(value) {
  return IsKindOf2(value, "Null") && value.type === "null" && IsOptionalString(value.$id);
}
function IsNumber4(value) {
  return IsKindOf2(value, "Number") && value.type === "number" && IsOptionalString(value.$id) && IsOptionalNumber(value.exclusiveMaximum) && IsOptionalNumber(value.exclusiveMinimum) && IsOptionalNumber(value.maximum) && IsOptionalNumber(value.minimum) && IsOptionalNumber(value.multipleOf);
}
function IsObject4(value) {
  return IsKindOf2(value, "Object") && value.type === "object" && IsOptionalString(value.$id) && IsProperties(value.properties) && IsAdditionalProperties(value.additionalProperties) && IsOptionalNumber(value.minProperties) && IsOptionalNumber(value.maxProperties);
}
function IsPromise3(value) {
  return IsKindOf2(value, "Promise") && value.type === "Promise" && IsOptionalString(value.$id) && IsSchema2(value.item);
}
function IsRecord2(value) {
  return IsKindOf2(value, "Record") && value.type === "object" && IsOptionalString(value.$id) && IsAdditionalProperties(value.additionalProperties) && IsObject(value.patternProperties) && ((schema) => {
    const keys = Object.getOwnPropertyNames(schema.patternProperties);
    return keys.length === 1 && IsPattern(keys[0]) && IsObject(schema.patternProperties) && IsSchema2(schema.patternProperties[keys[0]]);
  })(value);
}
function IsRecursive(value) {
  return IsObject(value) && Hint in value && value[Hint] === "Recursive";
}
function IsRef2(value) {
  return IsKindOf2(value, "Ref") && IsOptionalString(value.$id) && IsString(value.$ref);
}
function IsRegExp3(value) {
  return IsKindOf2(value, "RegExp") && IsOptionalString(value.$id) && IsString(value.source) && IsString(value.flags) && IsOptionalNumber(value.maxLength) && IsOptionalNumber(value.minLength);
}
function IsString4(value) {
  return IsKindOf2(value, "String") && value.type === "string" && IsOptionalString(value.$id) && IsOptionalNumber(value.minLength) && IsOptionalNumber(value.maxLength) && IsOptionalPattern(value.pattern) && IsOptionalFormat(value.format);
}
function IsSymbol4(value) {
  return IsKindOf2(value, "Symbol") && value.type === "symbol" && IsOptionalString(value.$id);
}
function IsTemplateLiteral2(value) {
  return IsKindOf2(value, "TemplateLiteral") && value.type === "string" && IsString(value.pattern) && value.pattern[0] === "^" && value.pattern[value.pattern.length - 1] === "$";
}
function IsThis2(value) {
  return IsKindOf2(value, "This") && IsOptionalString(value.$id) && IsString(value.$ref);
}
function IsTransform2(value) {
  return IsObject(value) && TransformKind in value;
}
function IsTuple2(value) {
  return IsKindOf2(value, "Tuple") && value.type === "array" && IsOptionalString(value.$id) && IsNumber(value.minItems) && IsNumber(value.maxItems) && value.minItems === value.maxItems && (IsUndefined(value.items) && IsUndefined(value.additionalItems) && value.minItems === 0 || IsArray(value.items) && value.items.every((schema) => IsSchema2(schema)));
}
function IsUndefined4(value) {
  return IsKindOf2(value, "Undefined") && value.type === "undefined" && IsOptionalString(value.$id);
}
function IsUnionLiteral(value) {
  return IsUnion2(value) && value.anyOf.every((schema) => IsLiteralString(schema) || IsLiteralNumber(schema));
}
function IsUnion2(value) {
  return IsKindOf2(value, "Union") && IsOptionalString(value.$id) && IsObject(value) && IsArray(value.anyOf) && value.anyOf.every((schema) => IsSchema2(schema));
}
function IsUint8Array4(value) {
  return IsKindOf2(value, "Uint8Array") && value.type === "Uint8Array" && IsOptionalString(value.$id) && IsOptionalNumber(value.minByteLength) && IsOptionalNumber(value.maxByteLength);
}
function IsUnknown2(value) {
  return IsKindOf2(value, "Unknown") && IsOptionalString(value.$id);
}
function IsUnsafe2(value) {
  return IsKindOf2(value, "Unsafe");
}
function IsVoid2(value) {
  return IsKindOf2(value, "Void") && value.type === "void" && IsOptionalString(value.$id);
}
function IsKind2(value) {
  return IsObject(value) && Kind in value && IsString(value[Kind]) && !KnownTypes.includes(value[Kind]);
}
function IsSchema2(value) {
  return IsObject(value) && (IsAny2(value) || IsArgument2(value) || IsArray4(value) || IsBoolean4(value) || IsBigInt4(value) || IsAsyncIterator4(value) || IsComputed2(value) || IsConstructor2(value) || IsDate4(value) || IsFunction4(value) || IsInteger3(value) || IsIntersect2(value) || IsIterator4(value) || IsLiteral2(value) || IsMappedKey2(value) || IsMappedResult2(value) || IsNever2(value) || IsNot2(value) || IsNull4(value) || IsNumber4(value) || IsObject4(value) || IsPromise3(value) || IsRecord2(value) || IsRef2(value) || IsRegExp3(value) || IsString4(value) || IsSymbol4(value) || IsTemplateLiteral2(value) || IsThis2(value) || IsTuple2(value) || IsUndefined4(value) || IsUnion2(value) || IsUint8Array4(value) || IsUnknown2(value) || IsUnsafe2(value) || IsVoid2(value) || IsKind2(value));
}
// node_modules/@sinclair/typebox/build/esm/type/patterns/patterns.mjs
var PatternBoolean = "(true|false)";
var PatternNumber = "(0|[1-9][0-9]*)";
var PatternString = "(.*)";
var PatternNever = "(?!.*)";
var PatternBooleanExact = `^${PatternBoolean}$`;
var PatternNumberExact = `^${PatternNumber}$`;
var PatternStringExact = `^${PatternString}$`;
var PatternNeverExact = `^${PatternNever}$`;

// node_modules/@sinclair/typebox/build/esm/type/registry/format.mjs
var exports_format = {};
__export(exports_format, {
  Set: () => Set2,
  Has: () => Has,
  Get: () => Get,
  Entries: () => Entries,
  Delete: () => Delete,
  Clear: () => Clear
});
var map = new Map;
function Entries() {
  return new Map(map);
}
function Clear() {
  return map.clear();
}
function Delete(format) {
  return map.delete(format);
}
function Has(format) {
  return map.has(format);
}
function Set2(format, func) {
  map.set(format, func);
}
function Get(format) {
  return map.get(format);
}
// node_modules/@sinclair/typebox/build/esm/type/registry/type.mjs
var exports_type2 = {};
__export(exports_type2, {
  Set: () => Set3,
  Has: () => Has2,
  Get: () => Get2,
  Entries: () => Entries2,
  Delete: () => Delete2,
  Clear: () => Clear2
});
var map2 = new Map;
function Entries2() {
  return new Map(map2);
}
function Clear2() {
  return map2.clear();
}
function Delete2(kind) {
  return map2.delete(kind);
}
function Has2(kind) {
  return map2.has(kind);
}
function Set3(kind, func) {
  map2.set(kind, func);
}
function Get2(kind) {
  return map2.get(kind);
}
// node_modules/@sinclair/typebox/build/esm/type/sets/set.mjs
function SetIncludes(T, S) {
  return T.includes(S);
}
function SetDistinct(T) {
  return [...new Set(T)];
}
function SetIntersect(T, S) {
  return T.filter((L) => S.includes(L));
}
function SetIntersectManyResolve(T, Init) {
  return T.reduce((Acc, L) => {
    return SetIntersect(Acc, L);
  }, Init);
}
function SetIntersectMany(T) {
  return T.length === 1 ? T[0] : T.length > 1 ? SetIntersectManyResolve(T.slice(1), T[0]) : [];
}
function SetUnionMany(T) {
  const Acc = [];
  for (const L of T)
    Acc.push(...L);
  return Acc;
}

// node_modules/@sinclair/typebox/build/esm/type/any/any.mjs
function Any(options) {
  return CreateType({ [Kind]: "Any" }, options);
}

// node_modules/@sinclair/typebox/build/esm/type/array/array.mjs
function Array2(items, options) {
  return CreateType({ [Kind]: "Array", type: "array", items }, options);
}

// node_modules/@sinclair/typebox/build/esm/type/argument/argument.mjs
function Argument(index) {
  return CreateType({ [Kind]: "Argument", index });
}

// node_modules/@sinclair/typebox/build/esm/type/async-iterator/async-iterator.mjs
function AsyncIterator(items, options) {
  return CreateType({ [Kind]: "AsyncIterator", type: "AsyncIterator", items }, options);
}

// node_modules/@sinclair/typebox/build/esm/type/computed/computed.mjs
function Computed(target, parameters, options) {
  return CreateType({ [Kind]: "Computed", target, parameters }, options);
}

// node_modules/@sinclair/typebox/build/esm/type/discard/discard.mjs
function DiscardKey(value, key) {
  const { [key]: _, ...rest } = value;
  return rest;
}
function Discard(value, keys) {
  return keys.reduce((acc, key) => DiscardKey(acc, key), value);
}

// node_modules/@sinclair/typebox/build/esm/type/never/never.mjs
function Never(options) {
  return CreateType({ [Kind]: "Never", not: {} }, options);
}

// node_modules/@sinclair/typebox/build/esm/type/mapped/mapped-result.mjs
function MappedResult(properties) {
  return CreateType({
    [Kind]: "MappedResult",
    properties
  });
}

// node_modules/@sinclair/typebox/build/esm/type/constructor/constructor.mjs
function Constructor(parameters, returns, options) {
  return CreateType({ [Kind]: "Constructor", type: "Constructor", parameters, returns }, options);
}

// node_modules/@sinclair/typebox/build/esm/type/function/function.mjs
function Function2(parameters, returns, options) {
  return CreateType({ [Kind]: "Function", type: "Function", parameters, returns }, options);
}

// node_modules/@sinclair/typebox/build/esm/type/union/union-create.mjs
function UnionCreate(T, options) {
  return CreateType({ [Kind]: "Union", anyOf: T }, options);
}

// node_modules/@sinclair/typebox/build/esm/type/union/union-evaluated.mjs
function IsUnionOptional(types) {
  return types.some((type) => IsOptional(type));
}
function RemoveOptionalFromRest(types) {
  return types.map((left) => IsOptional(left) ? RemoveOptionalFromType(left) : left);
}
function RemoveOptionalFromType(T) {
  return Discard(T, [OptionalKind]);
}
function ResolveUnion(types, options) {
  const isOptional = IsUnionOptional(types);
  return isOptional ? Optional(UnionCreate(RemoveOptionalFromRest(types), options)) : UnionCreate(RemoveOptionalFromRest(types), options);
}
function UnionEvaluated(T, options) {
  return T.length === 1 ? CreateType(T[0], options) : T.length === 0 ? Never(options) : ResolveUnion(T, options);
}

// node_modules/@sinclair/typebox/build/esm/type/union/union.mjs
function Union(types, options) {
  return types.length === 0 ? Never(options) : types.length === 1 ? CreateType(types[0], options) : UnionCreate(types, options);
}

// node_modules/@sinclair/typebox/build/esm/type/template-literal/parse.mjs
class TemplateLiteralParserError extends TypeBoxError {
}
function Unescape(pattern) {
  return pattern.replace(/\\\$/g, "$").replace(/\\\*/g, "*").replace(/\\\^/g, "^").replace(/\\\|/g, "|").replace(/\\\(/g, "(").replace(/\\\)/g, ")");
}
function IsNonEscaped(pattern, index, char) {
  return pattern[index] === char && pattern.charCodeAt(index - 1) !== 92;
}
function IsOpenParen(pattern, index) {
  return IsNonEscaped(pattern, index, "(");
}
function IsCloseParen(pattern, index) {
  return IsNonEscaped(pattern, index, ")");
}
function IsSeparator(pattern, index) {
  return IsNonEscaped(pattern, index, "|");
}
function IsGroup(pattern) {
  if (!(IsOpenParen(pattern, 0) && IsCloseParen(pattern, pattern.length - 1)))
    return false;
  let count = 0;
  for (let index = 0;index < pattern.length; index++) {
    if (IsOpenParen(pattern, index))
      count += 1;
    if (IsCloseParen(pattern, index))
      count -= 1;
    if (count === 0 && index !== pattern.length - 1)
      return false;
  }
  return true;
}
function InGroup(pattern) {
  return pattern.slice(1, pattern.length - 1);
}
function IsPrecedenceOr(pattern) {
  let count = 0;
  for (let index = 0;index < pattern.length; index++) {
    if (IsOpenParen(pattern, index))
      count += 1;
    if (IsCloseParen(pattern, index))
      count -= 1;
    if (IsSeparator(pattern, index) && count === 0)
      return true;
  }
  return false;
}
function IsPrecedenceAnd(pattern) {
  for (let index = 0;index < pattern.length; index++) {
    if (IsOpenParen(pattern, index))
      return true;
  }
  return false;
}
function Or(pattern) {
  let [count, start] = [0, 0];
  const expressions = [];
  for (let index = 0;index < pattern.length; index++) {
    if (IsOpenParen(pattern, index))
      count += 1;
    if (IsCloseParen(pattern, index))
      count -= 1;
    if (IsSeparator(pattern, index) && count === 0) {
      const range2 = pattern.slice(start, index);
      if (range2.length > 0)
        expressions.push(TemplateLiteralParse(range2));
      start = index + 1;
    }
  }
  const range = pattern.slice(start);
  if (range.length > 0)
    expressions.push(TemplateLiteralParse(range));
  if (expressions.length === 0)
    return { type: "const", const: "" };
  if (expressions.length === 1)
    return expressions[0];
  return { type: "or", expr: expressions };
}
function And(pattern) {
  function Group(value, index) {
    if (!IsOpenParen(value, index))
      throw new TemplateLiteralParserError(`TemplateLiteralParser: Index must point to open parens`);
    let count = 0;
    for (let scan = index;scan < value.length; scan++) {
      if (IsOpenParen(value, scan))
        count += 1;
      if (IsCloseParen(value, scan))
        count -= 1;
      if (count === 0)
        return [index, scan];
    }
    throw new TemplateLiteralParserError(`TemplateLiteralParser: Unclosed group parens in expression`);
  }
  function Range(pattern2, index) {
    for (let scan = index;scan < pattern2.length; scan++) {
      if (IsOpenParen(pattern2, scan))
        return [index, scan];
    }
    return [index, pattern2.length];
  }
  const expressions = [];
  for (let index = 0;index < pattern.length; index++) {
    if (IsOpenParen(pattern, index)) {
      const [start, end] = Group(pattern, index);
      const range = pattern.slice(start, end + 1);
      expressions.push(TemplateLiteralParse(range));
      index = end;
    } else {
      const [start, end] = Range(pattern, index);
      const range = pattern.slice(start, end);
      if (range.length > 0)
        expressions.push(TemplateLiteralParse(range));
      index = end - 1;
    }
  }
  return expressions.length === 0 ? { type: "const", const: "" } : expressions.length === 1 ? expressions[0] : { type: "and", expr: expressions };
}
function TemplateLiteralParse(pattern) {
  return IsGroup(pattern) ? TemplateLiteralParse(InGroup(pattern)) : IsPrecedenceOr(pattern) ? Or(pattern) : IsPrecedenceAnd(pattern) ? And(pattern) : { type: "const", const: Unescape(pattern) };
}
function TemplateLiteralParseExact(pattern) {
  return TemplateLiteralParse(pattern.slice(1, pattern.length - 1));
}

// node_modules/@sinclair/typebox/build/esm/type/template-literal/finite.mjs
class TemplateLiteralFiniteError extends TypeBoxError {
}
function IsNumberExpression(expression) {
  return expression.type === "or" && expression.expr.length === 2 && expression.expr[0].type === "const" && expression.expr[0].const === "0" && expression.expr[1].type === "const" && expression.expr[1].const === "[1-9][0-9]*";
}
function IsBooleanExpression(expression) {
  return expression.type === "or" && expression.expr.length === 2 && expression.expr[0].type === "const" && expression.expr[0].const === "true" && expression.expr[1].type === "const" && expression.expr[1].const === "false";
}
function IsStringExpression(expression) {
  return expression.type === "const" && expression.const === ".*";
}
function IsTemplateLiteralExpressionFinite(expression) {
  return IsNumberExpression(expression) || IsStringExpression(expression) ? false : IsBooleanExpression(expression) ? true : expression.type === "and" ? expression.expr.every((expr) => IsTemplateLiteralExpressionFinite(expr)) : expression.type === "or" ? expression.expr.every((expr) => IsTemplateLiteralExpressionFinite(expr)) : expression.type === "const" ? true : (() => {
    throw new TemplateLiteralFiniteError(`Unknown expression type`);
  })();
}
function IsTemplateLiteralFinite(schema) {
  const expression = TemplateLiteralParseExact(schema.pattern);
  return IsTemplateLiteralExpressionFinite(expression);
}

// node_modules/@sinclair/typebox/build/esm/type/template-literal/generate.mjs
class TemplateLiteralGenerateError extends TypeBoxError {
}
function* GenerateReduce(buffer) {
  if (buffer.length === 1)
    return yield* buffer[0];
  for (const left of buffer[0]) {
    for (const right of GenerateReduce(buffer.slice(1))) {
      yield `${left}${right}`;
    }
  }
}
function* GenerateAnd(expression) {
  return yield* GenerateReduce(expression.expr.map((expr) => [...TemplateLiteralExpressionGenerate(expr)]));
}
function* GenerateOr(expression) {
  for (const expr of expression.expr)
    yield* TemplateLiteralExpressionGenerate(expr);
}
function* GenerateConst(expression) {
  return yield expression.const;
}
function* TemplateLiteralExpressionGenerate(expression) {
  return expression.type === "and" ? yield* GenerateAnd(expression) : expression.type === "or" ? yield* GenerateOr(expression) : expression.type === "const" ? yield* GenerateConst(expression) : (() => {
    throw new TemplateLiteralGenerateError("Unknown expression");
  })();
}
function TemplateLiteralGenerate(schema) {
  const expression = TemplateLiteralParseExact(schema.pattern);
  return IsTemplateLiteralExpressionFinite(expression) ? [...TemplateLiteralExpressionGenerate(expression)] : [];
}

// node_modules/@sinclair/typebox/build/esm/type/literal/literal.mjs
function Literal(value, options) {
  return CreateType({
    [Kind]: "Literal",
    const: value,
    type: typeof value
  }, options);
}

// node_modules/@sinclair/typebox/build/esm/type/boolean/boolean.mjs
function Boolean2(options) {
  return CreateType({ [Kind]: "Boolean", type: "boolean" }, options);
}

// node_modules/@sinclair/typebox/build/esm/type/bigint/bigint.mjs
function BigInt2(options) {
  return CreateType({ [Kind]: "BigInt", type: "bigint" }, options);
}

// node_modules/@sinclair/typebox/build/esm/type/number/number.mjs
function Number2(options) {
  return CreateType({ [Kind]: "Number", type: "number" }, options);
}

// node_modules/@sinclair/typebox/build/esm/type/string/string.mjs
function String2(options) {
  return CreateType({ [Kind]: "String", type: "string" }, options);
}

// node_modules/@sinclair/typebox/build/esm/type/template-literal/syntax.mjs
function* FromUnion(syntax) {
  const trim = syntax.trim().replace(/"|'/g, "");
  return trim === "boolean" ? yield Boolean2() : trim === "number" ? yield Number2() : trim === "bigint" ? yield BigInt2() : trim === "string" ? yield String2() : yield (() => {
    const literals = trim.split("|").map((literal) => Literal(literal.trim()));
    return literals.length === 0 ? Never() : literals.length === 1 ? literals[0] : UnionEvaluated(literals);
  })();
}
function* FromTerminal(syntax) {
  if (syntax[1] !== "{") {
    const L = Literal("$");
    const R = FromSyntax(syntax.slice(1));
    return yield* [L, ...R];
  }
  for (let i = 2;i < syntax.length; i++) {
    if (syntax[i] === "}") {
      const L = FromUnion(syntax.slice(2, i));
      const R = FromSyntax(syntax.slice(i + 1));
      return yield* [...L, ...R];
    }
  }
  yield Literal(syntax);
}
function* FromSyntax(syntax) {
  for (let i = 0;i < syntax.length; i++) {
    if (syntax[i] === "$") {
      const L = Literal(syntax.slice(0, i));
      const R = FromTerminal(syntax.slice(i));
      return yield* [L, ...R];
    }
  }
  yield Literal(syntax);
}
function TemplateLiteralSyntax(syntax) {
  return [...FromSyntax(syntax)];
}

// node_modules/@sinclair/typebox/build/esm/type/template-literal/pattern.mjs
class TemplateLiteralPatternError extends TypeBoxError {
}
function Escape(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function Visit2(schema, acc) {
  return IsTemplateLiteral(schema) ? schema.pattern.slice(1, schema.pattern.length - 1) : IsUnion(schema) ? `(${schema.anyOf.map((schema2) => Visit2(schema2, acc)).join("|")})` : IsNumber3(schema) ? `${acc}${PatternNumber}` : IsInteger2(schema) ? `${acc}${PatternNumber}` : IsBigInt3(schema) ? `${acc}${PatternNumber}` : IsString3(schema) ? `${acc}${PatternString}` : IsLiteral(schema) ? `${acc}${Escape(schema.const.toString())}` : IsBoolean3(schema) ? `${acc}${PatternBoolean}` : (() => {
    throw new TemplateLiteralPatternError(`Unexpected Kind '${schema[Kind]}'`);
  })();
}
function TemplateLiteralPattern(kinds) {
  return `^${kinds.map((schema) => Visit2(schema, "")).join("")}$`;
}

// node_modules/@sinclair/typebox/build/esm/type/template-literal/union.mjs
function TemplateLiteralToUnion(schema) {
  const R = TemplateLiteralGenerate(schema);
  const L = R.map((S) => Literal(S));
  return UnionEvaluated(L);
}

// node_modules/@sinclair/typebox/build/esm/type/template-literal/template-literal.mjs
function TemplateLiteral(unresolved, options) {
  const pattern = IsString(unresolved) ? TemplateLiteralPattern(TemplateLiteralSyntax(unresolved)) : TemplateLiteralPattern(unresolved);
  return CreateType({ [Kind]: "TemplateLiteral", type: "string", pattern }, options);
}

// node_modules/@sinclair/typebox/build/esm/type/indexed/indexed-property-keys.mjs
function FromTemplateLiteral(templateLiteral) {
  const keys = TemplateLiteralGenerate(templateLiteral);
  return keys.map((key) => key.toString());
}
function FromUnion2(types) {
  const result = [];
  for (const type of types)
    result.push(...IndexPropertyKeys(type));
  return result;
}
function FromLiteral(literalValue) {
  return [literalValue.toString()];
}
function IndexPropertyKeys(type) {
  return [...new Set(IsTemplateLiteral(type) ? FromTemplateLiteral(type) : IsUnion(type) ? FromUnion2(type.anyOf) : IsLiteral(type) ? FromLiteral(type.const) : IsNumber3(type) ? ["[number]"] : IsInteger2(type) ? ["[number]"] : [])];
}

// node_modules/@sinclair/typebox/build/esm/type/indexed/indexed-from-mapped-result.mjs
function FromProperties(type, properties, options) {
  const result = {};
  for (const K2 of Object.getOwnPropertyNames(properties)) {
    result[K2] = Index(type, IndexPropertyKeys(properties[K2]), options);
  }
  return result;
}
function FromMappedResult(type, mappedResult, options) {
  return FromProperties(type, mappedResult.properties, options);
}
function IndexFromMappedResult(type, mappedResult, options) {
  const properties = FromMappedResult(type, mappedResult, options);
  return MappedResult(properties);
}

// node_modules/@sinclair/typebox/build/esm/type/indexed/indexed.mjs
function FromRest(types, key) {
  return types.map((type) => IndexFromPropertyKey(type, key));
}
function FromIntersectRest(types) {
  return types.filter((type) => !IsNever(type));
}
function FromIntersect(types, key) {
  return IntersectEvaluated(FromIntersectRest(FromRest(types, key)));
}
function FromUnionRest(types) {
  return types.some((L) => IsNever(L)) ? [] : types;
}
function FromUnion3(types, key) {
  return UnionEvaluated(FromUnionRest(FromRest(types, key)));
}
function FromTuple(types, key) {
  return key in types ? types[key] : key === "[number]" ? UnionEvaluated(types) : Never();
}
function FromArray(type, key) {
  return key === "[number]" ? type : Never();
}
function FromProperty(properties, propertyKey) {
  return propertyKey in properties ? properties[propertyKey] : Never();
}
function IndexFromPropertyKey(type, propertyKey) {
  return IsIntersect(type) ? FromIntersect(type.allOf, propertyKey) : IsUnion(type) ? FromUnion3(type.anyOf, propertyKey) : IsTuple(type) ? FromTuple(type.items ?? [], propertyKey) : IsArray3(type) ? FromArray(type.items, propertyKey) : IsObject3(type) ? FromProperty(type.properties, propertyKey) : Never();
}
function IndexFromPropertyKeys(type, propertyKeys) {
  return propertyKeys.map((propertyKey) => IndexFromPropertyKey(type, propertyKey));
}
function FromSchema(type, propertyKeys) {
  return UnionEvaluated(IndexFromPropertyKeys(type, propertyKeys));
}
function Index(type, key, options) {
  if (IsRef(type) || IsRef(key)) {
    const error = `Index types using Ref parameters require both Type and Key to be of TSchema`;
    if (!IsSchema(type) || !IsSchema(key))
      throw new TypeBoxError(error);
    return Computed("Index", [type, key]);
  }
  if (IsMappedResult(key))
    return IndexFromMappedResult(type, key, options);
  if (IsMappedKey(key))
    return IndexFromMappedKey(type, key, options);
  return CreateType(IsSchema(key) ? FromSchema(type, IndexPropertyKeys(key)) : FromSchema(type, key), options);
}

// node_modules/@sinclair/typebox/build/esm/type/indexed/indexed-from-mapped-key.mjs
function MappedIndexPropertyKey(type, key, options) {
  return { [key]: Index(type, [key], Clone(options)) };
}
function MappedIndexPropertyKeys(type, propertyKeys, options) {
  return propertyKeys.reduce((result, left) => {
    return { ...result, ...MappedIndexPropertyKey(type, left, options) };
  }, {});
}
function MappedIndexProperties(type, mappedKey, options) {
  return MappedIndexPropertyKeys(type, mappedKey.keys, options);
}
function IndexFromMappedKey(type, mappedKey, options) {
  const properties = MappedIndexProperties(type, mappedKey, options);
  return MappedResult(properties);
}

// node_modules/@sinclair/typebox/build/esm/type/iterator/iterator.mjs
function Iterator(items, options) {
  return CreateType({ [Kind]: "Iterator", type: "Iterator", items }, options);
}

// node_modules/@sinclair/typebox/build/esm/type/object/object.mjs
function RequiredKeys(properties) {
  const keys = [];
  for (let key in properties) {
    if (!IsOptional(properties[key]))
      keys.push(key);
  }
  return keys;
}
function _Object(properties, options) {
  const required = RequiredKeys(properties);
  const schematic = required.length > 0 ? { [Kind]: "Object", type: "object", properties, required } : { [Kind]: "Object", type: "object", properties };
  return CreateType(schematic, options);
}
var Object2 = _Object;

// node_modules/@sinclair/typebox/build/esm/type/promise/promise.mjs
function Promise2(item, options) {
  return CreateType({ [Kind]: "Promise", type: "Promise", item }, options);
}

// node_modules/@sinclair/typebox/build/esm/type/readonly/readonly.mjs
function RemoveReadonly(schema) {
  return CreateType(Discard(schema, [ReadonlyKind]));
}
function AddReadonly(schema) {
  return CreateType({ ...schema, [ReadonlyKind]: "Readonly" });
}
function ReadonlyWithFlag(schema, F) {
  return F === false ? RemoveReadonly(schema) : AddReadonly(schema);
}
function Readonly(schema, enable) {
  const F = enable ?? true;
  return IsMappedResult(schema) ? ReadonlyFromMappedResult(schema, F) : ReadonlyWithFlag(schema, F);
}

// node_modules/@sinclair/typebox/build/esm/type/readonly/readonly-from-mapped-result.mjs
function FromProperties2(K, F) {
  const Acc = {};
  for (const K2 of globalThis.Object.getOwnPropertyNames(K))
    Acc[K2] = Readonly(K[K2], F);
  return Acc;
}
function FromMappedResult2(R, F) {
  return FromProperties2(R.properties, F);
}
function ReadonlyFromMappedResult(R, F) {
  const P = FromMappedResult2(R, F);
  return MappedResult(P);
}

// node_modules/@sinclair/typebox/build/esm/type/tuple/tuple.mjs
function Tuple(types, options) {
  return CreateType(types.length > 0 ? { [Kind]: "Tuple", type: "array", items: types, additionalItems: false, minItems: types.length, maxItems: types.length } : { [Kind]: "Tuple", type: "array", minItems: types.length, maxItems: types.length }, options);
}

// node_modules/@sinclair/typebox/build/esm/type/mapped/mapped.mjs
function FromMappedResult3(K, P) {
  return K in P ? FromSchemaType(K, P[K]) : MappedResult(P);
}
function MappedKeyToKnownMappedResultProperties(K) {
  return { [K]: Literal(K) };
}
function MappedKeyToUnknownMappedResultProperties(P) {
  const Acc = {};
  for (const L of P)
    Acc[L] = Literal(L);
  return Acc;
}
function MappedKeyToMappedResultProperties(K, P) {
  return SetIncludes(P, K) ? MappedKeyToKnownMappedResultProperties(K) : MappedKeyToUnknownMappedResultProperties(P);
}
function FromMappedKey(K, P) {
  const R = MappedKeyToMappedResultProperties(K, P);
  return FromMappedResult3(K, R);
}
function FromRest2(K, T) {
  return T.map((L) => FromSchemaType(K, L));
}
function FromProperties3(K, T) {
  const Acc = {};
  for (const K2 of globalThis.Object.getOwnPropertyNames(T))
    Acc[K2] = FromSchemaType(K, T[K2]);
  return Acc;
}
function FromSchemaType(K, T) {
  const options = { ...T };
  return IsOptional(T) ? Optional(FromSchemaType(K, Discard(T, [OptionalKind]))) : IsReadonly(T) ? Readonly(FromSchemaType(K, Discard(T, [ReadonlyKind]))) : IsMappedResult(T) ? FromMappedResult3(K, T.properties) : IsMappedKey(T) ? FromMappedKey(K, T.keys) : IsConstructor(T) ? Constructor(FromRest2(K, T.parameters), FromSchemaType(K, T.returns), options) : IsFunction3(T) ? Function2(FromRest2(K, T.parameters), FromSchemaType(K, T.returns), options) : IsAsyncIterator3(T) ? AsyncIterator(FromSchemaType(K, T.items), options) : IsIterator3(T) ? Iterator(FromSchemaType(K, T.items), options) : IsIntersect(T) ? Intersect(FromRest2(K, T.allOf), options) : IsUnion(T) ? Union(FromRest2(K, T.anyOf), options) : IsTuple(T) ? Tuple(FromRest2(K, T.items ?? []), options) : IsObject3(T) ? Object2(FromProperties3(K, T.properties), options) : IsArray3(T) ? Array2(FromSchemaType(K, T.items), options) : IsPromise2(T) ? Promise2(FromSchemaType(K, T.item), options) : T;
}
function MappedFunctionReturnType(K, T) {
  const Acc = {};
  for (const L of K)
    Acc[L] = FromSchemaType(L, T);
  return Acc;
}
function Mapped(key, map3, options) {
  const K = IsSchema(key) ? IndexPropertyKeys(key) : key;
  const RT = map3({ [Kind]: "MappedKey", keys: K });
  const R = MappedFunctionReturnType(K, RT);
  return Object2(R, options);
}

// node_modules/@sinclair/typebox/build/esm/type/optional/optional.mjs
function RemoveOptional(schema) {
  return CreateType(Discard(schema, [OptionalKind]));
}
function AddOptional(schema) {
  return CreateType({ ...schema, [OptionalKind]: "Optional" });
}
function OptionalWithFlag(schema, F) {
  return F === false ? RemoveOptional(schema) : AddOptional(schema);
}
function Optional(schema, enable) {
  const F = enable ?? true;
  return IsMappedResult(schema) ? OptionalFromMappedResult(schema, F) : OptionalWithFlag(schema, F);
}

// node_modules/@sinclair/typebox/build/esm/type/optional/optional-from-mapped-result.mjs
function FromProperties4(P, F) {
  const Acc = {};
  for (const K2 of globalThis.Object.getOwnPropertyNames(P))
    Acc[K2] = Optional(P[K2], F);
  return Acc;
}
function FromMappedResult4(R, F) {
  return FromProperties4(R.properties, F);
}
function OptionalFromMappedResult(R, F) {
  const P = FromMappedResult4(R, F);
  return MappedResult(P);
}

// node_modules/@sinclair/typebox/build/esm/type/intersect/intersect-create.mjs
function IntersectCreate(T, options = {}) {
  const allObjects = T.every((schema) => IsObject3(schema));
  const clonedUnevaluatedProperties = IsSchema(options.unevaluatedProperties) ? { unevaluatedProperties: options.unevaluatedProperties } : {};
  return CreateType(options.unevaluatedProperties === false || IsSchema(options.unevaluatedProperties) || allObjects ? { ...clonedUnevaluatedProperties, [Kind]: "Intersect", type: "object", allOf: T } : { ...clonedUnevaluatedProperties, [Kind]: "Intersect", allOf: T }, options);
}

// node_modules/@sinclair/typebox/build/esm/type/intersect/intersect-evaluated.mjs
function IsIntersectOptional(types) {
  return types.every((left) => IsOptional(left));
}
function RemoveOptionalFromType2(type) {
  return Discard(type, [OptionalKind]);
}
function RemoveOptionalFromRest2(types) {
  return types.map((left) => IsOptional(left) ? RemoveOptionalFromType2(left) : left);
}
function ResolveIntersect(types, options) {
  return IsIntersectOptional(types) ? Optional(IntersectCreate(RemoveOptionalFromRest2(types), options)) : IntersectCreate(RemoveOptionalFromRest2(types), options);
}
function IntersectEvaluated(types, options = {}) {
  if (types.length === 1)
    return CreateType(types[0], options);
  if (types.length === 0)
    return Never(options);
  if (types.some((schema) => IsTransform(schema)))
    throw new Error("Cannot intersect transform types");
  return ResolveIntersect(types, options);
}

// node_modules/@sinclair/typebox/build/esm/type/intersect/intersect.mjs
function Intersect(types, options) {
  if (types.length === 1)
    return CreateType(types[0], options);
  if (types.length === 0)
    return Never(options);
  if (types.some((schema) => IsTransform(schema)))
    throw new Error("Cannot intersect transform types");
  return IntersectCreate(types, options);
}

// node_modules/@sinclair/typebox/build/esm/type/ref/ref.mjs
function Ref(...args) {
  const [$ref, options] = typeof args[0] === "string" ? [args[0], args[1]] : [args[0].$id, args[1]];
  if (typeof $ref !== "string")
    throw new TypeBoxError("Ref: $ref must be a string");
  return CreateType({ [Kind]: "Ref", $ref }, options);
}

// node_modules/@sinclair/typebox/build/esm/type/awaited/awaited.mjs
function FromComputed(target, parameters) {
  return Computed("Awaited", [Computed(target, parameters)]);
}
function FromRef($ref) {
  return Computed("Awaited", [Ref($ref)]);
}
function FromIntersect2(types) {
  return Intersect(FromRest3(types));
}
function FromUnion4(types) {
  return Union(FromRest3(types));
}
function FromPromise(type) {
  return Awaited(type);
}
function FromRest3(types) {
  return types.map((type) => Awaited(type));
}
function Awaited(type, options) {
  return CreateType(IsComputed(type) ? FromComputed(type.target, type.parameters) : IsIntersect(type) ? FromIntersect2(type.allOf) : IsUnion(type) ? FromUnion4(type.anyOf) : IsPromise2(type) ? FromPromise(type.item) : IsRef(type) ? FromRef(type.$ref) : type, options);
}

// node_modules/@sinclair/typebox/build/esm/type/keyof/keyof-property-keys.mjs
function FromRest4(types) {
  const result = [];
  for (const L of types)
    result.push(KeyOfPropertyKeys(L));
  return result;
}
function FromIntersect3(types) {
  const propertyKeysArray = FromRest4(types);
  const propertyKeys = SetUnionMany(propertyKeysArray);
  return propertyKeys;
}
function FromUnion5(types) {
  const propertyKeysArray = FromRest4(types);
  const propertyKeys = SetIntersectMany(propertyKeysArray);
  return propertyKeys;
}
function FromTuple2(types) {
  return types.map((_, indexer) => indexer.toString());
}
function FromArray2(_) {
  return ["[number]"];
}
function FromProperties5(T) {
  return globalThis.Object.getOwnPropertyNames(T);
}
function FromPatternProperties(patternProperties) {
  if (!includePatternProperties)
    return [];
  const patternPropertyKeys = globalThis.Object.getOwnPropertyNames(patternProperties);
  return patternPropertyKeys.map((key) => {
    return key[0] === "^" && key[key.length - 1] === "$" ? key.slice(1, key.length - 1) : key;
  });
}
function KeyOfPropertyKeys(type) {
  return IsIntersect(type) ? FromIntersect3(type.allOf) : IsUnion(type) ? FromUnion5(type.anyOf) : IsTuple(type) ? FromTuple2(type.items ?? []) : IsArray3(type) ? FromArray2(type.items) : IsObject3(type) ? FromProperties5(type.properties) : IsRecord(type) ? FromPatternProperties(type.patternProperties) : [];
}
var includePatternProperties = false;
function KeyOfPattern(schema) {
  includePatternProperties = true;
  const keys = KeyOfPropertyKeys(schema);
  includePatternProperties = false;
  const pattern = keys.map((key) => `(${key})`);
  return `^(${pattern.join("|")})$`;
}

// node_modules/@sinclair/typebox/build/esm/type/keyof/keyof.mjs
function FromComputed2(target, parameters) {
  return Computed("KeyOf", [Computed(target, parameters)]);
}
function FromRef2($ref) {
  return Computed("KeyOf", [Ref($ref)]);
}
function KeyOfFromType(type, options) {
  const propertyKeys = KeyOfPropertyKeys(type);
  const propertyKeyTypes = KeyOfPropertyKeysToRest(propertyKeys);
  const result = UnionEvaluated(propertyKeyTypes);
  return CreateType(result, options);
}
function KeyOfPropertyKeysToRest(propertyKeys) {
  return propertyKeys.map((L) => L === "[number]" ? Number2() : Literal(L));
}
function KeyOf(type, options) {
  return IsComputed(type) ? FromComputed2(type.target, type.parameters) : IsRef(type) ? FromRef2(type.$ref) : IsMappedResult(type) ? KeyOfFromMappedResult(type, options) : KeyOfFromType(type, options);
}

// node_modules/@sinclair/typebox/build/esm/type/keyof/keyof-from-mapped-result.mjs
function FromProperties6(properties, options) {
  const result = {};
  for (const K2 of globalThis.Object.getOwnPropertyNames(properties))
    result[K2] = KeyOf(properties[K2], Clone(options));
  return result;
}
function FromMappedResult5(mappedResult, options) {
  return FromProperties6(mappedResult.properties, options);
}
function KeyOfFromMappedResult(mappedResult, options) {
  const properties = FromMappedResult5(mappedResult, options);
  return MappedResult(properties);
}

// node_modules/@sinclair/typebox/build/esm/type/keyof/keyof-property-entries.mjs
function KeyOfPropertyEntries(schema) {
  const keys = KeyOfPropertyKeys(schema);
  const schemas = IndexFromPropertyKeys(schema, keys);
  return keys.map((_, index) => [keys[index], schemas[index]]);
}

// node_modules/@sinclair/typebox/build/esm/type/composite/composite.mjs
function CompositeKeys(T) {
  const Acc = [];
  for (const L of T)
    Acc.push(...KeyOfPropertyKeys(L));
  return SetDistinct(Acc);
}
function FilterNever(T) {
  return T.filter((L) => !IsNever(L));
}
function CompositeProperty(T, K) {
  const Acc = [];
  for (const L of T)
    Acc.push(...IndexFromPropertyKeys(L, [K]));
  return FilterNever(Acc);
}
function CompositeProperties(T, K) {
  const Acc = {};
  for (const L of K) {
    Acc[L] = IntersectEvaluated(CompositeProperty(T, L));
  }
  return Acc;
}
function Composite(T, options) {
  const K = CompositeKeys(T);
  const P = CompositeProperties(T, K);
  const R = Object2(P, options);
  return R;
}

// node_modules/@sinclair/typebox/build/esm/type/date/date.mjs
function Date2(options) {
  return CreateType({ [Kind]: "Date", type: "Date" }, options);
}

// node_modules/@sinclair/typebox/build/esm/type/null/null.mjs
function Null(options) {
  return CreateType({ [Kind]: "Null", type: "null" }, options);
}

// node_modules/@sinclair/typebox/build/esm/type/symbol/symbol.mjs
function Symbol2(options) {
  return CreateType({ [Kind]: "Symbol", type: "symbol" }, options);
}

// node_modules/@sinclair/typebox/build/esm/type/undefined/undefined.mjs
function Undefined(options) {
  return CreateType({ [Kind]: "Undefined", type: "undefined" }, options);
}

// node_modules/@sinclair/typebox/build/esm/type/uint8array/uint8array.mjs
function Uint8Array2(options) {
  return CreateType({ [Kind]: "Uint8Array", type: "Uint8Array" }, options);
}

// node_modules/@sinclair/typebox/build/esm/type/unknown/unknown.mjs
function Unknown(options) {
  return CreateType({ [Kind]: "Unknown" }, options);
}

// node_modules/@sinclair/typebox/build/esm/type/const/const.mjs
function FromArray3(T) {
  return T.map((L) => FromValue(L, false));
}
function FromProperties7(value) {
  const Acc = {};
  for (const K of globalThis.Object.getOwnPropertyNames(value))
    Acc[K] = Readonly(FromValue(value[K], false));
  return Acc;
}
function ConditionalReadonly(T, root) {
  return root === true ? T : Readonly(T);
}
function FromValue(value, root) {
  return IsAsyncIterator(value) ? ConditionalReadonly(Any(), root) : IsIterator(value) ? ConditionalReadonly(Any(), root) : IsArray(value) ? Readonly(Tuple(FromArray3(value))) : IsUint8Array(value) ? Uint8Array2() : IsDate(value) ? Date2() : IsObject(value) ? ConditionalReadonly(Object2(FromProperties7(value)), root) : IsFunction(value) ? ConditionalReadonly(Function2([], Unknown()), root) : IsUndefined(value) ? Undefined() : IsNull(value) ? Null() : IsSymbol(value) ? Symbol2() : IsBigInt(value) ? BigInt2() : IsNumber(value) ? Literal(value) : IsBoolean(value) ? Literal(value) : IsString(value) ? Literal(value) : Object2({});
}
function Const(T, options) {
  return CreateType(FromValue(T, true), options);
}

// node_modules/@sinclair/typebox/build/esm/type/constructor-parameters/constructor-parameters.mjs
function ConstructorParameters(schema, options) {
  return IsConstructor(schema) ? Tuple(schema.parameters, options) : Never(options);
}

// node_modules/@sinclair/typebox/build/esm/type/enum/enum.mjs
function Enum(item, options) {
  if (IsUndefined(item))
    throw new Error("Enum undefined or empty");
  const values1 = globalThis.Object.getOwnPropertyNames(item).filter((key) => isNaN(key)).map((key) => item[key]);
  const values2 = [...new Set(values1)];
  const anyOf = values2.map((value) => Literal(value));
  return Union(anyOf, { ...options, [Hint]: "Enum" });
}

// node_modules/@sinclair/typebox/build/esm/type/extends/extends-check.mjs
class ExtendsResolverError extends TypeBoxError {
}
var ExtendsResult;
(function(ExtendsResult2) {
  ExtendsResult2[ExtendsResult2["Union"] = 0] = "Union";
  ExtendsResult2[ExtendsResult2["True"] = 1] = "True";
  ExtendsResult2[ExtendsResult2["False"] = 2] = "False";
})(ExtendsResult || (ExtendsResult = {}));
function IntoBooleanResult(result) {
  return result === ExtendsResult.False ? result : ExtendsResult.True;
}
function Throw(message) {
  throw new ExtendsResolverError(message);
}
function IsStructuralRight(right) {
  return exports_type.IsNever(right) || exports_type.IsIntersect(right) || exports_type.IsUnion(right) || exports_type.IsUnknown(right) || exports_type.IsAny(right);
}
function StructuralRight(left, right) {
  return exports_type.IsNever(right) ? FromNeverRight(left, right) : exports_type.IsIntersect(right) ? FromIntersectRight(left, right) : exports_type.IsUnion(right) ? FromUnionRight(left, right) : exports_type.IsUnknown(right) ? FromUnknownRight(left, right) : exports_type.IsAny(right) ? FromAnyRight(left, right) : Throw("StructuralRight");
}
function FromAnyRight(left, right) {
  return ExtendsResult.True;
}
function FromAny(left, right) {
  return exports_type.IsIntersect(right) ? FromIntersectRight(left, right) : exports_type.IsUnion(right) && right.anyOf.some((schema) => exports_type.IsAny(schema) || exports_type.IsUnknown(schema)) ? ExtendsResult.True : exports_type.IsUnion(right) ? ExtendsResult.Union : exports_type.IsUnknown(right) ? ExtendsResult.True : exports_type.IsAny(right) ? ExtendsResult.True : ExtendsResult.Union;
}
function FromArrayRight(left, right) {
  return exports_type.IsUnknown(left) ? ExtendsResult.False : exports_type.IsAny(left) ? ExtendsResult.Union : exports_type.IsNever(left) ? ExtendsResult.True : ExtendsResult.False;
}
function FromArray4(left, right) {
  return exports_type.IsObject(right) && IsObjectArrayLike(right) ? ExtendsResult.True : IsStructuralRight(right) ? StructuralRight(left, right) : !exports_type.IsArray(right) ? ExtendsResult.False : IntoBooleanResult(Visit3(left.items, right.items));
}
function FromAsyncIterator(left, right) {
  return IsStructuralRight(right) ? StructuralRight(left, right) : !exports_type.IsAsyncIterator(right) ? ExtendsResult.False : IntoBooleanResult(Visit3(left.items, right.items));
}
function FromBigInt(left, right) {
  return IsStructuralRight(right) ? StructuralRight(left, right) : exports_type.IsObject(right) ? FromObjectRight(left, right) : exports_type.IsRecord(right) ? FromRecordRight(left, right) : exports_type.IsBigInt(right) ? ExtendsResult.True : ExtendsResult.False;
}
function FromBooleanRight(left, right) {
  return exports_type.IsLiteralBoolean(left) ? ExtendsResult.True : exports_type.IsBoolean(left) ? ExtendsResult.True : ExtendsResult.False;
}
function FromBoolean(left, right) {
  return IsStructuralRight(right) ? StructuralRight(left, right) : exports_type.IsObject(right) ? FromObjectRight(left, right) : exports_type.IsRecord(right) ? FromRecordRight(left, right) : exports_type.IsBoolean(right) ? ExtendsResult.True : ExtendsResult.False;
}
function FromConstructor(left, right) {
  return IsStructuralRight(right) ? StructuralRight(left, right) : exports_type.IsObject(right) ? FromObjectRight(left, right) : !exports_type.IsConstructor(right) ? ExtendsResult.False : left.parameters.length > right.parameters.length ? ExtendsResult.False : !left.parameters.every((schema, index) => IntoBooleanResult(Visit3(right.parameters[index], schema)) === ExtendsResult.True) ? ExtendsResult.False : IntoBooleanResult(Visit3(left.returns, right.returns));
}
function FromDate(left, right) {
  return IsStructuralRight(right) ? StructuralRight(left, right) : exports_type.IsObject(right) ? FromObjectRight(left, right) : exports_type.IsRecord(right) ? FromRecordRight(left, right) : exports_type.IsDate(right) ? ExtendsResult.True : ExtendsResult.False;
}
function FromFunction(left, right) {
  return IsStructuralRight(right) ? StructuralRight(left, right) : exports_type.IsObject(right) ? FromObjectRight(left, right) : !exports_type.IsFunction(right) ? ExtendsResult.False : left.parameters.length > right.parameters.length ? ExtendsResult.False : !left.parameters.every((schema, index) => IntoBooleanResult(Visit3(right.parameters[index], schema)) === ExtendsResult.True) ? ExtendsResult.False : IntoBooleanResult(Visit3(left.returns, right.returns));
}
function FromIntegerRight(left, right) {
  return exports_type.IsLiteral(left) && exports_value.IsNumber(left.const) ? ExtendsResult.True : exports_type.IsNumber(left) || exports_type.IsInteger(left) ? ExtendsResult.True : ExtendsResult.False;
}
function FromInteger(left, right) {
  return exports_type.IsInteger(right) || exports_type.IsNumber(right) ? ExtendsResult.True : IsStructuralRight(right) ? StructuralRight(left, right) : exports_type.IsObject(right) ? FromObjectRight(left, right) : exports_type.IsRecord(right) ? FromRecordRight(left, right) : ExtendsResult.False;
}
function FromIntersectRight(left, right) {
  return right.allOf.every((schema) => Visit3(left, schema) === ExtendsResult.True) ? ExtendsResult.True : ExtendsResult.False;
}
function FromIntersect4(left, right) {
  return left.allOf.some((schema) => Visit3(schema, right) === ExtendsResult.True) ? ExtendsResult.True : ExtendsResult.False;
}
function FromIterator(left, right) {
  return IsStructuralRight(right) ? StructuralRight(left, right) : !exports_type.IsIterator(right) ? ExtendsResult.False : IntoBooleanResult(Visit3(left.items, right.items));
}
function FromLiteral2(left, right) {
  return exports_type.IsLiteral(right) && right.const === left.const ? ExtendsResult.True : IsStructuralRight(right) ? StructuralRight(left, right) : exports_type.IsObject(right) ? FromObjectRight(left, right) : exports_type.IsRecord(right) ? FromRecordRight(left, right) : exports_type.IsString(right) ? FromStringRight(left, right) : exports_type.IsNumber(right) ? FromNumberRight(left, right) : exports_type.IsInteger(right) ? FromIntegerRight(left, right) : exports_type.IsBoolean(right) ? FromBooleanRight(left, right) : ExtendsResult.False;
}
function FromNeverRight(left, right) {
  return ExtendsResult.False;
}
function FromNever(left, right) {
  return ExtendsResult.True;
}
function UnwrapTNot(schema) {
  let [current, depth] = [schema, 0];
  while (true) {
    if (!exports_type.IsNot(current))
      break;
    current = current.not;
    depth += 1;
  }
  return depth % 2 === 0 ? current : Unknown();
}
function FromNot(left, right) {
  return exports_type.IsNot(left) ? Visit3(UnwrapTNot(left), right) : exports_type.IsNot(right) ? Visit3(left, UnwrapTNot(right)) : Throw("Invalid fallthrough for Not");
}
function FromNull(left, right) {
  return IsStructuralRight(right) ? StructuralRight(left, right) : exports_type.IsObject(right) ? FromObjectRight(left, right) : exports_type.IsRecord(right) ? FromRecordRight(left, right) : exports_type.IsNull(right) ? ExtendsResult.True : ExtendsResult.False;
}
function FromNumberRight(left, right) {
  return exports_type.IsLiteralNumber(left) ? ExtendsResult.True : exports_type.IsNumber(left) || exports_type.IsInteger(left) ? ExtendsResult.True : ExtendsResult.False;
}
function FromNumber(left, right) {
  return IsStructuralRight(right) ? StructuralRight(left, right) : exports_type.IsObject(right) ? FromObjectRight(left, right) : exports_type.IsRecord(right) ? FromRecordRight(left, right) : exports_type.IsInteger(right) || exports_type.IsNumber(right) ? ExtendsResult.True : ExtendsResult.False;
}
function IsObjectPropertyCount(schema, count) {
  return Object.getOwnPropertyNames(schema.properties).length === count;
}
function IsObjectStringLike(schema) {
  return IsObjectArrayLike(schema);
}
function IsObjectSymbolLike(schema) {
  return IsObjectPropertyCount(schema, 0) || IsObjectPropertyCount(schema, 1) && "description" in schema.properties && exports_type.IsUnion(schema.properties.description) && schema.properties.description.anyOf.length === 2 && (exports_type.IsString(schema.properties.description.anyOf[0]) && exports_type.IsUndefined(schema.properties.description.anyOf[1]) || exports_type.IsString(schema.properties.description.anyOf[1]) && exports_type.IsUndefined(schema.properties.description.anyOf[0]));
}
function IsObjectNumberLike(schema) {
  return IsObjectPropertyCount(schema, 0);
}
function IsObjectBooleanLike(schema) {
  return IsObjectPropertyCount(schema, 0);
}
function IsObjectBigIntLike(schema) {
  return IsObjectPropertyCount(schema, 0);
}
function IsObjectDateLike(schema) {
  return IsObjectPropertyCount(schema, 0);
}
function IsObjectUint8ArrayLike(schema) {
  return IsObjectArrayLike(schema);
}
function IsObjectFunctionLike(schema) {
  const length = Number2();
  return IsObjectPropertyCount(schema, 0) || IsObjectPropertyCount(schema, 1) && "length" in schema.properties && IntoBooleanResult(Visit3(schema.properties["length"], length)) === ExtendsResult.True;
}
function IsObjectConstructorLike(schema) {
  return IsObjectPropertyCount(schema, 0);
}
function IsObjectArrayLike(schema) {
  const length = Number2();
  return IsObjectPropertyCount(schema, 0) || IsObjectPropertyCount(schema, 1) && "length" in schema.properties && IntoBooleanResult(Visit3(schema.properties["length"], length)) === ExtendsResult.True;
}
function IsObjectPromiseLike(schema) {
  const then = Function2([Any()], Any());
  return IsObjectPropertyCount(schema, 0) || IsObjectPropertyCount(schema, 1) && "then" in schema.properties && IntoBooleanResult(Visit3(schema.properties["then"], then)) === ExtendsResult.True;
}
function Property(left, right) {
  return Visit3(left, right) === ExtendsResult.False ? ExtendsResult.False : exports_type.IsOptional(left) && !exports_type.IsOptional(right) ? ExtendsResult.False : ExtendsResult.True;
}
function FromObjectRight(left, right) {
  return exports_type.IsUnknown(left) ? ExtendsResult.False : exports_type.IsAny(left) ? ExtendsResult.Union : exports_type.IsNever(left) || exports_type.IsLiteralString(left) && IsObjectStringLike(right) || exports_type.IsLiteralNumber(left) && IsObjectNumberLike(right) || exports_type.IsLiteralBoolean(left) && IsObjectBooleanLike(right) || exports_type.IsSymbol(left) && IsObjectSymbolLike(right) || exports_type.IsBigInt(left) && IsObjectBigIntLike(right) || exports_type.IsString(left) && IsObjectStringLike(right) || exports_type.IsSymbol(left) && IsObjectSymbolLike(right) || exports_type.IsNumber(left) && IsObjectNumberLike(right) || exports_type.IsInteger(left) && IsObjectNumberLike(right) || exports_type.IsBoolean(left) && IsObjectBooleanLike(right) || exports_type.IsUint8Array(left) && IsObjectUint8ArrayLike(right) || exports_type.IsDate(left) && IsObjectDateLike(right) || exports_type.IsConstructor(left) && IsObjectConstructorLike(right) || exports_type.IsFunction(left) && IsObjectFunctionLike(right) ? ExtendsResult.True : exports_type.IsRecord(left) && exports_type.IsString(RecordKey(left)) ? (() => {
    return right[Hint] === "Record" ? ExtendsResult.True : ExtendsResult.False;
  })() : exports_type.IsRecord(left) && exports_type.IsNumber(RecordKey(left)) ? (() => {
    return IsObjectPropertyCount(right, 0) ? ExtendsResult.True : ExtendsResult.False;
  })() : ExtendsResult.False;
}
function FromObject(left, right) {
  return IsStructuralRight(right) ? StructuralRight(left, right) : exports_type.IsRecord(right) ? FromRecordRight(left, right) : !exports_type.IsObject(right) ? ExtendsResult.False : (() => {
    for (const key of Object.getOwnPropertyNames(right.properties)) {
      if (!(key in left.properties) && !exports_type.IsOptional(right.properties[key])) {
        return ExtendsResult.False;
      }
      if (exports_type.IsOptional(right.properties[key])) {
        return ExtendsResult.True;
      }
      if (Property(left.properties[key], right.properties[key]) === ExtendsResult.False) {
        return ExtendsResult.False;
      }
    }
    return ExtendsResult.True;
  })();
}
function FromPromise2(left, right) {
  return IsStructuralRight(right) ? StructuralRight(left, right) : exports_type.IsObject(right) && IsObjectPromiseLike(right) ? ExtendsResult.True : !exports_type.IsPromise(right) ? ExtendsResult.False : IntoBooleanResult(Visit3(left.item, right.item));
}
function RecordKey(schema) {
  return PatternNumberExact in schema.patternProperties ? Number2() : (PatternStringExact in schema.patternProperties) ? String2() : Throw("Unknown record key pattern");
}
function RecordValue(schema) {
  return PatternNumberExact in schema.patternProperties ? schema.patternProperties[PatternNumberExact] : (PatternStringExact in schema.patternProperties) ? schema.patternProperties[PatternStringExact] : Throw("Unable to get record value schema");
}
function FromRecordRight(left, right) {
  const [Key, Value] = [RecordKey(right), RecordValue(right)];
  return exports_type.IsLiteralString(left) && exports_type.IsNumber(Key) && IntoBooleanResult(Visit3(left, Value)) === ExtendsResult.True ? ExtendsResult.True : exports_type.IsUint8Array(left) && exports_type.IsNumber(Key) ? Visit3(left, Value) : exports_type.IsString(left) && exports_type.IsNumber(Key) ? Visit3(left, Value) : exports_type.IsArray(left) && exports_type.IsNumber(Key) ? Visit3(left, Value) : exports_type.IsObject(left) ? (() => {
    for (const key of Object.getOwnPropertyNames(left.properties)) {
      if (Property(Value, left.properties[key]) === ExtendsResult.False) {
        return ExtendsResult.False;
      }
    }
    return ExtendsResult.True;
  })() : ExtendsResult.False;
}
function FromRecord(left, right) {
  return IsStructuralRight(right) ? StructuralRight(left, right) : exports_type.IsObject(right) ? FromObjectRight(left, right) : !exports_type.IsRecord(right) ? ExtendsResult.False : Visit3(RecordValue(left), RecordValue(right));
}
function FromRegExp(left, right) {
  const L = exports_type.IsRegExp(left) ? String2() : left;
  const R = exports_type.IsRegExp(right) ? String2() : right;
  return Visit3(L, R);
}
function FromStringRight(left, right) {
  return exports_type.IsLiteral(left) && exports_value.IsString(left.const) ? ExtendsResult.True : exports_type.IsString(left) ? ExtendsResult.True : ExtendsResult.False;
}
function FromString(left, right) {
  return IsStructuralRight(right) ? StructuralRight(left, right) : exports_type.IsObject(right) ? FromObjectRight(left, right) : exports_type.IsRecord(right) ? FromRecordRight(left, right) : exports_type.IsString(right) ? ExtendsResult.True : ExtendsResult.False;
}
function FromSymbol(left, right) {
  return IsStructuralRight(right) ? StructuralRight(left, right) : exports_type.IsObject(right) ? FromObjectRight(left, right) : exports_type.IsRecord(right) ? FromRecordRight(left, right) : exports_type.IsSymbol(right) ? ExtendsResult.True : ExtendsResult.False;
}
function FromTemplateLiteral2(left, right) {
  return exports_type.IsTemplateLiteral(left) ? Visit3(TemplateLiteralToUnion(left), right) : exports_type.IsTemplateLiteral(right) ? Visit3(left, TemplateLiteralToUnion(right)) : Throw("Invalid fallthrough for TemplateLiteral");
}
function IsArrayOfTuple(left, right) {
  return exports_type.IsArray(right) && left.items !== undefined && left.items.every((schema) => Visit3(schema, right.items) === ExtendsResult.True);
}
function FromTupleRight(left, right) {
  return exports_type.IsNever(left) ? ExtendsResult.True : exports_type.IsUnknown(left) ? ExtendsResult.False : exports_type.IsAny(left) ? ExtendsResult.Union : ExtendsResult.False;
}
function FromTuple3(left, right) {
  return IsStructuralRight(right) ? StructuralRight(left, right) : exports_type.IsObject(right) && IsObjectArrayLike(right) ? ExtendsResult.True : exports_type.IsArray(right) && IsArrayOfTuple(left, right) ? ExtendsResult.True : !exports_type.IsTuple(right) ? ExtendsResult.False : exports_value.IsUndefined(left.items) && !exports_value.IsUndefined(right.items) || !exports_value.IsUndefined(left.items) && exports_value.IsUndefined(right.items) ? ExtendsResult.False : exports_value.IsUndefined(left.items) && !exports_value.IsUndefined(right.items) ? ExtendsResult.True : left.items.every((schema, index) => Visit3(schema, right.items[index]) === ExtendsResult.True) ? ExtendsResult.True : ExtendsResult.False;
}
function FromUint8Array(left, right) {
  return IsStructuralRight(right) ? StructuralRight(left, right) : exports_type.IsObject(right) ? FromObjectRight(left, right) : exports_type.IsRecord(right) ? FromRecordRight(left, right) : exports_type.IsUint8Array(right) ? ExtendsResult.True : ExtendsResult.False;
}
function FromUndefined(left, right) {
  return IsStructuralRight(right) ? StructuralRight(left, right) : exports_type.IsObject(right) ? FromObjectRight(left, right) : exports_type.IsRecord(right) ? FromRecordRight(left, right) : exports_type.IsVoid(right) ? FromVoidRight(left, right) : exports_type.IsUndefined(right) ? ExtendsResult.True : ExtendsResult.False;
}
function FromUnionRight(left, right) {
  return right.anyOf.some((schema) => Visit3(left, schema) === ExtendsResult.True) ? ExtendsResult.True : ExtendsResult.False;
}
function FromUnion6(left, right) {
  return left.anyOf.every((schema) => Visit3(schema, right) === ExtendsResult.True) ? ExtendsResult.True : ExtendsResult.False;
}
function FromUnknownRight(left, right) {
  return ExtendsResult.True;
}
function FromUnknown(left, right) {
  return exports_type.IsNever(right) ? FromNeverRight(left, right) : exports_type.IsIntersect(right) ? FromIntersectRight(left, right) : exports_type.IsUnion(right) ? FromUnionRight(left, right) : exports_type.IsAny(right) ? FromAnyRight(left, right) : exports_type.IsString(right) ? FromStringRight(left, right) : exports_type.IsNumber(right) ? FromNumberRight(left, right) : exports_type.IsInteger(right) ? FromIntegerRight(left, right) : exports_type.IsBoolean(right) ? FromBooleanRight(left, right) : exports_type.IsArray(right) ? FromArrayRight(left, right) : exports_type.IsTuple(right) ? FromTupleRight(left, right) : exports_type.IsObject(right) ? FromObjectRight(left, right) : exports_type.IsUnknown(right) ? ExtendsResult.True : ExtendsResult.False;
}
function FromVoidRight(left, right) {
  return exports_type.IsUndefined(left) ? ExtendsResult.True : exports_type.IsUndefined(left) ? ExtendsResult.True : ExtendsResult.False;
}
function FromVoid(left, right) {
  return exports_type.IsIntersect(right) ? FromIntersectRight(left, right) : exports_type.IsUnion(right) ? FromUnionRight(left, right) : exports_type.IsUnknown(right) ? FromUnknownRight(left, right) : exports_type.IsAny(right) ? FromAnyRight(left, right) : exports_type.IsObject(right) ? FromObjectRight(left, right) : exports_type.IsVoid(right) ? ExtendsResult.True : ExtendsResult.False;
}
function Visit3(left, right) {
  return exports_type.IsTemplateLiteral(left) || exports_type.IsTemplateLiteral(right) ? FromTemplateLiteral2(left, right) : exports_type.IsRegExp(left) || exports_type.IsRegExp(right) ? FromRegExp(left, right) : exports_type.IsNot(left) || exports_type.IsNot(right) ? FromNot(left, right) : exports_type.IsAny(left) ? FromAny(left, right) : exports_type.IsArray(left) ? FromArray4(left, right) : exports_type.IsBigInt(left) ? FromBigInt(left, right) : exports_type.IsBoolean(left) ? FromBoolean(left, right) : exports_type.IsAsyncIterator(left) ? FromAsyncIterator(left, right) : exports_type.IsConstructor(left) ? FromConstructor(left, right) : exports_type.IsDate(left) ? FromDate(left, right) : exports_type.IsFunction(left) ? FromFunction(left, right) : exports_type.IsInteger(left) ? FromInteger(left, right) : exports_type.IsIntersect(left) ? FromIntersect4(left, right) : exports_type.IsIterator(left) ? FromIterator(left, right) : exports_type.IsLiteral(left) ? FromLiteral2(left, right) : exports_type.IsNever(left) ? FromNever(left, right) : exports_type.IsNull(left) ? FromNull(left, right) : exports_type.IsNumber(left) ? FromNumber(left, right) : exports_type.IsObject(left) ? FromObject(left, right) : exports_type.IsRecord(left) ? FromRecord(left, right) : exports_type.IsString(left) ? FromString(left, right) : exports_type.IsSymbol(left) ? FromSymbol(left, right) : exports_type.IsTuple(left) ? FromTuple3(left, right) : exports_type.IsPromise(left) ? FromPromise2(left, right) : exports_type.IsUint8Array(left) ? FromUint8Array(left, right) : exports_type.IsUndefined(left) ? FromUndefined(left, right) : exports_type.IsUnion(left) ? FromUnion6(left, right) : exports_type.IsUnknown(left) ? FromUnknown(left, right) : exports_type.IsVoid(left) ? FromVoid(left, right) : Throw(`Unknown left type operand '${left[Kind]}'`);
}
function ExtendsCheck(left, right) {
  return Visit3(left, right);
}

// node_modules/@sinclair/typebox/build/esm/type/extends/extends-from-mapped-result.mjs
function FromProperties8(P, Right, True, False, options) {
  const Acc = {};
  for (const K2 of globalThis.Object.getOwnPropertyNames(P))
    Acc[K2] = Extends(P[K2], Right, True, False, Clone(options));
  return Acc;
}
function FromMappedResult6(Left, Right, True, False, options) {
  return FromProperties8(Left.properties, Right, True, False, options);
}
function ExtendsFromMappedResult(Left, Right, True, False, options) {
  const P = FromMappedResult6(Left, Right, True, False, options);
  return MappedResult(P);
}

// node_modules/@sinclair/typebox/build/esm/type/extends/extends.mjs
function ExtendsResolve(left, right, trueType, falseType) {
  const R = ExtendsCheck(left, right);
  return R === ExtendsResult.Union ? Union([trueType, falseType]) : R === ExtendsResult.True ? trueType : falseType;
}
function Extends(L, R, T, F, options) {
  return IsMappedResult(L) ? ExtendsFromMappedResult(L, R, T, F, options) : IsMappedKey(L) ? CreateType(ExtendsFromMappedKey(L, R, T, F, options)) : CreateType(ExtendsResolve(L, R, T, F), options);
}

// node_modules/@sinclair/typebox/build/esm/type/extends/extends-from-mapped-key.mjs
function FromPropertyKey(K, U, L, R, options) {
  return {
    [K]: Extends(Literal(K), U, L, R, Clone(options))
  };
}
function FromPropertyKeys(K, U, L, R, options) {
  return K.reduce((Acc, LK) => {
    return { ...Acc, ...FromPropertyKey(LK, U, L, R, options) };
  }, {});
}
function FromMappedKey2(K, U, L, R, options) {
  return FromPropertyKeys(K.keys, U, L, R, options);
}
function ExtendsFromMappedKey(T, U, L, R, options) {
  const P = FromMappedKey2(T, U, L, R, options);
  return MappedResult(P);
}

// node_modules/@sinclair/typebox/build/esm/type/extends/extends-undefined.mjs
function Intersect2(schema) {
  return schema.allOf.every((schema2) => ExtendsUndefinedCheck(schema2));
}
function Union2(schema) {
  return schema.anyOf.some((schema2) => ExtendsUndefinedCheck(schema2));
}
function Not(schema) {
  return !ExtendsUndefinedCheck(schema.not);
}
function ExtendsUndefinedCheck(schema) {
  return schema[Kind] === "Intersect" ? Intersect2(schema) : schema[Kind] === "Union" ? Union2(schema) : schema[Kind] === "Not" ? Not(schema) : schema[Kind] === "Undefined" ? true : false;
}

// node_modules/@sinclair/typebox/build/esm/type/exclude/exclude-from-template-literal.mjs
function ExcludeFromTemplateLiteral(L, R) {
  return Exclude(TemplateLiteralToUnion(L), R);
}

// node_modules/@sinclair/typebox/build/esm/type/exclude/exclude.mjs
function ExcludeRest(L, R) {
  const excluded = L.filter((inner) => ExtendsCheck(inner, R) === ExtendsResult.False);
  return excluded.length === 1 ? excluded[0] : Union(excluded);
}
function Exclude(L, R, options = {}) {
  if (IsTemplateLiteral(L))
    return CreateType(ExcludeFromTemplateLiteral(L, R), options);
  if (IsMappedResult(L))
    return CreateType(ExcludeFromMappedResult(L, R), options);
  return CreateType(IsUnion(L) ? ExcludeRest(L.anyOf, R) : ExtendsCheck(L, R) !== ExtendsResult.False ? Never() : L, options);
}

// node_modules/@sinclair/typebox/build/esm/type/exclude/exclude-from-mapped-result.mjs
function FromProperties9(P, U) {
  const Acc = {};
  for (const K2 of globalThis.Object.getOwnPropertyNames(P))
    Acc[K2] = Exclude(P[K2], U);
  return Acc;
}
function FromMappedResult7(R, T) {
  return FromProperties9(R.properties, T);
}
function ExcludeFromMappedResult(R, T) {
  const P = FromMappedResult7(R, T);
  return MappedResult(P);
}

// node_modules/@sinclair/typebox/build/esm/type/extract/extract-from-template-literal.mjs
function ExtractFromTemplateLiteral(L, R) {
  return Extract(TemplateLiteralToUnion(L), R);
}

// node_modules/@sinclair/typebox/build/esm/type/extract/extract.mjs
function ExtractRest(L, R) {
  const extracted = L.filter((inner) => ExtendsCheck(inner, R) !== ExtendsResult.False);
  return extracted.length === 1 ? extracted[0] : Union(extracted);
}
function Extract(L, R, options) {
  if (IsTemplateLiteral(L))
    return CreateType(ExtractFromTemplateLiteral(L, R), options);
  if (IsMappedResult(L))
    return CreateType(ExtractFromMappedResult(L, R), options);
  return CreateType(IsUnion(L) ? ExtractRest(L.anyOf, R) : ExtendsCheck(L, R) !== ExtendsResult.False ? L : Never(), options);
}

// node_modules/@sinclair/typebox/build/esm/type/extract/extract-from-mapped-result.mjs
function FromProperties10(P, T) {
  const Acc = {};
  for (const K2 of globalThis.Object.getOwnPropertyNames(P))
    Acc[K2] = Extract(P[K2], T);
  return Acc;
}
function FromMappedResult8(R, T) {
  return FromProperties10(R.properties, T);
}
function ExtractFromMappedResult(R, T) {
  const P = FromMappedResult8(R, T);
  return MappedResult(P);
}

// node_modules/@sinclair/typebox/build/esm/type/instance-type/instance-type.mjs
function InstanceType(schema, options) {
  return IsConstructor(schema) ? CreateType(schema.returns, options) : Never(options);
}

// node_modules/@sinclair/typebox/build/esm/type/readonly-optional/readonly-optional.mjs
function ReadonlyOptional(schema) {
  return Readonly(Optional(schema));
}

// node_modules/@sinclair/typebox/build/esm/type/record/record.mjs
function RecordCreateFromPattern(pattern, T, options) {
  return CreateType({ [Kind]: "Record", type: "object", patternProperties: { [pattern]: T } }, options);
}
function RecordCreateFromKeys(K, T, options) {
  const result = {};
  for (const K2 of K)
    result[K2] = T;
  return Object2(result, { ...options, [Hint]: "Record" });
}
function FromTemplateLiteralKey(K, T, options) {
  return IsTemplateLiteralFinite(K) ? RecordCreateFromKeys(IndexPropertyKeys(K), T, options) : RecordCreateFromPattern(K.pattern, T, options);
}
function FromUnionKey(key, type, options) {
  return RecordCreateFromKeys(IndexPropertyKeys(Union(key)), type, options);
}
function FromLiteralKey(key, type, options) {
  return RecordCreateFromKeys([key.toString()], type, options);
}
function FromRegExpKey(key, type, options) {
  return RecordCreateFromPattern(key.source, type, options);
}
function FromStringKey(key, type, options) {
  const pattern = IsUndefined(key.pattern) ? PatternStringExact : key.pattern;
  return RecordCreateFromPattern(pattern, type, options);
}
function FromAnyKey(_, type, options) {
  return RecordCreateFromPattern(PatternStringExact, type, options);
}
function FromNeverKey(_key, type, options) {
  return RecordCreateFromPattern(PatternNeverExact, type, options);
}
function FromBooleanKey(_key, type, options) {
  return Object2({ true: type, false: type }, options);
}
function FromIntegerKey(_key, type, options) {
  return RecordCreateFromPattern(PatternNumberExact, type, options);
}
function FromNumberKey(_, type, options) {
  return RecordCreateFromPattern(PatternNumberExact, type, options);
}
function Record(key, type, options = {}) {
  return IsUnion(key) ? FromUnionKey(key.anyOf, type, options) : IsTemplateLiteral(key) ? FromTemplateLiteralKey(key, type, options) : IsLiteral(key) ? FromLiteralKey(key.const, type, options) : IsBoolean3(key) ? FromBooleanKey(key, type, options) : IsInteger2(key) ? FromIntegerKey(key, type, options) : IsNumber3(key) ? FromNumberKey(key, type, options) : IsRegExp2(key) ? FromRegExpKey(key, type, options) : IsString3(key) ? FromStringKey(key, type, options) : IsAny(key) ? FromAnyKey(key, type, options) : IsNever(key) ? FromNeverKey(key, type, options) : Never(options);
}
function RecordPattern(record) {
  return globalThis.Object.getOwnPropertyNames(record.patternProperties)[0];
}
function RecordKey2(type) {
  const pattern = RecordPattern(type);
  return pattern === PatternStringExact ? String2() : pattern === PatternNumberExact ? Number2() : String2({ pattern });
}
function RecordValue2(type) {
  return type.patternProperties[RecordPattern(type)];
}

// node_modules/@sinclair/typebox/build/esm/type/instantiate/instantiate.mjs
function FromConstructor2(args, type) {
  type.parameters = FromTypes(args, type.parameters);
  type.returns = FromType(args, type.returns);
  return type;
}
function FromFunction2(args, type) {
  type.parameters = FromTypes(args, type.parameters);
  type.returns = FromType(args, type.returns);
  return type;
}
function FromIntersect5(args, type) {
  type.allOf = FromTypes(args, type.allOf);
  return type;
}
function FromUnion7(args, type) {
  type.anyOf = FromTypes(args, type.anyOf);
  return type;
}
function FromTuple4(args, type) {
  if (IsUndefined(type.items))
    return type;
  type.items = FromTypes(args, type.items);
  return type;
}
function FromArray5(args, type) {
  type.items = FromType(args, type.items);
  return type;
}
function FromAsyncIterator2(args, type) {
  type.items = FromType(args, type.items);
  return type;
}
function FromIterator2(args, type) {
  type.items = FromType(args, type.items);
  return type;
}
function FromPromise3(args, type) {
  type.item = FromType(args, type.item);
  return type;
}
function FromObject2(args, type) {
  const mappedProperties = FromProperties11(args, type.properties);
  return { ...type, ...Object2(mappedProperties) };
}
function FromRecord2(args, type) {
  const mappedKey = FromType(args, RecordKey2(type));
  const mappedValue = FromType(args, RecordValue2(type));
  const result = Record(mappedKey, mappedValue);
  return { ...type, ...result };
}
function FromArgument(args, argument) {
  return argument.index in args ? args[argument.index] : Unknown();
}
function FromProperty2(args, type) {
  const isReadonly = IsReadonly(type);
  const isOptional = IsOptional(type);
  const mapped = FromType(args, type);
  return isReadonly && isOptional ? ReadonlyOptional(mapped) : isReadonly && !isOptional ? Readonly(mapped) : !isReadonly && isOptional ? Optional(mapped) : mapped;
}
function FromProperties11(args, properties) {
  return globalThis.Object.getOwnPropertyNames(properties).reduce((result, key) => {
    return { ...result, [key]: FromProperty2(args, properties[key]) };
  }, {});
}
function FromTypes(args, types) {
  return types.map((type) => FromType(args, type));
}
function FromType(args, type) {
  return IsConstructor(type) ? FromConstructor2(args, type) : IsFunction3(type) ? FromFunction2(args, type) : IsIntersect(type) ? FromIntersect5(args, type) : IsUnion(type) ? FromUnion7(args, type) : IsTuple(type) ? FromTuple4(args, type) : IsArray3(type) ? FromArray5(args, type) : IsAsyncIterator3(type) ? FromAsyncIterator2(args, type) : IsIterator3(type) ? FromIterator2(args, type) : IsPromise2(type) ? FromPromise3(args, type) : IsObject3(type) ? FromObject2(args, type) : IsRecord(type) ? FromRecord2(args, type) : IsArgument(type) ? FromArgument(args, type) : type;
}
function Instantiate(type, args) {
  return FromType(args, CloneType(type));
}

// node_modules/@sinclair/typebox/build/esm/type/integer/integer.mjs
function Integer(options) {
  return CreateType({ [Kind]: "Integer", type: "integer" }, options);
}

// node_modules/@sinclair/typebox/build/esm/type/intrinsic/intrinsic-from-mapped-key.mjs
function MappedIntrinsicPropertyKey(K, M, options) {
  return {
    [K]: Intrinsic(Literal(K), M, Clone(options))
  };
}
function MappedIntrinsicPropertyKeys(K, M, options) {
  const result = K.reduce((Acc, L) => {
    return { ...Acc, ...MappedIntrinsicPropertyKey(L, M, options) };
  }, {});
  return result;
}
function MappedIntrinsicProperties(T, M, options) {
  return MappedIntrinsicPropertyKeys(T["keys"], M, options);
}
function IntrinsicFromMappedKey(T, M, options) {
  const P = MappedIntrinsicProperties(T, M, options);
  return MappedResult(P);
}

// node_modules/@sinclair/typebox/build/esm/type/intrinsic/intrinsic.mjs
function ApplyUncapitalize(value) {
  const [first, rest] = [value.slice(0, 1), value.slice(1)];
  return [first.toLowerCase(), rest].join("");
}
function ApplyCapitalize(value) {
  const [first, rest] = [value.slice(0, 1), value.slice(1)];
  return [first.toUpperCase(), rest].join("");
}
function ApplyUppercase(value) {
  return value.toUpperCase();
}
function ApplyLowercase(value) {
  return value.toLowerCase();
}
function FromTemplateLiteral3(schema, mode, options) {
  const expression = TemplateLiteralParseExact(schema.pattern);
  const finite = IsTemplateLiteralExpressionFinite(expression);
  if (!finite)
    return { ...schema, pattern: FromLiteralValue(schema.pattern, mode) };
  const strings = [...TemplateLiteralExpressionGenerate(expression)];
  const literals = strings.map((value) => Literal(value));
  const mapped = FromRest5(literals, mode);
  const union = Union(mapped);
  return TemplateLiteral([union], options);
}
function FromLiteralValue(value, mode) {
  return typeof value === "string" ? mode === "Uncapitalize" ? ApplyUncapitalize(value) : mode === "Capitalize" ? ApplyCapitalize(value) : mode === "Uppercase" ? ApplyUppercase(value) : mode === "Lowercase" ? ApplyLowercase(value) : value : value.toString();
}
function FromRest5(T, M) {
  return T.map((L) => Intrinsic(L, M));
}
function Intrinsic(schema, mode, options = {}) {
  return IsMappedKey(schema) ? IntrinsicFromMappedKey(schema, mode, options) : IsTemplateLiteral(schema) ? FromTemplateLiteral3(schema, mode, options) : IsUnion(schema) ? Union(FromRest5(schema.anyOf, mode), options) : IsLiteral(schema) ? Literal(FromLiteralValue(schema.const, mode), options) : CreateType(schema, options);
}

// node_modules/@sinclair/typebox/build/esm/type/intrinsic/capitalize.mjs
function Capitalize(T, options = {}) {
  return Intrinsic(T, "Capitalize", options);
}

// node_modules/@sinclair/typebox/build/esm/type/intrinsic/lowercase.mjs
function Lowercase(T, options = {}) {
  return Intrinsic(T, "Lowercase", options);
}

// node_modules/@sinclair/typebox/build/esm/type/intrinsic/uncapitalize.mjs
function Uncapitalize(T, options = {}) {
  return Intrinsic(T, "Uncapitalize", options);
}

// node_modules/@sinclair/typebox/build/esm/type/intrinsic/uppercase.mjs
function Uppercase(T, options = {}) {
  return Intrinsic(T, "Uppercase", options);
}

// node_modules/@sinclair/typebox/build/esm/type/omit/omit-from-mapped-result.mjs
function FromProperties12(properties, propertyKeys, options) {
  const result = {};
  for (const K2 of globalThis.Object.getOwnPropertyNames(properties))
    result[K2] = Omit(properties[K2], propertyKeys, Clone(options));
  return result;
}
function FromMappedResult9(mappedResult, propertyKeys, options) {
  return FromProperties12(mappedResult.properties, propertyKeys, options);
}
function OmitFromMappedResult(mappedResult, propertyKeys, options) {
  const properties = FromMappedResult9(mappedResult, propertyKeys, options);
  return MappedResult(properties);
}

// node_modules/@sinclair/typebox/build/esm/type/omit/omit.mjs
function FromIntersect6(types, propertyKeys) {
  return types.map((type) => OmitResolve(type, propertyKeys));
}
function FromUnion8(types, propertyKeys) {
  return types.map((type) => OmitResolve(type, propertyKeys));
}
function FromProperty3(properties, key) {
  const { [key]: _, ...R } = properties;
  return R;
}
function FromProperties13(properties, propertyKeys) {
  return propertyKeys.reduce((T, K2) => FromProperty3(T, K2), properties);
}
function FromObject3(properties, propertyKeys) {
  const options = Discard(properties, [TransformKind, "$id", "required", "properties"]);
  const omittedProperties = FromProperties13(properties["properties"], propertyKeys);
  return Object2(omittedProperties, options);
}
function UnionFromPropertyKeys(propertyKeys) {
  const result = propertyKeys.reduce((result2, key) => IsLiteralValue(key) ? [...result2, Literal(key)] : result2, []);
  return Union(result);
}
function OmitResolve(properties, propertyKeys) {
  return IsIntersect(properties) ? Intersect(FromIntersect6(properties.allOf, propertyKeys)) : IsUnion(properties) ? Union(FromUnion8(properties.anyOf, propertyKeys)) : IsObject3(properties) ? FromObject3(properties, propertyKeys) : Object2({});
}
function Omit(type, key, options) {
  const typeKey = IsArray(key) ? UnionFromPropertyKeys(key) : key;
  const propertyKeys = IsSchema(key) ? IndexPropertyKeys(key) : key;
  const isTypeRef = IsRef(type);
  const isKeyRef = IsRef(key);
  return IsMappedResult(type) ? OmitFromMappedResult(type, propertyKeys, options) : IsMappedKey(key) ? OmitFromMappedKey(type, key, options) : isTypeRef && isKeyRef ? Computed("Omit", [type, typeKey], options) : !isTypeRef && isKeyRef ? Computed("Omit", [type, typeKey], options) : isTypeRef && !isKeyRef ? Computed("Omit", [type, typeKey], options) : CreateType({ ...OmitResolve(type, propertyKeys), ...options });
}

// node_modules/@sinclair/typebox/build/esm/type/omit/omit-from-mapped-key.mjs
function FromPropertyKey2(type, key, options) {
  return { [key]: Omit(type, [key], Clone(options)) };
}
function FromPropertyKeys2(type, propertyKeys, options) {
  return propertyKeys.reduce((Acc, LK) => {
    return { ...Acc, ...FromPropertyKey2(type, LK, options) };
  }, {});
}
function FromMappedKey3(type, mappedKey, options) {
  return FromPropertyKeys2(type, mappedKey.keys, options);
}
function OmitFromMappedKey(type, mappedKey, options) {
  const properties = FromMappedKey3(type, mappedKey, options);
  return MappedResult(properties);
}

// node_modules/@sinclair/typebox/build/esm/type/pick/pick-from-mapped-result.mjs
function FromProperties14(properties, propertyKeys, options) {
  const result = {};
  for (const K2 of globalThis.Object.getOwnPropertyNames(properties))
    result[K2] = Pick(properties[K2], propertyKeys, Clone(options));
  return result;
}
function FromMappedResult10(mappedResult, propertyKeys, options) {
  return FromProperties14(mappedResult.properties, propertyKeys, options);
}
function PickFromMappedResult(mappedResult, propertyKeys, options) {
  const properties = FromMappedResult10(mappedResult, propertyKeys, options);
  return MappedResult(properties);
}

// node_modules/@sinclair/typebox/build/esm/type/pick/pick.mjs
function FromIntersect7(types, propertyKeys) {
  return types.map((type) => PickResolve(type, propertyKeys));
}
function FromUnion9(types, propertyKeys) {
  return types.map((type) => PickResolve(type, propertyKeys));
}
function FromProperties15(properties, propertyKeys) {
  const result = {};
  for (const K2 of propertyKeys)
    if (K2 in properties)
      result[K2] = properties[K2];
  return result;
}
function FromObject4(T, K) {
  const options = Discard(T, [TransformKind, "$id", "required", "properties"]);
  const properties = FromProperties15(T["properties"], K);
  return Object2(properties, options);
}
function UnionFromPropertyKeys2(propertyKeys) {
  const result = propertyKeys.reduce((result2, key) => IsLiteralValue(key) ? [...result2, Literal(key)] : result2, []);
  return Union(result);
}
function PickResolve(properties, propertyKeys) {
  return IsIntersect(properties) ? Intersect(FromIntersect7(properties.allOf, propertyKeys)) : IsUnion(properties) ? Union(FromUnion9(properties.anyOf, propertyKeys)) : IsObject3(properties) ? FromObject4(properties, propertyKeys) : Object2({});
}
function Pick(type, key, options) {
  const typeKey = IsArray(key) ? UnionFromPropertyKeys2(key) : key;
  const propertyKeys = IsSchema(key) ? IndexPropertyKeys(key) : key;
  const isTypeRef = IsRef(type);
  const isKeyRef = IsRef(key);
  return IsMappedResult(type) ? PickFromMappedResult(type, propertyKeys, options) : IsMappedKey(key) ? PickFromMappedKey(type, key, options) : isTypeRef && isKeyRef ? Computed("Pick", [type, typeKey], options) : !isTypeRef && isKeyRef ? Computed("Pick", [type, typeKey], options) : isTypeRef && !isKeyRef ? Computed("Pick", [type, typeKey], options) : CreateType({ ...PickResolve(type, propertyKeys), ...options });
}

// node_modules/@sinclair/typebox/build/esm/type/pick/pick-from-mapped-key.mjs
function FromPropertyKey3(type, key, options) {
  return {
    [key]: Pick(type, [key], Clone(options))
  };
}
function FromPropertyKeys3(type, propertyKeys, options) {
  return propertyKeys.reduce((result, leftKey) => {
    return { ...result, ...FromPropertyKey3(type, leftKey, options) };
  }, {});
}
function FromMappedKey4(type, mappedKey, options) {
  return FromPropertyKeys3(type, mappedKey.keys, options);
}
function PickFromMappedKey(type, mappedKey, options) {
  const properties = FromMappedKey4(type, mappedKey, options);
  return MappedResult(properties);
}

// node_modules/@sinclair/typebox/build/esm/type/partial/partial.mjs
function FromComputed3(target, parameters) {
  return Computed("Partial", [Computed(target, parameters)]);
}
function FromRef3($ref) {
  return Computed("Partial", [Ref($ref)]);
}
function FromProperties16(properties) {
  const partialProperties = {};
  for (const K of globalThis.Object.getOwnPropertyNames(properties))
    partialProperties[K] = Optional(properties[K]);
  return partialProperties;
}
function FromObject5(type) {
  const options = Discard(type, [TransformKind, "$id", "required", "properties"]);
  const properties = FromProperties16(type["properties"]);
  return Object2(properties, options);
}
function FromRest6(types) {
  return types.map((type) => PartialResolve(type));
}
function PartialResolve(type) {
  return IsComputed(type) ? FromComputed3(type.target, type.parameters) : IsRef(type) ? FromRef3(type.$ref) : IsIntersect(type) ? Intersect(FromRest6(type.allOf)) : IsUnion(type) ? Union(FromRest6(type.anyOf)) : IsObject3(type) ? FromObject5(type) : IsBigInt3(type) ? type : IsBoolean3(type) ? type : IsInteger2(type) ? type : IsLiteral(type) ? type : IsNull3(type) ? type : IsNumber3(type) ? type : IsString3(type) ? type : IsSymbol3(type) ? type : IsUndefined3(type) ? type : Object2({});
}
function Partial(type, options) {
  if (IsMappedResult(type)) {
    return PartialFromMappedResult(type, options);
  } else {
    return CreateType({ ...PartialResolve(type), ...options });
  }
}

// node_modules/@sinclair/typebox/build/esm/type/partial/partial-from-mapped-result.mjs
function FromProperties17(K, options) {
  const Acc = {};
  for (const K2 of globalThis.Object.getOwnPropertyNames(K))
    Acc[K2] = Partial(K[K2], Clone(options));
  return Acc;
}
function FromMappedResult11(R, options) {
  return FromProperties17(R.properties, options);
}
function PartialFromMappedResult(R, options) {
  const P = FromMappedResult11(R, options);
  return MappedResult(P);
}

// node_modules/@sinclair/typebox/build/esm/type/required/required.mjs
function FromComputed4(target, parameters) {
  return Computed("Required", [Computed(target, parameters)]);
}
function FromRef4($ref) {
  return Computed("Required", [Ref($ref)]);
}
function FromProperties18(properties) {
  const requiredProperties = {};
  for (const K of globalThis.Object.getOwnPropertyNames(properties))
    requiredProperties[K] = Discard(properties[K], [OptionalKind]);
  return requiredProperties;
}
function FromObject6(type) {
  const options = Discard(type, [TransformKind, "$id", "required", "properties"]);
  const properties = FromProperties18(type["properties"]);
  return Object2(properties, options);
}
function FromRest7(types) {
  return types.map((type) => RequiredResolve(type));
}
function RequiredResolve(type) {
  return IsComputed(type) ? FromComputed4(type.target, type.parameters) : IsRef(type) ? FromRef4(type.$ref) : IsIntersect(type) ? Intersect(FromRest7(type.allOf)) : IsUnion(type) ? Union(FromRest7(type.anyOf)) : IsObject3(type) ? FromObject6(type) : IsBigInt3(type) ? type : IsBoolean3(type) ? type : IsInteger2(type) ? type : IsLiteral(type) ? type : IsNull3(type) ? type : IsNumber3(type) ? type : IsString3(type) ? type : IsSymbol3(type) ? type : IsUndefined3(type) ? type : Object2({});
}
function Required(type, options) {
  if (IsMappedResult(type)) {
    return RequiredFromMappedResult(type, options);
  } else {
    return CreateType({ ...RequiredResolve(type), ...options });
  }
}

// node_modules/@sinclair/typebox/build/esm/type/required/required-from-mapped-result.mjs
function FromProperties19(P, options) {
  const Acc = {};
  for (const K2 of globalThis.Object.getOwnPropertyNames(P))
    Acc[K2] = Required(P[K2], options);
  return Acc;
}
function FromMappedResult12(R, options) {
  return FromProperties19(R.properties, options);
}
function RequiredFromMappedResult(R, options) {
  const P = FromMappedResult12(R, options);
  return MappedResult(P);
}

// node_modules/@sinclair/typebox/build/esm/type/module/compute.mjs
function DereferenceParameters(moduleProperties, types) {
  return types.map((type) => {
    return IsRef(type) ? Dereference(moduleProperties, type.$ref) : FromType2(moduleProperties, type);
  });
}
function Dereference(moduleProperties, ref) {
  return ref in moduleProperties ? IsRef(moduleProperties[ref]) ? Dereference(moduleProperties, moduleProperties[ref].$ref) : FromType2(moduleProperties, moduleProperties[ref]) : Never();
}
function FromAwaited(parameters) {
  return Awaited(parameters[0]);
}
function FromIndex(parameters) {
  return Index(parameters[0], parameters[1]);
}
function FromKeyOf(parameters) {
  return KeyOf(parameters[0]);
}
function FromPartial(parameters) {
  return Partial(parameters[0]);
}
function FromOmit(parameters) {
  return Omit(parameters[0], parameters[1]);
}
function FromPick(parameters) {
  return Pick(parameters[0], parameters[1]);
}
function FromRequired(parameters) {
  return Required(parameters[0]);
}
function FromComputed5(moduleProperties, target, parameters) {
  const dereferenced = DereferenceParameters(moduleProperties, parameters);
  return target === "Awaited" ? FromAwaited(dereferenced) : target === "Index" ? FromIndex(dereferenced) : target === "KeyOf" ? FromKeyOf(dereferenced) : target === "Partial" ? FromPartial(dereferenced) : target === "Omit" ? FromOmit(dereferenced) : target === "Pick" ? FromPick(dereferenced) : target === "Required" ? FromRequired(dereferenced) : Never();
}
function FromArray6(moduleProperties, type) {
  return Array2(FromType2(moduleProperties, type));
}
function FromAsyncIterator3(moduleProperties, type) {
  return AsyncIterator(FromType2(moduleProperties, type));
}
function FromConstructor3(moduleProperties, parameters, instanceType) {
  return Constructor(FromTypes2(moduleProperties, parameters), FromType2(moduleProperties, instanceType));
}
function FromFunction3(moduleProperties, parameters, returnType) {
  return Function2(FromTypes2(moduleProperties, parameters), FromType2(moduleProperties, returnType));
}
function FromIntersect8(moduleProperties, types) {
  return Intersect(FromTypes2(moduleProperties, types));
}
function FromIterator3(moduleProperties, type) {
  return Iterator(FromType2(moduleProperties, type));
}
function FromObject7(moduleProperties, properties) {
  return Object2(globalThis.Object.keys(properties).reduce((result, key) => {
    return { ...result, [key]: FromType2(moduleProperties, properties[key]) };
  }, {}));
}
function FromRecord3(moduleProperties, type) {
  const [value, pattern] = [FromType2(moduleProperties, RecordValue2(type)), RecordPattern(type)];
  const result = CloneType(type);
  result.patternProperties[pattern] = value;
  return result;
}
function FromTransform(moduleProperties, transform) {
  return IsRef(transform) ? { ...Dereference(moduleProperties, transform.$ref), [TransformKind]: transform[TransformKind] } : transform;
}
function FromTuple5(moduleProperties, types) {
  return Tuple(FromTypes2(moduleProperties, types));
}
function FromUnion10(moduleProperties, types) {
  return Union(FromTypes2(moduleProperties, types));
}
function FromTypes2(moduleProperties, types) {
  return types.map((type) => FromType2(moduleProperties, type));
}
function FromType2(moduleProperties, type) {
  return IsOptional(type) ? CreateType(FromType2(moduleProperties, Discard(type, [OptionalKind])), type) : IsReadonly(type) ? CreateType(FromType2(moduleProperties, Discard(type, [ReadonlyKind])), type) : IsTransform(type) ? CreateType(FromTransform(moduleProperties, type), type) : IsArray3(type) ? CreateType(FromArray6(moduleProperties, type.items), type) : IsAsyncIterator3(type) ? CreateType(FromAsyncIterator3(moduleProperties, type.items), type) : IsComputed(type) ? CreateType(FromComputed5(moduleProperties, type.target, type.parameters)) : IsConstructor(type) ? CreateType(FromConstructor3(moduleProperties, type.parameters, type.returns), type) : IsFunction3(type) ? CreateType(FromFunction3(moduleProperties, type.parameters, type.returns), type) : IsIntersect(type) ? CreateType(FromIntersect8(moduleProperties, type.allOf), type) : IsIterator3(type) ? CreateType(FromIterator3(moduleProperties, type.items), type) : IsObject3(type) ? CreateType(FromObject7(moduleProperties, type.properties), type) : IsRecord(type) ? CreateType(FromRecord3(moduleProperties, type)) : IsTuple(type) ? CreateType(FromTuple5(moduleProperties, type.items || []), type) : IsUnion(type) ? CreateType(FromUnion10(moduleProperties, type.anyOf), type) : type;
}
function ComputeType(moduleProperties, key) {
  return key in moduleProperties ? FromType2(moduleProperties, moduleProperties[key]) : Never();
}
function ComputeModuleProperties(moduleProperties) {
  return globalThis.Object.getOwnPropertyNames(moduleProperties).reduce((result, key) => {
    return { ...result, [key]: ComputeType(moduleProperties, key) };
  }, {});
}

// node_modules/@sinclair/typebox/build/esm/type/module/module.mjs
class TModule {
  constructor($defs) {
    const computed = ComputeModuleProperties($defs);
    const identified = this.WithIdentifiers(computed);
    this.$defs = identified;
  }
  Import(key, options) {
    const $defs = { ...this.$defs, [key]: CreateType(this.$defs[key], options) };
    return CreateType({ [Kind]: "Import", $defs, $ref: key });
  }
  WithIdentifiers($defs) {
    return globalThis.Object.getOwnPropertyNames($defs).reduce((result, key) => {
      return { ...result, [key]: { ...$defs[key], $id: key } };
    }, {});
  }
}
function Module(properties) {
  return new TModule(properties);
}

// node_modules/@sinclair/typebox/build/esm/type/not/not.mjs
function Not2(type, options) {
  return CreateType({ [Kind]: "Not", not: type }, options);
}

// node_modules/@sinclair/typebox/build/esm/type/parameters/parameters.mjs
function Parameters(schema, options) {
  return IsFunction3(schema) ? Tuple(schema.parameters, options) : Never();
}

// node_modules/@sinclair/typebox/build/esm/type/recursive/recursive.mjs
var Ordinal = 0;
function Recursive(callback, options = {}) {
  if (IsUndefined(options.$id))
    options.$id = `T${Ordinal++}`;
  const thisType = CloneType(callback({ [Kind]: "This", $ref: `${options.$id}` }));
  thisType.$id = options.$id;
  return CreateType({ [Hint]: "Recursive", ...thisType }, options);
}

// node_modules/@sinclair/typebox/build/esm/type/regexp/regexp.mjs
function RegExp2(unresolved, options) {
  const expr = IsString(unresolved) ? new globalThis.RegExp(unresolved) : unresolved;
  return CreateType({ [Kind]: "RegExp", type: "RegExp", source: expr.source, flags: expr.flags }, options);
}

// node_modules/@sinclair/typebox/build/esm/type/rest/rest.mjs
function RestResolve(T) {
  return IsIntersect(T) ? T.allOf : IsUnion(T) ? T.anyOf : IsTuple(T) ? T.items ?? [] : [];
}
function Rest(T) {
  return RestResolve(T);
}

// node_modules/@sinclair/typebox/build/esm/type/return-type/return-type.mjs
function ReturnType(schema, options) {
  return IsFunction3(schema) ? CreateType(schema.returns, options) : Never(options);
}

// node_modules/@sinclair/typebox/build/esm/type/transform/transform.mjs
class TransformDecodeBuilder {
  constructor(schema) {
    this.schema = schema;
  }
  Decode(decode) {
    return new TransformEncodeBuilder(this.schema, decode);
  }
}

class TransformEncodeBuilder {
  constructor(schema, decode) {
    this.schema = schema;
    this.decode = decode;
  }
  EncodeTransform(encode, schema) {
    const Encode = (value) => schema[TransformKind].Encode(encode(value));
    const Decode = (value) => this.decode(schema[TransformKind].Decode(value));
    const Codec = { Encode, Decode };
    return { ...schema, [TransformKind]: Codec };
  }
  EncodeSchema(encode, schema) {
    const Codec = { Decode: this.decode, Encode: encode };
    return { ...schema, [TransformKind]: Codec };
  }
  Encode(encode) {
    return IsTransform(this.schema) ? this.EncodeTransform(encode, this.schema) : this.EncodeSchema(encode, this.schema);
  }
}
function Transform(schema) {
  return new TransformDecodeBuilder(schema);
}

// node_modules/@sinclair/typebox/build/esm/type/unsafe/unsafe.mjs
function Unsafe(options = {}) {
  return CreateType({ [Kind]: options[Kind] ?? "Unsafe" }, options);
}

// node_modules/@sinclair/typebox/build/esm/type/void/void.mjs
function Void(options) {
  return CreateType({ [Kind]: "Void", type: "void" }, options);
}

// node_modules/@sinclair/typebox/build/esm/type/type/type.mjs
var exports_type3 = {};
__export(exports_type3, {
  Void: () => Void,
  Uppercase: () => Uppercase,
  Unsafe: () => Unsafe,
  Unknown: () => Unknown,
  Union: () => Union,
  Undefined: () => Undefined,
  Uncapitalize: () => Uncapitalize,
  Uint8Array: () => Uint8Array2,
  Tuple: () => Tuple,
  Transform: () => Transform,
  TemplateLiteral: () => TemplateLiteral,
  Symbol: () => Symbol2,
  String: () => String2,
  ReturnType: () => ReturnType,
  Rest: () => Rest,
  Required: () => Required,
  RegExp: () => RegExp2,
  Ref: () => Ref,
  Recursive: () => Recursive,
  Record: () => Record,
  ReadonlyOptional: () => ReadonlyOptional,
  Readonly: () => Readonly,
  Promise: () => Promise2,
  Pick: () => Pick,
  Partial: () => Partial,
  Parameters: () => Parameters,
  Optional: () => Optional,
  Omit: () => Omit,
  Object: () => Object2,
  Number: () => Number2,
  Null: () => Null,
  Not: () => Not2,
  Never: () => Never,
  Module: () => Module,
  Mapped: () => Mapped,
  Lowercase: () => Lowercase,
  Literal: () => Literal,
  KeyOf: () => KeyOf,
  Iterator: () => Iterator,
  Intersect: () => Intersect,
  Integer: () => Integer,
  Instantiate: () => Instantiate,
  InstanceType: () => InstanceType,
  Index: () => Index,
  Function: () => Function2,
  Extract: () => Extract,
  Extends: () => Extends,
  Exclude: () => Exclude,
  Enum: () => Enum,
  Date: () => Date2,
  ConstructorParameters: () => ConstructorParameters,
  Constructor: () => Constructor,
  Const: () => Const,
  Composite: () => Composite,
  Capitalize: () => Capitalize,
  Boolean: () => Boolean2,
  BigInt: () => BigInt2,
  Awaited: () => Awaited,
  AsyncIterator: () => AsyncIterator,
  Array: () => Array2,
  Argument: () => Argument,
  Any: () => Any
});

// node_modules/@sinclair/typebox/build/esm/type/type/index.mjs
var Type = exports_type3;

// node_modules/elysia/dist/index.mjs
var import_fast_decode_uri_component = __toESM(require_fast_decode_uri_component(), 1);

// node_modules/@sinclair/typebox/build/esm/errors/function.mjs
function DefaultErrorFunction(error) {
  switch (error.errorType) {
    case ValueErrorType.ArrayContains:
      return "Expected array to contain at least one matching value";
    case ValueErrorType.ArrayMaxContains:
      return `Expected array to contain no more than ${error.schema.maxContains} matching values`;
    case ValueErrorType.ArrayMinContains:
      return `Expected array to contain at least ${error.schema.minContains} matching values`;
    case ValueErrorType.ArrayMaxItems:
      return `Expected array length to be less or equal to ${error.schema.maxItems}`;
    case ValueErrorType.ArrayMinItems:
      return `Expected array length to be greater or equal to ${error.schema.minItems}`;
    case ValueErrorType.ArrayUniqueItems:
      return "Expected array elements to be unique";
    case ValueErrorType.Array:
      return "Expected array";
    case ValueErrorType.AsyncIterator:
      return "Expected AsyncIterator";
    case ValueErrorType.BigIntExclusiveMaximum:
      return `Expected bigint to be less than ${error.schema.exclusiveMaximum}`;
    case ValueErrorType.BigIntExclusiveMinimum:
      return `Expected bigint to be greater than ${error.schema.exclusiveMinimum}`;
    case ValueErrorType.BigIntMaximum:
      return `Expected bigint to be less or equal to ${error.schema.maximum}`;
    case ValueErrorType.BigIntMinimum:
      return `Expected bigint to be greater or equal to ${error.schema.minimum}`;
    case ValueErrorType.BigIntMultipleOf:
      return `Expected bigint to be a multiple of ${error.schema.multipleOf}`;
    case ValueErrorType.BigInt:
      return "Expected bigint";
    case ValueErrorType.Boolean:
      return "Expected boolean";
    case ValueErrorType.DateExclusiveMinimumTimestamp:
      return `Expected Date timestamp to be greater than ${error.schema.exclusiveMinimumTimestamp}`;
    case ValueErrorType.DateExclusiveMaximumTimestamp:
      return `Expected Date timestamp to be less than ${error.schema.exclusiveMaximumTimestamp}`;
    case ValueErrorType.DateMinimumTimestamp:
      return `Expected Date timestamp to be greater or equal to ${error.schema.minimumTimestamp}`;
    case ValueErrorType.DateMaximumTimestamp:
      return `Expected Date timestamp to be less or equal to ${error.schema.maximumTimestamp}`;
    case ValueErrorType.DateMultipleOfTimestamp:
      return `Expected Date timestamp to be a multiple of ${error.schema.multipleOfTimestamp}`;
    case ValueErrorType.Date:
      return "Expected Date";
    case ValueErrorType.Function:
      return "Expected function";
    case ValueErrorType.IntegerExclusiveMaximum:
      return `Expected integer to be less than ${error.schema.exclusiveMaximum}`;
    case ValueErrorType.IntegerExclusiveMinimum:
      return `Expected integer to be greater than ${error.schema.exclusiveMinimum}`;
    case ValueErrorType.IntegerMaximum:
      return `Expected integer to be less or equal to ${error.schema.maximum}`;
    case ValueErrorType.IntegerMinimum:
      return `Expected integer to be greater or equal to ${error.schema.minimum}`;
    case ValueErrorType.IntegerMultipleOf:
      return `Expected integer to be a multiple of ${error.schema.multipleOf}`;
    case ValueErrorType.Integer:
      return "Expected integer";
    case ValueErrorType.IntersectUnevaluatedProperties:
      return "Unexpected property";
    case ValueErrorType.Intersect:
      return "Expected all values to match";
    case ValueErrorType.Iterator:
      return "Expected Iterator";
    case ValueErrorType.Literal:
      return `Expected ${typeof error.schema.const === "string" ? `'${error.schema.const}'` : error.schema.const}`;
    case ValueErrorType.Never:
      return "Never";
    case ValueErrorType.Not:
      return "Value should not match";
    case ValueErrorType.Null:
      return "Expected null";
    case ValueErrorType.NumberExclusiveMaximum:
      return `Expected number to be less than ${error.schema.exclusiveMaximum}`;
    case ValueErrorType.NumberExclusiveMinimum:
      return `Expected number to be greater than ${error.schema.exclusiveMinimum}`;
    case ValueErrorType.NumberMaximum:
      return `Expected number to be less or equal to ${error.schema.maximum}`;
    case ValueErrorType.NumberMinimum:
      return `Expected number to be greater or equal to ${error.schema.minimum}`;
    case ValueErrorType.NumberMultipleOf:
      return `Expected number to be a multiple of ${error.schema.multipleOf}`;
    case ValueErrorType.Number:
      return "Expected number";
    case ValueErrorType.Object:
      return "Expected object";
    case ValueErrorType.ObjectAdditionalProperties:
      return "Unexpected property";
    case ValueErrorType.ObjectMaxProperties:
      return `Expected object to have no more than ${error.schema.maxProperties} properties`;
    case ValueErrorType.ObjectMinProperties:
      return `Expected object to have at least ${error.schema.minProperties} properties`;
    case ValueErrorType.ObjectRequiredProperty:
      return "Expected required property";
    case ValueErrorType.Promise:
      return "Expected Promise";
    case ValueErrorType.RegExp:
      return "Expected string to match regular expression";
    case ValueErrorType.StringFormatUnknown:
      return `Unknown format '${error.schema.format}'`;
    case ValueErrorType.StringFormat:
      return `Expected string to match '${error.schema.format}' format`;
    case ValueErrorType.StringMaxLength:
      return `Expected string length less or equal to ${error.schema.maxLength}`;
    case ValueErrorType.StringMinLength:
      return `Expected string length greater or equal to ${error.schema.minLength}`;
    case ValueErrorType.StringPattern:
      return `Expected string to match '${error.schema.pattern}'`;
    case ValueErrorType.String:
      return "Expected string";
    case ValueErrorType.Symbol:
      return "Expected symbol";
    case ValueErrorType.TupleLength:
      return `Expected tuple to have ${error.schema.maxItems || 0} elements`;
    case ValueErrorType.Tuple:
      return "Expected tuple";
    case ValueErrorType.Uint8ArrayMaxByteLength:
      return `Expected byte length less or equal to ${error.schema.maxByteLength}`;
    case ValueErrorType.Uint8ArrayMinByteLength:
      return `Expected byte length greater or equal to ${error.schema.minByteLength}`;
    case ValueErrorType.Uint8Array:
      return "Expected Uint8Array";
    case ValueErrorType.Undefined:
      return "Expected undefined";
    case ValueErrorType.Union:
      return "Expected union value";
    case ValueErrorType.Void:
      return "Expected void";
    case ValueErrorType.Kind:
      return `Expected kind '${error.schema[Kind]}'`;
    default:
      return "Unknown error type";
  }
}
var errorFunction = DefaultErrorFunction;
function GetErrorFunction() {
  return errorFunction;
}

// node_modules/@sinclair/typebox/build/esm/value/deref/deref.mjs
class TypeDereferenceError extends TypeBoxError {
  constructor(schema) {
    super(`Unable to dereference schema with $id '${schema.$ref}'`);
    this.schema = schema;
  }
}
function Resolve(schema, references) {
  const target = references.find((target2) => target2.$id === schema.$ref);
  if (target === undefined)
    throw new TypeDereferenceError(schema);
  return Deref(target, references);
}
function Pushref(schema, references) {
  if (!IsString2(schema.$id) || references.some((target) => target.$id === schema.$id))
    return references;
  references.push(schema);
  return references;
}
function Deref(schema, references) {
  return schema[Kind] === "This" || schema[Kind] === "Ref" ? Resolve(schema, references) : schema;
}

// node_modules/@sinclair/typebox/build/esm/value/hash/hash.mjs
class ValueHashError extends TypeBoxError {
  constructor(value) {
    super(`Unable to hash value`);
    this.value = value;
  }
}
var ByteMarker;
(function(ByteMarker2) {
  ByteMarker2[ByteMarker2["Undefined"] = 0] = "Undefined";
  ByteMarker2[ByteMarker2["Null"] = 1] = "Null";
  ByteMarker2[ByteMarker2["Boolean"] = 2] = "Boolean";
  ByteMarker2[ByteMarker2["Number"] = 3] = "Number";
  ByteMarker2[ByteMarker2["String"] = 4] = "String";
  ByteMarker2[ByteMarker2["Object"] = 5] = "Object";
  ByteMarker2[ByteMarker2["Array"] = 6] = "Array";
  ByteMarker2[ByteMarker2["Date"] = 7] = "Date";
  ByteMarker2[ByteMarker2["Uint8Array"] = 8] = "Uint8Array";
  ByteMarker2[ByteMarker2["Symbol"] = 9] = "Symbol";
  ByteMarker2[ByteMarker2["BigInt"] = 10] = "BigInt";
})(ByteMarker || (ByteMarker = {}));
var Accumulator = BigInt("14695981039346656037");
var [Prime, Size] = [BigInt("1099511628211"), BigInt("18446744073709551616")];
var Bytes = Array.from({ length: 256 }).map((_, i) => BigInt(i));
var F64 = new Float64Array(1);
var F64In = new DataView(F64.buffer);
var F64Out = new Uint8Array(F64.buffer);
function* NumberToBytes(value) {
  const byteCount = value === 0 ? 1 : Math.ceil(Math.floor(Math.log2(value) + 1) / 8);
  for (let i = 0;i < byteCount; i++) {
    yield value >> 8 * (byteCount - 1 - i) & 255;
  }
}
function ArrayType2(value) {
  FNV1A64(ByteMarker.Array);
  for (const item of value) {
    Visit4(item);
  }
}
function BooleanType(value) {
  FNV1A64(ByteMarker.Boolean);
  FNV1A64(value ? 1 : 0);
}
function BigIntType(value) {
  FNV1A64(ByteMarker.BigInt);
  F64In.setBigInt64(0, value);
  for (const byte of F64Out) {
    FNV1A64(byte);
  }
}
function DateType2(value) {
  FNV1A64(ByteMarker.Date);
  Visit4(value.getTime());
}
function NullType(value) {
  FNV1A64(ByteMarker.Null);
}
function NumberType(value) {
  FNV1A64(ByteMarker.Number);
  F64In.setFloat64(0, value);
  for (const byte of F64Out) {
    FNV1A64(byte);
  }
}
function ObjectType2(value) {
  FNV1A64(ByteMarker.Object);
  for (const key of globalThis.Object.getOwnPropertyNames(value).sort()) {
    Visit4(key);
    Visit4(value[key]);
  }
}
function StringType(value) {
  FNV1A64(ByteMarker.String);
  for (let i = 0;i < value.length; i++) {
    for (const byte of NumberToBytes(value.charCodeAt(i))) {
      FNV1A64(byte);
    }
  }
}
function SymbolType(value) {
  FNV1A64(ByteMarker.Symbol);
  Visit4(value.description);
}
function Uint8ArrayType2(value) {
  FNV1A64(ByteMarker.Uint8Array);
  for (let i = 0;i < value.length; i++) {
    FNV1A64(value[i]);
  }
}
function UndefinedType(value) {
  return FNV1A64(ByteMarker.Undefined);
}
function Visit4(value) {
  if (IsArray2(value))
    return ArrayType2(value);
  if (IsBoolean2(value))
    return BooleanType(value);
  if (IsBigInt2(value))
    return BigIntType(value);
  if (IsDate2(value))
    return DateType2(value);
  if (IsNull2(value))
    return NullType(value);
  if (IsNumber2(value))
    return NumberType(value);
  if (IsObject2(value))
    return ObjectType2(value);
  if (IsString2(value))
    return StringType(value);
  if (IsSymbol2(value))
    return SymbolType(value);
  if (IsUint8Array2(value))
    return Uint8ArrayType2(value);
  if (IsUndefined2(value))
    return UndefinedType(value);
  throw new ValueHashError(value);
}
function FNV1A64(byte) {
  Accumulator = Accumulator ^ Bytes[byte];
  Accumulator = Accumulator * Prime % Size;
}
function Hash(value) {
  Accumulator = BigInt("14695981039346656037");
  Visit4(value);
  return Accumulator;
}

// node_modules/@sinclair/typebox/build/esm/value/check/check.mjs
class ValueCheckUnknownTypeError extends TypeBoxError {
  constructor(schema) {
    super(`Unknown type`);
    this.schema = schema;
  }
}
function IsAnyOrUnknown(schema) {
  return schema[Kind] === "Any" || schema[Kind] === "Unknown";
}
function IsDefined(value) {
  return value !== undefined;
}
function FromAny2(schema, references, value) {
  return true;
}
function FromArgument2(schema, references, value) {
  return true;
}
function FromArray7(schema, references, value) {
  if (!IsArray2(value))
    return false;
  if (IsDefined(schema.minItems) && !(value.length >= schema.minItems)) {
    return false;
  }
  if (IsDefined(schema.maxItems) && !(value.length <= schema.maxItems)) {
    return false;
  }
  if (!value.every((value2) => Visit5(schema.items, references, value2))) {
    return false;
  }
  if (schema.uniqueItems === true && !function() {
    const set2 = new Set;
    for (const element of value) {
      const hashed = Hash(element);
      if (set2.has(hashed)) {
        return false;
      } else {
        set2.add(hashed);
      }
    }
    return true;
  }()) {
    return false;
  }
  if (!(IsDefined(schema.contains) || IsNumber2(schema.minContains) || IsNumber2(schema.maxContains))) {
    return true;
  }
  const containsSchema = IsDefined(schema.contains) ? schema.contains : Never();
  const containsCount = value.reduce((acc, value2) => Visit5(containsSchema, references, value2) ? acc + 1 : acc, 0);
  if (containsCount === 0) {
    return false;
  }
  if (IsNumber2(schema.minContains) && containsCount < schema.minContains) {
    return false;
  }
  if (IsNumber2(schema.maxContains) && containsCount > schema.maxContains) {
    return false;
  }
  return true;
}
function FromAsyncIterator4(schema, references, value) {
  return IsAsyncIterator2(value);
}
function FromBigInt2(schema, references, value) {
  if (!IsBigInt2(value))
    return false;
  if (IsDefined(schema.exclusiveMaximum) && !(value < schema.exclusiveMaximum)) {
    return false;
  }
  if (IsDefined(schema.exclusiveMinimum) && !(value > schema.exclusiveMinimum)) {
    return false;
  }
  if (IsDefined(schema.maximum) && !(value <= schema.maximum)) {
    return false;
  }
  if (IsDefined(schema.minimum) && !(value >= schema.minimum)) {
    return false;
  }
  if (IsDefined(schema.multipleOf) && !(value % schema.multipleOf === BigInt(0))) {
    return false;
  }
  return true;
}
function FromBoolean2(schema, references, value) {
  return IsBoolean2(value);
}
function FromConstructor4(schema, references, value) {
  return Visit5(schema.returns, references, value.prototype);
}
function FromDate2(schema, references, value) {
  if (!IsDate2(value))
    return false;
  if (IsDefined(schema.exclusiveMaximumTimestamp) && !(value.getTime() < schema.exclusiveMaximumTimestamp)) {
    return false;
  }
  if (IsDefined(schema.exclusiveMinimumTimestamp) && !(value.getTime() > schema.exclusiveMinimumTimestamp)) {
    return false;
  }
  if (IsDefined(schema.maximumTimestamp) && !(value.getTime() <= schema.maximumTimestamp)) {
    return false;
  }
  if (IsDefined(schema.minimumTimestamp) && !(value.getTime() >= schema.minimumTimestamp)) {
    return false;
  }
  if (IsDefined(schema.multipleOfTimestamp) && !(value.getTime() % schema.multipleOfTimestamp === 0)) {
    return false;
  }
  return true;
}
function FromFunction4(schema, references, value) {
  return IsFunction2(value);
}
function FromImport(schema, references, value) {
  const definitions = globalThis.Object.values(schema.$defs);
  const target = schema.$defs[schema.$ref];
  return Visit5(target, [...references, ...definitions], value);
}
function FromInteger2(schema, references, value) {
  if (!IsInteger(value)) {
    return false;
  }
  if (IsDefined(schema.exclusiveMaximum) && !(value < schema.exclusiveMaximum)) {
    return false;
  }
  if (IsDefined(schema.exclusiveMinimum) && !(value > schema.exclusiveMinimum)) {
    return false;
  }
  if (IsDefined(schema.maximum) && !(value <= schema.maximum)) {
    return false;
  }
  if (IsDefined(schema.minimum) && !(value >= schema.minimum)) {
    return false;
  }
  if (IsDefined(schema.multipleOf) && !(value % schema.multipleOf === 0)) {
    return false;
  }
  return true;
}
function FromIntersect9(schema, references, value) {
  const check1 = schema.allOf.every((schema2) => Visit5(schema2, references, value));
  if (schema.unevaluatedProperties === false) {
    const keyPattern = new RegExp(KeyOfPattern(schema));
    const check2 = Object.getOwnPropertyNames(value).every((key) => keyPattern.test(key));
    return check1 && check2;
  } else if (IsSchema(schema.unevaluatedProperties)) {
    const keyCheck = new RegExp(KeyOfPattern(schema));
    const check2 = Object.getOwnPropertyNames(value).every((key) => keyCheck.test(key) || Visit5(schema.unevaluatedProperties, references, value[key]));
    return check1 && check2;
  } else {
    return check1;
  }
}
function FromIterator4(schema, references, value) {
  return IsIterator2(value);
}
function FromLiteral3(schema, references, value) {
  return value === schema.const;
}
function FromNever2(schema, references, value) {
  return false;
}
function FromNot2(schema, references, value) {
  return !Visit5(schema.not, references, value);
}
function FromNull2(schema, references, value) {
  return IsNull2(value);
}
function FromNumber2(schema, references, value) {
  if (!TypeSystemPolicy.IsNumberLike(value))
    return false;
  if (IsDefined(schema.exclusiveMaximum) && !(value < schema.exclusiveMaximum)) {
    return false;
  }
  if (IsDefined(schema.exclusiveMinimum) && !(value > schema.exclusiveMinimum)) {
    return false;
  }
  if (IsDefined(schema.minimum) && !(value >= schema.minimum)) {
    return false;
  }
  if (IsDefined(schema.maximum) && !(value <= schema.maximum)) {
    return false;
  }
  if (IsDefined(schema.multipleOf) && !(value % schema.multipleOf === 0)) {
    return false;
  }
  return true;
}
function FromObject8(schema, references, value) {
  if (!TypeSystemPolicy.IsObjectLike(value))
    return false;
  if (IsDefined(schema.minProperties) && !(Object.getOwnPropertyNames(value).length >= schema.minProperties)) {
    return false;
  }
  if (IsDefined(schema.maxProperties) && !(Object.getOwnPropertyNames(value).length <= schema.maxProperties)) {
    return false;
  }
  const knownKeys = Object.getOwnPropertyNames(schema.properties);
  for (const knownKey of knownKeys) {
    const property = schema.properties[knownKey];
    if (schema.required && schema.required.includes(knownKey)) {
      if (!Visit5(property, references, value[knownKey])) {
        return false;
      }
      if ((ExtendsUndefinedCheck(property) || IsAnyOrUnknown(property)) && !(knownKey in value)) {
        return false;
      }
    } else {
      if (TypeSystemPolicy.IsExactOptionalProperty(value, knownKey) && !Visit5(property, references, value[knownKey])) {
        return false;
      }
    }
  }
  if (schema.additionalProperties === false) {
    const valueKeys = Object.getOwnPropertyNames(value);
    if (schema.required && schema.required.length === knownKeys.length && valueKeys.length === knownKeys.length) {
      return true;
    } else {
      return valueKeys.every((valueKey) => knownKeys.includes(valueKey));
    }
  } else if (typeof schema.additionalProperties === "object") {
    const valueKeys = Object.getOwnPropertyNames(value);
    return valueKeys.every((key) => knownKeys.includes(key) || Visit5(schema.additionalProperties, references, value[key]));
  } else {
    return true;
  }
}
function FromPromise4(schema, references, value) {
  return IsPromise(value);
}
function FromRecord4(schema, references, value) {
  if (!TypeSystemPolicy.IsRecordLike(value)) {
    return false;
  }
  if (IsDefined(schema.minProperties) && !(Object.getOwnPropertyNames(value).length >= schema.minProperties)) {
    return false;
  }
  if (IsDefined(schema.maxProperties) && !(Object.getOwnPropertyNames(value).length <= schema.maxProperties)) {
    return false;
  }
  const [patternKey, patternSchema] = Object.entries(schema.patternProperties)[0];
  const regex = new RegExp(patternKey);
  const check1 = Object.entries(value).every(([key, value2]) => {
    return regex.test(key) ? Visit5(patternSchema, references, value2) : true;
  });
  const check2 = typeof schema.additionalProperties === "object" ? Object.entries(value).every(([key, value2]) => {
    return !regex.test(key) ? Visit5(schema.additionalProperties, references, value2) : true;
  }) : true;
  const check3 = schema.additionalProperties === false ? Object.getOwnPropertyNames(value).every((key) => {
    return regex.test(key);
  }) : true;
  return check1 && check2 && check3;
}
function FromRef5(schema, references, value) {
  return Visit5(Deref(schema, references), references, value);
}
function FromRegExp2(schema, references, value) {
  const regex = new RegExp(schema.source, schema.flags);
  if (IsDefined(schema.minLength)) {
    if (!(value.length >= schema.minLength))
      return false;
  }
  if (IsDefined(schema.maxLength)) {
    if (!(value.length <= schema.maxLength))
      return false;
  }
  return regex.test(value);
}
function FromString2(schema, references, value) {
  if (!IsString2(value)) {
    return false;
  }
  if (IsDefined(schema.minLength)) {
    if (!(value.length >= schema.minLength))
      return false;
  }
  if (IsDefined(schema.maxLength)) {
    if (!(value.length <= schema.maxLength))
      return false;
  }
  if (IsDefined(schema.pattern)) {
    const regex = new RegExp(schema.pattern);
    if (!regex.test(value))
      return false;
  }
  if (IsDefined(schema.format)) {
    if (!exports_format.Has(schema.format))
      return false;
    const func = exports_format.Get(schema.format);
    return func(value);
  }
  return true;
}
function FromSymbol2(schema, references, value) {
  return IsSymbol2(value);
}
function FromTemplateLiteral4(schema, references, value) {
  return IsString2(value) && new RegExp(schema.pattern).test(value);
}
function FromThis(schema, references, value) {
  return Visit5(Deref(schema, references), references, value);
}
function FromTuple6(schema, references, value) {
  if (!IsArray2(value)) {
    return false;
  }
  if (schema.items === undefined && !(value.length === 0)) {
    return false;
  }
  if (!(value.length === schema.maxItems)) {
    return false;
  }
  if (!schema.items) {
    return true;
  }
  for (let i = 0;i < schema.items.length; i++) {
    if (!Visit5(schema.items[i], references, value[i]))
      return false;
  }
  return true;
}
function FromUndefined2(schema, references, value) {
  return IsUndefined2(value);
}
function FromUnion11(schema, references, value) {
  return schema.anyOf.some((inner) => Visit5(inner, references, value));
}
function FromUint8Array2(schema, references, value) {
  if (!IsUint8Array2(value)) {
    return false;
  }
  if (IsDefined(schema.maxByteLength) && !(value.length <= schema.maxByteLength)) {
    return false;
  }
  if (IsDefined(schema.minByteLength) && !(value.length >= schema.minByteLength)) {
    return false;
  }
  return true;
}
function FromUnknown2(schema, references, value) {
  return true;
}
function FromVoid2(schema, references, value) {
  return TypeSystemPolicy.IsVoidLike(value);
}
function FromKind(schema, references, value) {
  if (!exports_type2.Has(schema[Kind]))
    return false;
  const func = exports_type2.Get(schema[Kind]);
  return func(schema, value);
}
function Visit5(schema, references, value) {
  const references_ = IsDefined(schema.$id) ? Pushref(schema, references) : references;
  const schema_ = schema;
  switch (schema_[Kind]) {
    case "Any":
      return FromAny2(schema_, references_, value);
    case "Argument":
      return FromArgument2(schema_, references_, value);
    case "Array":
      return FromArray7(schema_, references_, value);
    case "AsyncIterator":
      return FromAsyncIterator4(schema_, references_, value);
    case "BigInt":
      return FromBigInt2(schema_, references_, value);
    case "Boolean":
      return FromBoolean2(schema_, references_, value);
    case "Constructor":
      return FromConstructor4(schema_, references_, value);
    case "Date":
      return FromDate2(schema_, references_, value);
    case "Function":
      return FromFunction4(schema_, references_, value);
    case "Import":
      return FromImport(schema_, references_, value);
    case "Integer":
      return FromInteger2(schema_, references_, value);
    case "Intersect":
      return FromIntersect9(schema_, references_, value);
    case "Iterator":
      return FromIterator4(schema_, references_, value);
    case "Literal":
      return FromLiteral3(schema_, references_, value);
    case "Never":
      return FromNever2(schema_, references_, value);
    case "Not":
      return FromNot2(schema_, references_, value);
    case "Null":
      return FromNull2(schema_, references_, value);
    case "Number":
      return FromNumber2(schema_, references_, value);
    case "Object":
      return FromObject8(schema_, references_, value);
    case "Promise":
      return FromPromise4(schema_, references_, value);
    case "Record":
      return FromRecord4(schema_, references_, value);
    case "Ref":
      return FromRef5(schema_, references_, value);
    case "RegExp":
      return FromRegExp2(schema_, references_, value);
    case "String":
      return FromString2(schema_, references_, value);
    case "Symbol":
      return FromSymbol2(schema_, references_, value);
    case "TemplateLiteral":
      return FromTemplateLiteral4(schema_, references_, value);
    case "This":
      return FromThis(schema_, references_, value);
    case "Tuple":
      return FromTuple6(schema_, references_, value);
    case "Undefined":
      return FromUndefined2(schema_, references_, value);
    case "Union":
      return FromUnion11(schema_, references_, value);
    case "Uint8Array":
      return FromUint8Array2(schema_, references_, value);
    case "Unknown":
      return FromUnknown2(schema_, references_, value);
    case "Void":
      return FromVoid2(schema_, references_, value);
    default:
      if (!exports_type2.Has(schema_[Kind]))
        throw new ValueCheckUnknownTypeError(schema_);
      return FromKind(schema_, references_, value);
  }
}
function Check(...args) {
  return args.length === 3 ? Visit5(args[0], args[1], args[2]) : Visit5(args[0], [], args[1]);
}

// node_modules/@sinclair/typebox/build/esm/errors/errors.mjs
var ValueErrorType;
(function(ValueErrorType2) {
  ValueErrorType2[ValueErrorType2["ArrayContains"] = 0] = "ArrayContains";
  ValueErrorType2[ValueErrorType2["ArrayMaxContains"] = 1] = "ArrayMaxContains";
  ValueErrorType2[ValueErrorType2["ArrayMaxItems"] = 2] = "ArrayMaxItems";
  ValueErrorType2[ValueErrorType2["ArrayMinContains"] = 3] = "ArrayMinContains";
  ValueErrorType2[ValueErrorType2["ArrayMinItems"] = 4] = "ArrayMinItems";
  ValueErrorType2[ValueErrorType2["ArrayUniqueItems"] = 5] = "ArrayUniqueItems";
  ValueErrorType2[ValueErrorType2["Array"] = 6] = "Array";
  ValueErrorType2[ValueErrorType2["AsyncIterator"] = 7] = "AsyncIterator";
  ValueErrorType2[ValueErrorType2["BigIntExclusiveMaximum"] = 8] = "BigIntExclusiveMaximum";
  ValueErrorType2[ValueErrorType2["BigIntExclusiveMinimum"] = 9] = "BigIntExclusiveMinimum";
  ValueErrorType2[ValueErrorType2["BigIntMaximum"] = 10] = "BigIntMaximum";
  ValueErrorType2[ValueErrorType2["BigIntMinimum"] = 11] = "BigIntMinimum";
  ValueErrorType2[ValueErrorType2["BigIntMultipleOf"] = 12] = "BigIntMultipleOf";
  ValueErrorType2[ValueErrorType2["BigInt"] = 13] = "BigInt";
  ValueErrorType2[ValueErrorType2["Boolean"] = 14] = "Boolean";
  ValueErrorType2[ValueErrorType2["DateExclusiveMaximumTimestamp"] = 15] = "DateExclusiveMaximumTimestamp";
  ValueErrorType2[ValueErrorType2["DateExclusiveMinimumTimestamp"] = 16] = "DateExclusiveMinimumTimestamp";
  ValueErrorType2[ValueErrorType2["DateMaximumTimestamp"] = 17] = "DateMaximumTimestamp";
  ValueErrorType2[ValueErrorType2["DateMinimumTimestamp"] = 18] = "DateMinimumTimestamp";
  ValueErrorType2[ValueErrorType2["DateMultipleOfTimestamp"] = 19] = "DateMultipleOfTimestamp";
  ValueErrorType2[ValueErrorType2["Date"] = 20] = "Date";
  ValueErrorType2[ValueErrorType2["Function"] = 21] = "Function";
  ValueErrorType2[ValueErrorType2["IntegerExclusiveMaximum"] = 22] = "IntegerExclusiveMaximum";
  ValueErrorType2[ValueErrorType2["IntegerExclusiveMinimum"] = 23] = "IntegerExclusiveMinimum";
  ValueErrorType2[ValueErrorType2["IntegerMaximum"] = 24] = "IntegerMaximum";
  ValueErrorType2[ValueErrorType2["IntegerMinimum"] = 25] = "IntegerMinimum";
  ValueErrorType2[ValueErrorType2["IntegerMultipleOf"] = 26] = "IntegerMultipleOf";
  ValueErrorType2[ValueErrorType2["Integer"] = 27] = "Integer";
  ValueErrorType2[ValueErrorType2["IntersectUnevaluatedProperties"] = 28] = "IntersectUnevaluatedProperties";
  ValueErrorType2[ValueErrorType2["Intersect"] = 29] = "Intersect";
  ValueErrorType2[ValueErrorType2["Iterator"] = 30] = "Iterator";
  ValueErrorType2[ValueErrorType2["Kind"] = 31] = "Kind";
  ValueErrorType2[ValueErrorType2["Literal"] = 32] = "Literal";
  ValueErrorType2[ValueErrorType2["Never"] = 33] = "Never";
  ValueErrorType2[ValueErrorType2["Not"] = 34] = "Not";
  ValueErrorType2[ValueErrorType2["Null"] = 35] = "Null";
  ValueErrorType2[ValueErrorType2["NumberExclusiveMaximum"] = 36] = "NumberExclusiveMaximum";
  ValueErrorType2[ValueErrorType2["NumberExclusiveMinimum"] = 37] = "NumberExclusiveMinimum";
  ValueErrorType2[ValueErrorType2["NumberMaximum"] = 38] = "NumberMaximum";
  ValueErrorType2[ValueErrorType2["NumberMinimum"] = 39] = "NumberMinimum";
  ValueErrorType2[ValueErrorType2["NumberMultipleOf"] = 40] = "NumberMultipleOf";
  ValueErrorType2[ValueErrorType2["Number"] = 41] = "Number";
  ValueErrorType2[ValueErrorType2["ObjectAdditionalProperties"] = 42] = "ObjectAdditionalProperties";
  ValueErrorType2[ValueErrorType2["ObjectMaxProperties"] = 43] = "ObjectMaxProperties";
  ValueErrorType2[ValueErrorType2["ObjectMinProperties"] = 44] = "ObjectMinProperties";
  ValueErrorType2[ValueErrorType2["ObjectRequiredProperty"] = 45] = "ObjectRequiredProperty";
  ValueErrorType2[ValueErrorType2["Object"] = 46] = "Object";
  ValueErrorType2[ValueErrorType2["Promise"] = 47] = "Promise";
  ValueErrorType2[ValueErrorType2["RegExp"] = 48] = "RegExp";
  ValueErrorType2[ValueErrorType2["StringFormatUnknown"] = 49] = "StringFormatUnknown";
  ValueErrorType2[ValueErrorType2["StringFormat"] = 50] = "StringFormat";
  ValueErrorType2[ValueErrorType2["StringMaxLength"] = 51] = "StringMaxLength";
  ValueErrorType2[ValueErrorType2["StringMinLength"] = 52] = "StringMinLength";
  ValueErrorType2[ValueErrorType2["StringPattern"] = 53] = "StringPattern";
  ValueErrorType2[ValueErrorType2["String"] = 54] = "String";
  ValueErrorType2[ValueErrorType2["Symbol"] = 55] = "Symbol";
  ValueErrorType2[ValueErrorType2["TupleLength"] = 56] = "TupleLength";
  ValueErrorType2[ValueErrorType2["Tuple"] = 57] = "Tuple";
  ValueErrorType2[ValueErrorType2["Uint8ArrayMaxByteLength"] = 58] = "Uint8ArrayMaxByteLength";
  ValueErrorType2[ValueErrorType2["Uint8ArrayMinByteLength"] = 59] = "Uint8ArrayMinByteLength";
  ValueErrorType2[ValueErrorType2["Uint8Array"] = 60] = "Uint8Array";
  ValueErrorType2[ValueErrorType2["Undefined"] = 61] = "Undefined";
  ValueErrorType2[ValueErrorType2["Union"] = 62] = "Union";
  ValueErrorType2[ValueErrorType2["Void"] = 63] = "Void";
})(ValueErrorType || (ValueErrorType = {}));

class ValueErrorsUnknownTypeError extends TypeBoxError {
  constructor(schema) {
    super("Unknown type");
    this.schema = schema;
  }
}
function EscapeKey(key) {
  return key.replace(/~/g, "~0").replace(/\//g, "~1");
}
function IsDefined2(value) {
  return value !== undefined;
}

class ValueErrorIterator {
  constructor(iterator) {
    this.iterator = iterator;
  }
  [Symbol.iterator]() {
    return this.iterator;
  }
  First() {
    const next = this.iterator.next();
    return next.done ? undefined : next.value;
  }
}
function Create(errorType, schema, path3, value, errors = []) {
  return {
    type: errorType,
    schema,
    path: path3,
    value,
    message: GetErrorFunction()({ errorType, path: path3, schema, value, errors }),
    errors
  };
}
function* FromAny3(schema, references, path3, value) {}
function* FromArgument3(schema, references, path3, value) {}
function* FromArray8(schema, references, path3, value) {
  if (!IsArray2(value)) {
    return yield Create(ValueErrorType.Array, schema, path3, value);
  }
  if (IsDefined2(schema.minItems) && !(value.length >= schema.minItems)) {
    yield Create(ValueErrorType.ArrayMinItems, schema, path3, value);
  }
  if (IsDefined2(schema.maxItems) && !(value.length <= schema.maxItems)) {
    yield Create(ValueErrorType.ArrayMaxItems, schema, path3, value);
  }
  for (let i = 0;i < value.length; i++) {
    yield* Visit6(schema.items, references, `${path3}/${i}`, value[i]);
  }
  if (schema.uniqueItems === true && !function() {
    const set2 = new Set;
    for (const element of value) {
      const hashed = Hash(element);
      if (set2.has(hashed)) {
        return false;
      } else {
        set2.add(hashed);
      }
    }
    return true;
  }()) {
    yield Create(ValueErrorType.ArrayUniqueItems, schema, path3, value);
  }
  if (!(IsDefined2(schema.contains) || IsDefined2(schema.minContains) || IsDefined2(schema.maxContains))) {
    return;
  }
  const containsSchema = IsDefined2(schema.contains) ? schema.contains : Never();
  const containsCount = value.reduce((acc, value2, index) => Visit6(containsSchema, references, `${path3}${index}`, value2).next().done === true ? acc + 1 : acc, 0);
  if (containsCount === 0) {
    yield Create(ValueErrorType.ArrayContains, schema, path3, value);
  }
  if (IsNumber2(schema.minContains) && containsCount < schema.minContains) {
    yield Create(ValueErrorType.ArrayMinContains, schema, path3, value);
  }
  if (IsNumber2(schema.maxContains) && containsCount > schema.maxContains) {
    yield Create(ValueErrorType.ArrayMaxContains, schema, path3, value);
  }
}
function* FromAsyncIterator5(schema, references, path3, value) {
  if (!IsAsyncIterator2(value))
    yield Create(ValueErrorType.AsyncIterator, schema, path3, value);
}
function* FromBigInt3(schema, references, path3, value) {
  if (!IsBigInt2(value))
    return yield Create(ValueErrorType.BigInt, schema, path3, value);
  if (IsDefined2(schema.exclusiveMaximum) && !(value < schema.exclusiveMaximum)) {
    yield Create(ValueErrorType.BigIntExclusiveMaximum, schema, path3, value);
  }
  if (IsDefined2(schema.exclusiveMinimum) && !(value > schema.exclusiveMinimum)) {
    yield Create(ValueErrorType.BigIntExclusiveMinimum, schema, path3, value);
  }
  if (IsDefined2(schema.maximum) && !(value <= schema.maximum)) {
    yield Create(ValueErrorType.BigIntMaximum, schema, path3, value);
  }
  if (IsDefined2(schema.minimum) && !(value >= schema.minimum)) {
    yield Create(ValueErrorType.BigIntMinimum, schema, path3, value);
  }
  if (IsDefined2(schema.multipleOf) && !(value % schema.multipleOf === BigInt(0))) {
    yield Create(ValueErrorType.BigIntMultipleOf, schema, path3, value);
  }
}
function* FromBoolean3(schema, references, path3, value) {
  if (!IsBoolean2(value))
    yield Create(ValueErrorType.Boolean, schema, path3, value);
}
function* FromConstructor5(schema, references, path3, value) {
  yield* Visit6(schema.returns, references, path3, value.prototype);
}
function* FromDate3(schema, references, path3, value) {
  if (!IsDate2(value))
    return yield Create(ValueErrorType.Date, schema, path3, value);
  if (IsDefined2(schema.exclusiveMaximumTimestamp) && !(value.getTime() < schema.exclusiveMaximumTimestamp)) {
    yield Create(ValueErrorType.DateExclusiveMaximumTimestamp, schema, path3, value);
  }
  if (IsDefined2(schema.exclusiveMinimumTimestamp) && !(value.getTime() > schema.exclusiveMinimumTimestamp)) {
    yield Create(ValueErrorType.DateExclusiveMinimumTimestamp, schema, path3, value);
  }
  if (IsDefined2(schema.maximumTimestamp) && !(value.getTime() <= schema.maximumTimestamp)) {
    yield Create(ValueErrorType.DateMaximumTimestamp, schema, path3, value);
  }
  if (IsDefined2(schema.minimumTimestamp) && !(value.getTime() >= schema.minimumTimestamp)) {
    yield Create(ValueErrorType.DateMinimumTimestamp, schema, path3, value);
  }
  if (IsDefined2(schema.multipleOfTimestamp) && !(value.getTime() % schema.multipleOfTimestamp === 0)) {
    yield Create(ValueErrorType.DateMultipleOfTimestamp, schema, path3, value);
  }
}
function* FromFunction5(schema, references, path3, value) {
  if (!IsFunction2(value))
    yield Create(ValueErrorType.Function, schema, path3, value);
}
function* FromImport2(schema, references, path3, value) {
  const definitions = globalThis.Object.values(schema.$defs);
  const target = schema.$defs[schema.$ref];
  yield* Visit6(target, [...references, ...definitions], path3, value);
}
function* FromInteger3(schema, references, path3, value) {
  if (!IsInteger(value))
    return yield Create(ValueErrorType.Integer, schema, path3, value);
  if (IsDefined2(schema.exclusiveMaximum) && !(value < schema.exclusiveMaximum)) {
    yield Create(ValueErrorType.IntegerExclusiveMaximum, schema, path3, value);
  }
  if (IsDefined2(schema.exclusiveMinimum) && !(value > schema.exclusiveMinimum)) {
    yield Create(ValueErrorType.IntegerExclusiveMinimum, schema, path3, value);
  }
  if (IsDefined2(schema.maximum) && !(value <= schema.maximum)) {
    yield Create(ValueErrorType.IntegerMaximum, schema, path3, value);
  }
  if (IsDefined2(schema.minimum) && !(value >= schema.minimum)) {
    yield Create(ValueErrorType.IntegerMinimum, schema, path3, value);
  }
  if (IsDefined2(schema.multipleOf) && !(value % schema.multipleOf === 0)) {
    yield Create(ValueErrorType.IntegerMultipleOf, schema, path3, value);
  }
}
function* FromIntersect10(schema, references, path3, value) {
  let hasError = false;
  for (const inner of schema.allOf) {
    for (const error of Visit6(inner, references, path3, value)) {
      hasError = true;
      yield error;
    }
  }
  if (hasError) {
    return yield Create(ValueErrorType.Intersect, schema, path3, value);
  }
  if (schema.unevaluatedProperties === false) {
    const keyCheck = new RegExp(KeyOfPattern(schema));
    for (const valueKey of Object.getOwnPropertyNames(value)) {
      if (!keyCheck.test(valueKey)) {
        yield Create(ValueErrorType.IntersectUnevaluatedProperties, schema, `${path3}/${valueKey}`, value);
      }
    }
  }
  if (typeof schema.unevaluatedProperties === "object") {
    const keyCheck = new RegExp(KeyOfPattern(schema));
    for (const valueKey of Object.getOwnPropertyNames(value)) {
      if (!keyCheck.test(valueKey)) {
        const next = Visit6(schema.unevaluatedProperties, references, `${path3}/${valueKey}`, value[valueKey]).next();
        if (!next.done)
          yield next.value;
      }
    }
  }
}
function* FromIterator5(schema, references, path3, value) {
  if (!IsIterator2(value))
    yield Create(ValueErrorType.Iterator, schema, path3, value);
}
function* FromLiteral4(schema, references, path3, value) {
  if (!(value === schema.const))
    yield Create(ValueErrorType.Literal, schema, path3, value);
}
function* FromNever3(schema, references, path3, value) {
  yield Create(ValueErrorType.Never, schema, path3, value);
}
function* FromNot3(schema, references, path3, value) {
  if (Visit6(schema.not, references, path3, value).next().done === true)
    yield Create(ValueErrorType.Not, schema, path3, value);
}
function* FromNull3(schema, references, path3, value) {
  if (!IsNull2(value))
    yield Create(ValueErrorType.Null, schema, path3, value);
}
function* FromNumber3(schema, references, path3, value) {
  if (!TypeSystemPolicy.IsNumberLike(value))
    return yield Create(ValueErrorType.Number, schema, path3, value);
  if (IsDefined2(schema.exclusiveMaximum) && !(value < schema.exclusiveMaximum)) {
    yield Create(ValueErrorType.NumberExclusiveMaximum, schema, path3, value);
  }
  if (IsDefined2(schema.exclusiveMinimum) && !(value > schema.exclusiveMinimum)) {
    yield Create(ValueErrorType.NumberExclusiveMinimum, schema, path3, value);
  }
  if (IsDefined2(schema.maximum) && !(value <= schema.maximum)) {
    yield Create(ValueErrorType.NumberMaximum, schema, path3, value);
  }
  if (IsDefined2(schema.minimum) && !(value >= schema.minimum)) {
    yield Create(ValueErrorType.NumberMinimum, schema, path3, value);
  }
  if (IsDefined2(schema.multipleOf) && !(value % schema.multipleOf === 0)) {
    yield Create(ValueErrorType.NumberMultipleOf, schema, path3, value);
  }
}
function* FromObject9(schema, references, path3, value) {
  if (!TypeSystemPolicy.IsObjectLike(value))
    return yield Create(ValueErrorType.Object, schema, path3, value);
  if (IsDefined2(schema.minProperties) && !(Object.getOwnPropertyNames(value).length >= schema.minProperties)) {
    yield Create(ValueErrorType.ObjectMinProperties, schema, path3, value);
  }
  if (IsDefined2(schema.maxProperties) && !(Object.getOwnPropertyNames(value).length <= schema.maxProperties)) {
    yield Create(ValueErrorType.ObjectMaxProperties, schema, path3, value);
  }
  const requiredKeys = Array.isArray(schema.required) ? schema.required : [];
  const knownKeys = Object.getOwnPropertyNames(schema.properties);
  const unknownKeys = Object.getOwnPropertyNames(value);
  for (const requiredKey of requiredKeys) {
    if (unknownKeys.includes(requiredKey))
      continue;
    yield Create(ValueErrorType.ObjectRequiredProperty, schema.properties[requiredKey], `${path3}/${EscapeKey(requiredKey)}`, undefined);
  }
  if (schema.additionalProperties === false) {
    for (const valueKey of unknownKeys) {
      if (!knownKeys.includes(valueKey)) {
        yield Create(ValueErrorType.ObjectAdditionalProperties, schema, `${path3}/${EscapeKey(valueKey)}`, value[valueKey]);
      }
    }
  }
  if (typeof schema.additionalProperties === "object") {
    for (const valueKey of unknownKeys) {
      if (knownKeys.includes(valueKey))
        continue;
      yield* Visit6(schema.additionalProperties, references, `${path3}/${EscapeKey(valueKey)}`, value[valueKey]);
    }
  }
  for (const knownKey of knownKeys) {
    const property = schema.properties[knownKey];
    if (schema.required && schema.required.includes(knownKey)) {
      yield* Visit6(property, references, `${path3}/${EscapeKey(knownKey)}`, value[knownKey]);
      if (ExtendsUndefinedCheck(schema) && !(knownKey in value)) {
        yield Create(ValueErrorType.ObjectRequiredProperty, property, `${path3}/${EscapeKey(knownKey)}`, undefined);
      }
    } else {
      if (TypeSystemPolicy.IsExactOptionalProperty(value, knownKey)) {
        yield* Visit6(property, references, `${path3}/${EscapeKey(knownKey)}`, value[knownKey]);
      }
    }
  }
}
function* FromPromise5(schema, references, path3, value) {
  if (!IsPromise(value))
    yield Create(ValueErrorType.Promise, schema, path3, value);
}
function* FromRecord5(schema, references, path3, value) {
  if (!TypeSystemPolicy.IsRecordLike(value))
    return yield Create(ValueErrorType.Object, schema, path3, value);
  if (IsDefined2(schema.minProperties) && !(Object.getOwnPropertyNames(value).length >= schema.minProperties)) {
    yield Create(ValueErrorType.ObjectMinProperties, schema, path3, value);
  }
  if (IsDefined2(schema.maxProperties) && !(Object.getOwnPropertyNames(value).length <= schema.maxProperties)) {
    yield Create(ValueErrorType.ObjectMaxProperties, schema, path3, value);
  }
  const [patternKey, patternSchema] = Object.entries(schema.patternProperties)[0];
  const regex = new RegExp(patternKey);
  for (const [propertyKey, propertyValue] of Object.entries(value)) {
    if (regex.test(propertyKey))
      yield* Visit6(patternSchema, references, `${path3}/${EscapeKey(propertyKey)}`, propertyValue);
  }
  if (typeof schema.additionalProperties === "object") {
    for (const [propertyKey, propertyValue] of Object.entries(value)) {
      if (!regex.test(propertyKey))
        yield* Visit6(schema.additionalProperties, references, `${path3}/${EscapeKey(propertyKey)}`, propertyValue);
    }
  }
  if (schema.additionalProperties === false) {
    for (const [propertyKey, propertyValue] of Object.entries(value)) {
      if (regex.test(propertyKey))
        continue;
      return yield Create(ValueErrorType.ObjectAdditionalProperties, schema, `${path3}/${EscapeKey(propertyKey)}`, propertyValue);
    }
  }
}
function* FromRef6(schema, references, path3, value) {
  yield* Visit6(Deref(schema, references), references, path3, value);
}
function* FromRegExp3(schema, references, path3, value) {
  if (!IsString2(value))
    return yield Create(ValueErrorType.String, schema, path3, value);
  if (IsDefined2(schema.minLength) && !(value.length >= schema.minLength)) {
    yield Create(ValueErrorType.StringMinLength, schema, path3, value);
  }
  if (IsDefined2(schema.maxLength) && !(value.length <= schema.maxLength)) {
    yield Create(ValueErrorType.StringMaxLength, schema, path3, value);
  }
  const regex = new RegExp(schema.source, schema.flags);
  if (!regex.test(value)) {
    return yield Create(ValueErrorType.RegExp, schema, path3, value);
  }
}
function* FromString3(schema, references, path3, value) {
  if (!IsString2(value))
    return yield Create(ValueErrorType.String, schema, path3, value);
  if (IsDefined2(schema.minLength) && !(value.length >= schema.minLength)) {
    yield Create(ValueErrorType.StringMinLength, schema, path3, value);
  }
  if (IsDefined2(schema.maxLength) && !(value.length <= schema.maxLength)) {
    yield Create(ValueErrorType.StringMaxLength, schema, path3, value);
  }
  if (IsString2(schema.pattern)) {
    const regex = new RegExp(schema.pattern);
    if (!regex.test(value)) {
      yield Create(ValueErrorType.StringPattern, schema, path3, value);
    }
  }
  if (IsString2(schema.format)) {
    if (!exports_format.Has(schema.format)) {
      yield Create(ValueErrorType.StringFormatUnknown, schema, path3, value);
    } else {
      const format = exports_format.Get(schema.format);
      if (!format(value)) {
        yield Create(ValueErrorType.StringFormat, schema, path3, value);
      }
    }
  }
}
function* FromSymbol3(schema, references, path3, value) {
  if (!IsSymbol2(value))
    yield Create(ValueErrorType.Symbol, schema, path3, value);
}
function* FromTemplateLiteral5(schema, references, path3, value) {
  if (!IsString2(value))
    return yield Create(ValueErrorType.String, schema, path3, value);
  const regex = new RegExp(schema.pattern);
  if (!regex.test(value)) {
    yield Create(ValueErrorType.StringPattern, schema, path3, value);
  }
}
function* FromThis2(schema, references, path3, value) {
  yield* Visit6(Deref(schema, references), references, path3, value);
}
function* FromTuple7(schema, references, path3, value) {
  if (!IsArray2(value))
    return yield Create(ValueErrorType.Tuple, schema, path3, value);
  if (schema.items === undefined && !(value.length === 0)) {
    return yield Create(ValueErrorType.TupleLength, schema, path3, value);
  }
  if (!(value.length === schema.maxItems)) {
    return yield Create(ValueErrorType.TupleLength, schema, path3, value);
  }
  if (!schema.items) {
    return;
  }
  for (let i = 0;i < schema.items.length; i++) {
    yield* Visit6(schema.items[i], references, `${path3}/${i}`, value[i]);
  }
}
function* FromUndefined3(schema, references, path3, value) {
  if (!IsUndefined2(value))
    yield Create(ValueErrorType.Undefined, schema, path3, value);
}
function* FromUnion12(schema, references, path3, value) {
  if (Check(schema, references, value))
    return;
  const errors = schema.anyOf.map((variant) => new ValueErrorIterator(Visit6(variant, references, path3, value)));
  yield Create(ValueErrorType.Union, schema, path3, value, errors);
}
function* FromUint8Array3(schema, references, path3, value) {
  if (!IsUint8Array2(value))
    return yield Create(ValueErrorType.Uint8Array, schema, path3, value);
  if (IsDefined2(schema.maxByteLength) && !(value.length <= schema.maxByteLength)) {
    yield Create(ValueErrorType.Uint8ArrayMaxByteLength, schema, path3, value);
  }
  if (IsDefined2(schema.minByteLength) && !(value.length >= schema.minByteLength)) {
    yield Create(ValueErrorType.Uint8ArrayMinByteLength, schema, path3, value);
  }
}
function* FromUnknown3(schema, references, path3, value) {}
function* FromVoid3(schema, references, path3, value) {
  if (!TypeSystemPolicy.IsVoidLike(value))
    yield Create(ValueErrorType.Void, schema, path3, value);
}
function* FromKind2(schema, references, path3, value) {
  const check = exports_type2.Get(schema[Kind]);
  if (!check(schema, value))
    yield Create(ValueErrorType.Kind, schema, path3, value);
}
function* Visit6(schema, references, path3, value) {
  const references_ = IsDefined2(schema.$id) ? [...references, schema] : references;
  const schema_ = schema;
  switch (schema_[Kind]) {
    case "Any":
      return yield* FromAny3(schema_, references_, path3, value);
    case "Argument":
      return yield* FromArgument3(schema_, references_, path3, value);
    case "Array":
      return yield* FromArray8(schema_, references_, path3, value);
    case "AsyncIterator":
      return yield* FromAsyncIterator5(schema_, references_, path3, value);
    case "BigInt":
      return yield* FromBigInt3(schema_, references_, path3, value);
    case "Boolean":
      return yield* FromBoolean3(schema_, references_, path3, value);
    case "Constructor":
      return yield* FromConstructor5(schema_, references_, path3, value);
    case "Date":
      return yield* FromDate3(schema_, references_, path3, value);
    case "Function":
      return yield* FromFunction5(schema_, references_, path3, value);
    case "Import":
      return yield* FromImport2(schema_, references_, path3, value);
    case "Integer":
      return yield* FromInteger3(schema_, references_, path3, value);
    case "Intersect":
      return yield* FromIntersect10(schema_, references_, path3, value);
    case "Iterator":
      return yield* FromIterator5(schema_, references_, path3, value);
    case "Literal":
      return yield* FromLiteral4(schema_, references_, path3, value);
    case "Never":
      return yield* FromNever3(schema_, references_, path3, value);
    case "Not":
      return yield* FromNot3(schema_, references_, path3, value);
    case "Null":
      return yield* FromNull3(schema_, references_, path3, value);
    case "Number":
      return yield* FromNumber3(schema_, references_, path3, value);
    case "Object":
      return yield* FromObject9(schema_, references_, path3, value);
    case "Promise":
      return yield* FromPromise5(schema_, references_, path3, value);
    case "Record":
      return yield* FromRecord5(schema_, references_, path3, value);
    case "Ref":
      return yield* FromRef6(schema_, references_, path3, value);
    case "RegExp":
      return yield* FromRegExp3(schema_, references_, path3, value);
    case "String":
      return yield* FromString3(schema_, references_, path3, value);
    case "Symbol":
      return yield* FromSymbol3(schema_, references_, path3, value);
    case "TemplateLiteral":
      return yield* FromTemplateLiteral5(schema_, references_, path3, value);
    case "This":
      return yield* FromThis2(schema_, references_, path3, value);
    case "Tuple":
      return yield* FromTuple7(schema_, references_, path3, value);
    case "Undefined":
      return yield* FromUndefined3(schema_, references_, path3, value);
    case "Union":
      return yield* FromUnion12(schema_, references_, path3, value);
    case "Uint8Array":
      return yield* FromUint8Array3(schema_, references_, path3, value);
    case "Unknown":
      return yield* FromUnknown3(schema_, references_, path3, value);
    case "Void":
      return yield* FromVoid3(schema_, references_, path3, value);
    default:
      if (!exports_type2.Has(schema_[Kind]))
        throw new ValueErrorsUnknownTypeError(schema);
      return yield* FromKind2(schema_, references_, path3, value);
  }
}
function Errors(...args) {
  const iterator = args.length === 3 ? Visit6(args[0], args[1], "", args[2]) : Visit6(args[0], [], "", args[1]);
  return new ValueErrorIterator(iterator);
}
// node_modules/@sinclair/typebox/build/esm/value/assert/assert.mjs
var __classPrivateFieldSet = function(receiver, state, value, kind, f) {
  if (kind === "m")
    throw new TypeError("Private method is not writable");
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var __classPrivateFieldGet = function(receiver, state, kind, f) {
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _AssertError_instances;
var _AssertError_iterator;
var _AssertError_Iterator;

class AssertError extends TypeBoxError {
  constructor(iterator) {
    const error = iterator.First();
    super(error === undefined ? "Invalid Value" : error.message);
    _AssertError_instances.add(this);
    _AssertError_iterator.set(this, undefined);
    __classPrivateFieldSet(this, _AssertError_iterator, iterator, "f");
    this.error = error;
  }
  Errors() {
    return new ValueErrorIterator(__classPrivateFieldGet(this, _AssertError_instances, "m", _AssertError_Iterator).call(this));
  }
}
_AssertError_iterator = new WeakMap, _AssertError_instances = new WeakSet, _AssertError_Iterator = function* _AssertError_Iterator2() {
  if (this.error)
    yield this.error;
  yield* __classPrivateFieldGet(this, _AssertError_iterator, "f");
};
function AssertValue(schema, references, value) {
  if (Check(schema, references, value))
    return;
  throw new AssertError(Errors(schema, references, value));
}
function Assert(...args) {
  return args.length === 3 ? AssertValue(args[0], args[1], args[2]) : AssertValue(args[0], [], args[1]);
}
// node_modules/@sinclair/typebox/build/esm/value/clone/clone.mjs
function FromObject10(value) {
  const Acc = {};
  for (const key of Object.getOwnPropertyNames(value)) {
    Acc[key] = Clone2(value[key]);
  }
  for (const key of Object.getOwnPropertySymbols(value)) {
    Acc[key] = Clone2(value[key]);
  }
  return Acc;
}
function FromArray9(value) {
  return value.map((element) => Clone2(element));
}
function FromTypedArray(value) {
  return value.slice();
}
function FromMap(value) {
  return new Map(Clone2([...value.entries()]));
}
function FromSet(value) {
  return new Set(Clone2([...value.entries()]));
}
function FromDate4(value) {
  return new Date(value.toISOString());
}
function FromValue2(value) {
  return value;
}
function Clone2(value) {
  if (IsArray2(value))
    return FromArray9(value);
  if (IsDate2(value))
    return FromDate4(value);
  if (IsTypedArray(value))
    return FromTypedArray(value);
  if (IsMap(value))
    return FromMap(value);
  if (IsSet(value))
    return FromSet(value);
  if (IsObject2(value))
    return FromObject10(value);
  if (IsValueType(value))
    return FromValue2(value);
  throw new Error("ValueClone: Unable to clone value");
}

// node_modules/@sinclair/typebox/build/esm/value/create/create.mjs
class ValueCreateError extends TypeBoxError {
  constructor(schema, message) {
    super(message);
    this.schema = schema;
  }
}
function FromDefault(value) {
  return IsFunction2(value) ? value() : Clone2(value);
}
function FromAny4(schema, references) {
  if (HasPropertyKey2(schema, "default")) {
    return FromDefault(schema.default);
  } else {
    return {};
  }
}
function FromArgument4(schema, references) {
  return {};
}
function FromArray10(schema, references) {
  if (schema.uniqueItems === true && !HasPropertyKey2(schema, "default")) {
    throw new ValueCreateError(schema, "Array with the uniqueItems constraint requires a default value");
  } else if ("contains" in schema && !HasPropertyKey2(schema, "default")) {
    throw new ValueCreateError(schema, "Array with the contains constraint requires a default value");
  } else if ("default" in schema) {
    return FromDefault(schema.default);
  } else if (schema.minItems !== undefined) {
    return Array.from({ length: schema.minItems }).map((item) => {
      return Visit7(schema.items, references);
    });
  } else {
    return [];
  }
}
function FromAsyncIterator6(schema, references) {
  if (HasPropertyKey2(schema, "default")) {
    return FromDefault(schema.default);
  } else {
    return async function* () {}();
  }
}
function FromBigInt4(schema, references) {
  if (HasPropertyKey2(schema, "default")) {
    return FromDefault(schema.default);
  } else {
    return BigInt(0);
  }
}
function FromBoolean4(schema, references) {
  if (HasPropertyKey2(schema, "default")) {
    return FromDefault(schema.default);
  } else {
    return false;
  }
}
function FromConstructor6(schema, references) {
  if (HasPropertyKey2(schema, "default")) {
    return FromDefault(schema.default);
  } else {
    const value = Visit7(schema.returns, references);
    if (typeof value === "object" && !Array.isArray(value)) {
      return class {
        constructor() {
          for (const [key, val] of Object.entries(value)) {
            const self = this;
            self[key] = val;
          }
        }
      };
    } else {
      return class {
      };
    }
  }
}
function FromDate5(schema, references) {
  if (HasPropertyKey2(schema, "default")) {
    return FromDefault(schema.default);
  } else if (schema.minimumTimestamp !== undefined) {
    return new Date(schema.minimumTimestamp);
  } else {
    return new Date;
  }
}
function FromFunction6(schema, references) {
  if (HasPropertyKey2(schema, "default")) {
    return FromDefault(schema.default);
  } else {
    return () => Visit7(schema.returns, references);
  }
}
function FromImport3(schema, references) {
  const definitions = globalThis.Object.values(schema.$defs);
  const target = schema.$defs[schema.$ref];
  return Visit7(target, [...references, ...definitions]);
}
function FromInteger4(schema, references) {
  if (HasPropertyKey2(schema, "default")) {
    return FromDefault(schema.default);
  } else if (schema.minimum !== undefined) {
    return schema.minimum;
  } else {
    return 0;
  }
}
function FromIntersect11(schema, references) {
  if (HasPropertyKey2(schema, "default")) {
    return FromDefault(schema.default);
  } else {
    const value = schema.allOf.reduce((acc, schema2) => {
      const next = Visit7(schema2, references);
      return typeof next === "object" ? { ...acc, ...next } : next;
    }, {});
    if (!Check(schema, references, value))
      throw new ValueCreateError(schema, "Intersect produced invalid value. Consider using a default value.");
    return value;
  }
}
function FromIterator6(schema, references) {
  if (HasPropertyKey2(schema, "default")) {
    return FromDefault(schema.default);
  } else {
    return function* () {}();
  }
}
function FromLiteral5(schema, references) {
  if (HasPropertyKey2(schema, "default")) {
    return FromDefault(schema.default);
  } else {
    return schema.const;
  }
}
function FromNever4(schema, references) {
  if (HasPropertyKey2(schema, "default")) {
    return FromDefault(schema.default);
  } else {
    throw new ValueCreateError(schema, "Never types cannot be created. Consider using a default value.");
  }
}
function FromNot4(schema, references) {
  if (HasPropertyKey2(schema, "default")) {
    return FromDefault(schema.default);
  } else {
    throw new ValueCreateError(schema, "Not types must have a default value");
  }
}
function FromNull4(schema, references) {
  if (HasPropertyKey2(schema, "default")) {
    return FromDefault(schema.default);
  } else {
    return null;
  }
}
function FromNumber4(schema, references) {
  if (HasPropertyKey2(schema, "default")) {
    return FromDefault(schema.default);
  } else if (schema.minimum !== undefined) {
    return schema.minimum;
  } else {
    return 0;
  }
}
function FromObject11(schema, references) {
  if (HasPropertyKey2(schema, "default")) {
    return FromDefault(schema.default);
  } else {
    const required = new Set(schema.required);
    const Acc = {};
    for (const [key, subschema] of Object.entries(schema.properties)) {
      if (!required.has(key))
        continue;
      Acc[key] = Visit7(subschema, references);
    }
    return Acc;
  }
}
function FromPromise6(schema, references) {
  if (HasPropertyKey2(schema, "default")) {
    return FromDefault(schema.default);
  } else {
    return Promise.resolve(Visit7(schema.item, references));
  }
}
function FromRecord6(schema, references) {
  if (HasPropertyKey2(schema, "default")) {
    return FromDefault(schema.default);
  } else {
    return {};
  }
}
function FromRef7(schema, references) {
  if (HasPropertyKey2(schema, "default")) {
    return FromDefault(schema.default);
  } else {
    return Visit7(Deref(schema, references), references);
  }
}
function FromRegExp4(schema, references) {
  if (HasPropertyKey2(schema, "default")) {
    return FromDefault(schema.default);
  } else {
    throw new ValueCreateError(schema, "RegExp types cannot be created. Consider using a default value.");
  }
}
function FromString4(schema, references) {
  if (schema.pattern !== undefined) {
    if (!HasPropertyKey2(schema, "default")) {
      throw new ValueCreateError(schema, "String types with patterns must specify a default value");
    } else {
      return FromDefault(schema.default);
    }
  } else if (schema.format !== undefined) {
    if (!HasPropertyKey2(schema, "default")) {
      throw new ValueCreateError(schema, "String types with formats must specify a default value");
    } else {
      return FromDefault(schema.default);
    }
  } else {
    if (HasPropertyKey2(schema, "default")) {
      return FromDefault(schema.default);
    } else if (schema.minLength !== undefined) {
      return Array.from({ length: schema.minLength }).map(() => " ").join("");
    } else {
      return "";
    }
  }
}
function FromSymbol4(schema, references) {
  if (HasPropertyKey2(schema, "default")) {
    return FromDefault(schema.default);
  } else if ("value" in schema) {
    return Symbol.for(schema.value);
  } else {
    return Symbol();
  }
}
function FromTemplateLiteral6(schema, references) {
  if (HasPropertyKey2(schema, "default")) {
    return FromDefault(schema.default);
  }
  if (!IsTemplateLiteralFinite(schema))
    throw new ValueCreateError(schema, "Can only create template literals that produce a finite variants. Consider using a default value.");
  const generated = TemplateLiteralGenerate(schema);
  return generated[0];
}
function FromThis3(schema, references) {
  if (recursiveDepth++ > recursiveMaxDepth)
    throw new ValueCreateError(schema, "Cannot create recursive type as it appears possibly infinite. Consider using a default.");
  if (HasPropertyKey2(schema, "default")) {
    return FromDefault(schema.default);
  } else {
    return Visit7(Deref(schema, references), references);
  }
}
function FromTuple8(schema, references) {
  if (HasPropertyKey2(schema, "default")) {
    return FromDefault(schema.default);
  }
  if (schema.items === undefined) {
    return [];
  } else {
    return Array.from({ length: schema.minItems }).map((_, index) => Visit7(schema.items[index], references));
  }
}
function FromUndefined4(schema, references) {
  if (HasPropertyKey2(schema, "default")) {
    return FromDefault(schema.default);
  } else {
    return;
  }
}
function FromUnion13(schema, references) {
  if (HasPropertyKey2(schema, "default")) {
    return FromDefault(schema.default);
  } else if (schema.anyOf.length === 0) {
    throw new Error("ValueCreate.Union: Cannot create Union with zero variants");
  } else {
    return Visit7(schema.anyOf[0], references);
  }
}
function FromUint8Array4(schema, references) {
  if (HasPropertyKey2(schema, "default")) {
    return FromDefault(schema.default);
  } else if (schema.minByteLength !== undefined) {
    return new Uint8Array(schema.minByteLength);
  } else {
    return new Uint8Array(0);
  }
}
function FromUnknown4(schema, references) {
  if (HasPropertyKey2(schema, "default")) {
    return FromDefault(schema.default);
  } else {
    return {};
  }
}
function FromVoid4(schema, references) {
  if (HasPropertyKey2(schema, "default")) {
    return FromDefault(schema.default);
  } else {
    return;
  }
}
function FromKind3(schema, references) {
  if (HasPropertyKey2(schema, "default")) {
    return FromDefault(schema.default);
  } else {
    throw new Error("User defined types must specify a default value");
  }
}
function Visit7(schema, references) {
  const references_ = Pushref(schema, references);
  const schema_ = schema;
  switch (schema_[Kind]) {
    case "Any":
      return FromAny4(schema_, references_);
    case "Argument":
      return FromArgument4(schema_, references_);
    case "Array":
      return FromArray10(schema_, references_);
    case "AsyncIterator":
      return FromAsyncIterator6(schema_, references_);
    case "BigInt":
      return FromBigInt4(schema_, references_);
    case "Boolean":
      return FromBoolean4(schema_, references_);
    case "Constructor":
      return FromConstructor6(schema_, references_);
    case "Date":
      return FromDate5(schema_, references_);
    case "Function":
      return FromFunction6(schema_, references_);
    case "Import":
      return FromImport3(schema_, references_);
    case "Integer":
      return FromInteger4(schema_, references_);
    case "Intersect":
      return FromIntersect11(schema_, references_);
    case "Iterator":
      return FromIterator6(schema_, references_);
    case "Literal":
      return FromLiteral5(schema_, references_);
    case "Never":
      return FromNever4(schema_, references_);
    case "Not":
      return FromNot4(schema_, references_);
    case "Null":
      return FromNull4(schema_, references_);
    case "Number":
      return FromNumber4(schema_, references_);
    case "Object":
      return FromObject11(schema_, references_);
    case "Promise":
      return FromPromise6(schema_, references_);
    case "Record":
      return FromRecord6(schema_, references_);
    case "Ref":
      return FromRef7(schema_, references_);
    case "RegExp":
      return FromRegExp4(schema_, references_);
    case "String":
      return FromString4(schema_, references_);
    case "Symbol":
      return FromSymbol4(schema_, references_);
    case "TemplateLiteral":
      return FromTemplateLiteral6(schema_, references_);
    case "This":
      return FromThis3(schema_, references_);
    case "Tuple":
      return FromTuple8(schema_, references_);
    case "Undefined":
      return FromUndefined4(schema_, references_);
    case "Union":
      return FromUnion13(schema_, references_);
    case "Uint8Array":
      return FromUint8Array4(schema_, references_);
    case "Unknown":
      return FromUnknown4(schema_, references_);
    case "Void":
      return FromVoid4(schema_, references_);
    default:
      if (!exports_type2.Has(schema_[Kind]))
        throw new ValueCreateError(schema_, "Unknown type");
      return FromKind3(schema_, references_);
  }
}
var recursiveMaxDepth = 512;
var recursiveDepth = 0;
function Create2(...args) {
  recursiveDepth = 0;
  return args.length === 2 ? Visit7(args[0], args[1]) : Visit7(args[0], []);
}

// node_modules/@sinclair/typebox/build/esm/value/cast/cast.mjs
class ValueCastError extends TypeBoxError {
  constructor(schema, message) {
    super(message);
    this.schema = schema;
  }
}
function ScoreUnion(schema, references, value) {
  if (schema[Kind] === "Object" && typeof value === "object" && !IsNull2(value)) {
    const object = schema;
    const keys = Object.getOwnPropertyNames(value);
    const entries = Object.entries(object.properties);
    return entries.reduce((acc, [key, schema2]) => {
      const literal = schema2[Kind] === "Literal" && schema2.const === value[key] ? 100 : 0;
      const checks = Check(schema2, references, value[key]) ? 10 : 0;
      const exists = keys.includes(key) ? 1 : 0;
      return acc + (literal + checks + exists);
    }, 0);
  } else if (schema[Kind] === "Union") {
    const schemas = schema.anyOf.map((schema2) => Deref(schema2, references));
    const scores = schemas.map((schema2) => ScoreUnion(schema2, references, value));
    return Math.max(...scores);
  } else {
    return Check(schema, references, value) ? 1 : 0;
  }
}
function SelectUnion(union, references, value) {
  const schemas = union.anyOf.map((schema) => Deref(schema, references));
  let [select, best] = [schemas[0], 0];
  for (const schema of schemas) {
    const score = ScoreUnion(schema, references, value);
    if (score > best) {
      select = schema;
      best = score;
    }
  }
  return select;
}
function CastUnion(union, references, value) {
  if ("default" in union) {
    return typeof value === "function" ? union.default : Clone2(union.default);
  } else {
    const schema = SelectUnion(union, references, value);
    return Cast(schema, references, value);
  }
}
function DefaultClone(schema, references, value) {
  return Check(schema, references, value) ? Clone2(value) : Create2(schema, references);
}
function Default(schema, references, value) {
  return Check(schema, references, value) ? value : Create2(schema, references);
}
function FromArray11(schema, references, value) {
  if (Check(schema, references, value))
    return Clone2(value);
  const created = IsArray2(value) ? Clone2(value) : Create2(schema, references);
  const minimum = IsNumber2(schema.minItems) && created.length < schema.minItems ? [...created, ...Array.from({ length: schema.minItems - created.length }, () => null)] : created;
  const maximum = IsNumber2(schema.maxItems) && minimum.length > schema.maxItems ? minimum.slice(0, schema.maxItems) : minimum;
  const casted = maximum.map((value2) => Visit8(schema.items, references, value2));
  if (schema.uniqueItems !== true)
    return casted;
  const unique = [...new Set(casted)];
  if (!Check(schema, references, unique))
    throw new ValueCastError(schema, "Array cast produced invalid data due to uniqueItems constraint");
  return unique;
}
function FromConstructor7(schema, references, value) {
  if (Check(schema, references, value))
    return Create2(schema, references);
  const required = new Set(schema.returns.required || []);
  const result = function() {};
  for (const [key, property] of Object.entries(schema.returns.properties)) {
    if (!required.has(key) && value.prototype[key] === undefined)
      continue;
    result.prototype[key] = Visit8(property, references, value.prototype[key]);
  }
  return result;
}
function FromImport4(schema, references, value) {
  const definitions = globalThis.Object.values(schema.$defs);
  const target = schema.$defs[schema.$ref];
  return Visit8(target, [...references, ...definitions], value);
}
function IntersectAssign(correct, value) {
  if (IsObject2(correct) && !IsObject2(value) || !IsObject2(correct) && IsObject2(value))
    return correct;
  if (!IsObject2(correct) || !IsObject2(value))
    return value;
  return globalThis.Object.getOwnPropertyNames(correct).reduce((result, key) => {
    const property = key in value ? IntersectAssign(correct[key], value[key]) : correct[key];
    return { ...result, [key]: property };
  }, {});
}
function FromIntersect12(schema, references, value) {
  if (Check(schema, references, value))
    return value;
  const correct = Create2(schema, references);
  const assigned = IntersectAssign(correct, value);
  return Check(schema, references, assigned) ? assigned : correct;
}
function FromNever5(schema, references, value) {
  throw new ValueCastError(schema, "Never types cannot be cast");
}
function FromObject12(schema, references, value) {
  if (Check(schema, references, value))
    return value;
  if (value === null || typeof value !== "object")
    return Create2(schema, references);
  const required = new Set(schema.required || []);
  const result = {};
  for (const [key, property] of Object.entries(schema.properties)) {
    if (!required.has(key) && value[key] === undefined)
      continue;
    result[key] = Visit8(property, references, value[key]);
  }
  if (typeof schema.additionalProperties === "object") {
    const propertyNames = Object.getOwnPropertyNames(schema.properties);
    for (const propertyName of Object.getOwnPropertyNames(value)) {
      if (propertyNames.includes(propertyName))
        continue;
      result[propertyName] = Visit8(schema.additionalProperties, references, value[propertyName]);
    }
  }
  return result;
}
function FromRecord7(schema, references, value) {
  if (Check(schema, references, value))
    return Clone2(value);
  if (value === null || typeof value !== "object" || Array.isArray(value) || value instanceof Date)
    return Create2(schema, references);
  const subschemaPropertyName = Object.getOwnPropertyNames(schema.patternProperties)[0];
  const subschema = schema.patternProperties[subschemaPropertyName];
  const result = {};
  for (const [propKey, propValue] of Object.entries(value)) {
    result[propKey] = Visit8(subschema, references, propValue);
  }
  return result;
}
function FromRef8(schema, references, value) {
  return Visit8(Deref(schema, references), references, value);
}
function FromThis4(schema, references, value) {
  return Visit8(Deref(schema, references), references, value);
}
function FromTuple9(schema, references, value) {
  if (Check(schema, references, value))
    return Clone2(value);
  if (!IsArray2(value))
    return Create2(schema, references);
  if (schema.items === undefined)
    return [];
  return schema.items.map((schema2, index) => Visit8(schema2, references, value[index]));
}
function FromUnion14(schema, references, value) {
  return Check(schema, references, value) ? Clone2(value) : CastUnion(schema, references, value);
}
function Visit8(schema, references, value) {
  const references_ = IsString2(schema.$id) ? Pushref(schema, references) : references;
  const schema_ = schema;
  switch (schema[Kind]) {
    case "Array":
      return FromArray11(schema_, references_, value);
    case "Constructor":
      return FromConstructor7(schema_, references_, value);
    case "Import":
      return FromImport4(schema_, references_, value);
    case "Intersect":
      return FromIntersect12(schema_, references_, value);
    case "Never":
      return FromNever5(schema_, references_, value);
    case "Object":
      return FromObject12(schema_, references_, value);
    case "Record":
      return FromRecord7(schema_, references_, value);
    case "Ref":
      return FromRef8(schema_, references_, value);
    case "This":
      return FromThis4(schema_, references_, value);
    case "Tuple":
      return FromTuple9(schema_, references_, value);
    case "Union":
      return FromUnion14(schema_, references_, value);
    case "Date":
    case "Symbol":
    case "Uint8Array":
      return DefaultClone(schema, references, value);
    default:
      return Default(schema_, references_, value);
  }
}
function Cast(...args) {
  return args.length === 3 ? Visit8(args[0], args[1], args[2]) : Visit8(args[0], [], args[1]);
}
// node_modules/@sinclair/typebox/build/esm/value/clean/clean.mjs
function IsCheckable(schema) {
  return IsKind(schema) && schema[Kind] !== "Unsafe";
}
function FromArray12(schema, references, value) {
  if (!IsArray2(value))
    return value;
  return value.map((value2) => Visit9(schema.items, references, value2));
}
function FromImport5(schema, references, value) {
  const definitions = globalThis.Object.values(schema.$defs);
  const target = schema.$defs[schema.$ref];
  return Visit9(target, [...references, ...definitions], value);
}
function FromIntersect13(schema, references, value) {
  const unevaluatedProperties = schema.unevaluatedProperties;
  const intersections = schema.allOf.map((schema2) => Visit9(schema2, references, Clone2(value)));
  const composite = intersections.reduce((acc, value2) => IsObject2(value2) ? { ...acc, ...value2 } : value2, {});
  if (!IsObject2(value) || !IsObject2(composite) || !IsKind(unevaluatedProperties))
    return composite;
  const knownkeys = KeyOfPropertyKeys(schema);
  for (const key of Object.getOwnPropertyNames(value)) {
    if (knownkeys.includes(key))
      continue;
    if (Check(unevaluatedProperties, references, value[key])) {
      composite[key] = Visit9(unevaluatedProperties, references, value[key]);
    }
  }
  return composite;
}
function FromObject13(schema, references, value) {
  if (!IsObject2(value) || IsArray2(value))
    return value;
  const additionalProperties = schema.additionalProperties;
  for (const key of Object.getOwnPropertyNames(value)) {
    if (HasPropertyKey2(schema.properties, key)) {
      value[key] = Visit9(schema.properties[key], references, value[key]);
      continue;
    }
    if (IsKind(additionalProperties) && Check(additionalProperties, references, value[key])) {
      value[key] = Visit9(additionalProperties, references, value[key]);
      continue;
    }
    delete value[key];
  }
  return value;
}
function FromRecord8(schema, references, value) {
  if (!IsObject2(value))
    return value;
  const additionalProperties = schema.additionalProperties;
  const propertyKeys = Object.getOwnPropertyNames(value);
  const [propertyKey, propertySchema] = Object.entries(schema.patternProperties)[0];
  const propertyKeyTest = new RegExp(propertyKey);
  for (const key of propertyKeys) {
    if (propertyKeyTest.test(key)) {
      value[key] = Visit9(propertySchema, references, value[key]);
      continue;
    }
    if (IsKind(additionalProperties) && Check(additionalProperties, references, value[key])) {
      value[key] = Visit9(additionalProperties, references, value[key]);
      continue;
    }
    delete value[key];
  }
  return value;
}
function FromRef9(schema, references, value) {
  return Visit9(Deref(schema, references), references, value);
}
function FromThis5(schema, references, value) {
  return Visit9(Deref(schema, references), references, value);
}
function FromTuple10(schema, references, value) {
  if (!IsArray2(value))
    return value;
  if (IsUndefined2(schema.items))
    return [];
  const length = Math.min(value.length, schema.items.length);
  for (let i = 0;i < length; i++) {
    value[i] = Visit9(schema.items[i], references, value[i]);
  }
  return value.length > length ? value.slice(0, length) : value;
}
function FromUnion15(schema, references, value) {
  for (const inner of schema.anyOf) {
    if (IsCheckable(inner) && Check(inner, references, value)) {
      return Visit9(inner, references, value);
    }
  }
  return value;
}
function Visit9(schema, references, value) {
  const references_ = IsString2(schema.$id) ? Pushref(schema, references) : references;
  const schema_ = schema;
  switch (schema_[Kind]) {
    case "Array":
      return FromArray12(schema_, references_, value);
    case "Import":
      return FromImport5(schema_, references_, value);
    case "Intersect":
      return FromIntersect13(schema_, references_, value);
    case "Object":
      return FromObject13(schema_, references_, value);
    case "Record":
      return FromRecord8(schema_, references_, value);
    case "Ref":
      return FromRef9(schema_, references_, value);
    case "This":
      return FromThis5(schema_, references_, value);
    case "Tuple":
      return FromTuple10(schema_, references_, value);
    case "Union":
      return FromUnion15(schema_, references_, value);
    default:
      return value;
  }
}
function Clean(...args) {
  return args.length === 3 ? Visit9(args[0], args[1], args[2]) : Visit9(args[0], [], args[1]);
}
// node_modules/@sinclair/typebox/build/esm/value/convert/convert.mjs
function IsStringNumeric(value) {
  return IsString2(value) && !isNaN(value) && !isNaN(parseFloat(value));
}
function IsValueToString(value) {
  return IsBigInt2(value) || IsBoolean2(value) || IsNumber2(value);
}
function IsValueTrue(value) {
  return value === true || IsNumber2(value) && value === 1 || IsBigInt2(value) && value === BigInt("1") || IsString2(value) && (value.toLowerCase() === "true" || value === "1");
}
function IsValueFalse(value) {
  return value === false || IsNumber2(value) && (value === 0 || Object.is(value, -0)) || IsBigInt2(value) && value === BigInt("0") || IsString2(value) && (value.toLowerCase() === "false" || value === "0" || value === "-0");
}
function IsTimeStringWithTimeZone(value) {
  return IsString2(value) && /^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)$/i.test(value);
}
function IsTimeStringWithoutTimeZone(value) {
  return IsString2(value) && /^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)?$/i.test(value);
}
function IsDateTimeStringWithTimeZone(value) {
  return IsString2(value) && /^\d\d\d\d-[0-1]\d-[0-3]\dt(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)$/i.test(value);
}
function IsDateTimeStringWithoutTimeZone(value) {
  return IsString2(value) && /^\d\d\d\d-[0-1]\d-[0-3]\dt(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)?$/i.test(value);
}
function IsDateString(value) {
  return IsString2(value) && /^\d\d\d\d-[0-1]\d-[0-3]\d$/i.test(value);
}
function TryConvertLiteralString(value, target) {
  const conversion = TryConvertString(value);
  return conversion === target ? conversion : value;
}
function TryConvertLiteralNumber(value, target) {
  const conversion = TryConvertNumber(value);
  return conversion === target ? conversion : value;
}
function TryConvertLiteralBoolean(value, target) {
  const conversion = TryConvertBoolean(value);
  return conversion === target ? conversion : value;
}
function TryConvertLiteral(schema, value) {
  return IsString2(schema.const) ? TryConvertLiteralString(value, schema.const) : IsNumber2(schema.const) ? TryConvertLiteralNumber(value, schema.const) : IsBoolean2(schema.const) ? TryConvertLiteralBoolean(value, schema.const) : value;
}
function TryConvertBoolean(value) {
  return IsValueTrue(value) ? true : IsValueFalse(value) ? false : value;
}
function TryConvertBigInt(value) {
  const truncateInteger = (value2) => value2.split(".")[0];
  return IsStringNumeric(value) ? BigInt(truncateInteger(value)) : IsNumber2(value) ? BigInt(Math.trunc(value)) : IsValueFalse(value) ? BigInt(0) : IsValueTrue(value) ? BigInt(1) : value;
}
function TryConvertString(value) {
  return IsSymbol2(value) && value.description !== undefined ? value.description.toString() : IsValueToString(value) ? value.toString() : value;
}
function TryConvertNumber(value) {
  return IsStringNumeric(value) ? parseFloat(value) : IsValueTrue(value) ? 1 : IsValueFalse(value) ? 0 : value;
}
function TryConvertInteger(value) {
  return IsStringNumeric(value) ? parseInt(value) : IsNumber2(value) ? Math.trunc(value) : IsValueTrue(value) ? 1 : IsValueFalse(value) ? 0 : value;
}
function TryConvertNull(value) {
  return IsString2(value) && value.toLowerCase() === "null" ? null : value;
}
function TryConvertUndefined(value) {
  return IsString2(value) && value === "undefined" ? undefined : value;
}
function TryConvertDate(value) {
  return IsDate2(value) ? value : IsNumber2(value) ? new Date(value) : IsValueTrue(value) ? new Date(1) : IsValueFalse(value) ? new Date(0) : IsStringNumeric(value) ? new Date(parseInt(value)) : IsTimeStringWithoutTimeZone(value) ? new Date(`1970-01-01T${value}.000Z`) : IsTimeStringWithTimeZone(value) ? new Date(`1970-01-01T${value}`) : IsDateTimeStringWithoutTimeZone(value) ? new Date(`${value}.000Z`) : IsDateTimeStringWithTimeZone(value) ? new Date(value) : IsDateString(value) ? new Date(`${value}T00:00:00.000Z`) : value;
}
function Default2(value) {
  return value;
}
function FromArray13(schema, references, value) {
  const elements = IsArray2(value) ? value : [value];
  return elements.map((element) => Visit10(schema.items, references, element));
}
function FromBigInt5(schema, references, value) {
  return TryConvertBigInt(value);
}
function FromBoolean5(schema, references, value) {
  return TryConvertBoolean(value);
}
function FromDate6(schema, references, value) {
  return TryConvertDate(value);
}
function FromImport6(schema, references, value) {
  const definitions = globalThis.Object.values(schema.$defs);
  const target = schema.$defs[schema.$ref];
  return Visit10(target, [...references, ...definitions], value);
}
function FromInteger5(schema, references, value) {
  return TryConvertInteger(value);
}
function FromIntersect14(schema, references, value) {
  return schema.allOf.reduce((value2, schema2) => Visit10(schema2, references, value2), value);
}
function FromLiteral6(schema, references, value) {
  return TryConvertLiteral(schema, value);
}
function FromNull5(schema, references, value) {
  return TryConvertNull(value);
}
function FromNumber5(schema, references, value) {
  return TryConvertNumber(value);
}
function FromObject14(schema, references, value) {
  if (!IsObject2(value) || IsArray2(value))
    return value;
  for (const propertyKey of Object.getOwnPropertyNames(schema.properties)) {
    if (!HasPropertyKey2(value, propertyKey))
      continue;
    value[propertyKey] = Visit10(schema.properties[propertyKey], references, value[propertyKey]);
  }
  return value;
}
function FromRecord9(schema, references, value) {
  const isConvertable = IsObject2(value) && !IsArray2(value);
  if (!isConvertable)
    return value;
  const propertyKey = Object.getOwnPropertyNames(schema.patternProperties)[0];
  const property = schema.patternProperties[propertyKey];
  for (const [propKey, propValue] of Object.entries(value)) {
    value[propKey] = Visit10(property, references, propValue);
  }
  return value;
}
function FromRef10(schema, references, value) {
  return Visit10(Deref(schema, references), references, value);
}
function FromString5(schema, references, value) {
  return TryConvertString(value);
}
function FromSymbol5(schema, references, value) {
  return IsString2(value) || IsNumber2(value) ? Symbol(value) : value;
}
function FromThis6(schema, references, value) {
  return Visit10(Deref(schema, references), references, value);
}
function FromTuple11(schema, references, value) {
  const isConvertable = IsArray2(value) && !IsUndefined2(schema.items);
  if (!isConvertable)
    return value;
  return value.map((value2, index) => {
    return index < schema.items.length ? Visit10(schema.items[index], references, value2) : value2;
  });
}
function FromUndefined5(schema, references, value) {
  return TryConvertUndefined(value);
}
function FromUnion16(schema, references, value) {
  for (const subschema of schema.anyOf) {
    if (Check(subschema, references, value)) {
      return value;
    }
  }
  for (const subschema of schema.anyOf) {
    const converted = Visit10(subschema, references, Clone2(value));
    if (!Check(subschema, references, converted))
      continue;
    return converted;
  }
  return value;
}
function Visit10(schema, references, value) {
  const references_ = Pushref(schema, references);
  const schema_ = schema;
  switch (schema[Kind]) {
    case "Array":
      return FromArray13(schema_, references_, value);
    case "BigInt":
      return FromBigInt5(schema_, references_, value);
    case "Boolean":
      return FromBoolean5(schema_, references_, value);
    case "Date":
      return FromDate6(schema_, references_, value);
    case "Import":
      return FromImport6(schema_, references_, value);
    case "Integer":
      return FromInteger5(schema_, references_, value);
    case "Intersect":
      return FromIntersect14(schema_, references_, value);
    case "Literal":
      return FromLiteral6(schema_, references_, value);
    case "Null":
      return FromNull5(schema_, references_, value);
    case "Number":
      return FromNumber5(schema_, references_, value);
    case "Object":
      return FromObject14(schema_, references_, value);
    case "Record":
      return FromRecord9(schema_, references_, value);
    case "Ref":
      return FromRef10(schema_, references_, value);
    case "String":
      return FromString5(schema_, references_, value);
    case "Symbol":
      return FromSymbol5(schema_, references_, value);
    case "This":
      return FromThis6(schema_, references_, value);
    case "Tuple":
      return FromTuple11(schema_, references_, value);
    case "Undefined":
      return FromUndefined5(schema_, references_, value);
    case "Union":
      return FromUnion16(schema_, references_, value);
    default:
      return Default2(value);
  }
}
function Convert(...args) {
  return args.length === 3 ? Visit10(args[0], args[1], args[2]) : Visit10(args[0], [], args[1]);
}
// node_modules/@sinclair/typebox/build/esm/value/transform/decode.mjs
class TransformDecodeCheckError extends TypeBoxError {
  constructor(schema, value, error) {
    super(`Unable to decode value as it does not match the expected schema`);
    this.schema = schema;
    this.value = value;
    this.error = error;
  }
}

class TransformDecodeError extends TypeBoxError {
  constructor(schema, path3, value, error) {
    super(error instanceof Error ? error.message : "Unknown error");
    this.schema = schema;
    this.path = path3;
    this.value = value;
    this.error = error;
  }
}
function Default3(schema, path3, value) {
  try {
    return IsTransform(schema) ? schema[TransformKind].Decode(value) : value;
  } catch (error) {
    throw new TransformDecodeError(schema, path3, value, error);
  }
}
function FromArray14(schema, references, path3, value) {
  return IsArray2(value) ? Default3(schema, path3, value.map((value2, index) => Visit11(schema.items, references, `${path3}/${index}`, value2))) : Default3(schema, path3, value);
}
function FromIntersect15(schema, references, path3, value) {
  if (!IsObject2(value) || IsValueType(value))
    return Default3(schema, path3, value);
  const knownEntries = KeyOfPropertyEntries(schema);
  const knownKeys = knownEntries.map((entry) => entry[0]);
  const knownProperties = { ...value };
  for (const [knownKey, knownSchema] of knownEntries)
    if (knownKey in knownProperties) {
      knownProperties[knownKey] = Visit11(knownSchema, references, `${path3}/${knownKey}`, knownProperties[knownKey]);
    }
  if (!IsTransform(schema.unevaluatedProperties)) {
    return Default3(schema, path3, knownProperties);
  }
  const unknownKeys = Object.getOwnPropertyNames(knownProperties);
  const unevaluatedProperties = schema.unevaluatedProperties;
  const unknownProperties = { ...knownProperties };
  for (const key of unknownKeys)
    if (!knownKeys.includes(key)) {
      unknownProperties[key] = Default3(unevaluatedProperties, `${path3}/${key}`, unknownProperties[key]);
    }
  return Default3(schema, path3, unknownProperties);
}
function FromImport7(schema, references, path3, value) {
  const additional = globalThis.Object.values(schema.$defs);
  const target = schema.$defs[schema.$ref];
  const result = Visit11(target, [...references, ...additional], path3, value);
  return Default3(schema, path3, result);
}
function FromNot5(schema, references, path3, value) {
  return Default3(schema, path3, Visit11(schema.not, references, path3, value));
}
function FromObject15(schema, references, path3, value) {
  if (!IsObject2(value))
    return Default3(schema, path3, value);
  const knownKeys = KeyOfPropertyKeys(schema);
  const knownProperties = { ...value };
  for (const key of knownKeys) {
    if (!HasPropertyKey2(knownProperties, key))
      continue;
    if (IsUndefined2(knownProperties[key]) && (!IsUndefined3(schema.properties[key]) || TypeSystemPolicy.IsExactOptionalProperty(knownProperties, key)))
      continue;
    knownProperties[key] = Visit11(schema.properties[key], references, `${path3}/${key}`, knownProperties[key]);
  }
  if (!IsSchema(schema.additionalProperties)) {
    return Default3(schema, path3, knownProperties);
  }
  const unknownKeys = Object.getOwnPropertyNames(knownProperties);
  const additionalProperties = schema.additionalProperties;
  const unknownProperties = { ...knownProperties };
  for (const key of unknownKeys)
    if (!knownKeys.includes(key)) {
      unknownProperties[key] = Default3(additionalProperties, `${path3}/${key}`, unknownProperties[key]);
    }
  return Default3(schema, path3, unknownProperties);
}
function FromRecord10(schema, references, path3, value) {
  if (!IsObject2(value))
    return Default3(schema, path3, value);
  const pattern = Object.getOwnPropertyNames(schema.patternProperties)[0];
  const knownKeys = new RegExp(pattern);
  const knownProperties = { ...value };
  for (const key of Object.getOwnPropertyNames(value))
    if (knownKeys.test(key)) {
      knownProperties[key] = Visit11(schema.patternProperties[pattern], references, `${path3}/${key}`, knownProperties[key]);
    }
  if (!IsSchema(schema.additionalProperties)) {
    return Default3(schema, path3, knownProperties);
  }
  const unknownKeys = Object.getOwnPropertyNames(knownProperties);
  const additionalProperties = schema.additionalProperties;
  const unknownProperties = { ...knownProperties };
  for (const key of unknownKeys)
    if (!knownKeys.test(key)) {
      unknownProperties[key] = Default3(additionalProperties, `${path3}/${key}`, unknownProperties[key]);
    }
  return Default3(schema, path3, unknownProperties);
}
function FromRef11(schema, references, path3, value) {
  const target = Deref(schema, references);
  return Default3(schema, path3, Visit11(target, references, path3, value));
}
function FromThis7(schema, references, path3, value) {
  const target = Deref(schema, references);
  return Default3(schema, path3, Visit11(target, references, path3, value));
}
function FromTuple12(schema, references, path3, value) {
  return IsArray2(value) && IsArray2(schema.items) ? Default3(schema, path3, schema.items.map((schema2, index) => Visit11(schema2, references, `${path3}/${index}`, value[index]))) : Default3(schema, path3, value);
}
function FromUnion17(schema, references, path3, value) {
  for (const subschema of schema.anyOf) {
    if (!Check(subschema, references, value))
      continue;
    const decoded = Visit11(subschema, references, path3, value);
    return Default3(schema, path3, decoded);
  }
  return Default3(schema, path3, value);
}
function Visit11(schema, references, path3, value) {
  const references_ = Pushref(schema, references);
  const schema_ = schema;
  switch (schema[Kind]) {
    case "Array":
      return FromArray14(schema_, references_, path3, value);
    case "Import":
      return FromImport7(schema_, references_, path3, value);
    case "Intersect":
      return FromIntersect15(schema_, references_, path3, value);
    case "Not":
      return FromNot5(schema_, references_, path3, value);
    case "Object":
      return FromObject15(schema_, references_, path3, value);
    case "Record":
      return FromRecord10(schema_, references_, path3, value);
    case "Ref":
      return FromRef11(schema_, references_, path3, value);
    case "Symbol":
      return Default3(schema_, path3, value);
    case "This":
      return FromThis7(schema_, references_, path3, value);
    case "Tuple":
      return FromTuple12(schema_, references_, path3, value);
    case "Union":
      return FromUnion17(schema_, references_, path3, value);
    default:
      return Default3(schema_, path3, value);
  }
}
function TransformDecode(schema, references, value) {
  return Visit11(schema, references, "", value);
}

// node_modules/@sinclair/typebox/build/esm/value/transform/encode.mjs
class TransformEncodeCheckError extends TypeBoxError {
  constructor(schema, value, error) {
    super(`The encoded value does not match the expected schema`);
    this.schema = schema;
    this.value = value;
    this.error = error;
  }
}

class TransformEncodeError extends TypeBoxError {
  constructor(schema, path3, value, error) {
    super(`${error instanceof Error ? error.message : "Unknown error"}`);
    this.schema = schema;
    this.path = path3;
    this.value = value;
    this.error = error;
  }
}
function Default4(schema, path3, value) {
  try {
    return IsTransform(schema) ? schema[TransformKind].Encode(value) : value;
  } catch (error) {
    throw new TransformEncodeError(schema, path3, value, error);
  }
}
function FromArray15(schema, references, path3, value) {
  const defaulted = Default4(schema, path3, value);
  return IsArray2(defaulted) ? defaulted.map((value2, index) => Visit12(schema.items, references, `${path3}/${index}`, value2)) : defaulted;
}
function FromImport8(schema, references, path3, value) {
  const additional = globalThis.Object.values(schema.$defs);
  const target = schema.$defs[schema.$ref];
  const result = Default4(schema, path3, value);
  return Visit12(target, [...references, ...additional], path3, result);
}
function FromIntersect16(schema, references, path3, value) {
  const defaulted = Default4(schema, path3, value);
  if (!IsObject2(value) || IsValueType(value))
    return defaulted;
  const knownEntries = KeyOfPropertyEntries(schema);
  const knownKeys = knownEntries.map((entry) => entry[0]);
  const knownProperties = { ...defaulted };
  for (const [knownKey, knownSchema] of knownEntries)
    if (knownKey in knownProperties) {
      knownProperties[knownKey] = Visit12(knownSchema, references, `${path3}/${knownKey}`, knownProperties[knownKey]);
    }
  if (!IsTransform(schema.unevaluatedProperties)) {
    return knownProperties;
  }
  const unknownKeys = Object.getOwnPropertyNames(knownProperties);
  const unevaluatedProperties = schema.unevaluatedProperties;
  const properties = { ...knownProperties };
  for (const key of unknownKeys)
    if (!knownKeys.includes(key)) {
      properties[key] = Default4(unevaluatedProperties, `${path3}/${key}`, properties[key]);
    }
  return properties;
}
function FromNot6(schema, references, path3, value) {
  return Default4(schema.not, path3, Default4(schema, path3, value));
}
function FromObject16(schema, references, path3, value) {
  const defaulted = Default4(schema, path3, value);
  if (!IsObject2(defaulted))
    return defaulted;
  const knownKeys = KeyOfPropertyKeys(schema);
  const knownProperties = { ...defaulted };
  for (const key of knownKeys) {
    if (!HasPropertyKey2(knownProperties, key))
      continue;
    if (IsUndefined2(knownProperties[key]) && (!IsUndefined3(schema.properties[key]) || TypeSystemPolicy.IsExactOptionalProperty(knownProperties, key)))
      continue;
    knownProperties[key] = Visit12(schema.properties[key], references, `${path3}/${key}`, knownProperties[key]);
  }
  if (!IsSchema(schema.additionalProperties)) {
    return knownProperties;
  }
  const unknownKeys = Object.getOwnPropertyNames(knownProperties);
  const additionalProperties = schema.additionalProperties;
  const properties = { ...knownProperties };
  for (const key of unknownKeys)
    if (!knownKeys.includes(key)) {
      properties[key] = Default4(additionalProperties, `${path3}/${key}`, properties[key]);
    }
  return properties;
}
function FromRecord11(schema, references, path3, value) {
  const defaulted = Default4(schema, path3, value);
  if (!IsObject2(value))
    return defaulted;
  const pattern = Object.getOwnPropertyNames(schema.patternProperties)[0];
  const knownKeys = new RegExp(pattern);
  const knownProperties = { ...defaulted };
  for (const key of Object.getOwnPropertyNames(value))
    if (knownKeys.test(key)) {
      knownProperties[key] = Visit12(schema.patternProperties[pattern], references, `${path3}/${key}`, knownProperties[key]);
    }
  if (!IsSchema(schema.additionalProperties)) {
    return knownProperties;
  }
  const unknownKeys = Object.getOwnPropertyNames(knownProperties);
  const additionalProperties = schema.additionalProperties;
  const properties = { ...knownProperties };
  for (const key of unknownKeys)
    if (!knownKeys.test(key)) {
      properties[key] = Default4(additionalProperties, `${path3}/${key}`, properties[key]);
    }
  return properties;
}
function FromRef12(schema, references, path3, value) {
  const target = Deref(schema, references);
  const resolved = Visit12(target, references, path3, value);
  return Default4(schema, path3, resolved);
}
function FromThis8(schema, references, path3, value) {
  const target = Deref(schema, references);
  const resolved = Visit12(target, references, path3, value);
  return Default4(schema, path3, resolved);
}
function FromTuple13(schema, references, path3, value) {
  const value1 = Default4(schema, path3, value);
  return IsArray2(schema.items) ? schema.items.map((schema2, index) => Visit12(schema2, references, `${path3}/${index}`, value1[index])) : [];
}
function FromUnion18(schema, references, path3, value) {
  for (const subschema of schema.anyOf) {
    if (!Check(subschema, references, value))
      continue;
    const value1 = Visit12(subschema, references, path3, value);
    return Default4(schema, path3, value1);
  }
  for (const subschema of schema.anyOf) {
    const value1 = Visit12(subschema, references, path3, value);
    if (!Check(schema, references, value1))
      continue;
    return Default4(schema, path3, value1);
  }
  return Default4(schema, path3, value);
}
function Visit12(schema, references, path3, value) {
  const references_ = Pushref(schema, references);
  const schema_ = schema;
  switch (schema[Kind]) {
    case "Array":
      return FromArray15(schema_, references_, path3, value);
    case "Import":
      return FromImport8(schema_, references_, path3, value);
    case "Intersect":
      return FromIntersect16(schema_, references_, path3, value);
    case "Not":
      return FromNot6(schema_, references_, path3, value);
    case "Object":
      return FromObject16(schema_, references_, path3, value);
    case "Record":
      return FromRecord11(schema_, references_, path3, value);
    case "Ref":
      return FromRef12(schema_, references_, path3, value);
    case "This":
      return FromThis8(schema_, references_, path3, value);
    case "Tuple":
      return FromTuple13(schema_, references_, path3, value);
    case "Union":
      return FromUnion18(schema_, references_, path3, value);
    default:
      return Default4(schema_, path3, value);
  }
}
function TransformEncode(schema, references, value) {
  return Visit12(schema, references, "", value);
}

// node_modules/@sinclair/typebox/build/esm/value/transform/has.mjs
function FromArray16(schema, references) {
  return IsTransform(schema) || Visit13(schema.items, references);
}
function FromAsyncIterator7(schema, references) {
  return IsTransform(schema) || Visit13(schema.items, references);
}
function FromConstructor8(schema, references) {
  return IsTransform(schema) || Visit13(schema.returns, references) || schema.parameters.some((schema2) => Visit13(schema2, references));
}
function FromFunction7(schema, references) {
  return IsTransform(schema) || Visit13(schema.returns, references) || schema.parameters.some((schema2) => Visit13(schema2, references));
}
function FromIntersect17(schema, references) {
  return IsTransform(schema) || IsTransform(schema.unevaluatedProperties) || schema.allOf.some((schema2) => Visit13(schema2, references));
}
function FromImport9(schema, references) {
  const additional = globalThis.Object.getOwnPropertyNames(schema.$defs).reduce((result, key) => [...result, schema.$defs[key]], []);
  const target = schema.$defs[schema.$ref];
  return IsTransform(schema) || Visit13(target, [...additional, ...references]);
}
function FromIterator7(schema, references) {
  return IsTransform(schema) || Visit13(schema.items, references);
}
function FromNot7(schema, references) {
  return IsTransform(schema) || Visit13(schema.not, references);
}
function FromObject17(schema, references) {
  return IsTransform(schema) || Object.values(schema.properties).some((schema2) => Visit13(schema2, references)) || IsSchema(schema.additionalProperties) && Visit13(schema.additionalProperties, references);
}
function FromPromise7(schema, references) {
  return IsTransform(schema) || Visit13(schema.item, references);
}
function FromRecord12(schema, references) {
  const pattern = Object.getOwnPropertyNames(schema.patternProperties)[0];
  const property = schema.patternProperties[pattern];
  return IsTransform(schema) || Visit13(property, references) || IsSchema(schema.additionalProperties) && IsTransform(schema.additionalProperties);
}
function FromRef13(schema, references) {
  if (IsTransform(schema))
    return true;
  return Visit13(Deref(schema, references), references);
}
function FromThis9(schema, references) {
  if (IsTransform(schema))
    return true;
  return Visit13(Deref(schema, references), references);
}
function FromTuple14(schema, references) {
  return IsTransform(schema) || !IsUndefined2(schema.items) && schema.items.some((schema2) => Visit13(schema2, references));
}
function FromUnion19(schema, references) {
  return IsTransform(schema) || schema.anyOf.some((schema2) => Visit13(schema2, references));
}
function Visit13(schema, references) {
  const references_ = Pushref(schema, references);
  const schema_ = schema;
  if (schema.$id && visited.has(schema.$id))
    return false;
  if (schema.$id)
    visited.add(schema.$id);
  switch (schema[Kind]) {
    case "Array":
      return FromArray16(schema_, references_);
    case "AsyncIterator":
      return FromAsyncIterator7(schema_, references_);
    case "Constructor":
      return FromConstructor8(schema_, references_);
    case "Function":
      return FromFunction7(schema_, references_);
    case "Import":
      return FromImport9(schema_, references_);
    case "Intersect":
      return FromIntersect17(schema_, references_);
    case "Iterator":
      return FromIterator7(schema_, references_);
    case "Not":
      return FromNot7(schema_, references_);
    case "Object":
      return FromObject17(schema_, references_);
    case "Promise":
      return FromPromise7(schema_, references_);
    case "Record":
      return FromRecord12(schema_, references_);
    case "Ref":
      return FromRef13(schema_, references_);
    case "This":
      return FromThis9(schema_, references_);
    case "Tuple":
      return FromTuple14(schema_, references_);
    case "Union":
      return FromUnion19(schema_, references_);
    default:
      return IsTransform(schema);
  }
}
var visited = new Set;
function HasTransform(schema, references) {
  visited.clear();
  return Visit13(schema, references);
}

// node_modules/@sinclair/typebox/build/esm/value/decode/decode.mjs
function Decode(...args) {
  const [schema, references, value] = args.length === 3 ? [args[0], args[1], args[2]] : [args[0], [], args[1]];
  if (!Check(schema, references, value))
    throw new TransformDecodeCheckError(schema, value, Errors(schema, references, value).First());
  return HasTransform(schema, references) ? TransformDecode(schema, references, value) : value;
}
// node_modules/@sinclair/typebox/build/esm/value/default/default.mjs
function ValueOrDefault(schema, value) {
  const defaultValue = HasPropertyKey2(schema, "default") ? schema.default : undefined;
  const clone = IsFunction2(defaultValue) ? defaultValue() : Clone2(defaultValue);
  return IsUndefined2(value) ? clone : IsObject2(value) && IsObject2(clone) ? Object.assign(clone, value) : value;
}
function HasDefaultProperty(schema) {
  return IsKind(schema) && "default" in schema;
}
function FromArray17(schema, references, value) {
  if (IsArray2(value)) {
    for (let i = 0;i < value.length; i++) {
      value[i] = Visit14(schema.items, references, value[i]);
    }
    return value;
  }
  const defaulted = ValueOrDefault(schema, value);
  if (!IsArray2(defaulted))
    return defaulted;
  for (let i = 0;i < defaulted.length; i++) {
    defaulted[i] = Visit14(schema.items, references, defaulted[i]);
  }
  return defaulted;
}
function FromDate7(schema, references, value) {
  return IsDate2(value) ? value : ValueOrDefault(schema, value);
}
function FromImport10(schema, references, value) {
  const definitions = globalThis.Object.values(schema.$defs);
  const target = schema.$defs[schema.$ref];
  return Visit14(target, [...references, ...definitions], value);
}
function FromIntersect18(schema, references, value) {
  const defaulted = ValueOrDefault(schema, value);
  return schema.allOf.reduce((acc, schema2) => {
    const next = Visit14(schema2, references, defaulted);
    return IsObject2(next) ? { ...acc, ...next } : next;
  }, {});
}
function FromObject18(schema, references, value) {
  const defaulted = ValueOrDefault(schema, value);
  if (!IsObject2(defaulted))
    return defaulted;
  const knownPropertyKeys = Object.getOwnPropertyNames(schema.properties);
  for (const key of knownPropertyKeys) {
    const propertyValue = Visit14(schema.properties[key], references, defaulted[key]);
    if (IsUndefined2(propertyValue))
      continue;
    defaulted[key] = Visit14(schema.properties[key], references, defaulted[key]);
  }
  if (!HasDefaultProperty(schema.additionalProperties))
    return defaulted;
  for (const key of Object.getOwnPropertyNames(defaulted)) {
    if (knownPropertyKeys.includes(key))
      continue;
    defaulted[key] = Visit14(schema.additionalProperties, references, defaulted[key]);
  }
  return defaulted;
}
function FromRecord13(schema, references, value) {
  const defaulted = ValueOrDefault(schema, value);
  if (!IsObject2(defaulted))
    return defaulted;
  const additionalPropertiesSchema = schema.additionalProperties;
  const [propertyKeyPattern, propertySchema] = Object.entries(schema.patternProperties)[0];
  const knownPropertyKey = new RegExp(propertyKeyPattern);
  for (const key of Object.getOwnPropertyNames(defaulted)) {
    if (!(knownPropertyKey.test(key) && HasDefaultProperty(propertySchema)))
      continue;
    defaulted[key] = Visit14(propertySchema, references, defaulted[key]);
  }
  if (!HasDefaultProperty(additionalPropertiesSchema))
    return defaulted;
  for (const key of Object.getOwnPropertyNames(defaulted)) {
    if (knownPropertyKey.test(key))
      continue;
    defaulted[key] = Visit14(additionalPropertiesSchema, references, defaulted[key]);
  }
  return defaulted;
}
function FromRef14(schema, references, value) {
  return Visit14(Deref(schema, references), references, ValueOrDefault(schema, value));
}
function FromThis10(schema, references, value) {
  return Visit14(Deref(schema, references), references, value);
}
function FromTuple15(schema, references, value) {
  const defaulted = ValueOrDefault(schema, value);
  if (!IsArray2(defaulted) || IsUndefined2(schema.items))
    return defaulted;
  const [items, max] = [schema.items, Math.max(schema.items.length, defaulted.length)];
  for (let i = 0;i < max; i++) {
    if (i < items.length)
      defaulted[i] = Visit14(items[i], references, defaulted[i]);
  }
  return defaulted;
}
function FromUnion20(schema, references, value) {
  const defaulted = ValueOrDefault(schema, value);
  for (const inner of schema.anyOf) {
    const result = Visit14(inner, references, Clone2(defaulted));
    if (Check(inner, references, result)) {
      return result;
    }
  }
  return defaulted;
}
function Visit14(schema, references, value) {
  const references_ = Pushref(schema, references);
  const schema_ = schema;
  switch (schema_[Kind]) {
    case "Array":
      return FromArray17(schema_, references_, value);
    case "Date":
      return FromDate7(schema_, references_, value);
    case "Import":
      return FromImport10(schema_, references_, value);
    case "Intersect":
      return FromIntersect18(schema_, references_, value);
    case "Object":
      return FromObject18(schema_, references_, value);
    case "Record":
      return FromRecord13(schema_, references_, value);
    case "Ref":
      return FromRef14(schema_, references_, value);
    case "This":
      return FromThis10(schema_, references_, value);
    case "Tuple":
      return FromTuple15(schema_, references_, value);
    case "Union":
      return FromUnion20(schema_, references_, value);
    default:
      return ValueOrDefault(schema_, value);
  }
}
function Default5(...args) {
  return args.length === 3 ? Visit14(args[0], args[1], args[2]) : Visit14(args[0], [], args[1]);
}
// node_modules/@sinclair/typebox/build/esm/value/pointer/pointer.mjs
var exports_pointer = {};
__export(exports_pointer, {
  ValuePointerRootSetError: () => ValuePointerRootSetError,
  ValuePointerRootDeleteError: () => ValuePointerRootDeleteError,
  Set: () => Set4,
  Has: () => Has3,
  Get: () => Get3,
  Format: () => Format,
  Delete: () => Delete3
});
class ValuePointerRootSetError extends TypeBoxError {
  constructor(value, path3, update) {
    super("Cannot set root value");
    this.value = value;
    this.path = path3;
    this.update = update;
  }
}

class ValuePointerRootDeleteError extends TypeBoxError {
  constructor(value, path3) {
    super("Cannot delete root value");
    this.value = value;
    this.path = path3;
  }
}
function Escape2(component) {
  return component.indexOf("~") === -1 ? component : component.replace(/~1/g, "/").replace(/~0/g, "~");
}
function* Format(pointer) {
  if (pointer === "")
    return;
  let [start, end] = [0, 0];
  for (let i = 0;i < pointer.length; i++) {
    const char = pointer.charAt(i);
    if (char === "/") {
      if (i === 0) {
        start = i + 1;
      } else {
        end = i;
        yield Escape2(pointer.slice(start, end));
        start = i + 1;
      }
    } else {
      end = i;
    }
  }
  yield Escape2(pointer.slice(start));
}
function Set4(value, pointer, update) {
  if (pointer === "")
    throw new ValuePointerRootSetError(value, pointer, update);
  let [owner, next, key] = [null, value, ""];
  for (const component of Format(pointer)) {
    if (next[component] === undefined)
      next[component] = {};
    owner = next;
    next = next[component];
    key = component;
  }
  owner[key] = update;
}
function Delete3(value, pointer) {
  if (pointer === "")
    throw new ValuePointerRootDeleteError(value, pointer);
  let [owner, next, key] = [null, value, ""];
  for (const component of Format(pointer)) {
    if (next[component] === undefined || next[component] === null)
      return;
    owner = next;
    next = next[component];
    key = component;
  }
  if (Array.isArray(owner)) {
    const index = parseInt(key);
    owner.splice(index, 1);
  } else {
    delete owner[key];
  }
}
function Has3(value, pointer) {
  if (pointer === "")
    return true;
  let [owner, next, key] = [null, value, ""];
  for (const component of Format(pointer)) {
    if (next[component] === undefined)
      return false;
    owner = next;
    next = next[component];
    key = component;
  }
  return Object.getOwnPropertyNames(owner).includes(key);
}
function Get3(value, pointer) {
  if (pointer === "")
    return value;
  let current = value;
  for (const component of Format(pointer)) {
    if (current[component] === undefined)
      return;
    current = current[component];
  }
  return current;
}
// node_modules/@sinclair/typebox/build/esm/value/equal/equal.mjs
function ObjectType3(left, right) {
  if (!IsObject2(right))
    return false;
  const leftKeys = [...Object.keys(left), ...Object.getOwnPropertySymbols(left)];
  const rightKeys = [...Object.keys(right), ...Object.getOwnPropertySymbols(right)];
  if (leftKeys.length !== rightKeys.length)
    return false;
  return leftKeys.every((key) => Equal(left[key], right[key]));
}
function DateType3(left, right) {
  return IsDate2(right) && left.getTime() === right.getTime();
}
function ArrayType3(left, right) {
  if (!IsArray2(right) || left.length !== right.length)
    return false;
  return left.every((value, index) => Equal(value, right[index]));
}
function TypedArrayType(left, right) {
  if (!IsTypedArray(right) || left.length !== right.length || Object.getPrototypeOf(left).constructor.name !== Object.getPrototypeOf(right).constructor.name)
    return false;
  return left.every((value, index) => Equal(value, right[index]));
}
function ValueType(left, right) {
  return left === right;
}
function Equal(left, right) {
  if (IsDate2(left))
    return DateType3(left, right);
  if (IsTypedArray(left))
    return TypedArrayType(left, right);
  if (IsArray2(left))
    return ArrayType3(left, right);
  if (IsObject2(left))
    return ObjectType3(left, right);
  if (IsValueType(left))
    return ValueType(left, right);
  throw new Error("ValueEquals: Unable to compare value");
}

// node_modules/@sinclair/typebox/build/esm/value/delta/delta.mjs
var Insert = Object2({
  type: Literal("insert"),
  path: String2(),
  value: Unknown()
});
var Update = Object2({
  type: Literal("update"),
  path: String2(),
  value: Unknown()
});
var Delete4 = Object2({
  type: Literal("delete"),
  path: String2()
});
var Edit = Union([Insert, Update, Delete4]);

class ValueDiffError extends TypeBoxError {
  constructor(value, message) {
    super(message);
    this.value = value;
  }
}
function CreateUpdate(path3, value) {
  return { type: "update", path: path3, value };
}
function CreateInsert(path3, value) {
  return { type: "insert", path: path3, value };
}
function CreateDelete(path3) {
  return { type: "delete", path: path3 };
}
function AssertDiffable(value) {
  if (globalThis.Object.getOwnPropertySymbols(value).length > 0)
    throw new ValueDiffError(value, "Cannot diff objects with symbols");
}
function* ObjectType4(path3, current, next) {
  AssertDiffable(current);
  AssertDiffable(next);
  if (!IsStandardObject(next))
    return yield CreateUpdate(path3, next);
  const currentKeys = globalThis.Object.getOwnPropertyNames(current);
  const nextKeys = globalThis.Object.getOwnPropertyNames(next);
  for (const key of nextKeys) {
    if (HasPropertyKey2(current, key))
      continue;
    yield CreateInsert(`${path3}/${key}`, next[key]);
  }
  for (const key of currentKeys) {
    if (!HasPropertyKey2(next, key))
      continue;
    if (Equal(current, next))
      continue;
    yield* Visit15(`${path3}/${key}`, current[key], next[key]);
  }
  for (const key of currentKeys) {
    if (HasPropertyKey2(next, key))
      continue;
    yield CreateDelete(`${path3}/${key}`);
  }
}
function* ArrayType4(path3, current, next) {
  if (!IsArray2(next))
    return yield CreateUpdate(path3, next);
  for (let i = 0;i < Math.min(current.length, next.length); i++) {
    yield* Visit15(`${path3}/${i}`, current[i], next[i]);
  }
  for (let i = 0;i < next.length; i++) {
    if (i < current.length)
      continue;
    yield CreateInsert(`${path3}/${i}`, next[i]);
  }
  for (let i = current.length - 1;i >= 0; i--) {
    if (i < next.length)
      continue;
    yield CreateDelete(`${path3}/${i}`);
  }
}
function* TypedArrayType2(path3, current, next) {
  if (!IsTypedArray(next) || current.length !== next.length || globalThis.Object.getPrototypeOf(current).constructor.name !== globalThis.Object.getPrototypeOf(next).constructor.name)
    return yield CreateUpdate(path3, next);
  for (let i = 0;i < Math.min(current.length, next.length); i++) {
    yield* Visit15(`${path3}/${i}`, current[i], next[i]);
  }
}
function* ValueType2(path3, current, next) {
  if (current === next)
    return;
  yield CreateUpdate(path3, next);
}
function* Visit15(path3, current, next) {
  if (IsStandardObject(current))
    return yield* ObjectType4(path3, current, next);
  if (IsArray2(current))
    return yield* ArrayType4(path3, current, next);
  if (IsTypedArray(current))
    return yield* TypedArrayType2(path3, current, next);
  if (IsValueType(current))
    return yield* ValueType2(path3, current, next);
  throw new ValueDiffError(current, "Unable to diff value");
}
function Diff(current, next) {
  return [...Visit15("", current, next)];
}
function IsRootUpdate(edits) {
  return edits.length > 0 && edits[0].path === "" && edits[0].type === "update";
}
function IsIdentity(edits) {
  return edits.length === 0;
}
function Patch(current, edits) {
  if (IsRootUpdate(edits)) {
    return Clone2(edits[0].value);
  }
  if (IsIdentity(edits)) {
    return Clone2(current);
  }
  const clone = Clone2(current);
  for (const edit of edits) {
    switch (edit.type) {
      case "insert": {
        exports_pointer.Set(clone, edit.path, edit.value);
        break;
      }
      case "update": {
        exports_pointer.Set(clone, edit.path, edit.value);
        break;
      }
      case "delete": {
        exports_pointer.Delete(clone, edit.path);
        break;
      }
    }
  }
  return clone;
}
// node_modules/@sinclair/typebox/build/esm/value/encode/encode.mjs
function Encode(...args) {
  const [schema, references, value] = args.length === 3 ? [args[0], args[1], args[2]] : [args[0], [], args[1]];
  const encoded = HasTransform(schema, references) ? TransformEncode(schema, references, value) : value;
  if (!Check(schema, references, encoded))
    throw new TransformEncodeCheckError(schema, encoded, Errors(schema, references, encoded).First());
  return encoded;
}
// node_modules/@sinclair/typebox/build/esm/value/mutate/mutate.mjs
function IsStandardObject2(value) {
  return IsObject2(value) && !IsArray2(value);
}

class ValueMutateError extends TypeBoxError {
  constructor(message) {
    super(message);
  }
}
function ObjectType5(root, path3, current, next) {
  if (!IsStandardObject2(current)) {
    exports_pointer.Set(root, path3, Clone2(next));
  } else {
    const currentKeys = Object.getOwnPropertyNames(current);
    const nextKeys = Object.getOwnPropertyNames(next);
    for (const currentKey of currentKeys) {
      if (!nextKeys.includes(currentKey)) {
        delete current[currentKey];
      }
    }
    for (const nextKey of nextKeys) {
      if (!currentKeys.includes(nextKey)) {
        current[nextKey] = null;
      }
    }
    for (const nextKey of nextKeys) {
      Visit16(root, `${path3}/${nextKey}`, current[nextKey], next[nextKey]);
    }
  }
}
function ArrayType5(root, path3, current, next) {
  if (!IsArray2(current)) {
    exports_pointer.Set(root, path3, Clone2(next));
  } else {
    for (let index = 0;index < next.length; index++) {
      Visit16(root, `${path3}/${index}`, current[index], next[index]);
    }
    current.splice(next.length);
  }
}
function TypedArrayType3(root, path3, current, next) {
  if (IsTypedArray(current) && current.length === next.length) {
    for (let i = 0;i < current.length; i++) {
      current[i] = next[i];
    }
  } else {
    exports_pointer.Set(root, path3, Clone2(next));
  }
}
function ValueType3(root, path3, current, next) {
  if (current === next)
    return;
  exports_pointer.Set(root, path3, next);
}
function Visit16(root, path3, current, next) {
  if (IsArray2(next))
    return ArrayType5(root, path3, current, next);
  if (IsTypedArray(next))
    return TypedArrayType3(root, path3, current, next);
  if (IsStandardObject2(next))
    return ObjectType5(root, path3, current, next);
  if (IsValueType(next))
    return ValueType3(root, path3, current, next);
}
function IsNonMutableValue(value) {
  return IsTypedArray(value) || IsValueType(value);
}
function IsMismatchedValue(current, next) {
  return IsStandardObject2(current) && IsArray2(next) || IsArray2(current) && IsStandardObject2(next);
}
function Mutate(current, next) {
  if (IsNonMutableValue(current) || IsNonMutableValue(next))
    throw new ValueMutateError("Only object and array types can be mutated at the root level");
  if (IsMismatchedValue(current, next))
    throw new ValueMutateError("Cannot assign due type mismatch of assignable values");
  Visit16(current, "", current, next);
}
// node_modules/@sinclair/typebox/build/esm/value/parse/parse.mjs
class ParseError extends TypeBoxError {
  constructor(message) {
    super(message);
  }
}
var ParseRegistry;
(function(ParseRegistry2) {
  const registry = new Map([
    ["Assert", (type, references, value) => {
      Assert(type, references, value);
      return value;
    }],
    ["Cast", (type, references, value) => Cast(type, references, value)],
    ["Clean", (type, references, value) => Clean(type, references, value)],
    ["Clone", (_type, _references, value) => Clone2(value)],
    ["Convert", (type, references, value) => Convert(type, references, value)],
    ["Decode", (type, references, value) => HasTransform(type, references) ? TransformDecode(type, references, value) : value],
    ["Default", (type, references, value) => Default5(type, references, value)],
    ["Encode", (type, references, value) => HasTransform(type, references) ? TransformEncode(type, references, value) : value]
  ]);
  function Delete5(key) {
    registry.delete(key);
  }
  ParseRegistry2.Delete = Delete5;
  function Set5(key, callback) {
    registry.set(key, callback);
  }
  ParseRegistry2.Set = Set5;
  function Get4(key) {
    return registry.get(key);
  }
  ParseRegistry2.Get = Get4;
})(ParseRegistry || (ParseRegistry = {}));
var ParseDefault = [
  "Clone",
  "Clean",
  "Default",
  "Convert",
  "Assert",
  "Decode"
];
function ParseValue(operations, type, references, value) {
  return operations.reduce((value2, operationKey) => {
    const operation = ParseRegistry.Get(operationKey);
    if (IsUndefined2(operation))
      throw new ParseError(`Unable to find Parse operation '${operationKey}'`);
    return operation(type, references, value2);
  }, value);
}
function Parse(...args) {
  const [operations, schema, references, value] = args.length === 4 ? [args[0], args[1], args[2], args[3]] : args.length === 3 ? IsArray2(args[0]) ? [args[0], args[1], [], args[2]] : [ParseDefault, args[0], args[1], args[2]] : args.length === 2 ? [ParseDefault, args[0], [], args[1]] : (() => {
    throw new ParseError("Invalid Arguments");
  })();
  return ParseValue(operations, schema, references, value);
}
// node_modules/@sinclair/typebox/build/esm/value/value/value.mjs
var exports_value2 = {};
__export(exports_value2, {
  ValueErrorIterator: () => ValueErrorIterator,
  Patch: () => Patch,
  Parse: () => Parse,
  Mutate: () => Mutate,
  Hash: () => Hash,
  Errors: () => Errors,
  Equal: () => Equal,
  Encode: () => Encode,
  Edit: () => Edit,
  Diff: () => Diff,
  Default: () => Default5,
  Decode: () => Decode,
  Create: () => Create2,
  Convert: () => Convert,
  Clone: () => Clone2,
  Clean: () => Clean,
  Check: () => Check,
  Cast: () => Cast,
  Assert: () => Assert
});
// node_modules/@sinclair/typebox/build/esm/compiler/compiler.mjs
class TypeCheck {
  constructor(schema, references, checkFunc, code) {
    this.schema = schema;
    this.references = references;
    this.checkFunc = checkFunc;
    this.code = code;
    this.hasTransform = HasTransform(schema, references);
  }
  Code() {
    return this.code;
  }
  Schema() {
    return this.schema;
  }
  References() {
    return this.references;
  }
  Errors(value) {
    return Errors(this.schema, this.references, value);
  }
  Check(value) {
    return this.checkFunc(value);
  }
  Decode(value) {
    if (!this.checkFunc(value))
      throw new TransformDecodeCheckError(this.schema, value, this.Errors(value).First());
    return this.hasTransform ? TransformDecode(this.schema, this.references, value) : value;
  }
  Encode(value) {
    const encoded = this.hasTransform ? TransformEncode(this.schema, this.references, value) : value;
    if (!this.checkFunc(encoded))
      throw new TransformEncodeCheckError(this.schema, value, this.Errors(value).First());
    return encoded;
  }
}
var Character;
(function(Character2) {
  function DollarSign(code) {
    return code === 36;
  }
  Character2.DollarSign = DollarSign;
  function IsUnderscore(code) {
    return code === 95;
  }
  Character2.IsUnderscore = IsUnderscore;
  function IsAlpha(code) {
    return code >= 65 && code <= 90 || code >= 97 && code <= 122;
  }
  Character2.IsAlpha = IsAlpha;
  function IsNumeric(code) {
    return code >= 48 && code <= 57;
  }
  Character2.IsNumeric = IsNumeric;
})(Character || (Character = {}));
var MemberExpression;
(function(MemberExpression2) {
  function IsFirstCharacterNumeric(value) {
    if (value.length === 0)
      return false;
    return Character.IsNumeric(value.charCodeAt(0));
  }
  function IsAccessor(value) {
    if (IsFirstCharacterNumeric(value))
      return false;
    for (let i = 0;i < value.length; i++) {
      const code = value.charCodeAt(i);
      const check2 = Character.IsAlpha(code) || Character.IsNumeric(code) || Character.DollarSign(code) || Character.IsUnderscore(code);
      if (!check2)
        return false;
    }
    return true;
  }
  function EscapeHyphen(key) {
    return key.replace(/'/g, "\\'");
  }
  function Encode2(object, key) {
    return IsAccessor(key) ? `${object}.${key}` : `${object}['${EscapeHyphen(key)}']`;
  }
  MemberExpression2.Encode = Encode2;
})(MemberExpression || (MemberExpression = {}));
var Identifier;
(function(Identifier2) {
  function Encode2($id) {
    const buffer = [];
    for (let i = 0;i < $id.length; i++) {
      const code = $id.charCodeAt(i);
      if (Character.IsNumeric(code) || Character.IsAlpha(code)) {
        buffer.push($id.charAt(i));
      } else {
        buffer.push(`_${code}_`);
      }
    }
    return buffer.join("").replace(/__/g, "_");
  }
  Identifier2.Encode = Encode2;
})(Identifier || (Identifier = {}));
var LiteralString;
(function(LiteralString2) {
  function Escape3(content) {
    return content.replace(/'/g, "\\'");
  }
  LiteralString2.Escape = Escape3;
})(LiteralString || (LiteralString = {}));

class TypeCompilerUnknownTypeError extends TypeBoxError {
  constructor(schema) {
    super("Unknown type");
    this.schema = schema;
  }
}

class TypeCompilerTypeGuardError extends TypeBoxError {
  constructor(schema) {
    super("Preflight validation check failed to guard for the given schema");
    this.schema = schema;
  }
}
var Policy;
(function(Policy2) {
  function IsExactOptionalProperty(value, key, expression) {
    return TypeSystemPolicy.ExactOptionalPropertyTypes ? `('${key}' in ${value} ? ${expression} : true)` : `(${MemberExpression.Encode(value, key)} !== undefined ? ${expression} : true)`;
  }
  Policy2.IsExactOptionalProperty = IsExactOptionalProperty;
  function IsObjectLike(value) {
    return !TypeSystemPolicy.AllowArrayObject ? `(typeof ${value} === 'object' && ${value} !== null && !Array.isArray(${value}))` : `(typeof ${value} === 'object' && ${value} !== null)`;
  }
  Policy2.IsObjectLike = IsObjectLike;
  function IsRecordLike(value) {
    return !TypeSystemPolicy.AllowArrayObject ? `(typeof ${value} === 'object' && ${value} !== null && !Array.isArray(${value}) && !(${value} instanceof Date) && !(${value} instanceof Uint8Array))` : `(typeof ${value} === 'object' && ${value} !== null && !(${value} instanceof Date) && !(${value} instanceof Uint8Array))`;
  }
  Policy2.IsRecordLike = IsRecordLike;
  function IsNumberLike(value) {
    return TypeSystemPolicy.AllowNaN ? `typeof ${value} === 'number'` : `Number.isFinite(${value})`;
  }
  Policy2.IsNumberLike = IsNumberLike;
  function IsVoidLike(value) {
    return TypeSystemPolicy.AllowNullVoid ? `(${value} === undefined || ${value} === null)` : `${value} === undefined`;
  }
  Policy2.IsVoidLike = IsVoidLike;
})(Policy || (Policy = {}));
var TypeCompiler;
(function(TypeCompiler2) {
  function IsAnyOrUnknown2(schema) {
    return schema[Kind] === "Any" || schema[Kind] === "Unknown";
  }
  function* FromAny5(schema, references, value) {
    yield "true";
  }
  function* FromArgument5(schema, references, value) {
    yield "true";
  }
  function* FromArray18(schema, references, value) {
    yield `Array.isArray(${value})`;
    const [parameter, accumulator] = [CreateParameter("value", "any"), CreateParameter("acc", "number")];
    if (IsNumber2(schema.maxItems))
      yield `${value}.length <= ${schema.maxItems}`;
    if (IsNumber2(schema.minItems))
      yield `${value}.length >= ${schema.minItems}`;
    const elementExpression = CreateExpression(schema.items, references, "value");
    yield `${value}.every((${parameter}) => ${elementExpression})`;
    if (IsSchema2(schema.contains) || IsNumber2(schema.minContains) || IsNumber2(schema.maxContains)) {
      const containsSchema = IsSchema2(schema.contains) ? schema.contains : Never();
      const checkExpression = CreateExpression(containsSchema, references, "value");
      const checkMinContains = IsNumber2(schema.minContains) ? [`(count >= ${schema.minContains})`] : [];
      const checkMaxContains = IsNumber2(schema.maxContains) ? [`(count <= ${schema.maxContains})`] : [];
      const checkCount = `const count = value.reduce((${accumulator}, ${parameter}) => ${checkExpression} ? acc + 1 : acc, 0)`;
      const check2 = [`(count > 0)`, ...checkMinContains, ...checkMaxContains].join(" && ");
      yield `((${parameter}) => { ${checkCount}; return ${check2}})(${value})`;
    }
    if (schema.uniqueItems === true) {
      const check2 = `const hashed = hash(element); if(set.has(hashed)) { return false } else { set.add(hashed) } } return true`;
      const block = `const set = new Set(); for(const element of value) { ${check2} }`;
      yield `((${parameter}) => { ${block} )(${value})`;
    }
  }
  function* FromAsyncIterator8(schema, references, value) {
    yield `(typeof value === 'object' && Symbol.asyncIterator in ${value})`;
  }
  function* FromBigInt6(schema, references, value) {
    yield `(typeof ${value} === 'bigint')`;
    if (IsBigInt2(schema.exclusiveMaximum))
      yield `${value} < BigInt(${schema.exclusiveMaximum})`;
    if (IsBigInt2(schema.exclusiveMinimum))
      yield `${value} > BigInt(${schema.exclusiveMinimum})`;
    if (IsBigInt2(schema.maximum))
      yield `${value} <= BigInt(${schema.maximum})`;
    if (IsBigInt2(schema.minimum))
      yield `${value} >= BigInt(${schema.minimum})`;
    if (IsBigInt2(schema.multipleOf))
      yield `(${value} % BigInt(${schema.multipleOf})) === 0`;
  }
  function* FromBoolean6(schema, references, value) {
    yield `(typeof ${value} === 'boolean')`;
  }
  function* FromConstructor9(schema, references, value) {
    yield* Visit17(schema.returns, references, `${value}.prototype`);
  }
  function* FromDate8(schema, references, value) {
    yield `(${value} instanceof Date) && Number.isFinite(${value}.getTime())`;
    if (IsNumber2(schema.exclusiveMaximumTimestamp))
      yield `${value}.getTime() < ${schema.exclusiveMaximumTimestamp}`;
    if (IsNumber2(schema.exclusiveMinimumTimestamp))
      yield `${value}.getTime() > ${schema.exclusiveMinimumTimestamp}`;
    if (IsNumber2(schema.maximumTimestamp))
      yield `${value}.getTime() <= ${schema.maximumTimestamp}`;
    if (IsNumber2(schema.minimumTimestamp))
      yield `${value}.getTime() >= ${schema.minimumTimestamp}`;
    if (IsNumber2(schema.multipleOfTimestamp))
      yield `(${value}.getTime() % ${schema.multipleOfTimestamp}) === 0`;
  }
  function* FromFunction8(schema, references, value) {
    yield `(typeof ${value} === 'function')`;
  }
  function* FromImport11(schema, references, value) {
    const members = globalThis.Object.getOwnPropertyNames(schema.$defs).reduce((result, key) => {
      return [...result, schema.$defs[key]];
    }, []);
    yield* Visit17(Ref(schema.$ref), [...references, ...members], value);
  }
  function* FromInteger6(schema, references, value) {
    yield `Number.isInteger(${value})`;
    if (IsNumber2(schema.exclusiveMaximum))
      yield `${value} < ${schema.exclusiveMaximum}`;
    if (IsNumber2(schema.exclusiveMinimum))
      yield `${value} > ${schema.exclusiveMinimum}`;
    if (IsNumber2(schema.maximum))
      yield `${value} <= ${schema.maximum}`;
    if (IsNumber2(schema.minimum))
      yield `${value} >= ${schema.minimum}`;
    if (IsNumber2(schema.multipleOf))
      yield `(${value} % ${schema.multipleOf}) === 0`;
  }
  function* FromIntersect19(schema, references, value) {
    const check1 = schema.allOf.map((schema2) => CreateExpression(schema2, references, value)).join(" && ");
    if (schema.unevaluatedProperties === false) {
      const keyCheck = CreateVariable(`${new RegExp(KeyOfPattern(schema))};`);
      const check2 = `Object.getOwnPropertyNames(${value}).every(key => ${keyCheck}.test(key))`;
      yield `(${check1} && ${check2})`;
    } else if (IsSchema2(schema.unevaluatedProperties)) {
      const keyCheck = CreateVariable(`${new RegExp(KeyOfPattern(schema))};`);
      const check2 = `Object.getOwnPropertyNames(${value}).every(key => ${keyCheck}.test(key) || ${CreateExpression(schema.unevaluatedProperties, references, `${value}[key]`)})`;
      yield `(${check1} && ${check2})`;
    } else {
      yield `(${check1})`;
    }
  }
  function* FromIterator8(schema, references, value) {
    yield `(typeof value === 'object' && Symbol.iterator in ${value})`;
  }
  function* FromLiteral7(schema, references, value) {
    if (typeof schema.const === "number" || typeof schema.const === "boolean") {
      yield `(${value} === ${schema.const})`;
    } else {
      yield `(${value} === '${LiteralString.Escape(schema.const)}')`;
    }
  }
  function* FromNever6(schema, references, value) {
    yield `false`;
  }
  function* FromNot8(schema, references, value) {
    const expression = CreateExpression(schema.not, references, value);
    yield `(!${expression})`;
  }
  function* FromNull6(schema, references, value) {
    yield `(${value} === null)`;
  }
  function* FromNumber6(schema, references, value) {
    yield Policy.IsNumberLike(value);
    if (IsNumber2(schema.exclusiveMaximum))
      yield `${value} < ${schema.exclusiveMaximum}`;
    if (IsNumber2(schema.exclusiveMinimum))
      yield `${value} > ${schema.exclusiveMinimum}`;
    if (IsNumber2(schema.maximum))
      yield `${value} <= ${schema.maximum}`;
    if (IsNumber2(schema.minimum))
      yield `${value} >= ${schema.minimum}`;
    if (IsNumber2(schema.multipleOf))
      yield `(${value} % ${schema.multipleOf}) === 0`;
  }
  function* FromObject19(schema, references, value) {
    yield Policy.IsObjectLike(value);
    if (IsNumber2(schema.minProperties))
      yield `Object.getOwnPropertyNames(${value}).length >= ${schema.minProperties}`;
    if (IsNumber2(schema.maxProperties))
      yield `Object.getOwnPropertyNames(${value}).length <= ${schema.maxProperties}`;
    const knownKeys = Object.getOwnPropertyNames(schema.properties);
    for (const knownKey of knownKeys) {
      const memberExpression = MemberExpression.Encode(value, knownKey);
      const property = schema.properties[knownKey];
      if (schema.required && schema.required.includes(knownKey)) {
        yield* Visit17(property, references, memberExpression);
        if (ExtendsUndefinedCheck(property) || IsAnyOrUnknown2(property))
          yield `('${knownKey}' in ${value})`;
      } else {
        const expression = CreateExpression(property, references, memberExpression);
        yield Policy.IsExactOptionalProperty(value, knownKey, expression);
      }
    }
    if (schema.additionalProperties === false) {
      if (schema.required && schema.required.length === knownKeys.length) {
        yield `Object.getOwnPropertyNames(${value}).length === ${knownKeys.length}`;
      } else {
        const keys = `[${knownKeys.map((key) => `'${key}'`).join(", ")}]`;
        yield `Object.getOwnPropertyNames(${value}).every(key => ${keys}.includes(key))`;
      }
    }
    if (typeof schema.additionalProperties === "object") {
      const expression = CreateExpression(schema.additionalProperties, references, `${value}[key]`);
      const keys = `[${knownKeys.map((key) => `'${key}'`).join(", ")}]`;
      yield `(Object.getOwnPropertyNames(${value}).every(key => ${keys}.includes(key) || ${expression}))`;
    }
  }
  function* FromPromise8(schema, references, value) {
    yield `${value} instanceof Promise`;
  }
  function* FromRecord14(schema, references, value) {
    yield Policy.IsRecordLike(value);
    if (IsNumber2(schema.minProperties))
      yield `Object.getOwnPropertyNames(${value}).length >= ${schema.minProperties}`;
    if (IsNumber2(schema.maxProperties))
      yield `Object.getOwnPropertyNames(${value}).length <= ${schema.maxProperties}`;
    const [patternKey, patternSchema] = Object.entries(schema.patternProperties)[0];
    const variable = CreateVariable(`${new RegExp(patternKey)}`);
    const check1 = CreateExpression(patternSchema, references, "value");
    const check2 = IsSchema2(schema.additionalProperties) ? CreateExpression(schema.additionalProperties, references, value) : schema.additionalProperties === false ? "false" : "true";
    const expression = `(${variable}.test(key) ? ${check1} : ${check2})`;
    yield `(Object.entries(${value}).every(([key, value]) => ${expression}))`;
  }
  function* FromRef15(schema, references, value) {
    const target = Deref(schema, references);
    if (state.functions.has(schema.$ref))
      return yield `${CreateFunctionName(schema.$ref)}(${value})`;
    yield* Visit17(target, references, value);
  }
  function* FromRegExp5(schema, references, value) {
    const variable = CreateVariable(`${new RegExp(schema.source, schema.flags)};`);
    yield `(typeof ${value} === 'string')`;
    if (IsNumber2(schema.maxLength))
      yield `${value}.length <= ${schema.maxLength}`;
    if (IsNumber2(schema.minLength))
      yield `${value}.length >= ${schema.minLength}`;
    yield `${variable}.test(${value})`;
  }
  function* FromString6(schema, references, value) {
    yield `(typeof ${value} === 'string')`;
    if (IsNumber2(schema.maxLength))
      yield `${value}.length <= ${schema.maxLength}`;
    if (IsNumber2(schema.minLength))
      yield `${value}.length >= ${schema.minLength}`;
    if (schema.pattern !== undefined) {
      const variable = CreateVariable(`${new RegExp(schema.pattern)};`);
      yield `${variable}.test(${value})`;
    }
    if (schema.format !== undefined) {
      yield `format('${schema.format}', ${value})`;
    }
  }
  function* FromSymbol6(schema, references, value) {
    yield `(typeof ${value} === 'symbol')`;
  }
  function* FromTemplateLiteral7(schema, references, value) {
    yield `(typeof ${value} === 'string')`;
    const variable = CreateVariable(`${new RegExp(schema.pattern)};`);
    yield `${variable}.test(${value})`;
  }
  function* FromThis11(schema, references, value) {
    yield `${CreateFunctionName(schema.$ref)}(${value})`;
  }
  function* FromTuple16(schema, references, value) {
    yield `Array.isArray(${value})`;
    if (schema.items === undefined)
      return yield `${value}.length === 0`;
    yield `(${value}.length === ${schema.maxItems})`;
    for (let i = 0;i < schema.items.length; i++) {
      const expression = CreateExpression(schema.items[i], references, `${value}[${i}]`);
      yield `${expression}`;
    }
  }
  function* FromUndefined6(schema, references, value) {
    yield `${value} === undefined`;
  }
  function* FromUnion21(schema, references, value) {
    const expressions = schema.anyOf.map((schema2) => CreateExpression(schema2, references, value));
    yield `(${expressions.join(" || ")})`;
  }
  function* FromUint8Array5(schema, references, value) {
    yield `${value} instanceof Uint8Array`;
    if (IsNumber2(schema.maxByteLength))
      yield `(${value}.length <= ${schema.maxByteLength})`;
    if (IsNumber2(schema.minByteLength))
      yield `(${value}.length >= ${schema.minByteLength})`;
  }
  function* FromUnknown5(schema, references, value) {
    yield "true";
  }
  function* FromVoid5(schema, references, value) {
    yield Policy.IsVoidLike(value);
  }
  function* FromKind4(schema, references, value) {
    const instance = state.instances.size;
    state.instances.set(instance, schema);
    yield `kind('${schema[Kind]}', ${instance}, ${value})`;
  }
  function* Visit17(schema, references, value, useHoisting = true) {
    const references_ = IsString2(schema.$id) ? [...references, schema] : references;
    const schema_ = schema;
    if (useHoisting && IsString2(schema.$id)) {
      const functionName = CreateFunctionName(schema.$id);
      if (state.functions.has(functionName)) {
        return yield `${functionName}(${value})`;
      } else {
        state.functions.set(functionName, "<deferred>");
        const functionCode = CreateFunction(functionName, schema, references, "value", false);
        state.functions.set(functionName, functionCode);
        return yield `${functionName}(${value})`;
      }
    }
    switch (schema_[Kind]) {
      case "Any":
        return yield* FromAny5(schema_, references_, value);
      case "Argument":
        return yield* FromArgument5(schema_, references_, value);
      case "Array":
        return yield* FromArray18(schema_, references_, value);
      case "AsyncIterator":
        return yield* FromAsyncIterator8(schema_, references_, value);
      case "BigInt":
        return yield* FromBigInt6(schema_, references_, value);
      case "Boolean":
        return yield* FromBoolean6(schema_, references_, value);
      case "Constructor":
        return yield* FromConstructor9(schema_, references_, value);
      case "Date":
        return yield* FromDate8(schema_, references_, value);
      case "Function":
        return yield* FromFunction8(schema_, references_, value);
      case "Import":
        return yield* FromImport11(schema_, references_, value);
      case "Integer":
        return yield* FromInteger6(schema_, references_, value);
      case "Intersect":
        return yield* FromIntersect19(schema_, references_, value);
      case "Iterator":
        return yield* FromIterator8(schema_, references_, value);
      case "Literal":
        return yield* FromLiteral7(schema_, references_, value);
      case "Never":
        return yield* FromNever6(schema_, references_, value);
      case "Not":
        return yield* FromNot8(schema_, references_, value);
      case "Null":
        return yield* FromNull6(schema_, references_, value);
      case "Number":
        return yield* FromNumber6(schema_, references_, value);
      case "Object":
        return yield* FromObject19(schema_, references_, value);
      case "Promise":
        return yield* FromPromise8(schema_, references_, value);
      case "Record":
        return yield* FromRecord14(schema_, references_, value);
      case "Ref":
        return yield* FromRef15(schema_, references_, value);
      case "RegExp":
        return yield* FromRegExp5(schema_, references_, value);
      case "String":
        return yield* FromString6(schema_, references_, value);
      case "Symbol":
        return yield* FromSymbol6(schema_, references_, value);
      case "TemplateLiteral":
        return yield* FromTemplateLiteral7(schema_, references_, value);
      case "This":
        return yield* FromThis11(schema_, references_, value);
      case "Tuple":
        return yield* FromTuple16(schema_, references_, value);
      case "Undefined":
        return yield* FromUndefined6(schema_, references_, value);
      case "Union":
        return yield* FromUnion21(schema_, references_, value);
      case "Uint8Array":
        return yield* FromUint8Array5(schema_, references_, value);
      case "Unknown":
        return yield* FromUnknown5(schema_, references_, value);
      case "Void":
        return yield* FromVoid5(schema_, references_, value);
      default:
        if (!exports_type2.Has(schema_[Kind]))
          throw new TypeCompilerUnknownTypeError(schema);
        return yield* FromKind4(schema_, references_, value);
    }
  }
  const state = {
    language: "javascript",
    functions: new Map,
    variables: new Map,
    instances: new Map
  };
  function CreateExpression(schema, references, value, useHoisting = true) {
    return `(${[...Visit17(schema, references, value, useHoisting)].join(" && ")})`;
  }
  function CreateFunctionName($id) {
    return `check_${Identifier.Encode($id)}`;
  }
  function CreateVariable(expression) {
    const variableName = `local_${state.variables.size}`;
    state.variables.set(variableName, `const ${variableName} = ${expression}`);
    return variableName;
  }
  function CreateFunction(name, schema, references, value, useHoisting = true) {
    const [newline, pad] = [`
`, (length) => "".padStart(length, " ")];
    const parameter = CreateParameter("value", "any");
    const returns = CreateReturns("boolean");
    const expression = [...Visit17(schema, references, value, useHoisting)].map((expression2) => `${pad(4)}${expression2}`).join(` &&${newline}`);
    return `function ${name}(${parameter})${returns} {${newline}${pad(2)}return (${newline}${expression}${newline}${pad(2)})
}`;
  }
  function CreateParameter(name, type) {
    const annotation = state.language === "typescript" ? `: ${type}` : "";
    return `${name}${annotation}`;
  }
  function CreateReturns(type) {
    return state.language === "typescript" ? `: ${type}` : "";
  }
  function Build(schema, references, options) {
    const functionCode = CreateFunction("check", schema, references, "value");
    const parameter = CreateParameter("value", "any");
    const returns = CreateReturns("boolean");
    const functions = [...state.functions.values()];
    const variables = [...state.variables.values()];
    const checkFunction = IsString2(schema.$id) ? `return function check(${parameter})${returns} {
  return ${CreateFunctionName(schema.$id)}(value)
}` : `return ${functionCode}`;
    return [...variables, ...functions, checkFunction].join(`
`);
  }
  function Code(...args) {
    const defaults = { language: "javascript" };
    const [schema, references, options] = args.length === 2 && IsArray2(args[1]) ? [args[0], args[1], defaults] : args.length === 2 && !IsArray2(args[1]) ? [args[0], [], args[1]] : args.length === 3 ? [args[0], args[1], args[2]] : args.length === 1 ? [args[0], [], defaults] : [null, [], defaults];
    state.language = options.language;
    state.variables.clear();
    state.functions.clear();
    state.instances.clear();
    if (!IsSchema2(schema))
      throw new TypeCompilerTypeGuardError(schema);
    for (const schema2 of references)
      if (!IsSchema2(schema2))
        throw new TypeCompilerTypeGuardError(schema2);
    return Build(schema, references, options);
  }
  TypeCompiler2.Code = Code;
  function Compile(schema, references = []) {
    const generatedCode = Code(schema, references, { language: "javascript" });
    const compiledFunction = globalThis.Function("kind", "format", "hash", generatedCode);
    const instances = new Map(state.instances);
    function typeRegistryFunction(kind, instance, value) {
      if (!exports_type2.Has(kind) || !instances.has(instance))
        return false;
      const checkFunc = exports_type2.Get(kind);
      const schema2 = instances.get(instance);
      return checkFunc(schema2, value);
    }
    function formatRegistryFunction(format, value) {
      if (!exports_format.Has(format))
        return false;
      const checkFunc = exports_format.Get(format);
      return checkFunc(value);
    }
    function hashFunction(value) {
      return Hash(value);
    }
    const checkFunction = compiledFunction(typeRegistryFunction, formatRegistryFunction, hashFunction);
    return new TypeCheck(schema, references, checkFunction, generatedCode);
  }
  TypeCompiler2.Compile = Compile;
})(TypeCompiler || (TypeCompiler = {}));

// node_modules/elysia/dist/index.mjs
var import_cookie = __toESM(require_dist(), 1);
var import_fast_decode_uri_component2 = __toESM(require_fast_decode_uri_component(), 1);
var import_fast_decode_uri_component3 = __toESM(require_fast_decode_uri_component(), 1);
var import_fast_decode_uri_component4 = __toESM(require_fast_decode_uri_component(), 1);

// node_modules/exact-mirror/dist/index.mjs
var Kind2 = Symbol.for("TypeBox.Kind");
var Hint2 = Symbol.for("TypeBox.Hint");
var isSpecialProperty = (name) => /(\ |-|\t|\n|\.)/.test(name) || !isNaN(+name[0]);
var joinProperty = (v1, v2, isOptional = false) => {
  if (typeof v2 === "number")
    return `${v1}[${v2}]`;
  if (isSpecialProperty(v2))
    return `${v1}${isOptional ? "?." : ""}["${v2}"]`;
  return `${v1}${isOptional ? "?" : ""}.${v2}`;
};
var encodeProperty = (v) => isSpecialProperty(v) ? `"${v}"` : v;
var sanitize = (key, sanitize2 = 0, schema) => {
  if (schema.type !== "string" || schema.const || schema.trusted)
    return key;
  let hof = "";
  for (let i = sanitize2 - 1;i >= 0; i--)
    hof += `d.h${i}(`;
  return hof + key + ")".repeat(sanitize2);
};
var mergeObjectIntersection = (schema) => {
  if (!schema.allOf || Kind2 in schema && (schema[Kind2] !== "Intersect" || schema.type !== "object"))
    return schema;
  const { allOf, ...newSchema } = schema;
  newSchema.properties = {};
  if (Kind2 in newSchema)
    newSchema[Kind2] = "Object";
  for (const type of allOf) {
    if (type.type !== "object")
      continue;
    const { properties, required, type: _, [Kind2]: __, ...rest } = type;
    if (required)
      newSchema.required = newSchema.required ? newSchema.required.concat(required) : required;
    Object.assign(newSchema, rest);
    for (const property in type.properties)
      newSchema.properties[property] = mergeObjectIntersection(type.properties[property]);
  }
  return newSchema;
};
var handleRecord = (schema, property, instruction) => {
  const child = schema.patternProperties["^(.*)$"] ?? schema.patternProperties[Object.keys(schema.patternProperties)[0]];
  if (!child)
    return property;
  const i = instruction.array;
  instruction.array++;
  let v = `(()=>{const ar${i}s=Object.keys(${property}),ar${i}v={};for(let i=0;i<ar${i}s.length;i++){const ar${i}p=${property}[ar${i}s[i]];ar${i}v[ar${i}s[i]]=${mirror(child, `ar${i}p`, instruction)}`;
  const optionals = instruction.optionalsInArray[i + 1];
  if (optionals)
    for (let oi = 0;oi < optionals.length; oi++) {
      const target = `ar${i}v[ar${i}s[i]].${optionals[oi]}`;
      v += `;if(${target}===undefined)delete ${target}`;
    }
  v += `}return ar${i}v})()`;
  return v;
};
var handleTuple = (schema, property, instruction) => {
  const i = instruction.array;
  instruction.array++;
  const isRoot = property === "v" && !instruction.unions.length;
  let v = "";
  if (!isRoot)
    v = `(()=>{`;
  v += `const ar${i}v=[`;
  for (let i2 = 0;i2 < schema.length; i2++) {
    if (i2 !== 0)
      v += ",";
    v += mirror(schema[i2], joinProperty(property, i2, instruction.parentIsOptional), instruction);
  }
  v += `];`;
  if (!isRoot)
    v += `return ar${i}v})()`;
  return v;
};
function deepClone(source, weak = /* @__PURE__ */ new WeakMap) {
  if (source === null || typeof source !== "object" || typeof source === "function")
    return source;
  if (weak.has(source))
    return weak.get(source);
  if (Array.isArray(source)) {
    const copy = new Array(source.length);
    weak.set(source, copy);
    for (let i = 0;i < source.length; i++)
      copy[i] = deepClone(source[i], weak);
    return copy;
  }
  if (typeof source === "object") {
    const keys = Object.keys(source).concat(Object.getOwnPropertySymbols(source));
    const cloned = {};
    for (const key of keys)
      cloned[key] = deepClone(source[key], weak);
    return cloned;
  }
  return source;
}
var handleUnion = (schemas, property, instruction) => {
  if (instruction.TypeCompiler === undefined) {
    if (!instruction.typeCompilerWanred) {
      console.warn(new Error("[exact-mirror] TypeBox's TypeCompiler is required to use Union"));
      instruction.typeCompilerWanred = true;
    }
    return property;
  }
  instruction.unionKeys[property] = 1;
  const ui = instruction.unions.length;
  const typeChecks = instruction.unions[ui] = [];
  let v = `(()=>{
`;
  const unwrapRef = (type) => {
    if (!(Kind2 in type) || !type.$ref)
      return type;
    if (type[Kind2] === "This") {
      return deepClone(instruction.definitions[type.$ref]);
    } else if (type[Kind2] === "Ref") {
      if (!instruction.modules)
        console.warn(new Error("[exact-mirror] modules is required when using nested cyclic reference"));
      else
        return instruction.modules.Import(type.$ref);
    }
    return type;
  };
  for (let i = 0;i < schemas.length; i++) {
    let type = unwrapRef(schemas[i]);
    if (Array.isArray(type.anyOf))
      for (let i2 = 0;i2 < type.anyOf.length; i2++)
        type.anyOf[i2] = unwrapRef(type.anyOf[i2]);
    else if (type.items) {
      if (Array.isArray(type.items))
        for (let i2 = 0;i2 < type.items.length; i2++)
          type.items[i2] = unwrapRef(type.items[i2]);
      else
        type.items = unwrapRef(type.items);
    }
    typeChecks.push(TypeCompiler.Compile(type));
    v += `if(d.unions[${ui}][${i}].Check(${property})){return ${mirror(type, property, {
      ...instruction,
      recursion: instruction.recursion + 1,
      parentIsOptional: true
    })}}
`;
  }
  v += `return ${instruction.removeUnknownUnionType ? "undefined" : property}})()`;
  return v;
};
var mirror = (schema, property, instruction) => {
  if (!schema)
    return "";
  const isRoot = property === "v" && !instruction.unions.length;
  if (Kind2 in schema && schema[Kind2] === "Import" && schema.$ref in schema.$defs)
    return mirror(schema.$defs[schema.$ref], property, {
      ...instruction,
      definitions: Object.assign(instruction.definitions, schema.$defs)
    });
  if (isRoot && schema.type !== "object" && schema.type !== "array" && !schema.anyOf)
    return `return ${sanitize("v", instruction.sanitize?.length, schema)}`;
  if (instruction.recursion >= instruction.recursionLimit)
    return property;
  let v = "";
  if (schema.$id && Hint2 in schema)
    instruction.definitions[schema.$id] = schema;
  switch (schema.type) {
    case "object":
      if (schema[Kind2] === "Record") {
        v = handleRecord(schema, property, instruction);
        break;
      }
      schema = mergeObjectIntersection(schema);
      v += "{";
      if (schema.additionalProperties)
        v += `...${property},`;
      const keys = Object.keys(schema.properties);
      for (let i2 = 0;i2 < keys.length; i2++) {
        const key = keys[i2];
        let isOptional = !schema.required || schema.required && !schema.required.includes(key) || Array.isArray(schema.properties[key].anyOf);
        const name = joinProperty(property, key, instruction.parentIsOptional);
        if (isOptional) {
          const index = instruction.array;
          if (property.startsWith("ar")) {
            const refName = name.slice(name.indexOf(".") + 1);
            const array = instruction.optionalsInArray;
            if (array[index])
              array[index].push(refName);
            else
              array[index] = [refName];
          } else {
            instruction.optionals.push(name);
          }
        }
        const child = schema.properties[key];
        if (i2 !== 0)
          v += ",";
        v += `${encodeProperty(key)}:${isOptional ? `${name}===undefined?undefined:` : ""}${mirror(child, name, {
          ...instruction,
          recursion: instruction.recursion + 1,
          parentIsOptional: isOptional
        })}`;
      }
      v += "}";
      break;
    case "array":
      if (schema.items.type !== "object" && schema.items.type !== "array") {
        if (Array.isArray(schema.items)) {
          v = handleTuple(schema.items, property, instruction);
          break;
        } else if (isRoot)
          return "return v";
        else if (Kind2 in schema.items && schema.items.$ref && (schema.items[Kind2] === "Ref" || schema.items[Kind2] === "This"))
          v = mirror(deepClone(instruction.definitions[schema.items.$ref]), property, {
            ...instruction,
            parentIsOptional: true,
            recursion: instruction.recursion + 1
          });
        else {
          v = property;
          break;
        }
      }
      const i = instruction.array;
      instruction.array++;
      let reference = property;
      if (isRoot)
        v = `const ar${i}v=new Array(${property}.length);`;
      else {
        reference = `ar${i}s`;
        v = `((${reference})=>{const ar${i}v=new Array(${reference}.length);`;
      }
      v += `for(let i=0;i<${reference}.length;i++){const ar${i}p=${reference}[i];ar${i}v[i]=${mirror(schema.items, `ar${i}p`, instruction)}`;
      const optionals = instruction.optionalsInArray[i + 1];
      if (optionals) {
        for (let oi = 0;oi < optionals.length; oi++) {
          const target = `ar${i}v[i].${optionals[oi]}`;
          v += `;if(${target}===undefined)delete ${target}`;
        }
      }
      v += `}`;
      if (!isRoot)
        v += `return ar${i}v})(${property})`;
      break;
    default:
      if (schema.$ref && schema.$ref in instruction.definitions)
        return mirror(instruction.definitions[schema.$ref], property, instruction);
      if (Array.isArray(schema.anyOf)) {
        v = handleUnion(schema.anyOf, property, instruction);
        break;
      }
      v = sanitize(property, instruction.sanitize?.length, schema);
      break;
  }
  if (!isRoot)
    return v;
  if (schema.type === "array") {
    v = `${v}const x=ar0v;`;
  } else {
    v = `const x=${v}
`;
  }
  for (let i = 0;i < instruction.optionals.length; i++) {
    const key = instruction.optionals[i];
    const prop = key.slice(1);
    v += `if(${key}===undefined`;
    if (instruction.unionKeys[key])
      v += `||x${prop}===undefined`;
    const shouldQuestion = prop.charCodeAt(0) !== 63 && schema.type !== "array";
    v += `)delete x${shouldQuestion ? prop.charCodeAt(0) === 91 ? "?." : "?" : ""}${prop}
`;
  }
  return `${v}return x`;
};
var createMirror = (schema, {
  TypeCompiler: TypeCompiler2,
  modules,
  definitions,
  sanitize: sanitize2,
  recursionLimit = 8,
  removeUnknownUnionType = false
} = {}) => {
  const unions = [];
  if (typeof sanitize2 === "function")
    sanitize2 = [sanitize2];
  const f = mirror(schema, "v", {
    optionals: [],
    optionalsInArray: [],
    array: 0,
    parentIsOptional: false,
    unions,
    unionKeys: {},
    TypeCompiler: TypeCompiler2,
    modules,
    definitions: definitions ?? modules?.$defs ?? {},
    sanitize: sanitize2,
    recursion: 0,
    recursionLimit,
    removeUnknownUnionType
  });
  if (!unions.length && !sanitize2?.length)
    return Function("v", f);
  let hof;
  if (sanitize2?.length) {
    hof = {};
    for (let i = 0;i < sanitize2.length; i++)
      hof[`h${i}`] = sanitize2[i];
  }
  return Function("d", `return function mirror(v){${f}}`)({
    unions,
    ...hof
  });
};

// node_modules/elysia/dist/index.mjs
var createNode = (part, inert) => {
  let inertMap = inert?.length ? {} : null;
  if (inertMap)
    for (let child of inert)
      inertMap[child.part.charCodeAt(0)] = child;
  return {
    part,
    store: null,
    inert: inertMap,
    params: null,
    wildcardStore: null
  };
};
var cloneNode = (node, part) => ({
  ...node,
  part
});
var createParamNode = (name) => ({
  name,
  store: null,
  inert: null
});
var Memoirist = class _Memoirist {
  constructor(config = {}) {
    this.config = config, config.lazy && (this.find = this.lazyFind), config.onParam && !Array.isArray(config.onParam) && (this.config.onParam = [
      this.config.onParam
    ]);
  }
  root = {};
  history = [];
  deferred = [];
  static regex = {
    static: /:.+?(?=\/|$)/,
    params: /:.+?(?=\/|$)/g,
    optionalParams: /(\/:\w+\?)/g
  };
  lazyFind = (method, url) => this.config.lazy ? (this.build(), this.find(method, url)) : this.find;
  build() {
    if (this.config.lazy) {
      for (let [method, path3, store] of this.deferred)
        this.add(method, path3, store, { lazy: false, ignoreHistory: true });
      this.deferred = [], this.find = (method, url) => {
        let root = this.root[method];
        return root ? matchRoute(url, url.length, root, 0, this.config.onParam) : null;
      };
    }
  }
  add(method, path3, store, {
    ignoreError = false,
    ignoreHistory = false,
    lazy = this.config.lazy
  } = {}) {
    if (lazy)
      return this.find = this.lazyFind, this.deferred.push([method, path3, store]), store;
    if (typeof path3 != "string")
      throw new TypeError("Route path must be a string");
    path3 === "" ? path3 = "/" : path3[0] !== "/" && (path3 = `/${path3}`);
    let isWildcard = path3[path3.length - 1] === "*", optionalParams = path3.match(_Memoirist.regex.optionalParams);
    if (optionalParams) {
      let originalPath = path3.replaceAll("?", "");
      this.add(method, originalPath, store, {
        ignoreError,
        ignoreHistory,
        lazy
      });
      for (let i = 0;i < optionalParams.length; i++) {
        let newPath = path3.replace(optionalParams[i], "");
        this.add(method, newPath, store, {
          ignoreError: true,
          ignoreHistory,
          lazy
        });
      }
      return store;
    }
    if (optionalParams && (path3 = path3.replaceAll("?", "")), this.history.find(([m, p, s]) => m === method && p === path3))
      return store;
    (isWildcard || optionalParams && path3.charCodeAt(path3.length - 1) === 63) && (path3 = path3.slice(0, -1)), ignoreHistory || this.history.push([method, path3, store]);
    let inertParts = path3.split(_Memoirist.regex.static), paramParts = path3.match(_Memoirist.regex.params) || [];
    inertParts[inertParts.length - 1] === "" && inertParts.pop();
    let node;
    this.root[method] ? node = this.root[method] : node = this.root[method] = createNode("/");
    let paramPartsIndex = 0;
    for (let i = 0;i < inertParts.length; ++i) {
      let part = inertParts[i];
      if (i > 0) {
        let param = paramParts[paramPartsIndex++].slice(1);
        if (node.params === null)
          node.params = createParamNode(param);
        else if (node.params.name !== param) {
          if (ignoreError)
            return store;
          throw new Error(`Cannot create route "${path3}" with parameter "${param}" because a route already exists with a different parameter name ("${node.params.name}") in the same location`);
        }
        let params = node.params;
        if (params.inert === null) {
          node = params.inert = createNode(part);
          continue;
        }
        node = params.inert;
      }
      for (let j = 0;; ) {
        if (j === part.length) {
          if (j < node.part.length) {
            let childNode = cloneNode(node, node.part.slice(j));
            Object.assign(node, createNode(part, [childNode]));
          }
          break;
        }
        if (j === node.part.length) {
          node.inert === null && (node.inert = {});
          let inert = node.inert[part.charCodeAt(j)];
          if (inert) {
            node = inert, part = part.slice(j), j = 0;
            continue;
          }
          let childNode = createNode(part.slice(j));
          node.inert[part.charCodeAt(j)] = childNode, node = childNode;
          break;
        }
        if (part[j] !== node.part[j]) {
          let existingChild = cloneNode(node, node.part.slice(j)), newChild = createNode(part.slice(j));
          Object.assign(node, createNode(node.part.slice(0, j), [
            existingChild,
            newChild
          ])), node = newChild;
          break;
        }
        ++j;
      }
    }
    if (paramPartsIndex < paramParts.length) {
      let name = paramParts[paramPartsIndex].slice(1);
      if (node.params === null)
        node.params = createParamNode(name);
      else if (node.params.name !== name) {
        if (ignoreError)
          return store;
        throw new Error(`Cannot create route "${path3}" with parameter "${name}" because a route already exists with a different parameter name ("${node.params.name}") in the same location`);
      }
      return node.params.store === null && (node.params.store = store), node.params.store;
    }
    return isWildcard ? (node.wildcardStore === null && (node.wildcardStore = store), node.wildcardStore) : (node.store === null && (node.store = store), node.store);
  }
  find(method, url) {
    let root = this.root[method];
    return root ? matchRoute(url, url.length, root, 0, this.config.onParam) : null;
  }
};
var matchRoute = (url, urlLength, node, startIndex, onParam) => {
  let part = node.part, length = part.length, endIndex = startIndex + length;
  if (length > 1) {
    if (endIndex > urlLength)
      return null;
    if (length < 15) {
      for (let i = 1, j = startIndex + 1;i < length; ++i, ++j)
        if (part.charCodeAt(i) !== url.charCodeAt(j))
          return null;
    } else if (url.slice(startIndex, endIndex) !== part)
      return null;
  }
  if (endIndex === urlLength)
    return node.store !== null ? {
      store: node.store,
      params: {}
    } : node.wildcardStore !== null ? {
      store: node.wildcardStore,
      params: { "*": "" }
    } : null;
  if (node.inert !== null) {
    let inert = node.inert[url.charCodeAt(endIndex)];
    if (inert !== undefined) {
      let route = matchRoute(url, urlLength, inert, endIndex, onParam);
      if (route !== null)
        return route;
    }
  }
  if (node.params !== null) {
    let { store, name, inert } = node.params, slashIndex = url.indexOf("/", endIndex);
    if (slashIndex !== endIndex) {
      if (slashIndex === -1 || slashIndex >= urlLength) {
        if (store !== null) {
          let params = {};
          if (params[name] = url.substring(endIndex, urlLength), onParam)
            for (let i = 0;i < onParam.length; i++) {
              let temp = onParam[i](params[name], name);
              temp !== undefined && (params[name] = temp);
            }
          return {
            store,
            params
          };
        }
      } else if (inert !== null) {
        let route = matchRoute(url, urlLength, inert, slashIndex, onParam);
        if (route !== null) {
          if (route.params[name] = url.substring(endIndex, slashIndex), onParam)
            for (let i = 0;i < onParam.length; i++) {
              let temp = onParam[i](route.params[name], name);
              temp !== undefined && (route.params[name] = temp);
            }
          return route;
        }
      }
    }
  }
  return node.wildcardStore !== null ? {
    store: node.wildcardStore,
    params: {
      "*": url.substring(endIndex, urlLength)
    }
  } : null;
};
var fullFormats = {
  date,
  time: getTime(true),
  "date-time": getDateTime(true),
  "iso-time": getTime(false),
  "iso-date-time": getDateTime(false),
  duration: /^P(?!$)((\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+S)?)?|(\d+W)?)$/,
  uri,
  "uri-reference": /^(?:[a-z][a-z0-9+\-.]*:)?(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'"()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?(?:\?(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i,
  "uri-template": /^(?:(?:[^\x00-\x20"'<>%\\^`{|}]|%[0-9a-f]{2})|\{[+#./;?&=,!@|]?(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?(?:,(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?)*\})*$/i,
  url: /^(?:https?|ftp):\/\/(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u{00a1}-\u{ffff}]+-)*[a-z0-9\u{00a1}-\u{ffff}]+)(?:\.(?:[a-z0-9\u{00a1}-\u{ffff}]+-)*[a-z0-9\u{00a1}-\u{ffff}]+)*(?:\.(?:[a-z\u{00a1}-\u{ffff}]{2,})))(?::\d{2,5})?(?:\/[^\s]*)?$/iu,
  email: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i,
  hostname: /^(?=.{1,253}\.?$)[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[-0-9a-z]{0,61}[0-9a-z])?)*\.?$/i,
  ipv4: /^(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)$/,
  ipv6: /^((([0-9a-f]{1,4}:){7}([0-9a-f]{1,4}|:))|(([0-9a-f]{1,4}:){6}(:[0-9a-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9a-f]{1,4}:){5}(((:[0-9a-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9a-f]{1,4}:){4}(((:[0-9a-f]{1,4}){1,3})|((:[0-9a-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){3}(((:[0-9a-f]{1,4}){1,4})|((:[0-9a-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){2}(((:[0-9a-f]{1,4}){1,5})|((:[0-9a-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){1}(((:[0-9a-f]{1,4}){1,6})|((:[0-9a-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9a-f]{1,4}){1,7})|((:[0-9a-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))$/i,
  regex,
  uuid: /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i,
  "json-pointer": /^(?:\/(?:[^~/]|~0|~1)*)*$/,
  "json-pointer-uri-fragment": /^#(?:\/(?:[a-z0-9_\-.!$&'()*+,;:=@]|%[0-9a-f]{2}|~0|~1)*)*$/i,
  "relative-json-pointer": /^(?:0|[1-9][0-9]*)(?:#|(?:\/(?:[^~/]|~0|~1)*)*)$/,
  byte,
  int32: { type: "number", validate: validateInt32 },
  int64: { type: "number", validate: validateInt64 },
  float: { type: "number", validate: validateNumber },
  double: { type: "number", validate: validateNumber },
  password: true,
  binary: true
};
function isLeapYear(year) {
  return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
}
var DATE = /^(\d\d\d\d)-(\d\d)-(\d\d)$/;
var DAYS = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function date(str) {
  let matches = DATE.exec(str);
  if (!matches)
    return false;
  let year = +matches[1], month = +matches[2], day = +matches[3];
  return month >= 1 && month <= 12 && day >= 1 && day <= (month === 2 && isLeapYear(year) ? 29 : DAYS[month]);
}
var TIME = /^(\d\d):(\d\d):(\d\d(?:\.\d+)?)(z|([+-])(\d\d)(?::?(\d\d))?)?$/i;
function getTime(strictTimeZone) {
  return function(str) {
    let matches = TIME.exec(str);
    if (!matches)
      return false;
    let hr = +matches[1], min = +matches[2], sec = +matches[3], tz = matches[4], tzSign = matches[5] === "-" ? -1 : 1, tzH = +(matches[6] || 0), tzM = +(matches[7] || 0);
    if (tzH > 23 || tzM > 59 || strictTimeZone && !tz)
      return false;
    if (hr <= 23 && min <= 59 && sec < 60)
      return true;
    let utcMin = min - tzM * tzSign, utcHr = hr - tzH * tzSign - (utcMin < 0 ? 1 : 0);
    return (utcHr === 23 || utcHr === -1) && (utcMin === 59 || utcMin === -1) && sec < 61;
  };
}
var parseDateTimeEmptySpace = (str) => str.charCodeAt(str.length - 6) === 32 ? str.slice(0, -6) + "+" + str.slice(-5) : str;
var DATE_TIME_SEPARATOR = /t|\s/i;
function getDateTime(strictTimeZone) {
  let time = getTime(strictTimeZone);
  return function(str) {
    let dateTime = str.split(DATE_TIME_SEPARATOR);
    return dateTime.length === 2 && date(dateTime[0]) && time(dateTime[1]);
  };
}
var NOT_URI_FRAGMENT = /\/|:/;
var URI = /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)(?:\?(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i;
function uri(str) {
  return NOT_URI_FRAGMENT.test(str) && URI.test(str);
}
var BYTE = /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/gm;
function byte(str) {
  return BYTE.lastIndex = 0, BYTE.test(str);
}
var MIN_INT32 = -(2 ** 31);
var MAX_INT32 = 2 ** 31 - 1;
function validateInt32(value) {
  return Number.isInteger(value) && value <= MAX_INT32 && value >= MIN_INT32;
}
function validateInt64(value) {
  return Number.isInteger(value);
}
function validateNumber() {
  return true;
}
var Z_ANCHOR = /[^\\]\\Z/;
function regex(str) {
  if (Z_ANCHOR.test(str))
    return false;
  try {
    return new RegExp(str), true;
  } catch {
    return false;
  }
}
var isISO8601 = /(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))/;
var isFormalDate = /(?:Sun|Mon|Tue|Wed|Thu|Fri|Sat)\s(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s\d{2}\s\d{4}\s\d{2}:\d{2}:\d{2}\sGMT(?:\+|-)\d{4}\s\([^)]+\)/;
var isShortenDate = /^(?:(?:(?:(?:0?[1-9]|[12][0-9]|3[01])[/\s-](?:0?[1-9]|1[0-2])[/\s-](?:19|20)\d{2})|(?:(?:19|20)\d{2}[/\s-](?:0?[1-9]|1[0-2])[/\s-](?:0?[1-9]|[12][0-9]|3[01]))))(?:\s(?:1[012]|0?[1-9]):[0-5][0-9](?::[0-5][0-9])?(?:\s[AP]M)?)?$/;
var _validateDate = fullFormats.date;
var _validateDateTime = fullFormats["date-time"];
exports_format.Has("date") || exports_format.Set("date", (value) => {
  let temp = parseDateTimeEmptySpace(value).replace(/"/g, "");
  if (isISO8601.test(temp) || isFormalDate.test(temp) || isShortenDate.test(temp) || _validateDate(temp)) {
    let date2 = new Date(temp);
    if (!Number.isNaN(date2.getTime()))
      return true;
  }
  return false;
});
exports_format.Has("date-time") || exports_format.Set("date-time", (value) => {
  let temp = value.replace(/"/g, "");
  if (isISO8601.test(temp) || isFormalDate.test(temp) || isShortenDate.test(temp) || _validateDateTime(temp)) {
    let date2 = new Date(temp);
    if (!Number.isNaN(date2.getTime()))
      return true;
  }
  return false;
});
Object.entries(fullFormats).forEach((formatEntry) => {
  let [formatName, formatValue] = formatEntry;
  exports_format.Has(formatName) || (formatValue instanceof RegExp ? exports_format.Set(formatName, (value) => formatValue.test(value)) : typeof formatValue == "function" && exports_format.Set(formatName, formatValue));
});
exports_format.Has("numeric") || exports_format.Set("numeric", (value) => !!value && !isNaN(+value));
exports_format.Has("integer") || exports_format.Set("integer", (value) => !!value && Number.isInteger(+value));
exports_format.Has("boolean") || exports_format.Set("boolean", (value) => value === "true" || value === "false");
exports_format.Has("ObjectString") || exports_format.Set("ObjectString", (value) => {
  let start = value.charCodeAt(0);
  if ((start === 9 || start === 10 || start === 32) && (start = value.trimStart().charCodeAt(0)), start !== 123 && start !== 91)
    return false;
  try {
    return JSON.parse(value), true;
  } catch {
    return false;
  }
});
exports_format.Has("ArrayString") || exports_format.Set("ArrayString", (value) => {
  let start = value.charCodeAt(0);
  if ((start === 9 || start === 10 || start === 32) && (start = value.trimStart().charCodeAt(0)), start !== 123 && start !== 91)
    return false;
  try {
    return JSON.parse(value), true;
  } catch {
    return false;
  }
});
var isBun = typeof Bun < "u";
var mime = {
  aac: "audio/aac",
  abw: "application/x-abiword",
  ai: "application/postscript",
  arc: "application/octet-stream",
  avi: "video/x-msvideo",
  azw: "application/vnd.amazon.ebook",
  bin: "application/octet-stream",
  bz: "application/x-bzip",
  bz2: "application/x-bzip2",
  csh: "application/x-csh",
  css: "text/css",
  csv: "text/csv",
  doc: "application/msword",
  dll: "application/octet-stream",
  eot: "application/vnd.ms-fontobject",
  epub: "application/epub+zip",
  gif: "image/gif",
  htm: "text/html",
  html: "text/html",
  ico: "image/x-icon",
  ics: "text/calendar",
  jar: "application/java-archive",
  jpeg: "image/jpeg",
  jpg: "image/jpeg",
  js: "application/javascript",
  json: "application/json",
  mid: "audio/midi",
  midi: "audio/midi",
  mp2: "audio/mpeg",
  mp3: "audio/mpeg",
  mp4: "video/mp4",
  mpa: "video/mpeg",
  mpe: "video/mpeg",
  mpeg: "video/mpeg",
  mpkg: "application/vnd.apple.installer+xml",
  odp: "application/vnd.oasis.opendocument.presentation",
  ods: "application/vnd.oasis.opendocument.spreadsheet",
  odt: "application/vnd.oasis.opendocument.text",
  oga: "audio/ogg",
  ogv: "video/ogg",
  ogx: "application/ogg",
  otf: "font/otf",
  png: "image/png",
  pdf: "application/pdf",
  ppt: "application/vnd.ms-powerpoint",
  rar: "application/x-rar-compressed",
  rtf: "application/rtf",
  sh: "application/x-sh",
  svg: "image/svg+xml",
  swf: "application/x-shockwave-flash",
  tar: "application/x-tar",
  tif: "image/tiff",
  tiff: "image/tiff",
  ts: "application/typescript",
  ttf: "font/ttf",
  txt: "text/plain",
  vsd: "application/vnd.visio",
  wav: "audio/x-wav",
  weba: "audio/webm",
  webm: "video/webm",
  webp: "image/webp",
  woff: "font/woff",
  woff2: "font/woff2",
  xhtml: "application/xhtml+xml",
  xls: "application/vnd.ms-excel",
  xlsx: "application/vnd.ms-excel",
  xlsx_OLD: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  xml: "application/xml",
  xul: "application/vnd.mozilla.xul+xml",
  zip: "application/zip",
  "3gp": "video/3gpp",
  "3gp_DOES_NOT_CONTAIN_VIDEO": "audio/3gpp",
  "3gp2": "video/3gpp2",
  "3gp2_DOES_NOT_CONTAIN_VIDEO": "audio/3gpp2",
  "7z": "application/x-7z-compressed"
};
var getFileExtension = (path3) => {
  let index = path3.lastIndexOf(".");
  return index === -1 ? "" : path3.slice(index + 1);
};
var createReadStream;
var stat;
var ElysiaFile = class {
  constructor(path3) {
    this.path = path3;
    if (isBun)
      this.value = Bun.file(path3);
    else {
      if (!createReadStream || !stat) {
        if (typeof window < "u") {
          console.warn("Browser environment does not support file");
          return;
        }
        let warnMissing = (name) => console.warn(new Error(`[elysia] \`file\` require \`fs${name ? "." + name : ""}\` ${name?.includes(".") ? "module " : ""}which is not available in this environment`));
        if (typeof process > "u" || typeof process.getBuiltinModule != "function") {
          warnMissing();
          return;
        }
        let fs = process.getBuiltinModule("fs");
        if (!fs) {
          warnMissing();
          return;
        }
        if (typeof fs.createReadStream != "function") {
          warnMissing();
          return;
        }
        if (typeof fs.promises?.stat != "function") {
          warnMissing();
          return;
        }
        createReadStream = fs.createReadStream, stat = fs.promises.stat;
      }
      this.value = createReadStream(path3), this.stats = stat(path3);
    }
  }
  get type() {
    return mime[getFileExtension(this.path)] || "application/octet-stream";
  }
  get length() {
    return isBun ? this.value.size : this.stats?.then((x) => x.size) ?? 0;
  }
};
var hasHeaderShorthand = "toJSON" in new Headers;
var replaceUrlPath = (url, pathname) => {
  let urlObject = new URL(url);
  return urlObject.pathname = pathname, urlObject.toString();
};
var isClass = (v) => typeof v == "function" && /^\s*class\s+/.test(v.toString()) || v.toString && v.toString().startsWith("[object ") && v.toString() !== "[object Object]" || isNotEmpty(Object.getPrototypeOf(v));
var isObject = (item) => item && typeof item == "object" && !Array.isArray(item);
var mergeDeep = (target, source, options) => {
  let skipKeys = options?.skipKeys, override = options?.override ?? true, mergeArray = options?.mergeArray ?? false;
  if (!isObject(target) || !isObject(source))
    return target;
  for (let [key, value] of Object.entries(source))
    if (!skipKeys?.includes(key)) {
      if (mergeArray && Array.isArray(value)) {
        target[key] = Array.isArray(target[key]) ? [...target[key], ...value] : target[key] = value;
        continue;
      }
      if (!isObject(value) || !(key in target) || isClass(value)) {
        if ((override || !(key in target)) && !Object.isFrozen(target))
          try {
            target[key] = value;
          } catch {}
        continue;
      }
      if (!Object.isFrozen(target[key]))
        try {
          target[key] = mergeDeep(target[key], value, { skipKeys, override, mergeArray });
        } catch {}
    }
  return target;
};
var mergeCookie = (a, b) => {
  let v = mergeDeep(Object.assign({}, a), b, {
    skipKeys: ["properties"],
    mergeArray: false
  });
  return v.properties && delete v.properties, v;
};
var mergeObjectArray = (a, b) => {
  if (!b)
    return a;
  let array = [], checksums = [];
  if (a) {
    Array.isArray(a) || (a = [a]);
    for (let item of a)
      array.push(item), item.checksum && checksums.push(item.checksum);
  }
  if (b) {
    Array.isArray(b) || (b = [b]);
    for (let item of b)
      checksums.includes(item.checksum) || array.push(item);
  }
  return array;
};
var primitiveHooks = [
  "start",
  "request",
  "parse",
  "transform",
  "resolve",
  "beforeHandle",
  "afterHandle",
  "mapResponse",
  "afterResponse",
  "trace",
  "error",
  "stop",
  "body",
  "headers",
  "params",
  "query",
  "response",
  "type",
  "detail"
];
var primitiveHookMap = primitiveHooks.reduce((acc, x) => (acc[x] = true, acc), {});
var isRecordNumber = (x) => typeof x == "object" && Object.keys(x).every((x2) => !isNaN(+x2));
var mergeResponse = (a, b) => isRecordNumber(a) && isRecordNumber(b) ? Object.assign({}, a, b) : a && !isRecordNumber(a) && isRecordNumber(b) ? Object.assign({ 200: a }, b) : b ?? a;
var mergeSchemaValidator = (a, b) => !a && !b ? {
  body: undefined,
  headers: undefined,
  params: undefined,
  query: undefined,
  cookie: undefined,
  response: undefined
} : {
  body: b?.body ?? a?.body,
  headers: b?.headers ?? a?.headers,
  params: b?.params ?? a?.params,
  query: b?.query ?? a?.query,
  cookie: b?.cookie ?? a?.cookie,
  response: mergeResponse(a?.response, b?.response)
};
var mergeHook = (a, b) => {
  if (!b)
    return a ?? {};
  if (!a)
    return b ?? {};
  if (!Object.values(b).find((x) => x != null))
    return { ...a };
  let hook = {
    ...a,
    ...b,
    body: b.body ?? a.body,
    headers: b.headers ?? a.headers,
    params: b.params ?? a.params,
    query: b.query ?? a.query,
    cookie: b.cookie ?? a.cookie,
    response: mergeResponse(a.response, b.response),
    type: a.type || b.type,
    detail: mergeDeep(b.detail ?? {}, a.detail ?? {}),
    parse: mergeObjectArray(a.parse, b.parse),
    transform: mergeObjectArray(a.transform, b.transform),
    beforeHandle: mergeObjectArray(mergeObjectArray(fnToContainer(a.resolve, "resolve"), a.beforeHandle), mergeObjectArray(fnToContainer(b.resolve, "resolve"), b.beforeHandle)),
    afterHandle: mergeObjectArray(a.afterHandle, b.afterHandle),
    mapResponse: mergeObjectArray(a.mapResponse, b.mapResponse),
    afterResponse: mergeObjectArray(a.afterResponse, b.afterResponse),
    trace: mergeObjectArray(a.trace, b.trace),
    error: mergeObjectArray(a.error, b.error),
    standaloneSchema: a.standaloneSchema || b.standaloneSchema ? a.standaloneSchema && !b.standaloneSchema ? a.standaloneSchema : b.standaloneSchema && !a.standaloneSchema ? b.standaloneSchema : [
      ...a.standaloneSchema ?? [],
      ...b.standaloneSchema ?? []
    ] : undefined
  };
  return hook.resolve && delete hook.resolve, hook;
};
var lifeCycleToArray = (a) => {
  a.parse && !Array.isArray(a.parse) && (a.parse = [a.parse]), a.transform && !Array.isArray(a.transform) && (a.transform = [a.transform]), a.afterHandle && !Array.isArray(a.afterHandle) && (a.afterHandle = [a.afterHandle]), a.mapResponse && !Array.isArray(a.mapResponse) && (a.mapResponse = [a.mapResponse]), a.afterResponse && !Array.isArray(a.afterResponse) && (a.afterResponse = [a.afterResponse]), a.trace && !Array.isArray(a.trace) && (a.trace = [a.trace]), a.error && !Array.isArray(a.error) && (a.error = [a.error]);
  let beforeHandle = [];
  return a.resolve && (beforeHandle = fnToContainer(Array.isArray(a.resolve) ? a.resolve : [a.resolve], "resolve"), delete a.resolve), a.beforeHandle && (beforeHandle.length ? beforeHandle = beforeHandle.concat(Array.isArray(a.beforeHandle) ? a.beforeHandle : [a.beforeHandle]) : beforeHandle = Array.isArray(a.beforeHandle) ? a.beforeHandle : [a.beforeHandle]), beforeHandle.length && (a.beforeHandle = beforeHandle), a;
};
var isBun2 = typeof Bun < "u";
var hasBunHash = isBun2 && typeof Bun.hash == "function";
var checksum = (s) => {
  let h = 9;
  for (let i = 0;i < s.length; )
    h = Math.imul(h ^ s.charCodeAt(i++), 9 ** 9);
  return h = h ^ h >>> 9;
};
var injectChecksum = (checksum2, x) => {
  if (!x)
    return;
  if (!Array.isArray(x)) {
    let fn = x;
    return checksum2 && !fn.checksum && (fn.checksum = checksum2), fn.scope === "scoped" && (fn.scope = "local"), fn;
  }
  let fns = [...x];
  for (let fn of fns)
    checksum2 && !fn.checksum && (fn.checksum = checksum2), fn.scope === "scoped" && (fn.scope = "local");
  return fns;
};
var mergeLifeCycle = (a, b, checksum2) => ({
  start: mergeObjectArray(a.start, injectChecksum(checksum2, b?.start)),
  request: mergeObjectArray(a.request, injectChecksum(checksum2, b?.request)),
  parse: mergeObjectArray(a.parse, injectChecksum(checksum2, b?.parse)),
  transform: mergeObjectArray(a.transform, injectChecksum(checksum2, b?.transform)),
  beforeHandle: mergeObjectArray(mergeObjectArray(fnToContainer(a.resolve, "resolve"), a.beforeHandle), injectChecksum(checksum2, mergeObjectArray(fnToContainer(b?.resolve, "resolve"), b?.beforeHandle))),
  afterHandle: mergeObjectArray(a.afterHandle, injectChecksum(checksum2, b?.afterHandle)),
  mapResponse: mergeObjectArray(a.mapResponse, injectChecksum(checksum2, b?.mapResponse)),
  afterResponse: mergeObjectArray(a.afterResponse, injectChecksum(checksum2, b?.afterResponse)),
  trace: mergeObjectArray(a.trace, injectChecksum(checksum2, b?.trace)),
  error: mergeObjectArray(a.error, injectChecksum(checksum2, b?.error)),
  stop: mergeObjectArray(a.stop, injectChecksum(checksum2, b?.stop))
});
var asHookType = (fn, inject, { skipIfHasType = false }) => {
  if (!fn)
    return fn;
  if (!Array.isArray(fn))
    return skipIfHasType ? fn.scope ??= inject : fn.scope = inject, fn;
  for (let x of fn)
    skipIfHasType ? x.scope ??= inject : x.scope = inject;
  return fn;
};
var filterGlobal = (fn) => {
  if (!fn)
    return fn;
  if (!Array.isArray(fn))
    switch (fn.scope) {
      case "global":
      case "scoped":
        return { ...fn };
      default:
        return { fn };
    }
  let array = [];
  for (let x of fn)
    switch (x.scope) {
      case "global":
      case "scoped":
        array.push({
          ...x
        });
        break;
    }
  return array;
};
var filterGlobalHook = (hook) => ({
  ...hook,
  type: hook?.type,
  detail: hook?.detail,
  parse: filterGlobal(hook?.parse),
  transform: filterGlobal(hook?.transform),
  beforeHandle: filterGlobal(hook?.beforeHandle),
  afterHandle: filterGlobal(hook?.afterHandle),
  mapResponse: filterGlobal(hook?.mapResponse),
  afterResponse: filterGlobal(hook?.afterResponse),
  error: filterGlobal(hook?.error),
  trace: filterGlobal(hook?.trace)
});
var StatusMap = {
  Continue: 100,
  "Switching Protocols": 101,
  Processing: 102,
  "Early Hints": 103,
  OK: 200,
  Created: 201,
  Accepted: 202,
  "Non-Authoritative Information": 203,
  "No Content": 204,
  "Reset Content": 205,
  "Partial Content": 206,
  "Multi-Status": 207,
  "Already Reported": 208,
  "Multiple Choices": 300,
  "Moved Permanently": 301,
  Found: 302,
  "See Other": 303,
  "Not Modified": 304,
  "Temporary Redirect": 307,
  "Permanent Redirect": 308,
  "Bad Request": 400,
  Unauthorized: 401,
  "Payment Required": 402,
  Forbidden: 403,
  "Not Found": 404,
  "Method Not Allowed": 405,
  "Not Acceptable": 406,
  "Proxy Authentication Required": 407,
  "Request Timeout": 408,
  Conflict: 409,
  Gone: 410,
  "Length Required": 411,
  "Precondition Failed": 412,
  "Payload Too Large": 413,
  "URI Too Long": 414,
  "Unsupported Media Type": 415,
  "Range Not Satisfiable": 416,
  "Expectation Failed": 417,
  "I'm a teapot": 418,
  "Enhance Your Calm": 420,
  "Misdirected Request": 421,
  "Unprocessable Content": 422,
  Locked: 423,
  "Failed Dependency": 424,
  "Too Early": 425,
  "Upgrade Required": 426,
  "Precondition Required": 428,
  "Too Many Requests": 429,
  "Request Header Fields Too Large": 431,
  "Unavailable For Legal Reasons": 451,
  "Internal Server Error": 500,
  "Not Implemented": 501,
  "Bad Gateway": 502,
  "Service Unavailable": 503,
  "Gateway Timeout": 504,
  "HTTP Version Not Supported": 505,
  "Variant Also Negotiates": 506,
  "Insufficient Storage": 507,
  "Loop Detected": 508,
  "Not Extended": 510,
  "Network Authentication Required": 511
};
var InvertedStatusMap = Object.fromEntries(Object.entries(StatusMap).map(([k, v]) => [v, k]));
function removeTrailingEquals(digest) {
  let trimmedDigest = digest;
  for (;trimmedDigest.endsWith("="); )
    trimmedDigest = trimmedDigest.slice(0, -1);
  return trimmedDigest;
}
var encoder = new TextEncoder;
var signCookie = async (val, secret) => {
  if (typeof val == "object" ? val = JSON.stringify(val) : typeof val != "string" && (val = val + ""), secret === null)
    throw new TypeError("Secret key must be provided.");
  let secretKey = await crypto.subtle.importKey("raw", encoder.encode(secret), { name: "HMAC", hash: "SHA-256" }, false, ["sign"]), hmacBuffer = await crypto.subtle.sign("HMAC", secretKey, encoder.encode(val));
  return val + "." + removeTrailingEquals(Buffer.from(hmacBuffer).toString("base64"));
};
var unsignCookie = async (input, secret) => {
  if (typeof input != "string")
    throw new TypeError("Signed cookie string must be provided.");
  if (secret === null)
    throw new TypeError("Secret key must be provided.");
  let tentativeValue = input.slice(0, input.lastIndexOf("."));
  return await signCookie(tentativeValue, secret) === input ? tentativeValue : false;
};
var insertStandaloneValidator = (hook, name, value) => {
  if (!hook.standaloneValidator?.length || !Array.isArray(hook.standaloneValidator)) {
    hook.standaloneValidator = [
      {
        [name]: value
      }
    ];
    return;
  }
  let last = hook.standaloneValidator[hook.standaloneValidator.length - 1];
  name in last ? hook.standaloneValidator.push({
    [name]: value
  }) : last[name] = value;
};
var parseNumericString = (message) => {
  if (typeof message == "number")
    return message;
  if (message.length < 16) {
    if (message.trim().length === 0)
      return null;
    let length = Number(message);
    return Number.isNaN(length) ? null : length;
  }
  if (message.length === 16) {
    if (message.trim().length === 0)
      return null;
    let number = Number(message);
    return Number.isNaN(number) || number.toString() !== message ? null : number;
  }
  return null;
};
var isNumericString = (message) => parseNumericString(message) !== null;
var PromiseGroup = class {
  constructor(onError = console.error, onFinally = () => {}) {
    this.onError = onError;
    this.onFinally = onFinally;
    this.root = null;
    this.promises = [];
  }
  get size() {
    return this.promises.length;
  }
  add(promise) {
    return this.promises.push(promise), this.root ||= this.drain(), this.promises.length === 1 && this.then(this.onFinally), promise;
  }
  async drain() {
    for (;this.promises.length > 0; ) {
      try {
        await this.promises[0];
      } catch (error) {
        this.onError(error);
      }
      this.promises.shift();
    }
    this.root = null;
  }
  then(onfulfilled, onrejected) {
    return (this.root ?? Promise.resolve()).then(onfulfilled, onrejected);
  }
};
var fnToContainer = (fn, subType) => {
  if (!fn)
    return fn;
  if (!Array.isArray(fn)) {
    if (typeof fn == "function" || typeof fn == "string")
      return subType ? { fn, subType } : { fn };
    if ("fn" in fn)
      return fn;
  }
  let fns = [];
  for (let x of fn)
    typeof x == "function" || typeof x == "string" ? fns.push(subType ? { fn: x, subType } : { fn: x }) : ("fn" in x) && fns.push(x);
  return fns;
};
var localHookToLifeCycleStore = (a) => (a.start && (a.start = fnToContainer(a.start)), a.request && (a.request = fnToContainer(a.request)), a.parse && (a.parse = fnToContainer(a.parse)), a.transform && (a.transform = fnToContainer(a.transform)), a.beforeHandle && (a.beforeHandle = fnToContainer(a.beforeHandle)), a.afterHandle && (a.afterHandle = fnToContainer(a.afterHandle)), a.mapResponse && (a.mapResponse = fnToContainer(a.mapResponse)), a.afterResponse && (a.afterResponse = fnToContainer(a.afterResponse)), a.trace && (a.trace = fnToContainer(a.trace)), a.error && (a.error = fnToContainer(a.error)), a.stop && (a.stop = fnToContainer(a.stop)), a);
var lifeCycleToFn = (a) => {
  let lifecycle = /* @__PURE__ */ Object.create(null);
  return a.start?.map && (lifecycle.start = a.start.map((x) => x.fn)), a.request?.map && (lifecycle.request = a.request.map((x) => x.fn)), a.parse?.map && (lifecycle.parse = a.parse.map((x) => x.fn)), a.transform?.map && (lifecycle.transform = a.transform.map((x) => x.fn)), a.beforeHandle?.map && (lifecycle.beforeHandle = a.beforeHandle.map((x) => x.fn)), a.afterHandle?.map && (lifecycle.afterHandle = a.afterHandle.map((x) => x.fn)), a.mapResponse?.map && (lifecycle.mapResponse = a.mapResponse.map((x) => x.fn)), a.afterResponse?.map && (lifecycle.afterResponse = a.afterResponse.map((x) => x.fn)), a.error?.map && (lifecycle.error = a.error.map((x) => x.fn)), a.stop?.map && (lifecycle.stop = a.stop.map((x) => x.fn)), a.trace?.map ? lifecycle.trace = a.trace.map((x) => x.fn) : lifecycle.trace = [], lifecycle;
};
var cloneInference = (inference) => ({
  body: inference.body,
  cookie: inference.cookie,
  headers: inference.headers,
  query: inference.query,
  set: inference.set,
  server: inference.server,
  path: inference.path,
  route: inference.route,
  url: inference.url
});
var redirect = (url, status2 = 302) => Response.redirect(url, status2);
var ELYSIA_FORM_DATA = Symbol("ElysiaFormData");
var ELYSIA_REQUEST_ID = Symbol("ElysiaRequestId");
var form = (items) => {
  let formData = new FormData;
  if (formData[ELYSIA_FORM_DATA] = {}, items)
    for (let [key, value] of Object.entries(items)) {
      if (Array.isArray(value)) {
        formData[ELYSIA_FORM_DATA][key] = [];
        for (let v of value)
          value instanceof File ? formData.append(key, value, value.name) : value instanceof ElysiaFile ? formData.append(key, value.value, value.value?.name) : formData.append(key, value), formData[ELYSIA_FORM_DATA][key].push(value);
        continue;
      }
      value instanceof File ? formData.append(key, value, value.name) : value instanceof ElysiaFile ? formData.append(key, value.value, value.value?.name) : formData.append(key, value), formData[ELYSIA_FORM_DATA][key] = value;
    }
  return formData;
};
var randomId = typeof crypto > "u" ? () => {
  let result = "", characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", charactersLength = characters.length;
  for (let i = 0;i < 16; i++)
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  return result;
} : () => {
  let uuid = crypto.randomUUID();
  return uuid.slice(0, 8) + uuid.slice(24, 32);
};
var deduplicateChecksum = (array) => {
  if (!array.length)
    return [];
  let hashes = [];
  for (let i = 0;i < array.length; i++) {
    let item = array[i];
    item.checksum && (hashes.includes(item.checksum) && (array.splice(i, 1), i--), hashes.push(item.checksum));
  }
  return array;
};
var promoteEvent = (events, as = "scoped") => {
  if (events) {
    if (as === "scoped") {
      for (let event of events)
        "scope" in event && event.scope === "local" && (event.scope = "scoped");
      return;
    }
    for (let event of events)
      "scope" in event && (event.scope = "global");
  }
};
var getLoosePath = (path3) => path3.charCodeAt(path3.length - 1) === 47 ? path3.slice(0, path3.length - 1) : path3 + "/";
var isNotEmpty = (obj) => {
  if (!obj)
    return false;
  for (let _ in obj)
    return true;
  return false;
};
var encodePath = (path3, { dynamic = false } = {}) => {
  let encoded = encodeURIComponent(path3).replace(/%2F/g, "/");
  return dynamic && (encoded = encoded.replace(/%3A/g, ":").replace(/%3F/g, "?")), encoded;
};
var supportPerMethodInlineHandler = !!(typeof Bun > "u" || Bun.semver?.satisfies?.(Bun.version, ">=1.2.14"));
async function getResponseLength(response) {
  if (response.bodyUsed || !response.body)
    return 0;
  let length = 0, reader = response.body.getReader();
  for (;; ) {
    let { done, value } = await reader.read();
    if (done)
      break;
    length += value.byteLength;
  }
  return length;
}
var emptySchema = {
  headers: true,
  cookie: true,
  query: true,
  params: true,
  body: true,
  response: true
};
var env = typeof Bun < "u" ? Bun.env : typeof process < "u" ? process?.env : undefined;
var ERROR_CODE = Symbol("ElysiaErrorCode");
var isProduction = (env?.NODE_ENV ?? env?.ENV) === "production";
var emptyHttpStatus = {
  101: undefined,
  204: undefined,
  205: undefined,
  304: undefined,
  307: undefined,
  308: undefined
};
var ElysiaCustomStatusResponse = class {
  constructor(code, response) {
    let res = response ?? (code in InvertedStatusMap ? InvertedStatusMap[code] : code);
    this.code = StatusMap[code] ?? code, code in emptyHttpStatus ? this.response = undefined : this.response = res;
  }
};
var status = (code, response) => new ElysiaCustomStatusResponse(code, response);
var NotFoundError = class extends Error {
  constructor(message) {
    super(message ?? "NOT_FOUND");
    this.code = "NOT_FOUND";
    this.status = 404;
  }
};
var ParseError2 = class extends Error {
  constructor(cause) {
    super("Bad Request", {
      cause
    });
    this.code = "PARSE";
    this.status = 400;
  }
};
var InvalidCookieSignature = class extends Error {
  constructor(key, message) {
    super(message ?? `"${key}" has invalid cookie signature`);
    this.key = key;
    this.code = "INVALID_COOKIE_SIGNATURE";
    this.status = 400;
  }
};
var mapValueError = (error) => {
  if (!error)
    return {
      summary: undefined
    };
  let { message, path: path3, value, type } = error, property = path3.slice(1).replaceAll("/", "."), isRoot = path3 === "";
  switch (type) {
    case 42:
      return {
        ...error,
        summary: isRoot ? "Value should not be provided" : `Property '${property}' should not be provided`
      };
    case 45:
      return {
        ...error,
        summary: isRoot ? "Value is missing" : `Property '${property}' is missing`
      };
    case 50:
      let quoteIndex = message.indexOf("'"), format = message.slice(quoteIndex + 1, message.indexOf("'", quoteIndex + 1));
      return {
        ...error,
        summary: isRoot ? "Value should be an email" : `Property '${property}' should be ${format}`
      };
    case 54:
      return {
        ...error,
        summary: `${message.slice(0, 9).trim()} property '${property}' to be ${message.slice(8).trim()} but found: ${value}`
      };
    case 62:
      let union = error.schema.anyOf.map((x) => `'${x?.format ?? x.type}'`).join(", ");
      return {
        ...error,
        summary: isRoot ? `Value should be one of ${union}` : `Property '${property}' should be one of: ${union}`
      };
    default:
      return { summary: message, ...error };
  }
};
var InvalidFileType = class _InvalidFileType extends Error {
  constructor(property, expected, message = `"${property}" has invalid file type`) {
    super(message);
    this.property = property;
    this.expected = expected;
    this.message = message;
    this.code = "INVALID_FILE_TYPE";
    this.status = 422;
    Object.setPrototypeOf(this, _InvalidFileType.prototype);
  }
  toResponse(headers) {
    return isProduction ? new Response(JSON.stringify({
      type: "validation",
      on: "body"
    }), {
      status: 422,
      headers: {
        ...headers,
        "content-type": "application/json"
      }
    }) : new Response(JSON.stringify({
      type: "validation",
      on: "body",
      summary: "Invalid file type",
      message: this.message,
      property: this.property,
      expected: this.expected
    }), {
      status: 422,
      headers: {
        ...headers,
        "content-type": "application/json"
      }
    });
  }
};
var ValidationError = class _ValidationError extends Error {
  constructor(type, validator, value, errors) {
    let message = "", error, expected, customError;
    if (validator?.provider === "standard" || "~standard" in validator || validator.schema && "~standard" in validator.schema) {
      let standard = ("~standard" in validator ? validator : validator.schema)["~standard"];
      error = (errors ?? standard.validate(value).issues)?.[0], isProduction ? message = JSON.stringify({
        type: "validation",
        on: type,
        found: value
      }) : message = JSON.stringify({
        type: "validation",
        on: type,
        property: error.path?.[0] || "root",
        message: error?.message,
        summary: error?.problem,
        expected,
        found: value,
        errors
      }, null, 2), customError = error?.message;
    } else {
      value && typeof value == "object" && value instanceof ElysiaCustomStatusResponse && (value = value.response), error = errors?.First() ?? ("Errors" in validator ? validator.Errors(value).First() : exports_value2.Errors(validator, value).First());
      let accessor = error?.path || "root", schema = validator?.schema ?? validator;
      if (!isProduction)
        try {
          expected = exports_value2.Create(schema);
        } catch (error2) {
          expected = {
            type: "Could not create expected value",
            message: error2?.message,
            error: error2
          };
        }
      customError = error?.schema?.message || error?.schema?.error !== undefined ? typeof error.schema.error == "function" ? error.schema.error(isProduction ? {
        type: "validation",
        on: type,
        found: value
      } : {
        type: "validation",
        on: type,
        value,
        property: accessor,
        message: error?.message,
        summary: mapValueError(error).summary,
        found: value,
        expected,
        errors: "Errors" in validator ? [
          ...validator.Errors(value)
        ].map(mapValueError) : [
          ...exports_value2.Errors(validator, value)
        ].map(mapValueError)
      }, validator) : error.schema.error : undefined, customError !== undefined ? message = typeof customError == "object" ? JSON.stringify(customError) : customError + "" : isProduction ? message = JSON.stringify({
        type: "validation",
        on: type,
        found: value
      }) : message = JSON.stringify({
        type: "validation",
        on: type,
        property: accessor,
        message: error?.message,
        summary: mapValueError(error).summary,
        expected,
        found: value,
        errors: "Errors" in validator ? [...validator.Errors(value)].map(mapValueError) : [...exports_value2.Errors(validator, value)].map(mapValueError)
      }, null, 2);
    }
    super(message);
    this.type = type;
    this.validator = validator;
    this.value = value;
    this.code = "VALIDATION";
    this.status = 422;
    this.valueError = error, this.expected = expected, this.customError = customError, Object.setPrototypeOf(this, _ValidationError.prototype);
  }
  get all() {
    return "Errors" in this.validator ? [...this.validator.Errors(this.value)].map(mapValueError) : [...exports_value2.Errors(this.validator, this.value)].map(mapValueError);
  }
  static simplifyModel(validator) {
    let model = "schema" in validator ? validator.schema : validator;
    try {
      return exports_value2.Create(model);
    } catch {
      return model;
    }
  }
  get model() {
    return "~standard" in this.validator ? this.validator : _ValidationError.simplifyModel(this.validator);
  }
  toResponse(headers) {
    return new Response(this.message, {
      status: 400,
      headers: {
        ...headers,
        "content-type": "application/json"
      }
    });
  }
  detail(message) {
    if (!this.customError)
      return this.message;
    let validator = this.validator, value = this.value, expected = this.expected, errors = this.all;
    return isProduction ? {
      type: "validation",
      on: this.type,
      found: value,
      message
    } : {
      type: "validation",
      on: this.type,
      property: this.valueError?.path || "root",
      message,
      summary: mapValueError(this.valueError).summary,
      found: value,
      expected,
      errors
    };
  }
};
var tryParse = (v, schema) => {
  try {
    return JSON.parse(v);
  } catch {
    throw new ValidationError("property", schema, v);
  }
};
function createType(kind, func) {
  return exports_type2.Has(kind) || exports_type2.Set(kind, func), (options = {}) => Unsafe({ ...options, [Kind]: kind });
}
var compile = (schema) => {
  try {
    let compiler = TypeCompiler.Compile(schema);
    return compiler.Create = () => exports_value2.Create(schema), compiler.Error = (v) => new ValidationError("property", schema, v, compiler.Errors(v)), compiler;
  } catch {
    return {
      Check: (v) => exports_value2.Check(schema, v),
      CheckThrow: (v) => {
        if (!exports_value2.Check(schema, v))
          throw new ValidationError("property", schema, v, exports_value2.Errors(schema, v));
      },
      Decode: (v) => exports_value2.Decode(schema, v),
      Create: () => exports_value2.Create(schema),
      Error: (v) => new ValidationError("property", schema, v, exports_value2.Errors(schema, v))
    };
  }
};
var parseFileUnit = (size) => {
  if (typeof size == "string")
    switch (size.slice(-1)) {
      case "k":
        return +size.slice(0, size.length - 1) * 1024;
      case "m":
        return +size.slice(0, size.length - 1) * 1048576;
      default:
        return +size;
    }
  return size;
};
var checkFileExtension = (type, extension) => type.startsWith(extension) ? true : extension.charCodeAt(extension.length - 1) === 42 && extension.charCodeAt(extension.length - 2) === 47 && type.startsWith(extension.slice(0, -1));
var _fileTypeFromBlobWarn = false;
var warnIfFileTypeIsNotInstalled = () => {
  _fileTypeFromBlobWarn || (console.warn("[Elysia] Attempt to validate file type without 'file-type'. This may lead to security risks. We recommend installing 'file-type' to properly validate file extension."), _fileTypeFromBlobWarn = true);
};
var loadFileType = async () => import("file-type").then((x) => (_fileTypeFromBlob = x.fileTypeFromBlob, _fileTypeFromBlob)).catch(warnIfFileTypeIsNotInstalled);
var _fileTypeFromBlob;
var fileTypeFromBlob = (file2) => _fileTypeFromBlob ? _fileTypeFromBlob(file2) : loadFileType().then((mod) => {
  if (mod)
    return mod(file2);
});
var fileType = async (file2, extension, name = file2?.name ?? "") => {
  if (Array.isArray(file2))
    return await Promise.all(file2.map((f) => fileType(f, extension, name))), true;
  if (!file2)
    return false;
  let result = await fileTypeFromBlob(file2);
  if (!result)
    throw new InvalidFileType(name, extension);
  if (typeof extension == "string" && !checkFileExtension(result.mime, extension))
    throw new InvalidFileType(name, extension);
  for (let i = 0;i < extension.length; i++)
    if (checkFileExtension(result.mime, extension[i]))
      return true;
  throw new InvalidFileType(name, extension);
};
var validateFile = (options, value) => {
  if (value instanceof ElysiaFile)
    return true;
  if (!(value instanceof Blob) || options.minSize && value.size < parseFileUnit(options.minSize) || options.maxSize && value.size > parseFileUnit(options.maxSize))
    return false;
  if (options.extension) {
    if (typeof options.extension == "string")
      return checkFileExtension(value.type, options.extension);
    for (let i = 0;i < options.extension.length; i++)
      if (checkFileExtension(value.type, options.extension[i]))
        return true;
    return false;
  }
  return true;
};
var t = Object.assign({}, Type);
createType("UnionEnum", (schema, value) => (typeof value == "number" || typeof value == "string" || value === null) && schema.enum.includes(value));
createType("ArrayBuffer", (schema, value) => value instanceof ArrayBuffer);
var internalFiles = createType("Files", (options, value) => {
  if (options.minItems && options.minItems > 1 && !Array.isArray(value))
    return false;
  if (!Array.isArray(value))
    return validateFile(options, value);
  if (options.minItems && value.length < options.minItems || options.maxItems && value.length > options.maxItems)
    return false;
  for (let i = 0;i < value.length; i++)
    if (!validateFile(options, value[i]))
      return false;
  return true;
});
var internalFormData = createType("ElysiaForm", ({ compiler, ...schema }, value) => {
  if (!(value instanceof FormData))
    return false;
  if (compiler) {
    if (!(ELYSIA_FORM_DATA in value))
      throw new ValidationError("property", schema, value);
    if (!compiler.Check(value[ELYSIA_FORM_DATA]))
      throw compiler.Error(value[ELYSIA_FORM_DATA]);
  }
  return true;
});
var ElysiaType = {
  String: (property) => Type.String(property),
  Numeric: (property) => {
    let schema = Type.Number(property), compiler = compile(schema);
    return t.Transform(t.Union([
      t.String({
        format: "numeric",
        default: 0
      }),
      t.Number(property)
    ], property)).Decode((value) => {
      let number = +value;
      if (isNaN(number))
        return value;
      if (property && !compiler.Check(number))
        throw compiler.Error(number);
      return number;
    }).Encode((value) => value);
  },
  Integer: (property) => {
    let schema = Type.Integer(property), compiler = compile(schema);
    return t.Transform(t.Union([
      t.String({
        format: "integer",
        default: 0
      }),
      Type.Integer(property)
    ], property)).Decode((value) => {
      let number = +value;
      if (!compiler.Check(number))
        throw compiler.Error(number);
      return number;
    }).Encode((value) => value);
  },
  Date: (property) => {
    let schema = Type.Date(property), compiler = compile(schema), _default = property?.default ? new Date(property.default) : undefined;
    return t.Transform(t.Union([
      Type.Date(property),
      t.String({
        format: "date-time",
        default: _default?.toISOString()
      }),
      t.String({
        format: "date",
        default: _default?.toISOString()
      }),
      t.Number({ default: _default?.getTime() })
    ], property)).Decode((value) => {
      if (typeof value == "number") {
        let date3 = new Date(value);
        if (!compiler.Check(date3))
          throw compiler.Error(date3);
        return date3;
      }
      if (value instanceof Date)
        return value;
      let date2 = new Date(parseDateTimeEmptySpace(value));
      if (!date2 || isNaN(date2.getTime()))
        throw new ValidationError("property", schema, date2);
      if (!compiler.Check(date2))
        throw compiler.Error(date2);
      return date2;
    }).Encode((value) => {
      if (value instanceof Date)
        return value.toISOString();
      if (typeof value == "string") {
        if (isNaN(new Date(parseDateTimeEmptySpace(value)).getTime()))
          throw new ValidationError("property", schema, value);
        return value;
      }
      if (!compiler.Check(value))
        throw compiler.Error(value);
      return value;
    });
  },
  BooleanString: (property) => {
    let schema = Type.Boolean(property), compiler = compile(schema);
    return t.Transform(t.Union([
      t.Boolean(property),
      t.String({
        format: "boolean",
        default: false
      })
    ], property)).Decode((value) => {
      if (typeof value == "string")
        return value === "true";
      if (value !== undefined && !compiler.Check(value))
        throw compiler.Error(value);
      return value;
    }).Encode((value) => value);
  },
  ObjectString: (properties, options) => {
    let schema = t.Object(properties, options), compiler = compile(schema);
    return t.Transform(t.Union([
      t.String({
        format: "ObjectString",
        default: "{}"
      }),
      schema
    ], {
      elysiaMeta: "ObjectString"
    })).Decode((value) => {
      if (typeof value == "string") {
        if (value.charCodeAt(0) !== 123)
          throw new ValidationError("property", schema, value);
        if (!compiler.Check(value = tryParse(value, schema)))
          throw compiler.Error(value);
        return compiler.Decode(value);
      }
      return value;
    }).Encode((value) => {
      let original;
      if (typeof value == "string" && (value = tryParse(original = value, schema)), !compiler.Check(value))
        throw compiler.Error(value);
      return original ?? JSON.stringify(value);
    });
  },
  ArrayString: (children = t.String(), options) => {
    let schema = t.Array(children, options), compiler = compile(schema), decode4 = (value, isProperty = false) => {
      if (value.charCodeAt(0) === 91) {
        if (!compiler.Check(value = tryParse(value, schema)))
          throw compiler.Error(value);
        return compiler.Decode(value);
      }
      if (isProperty)
        return value;
      throw new ValidationError("property", schema, value);
    };
    return t.Transform(t.Union([
      t.String({
        format: "ArrayString",
        default: options?.default
      }),
      schema
    ])).Decode((value) => {
      if (Array.isArray(value)) {
        let values = [];
        for (let i = 0;i < value.length; i++) {
          let v = value[i];
          if (typeof v == "string") {
            let t2 = decode4(v, true);
            Array.isArray(t2) ? values = values.concat(t2) : values.push(t2);
            continue;
          }
          values.push(v);
        }
        return values;
      }
      return typeof value == "string" ? decode4(value) : value;
    }).Encode((value) => {
      let original;
      if (typeof value == "string" && (value = tryParse(original = value, schema)), !compiler.Check(value))
        throw new ValidationError("property", schema, value);
      return original ?? JSON.stringify(value);
    });
  },
  ArrayQuery: (children = t.String(), options) => {
    let schema = t.Array(children, options), compiler = compile(schema), decode4 = (value) => value.indexOf(",") !== -1 ? compiler.Decode(value.split(",")) : [value];
    return t.Transform(t.Union([
      t.String({
        default: options?.default
      }),
      schema
    ], {
      elysiaMeta: "ArrayQuery"
    })).Decode((value) => {
      if (Array.isArray(value)) {
        let values = [];
        for (let i = 0;i < value.length; i++) {
          let v = value[i];
          if (typeof v == "string") {
            let t2 = decode4(v);
            Array.isArray(t2) ? values = values.concat(t2) : values.push(t2);
            continue;
          }
          values.push(v);
        }
        return values;
      }
      return typeof value == "string" ? decode4(value) : value;
    }).Encode((value) => {
      let original;
      if (typeof value == "string" && (value = tryParse(original = value, schema)), !compiler.Check(value))
        throw new ValidationError("property", schema, value);
      return original ?? JSON.stringify(value);
    });
  },
  File: createType("File", validateFile),
  Files: (options = {}) => t.Transform(internalFiles(options)).Decode((value) => Array.isArray(value) ? value : [value]).Encode((value) => value),
  Nullable: (schema, options) => t.Union([schema, t.Null()], {
    ...options,
    nullable: true
  }),
  MaybeEmpty: (schema, options) => t.Union([schema, t.Null(), t.Undefined()], options),
  Cookie: (properties, {
    domain,
    expires,
    httpOnly,
    maxAge,
    path: path3,
    priority,
    sameSite,
    secure,
    secrets,
    sign,
    ...options
  } = {}) => {
    let v = t.Object(properties, options);
    return v.config = {
      domain,
      expires,
      httpOnly,
      maxAge,
      path: path3,
      priority,
      sameSite,
      secure,
      secrets,
      sign
    }, v;
  },
  UnionEnum: (values, options = {}) => {
    let type = values.every((value) => typeof value == "string") ? { type: "string" } : values.every((value) => typeof value == "number") ? { type: "number" } : values.every((value) => value === null) ? { type: "null" } : {};
    if (values.some((x) => typeof x == "object" && x !== null))
      throw new Error("This type does not support objects or arrays");
    return {
      default: values[0],
      ...options,
      [Kind]: "UnionEnum",
      ...type,
      enum: values
    };
  },
  NoValidate: (v, enabled = true) => (v.noValidate = enabled, v),
  Form: (v, options = {}) => {
    let schema = t.Object(v, {
      default: form({}),
      ...options
    }), compiler = compile(schema);
    return t.Union([
      schema,
      internalFormData({
        compiler
      })
    ]);
  },
  ArrayBuffer(options = {}) {
    return {
      default: [1, 2, 3],
      ...options,
      [Kind]: "ArrayBuffer"
    };
  },
  Uint8Array: (options) => {
    let schema = Type.Uint8Array(options), compiler = compile(schema);
    return t.Transform(t.Union([t.ArrayBuffer(), Type.Uint8Array(options)])).Decode((value) => {
      if (value instanceof ArrayBuffer) {
        if (!compiler.Check(value = new Uint8Array(value)))
          throw compiler.Error(value);
        return value;
      }
      return value;
    }).Encode((value) => value);
  }
};
t.BooleanString = ElysiaType.BooleanString;
t.ObjectString = ElysiaType.ObjectString;
t.ArrayString = ElysiaType.ArrayString;
t.ArrayQuery = ElysiaType.ArrayQuery;
t.Numeric = ElysiaType.Numeric;
t.Integer = ElysiaType.Integer;
t.File = (arg) => (arg?.type && loadFileType(), ElysiaType.File({
  default: "File",
  ...arg,
  extension: arg?.type,
  type: "string",
  format: "binary"
}));
t.Files = (arg) => (arg?.type && loadFileType(), ElysiaType.Files({
  ...arg,
  elysiaMeta: "Files",
  default: "Files",
  extension: arg?.type,
  type: "array",
  items: {
    ...arg,
    default: "Files",
    type: "string",
    format: "binary"
  }
}));
t.Nullable = ElysiaType.Nullable;
t.MaybeEmpty = ElysiaType.MaybeEmpty;
t.Cookie = ElysiaType.Cookie;
t.Date = ElysiaType.Date;
t.UnionEnum = ElysiaType.UnionEnum;
t.NoValidate = ElysiaType.NoValidate;
t.Form = ElysiaType.Form;
t.ArrayBuffer = ElysiaType.ArrayBuffer;
t.Uint8Array = ElysiaType.Uint8Array;
var Cookie = class {
  constructor(name, jar, initial = {}) {
    this.name = name;
    this.jar = jar;
    this.initial = initial;
  }
  get cookie() {
    return this.jar[this.name] ?? this.initial;
  }
  set cookie(jar) {
    this.name in this.jar || (this.jar[this.name] = this.initial), this.jar[this.name] = jar;
  }
  get setCookie() {
    return this.name in this.jar || (this.jar[this.name] = this.initial), this.jar[this.name];
  }
  set setCookie(jar) {
    this.cookie = jar;
  }
  get value() {
    return this.cookie.value;
  }
  set value(value) {
    this.setCookie.value = value;
  }
  get expires() {
    return this.cookie.expires;
  }
  set expires(expires) {
    this.setCookie.expires = expires;
  }
  get maxAge() {
    return this.cookie.maxAge;
  }
  set maxAge(maxAge) {
    this.setCookie.maxAge = maxAge;
  }
  get domain() {
    return this.cookie.domain;
  }
  set domain(domain) {
    this.setCookie.domain = domain;
  }
  get path() {
    return this.cookie.path;
  }
  set path(path3) {
    this.setCookie.path = path3;
  }
  get secure() {
    return this.cookie.secure;
  }
  set secure(secure) {
    this.setCookie.secure = secure;
  }
  get httpOnly() {
    return this.cookie.httpOnly;
  }
  set httpOnly(httpOnly) {
    this.setCookie.httpOnly = httpOnly;
  }
  get sameSite() {
    return this.cookie.sameSite;
  }
  set sameSite(sameSite) {
    this.setCookie.sameSite = sameSite;
  }
  get priority() {
    return this.cookie.priority;
  }
  set priority(priority) {
    this.setCookie.priority = priority;
  }
  get partitioned() {
    return this.cookie.partitioned;
  }
  set partitioned(partitioned) {
    this.setCookie.partitioned = partitioned;
  }
  get secrets() {
    return this.cookie.secrets;
  }
  set secrets(secrets) {
    this.setCookie.secrets = secrets;
  }
  update(config) {
    return this.setCookie = Object.assign(this.cookie, typeof config == "function" ? config(this.cookie) : config), this;
  }
  set(config) {
    return this.setCookie = Object.assign({
      ...this.initial,
      value: this.value
    }, typeof config == "function" ? config(this.cookie) : config), this;
  }
  remove() {
    if (this.value !== undefined)
      return this.set({
        expires: /* @__PURE__ */ new Date(0),
        maxAge: 0,
        value: ""
      }), this;
  }
  toString() {
    return typeof this.value == "object" ? JSON.stringify(this.value) : this.value?.toString() ?? "";
  }
};
var createCookieJar = (set2, store, initial) => (set2.cookie || (set2.cookie = {}), new Proxy(store, {
  get(_, key) {
    return key in store ? new Cookie(key, set2.cookie, Object.assign({}, initial ?? {}, store[key])) : new Cookie(key, set2.cookie, Object.assign({}, initial));
  }
}));
var parseCookie = async (set2, cookieString, {
  secrets,
  sign,
  ...initial
} = {}) => {
  if (!cookieString)
    return createCookieJar(set2, {}, initial);
  let isStringKey = typeof secrets == "string";
  sign && sign !== true && !Array.isArray(sign) && (sign = [sign]);
  let jar = {}, cookies = import_cookie.parse(cookieString);
  for (let [name, v] of Object.entries(cookies)) {
    if (v === undefined)
      continue;
    let value = import_fast_decode_uri_component2.default(v);
    if (value) {
      let starts = value.charCodeAt(0), ends = value.charCodeAt(value.length - 1);
      if (starts === 123 && ends === 125 || starts === 91 && ends === 93)
        try {
          value = JSON.parse(value);
        } catch {}
    }
    if (sign === true || sign?.includes(name)) {
      if (!secrets)
        throw new Error("No secret is provided to cookie plugin");
      if (isStringKey) {
        let temp = await unsignCookie(value, secrets);
        if (temp === false)
          throw new InvalidCookieSignature(name);
        value = temp;
      } else {
        let decoded = true;
        for (let i = 0;i < secrets.length; i++) {
          let temp = await unsignCookie(value, secrets[i]);
          if (temp !== false) {
            decoded = true, value = temp;
            break;
          }
        }
        if (!decoded)
          throw new InvalidCookieSignature(name);
      }
    }
    jar[name] = {
      value
    };
  }
  return createCookieJar(set2, jar, initial);
};
var serializeCookie = (cookies) => {
  if (!cookies || !isNotEmpty(cookies))
    return;
  let set2 = [];
  for (let [key, property] of Object.entries(cookies)) {
    if (!key || !property)
      continue;
    let value = property.value;
    value != null && set2.push(import_cookie.serialize(key, typeof value == "object" ? JSON.stringify(value) : value + "", property));
  }
  if (set2.length !== 0)
    return set2.length === 1 ? set2[0] : set2;
};
var handleFile = (response, set2) => {
  if (!isBun && response instanceof Promise)
    return response.then((res) => handleFile(res, set2));
  let size = response.size, immutable = set2 && (set2.status === 206 || set2.status === 304 || set2.status === 412 || set2.status === 416), defaultHeader = immutable ? {
    "transfer-encoding": "chunked"
  } : {
    "accept-ranges": "bytes",
    "content-range": size ? `bytes 0-${size - 1}/${size}` : undefined,
    "transfer-encoding": "chunked"
  };
  if (!set2 && !size)
    return new Response(response);
  if (!set2)
    return new Response(response, {
      headers: defaultHeader
    });
  if (set2.headers instanceof Headers) {
    for (let key of Object.keys(defaultHeader))
      key in set2.headers && set2.headers.append(key, defaultHeader[key]);
    return immutable && (set2.headers.delete("content-length"), set2.headers.delete("accept-ranges")), new Response(response, set2);
  }
  return isNotEmpty(set2.headers) ? new Response(response, {
    status: set2.status,
    headers: Object.assign(defaultHeader, set2.headers)
  }) : new Response(response, {
    status: set2.status,
    headers: defaultHeader
  });
};
var parseSetCookies = (headers, setCookie) => {
  if (!headers)
    return headers;
  headers.delete("set-cookie");
  for (let i = 0;i < setCookie.length; i++) {
    let index = setCookie[i].indexOf("=");
    headers.append("set-cookie", `${setCookie[i].slice(0, index)}=${setCookie[i].slice(index + 1) || ""}`);
  }
  return headers;
};
var responseToSetHeaders = (response, set2) => {
  if (set2?.headers) {
    if (response)
      if (hasHeaderShorthand)
        Object.assign(set2.headers, response.headers.toJSON());
      else
        for (let [key, value] of response.headers.entries())
          key in set2.headers && (set2.headers[key] = value);
    return set2.status === 200 && (set2.status = response.status), set2.headers["content-encoding"] && delete set2.headers["content-encoding"], set2;
  }
  if (!response)
    return {
      headers: {},
      status: set2?.status ?? 200
    };
  if (hasHeaderShorthand)
    return set2 = {
      headers: response.headers.toJSON(),
      status: set2?.status ?? 200
    }, set2.headers["content-encoding"] && delete set2.headers["content-encoding"], set2;
  set2 = {
    headers: {},
    status: set2?.status ?? 200
  };
  for (let [key, value] of response.headers.entries())
    key !== "content-encoding" && key in set2.headers && (set2.headers[key] = value);
  return set2;
};
var createStreamHandler = ({ mapResponse: mapResponse3, mapCompactResponse: mapCompactResponse3 }) => async (generator, set2, request) => {
  let init = generator.next?.();
  if (set2 && handleSet(set2), init instanceof Promise && (init = await init), init?.value instanceof ReadableStream)
    generator = init.value;
  else if (init && (typeof init?.done > "u" || init?.done))
    return set2 ? mapResponse3(init.value, set2, request) : mapCompactResponse3(init.value, request);
  let isSSE = init?.value?.sse ?? generator?.sse ?? set2?.headers["content-type"]?.startsWith("text/event-stream"), format = isSSE ? (data) => `data: ${data}

` : (data) => data, contentType = isSSE ? "text/event-stream" : init?.value && typeof init?.value == "object" ? "application/json" : "text/plain";
  return set2?.headers ? (set2.headers["transfer-encoding"] || (set2.headers["transfer-encoding"] = "chunked"), set2.headers["content-type"] || (set2.headers["content-type"] = contentType), set2.headers["cache-control"] || (set2.headers["cache-control"] = "no-cache")) : set2 = {
    status: 200,
    headers: {
      "content-type": contentType,
      "transfer-encoding": "chunked",
      "cache-control": "no-cache",
      connection: "keep-alive"
    }
  }, new Response(new ReadableStream({
    async start(controller) {
      let end = false;
      if (request?.signal?.addEventListener("abort", () => {
        end = true;
        try {
          controller.close();
        } catch {}
      }), !(!init || init.value instanceof ReadableStream)) {
        if (init.value !== undefined && init.value !== null)
          if (init.value.toSSE)
            controller.enqueue(init.value.toSSE());
          else if (typeof init.value == "object")
            try {
              controller.enqueue(format(JSON.stringify(init.value)));
            } catch {
              controller.enqueue(format(init.value.toString()));
            }
          else
            controller.enqueue(format(init.value.toString()));
      }
      try {
        for await (let chunk of generator) {
          if (end)
            break;
          if (chunk != null)
            if (chunk.toSSE)
              controller.enqueue(chunk.toSSE());
            else {
              if (typeof chunk == "object")
                try {
                  controller.enqueue(format(JSON.stringify(chunk)));
                } catch {
                  controller.enqueue(format(chunk.toString()));
                }
              else
                controller.enqueue(format(chunk.toString()));
              isSSE || await new Promise((resolve) => setTimeout(() => resolve(), 0));
            }
        }
      } catch (error) {
        console.warn(error);
      }
      try {
        controller.close();
      } catch {}
    }
  }), set2);
};
async function* streamResponse(response) {
  let body = response.body;
  if (!body)
    return;
  let reader = body.getReader(), decoder = new TextDecoder;
  try {
    for (;; ) {
      let { done, value } = await reader.read();
      if (done)
        break;
      typeof value == "string" ? yield value : yield decoder.decode(value);
    }
  } finally {
    reader.releaseLock();
  }
}
var handleSet = (set2) => {
  if (typeof set2.status == "string" && (set2.status = StatusMap[set2.status]), set2.cookie && isNotEmpty(set2.cookie)) {
    let cookie = serializeCookie(set2.cookie);
    cookie && (set2.headers["set-cookie"] = cookie);
  }
  set2.headers["set-cookie"] && Array.isArray(set2.headers["set-cookie"]) && (set2.headers = parseSetCookies(new Headers(set2.headers), set2.headers["set-cookie"]));
};
var createResponseHandler = (handler) => {
  let handleStream3 = createStreamHandler(handler);
  return (response, set2, request) => {
    let isCookieSet = false;
    if (set2.headers instanceof Headers)
      for (let key of set2.headers.keys())
        if (key === "set-cookie") {
          if (isCookieSet)
            continue;
          isCookieSet = true;
          for (let cookie of set2.headers.getSetCookie())
            response.headers.append("set-cookie", cookie);
        } else
          response.headers.append(key, set2.headers?.get(key) ?? "");
    else
      for (let key in set2.headers)
        response.headers.append(key, set2.headers[key]);
    let status2 = set2.status ?? 200;
    return response.status !== status2 && status2 !== 200 && (response.status <= 300 || response.status > 400) ? response.text().then((value) => {
      let newResponse = new Response(value, {
        headers: response.headers,
        status: set2.status
      });
      return !newResponse.headers.has("content-length") && newResponse.headers.get("transfer-encoding") === "chunked" ? handleStream3(streamResponse(newResponse), responseToSetHeaders(newResponse, set2), request) : newResponse;
    }) : !response.headers.has("content-length") && response.headers.get("transfer-encoding") === "chunked" ? handleStream3(streamResponse(response), responseToSetHeaders(response, set2), request) : response;
  };
};
var handleElysiaFile = (file2, set2 = {
  headers: {}
}) => {
  let path3 = file2.path, contentType = mime[path3.slice(path3.lastIndexOf(".") + 1)];
  return contentType && (set2.headers["content-type"] = contentType), file2.stats && set2.status !== 206 && set2.status !== 304 && set2.status !== 412 && set2.status !== 416 ? file2.stats.then((stat2) => {
    let size = stat2.size;
    return size !== undefined && (set2.headers["content-range"] = `bytes 0-${size - 1}/${size}`, set2.headers["content-length"] = size), handleFile(file2.value, set2);
  }) : handleFile(file2.value, set2);
};
var mapResponse = (response, set2, request) => {
  if (isNotEmpty(set2.headers) || set2.status !== 200 || set2.cookie)
    switch (handleSet(set2), response?.constructor?.name) {
      case "String":
        return set2.headers["content-type"] = "text/plain", new Response(response, set2);
      case "Array":
      case "Object":
        return set2.headers["content-type"] = "application/json", new Response(JSON.stringify(response), set2);
      case "ElysiaFile":
        return handleElysiaFile(response, set2);
      case "File":
        return handleFile(response, set2);
      case "Blob":
        return handleFile(response, set2);
      case "ElysiaCustomStatusResponse":
        return set2.status = response.code, mapResponse(response.response, set2, request);
      case undefined:
        return response ? new Response(JSON.stringify(response), set2) : new Response("", set2);
      case "Response":
        return handleResponse(response, set2, request);
      case "Error":
        return errorToResponse(response, set2);
      case "Promise":
        return response.then((x) => mapResponse(x, set2, request));
      case "Function":
        return mapResponse(response(), set2, request);
      case "Number":
      case "Boolean":
        return new Response(response.toString(), set2);
      case "Cookie":
        return response instanceof Cookie ? new Response(response.value, set2) : new Response(response?.toString(), set2);
      case "FormData":
        return new Response(response, set2);
      default:
        if (response instanceof Response)
          return handleResponse(response, set2, request);
        if (response instanceof Promise)
          return response.then((x) => mapResponse(x, set2));
        if (response instanceof Error)
          return errorToResponse(response, set2);
        if (response instanceof ElysiaCustomStatusResponse)
          return set2.status = response.code, mapResponse(response.response, set2, request);
        if (typeof response?.next == "function" || response instanceof ReadableStream)
          return handleStream(response, set2, request);
        if (typeof response?.then == "function")
          return response.then((x) => mapResponse(x, set2));
        if (typeof response?.toResponse == "function")
          return mapResponse(response.toResponse(), set2);
        if ("charCodeAt" in response) {
          let code = response.charCodeAt(0);
          if (code === 123 || code === 91)
            return set2.headers["Content-Type"] || (set2.headers["Content-Type"] = "application/json"), new Response(JSON.stringify(response), set2);
        }
        return new Response(response, set2);
    }
  return typeof response?.next == "function" || response instanceof ReadableStream ? handleStream(response, set2, request) : mapCompactResponse(response, request);
};
var mapEarlyResponse = (response, set2, request) => {
  if (response != null)
    if (isNotEmpty(set2.headers) || set2.status !== 200 || set2.cookie)
      switch (handleSet(set2), response?.constructor?.name) {
        case "String":
          return set2.headers["content-type"] = "text/plain", new Response(response, set2);
        case "Array":
        case "Object":
          return set2.headers["content-type"] = "application/json", new Response(JSON.stringify(response), set2);
        case "ElysiaFile":
          return handleElysiaFile(response, set2);
        case "File":
          return handleFile(response, set2);
        case "Blob":
          return handleFile(response, set2);
        case "ElysiaCustomStatusResponse":
          return set2.status = response.code, mapEarlyResponse(response.response, set2, request);
        case undefined:
          return response ? new Response(JSON.stringify(response), set2) : undefined;
        case "Response":
          return handleResponse(response, set2, request);
        case "Promise":
          return response.then((x) => mapEarlyResponse(x, set2));
        case "Error":
          return errorToResponse(response, set2);
        case "Function":
          return mapEarlyResponse(response(), set2);
        case "Number":
        case "Boolean":
          return new Response(response.toString(), set2);
        case "FormData":
          return new Response(response);
        case "Cookie":
          return response instanceof Cookie ? new Response(response.value, set2) : new Response(response?.toString(), set2);
        default:
          if (response instanceof Response)
            return handleResponse(response, set2, request);
          if (response instanceof Promise)
            return response.then((x) => mapEarlyResponse(x, set2));
          if (response instanceof Error)
            return errorToResponse(response, set2);
          if (response instanceof ElysiaCustomStatusResponse)
            return set2.status = response.code, mapEarlyResponse(response.response, set2, request);
          if (typeof response?.next == "function" || response instanceof ReadableStream)
            return handleStream(response, set2, request);
          if (typeof response?.then == "function")
            return response.then((x) => mapEarlyResponse(x, set2));
          if (typeof response?.toResponse == "function")
            return mapEarlyResponse(response.toResponse(), set2);
          if ("charCodeAt" in response) {
            let code = response.charCodeAt(0);
            if (code === 123 || code === 91)
              return set2.headers["Content-Type"] || (set2.headers["Content-Type"] = "application/json"), new Response(JSON.stringify(response), set2);
          }
          return new Response(response, set2);
      }
    else
      switch (response?.constructor?.name) {
        case "String":
          return set2.headers["content-type"] = "text/plain", new Response(response);
        case "Array":
        case "Object":
          return set2.headers["content-type"] = "application/json", new Response(JSON.stringify(response), set2);
        case "ElysiaFile":
          return handleElysiaFile(response, set2);
        case "File":
          return handleFile(response, set2);
        case "Blob":
          return handleFile(response, set2);
        case "ElysiaCustomStatusResponse":
          return set2.status = response.code, mapEarlyResponse(response.response, set2, request);
        case undefined:
          return response ? new Response(JSON.stringify(response), {
            headers: {
              "content-type": "application/json"
            }
          }) : new Response("");
        case "Response":
          return response;
        case "Promise":
          return response.then((x) => {
            let r = mapEarlyResponse(x, set2);
            if (r !== undefined)
              return r;
          });
        case "Error":
          return errorToResponse(response, set2);
        case "Function":
          return mapCompactResponse(response(), request);
        case "Number":
        case "Boolean":
          return new Response(response.toString());
        case "Cookie":
          return response instanceof Cookie ? new Response(response.value, set2) : new Response(response?.toString(), set2);
        case "FormData":
          return new Response(response);
        default:
          if (response instanceof Response)
            return response;
          if (response instanceof Promise)
            return response.then((x) => mapEarlyResponse(x, set2));
          if (response instanceof Error)
            return errorToResponse(response, set2);
          if (response instanceof ElysiaCustomStatusResponse)
            return set2.status = response.code, mapEarlyResponse(response.response, set2, request);
          if (typeof response?.next == "function" || response instanceof ReadableStream)
            return handleStream(response, set2, request);
          if (typeof response?.then == "function")
            return response.then((x) => mapEarlyResponse(x, set2));
          if (typeof response?.toResponse == "function")
            return mapEarlyResponse(response.toResponse(), set2);
          if ("charCodeAt" in response) {
            let code = response.charCodeAt(0);
            if (code === 123 || code === 91)
              return set2.headers["Content-Type"] || (set2.headers["Content-Type"] = "application/json"), new Response(JSON.stringify(response), set2);
          }
          return new Response(response);
      }
};
var mapCompactResponse = (response, request) => {
  switch (response?.constructor?.name) {
    case "String":
      return new Response(response, {
        headers: {
          "Content-Type": "text/plain"
        }
      });
    case "Object":
    case "Array":
      return new Response(JSON.stringify(response), {
        headers: {
          "Content-Type": "application/json"
        }
      });
    case "ElysiaFile":
      return handleElysiaFile(response);
    case "File":
      return handleFile(response);
    case "Blob":
      return handleFile(response);
    case "ElysiaCustomStatusResponse":
      return mapResponse(response.response, {
        status: response.code,
        headers: {}
      });
    case undefined:
      return response ? new Response(JSON.stringify(response), {
        headers: {
          "content-type": "application/json"
        }
      }) : new Response("");
    case "Response":
      return response;
    case "Error":
      return errorToResponse(response);
    case "Promise":
      return response.then((x) => mapCompactResponse(x, request));
    case "Function":
      return mapCompactResponse(response(), request);
    case "Number":
    case "Boolean":
      return new Response(response.toString());
    case "FormData":
      return new Response(response);
    default:
      if (response instanceof Response)
        return response;
      if (response instanceof Promise)
        return response.then((x) => mapCompactResponse(x, request));
      if (response instanceof Error)
        return errorToResponse(response);
      if (response instanceof ElysiaCustomStatusResponse)
        return mapResponse(response.response, {
          status: response.code,
          headers: {}
        });
      if (typeof response?.next == "function" || response instanceof ReadableStream)
        return handleStream(response, undefined, request);
      if (typeof response?.then == "function")
        return response.then((x) => mapResponse(x, set));
      if (typeof response?.toResponse == "function")
        return mapCompactResponse(response.toResponse());
      if ("charCodeAt" in response) {
        let code = response.charCodeAt(0);
        if (code === 123 || code === 91)
          return new Response(JSON.stringify(response), {
            headers: {
              "Content-Type": "application/json"
            }
          });
      }
      return new Response(response);
  }
};
var errorToResponse = (error, set2) => new Response(JSON.stringify({
  name: error?.name,
  message: error?.message,
  cause: error?.cause
}), {
  status: set2?.status !== 200 ? set2?.status ?? 500 : 500,
  headers: set2?.headers
});
var createStaticHandler = (handle, hooks, setHeaders = {}) => {
  if (typeof handle == "function")
    return;
  let response = mapResponse(handle, {
    headers: setHeaders
  });
  if (!hooks.parse?.length && !hooks.transform?.length && !hooks.beforeHandle?.length && !hooks.afterHandle?.length)
    return () => response.clone();
};
var handleResponse = createResponseHandler({
  mapResponse,
  mapCompactResponse
});
var handleStream = createStreamHandler({
  mapResponse,
  mapCompactResponse
});
var WebStandardAdapter = {
  name: "web-standard",
  isWebStandard: true,
  handler: {
    mapResponse,
    mapEarlyResponse,
    mapCompactResponse,
    createStaticHandler
  },
  composeHandler: {
    mapResponseContext: "c.request",
    preferWebstandardHeaders: true,
    headers: `c.headers={}
for(const [k,v] of c.request.headers.entries())c.headers[k]=v
`,
    parser: {
      json(isOptional2) {
        return isOptional2 ? `try{c.body=await c.request.json()}catch{}
` : `c.body=await c.request.json()
`;
      },
      text() {
        return `c.body=await c.request.text()
`;
      },
      urlencoded() {
        return `c.body=parseQuery(await c.request.text())
`;
      },
      arrayBuffer() {
        return `c.body=await c.request.arrayBuffer()
`;
      },
      formData(isOptional2) {
        let fnLiteral = `
c.body={}
`;
        return isOptional2 ? fnLiteral += "let form;try{form=await c.request.formData()}catch{}" : fnLiteral += `const form=await c.request.formData()
`, fnLiteral + `for(const key of form.keys()){if(c.body[key]) continue
const value=form.getAll(key)
if(value.length===1)c.body[key]=value[0]
else c.body[key]=value}`;
      }
    }
  },
  async stop(app, closeActiveConnections) {
    if (!app.server)
      throw new Error("Elysia isn't running. Call `app.listen` to start the server.");
    if (app.server && (app.server.stop(closeActiveConnections), app.server = null, app.event.stop?.length))
      for (let i = 0;i < app.event.stop.length; i++)
        app.event.stop[i].fn(app);
  },
  composeGeneralHandler: {
    parameters: "r",
    createContext(app) {
      let decoratorsLiteral = "", fnLiteral = "", defaultHeaders = app.setHeaders;
      for (let key of Object.keys(app.decorator))
        decoratorsLiteral += `,'${key}':decorator['${key}']`;
      let standardHostname = app.config.handler?.standardHostname ?? true, hasTrace = !!app.event.trace?.length;
      return fnLiteral += `const u=r.url,s=u.indexOf('/',${standardHostname ? 11 : 7}),qi=u.indexOf('?',s+1)
let p
if(qi===-1)p=u.substring(s)
else p=u.substring(s, qi)
`, hasTrace && (fnLiteral += `const id=randomId()
`), fnLiteral += "const c={request:r,store,qi,path:p,url:u,redirect,status,set:{headers:", fnLiteral += Object.keys(defaultHeaders ?? {}).length ? "Object.assign({},app.setHeaders)" : "Object.create(null)", fnLiteral += ",status:200}", app.inference.server && (fnLiteral += ",get server(){return app.getServer()}"), hasTrace && (fnLiteral += ",[ELYSIA_REQUEST_ID]:id"), fnLiteral += decoratorsLiteral, fnLiteral += `}
`, fnLiteral;
    },
    error404(hasEventHook, hasErrorHook, afterHandle = "") {
      let findDynamicRoute = "if(route===null){" + afterHandle + `
return `;
      return hasErrorHook ? findDynamicRoute += `app.handleError(c,notFound,false,${this.parameters})` : findDynamicRoute += hasEventHook ? "new Response(error404Message,{status:c.set.status===200?404:c.set.status,headers:c.set.headers})" : "error404.clone()", findDynamicRoute += "}", {
        declare: hasErrorHook ? "" : `const error404Message=notFound.message.toString()
const error404=new Response(error404Message,{status:404})
`,
        code: findDynamicRoute
      };
    }
  },
  composeError: {
    mapResponseContext: "",
    validationError: "return new Response(error.message,{headers:Object.assign({'content-type':'application/json'},set.headers),status:set.status})",
    unknownError: "return new Response(error.message,{headers:set.headers,status:error.status??set.status??500})"
  },
  listen() {
    return () => {
      throw new Error("WebStandard does not support listen, you might want to export default Elysia.fetch instead");
    };
  }
};
function isCloudflareWorker() {
  try {
    if (typeof caches < "u" && typeof caches.default < "u" || typeof WebSocketPair < "u")
      return true;
  } catch {
    return false;
  }
  return false;
}
var CloudflareAdapter = {
  ...WebStandardAdapter,
  name: "cloudflare-worker",
  composeGeneralHandler: {
    ...WebStandardAdapter.composeGeneralHandler,
    error404(hasEventHook, hasErrorHook, afterHandle) {
      let { code } = WebStandardAdapter.composeGeneralHandler.error404(hasEventHook, hasErrorHook, afterHandle);
      return {
        code,
        declare: hasErrorHook ? "" : `const error404Message=notFound.message.toString()
const error404={clone:()=>new Response(error404Message,{status:404})}
`
      };
    }
  },
  beforeCompile(app) {
    for (let route of app.routes)
      route.compile();
  },
  listen(app) {
    return (options, callback) => {
      console.warn("Cloudflare Worker does not support listen method. Please export default Elysia instance instead."), app.compile();
    };
  }
};
var separateFunction = (code) => {
  code.startsWith("async") && (code = code.slice(5)), code = code.trimStart();
  let index = -1;
  if (code.charCodeAt(0) === 40 && (index = code.indexOf("=>", code.indexOf(")")), index !== -1)) {
    let bracketEndIndex = index;
    for (;bracketEndIndex > 0 && code.charCodeAt(--bracketEndIndex) !== 41; )
      ;
    let body = code.slice(index + 2);
    return body.charCodeAt(0) === 32 && (body = body.trimStart()), [
      code.slice(1, bracketEndIndex),
      body,
      {
        isArrowReturn: body.charCodeAt(0) !== 123
      }
    ];
  }
  if (/^(\w+)=>/g.test(code) && (index = code.indexOf("=>"), index !== -1)) {
    let body = code.slice(index + 2);
    return body.charCodeAt(0) === 32 && (body = body.trimStart()), [
      code.slice(0, index),
      body,
      {
        isArrowReturn: body.charCodeAt(0) !== 123
      }
    ];
  }
  if (code.startsWith("function")) {
    index = code.indexOf("(");
    let end = code.indexOf(")");
    return [
      code.slice(index + 1, end),
      code.slice(end + 2),
      {
        isArrowReturn: false
      }
    ];
  }
  let start = code.indexOf("(");
  if (start !== -1) {
    let sep = code.indexOf(`
`, 2), parameter = code.slice(0, sep), end = parameter.lastIndexOf(")") + 1, body = code.slice(sep + 1);
    return [
      parameter.slice(start, end),
      "{" + body,
      {
        isArrowReturn: false
      }
    ];
  }
  let x = code.split(`
`, 2);
  return [x[0], x[1], { isArrowReturn: false }];
};
var bracketPairRange = (parameter) => {
  let start = parameter.indexOf("{");
  if (start === -1)
    return [-1, 0];
  let end = start + 1, deep = 1;
  for (;end < parameter.length; end++) {
    let char = parameter.charCodeAt(end);
    if (char === 123 ? deep++ : char === 125 && deep--, deep === 0)
      break;
  }
  return deep !== 0 ? [0, parameter.length] : [start, end + 1];
};
var bracketPairRangeReverse = (parameter) => {
  let end = parameter.lastIndexOf("}");
  if (end === -1)
    return [-1, 0];
  let start = end - 1, deep = 1;
  for (;start >= 0; start--) {
    let char = parameter.charCodeAt(start);
    if (char === 125 ? deep++ : char === 123 && deep--, deep === 0)
      break;
  }
  return deep !== 0 ? [-1, 0] : [start, end + 1];
};
var removeColonAlias = (parameter) => {
  for (;; ) {
    let start = parameter.indexOf(":");
    if (start === -1)
      break;
    let end = parameter.indexOf(",", start);
    end === -1 && (end = parameter.indexOf("}", start) - 1), end === -2 && (end = parameter.length), parameter = parameter.slice(0, start) + parameter.slice(end);
  }
  return parameter;
};
var retrieveRootParamters = (parameter) => {
  let hasParenthesis = false;
  parameter.charCodeAt(0) === 40 && (parameter = parameter.slice(1, -1)), parameter.charCodeAt(0) === 123 && (hasParenthesis = true, parameter = parameter.slice(1, -1)), parameter = parameter.replace(/( |\t|\n)/g, "").trim();
  let parameters = [];
  for (;; ) {
    let [start, end] = bracketPairRange(parameter);
    if (start === -1)
      break;
    parameters.push(parameter.slice(0, start - 1)), parameter.charCodeAt(end) === 44 && end++, parameter = parameter.slice(end);
  }
  parameter = removeColonAlias(parameter), parameter && (parameters = parameters.concat(parameter.split(",")));
  let parameterMap = /* @__PURE__ */ Object.create(null);
  for (let p of parameters) {
    if (p.indexOf(",") === -1) {
      parameterMap[p] = true;
      continue;
    }
    for (let q of p.split(","))
      parameterMap[q.trim()] = true;
  }
  return {
    hasParenthesis,
    parameters: parameterMap
  };
};
var findParameterReference = (parameter, inference) => {
  let { parameters, hasParenthesis } = retrieveRootParamters(parameter);
  return parameters.query && (inference.query = true), parameters.headers && (inference.headers = true), parameters.body && (inference.body = true), parameters.cookie && (inference.cookie = true), parameters.set && (inference.set = true), parameters.server && (inference.server = true), parameters.route && (inference.route = true), parameters.url && (inference.url = true), parameters.path && (inference.path = true), hasParenthesis ? `{ ${Object.keys(parameters).join(", ")} }` : Object.keys(parameters).join(", ");
};
var findEndIndex = (type, content, index) => {
  let regex2 = new RegExp(`${type.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}[\\n\\t,; ]`);
  index !== undefined && (regex2.lastIndex = index);
  let match = regex2.exec(content);
  return match ? match.index : -1;
};
var findAlias = (type, body, depth = 0) => {
  if (depth > 5)
    return [];
  let aliases = [], content = body;
  for (;; ) {
    let index = findEndIndex(" = " + type, content);
    if (index === -1 && (index = findEndIndex("=" + type, content)), index === -1) {
      let lastIndex = content.indexOf(" = " + type);
      if (lastIndex === -1 && (lastIndex = content.indexOf("=" + type)), lastIndex + 3 + type.length !== content.length)
        break;
      index = lastIndex;
    }
    let part = content.slice(0, index), lastPart = part.lastIndexOf(" "), variable = part.slice(lastPart !== -1 ? lastPart + 1 : -1);
    if (variable === "}") {
      let [start, end] = bracketPairRangeReverse(part);
      aliases.push(removeColonAlias(content.slice(start, end))), content = content.slice(index + 3 + type.length);
      continue;
    }
    for (;variable.charCodeAt(0) === 44; )
      variable = variable.slice(1);
    for (;variable.charCodeAt(0) === 9; )
      variable = variable.slice(1);
    variable.includes("(") || aliases.push(variable), content = content.slice(index + 3 + type.length);
  }
  for (let alias of aliases) {
    if (alias.charCodeAt(0) === 123)
      continue;
    let deepAlias = findAlias(alias, body);
    deepAlias.length > 0 && aliases.push(...deepAlias);
  }
  return aliases;
};
var extractMainParameter = (parameter) => {
  if (!parameter)
    return;
  if (parameter.charCodeAt(0) !== 123)
    return parameter;
  if (parameter = parameter.slice(2, -2), !parameter.includes(","))
    return parameter.indexOf("...") !== -1 ? parameter.slice(parameter.indexOf("...") + 3) : undefined;
  let spreadIndex = parameter.indexOf("...");
  if (spreadIndex !== -1)
    return parameter.slice(spreadIndex + 3).trimEnd();
};
var inferBodyReference = (code, aliases, inference) => {
  let access = (type, alias) => new RegExp(`${alias}\\.(${type})|${alias}\\["${type}"\\]|${alias}\\['${type}'\\]`).test(code);
  for (let alias of aliases)
    if (alias) {
      if (alias.charCodeAt(0) === 123) {
        let parameters = retrieveRootParamters(alias).parameters;
        parameters.query && (inference.query = true), parameters.headers && (inference.headers = true), parameters.body && (inference.body = true), parameters.cookie && (inference.cookie = true), parameters.set && (inference.set = true), parameters.server && (inference.server = true), parameters.url && (inference.url = true), parameters.route && (inference.route = true), parameters.path && (inference.path = true);
        continue;
      }
      if (!inference.query && (access("query", alias) || code.includes("return " + alias) || code.includes("return " + alias + ".query")) && (inference.query = true), !inference.headers && access("headers", alias) && (inference.headers = true), !inference.body && access("body", alias) && (inference.body = true), !inference.cookie && access("cookie", alias) && (inference.cookie = true), !inference.set && access("set", alias) && (inference.set = true), !inference.server && access("server", alias) && (inference.server = true), !inference.route && access("route", alias) && (inference.route = true), !inference.url && access("url", alias) && (inference.url = true), !inference.path && access("path", alias) && (inference.path = true), inference.query && inference.headers && inference.body && inference.cookie && inference.set && inference.server && inference.route && inference.url && inference.path)
        break;
    }
  return aliases;
};
var isContextPassToFunction = (context, body, inference) => {
  try {
    let captureFunction = new RegExp(`\\w\\((.*?)?${context}`, "gs");
    captureFunction.test(body);
    let nextChar = body.charCodeAt(captureFunction.lastIndex);
    return nextChar === 41 || nextChar === 44 ? (inference.query = true, inference.headers = true, inference.body = true, inference.cookie = true, inference.set = true, inference.server = true, inference.url = true, inference.route = true, inference.path = true, true) : false;
  } catch {
    return console.log("[Sucrose] warning: unexpected isContextPassToFunction error, you may continue development as usual but please report the following to maintainers:"), console.log("--- body ---"), console.log(body), console.log("--- context ---"), console.log(context), true;
  }
};
var pendingGC;
var caches2 = {};
var clearSucroseCache = (delay) => {
  delay === null || isCloudflareWorker() || (delay === undefined && (delay = 295000), pendingGC && clearTimeout(pendingGC), pendingGC = setTimeout(() => {
    caches2 = {}, pendingGC = undefined, isBun && Bun.gc(false);
  }, delay));
};
var mergeInference = (a, b) => ({
  body: a.body || b.body,
  cookie: a.cookie || b.cookie,
  headers: a.headers || b.headers,
  query: a.query || b.query,
  set: a.set || b.set,
  server: a.server || b.server,
  url: a.url || b.url,
  route: a.route || b.route,
  path: a.path || b.path
});
var sucrose = (lifeCycle, inference = {
  query: false,
  headers: false,
  body: false,
  cookie: false,
  set: false,
  server: false,
  url: false,
  route: false,
  path: false
}, settings = {}) => {
  let events = [];
  lifeCycle.request?.length && events.push(...lifeCycle.request), lifeCycle.beforeHandle?.length && events.push(...lifeCycle.beforeHandle), lifeCycle.parse?.length && events.push(...lifeCycle.parse), lifeCycle.error?.length && events.push(...lifeCycle.error), lifeCycle.transform?.length && events.push(...lifeCycle.transform), lifeCycle.afterHandle?.length && events.push(...lifeCycle.afterHandle), lifeCycle.mapResponse?.length && events.push(...lifeCycle.mapResponse), lifeCycle.afterResponse?.length && events.push(...lifeCycle.afterResponse), lifeCycle.handler && typeof lifeCycle.handler == "function" && events.push(lifeCycle.handler);
  for (let i = 0;i < events.length; i++) {
    let e = events[i];
    if (!e)
      continue;
    let event = typeof e == "object" ? e.fn : e;
    if (typeof event != "function")
      continue;
    let content = event.toString(), key = checksum(content), cachedInference = caches2[key];
    if (cachedInference) {
      inference = mergeInference(inference, cachedInference);
      continue;
    }
    clearSucroseCache(settings.gcTime);
    let fnInference = {
      query: false,
      headers: false,
      body: false,
      cookie: false,
      set: false,
      server: false,
      url: false,
      route: false,
      path: false
    }, [parameter, body] = separateFunction(content), rootParameters = findParameterReference(parameter, fnInference), mainParameter = extractMainParameter(rootParameters);
    if (mainParameter) {
      let aliases = findAlias(mainParameter, body.slice(1, -1));
      aliases.splice(0, -1, mainParameter);
      let code = body;
      code.charCodeAt(0) === 123 && code.charCodeAt(body.length - 1) === 125 && (code = code.slice(1, -1)), isContextPassToFunction(mainParameter, code, fnInference) || inferBodyReference(code, aliases, fnInference), !fnInference.query && code.includes("return " + mainParameter + ".query") && (fnInference.query = true);
    }
    if (caches2[key] || (caches2[key] = fnInference), inference = mergeInference(inference, fnInference), inference.query && inference.headers && inference.body && inference.cookie && inference.set && inference.server && inference.url && inference.route && inference.path)
      break;
  }
  return inference;
};
var mapResponse2 = (response, set2, request) => {
  if (isNotEmpty(set2.headers) || set2.status !== 200 || set2.cookie)
    switch (handleSet(set2), response?.constructor?.name) {
      case "String":
        return new Response(response, set2);
      case "Array":
      case "Object":
        return set2.headers["content-type"] = "application/json", new Response(JSON.stringify(response), set2);
      case "ElysiaFile":
        return handleFile(response.value, set2);
      case "File":
        return handleFile(response, set2);
      case "Blob":
        return handleFile(response, set2);
      case "ElysiaCustomStatusResponse":
        return set2.status = response.code, mapResponse2(response.response, set2, request);
      case undefined:
        return response ? new Response(JSON.stringify(response), set2) : new Response("", set2);
      case "Response":
        return handleResponse2(response, set2, request);
      case "Error":
        return errorToResponse2(response, set2);
      case "Promise":
        return response.then((x) => mapResponse2(x, set2, request));
      case "Function":
        return mapResponse2(response(), set2, request);
      case "Number":
      case "Boolean":
        return new Response(response.toString(), set2);
      case "Cookie":
        return response instanceof Cookie ? new Response(response.value, set2) : new Response(response?.toString(), set2);
      case "FormData":
        return new Response(response, set2);
      default:
        if (response instanceof Response)
          return handleResponse2(response, set2, request);
        if (response instanceof Promise)
          return response.then((x) => mapResponse2(x, set2));
        if (response instanceof Error)
          return errorToResponse2(response, set2);
        if (response instanceof ElysiaCustomStatusResponse)
          return set2.status = response.code, mapResponse2(response.response, set2, request);
        if (typeof response?.next == "function" || response instanceof ReadableStream)
          return handleStream2(response, set2, request);
        if (typeof response?.then == "function")
          return response.then((x) => mapResponse2(x, set2));
        if (typeof response?.toResponse == "function")
          return mapResponse2(response.toResponse(), set2);
        if ("charCodeAt" in response) {
          let code = response.charCodeAt(0);
          if (code === 123 || code === 91)
            return set2.headers["Content-Type"] || (set2.headers["Content-Type"] = "application/json"), new Response(JSON.stringify(response), set2);
        }
        return new Response(response, set2);
    }
  return typeof response?.next == "function" || response instanceof ReadableStream ? handleStream2(response, set2, request) : mapCompactResponse2(response, request);
};
var mapEarlyResponse2 = (response, set2, request) => {
  if (response != null)
    if (isNotEmpty(set2.headers) || set2.status !== 200 || set2.cookie)
      switch (handleSet(set2), response?.constructor?.name) {
        case "String":
          return new Response(response, set2);
        case "Array":
        case "Object":
          return set2.headers["content-type"] = "application/json", new Response(JSON.stringify(response), set2);
        case "ElysiaFile":
          return handleFile(response.value, set2);
        case "File":
          return handleFile(response, set2);
        case "Blob":
          return handleFile(response, set2);
        case "ElysiaCustomStatusResponse":
          return set2.status = response.code, mapEarlyResponse2(response.response, set2, request);
        case undefined:
          return response ? new Response(JSON.stringify(response), set2) : undefined;
        case "Response":
          return handleResponse2(response, set2, request);
        case "Promise":
          return response.then((x) => mapEarlyResponse2(x, set2));
        case "Error":
          return errorToResponse2(response, set2);
        case "Function":
          return mapEarlyResponse2(response(), set2);
        case "Number":
        case "Boolean":
          return new Response(response.toString(), set2);
        case "FormData":
          return new Response(response);
        case "Cookie":
          return response instanceof Cookie ? new Response(response.value, set2) : new Response(response?.toString(), set2);
        default:
          if (response instanceof Response)
            return handleResponse2(response, set2, request);
          if (response instanceof Promise)
            return response.then((x) => mapEarlyResponse2(x, set2));
          if (response instanceof Error)
            return errorToResponse2(response, set2);
          if (response instanceof ElysiaCustomStatusResponse)
            return set2.status = response.code, mapEarlyResponse2(response.response, set2, request);
          if (typeof response?.next == "function" || response instanceof ReadableStream)
            return handleStream2(response, set2, request);
          if (typeof response?.then == "function")
            return response.then((x) => mapEarlyResponse2(x, set2));
          if (typeof response?.toResponse == "function")
            return mapEarlyResponse2(response.toResponse(), set2);
          if ("charCodeAt" in response) {
            let code = response.charCodeAt(0);
            if (code === 123 || code === 91)
              return set2.headers["Content-Type"] || (set2.headers["Content-Type"] = "application/json"), new Response(JSON.stringify(response), set2);
          }
          return new Response(response, set2);
      }
    else
      switch (response?.constructor?.name) {
        case "String":
          return new Response(response);
        case "Array":
        case "Object":
          return set2.headers["content-type"] = "application/json", new Response(JSON.stringify(response), set2);
        case "ElysiaFile":
          return handleFile(response.value, set2);
        case "File":
          return handleFile(response, set2);
        case "Blob":
          return handleFile(response, set2);
        case "ElysiaCustomStatusResponse":
          return set2.status = response.code, mapEarlyResponse2(response.response, set2, request);
        case undefined:
          return response ? new Response(JSON.stringify(response), {
            headers: {
              "content-type": "application/json"
            }
          }) : new Response("");
        case "Response":
          return response;
        case "Promise":
          return response.then((x) => {
            let r = mapEarlyResponse2(x, set2);
            if (r !== undefined)
              return r;
          });
        case "Error":
          return errorToResponse2(response, set2);
        case "Function":
          return mapCompactResponse2(response(), request);
        case "Number":
        case "Boolean":
          return new Response(response.toString());
        case "Cookie":
          return response instanceof Cookie ? new Response(response.value, set2) : new Response(response?.toString(), set2);
        case "FormData":
          return new Response(response);
        default:
          if (response instanceof Response)
            return response;
          if (response instanceof Promise)
            return response.then((x) => mapEarlyResponse2(x, set2));
          if (response instanceof Error)
            return errorToResponse2(response, set2);
          if (response instanceof ElysiaCustomStatusResponse)
            return set2.status = response.code, mapEarlyResponse2(response.response, set2, request);
          if (typeof response?.next == "function" || response instanceof ReadableStream)
            return handleStream2(response, set2, request);
          if (typeof response?.then == "function")
            return response.then((x) => mapEarlyResponse2(x, set2));
          if (typeof response?.toResponse == "function")
            return mapEarlyResponse2(response.toResponse(), set2);
          if ("charCodeAt" in response) {
            let code = response.charCodeAt(0);
            if (code === 123 || code === 91)
              return set2.headers["Content-Type"] || (set2.headers["Content-Type"] = "application/json"), new Response(JSON.stringify(response), set2);
          }
          return new Response(response);
      }
};
var mapCompactResponse2 = (response, request) => {
  switch (response?.constructor?.name) {
    case "String":
      return new Response(response);
    case "Object":
    case "Array":
      return new Response(JSON.stringify(response), {
        headers: {
          "Content-Type": "application/json"
        }
      });
    case "ElysiaFile":
      return handleFile(response.value);
    case "File":
      return handleFile(response);
    case "Blob":
      return handleFile(response);
    case "ElysiaCustomStatusResponse":
      return mapResponse2(response.response, {
        status: response.code,
        headers: {}
      });
    case undefined:
      return response ? new Response(JSON.stringify(response), {
        headers: {
          "content-type": "application/json"
        }
      }) : new Response("");
    case "Response":
      return response;
    case "Error":
      return errorToResponse2(response);
    case "Promise":
      return response.then((x) => mapCompactResponse2(x, request));
    case "Function":
      return mapCompactResponse2(response(), request);
    case "Number":
    case "Boolean":
      return new Response(response.toString());
    case "FormData":
      return new Response(response);
    default:
      if (response instanceof Response)
        return response;
      if (response instanceof Promise)
        return response.then((x) => mapCompactResponse2(x, request));
      if (response instanceof Error)
        return errorToResponse2(response);
      if (response instanceof ElysiaCustomStatusResponse)
        return mapResponse2(response.response, {
          status: response.code,
          headers: {}
        });
      if (typeof response?.next == "function" || response instanceof ReadableStream)
        return handleStream2(response, undefined, request);
      if (typeof response?.then == "function")
        return response.then((x) => mapResponse2(x, set));
      if (typeof response?.toResponse == "function")
        return mapCompactResponse2(response.toResponse());
      if ("charCodeAt" in response) {
        let code = response.charCodeAt(0);
        if (code === 123 || code === 91)
          return new Response(JSON.stringify(response), {
            headers: {
              "Content-Type": "application/json"
            }
          });
      }
      return new Response(response);
  }
};
var errorToResponse2 = (error, set2) => new Response(JSON.stringify({
  name: error?.name,
  message: error?.message,
  cause: error?.cause
}), {
  status: set2?.status !== 200 ? set2?.status ?? 500 : 500,
  headers: set2?.headers
});
var createStaticHandler2 = (handle, hooks, setHeaders = {}) => {
  if (typeof handle == "function")
    return;
  let response = mapResponse2(handle, {
    headers: setHeaders
  });
  if (!hooks.parse?.length && !hooks.transform?.length && !hooks.beforeHandle?.length && !hooks.afterHandle?.length)
    return () => response.clone();
};
var handleResponse2 = createResponseHandler({
  mapResponse: mapResponse2,
  mapCompactResponse: mapCompactResponse2
});
var handleStream2 = createStreamHandler({
  mapResponse: mapResponse2,
  mapCompactResponse: mapCompactResponse2
});
var KEY_HAS_PLUS = 1;
var KEY_NEEDS_DECODE = 2;
var VALUE_HAS_PLUS = 4;
var VALUE_NEEDS_DECODE = 8;
function parseQueryFromURL(input, startIndex = 0, array, object) {
  let result = /* @__PURE__ */ Object.create(null), flags = 0, inputLength = input.length, startingIndex = startIndex - 1, equalityIndex = startingIndex;
  for (let i = 0;i < inputLength; i++)
    switch (input.charCodeAt(i)) {
      case 38:
        processKeyValuePair(input, i), startingIndex = i, equalityIndex = i, flags = 0;
        break;
      case 61:
        equalityIndex <= startingIndex ? equalityIndex = i : flags |= VALUE_NEEDS_DECODE;
        break;
      case 43:
        equalityIndex > startingIndex ? flags |= VALUE_HAS_PLUS : flags |= KEY_HAS_PLUS;
        break;
      case 37:
        equalityIndex > startingIndex ? flags |= VALUE_NEEDS_DECODE : flags |= KEY_NEEDS_DECODE;
        break;
    }
  return startingIndex < inputLength && processKeyValuePair(input, inputLength), result;
  function processKeyValuePair(input2, endIndex) {
    let hasBothKeyValuePair = equalityIndex > startingIndex, effectiveEqualityIndex = hasBothKeyValuePair ? equalityIndex : endIndex, keySlice = input2.slice(startingIndex + 1, effectiveEqualityIndex);
    if (!hasBothKeyValuePair && keySlice.length === 0)
      return;
    let finalKey = keySlice;
    flags & KEY_HAS_PLUS && (finalKey = finalKey.replace(/\+/g, " ")), flags & KEY_NEEDS_DECODE && (finalKey = import_fast_decode_uri_component4.default(finalKey) || finalKey);
    let finalValue = "";
    if (hasBothKeyValuePair) {
      let valueSlice = input2.slice(equalityIndex + 1, endIndex);
      flags & VALUE_HAS_PLUS && (valueSlice = valueSlice.replace(/\+/g, " ")), flags & VALUE_NEEDS_DECODE && (valueSlice = import_fast_decode_uri_component4.default(valueSlice) || valueSlice), finalValue = valueSlice;
    }
    let currentValue = result[finalKey];
    array?.[finalKey] ? finalValue.charCodeAt(0) === 91 ? (object?.[finalKey] ? finalValue = JSON.parse(finalValue) : finalValue = finalValue.slice(1, -1).split(","), currentValue === undefined ? result[finalKey] = finalValue : Array.isArray(currentValue) ? currentValue.push(...finalValue) : (result[finalKey] = finalValue, result[finalKey].unshift(currentValue))) : currentValue === undefined ? result[finalKey] = finalValue : Array.isArray(currentValue) ? currentValue.push(finalValue) : result[finalKey] = [currentValue, finalValue] : result[finalKey] = finalValue;
  }
}
function parseQueryStandardSchema(input, startIndex = 0) {
  let result = /* @__PURE__ */ Object.create(null), flags = 0, inputLength = input.length, startingIndex = startIndex - 1, equalityIndex = startingIndex;
  for (let i = 0;i < inputLength; i++)
    switch (input.charCodeAt(i)) {
      case 38:
        processKeyValuePair(input, i), startingIndex = i, equalityIndex = i, flags = 0;
        break;
      case 61:
        equalityIndex <= startingIndex ? equalityIndex = i : flags |= VALUE_NEEDS_DECODE;
        break;
      case 43:
        equalityIndex > startingIndex ? flags |= VALUE_HAS_PLUS : flags |= KEY_HAS_PLUS;
        break;
      case 37:
        equalityIndex > startingIndex ? flags |= VALUE_NEEDS_DECODE : flags |= KEY_NEEDS_DECODE;
        break;
    }
  return startingIndex < inputLength && processKeyValuePair(input, inputLength), result;
  function processKeyValuePair(input2, endIndex) {
    let hasBothKeyValuePair = equalityIndex > startingIndex, effectiveEqualityIndex = hasBothKeyValuePair ? equalityIndex : endIndex, keySlice = input2.slice(startingIndex + 1, effectiveEqualityIndex);
    if (!hasBothKeyValuePair && keySlice.length === 0)
      return;
    let finalKey = keySlice;
    flags & KEY_HAS_PLUS && (finalKey = finalKey.replace(/\+/g, " ")), flags & KEY_NEEDS_DECODE && (finalKey = import_fast_decode_uri_component4.default(finalKey) || finalKey);
    let finalValue = "";
    if (hasBothKeyValuePair) {
      let valueSlice = input2.slice(equalityIndex + 1, endIndex);
      flags & VALUE_HAS_PLUS && (valueSlice = valueSlice.replace(/\+/g, " ")), flags & VALUE_NEEDS_DECODE && (valueSlice = import_fast_decode_uri_component4.default(valueSlice) || valueSlice), finalValue = valueSlice;
    }
    let currentValue = result[finalKey];
    if (finalValue.charCodeAt(0) === 91 && finalValue.charCodeAt(finalValue.length - 1) === 93) {
      try {
        finalValue = JSON.parse(finalValue);
      } catch {}
      currentValue === undefined ? result[finalKey] = finalValue : Array.isArray(currentValue) ? currentValue.push(finalValue) : result[finalKey] = [currentValue, finalValue];
    } else if (finalValue.charCodeAt(0) === 123 && finalValue.charCodeAt(finalValue.length - 1) === 125) {
      try {
        finalValue = JSON.parse(finalValue);
      } catch {}
      currentValue === undefined ? result[finalKey] = finalValue : Array.isArray(currentValue) ? currentValue.push(finalValue) : result[finalKey] = [currentValue, finalValue];
    } else
      finalValue.includes(",") && (finalValue = finalValue.split(",")), currentValue === undefined ? result[finalKey] = finalValue : Array.isArray(currentValue) ? currentValue.push(finalValue) : result[finalKey] = [currentValue, finalValue];
  }
}
function parseQuery(input) {
  let result = /* @__PURE__ */ Object.create(null), flags = 0, inputLength = input.length, startingIndex = -1, equalityIndex = -1;
  for (let i = 0;i < inputLength; i++)
    switch (input.charCodeAt(i)) {
      case 38:
        processKeyValuePair(input, i), startingIndex = i, equalityIndex = i, flags = 0;
        break;
      case 61:
        equalityIndex <= startingIndex ? equalityIndex = i : flags |= VALUE_NEEDS_DECODE;
        break;
      case 43:
        equalityIndex > startingIndex ? flags |= VALUE_HAS_PLUS : flags |= KEY_HAS_PLUS;
        break;
      case 37:
        equalityIndex > startingIndex ? flags |= VALUE_NEEDS_DECODE : flags |= KEY_NEEDS_DECODE;
        break;
    }
  return startingIndex < inputLength && processKeyValuePair(input, inputLength), result;
  function processKeyValuePair(input2, endIndex) {
    let hasBothKeyValuePair = equalityIndex > startingIndex, effectiveEqualityIndex = hasBothKeyValuePair ? equalityIndex : endIndex, keySlice = input2.slice(startingIndex + 1, effectiveEqualityIndex);
    if (!hasBothKeyValuePair && keySlice.length === 0)
      return;
    let finalKey = keySlice;
    flags & KEY_HAS_PLUS && (finalKey = finalKey.replace(/\+/g, " ")), flags & KEY_NEEDS_DECODE && (finalKey = import_fast_decode_uri_component4.default(finalKey) || finalKey);
    let finalValue = "";
    if (hasBothKeyValuePair) {
      let valueSlice = input2.slice(equalityIndex + 1, endIndex);
      flags & VALUE_HAS_PLUS && (valueSlice = valueSlice.replace(/\+/g, " ")), flags & VALUE_NEEDS_DECODE && (valueSlice = import_fast_decode_uri_component4.default(valueSlice) || valueSlice), finalValue = valueSlice;
    }
    let currentValue = result[finalKey];
    currentValue === undefined ? result[finalKey] = finalValue : Array.isArray(currentValue) ? currentValue.push(finalValue) : result[finalKey] = [currentValue, finalValue];
  }
}
var ELYSIA_TRACE = Symbol("ElysiaTrace");
var createProcess = () => {
  let { promise, resolve } = Promise.withResolvers(), { promise: end, resolve: resolveEnd } = Promise.withResolvers(), { promise: error, resolve: resolveError } = Promise.withResolvers(), callbacks = [], callbacksEnd = [];
  return [
    (callback) => (callback && callbacks.push(callback), promise),
    (process2) => {
      let processes = [], resolvers = [], groupError = null;
      for (let i = 0;i < (process2.total ?? 0); i++) {
        let { promise: promise2, resolve: resolve2 } = Promise.withResolvers(), { promise: end2, resolve: resolveEnd2 } = Promise.withResolvers(), { promise: error2, resolve: resolveError2 } = Promise.withResolvers(), callbacks2 = [], callbacksEnd2 = [];
        processes.push((callback) => (callback && callbacks2.push(callback), promise2)), resolvers.push((process3) => {
          let result2 = {
            ...process3,
            end: end2,
            error: error2,
            index: i,
            onStop(callback) {
              return callback && callbacksEnd2.push(callback), end2;
            }
          };
          resolve2(result2);
          for (let i2 = 0;i2 < callbacks2.length; i2++)
            callbacks2[i2](result2);
          return (error3 = null) => {
            let end3 = performance.now();
            error3 && (groupError = error3);
            let detail = {
              end: end3,
              error: error3,
              get elapsed() {
                return end3 - process3.begin;
              }
            };
            for (let i2 = 0;i2 < callbacksEnd2.length; i2++)
              callbacksEnd2[i2](detail);
            resolveEnd2(end3), resolveError2(error3);
          };
        });
      }
      let result = {
        ...process2,
        end,
        error,
        onEvent(callback) {
          for (let i = 0;i < processes.length; i++)
            processes[i](callback);
        },
        onStop(callback) {
          return callback && callbacksEnd.push(callback), end;
        }
      };
      resolve(result);
      for (let i = 0;i < callbacks.length; i++)
        callbacks[i](result);
      return {
        resolveChild: resolvers,
        resolve(error2 = null) {
          let end2 = performance.now();
          !error2 && groupError && (error2 = groupError);
          let detail = {
            end: end2,
            error: error2,
            get elapsed() {
              return end2 - process2.begin;
            }
          };
          for (let i = 0;i < callbacksEnd.length; i++)
            callbacksEnd[i](detail);
          resolveEnd(end2), resolveError(error2);
        }
      };
    }
  ];
};
var createTracer = (traceListener) => (context) => {
  let [onRequest, resolveRequest] = createProcess(), [onParse, resolveParse] = createProcess(), [onTransform, resolveTransform] = createProcess(), [onBeforeHandle, resolveBeforeHandle] = createProcess(), [onHandle, resolveHandle] = createProcess(), [onAfterHandle, resolveAfterHandle] = createProcess(), [onError, resolveError] = createProcess(), [onMapResponse, resolveMapResponse] = createProcess(), [onAfterResponse, resolveAfterResponse] = createProcess();
  return traceListener({
    id: context[ELYSIA_REQUEST_ID],
    context,
    set: context.set,
    onRequest,
    onParse,
    onTransform,
    onBeforeHandle,
    onHandle,
    onAfterHandle,
    onMapResponse,
    onAfterResponse,
    onError,
    time: Date.now(),
    store: context.store
  }), {
    request: resolveRequest,
    parse: resolveParse,
    transform: resolveTransform,
    beforeHandle: resolveBeforeHandle,
    handle: resolveHandle,
    afterHandle: resolveAfterHandle,
    error: resolveError,
    mapResponse: resolveMapResponse,
    afterResponse: resolveAfterResponse
  };
};
var isOptional = (schema) => schema ? schema?.[Kind] === "Import" && schema.References ? schema.References().some(isOptional) : (schema.schema && (schema = schema.schema), !!schema && (OptionalKind in schema)) : false;
var hasAdditionalProperties = (_schema) => {
  if (!_schema)
    return false;
  let schema = _schema?.schema ?? _schema;
  if (schema[Kind] === "Import" && _schema.References)
    return _schema.References().some(hasAdditionalProperties);
  if (schema.anyOf)
    return schema.anyOf.some(hasAdditionalProperties);
  if (schema.someOf)
    return schema.someOf.some(hasAdditionalProperties);
  if (schema.allOf)
    return schema.allOf.some(hasAdditionalProperties);
  if (schema.not)
    return schema.not.some(hasAdditionalProperties);
  if (schema.type === "object") {
    let properties = schema.properties;
    if ("additionalProperties" in schema)
      return schema.additionalProperties;
    if ("patternProperties" in schema)
      return false;
    for (let key of Object.keys(properties)) {
      let property = properties[key];
      if (property.type === "object") {
        if (hasAdditionalProperties(property))
          return true;
      } else if (property.anyOf) {
        for (let i = 0;i < property.anyOf.length; i++)
          if (hasAdditionalProperties(property.anyOf[i]))
            return true;
      }
      return property.additionalProperties;
    }
    return false;
  }
  return schema.type === "array" && schema.items && !Array.isArray(schema.items) ? hasAdditionalProperties(schema.items) : false;
};
var hasType = (type, schema) => {
  if (!schema)
    return false;
  if (Kind in schema && schema[Kind] === type)
    return true;
  if (schema.type === "object") {
    let properties = schema.properties;
    if (!properties)
      return false;
    for (let key of Object.keys(properties)) {
      let property = properties[key];
      if (property.type === "object") {
        if (hasType(type, property))
          return true;
      } else if (property.anyOf) {
        for (let i = 0;i < property.anyOf.length; i++)
          if (hasType(type, property.anyOf[i]))
            return true;
      }
      if (Kind in property && property[Kind] === type)
        return true;
    }
    return false;
  }
  return !!schema.properties && Kind in schema.properties && schema.properties[Kind] === type;
};
var hasElysiaMeta = (meta, _schema) => {
  if (!_schema)
    return false;
  let schema = _schema?.schema ?? _schema;
  if (schema.elysiaMeta === meta)
    return true;
  if (schema[Kind] === "Import" && _schema.References)
    return _schema.References().some((schema2) => hasElysiaMeta(meta, schema2));
  if (schema.anyOf)
    return schema.anyOf.some((schema2) => hasElysiaMeta(meta, schema2));
  if (schema.someOf)
    return schema.someOf.some((schema2) => hasElysiaMeta(meta, schema2));
  if (schema.allOf)
    return schema.allOf.some((schema2) => hasElysiaMeta(meta, schema2));
  if (schema.not)
    return schema.not.some((schema2) => hasElysiaMeta(meta, schema2));
  if (schema.type === "object") {
    let properties = schema.properties;
    for (let key of Object.keys(properties)) {
      let property = properties[key];
      if (property.type === "object") {
        if (hasElysiaMeta(meta, property))
          return true;
      } else if (property.anyOf) {
        for (let i = 0;i < property.anyOf.length; i++)
          if (hasElysiaMeta(meta, property.anyOf[i]))
            return true;
      }
      return schema.elysiaMeta === meta;
    }
    return false;
  }
  return schema.type === "array" && schema.items && !Array.isArray(schema.items) ? hasElysiaMeta(meta, schema.items) : false;
};
var hasProperty = (expectedProperty, _schema) => {
  if (!_schema)
    return;
  let schema = _schema.schema ?? _schema;
  if (schema[Kind] === "Import" && _schema.References)
    return _schema.References().some((schema2) => hasProperty(expectedProperty, schema2));
  if (schema.type === "object") {
    let properties = schema.properties;
    if (!properties)
      return false;
    for (let key of Object.keys(properties)) {
      let property = properties[key];
      if (expectedProperty in property)
        return true;
      if (property.type === "object") {
        if (hasProperty(expectedProperty, property))
          return true;
      } else if (property.anyOf) {
        for (let i = 0;i < property.anyOf.length; i++)
          if (hasProperty(expectedProperty, property.anyOf[i]))
            return true;
      }
    }
    return false;
  }
  return expectedProperty in schema;
};
var hasRef = (schema) => {
  if (!schema)
    return false;
  if (schema.oneOf) {
    for (let i = 0;i < schema.oneOf.length; i++)
      if (hasRef(schema.oneOf[i]))
        return true;
  }
  if (schema.anyOf) {
    for (let i = 0;i < schema.anyOf.length; i++)
      if (hasRef(schema.anyOf[i]))
        return true;
  }
  if (schema.oneOf) {
    for (let i = 0;i < schema.oneOf.length; i++)
      if (hasRef(schema.oneOf[i]))
        return true;
  }
  if (schema.allOf) {
    for (let i = 0;i < schema.allOf.length; i++)
      if (hasRef(schema.allOf[i]))
        return true;
  }
  if (schema.not && hasRef(schema.not))
    return true;
  if (schema.type === "object" && schema.properties) {
    let properties = schema.properties;
    for (let key of Object.keys(properties)) {
      let property = properties[key];
      if (hasRef(property) || property.type === "array" && property.items && hasRef(property.items))
        return true;
    }
  }
  return schema.type === "array" && schema.items && hasRef(schema.items) ? true : schema[Kind] === "Ref" && ("$ref" in schema);
};
var hasTransform = (schema) => {
  if (!schema)
    return false;
  if (schema.$ref && schema.$defs && schema.$ref in schema.$defs && hasTransform(schema.$defs[schema.$ref]))
    return true;
  if (schema.oneOf) {
    for (let i = 0;i < schema.oneOf.length; i++)
      if (hasTransform(schema.oneOf[i]))
        return true;
  }
  if (schema.anyOf) {
    for (let i = 0;i < schema.anyOf.length; i++)
      if (hasTransform(schema.anyOf[i]))
        return true;
  }
  if (schema.allOf) {
    for (let i = 0;i < schema.allOf.length; i++)
      if (hasTransform(schema.allOf[i]))
        return true;
  }
  if (schema.not && hasTransform(schema.not))
    return true;
  if (schema.type === "object" && schema.properties) {
    let properties = schema.properties;
    for (let key of Object.keys(properties)) {
      let property = properties[key];
      if (hasTransform(property) || property.type === "array" && property.items && hasTransform(property.items))
        return true;
    }
  }
  return schema.type === "array" && schema.items && hasTransform(schema.items) ? true : (TransformKind in schema);
};
var replaceSchemaType = (schema, options, _config = {}) => {
  let config = _config;
  if (config.root = true, !Array.isArray(options))
    return options.original = schema, _replaceSchemaType(schema, options, config);
  for (let option of options)
    option.original = schema, schema = _replaceSchemaType(schema, option, config);
  return schema;
};
var _replaceSchemaType = (schema, options, config) => {
  if (!schema)
    return schema;
  let root = config.root;
  if (options.onlyFirst && schema.type === options.onlyFirst)
    return options.to(schema) ?? schema;
  if (options.untilObjectFound && !root && schema.type === "object")
    return schema;
  let fromSymbol = options.from[Kind];
  if (schema.oneOf) {
    for (let i = 0;i < schema.oneOf.length; i++)
      schema.oneOf[i] = _replaceSchemaType(schema.oneOf[i], options, config);
    return schema;
  }
  if (schema.anyOf) {
    for (let i = 0;i < schema.anyOf.length; i++)
      schema.anyOf[i] = _replaceSchemaType(schema.anyOf[i], options, config);
    return schema;
  }
  if (schema.allOf) {
    for (let i = 0;i < schema.allOf.length; i++)
      schema.allOf[i] = _replaceSchemaType(schema.allOf[i], options, config);
    return schema;
  }
  if (schema.not)
    return _replaceSchemaType(schema.not, options, config);
  let isRoot = root && !!options.excludeRoot;
  if (schema[Kind] === fromSymbol) {
    let { anyOf, oneOf, allOf, not, properties: properties2, items, ...rest } = schema, to = options.to(rest);
    if (!to)
      return schema;
    let transform2, composeProperties = (schema2) => {
      let v = _composeProperties(schema2);
      return v.$id && delete v.$id, v;
    }, _composeProperties = (v) => {
      if (properties2 && v.type === "object") {
        let newProperties = {};
        for (let [key, value2] of Object.entries(properties2))
          newProperties[key] = _replaceSchemaType(value2, options, {
            ...config,
            root: false
          });
        return {
          ...rest,
          ...v,
          properties: newProperties
        };
      }
      if (items && v.type === "array")
        return {
          ...rest,
          ...v,
          items: _replaceSchemaType(items, options, {
            ...config,
            root: false
          })
        };
      let value = {
        ...rest,
        ...v
      };
      return delete value.required, properties2 && v.type === "string" && v.format === "ObjectString" && v.default === "{}" ? (transform2 = t.ObjectString(properties2, rest), value.properties = properties2) : items && v.type === "string" && v.format === "ArrayString" && v.default === "[]" && (transform2 = t.ArrayString(items, rest), value.items = items), value;
    };
    if (isRoot) {
      if (properties2) {
        let newProperties = {};
        for (let [key, value] of Object.entries(properties2))
          newProperties[key] = _replaceSchemaType(value, options, {
            ...config,
            root: false
          });
        return {
          ...rest,
          properties: newProperties
        };
      } else if (items?.map)
        return {
          ...rest,
          items: items.map((v) => _replaceSchemaType(v, options, {
            ...config,
            root: false
          }))
        };
      return rest;
    }
    if (to.anyOf)
      for (let i = 0;i < to.anyOf.length; i++)
        to.anyOf[i] = composeProperties(to.anyOf[i]);
    else if (to.oneOf)
      for (let i = 0;i < to.oneOf.length; i++)
        to.oneOf[i] = composeProperties(to.oneOf[i]);
    else if (to.allOf)
      for (let i = 0;i < to.allOf.length; i++)
        to.allOf[i] = composeProperties(to.allOf[i]);
    else
      to.not && (to.not = composeProperties(to.not));
    if (transform2 && (to[TransformKind] = transform2[TransformKind]), to.anyOf || to.oneOf || to.allOf || to.not)
      return to;
    if (properties2) {
      let newProperties = {};
      for (let [key, value] of Object.entries(properties2))
        newProperties[key] = _replaceSchemaType(value, options, {
          ...config,
          root: false
        });
      return {
        ...rest,
        ...to,
        properties: newProperties
      };
    } else if (items?.map)
      return {
        ...rest,
        ...to,
        items: items.map((v) => _replaceSchemaType(v, options, {
          ...config,
          root: false
        }))
      };
    return {
      ...rest,
      ...to
    };
  }
  let properties = schema?.properties;
  if (properties && root && options.rootOnly !== true)
    for (let [key, value] of Object.entries(properties))
      switch (value[Kind]) {
        case fromSymbol:
          let { anyOf, oneOf, allOf, not, type, ...rest } = value, to = options.to(rest);
          if (!to)
            return schema;
          if (to.anyOf)
            for (let i = 0;i < to.anyOf.length; i++)
              to.anyOf[i] = { ...rest, ...to.anyOf[i] };
          else if (to.oneOf)
            for (let i = 0;i < to.oneOf.length; i++)
              to.oneOf[i] = { ...rest, ...to.oneOf[i] };
          else if (to.allOf)
            for (let i = 0;i < to.allOf.length; i++)
              to.allOf[i] = { ...rest, ...to.allOf[i] };
          else
            to.not && (to.not = { ...rest, ...to.not });
          properties[key] = {
            ...rest,
            ..._replaceSchemaType(rest, options, {
              ...config,
              root: false
            })
          };
          break;
        case "Object":
        case "Union":
          properties[key] = _replaceSchemaType(value, options, {
            ...config,
            root: false
          });
          break;
        default:
          if (Array.isArray(value.items))
            for (let i = 0;i < value.items.length; i++)
              value.items[i] = _replaceSchemaType(value.items[i], options, {
                ...config,
                root: false
              });
          else
            value.anyOf || value.oneOf || value.allOf || value.not ? properties[key] = _replaceSchemaType(value, options, {
              ...config,
              root: false
            }) : value.type === "array" && (value.items = _replaceSchemaType(value.items, options, {
              ...config,
              root: false
            }));
          break;
      }
  return schema.type === "array" && schema.items && (Array.isArray(schema.items) ? schema.items = schema.items.map((item) => _replaceSchemaType(item, options, {
    ...config,
    root: false
  })) : schema.items = _replaceSchemaType(schema.items, options, {
    ...config,
    root: false
  })), schema;
};
var createCleaner = (schema) => (value) => {
  if (typeof value == "object")
    try {
      return exports_value2.Clean(schema, value);
    } catch {}
  return value;
};
var getSchemaValidator = (s, {
  models = {},
  dynamic = false,
  modules,
  normalize = false,
  additionalProperties = false,
  forceAdditionalProperties = false,
  coerce = false,
  additionalCoerce = [],
  validators,
  sanitize: sanitize2
} = {}) => {
  if (validators = validators?.filter((x) => x), !s) {
    if (!validators?.length)
      return;
    s = validators[0], validators = validators.slice(1);
  }
  let doesHaveRef, replaceSchema = (schema2) => coerce ? replaceSchemaType(schema2, [
    {
      from: t.Number(),
      to: (options) => t.Numeric(options),
      untilObjectFound: true
    },
    {
      from: t.Boolean(),
      to: (options) => t.BooleanString(options),
      untilObjectFound: true
    },
    ...Array.isArray(additionalCoerce) ? additionalCoerce : [additionalCoerce]
  ]) : replaceSchemaType(schema2, additionalCoerce), mapSchema = (s2) => {
    if (s2 && typeof s2 != "string" && "~standard" in s2)
      return s2;
    if (!s2)
      return;
    let schema2;
    if (typeof s2 != "string")
      schema2 = s2;
    else if (schema2 = modules && s2 in modules.$defs ? modules.Import(s2) : models[s2], !schema2)
      return;
    if (Kind in schema2)
      if (schema2[Kind] === "Import")
        hasRef(schema2.$defs[schema2.$ref]) || (schema2 = schema2.$defs[schema2.$ref], (coerce || additionalCoerce) && (schema2 = replaceSchema(schema2)));
      else if (hasRef(schema2)) {
        let id = randomId();
        schema2 = t.Module({
          ...modules?.$defs,
          [id]: schema2
        }).Import(id);
      } else
        (coerce || additionalCoerce) && (schema2 = replaceSchema(schema2));
    return schema2;
  }, schema = mapSchema(s), _validators = validators;
  if ("~standard" in schema || validators?.length && validators.some((x) => x && typeof x != "string" && ("~standard" in x))) {
    let typeboxSubValidator = (schema2) => {
      let mirror2;
      if (normalize === true || normalize === "exactMirror")
        try {
          mirror2 = createMirror(schema2, {
            TypeCompiler,
            sanitize: sanitize2?.(),
            modules
          });
        } catch {
          console.warn("Failed to create exactMirror. Please report the following code to https://github.com/elysiajs/elysia/issues"), console.warn(schema2), mirror2 = createCleaner(schema2);
        }
      let vali = getSchemaValidator(schema2, {
        models,
        modules,
        dynamic,
        normalize,
        additionalProperties: true,
        forceAdditionalProperties: true,
        coerce,
        additionalCoerce
      });
      return vali.Decode = mirror2, (v) => vali.Check(v) ? {
        value: vali.Decode(v)
      } : {
        issues: [...vali.Errors(v)]
      };
    }, mainCheck = schema["~standard"] ? schema["~standard"].validate : typeboxSubValidator(schema), checkers = [];
    if (validators?.length) {
      for (let validator2 of validators)
        if (validator2 && typeof validator2 != "string") {
          if (validator2?.["~standard"]) {
            checkers.push(validator2["~standard"]);
            continue;
          }
          if (Kind in validator2) {
            checkers.push(typeboxSubValidator(validator2));
            continue;
          }
        }
    }
    async function Check2(value) {
      let v = mainCheck(value);
      if (v instanceof Promise && (v = await v), v.issues)
        return v;
      let values = [];
      v && typeof v == "object" && values.push(v.value);
      for (let i = 0;i < checkers.length; i++) {
        if (v = checkers[i].validate(value), v instanceof Promise && (v = await v), v.issues)
          return v;
        v && typeof v == "object" && values.push(v.value);
      }
      if (!values.length)
        return { value: v };
      if (values.length === 1)
        return { value: values[0] };
      if (values.length === 2)
        return { value: mergeDeep(values[0], values[1]) };
      let newValue = mergeDeep(values[0], values[1]);
      for (let i = 2;i < values.length; i++)
        newValue = mergeDeep(newValue, values[i]);
      return { value: newValue };
    }
    let validator = {
      provider: "standard",
      schema,
      references: "",
      checkFunc: () => {},
      code: "",
      Check: Check2,
      Errors: (value) => Check2(value)?.then?.((x) => x?.issues),
      Code: () => "",
      Decode: Check2,
      Encode: (value) => value,
      hasAdditionalProperties: false,
      hasDefault: false,
      isOptional: false,
      hasTransform: false,
      hasRef: false
    };
    return validator.parse = (v) => {
      try {
        return validator.Decode(validator.Clean?.(v) ?? v);
      } catch {
        throw [...validator.Errors(v)].map(mapValueError);
      }
    }, validator.safeParse = (v) => {
      try {
        return {
          success: true,
          data: validator.Decode(validator.Clean?.(v) ?? v),
          error: null
        };
      } catch {
        let errors = [...compiled.Errors(v)].map(mapValueError);
        return {
          success: false,
          data: null,
          error: errors[0]?.summary,
          errors
        };
      }
    }, validator;
  } else if (validators?.length) {
    let hasAdditional = false, validators2 = _validators, { schema: mergedObjectSchema, notObjects } = mergeObjectSchemas([
      schema,
      ...validators2.map(mapSchema)
    ]);
    notObjects && (schema = t.Intersect([
      ...mergedObjectSchema ? [mergedObjectSchema] : [],
      ...notObjects.map((x) => {
        let schema2 = mapSchema(x);
        return schema2.type === "object" && "additionalProperties" in schema2 && (!hasAdditional && schema2.additionalProperties === false && (hasAdditional = true), delete schema2.additionalProperties), schema2;
      })
    ]), schema.type === "object" && hasAdditional && (schema.additionalProperties = false));
  } else
    schema.type === "object" && (!("additionalProperties" in schema) || forceAdditionalProperties) ? schema.additionalProperties = additionalProperties : schema = replaceSchemaType(schema, {
      onlyFirst: "object",
      from: t.Object({}),
      to({ properties, ...options }) {
        if (properties && !("additionalProperties" in schema))
          return t.Object(properties, {
            ...options,
            additionalProperties: false
          });
      }
    });
  if (dynamic)
    if (Kind in schema) {
      let validator = {
        provider: "typebox",
        schema,
        references: "",
        checkFunc: () => {},
        code: "",
        Check: (value) => exports_value2.Check(schema, value),
        Errors: (value) => exports_value2.Errors(schema, value),
        Code: () => "",
        Clean: createCleaner(schema),
        Decode: (value) => exports_value2.Decode(schema, value),
        Encode: (value) => exports_value2.Encode(schema, value),
        get hasAdditionalProperties() {
          return "~hasAdditionalProperties" in this ? this["~hasAdditionalProperties"] : this["~hasAdditionalProperties"] = hasAdditionalProperties(schema);
        },
        get hasDefault() {
          return "~hasDefault" in this ? this["~hasDefault"] : this["~hasDefault"] = hasProperty("default", schema);
        },
        get isOptional() {
          return "~isOptional" in this ? this["~isOptional"] : this["~isOptional"] = isOptional(schema);
        },
        get hasTransform() {
          return "~hasTransform" in this ? this["~hasTransform"] : this["~hasTransform"] = hasTransform(schema);
        },
        "~hasRef": doesHaveRef,
        get hasRef() {
          return "~hasRef" in this ? this["~hasRef"] : this["~hasRef"] = hasTransform(schema);
        }
      };
      if (schema.config && (validator.config = schema.config, validator?.schema?.config && delete validator.schema.config), normalize && schema.additionalProperties === false)
        if (normalize === true || normalize === "exactMirror")
          try {
            validator.Clean = createMirror(schema, {
              TypeCompiler,
              sanitize: sanitize2?.(),
              modules
            });
          } catch {
            console.warn("Failed to create exactMirror. Please report the following code to https://github.com/elysiajs/elysia/issues"), console.warn(schema), validator.Clean = createCleaner(schema);
          }
        else
          validator.Clean = createCleaner(schema);
      return validator.parse = (v) => {
        try {
          return validator.Decode(validator.Clean?.(v) ?? v);
        } catch {
          throw [...validator.Errors(v)].map(mapValueError);
        }
      }, validator.safeParse = (v) => {
        try {
          return {
            success: true,
            data: validator.Decode(validator.Clean?.(v) ?? v),
            error: null
          };
        } catch {
          let errors = [...compiled.Errors(v)].map(mapValueError);
          return {
            success: false,
            data: null,
            error: errors[0]?.summary,
            errors
          };
        }
      }, validator;
    } else {
      let validator = {
        provider: "standard",
        schema,
        references: "",
        checkFunc: () => {},
        code: "",
        Check: (v) => schema["~standard"].validate(v),
        Errors(value) {
          let response = schema["~standard"].validate(value);
          if (response instanceof Promise)
            throw Error("Async validation is not supported in non-dynamic schema");
          return response.issues;
        },
        Code: () => "",
        Decode(value) {
          let response = schema["~standard"].validate(value);
          if (response instanceof Promise)
            throw Error("Async validation is not supported in non-dynamic schema");
          return response;
        },
        Encode: (value) => value,
        hasAdditionalProperties: false,
        hasDefault: false,
        isOptional: false,
        hasTransform: false,
        hasRef: false
      };
      return validator.parse = (v) => {
        try {
          return validator.Decode(validator.Clean?.(v) ?? v);
        } catch {
          throw [...validator.Errors(v)].map(mapValueError);
        }
      }, validator.safeParse = (v) => {
        try {
          return {
            success: true,
            data: validator.Decode(validator.Clean?.(v) ?? v),
            error: null
          };
        } catch {
          let errors = [...compiled.Errors(v)].map(mapValueError);
          return {
            success: false,
            data: null,
            error: errors[0]?.summary,
            errors
          };
        }
      }, validator;
    }
  let compiled;
  if (Kind in schema)
    if (compiled = TypeCompiler.Compile(schema, Object.values(models).filter((x) => (Kind in x))), compiled.provider = "typebox", schema.config && (compiled.config = schema.config, compiled?.schema?.config && delete compiled.schema.config), normalize === true || normalize === "exactMirror")
      try {
        compiled.Clean = createMirror(schema, {
          TypeCompiler,
          sanitize: sanitize2?.(),
          modules
        });
      } catch {
        console.warn("Failed to create exactMirror. Please report the following code to https://github.com/elysiajs/elysia/issues"), console.dir(schema, {
          depth: null
        }), compiled.Clean = createCleaner(schema);
      }
    else
      normalize === "typebox" && (compiled.Clean = createCleaner(schema));
  else
    compiled = {
      provider: "standard",
      schema,
      references: "",
      checkFunc(value) {
        let response = schema["~standard"].validate(value);
        if (response instanceof Promise)
          throw Error("Async validation is not supported in non-dynamic schema");
        return response;
      },
      code: "",
      Check: (v) => schema["~standard"].validate(v),
      Errors(value) {
        let response = schema["~standard"].validate(value);
        if (response instanceof Promise)
          throw Error("Async validation is not supported in non-dynamic schema");
        return response.issues;
      },
      Code: () => "",
      Decode(value) {
        let response = schema["~standard"].validate(value);
        if (response instanceof Promise)
          throw Error("Async validation is not supported in non-dynamic schema");
        return response;
      },
      Encode: (value) => value,
      hasAdditionalProperties: false,
      hasDefault: false,
      isOptional: false,
      hasTransform: false,
      hasRef: false
    };
  return compiled.parse = (v) => {
    try {
      return compiled.Decode(compiled.Clean?.(v) ?? v);
    } catch {
      throw [...compiled.Errors(v)].map(mapValueError);
    }
  }, compiled.safeParse = (v) => {
    try {
      return {
        success: true,
        data: compiled.Decode(compiled.Clean?.(v) ?? v),
        error: null
      };
    } catch {
      let errors = [...compiled.Errors(v)].map(mapValueError);
      return {
        success: false,
        data: null,
        error: errors[0]?.summary,
        errors
      };
    }
  }, Kind in schema && Object.assign(compiled, {
    get hasAdditionalProperties() {
      return "~hasAdditionalProperties" in this ? this["~hasAdditionalProperties"] : this["~hasAdditionalProperties"] = hasAdditionalProperties(compiled);
    },
    get hasDefault() {
      return "~hasDefault" in this ? this["~hasDefault"] : this["~hasDefault"] = hasProperty("default", compiled);
    },
    get isOptional() {
      return "~isOptional" in this ? this["~isOptional"] : this["~isOptional"] = isOptional(compiled);
    },
    get hasTransform() {
      return "~hasTransform" in this ? this["~hasTransform"] : this["~hasTransform"] = hasTransform(schema);
    },
    get hasRef() {
      return "~hasRef" in this ? this["~hasRef"] : this["~hasRef"] = hasRef(schema);
    },
    "~hasRef": doesHaveRef
  }), compiled;
};
var isUnion = (schema) => schema[Kind] === "Union" || !schema.schema && !!schema.anyOf;
var mergeObjectSchemas = (schemas) => {
  if (schemas.length === 0)
    return {
      schema: undefined,
      notObjects: []
    };
  if (schemas.length === 1)
    return schemas[0].type === "object" ? {
      schema: schemas[0],
      notObjects: []
    } : {
      schema: undefined,
      notObjects: schemas
    };
  let newSchema, notObjects = [], additionalPropertiesIsTrue = false, additionalPropertiesIsFalse = false;
  for (let schema of schemas) {
    if (schema.type !== "object") {
      notObjects.push(schema);
      continue;
    }
    if ("additionalProperties" in schema && (schema.additionalProperties === true ? additionalPropertiesIsTrue = true : schema.additionalProperties === false && (additionalPropertiesIsFalse = true)), !newSchema) {
      newSchema = schema;
      continue;
    }
    newSchema = {
      ...newSchema,
      ...schema,
      properties: {
        ...newSchema.properties,
        ...schema.properties
      },
      required: [...newSchema?.required ?? [], ...schema.required]
    };
  }
  return newSchema && (newSchema.required && (newSchema.required = [...new Set(newSchema.required)]), additionalPropertiesIsFalse ? newSchema.additionalProperties = false : additionalPropertiesIsTrue && (newSchema.additionalProperties = true)), {
    schema: newSchema,
    notObjects
  };
};
var getResponseSchemaValidator = (s, {
  models = {},
  modules,
  dynamic = false,
  normalize = false,
  additionalProperties = false,
  validators = [],
  sanitize: sanitize2
}) => {
  if (validators = validators.filter((x) => x), !s) {
    if (!validators?.length)
      return;
    s = validators[0], validators = validators.slice(1);
  }
  let maybeSchemaOrRecord;
  if (typeof s != "string")
    maybeSchemaOrRecord = s;
  else if (maybeSchemaOrRecord = modules && s in modules.$defs ? modules.Import(s) : models[s], !maybeSchemaOrRecord)
    return;
  if (!maybeSchemaOrRecord)
    return;
  if (Kind in maybeSchemaOrRecord || "~standard" in maybeSchemaOrRecord)
    return {
      200: getSchemaValidator(maybeSchemaOrRecord, {
        modules,
        models,
        additionalProperties,
        dynamic,
        normalize,
        coerce: false,
        additionalCoerce: [],
        validators: validators.map((x) => x[200]),
        sanitize: sanitize2
      })
    };
  let record = {};
  return Object.keys(maybeSchemaOrRecord).forEach((status2) => {
    if (isNaN(+status2))
      return;
    let maybeNameOrSchema = maybeSchemaOrRecord[+status2];
    if (typeof maybeNameOrSchema == "string") {
      if (maybeNameOrSchema in models) {
        let schema = models[maybeNameOrSchema];
        if (!schema)
          return;
        record[+status2] = Kind in schema || "~standard" in schema ? getSchemaValidator(schema, {
          modules,
          models,
          additionalProperties,
          dynamic,
          normalize,
          coerce: false,
          additionalCoerce: [],
          validators: validators.map((x) => x[+status2]),
          sanitize: sanitize2
        }) : schema;
      }
      return;
    }
    record[+status2] = Kind in maybeNameOrSchema || "~standard" in maybeNameOrSchema ? getSchemaValidator(maybeNameOrSchema, {
      modules,
      models,
      additionalProperties,
      dynamic,
      normalize,
      coerce: false,
      additionalCoerce: [],
      validators: validators.map((x) => x[+status2]),
      sanitize: sanitize2
    }) : maybeNameOrSchema;
  }), record;
};
var _stringToStructureCoercions;
var stringToStructureCoercions = () => (_stringToStructureCoercions || (_stringToStructureCoercions = [
  {
    from: t.Object({}),
    to: () => t.ObjectString({}),
    excludeRoot: true
  },
  {
    from: t.Array(t.Any()),
    to: () => t.ArrayString(t.Any())
  }
]), _stringToStructureCoercions);
var _queryCoercions;
var queryCoercions = () => (_queryCoercions || (_queryCoercions = [
  {
    from: t.Object({}),
    to: () => t.ObjectString({}),
    excludeRoot: true
  },
  {
    from: t.Array(t.Any()),
    to: () => t.ArrayQuery(t.Any())
  }
]), _queryCoercions);
var _coercePrimitiveRoot;
var coercePrimitiveRoot = () => (_coercePrimitiveRoot || (_coercePrimitiveRoot = [
  {
    from: t.Number(),
    to: (options) => t.Numeric(options),
    rootOnly: true
  },
  {
    from: t.Boolean(),
    to: (options) => t.BooleanString(options),
    rootOnly: true
  }
]), _coercePrimitiveRoot);
var getCookieValidator = ({
  validator,
  modules,
  defaultConfig = {},
  config,
  dynamic,
  normalize = false,
  models,
  validators,
  sanitize: sanitize2
}) => {
  let cookieValidator = validator?.provider ? validator : getSchemaValidator(validator, {
    modules,
    dynamic,
    models,
    normalize,
    additionalProperties: true,
    coerce: true,
    additionalCoerce: stringToStructureCoercions(),
    validators,
    sanitize: sanitize2
  });
  return cookieValidator ? cookieValidator.config = mergeCookie(cookieValidator.config, config) : (cookieValidator = getSchemaValidator(t.Cookie(t.Any()), {
    modules,
    dynamic,
    models,
    additionalProperties: true,
    validators,
    sanitize: sanitize2
  }), cookieValidator.config = defaultConfig), cookieValidator;
};
var unwrapImportSchema = (schema) => schema && schema[Kind] === "Import" && schema.$defs[schema.$ref][Kind] === "Object" ? schema.$defs[schema.$ref] : schema;
var allocateIf = (value, condition) => condition ? value : "";
var defaultParsers = [
  "json",
  "text",
  "urlencoded",
  "arrayBuffer",
  "formdata",
  "application/json",
  "text/plain",
  "application/x-www-form-urlencoded",
  "application/octet-stream",
  "multipart/form-data"
];
var createReport = ({
  context = "c",
  trace = [],
  addFn
}) => {
  if (!trace.length)
    return () => ({
      resolveChild() {
        return () => {};
      },
      resolve() {}
    });
  for (let i = 0;i < trace.length; i++)
    addFn(`let report${i},reportChild${i},reportErr${i},reportErrChild${i};let trace${i}=${context}[ELYSIA_TRACE]?.[${i}]??trace[${i}](${context});
`);
  return (event, {
    name,
    total = 0
  } = {}) => {
    name || (name = "anonymous");
    let reporter = event === "error" ? "reportErr" : "report";
    for (let i = 0;i < trace.length; i++)
      addFn(`${reporter}${i} = trace${i}.${event}({id,event:'${event}',name:'${name}',begin:performance.now(),total:${total}})
`);
    return {
      resolve() {
        for (let i = 0;i < trace.length; i++)
          addFn(`${reporter}${i}.resolve()
`);
      },
      resolveChild(name2) {
        for (let i = 0;i < trace.length; i++)
          addFn(`${reporter}Child${i}=${reporter}${i}.resolveChild?.shift()?.({id,event:'${event}',name:'${name2}',begin:performance.now()})
`);
        return (binding) => {
          for (let i = 0;i < trace.length; i++)
            addFn(binding ? `if(${binding} instanceof Error){${reporter}Child${i}?.(${binding}) }else{${reporter}Child${i}?.()}` : `${reporter}Child${i}?.()
`);
        };
      }
    };
  };
};
var composeCleaner = ({
  schema,
  name,
  type,
  typeAlias = type,
  normalize,
  ignoreTryCatch = false
}) => !normalize || !schema.Clean ? "" : normalize === true || normalize === "exactMirror" ? ignoreTryCatch ? `${name}=validator.${typeAlias}.Clean(${name})
` : `try{${name}=validator.${typeAlias}.Clean(${name})
}catch{}` : normalize === "typebox" ? `${name}=validator.${typeAlias}.Clean(${name})
` : "";
var composeValidationFactory = ({
  injectResponse = "",
  normalize = false,
  validator,
  encodeSchema = false,
  isStaticResponse = false,
  hasSanitize = false
}) => ({
  validate: (type, value = `c.${type}`, error) => `c.set.status=422;throw new ValidationError('${type}',validator.${type},${value}${error ? "," + error : ""})`,
  response: (name = "r") => {
    if (isStaticResponse || !validator.response)
      return "";
    let code = injectResponse + `
`;
    code += `if(${name} instanceof ElysiaCustomStatusResponse){c.set.status=${name}.code
${name}=${name}.response}if(${name} instanceof Response === false)switch(c.set.status){`;
    for (let [status2, value] of Object.entries(validator.response)) {
      if (code += `
case ${status2}:
`, value.provider === "standard") {
        code += `let vare${status2}=validator.response[${status2}].Check(${name})
if(vare${status2} instanceof Promise)vare${status2}=await vare${status2}
if(vare${status2}.issues)throw new ValidationError('response',validator.response[${status2}],${name},vare${status2}.issues)
${name}=vare${status2}.value
c.set.status=${status2}
break
`;
        continue;
      }
      let noValidate = value.schema?.noValidate === true;
      if (!noValidate && value.schema?.$ref && value.schema?.$defs) {
        let refKey = value.schema.$ref, defKey = typeof refKey == "string" && refKey.includes("/") ? refKey.split("/").pop() : refKey;
        value.schema.$defs[defKey]?.noValidate === true && (noValidate = true);
      }
      let appliedCleaner = noValidate || hasSanitize, clean2 = ({ ignoreTryCatch = false } = {}) => composeCleaner({
        name,
        schema: value,
        type: "response",
        typeAlias: `response[${status2}]`,
        normalize,
        ignoreTryCatch
      });
      appliedCleaner && (code += clean2());
      let applyErrorCleaner = !appliedCleaner && normalize && !noValidate;
      encodeSchema && value.hasTransform && !noValidate ? (code += `try{${name}=validator.response[${status2}].Encode(${name})
`, appliedCleaner || (code += clean2({ ignoreTryCatch: true })), code += `c.set.status=${status2}}catch{` + (applyErrorCleaner ? `try{
` + clean2({ ignoreTryCatch: true }) + `${name}=validator.response[${status2}].Encode(${name})
}catch{throw new ValidationError('response',validator.response[${status2}],${name})}` : `throw new ValidationError('response',validator.response[${status2}],${name})`) + "}") : (appliedCleaner || (code += clean2()), noValidate || (code += `if(validator.response[${status2}].Check(${name})===false)throw new ValidationError('response',validator.response[${status2}],${name})
c.set.status=${status2}
`)), code += `break
`;
    }
    return code + "}";
  }
});
var isAsyncName = (v) => (v?.fn ?? v).constructor.name === "AsyncFunction";
var matchResponseClone = /=>\s?response\.clone\(/;
var matchFnReturn = /(?:return|=>)\s?\S+\(|a(?:sync|wait)/;
var isAsync = (v) => {
  let isObject2 = typeof v == "object";
  if (isObject2 && v.isAsync !== undefined)
    return v.isAsync;
  let fn = isObject2 ? v.fn : v;
  if (fn.constructor.name === "AsyncFunction")
    return true;
  let literal = fn.toString();
  if (matchResponseClone.test(literal))
    return isObject2 && (v.isAsync = false), false;
  let result = matchFnReturn.test(literal);
  return isObject2 && (v.isAsync = result), result;
};
var hasReturn = (v) => {
  let isObject2 = typeof v == "object";
  if (isObject2 && v.hasReturn !== undefined)
    return v.hasReturn;
  let fnLiteral = isObject2 ? v.fn.toString() : typeof v == "string" ? v.toString() : v, parenthesisEnd = fnLiteral.indexOf(")");
  if (fnLiteral.charCodeAt(parenthesisEnd + 2) === 61 && fnLiteral.charCodeAt(parenthesisEnd + 5) !== 123)
    return isObject2 && (v.hasReturn = true), true;
  let result = fnLiteral.includes("return");
  return isObject2 && (v.hasReturn = result), result;
};
var isGenerator = (v) => {
  let fn = v?.fn ?? v;
  return fn.constructor.name === "AsyncGeneratorFunction" || fn.constructor.name === "GeneratorFunction";
};
var coerceTransformDecodeError = (fnLiteral, type, value = `c.${type}`) => `try{${fnLiteral}}catch(error){if(error.constructor.name === 'TransformDecodeError'){c.set.status=422
throw error.error ?? new ValidationError('${type}',validator.${type},${value})}}`;
var composeHandler = ({
  app,
  path: path3,
  method,
  hooks,
  validator,
  handler,
  allowMeta = false,
  inference
}) => {
  let adapter = app["~adapter"].composeHandler, adapterHandler = app["~adapter"].handler, isHandleFn = typeof handler == "function";
  if (!isHandleFn) {
    handler = adapterHandler.mapResponse(handler, {
      headers: app.setHeaders ?? {}
    });
    let isResponse = handler instanceof Response || handler?.constructor?.name === "Response" && typeof handler?.clone == "function";
    if (hooks.parse?.length && hooks.transform?.length && hooks.beforeHandle?.length && hooks.afterHandle?.length)
      return isResponse ? Function("a", `"use strict";
return function(){return a.clone()}`)(handler) : Function("a", `"use strict";
return function(){return a}`)(handler);
    if (isResponse) {
      let response = handler;
      handler = () => response.clone();
    }
  }
  let handle = isHandleFn ? "handler(c)" : "handler", hasTrace = !!hooks.trace?.length, fnLiteral = "";
  if (inference = sucrose(Object.assign({ handler }, hooks), inference, app.config.sucrose), adapter.declare) {
    let literal = adapter.declare(inference);
    literal && (fnLiteral += literal);
  }
  inference.server && (fnLiteral += `Object.defineProperty(c,'server',{get:function(){return getServer()}})
`), validator.createBody?.(), validator.createQuery?.(), validator.createHeaders?.(), validator.createParams?.(), validator.createCookie?.(), validator.createResponse?.();
  let hasValidation = !!validator.body || !!validator.headers || !!validator.params || !!validator.query || !!validator.cookie || !!validator.response, hasQuery = inference.query || !!validator.query, requestNoBody = hooks.parse?.length === 1 && hooks.parse[0].fn === "none", hasBody = method !== "" && method !== "GET" && method !== "HEAD" && (inference.body || !!validator.body || !!hooks.parse?.length) && !requestNoBody, defaultHeaders = app.setHeaders, hasDefaultHeaders = defaultHeaders && !!Object.keys(defaultHeaders).length, hasHeaders = inference.headers || !!validator.headers || adapter.preferWebstandardHeaders !== true && inference.body, hasCookie = inference.cookie || !!validator.cookie, cookieMeta = validator.cookie?.config ? mergeCookie(validator?.cookie?.config, app.config.cookie) : app.config.cookie, _encodeCookie = "", encodeCookie = () => {
    if (_encodeCookie)
      return _encodeCookie;
    if (cookieMeta?.sign) {
      if (!cookieMeta.secrets)
        throw new Error(`t.Cookie required secret which is not set in (${method}) ${path3}.`);
      let secret = cookieMeta.secrets ? typeof cookieMeta.secrets == "string" ? cookieMeta.secrets : cookieMeta.secrets[0] : undefined;
      if (_encodeCookie += `const _setCookie = c.set.cookie
if(_setCookie){`, cookieMeta.sign === true)
        _encodeCookie += `for(const [key, cookie] of Object.entries(_setCookie)){c.set.cookie[key].value=await signCookie(cookie.value,'${secret}')}`;
      else
        for (let name of cookieMeta.sign)
          _encodeCookie += `if(_setCookie['${name}']?.value)c.set.cookie['${name}'].value=await signCookie(_setCookie['${name}'].value,'${secret}')
`;
      _encodeCookie += `}
`;
    }
    return _encodeCookie;
  }, normalize = app.config.normalize, encodeSchema = app.config.encodeSchema, validation = composeValidationFactory({
    normalize,
    validator,
    encodeSchema,
    isStaticResponse: handler instanceof Response,
    hasSanitize: !!app.config.sanitize
  });
  hasHeaders && (fnLiteral += adapter.headers), hasTrace && (fnLiteral += `const id=c[ELYSIA_REQUEST_ID]
`);
  let report = createReport({
    trace: hooks.trace,
    addFn: (word) => {
      fnLiteral += word;
    }
  });
  if (fnLiteral += "try{", hasCookie) {
    let get = (name, defaultValue) => {
      let value = cookieMeta?.[name] ?? defaultValue;
      return value ? typeof value == "string" ? `${name}:'${value}',` : value instanceof Date ? `${name}: new Date(${value.getTime()}),` : `${name}:${value},` : typeof defaultValue == "string" ? `${name}:"${defaultValue}",` : `${name}:${defaultValue},`;
    }, options = cookieMeta ? `{secrets:${cookieMeta.secrets !== undefined ? typeof cookieMeta.secrets == "string" ? `'${cookieMeta.secrets}'` : "[" + cookieMeta.secrets.reduce((a, b) => a + `'${b}',`, "") + "]" : "undefined"},sign:${cookieMeta.sign === true ? true : cookieMeta.sign !== undefined ? "[" + cookieMeta.sign.reduce((a, b) => a + `'${b}',`, "") + "]" : "undefined"},` + get("domain") + get("expires") + get("httpOnly") + get("maxAge") + get("path", "/") + get("priority") + get("sameSite") + get("secure") + "}" : "undefined";
    hasHeaders ? fnLiteral += `
c.cookie=await parseCookie(c.set,c.headers.cookie,${options})
` : fnLiteral += `
c.cookie=await parseCookie(c.set,c.request.headers.get('cookie'),${options})
`;
  }
  if (hasQuery) {
    let arrayProperties = {}, objectProperties = {}, hasArrayProperty = false, hasObjectProperty = false;
    if (validator.query?.schema) {
      let schema = unwrapImportSchema(validator.query?.schema);
      if (Kind in schema && schema.properties)
        for (let [key, value] of Object.entries(schema.properties))
          hasElysiaMeta("ArrayQuery", value) && (arrayProperties[key] = 1, hasArrayProperty = true), hasElysiaMeta("ObjectString", value) && (objectProperties[key] = 1, hasObjectProperty = true);
    }
    fnLiteral += `if(c.qi===-1){c.query=Object.create(null)}else{c.query=parseQueryFromURL(c.url,c.qi+1,${hasArrayProperty ? JSON.stringify(arrayProperties) : undefined},${hasObjectProperty ? JSON.stringify(objectProperties) : undefined})}`;
  }
  let isAsyncHandler = typeof handler == "function" && isAsync(handler), saveResponse = hasTrace || hooks.afterResponse?.length ? "c.response=c.responseValue= " : "", responseKeys = Object.keys(validator.response ?? {}), hasMultipleResponses = responseKeys.length > 1, hasSingle200 = responseKeys.length === 0 || responseKeys.length === 1 && responseKeys[0] === "200", maybeAsync = hasCookie || hasBody || isAsyncHandler || !!hooks.parse?.length || !!hooks.afterHandle?.some(isAsync) || !!hooks.beforeHandle?.some(isAsync) || !!hooks.transform?.some(isAsync) || !!hooks.mapResponse?.some(isAsync) || validator.body?.provider === "standard" || validator.headers?.provider === "standard" || validator.query?.provider === "standard" || validator.params?.provider === "standard" || validator.cookie?.provider === "standard" || Object.values(validator.response ?? {}).find((x) => x.provider === "standard"), maybeStream = (typeof handler == "function" ? isGenerator(handler) : false) || !!hooks.beforeHandle?.some(isGenerator) || !!hooks.afterHandle?.some(isGenerator) || !!hooks.transform?.some(isGenerator), hasSet = inference.cookie || inference.set || hasHeaders || hasTrace || hasMultipleResponses || !hasSingle200 || isHandleFn && hasDefaultHeaders || maybeStream, afterResponse = () => {
    if (!hooks.afterResponse?.length && !hasTrace)
      return "";
    let afterResponse2 = "", prefix = hooks.afterResponse?.some(isAsync) ? "async " : "";
    afterResponse2 += `
setImmediate(${prefix}()=>{`;
    let reporter = createReport({
      trace: hooks.trace,
      addFn: (word) => {
        afterResponse2 += word;
      }
    })("afterResponse", {
      total: hooks.afterResponse?.length
    });
    if (hooks.afterResponse?.length && hooks.afterResponse)
      for (let i = 0;i < hooks.afterResponse.length; i++) {
        let endUnit = reporter.resolveChild(hooks.afterResponse[i].fn.name), prefix2 = isAsync(hooks.afterResponse[i]) ? "await " : "";
        afterResponse2 += `
${prefix2}e.afterResponse[${i}](c)
`, endUnit();
      }
    return reporter.resolve(), afterResponse2 += `})
`, afterResponse2;
  }, mapResponse3 = (r = "r") => {
    let after = afterResponse(), response = `${hasSet ? "mapResponse" : "mapCompactResponse"}(${saveResponse}${r}${hasSet ? ",c.set" : ""}${mapResponseContext})
`;
    return after ? `const _res=${response}` + after + "return _res" : `return ${response}`;
  }, mapResponseContext = maybeStream || adapter.mapResponseContext ? `,${adapter.mapResponseContext}` : "";
  (hasTrace || inference.route) && (fnLiteral += `c.route=\`${path3}\`
`);
  let parseReporter = report("parse", {
    total: hooks.parse?.length
  });
  if (hasBody) {
    let hasBodyInference = !!hooks.parse?.length || inference.body || validator.body;
    adapter.parser.declare && (fnLiteral += adapter.parser.declare), fnLiteral += `
try{`;
    let parser = typeof hooks.parse == "string" ? hooks.parse : Array.isArray(hooks.parse) && hooks.parse.length === 1 ? typeof hooks.parse[0] == "string" ? hooks.parse[0] : typeof hooks.parse[0].fn == "string" ? hooks.parse[0].fn : undefined : undefined;
    if (!parser && validator.body && !hooks.parse?.length) {
      let schema = validator.body.schema;
      schema && schema.anyOf && schema[Kind] === "Union" && schema.anyOf?.length === 2 && schema.anyOf?.find((x) => x[Kind] === "ElysiaForm") && (parser = "formdata");
    }
    if (parser && defaultParsers.includes(parser)) {
      let reporter = report("parse", {
        total: hooks.parse?.length
      }), isOptionalBody = !!validator.body?.isOptional;
      switch (parser) {
        case "json":
        case "application/json":
          fnLiteral += adapter.parser.json(isOptionalBody);
          break;
        case "text":
        case "text/plain":
          fnLiteral += adapter.parser.text(isOptionalBody);
          break;
        case "urlencoded":
        case "application/x-www-form-urlencoded":
          fnLiteral += adapter.parser.urlencoded(isOptionalBody);
          break;
        case "arrayBuffer":
        case "application/octet-stream":
          fnLiteral += adapter.parser.arrayBuffer(isOptionalBody);
          break;
        case "formdata":
        case "multipart/form-data":
          fnLiteral += adapter.parser.formData(isOptionalBody);
          break;
        default:
          parser[0] in app["~parser"] && (fnLiteral += hasHeaders ? "let contentType = c.headers['content-type']" : "let contentType = c.request.headers.get('content-type')", fnLiteral += `
if(contentType){const index=contentType.indexOf(';')
if(index!==-1)contentType=contentType.substring(0,index)}
else{contentType=''}c.contentType=contentType
let result=parser['${parser}'](c, contentType)
if(result instanceof Promise)result=await result
if(result instanceof ElysiaCustomStatusResponse)throw result
if(result!==undefined)c.body=result
delete c.contentType
`);
          break;
      }
      reporter.resolve();
    } else if (hasBodyInference) {
      fnLiteral += `
`, fnLiteral += `let contentType
if(c.request.body)`, fnLiteral += hasHeaders ? `contentType=c.headers['content-type']
` : `contentType=c.request.headers.get('content-type')
`;
      let hasDefaultParser = false;
      if (hooks.parse?.length)
        fnLiteral += `if(contentType){
const index=contentType.indexOf(';')

if(index!==-1)contentType=contentType.substring(0,index)}else{contentType=''}let used=false
c.contentType=contentType
`;
      else {
        hasDefaultParser = true;
        let isOptionalBody = !!validator.body?.isOptional;
        fnLiteral += `if(contentType)switch(contentType.charCodeAt(12)){
case 106:` + adapter.parser.json(isOptionalBody) + `break
case 120:` + adapter.parser.urlencoded(isOptionalBody) + `break
case 111:` + adapter.parser.arrayBuffer(isOptionalBody) + `break
case 114:` + adapter.parser.formData(isOptionalBody) + `break
default:if(contentType.charCodeAt(0)===116){` + adapter.parser.text(isOptionalBody) + `}break
}`;
      }
      let reporter = report("parse", {
        total: hooks.parse?.length
      });
      if (hooks.parse)
        for (let i = 0;i < hooks.parse.length; i++) {
          let name = `bo${i}`;
          if (i !== 0 && (fnLiteral += `
if(!used){`), typeof hooks.parse[i].fn == "string") {
            let endUnit = reporter.resolveChild(hooks.parse[i].fn), isOptionalBody = !!validator.body?.isOptional;
            switch (hooks.parse[i].fn) {
              case "json":
              case "application/json":
                hasDefaultParser = true, fnLiteral += adapter.parser.json(isOptionalBody);
                break;
              case "text":
              case "text/plain":
                hasDefaultParser = true, fnLiteral += adapter.parser.text(isOptionalBody);
                break;
              case "urlencoded":
              case "application/x-www-form-urlencoded":
                hasDefaultParser = true, fnLiteral += adapter.parser.urlencoded(isOptionalBody);
                break;
              case "arrayBuffer":
              case "application/octet-stream":
                hasDefaultParser = true, fnLiteral += adapter.parser.arrayBuffer(isOptionalBody);
                break;
              case "formdata":
              case "multipart/form-data":
                hasDefaultParser = true, fnLiteral += adapter.parser.formData(isOptionalBody);
                break;
              default:
                fnLiteral += `let ${name}=parser['${hooks.parse[i].fn}'](c,contentType)
if(${name} instanceof Promise)${name}=await ${name}
if(${name}!==undefined){c.body=${name};used=true;}
`;
            }
            endUnit();
          } else {
            let endUnit = reporter.resolveChild(hooks.parse[i].fn.name);
            fnLiteral += `let ${name}=e.parse[${i}]
${name}=${name}(c,contentType)
if(${name} instanceof Promise)${name}=await ${name}
if(${name}!==undefined){c.body=${name};used=true}`, endUnit();
          }
          if (i !== 0 && (fnLiteral += "}"), hasDefaultParser)
            break;
        }
      if (reporter.resolve(), !hasDefaultParser) {
        let isOptionalBody = !!validator.body?.isOptional;
        hooks.parse?.length && (fnLiteral += `
if(!used){
`), fnLiteral += `switch(contentType){case 'application/json':
` + adapter.parser.json(isOptionalBody) + `break
case 'text/plain':` + adapter.parser.text(isOptionalBody) + `break
case 'application/x-www-form-urlencoded':` + adapter.parser.urlencoded(isOptionalBody) + `break
case 'application/octet-stream':` + adapter.parser.arrayBuffer(isOptionalBody) + `break
case 'multipart/form-data':` + adapter.parser.formData(isOptionalBody) + `break
`;
        for (let key of Object.keys(app["~parser"]))
          fnLiteral += `case '${key}':let bo${key}=parser['${key}'](c,contentType)
if(bo${key} instanceof Promise)bo${key}=await bo${key}
if(bo${key} instanceof ElysiaCustomStatusResponse){` + mapResponse3(`bo${key}`) + `}if(bo${key}!==undefined)c.body=bo${key}
break
`;
        hooks.parse?.length && (fnLiteral += "}"), fnLiteral += "}";
      }
      hooks.parse?.length && (fnLiteral += `
delete c.contentType`);
    }
    fnLiteral += "}catch(error){throw new ParseError(error)}";
  }
  if (parseReporter.resolve(), hooks?.transform || hasTrace) {
    let reporter = report("transform", {
      total: hooks.transform?.length
    });
    if (hooks.transform?.length) {
      fnLiteral += `let transformed
`;
      for (let i = 0;i < hooks.transform.length; i++) {
        let transform2 = hooks.transform[i], endUnit = reporter.resolveChild(transform2.fn.name);
        fnLiteral += isAsync(transform2) ? `transformed=await e.transform[${i}](c)
` : `transformed=e.transform[${i}](c)
`, transform2.subType === "mapDerive" ? fnLiteral += "if(transformed instanceof ElysiaCustomStatusResponse){" + mapResponse3("transformed") + `}else{transformed.request=c.request
transformed.store=c.store
transformed.qi=c.qi
transformed.path=c.path
transformed.url=c.url
transformed.redirect=c.redirect
transformed.set=c.set
transformed.error=c.error
c=transformed}` : fnLiteral += "if(transformed instanceof ElysiaCustomStatusResponse){" + mapResponse3("transformed") + `}else Object.assign(c,transformed)
`, endUnit();
      }
    }
    reporter.resolve();
  }
  let fileUnions = [];
  if (validator) {
    if (validator.headers) {
      if (validator.headers.hasDefault)
        for (let [key, value] of Object.entries(exports_value2.Default(validator.headers.schema, {}))) {
          let parsed = typeof value == "object" ? JSON.stringify(value) : typeof value == "string" ? `'${value}'` : value;
          parsed !== undefined && (fnLiteral += `c.headers['${key}']??=${parsed}
`);
        }
      fnLiteral += composeCleaner({
        name: "c.headers",
        schema: validator.headers,
        type: "headers",
        normalize
      }), validator.headers.isOptional && (fnLiteral += "if(isNotEmpty(c.headers)){"), validator.headers?.provider === "standard" ? fnLiteral += `let vah=validator.headers.Check(c.headers)
if(vah instanceof Promise)vah=await vah
if(vah.issues){` + validation.validate("headers", undefined, "vah.issues") + `}else{c.headers=vah.value}
` : validator.headers?.schema?.noValidate !== true && (fnLiteral += "if(validator.headers.Check(c.headers) === false){" + validation.validate("headers") + "}"), validator.headers.hasTransform && (fnLiteral += coerceTransformDecodeError(`c.headers=validator.headers.Decode(c.headers)
`, "headers")), validator.headers.isOptional && (fnLiteral += "}");
    }
    if (validator.params) {
      if (validator.params.hasDefault)
        for (let [key, value] of Object.entries(exports_value2.Default(validator.params.schema, {}))) {
          let parsed = typeof value == "object" ? JSON.stringify(value) : typeof value == "string" ? `'${value}'` : value;
          parsed !== undefined && (fnLiteral += `c.params['${key}']??=${parsed}
`);
        }
      validator.params.provider === "standard" ? fnLiteral += `let vap=validator.params.Check(c.params)
if(vap instanceof Promise)vap=await vap
if(vap.issues){` + validation.validate("params", undefined, "vap.issues") + `}else{c.params=vap.value}
` : validator.params?.schema?.noValidate !== true && (fnLiteral += "if(validator.params.Check(c.params)===false){" + validation.validate("params") + "}"), validator.params.hasTransform && (fnLiteral += coerceTransformDecodeError(`c.params=validator.params.Decode(c.params)
`, "params"));
    }
    if (validator.query) {
      if (Kind in validator.query?.schema && validator.query.hasDefault)
        for (let [key, value] of Object.entries(exports_value2.Default(validator.query.schema, {}))) {
          let parsed = typeof value == "object" ? JSON.stringify(value) : typeof value == "string" ? `'${value}'` : value;
          parsed !== undefined && (fnLiteral += `if(c.query['${key}']===undefined)c.query['${key}']=${parsed}
`);
        }
      fnLiteral += composeCleaner({
        name: "c.query",
        schema: validator.query,
        type: "query",
        normalize
      }), validator.query.isOptional && (fnLiteral += "if(isNotEmpty(c.query)){"), validator.query.provider === "standard" ? fnLiteral += `let vaq=validator.query.Check(c.query)
if(vaq instanceof Promise)vaq=await vaq
if(vaq.issues){` + validation.validate("query", undefined, "vaq.issues") + `}else{c.query=vaq.value}
` : validator.query?.schema?.noValidate !== true && (fnLiteral += "if(validator.query.Check(c.query)===false){" + validation.validate("query") + "}"), validator.query.hasTransform && (fnLiteral += coerceTransformDecodeError(`c.query=validator.query.Decode(c.query)
`, "query"), fnLiteral += coerceTransformDecodeError(`c.query=validator.query.Decode(c.query)
`, "query")), validator.query.isOptional && (fnLiteral += "}");
    }
    if (hasBody && validator.body) {
      (validator.body.hasTransform || validator.body.isOptional) && (fnLiteral += `const isNotEmptyObject=c.body&&(typeof c.body==="object"&&(isNotEmpty(c.body)||c.body instanceof ArrayBuffer))
`);
      let hasUnion = isUnion(validator.body.schema), hasNonUnionFileWithDefault = false;
      if (validator.body.hasDefault) {
        let value = exports_value2.Default(validator.body.schema, validator.body.schema.type === "object" || unwrapImportSchema(validator.body.schema)[Kind] === "Object" ? {} : undefined), schema = unwrapImportSchema(validator.body.schema);
        if (!hasUnion && value && typeof value == "object" && (hasType("File", schema) || hasType("Files", schema))) {
          hasNonUnionFileWithDefault = true;
          for (let [k, v] of Object.entries(value))
            (v === "File" || v === "Files") && delete value[k];
          isNotEmpty(value) || (value = undefined);
        }
        let parsed = typeof value == "object" ? JSON.stringify(value) : typeof value == "string" ? `'${value}'` : value;
        value != null && (Array.isArray(value) ? fnLiteral += `if(!c.body)c.body=${parsed}
` : typeof value == "object" ? fnLiteral += `c.body=Object.assign(${parsed},c.body)
` : fnLiteral += `c.body=${parsed}
`), fnLiteral += composeCleaner({
          name: "c.body",
          schema: validator.body,
          type: "body",
          normalize
        }), validator.body.provider === "standard" ? fnLiteral += `let vab=validator.body.Check(c.body)
if(vab instanceof Promise)vab=await vab
if(vab.issues){` + validation.validate("body", undefined, "vab.issues") + `}else{c.body=vab.value}
` : validator.body?.schema?.noValidate !== true && (validator.body.isOptional ? fnLiteral += "if(isNotEmptyObject&&validator.body.Check(c.body)===false){" + validation.validate("body") + "}" : fnLiteral += "if(validator.body.Check(c.body)===false){" + validation.validate("body") + "}");
      } else
        fnLiteral += composeCleaner({
          name: "c.body",
          schema: validator.body,
          type: "body",
          normalize
        }), validator.body.provider === "standard" ? fnLiteral += `let vab=validator.body.Check(c.body)
if(vab instanceof Promise)vab=await vab
if(vab.issues){` + validation.validate("body", undefined, "vab.issues") + `}else{c.body=vab.value}
` : validator.body?.schema?.noValidate !== true && (validator.body.isOptional ? fnLiteral += "if(isNotEmptyObject&&validator.body.Check(c.body)===false){" + validation.validate("body") + "}" : fnLiteral += "if(validator.body.Check(c.body)===false){" + validation.validate("body") + "}");
      if (validator.body.hasTransform && (fnLiteral += coerceTransformDecodeError(`if(isNotEmptyObject)c.body=validator.body.Decode(c.body)
`, "body")), hasUnion && validator.body.schema.anyOf?.length) {
        let iterator = Object.values(validator.body.schema.anyOf);
        for (let i = 0;i < iterator.length; i++) {
          let type = iterator[i];
          if (hasType("File", type) || hasType("Files", type)) {
            let candidate = getSchemaValidator(type, {
              modules: app.definitions.typebox,
              dynamic: !app.config.aot,
              models: app.definitions.type,
              normalize: app.config.normalize,
              additionalCoerce: coercePrimitiveRoot(),
              sanitize: () => app.config.sanitize
            });
            if (candidate) {
              let isFirst = fileUnions.length === 0, iterator2 = Object.entries(type.properties), validator2 = isFirst ? `
` : " else ";
              validator2 += `if(fileUnions[${fileUnions.length}].Check(c.body)){`;
              let validateFile2 = "", validatorLength = 0;
              for (let i2 = 0;i2 < iterator2.length; i2++) {
                let [k, v] = iterator2[i2];
                !v.extension || v[Kind] !== "File" && v[Kind] !== "Files" || (validatorLength && (validateFile2 += ","), validateFile2 += `fileType(c.body.${k},${JSON.stringify(v.extension)},'body.${k}')`, validatorLength++);
              }
              validateFile2 && (validatorLength === 1 ? validator2 += `await ${validateFile2}
` : validatorLength > 1 && (validator2 += `await Promise.all([${validateFile2}])
`), validator2 += "}", fnLiteral += validator2, fileUnions.push(candidate));
            }
          }
        }
      } else if (hasNonUnionFileWithDefault || !hasUnion && (hasType("File", unwrapImportSchema(validator.body.schema)) || hasType("Files", unwrapImportSchema(validator.body.schema)))) {
        let validateFile2 = "", i = 0;
        for (let [k, v] of Object.entries(unwrapImportSchema(validator.body.schema).properties))
          !v.extension || v[Kind] !== "File" && v[Kind] !== "Files" || (i && (validateFile2 += ","), validateFile2 += `fileType(c.body.${k},${JSON.stringify(v.extension)},'body.${k}')`, i++);
        i && (fnLiteral += `
`), i === 1 ? fnLiteral += `await ${validateFile2}
` : i > 1 && (fnLiteral += `await Promise.all([${validateFile2}])
`);
      }
    }
    validator.cookie && (validator.cookie.config = mergeCookie(validator.cookie.config, validator.cookie?.config ?? {}), fnLiteral += `let cookieValue={}
for(const [key,value] of Object.entries(c.cookie))cookieValue[key]=value.value
`, validator.cookie.isOptional && (fnLiteral += "if(isNotEmpty(c.cookie)){"), validator.cookie.provider === "standard" ? (fnLiteral += `let vac=validator.cookie.Check(cookieValue)
if(vac instanceof Promise)vac=await vac
if(vac.issues){` + validation.validate("cookie", undefined, "vac.issues") + `}else{cookieValue=vac.value}
`, fnLiteral += `for(const k of Object.keys(cookieValue))c.cookie[k].value=cookieValue[k]
`) : validator.body?.schema?.noValidate !== true && (fnLiteral += "if(validator.cookie.Check(cookieValue)===false){" + validation.validate("cookie", "cookieValue") + "}", validator.cookie.hasTransform && (fnLiteral += coerceTransformDecodeError("for(const [key,value] of Object.entries(validator.cookie.Decode(cookieValue))){c.cookie[key].value=value}", "cookie"))), validator.cookie.isOptional && (fnLiteral += "}"));
  }
  if (hooks?.beforeHandle || hasTrace) {
    let reporter = report("beforeHandle", {
      total: hooks.beforeHandle?.length
    }), hasResolve = false;
    if (hooks.beforeHandle?.length)
      for (let i = 0;i < hooks.beforeHandle.length; i++) {
        let beforeHandle = hooks.beforeHandle[i], endUnit = reporter.resolveChild(beforeHandle.fn.name), returning = hasReturn(beforeHandle);
        if (beforeHandle.subType === "resolve" || beforeHandle.subType === "mapResolve")
          hasResolve || (hasResolve = true, fnLiteral += `
let resolved
`), fnLiteral += isAsync(beforeHandle) ? `resolved=await e.beforeHandle[${i}](c);
` : `resolved=e.beforeHandle[${i}](c);
`, beforeHandle.subType === "mapResolve" ? fnLiteral += "if(resolved instanceof ElysiaCustomStatusResponse){" + mapResponse3("resolved") + `}else{resolved.request=c.request
resolved.store=c.store
resolved.qi=c.qi
resolved.path=c.path
resolved.url=c.url
resolved.redirect=c.redirect
resolved.set=c.set
resolved.error=c.error
c=resolved}` : fnLiteral += "if(resolved instanceof ElysiaCustomStatusResponse){" + mapResponse3("resolved") + `}else Object.assign(c, resolved)
`, endUnit();
        else if (!returning)
          fnLiteral += isAsync(beforeHandle) ? `await e.beforeHandle[${i}](c)
` : `e.beforeHandle[${i}](c)
`, endUnit();
        else {
          if (fnLiteral += isAsync(beforeHandle) ? `be=await e.beforeHandle[${i}](c)
` : `be=e.beforeHandle[${i}](c)
`, endUnit("be"), fnLiteral += "if(be!==undefined){", reporter.resolve(), hooks.afterHandle?.length || hasTrace) {
            report("handle", {
              name: isHandleFn ? handler.name : undefined
            }).resolve();
            let reporter2 = report("afterHandle", {
              total: hooks.afterHandle?.length
            });
            if (hooks.afterHandle?.length)
              for (let i2 = 0;i2 < hooks.afterHandle.length; i2++) {
                let hook = hooks.afterHandle[i2], returning2 = hasReturn(hook), endUnit2 = reporter2.resolveChild(hook.fn.name);
                fnLiteral += `c.response = be
`, returning2 ? (fnLiteral += isAsync(hook.fn) ? `af=await e.afterHandle[${i2}](c)
` : `af=e.afterHandle[${i2}](c)
`, fnLiteral += `if(af!==undefined) c.response=c.responseValue=be=af
`) : fnLiteral += isAsync(hook.fn) ? `await e.afterHandle[${i2}](c, be)
` : `e.afterHandle[${i2}](c, be)
`, endUnit2("af");
              }
            reporter2.resolve();
          }
          validator.response && (fnLiteral += validation.response("be"));
          let mapResponseReporter = report("mapResponse", {
            total: hooks.mapResponse?.length
          });
          if (hooks.mapResponse?.length) {
            fnLiteral += `c.response=c.responseValue=be
`;
            for (let i2 = 0;i2 < hooks.mapResponse.length; i2++) {
              let mapResponse4 = hooks.mapResponse[i2], endUnit2 = mapResponseReporter.resolveChild(mapResponse4.fn.name);
              fnLiteral += `if(mr===undefined){mr=${isAsyncName(mapResponse4) ? "await " : ""}e.mapResponse[${i2}](c)
if(mr!==undefined)be=c.response=c.responseValue=mr}`, endUnit2();
            }
          }
          mapResponseReporter.resolve(), fnLiteral += encodeCookie(), fnLiteral += `return mapEarlyResponse(${saveResponse}be,c.set${mapResponseContext})}
`;
        }
      }
    reporter.resolve();
  }
  if (hooks.afterHandle?.length || hasTrace) {
    let handleReporter = report("handle", {
      name: isHandleFn ? handler.name : undefined
    });
    hooks.afterHandle?.length ? fnLiteral += isAsyncHandler ? `let r=c.response=c.responseValue=await ${handle}
` : `let r=c.response=c.responseValue=${handle}
` : fnLiteral += isAsyncHandler ? `let r=await ${handle}
` : `let r=${handle}
`, handleReporter.resolve();
    let reporter = report("afterHandle", {
      total: hooks.afterHandle?.length
    });
    if (hooks.afterHandle?.length)
      for (let i = 0;i < hooks.afterHandle.length; i++) {
        let hook = hooks.afterHandle[i], returning = hasReturn(hook), endUnit = reporter.resolveChild(hook.fn.name);
        returning ? (fnLiteral += isAsync(hook.fn) ? `af=await e.afterHandle[${i}](c)
` : `af=e.afterHandle[${i}](c)
`, endUnit("af"), validator.response ? (fnLiteral += "if(af!==undefined){", reporter.resolve(), fnLiteral += validation.response("af"), fnLiteral += "c.response=c.responseValue=af}") : (fnLiteral += "if(af!==undefined){", reporter.resolve(), fnLiteral += "c.response=c.responseValue=af}")) : (fnLiteral += isAsync(hook.fn) ? `await e.afterHandle[${i}](c)
` : `e.afterHandle[${i}](c)
`, endUnit());
      }
    reporter.resolve(), hooks.afterHandle?.length && (fnLiteral += `r=c.response
`), validator.response && (fnLiteral += validation.response()), fnLiteral += encodeCookie();
    let mapResponseReporter = report("mapResponse", {
      total: hooks.mapResponse?.length
    });
    if (hooks.mapResponse?.length)
      for (let i = 0;i < hooks.mapResponse.length; i++) {
        let mapResponse4 = hooks.mapResponse[i], endUnit = mapResponseReporter.resolveChild(mapResponse4.fn.name);
        fnLiteral += `mr=${isAsyncName(mapResponse4) ? "await " : ""}e.mapResponse[${i}](c)
if(mr!==undefined)r=c.response=c.responseValue=mr
`, endUnit();
      }
    mapResponseReporter.resolve(), fnLiteral += mapResponse3();
  } else {
    let handleReporter = report("handle", {
      name: isHandleFn ? handler.name : undefined
    });
    if (validator.response || hooks.mapResponse?.length || hasTrace) {
      fnLiteral += isAsyncHandler ? `let r=await ${handle}
` : `let r=${handle}
`, handleReporter.resolve(), validator.response && (fnLiteral += validation.response());
      let mapResponseReporter = report("mapResponse", {
        total: hooks.mapResponse?.length
      });
      if (hooks.mapResponse?.length) {
        fnLiteral += `
c.response=c.responseValue=r
`;
        for (let i = 0;i < hooks.mapResponse.length; i++) {
          let mapResponse4 = hooks.mapResponse[i], endUnit = mapResponseReporter.resolveChild(mapResponse4.fn.name);
          fnLiteral += `
if(mr===undefined){mr=${isAsyncName(mapResponse4) ? "await " : ""}e.mapResponse[${i}](c)
if(mr!==undefined)r=c.response=c.responseValue=mr}
`, endUnit();
        }
      }
      mapResponseReporter.resolve(), fnLiteral += encodeCookie(), handler instanceof Response ? (fnLiteral += afterResponse(), fnLiteral += inference.set ? `if(isNotEmpty(c.set.headers)||c.set.status!==200||c.set.redirect||c.set.cookie)return mapResponse(${saveResponse}${handle}.clone(),c.set${mapResponseContext})
else return ${handle}.clone()` : `return ${handle}.clone()`, fnLiteral += `
`) : fnLiteral += mapResponse3();
    } else if (hasCookie || hasTrace) {
      fnLiteral += isAsyncHandler ? `let r=await ${handle}
` : `let r=${handle}
`, handleReporter.resolve();
      let mapResponseReporter = report("mapResponse", {
        total: hooks.mapResponse?.length
      });
      if (hooks.mapResponse?.length) {
        fnLiteral += `c.response=c.responseValue= r
`;
        for (let i = 0;i < hooks.mapResponse.length; i++) {
          let mapResponse4 = hooks.mapResponse[i], endUnit = mapResponseReporter.resolveChild(mapResponse4.fn.name);
          fnLiteral += `if(mr===undefined){mr=${isAsyncName(mapResponse4) ? "await " : ""}e.mapResponse[${i}](c)
if(mr!==undefined)r=c.response=c.responseValue=mr}`, endUnit();
        }
      }
      mapResponseReporter.resolve(), fnLiteral += encodeCookie() + mapResponse3();
    } else {
      handleReporter.resolve();
      let handled = isAsyncHandler ? `await ${handle}` : handle;
      handler instanceof Response ? (fnLiteral += afterResponse(), fnLiteral += inference.set ? `if(isNotEmpty(c.set.headers)||c.set.status!==200||c.set.redirect||c.set.cookie)return mapResponse(${saveResponse}${handle}.clone(),c.set${mapResponseContext})
else return ${handle}.clone()
` : `return ${handle}.clone()
`) : fnLiteral += mapResponse3(handled);
    }
  }
  if (fnLiteral += `
}catch(error){`, !maybeAsync && hooks.error?.length && (fnLiteral += "return(async()=>{"), fnLiteral += `const set=c.set
if(!set.status||set.status<300)set.status=error?.status||500
`, hasCookie && (fnLiteral += encodeCookie()), hasTrace && hooks.trace)
    for (let i = 0;i < hooks.trace.length; i++)
      fnLiteral += `report${i}?.resolve(error);reportChild${i}?.(error)
`;
  let errorReporter = report("error", {
    total: hooks.error?.length
  });
  if (hooks.error?.length) {
    fnLiteral += `c.error=error
`, hasValidation ? fnLiteral += `if(error instanceof TypeBoxError){c.code="VALIDATION"
c.set.status=422}else{c.code=error.code??error[ERROR_CODE]??"UNKNOWN"}` : fnLiteral += `c.code=error.code??error[ERROR_CODE]??"UNKNOWN"
`, fnLiteral += `let er
`, hooks.mapResponse?.length && (fnLiteral += `let mep
`);
    for (let i = 0;i < hooks.error.length; i++) {
      let endUnit = errorReporter.resolveChild(hooks.error[i].fn.name);
      if (isAsync(hooks.error[i]) ? fnLiteral += `er=await e.error[${i}](c)
` : fnLiteral += `er=e.error[${i}](c)
if(er instanceof Promise)er=await er
`, endUnit(), hooks.mapResponse?.length) {
        let mapResponseReporter = report("mapResponse", {
          total: hooks.mapResponse?.length
        });
        for (let i2 = 0;i2 < hooks.mapResponse.length; i2++) {
          let mapResponse4 = hooks.mapResponse[i2], endUnit2 = mapResponseReporter.resolveChild(mapResponse4.fn.name);
          fnLiteral += `c.response=c.responseValue=er
mep=e.mapResponse[${i2}](c)
if(mep instanceof Promise)er=await er
if(mep!==undefined)er=mep
`, endUnit2();
        }
        mapResponseReporter.resolve();
      }
      if (fnLiteral += `er=mapEarlyResponse(er,set${mapResponseContext})
`, fnLiteral += "if(er){", hasTrace && hooks.trace) {
        for (let i2 = 0;i2 < hooks.trace.length; i2++)
          fnLiteral += `report${i2}.resolve()
`;
        errorReporter.resolve();
      }
      fnLiteral += "return er}";
    }
  }
  errorReporter.resolve(), fnLiteral += "return handleError(c,error,true)", !maybeAsync && hooks.error?.length && (fnLiteral += "})()"), fnLiteral += "}";
  let adapterVariables = adapter.inject ? Object.keys(adapter.inject).join(",") + "," : "", init = "const {handler,handleError,hooks:e, " + allocateIf("validator,", hasValidation) + "mapResponse,mapCompactResponse,mapEarlyResponse,isNotEmpty,utils:{" + allocateIf("parseQuery,", hasBody) + allocateIf("parseQueryFromURL,", hasQuery) + "},error:{" + allocateIf("ValidationError,", hasValidation) + allocateIf("ParseError", hasBody) + "},fileType,schema,definitions,ERROR_CODE," + allocateIf("parseCookie,", hasCookie) + allocateIf("signCookie,", hasCookie) + allocateIf("decodeURIComponent,", hasQuery) + "ElysiaCustomStatusResponse," + allocateIf("ELYSIA_TRACE,", hasTrace) + allocateIf("ELYSIA_REQUEST_ID,", hasTrace) + allocateIf("parser,", hooks.parse?.length) + allocateIf("getServer,", inference.server) + allocateIf("fileUnions,", fileUnions.length) + adapterVariables + allocateIf("TypeBoxError", hasValidation) + `}=hooks
const trace=e.trace
return ${maybeAsync ? "async " : ""}function handle(c){`;
  hooks.beforeHandle?.length && (init += `let be
`), hooks.afterHandle?.length && (init += `let af
`), hooks.mapResponse?.length && (init += `let mr
`), allowMeta && (init += `c.schema=schema
c.defs=definitions
`), fnLiteral = init + fnLiteral + "}", init = "";
  try {
    return Function("hooks", `"use strict";
` + fnLiteral)({
      handler,
      hooks: lifeCycleToFn(hooks),
      validator: hasValidation ? validator : undefined,
      handleError: app.handleError,
      mapResponse: adapterHandler.mapResponse,
      mapCompactResponse: adapterHandler.mapCompactResponse,
      mapEarlyResponse: adapterHandler.mapEarlyResponse,
      isNotEmpty,
      utils: {
        parseQuery: hasBody ? parseQuery : undefined,
        parseQueryFromURL: hasQuery ? validator.query?.provider === "standard" ? parseQueryStandardSchema : parseQueryFromURL : undefined
      },
      error: {
        ValidationError: hasValidation ? ValidationError : undefined,
        ParseError: hasBody ? ParseError2 : undefined
      },
      fileType,
      schema: app.router.history,
      definitions: app.definitions.type,
      ERROR_CODE,
      parseCookie: hasCookie ? parseCookie : undefined,
      signCookie: hasCookie ? signCookie : undefined,
      decodeURIComponent: hasQuery ? import_fast_decode_uri_component3.default : undefined,
      ElysiaCustomStatusResponse,
      ELYSIA_TRACE: hasTrace ? ELYSIA_TRACE : undefined,
      ELYSIA_REQUEST_ID: hasTrace ? ELYSIA_REQUEST_ID : undefined,
      getServer: inference.server ? () => app.getServer() : undefined,
      fileUnions: fileUnions.length ? fileUnions : undefined,
      TypeBoxError: hasValidation ? TypeBoxError : undefined,
      parser: app["~parser"],
      ...adapter.inject
    });
  } catch (error) {
    let debugHooks = lifeCycleToFn(hooks);
    console.log("[Composer] failed to generate optimized handler"), console.log("---"), console.log({
      handler: typeof handler == "function" ? handler.toString() : handler,
      instruction: fnLiteral,
      hooks: {
        ...debugHooks,
        transform: debugHooks?.transform?.map?.((x) => x.toString()),
        resolve: debugHooks?.resolve?.map?.((x) => x.toString()),
        beforeHandle: debugHooks?.beforeHandle?.map?.((x) => x.toString()),
        afterHandle: debugHooks?.afterHandle?.map?.((x) => x.toString()),
        mapResponse: debugHooks?.mapResponse?.map?.((x) => x.toString()),
        parse: debugHooks?.parse?.map?.((x) => x.toString()),
        error: debugHooks?.error?.map?.((x) => x.toString()),
        afterResponse: debugHooks?.afterResponse?.map?.((x) => x.toString()),
        stop: debugHooks?.stop?.map?.((x) => x.toString())
      },
      validator,
      definitions: app.definitions.type,
      error
    }), console.log("---"), process.exit(1);
  }
};
var createOnRequestHandler = (app, addFn) => {
  let fnLiteral = "", reporter = createReport({
    trace: app.event.trace,
    addFn: addFn ?? ((word) => {
      fnLiteral += word;
    })
  })("request", {
    total: app.event.request?.length
  });
  if (app.event.request?.length) {
    fnLiteral += "try{";
    for (let i = 0;i < app.event.request.length; i++) {
      let hook = app.event.request[i], withReturn = hasReturn(hook), maybeAsync = isAsync(hook), endUnit = reporter.resolveChild(app.event.request[i].fn.name);
      withReturn ? (fnLiteral += `re=mapEarlyResponse(${maybeAsync ? "await " : ""}onRequest[${i}](c),c.set)
`, endUnit("re"), fnLiteral += `if(re!==undefined)return re
`) : (fnLiteral += `${maybeAsync ? "await " : ""}onRequest[${i}](c)
`, endUnit());
    }
    fnLiteral += "}catch(error){return app.handleError(c,error,false)}";
  }
  return reporter.resolve(), fnLiteral;
};
var createHoc = (app, fnName = "map") => {
  let hoc = app.extender.higherOrderFunctions;
  if (!hoc.length)
    return "return " + fnName;
  let adapter = app["~adapter"].composeGeneralHandler, handler = fnName;
  for (let i = 0;i < hoc.length; i++)
    handler = `hoc[${i}](${handler},${adapter.parameters})`;
  return `return function hocMap(${adapter.parameters}){return ${handler}(${adapter.parameters})}`;
};
var composeGeneralHandler = (app) => {
  let adapter = app["~adapter"].composeGeneralHandler;
  app.router.http.build();
  let isWebstandard = app["~adapter"].isWebStandard, hasTrace = app.event.trace?.length, fnLiteral = "", router = app.router, findDynamicRoute = router.http.root.WS ? "const route=router.find(r.method==='GET'&&r.headers.get('upgrade')==='websocket'?'WS':r.method,p)" : "const route=router.find(r.method,p)";
  findDynamicRoute += router.http.root.ALL ? `??router.find('ALL',p)
` : `
`, isWebstandard && (findDynamicRoute += `if(r.method==='HEAD'){const route=router.find('GET',p)
if(route){c.params=route.params
const _res=route.store.handler?route.store.handler(c):route.store.compile()(c)
if(_res)return getResponseLength(_res).then((length)=>{_res.headers.set('content-length', length)
return new Response(null,{status:_res.status,statusText:_res.statusText,headers:_res.headers})
})}}`);
  let afterResponse = `c.error=notFound
`;
  if (app.event.afterResponse?.length && !app.event.error) {
    afterResponse = `
c.error=notFound
`;
    let prefix = app.event.afterResponse.some(isAsync) ? "async" : "";
    afterResponse += `
setImmediate(${prefix}()=>{`;
    for (let i = 0;i < app.event.afterResponse.length; i++) {
      let fn2 = app.event.afterResponse[i].fn;
      afterResponse += `
${isAsyncName(fn2) ? "await " : ""}afterResponse[${i}](c)
`;
    }
    afterResponse += `})
`;
  }
  app.inference.query && (afterResponse += `
if(c.qi===-1){c.query={}}else{c.query=parseQueryFromURL(c.url,c.qi+1)}`);
  let error404 = adapter.error404(!!app.event.request?.length, !!app.event.error?.length, afterResponse);
  findDynamicRoute += error404.code, findDynamicRoute += `
c.params=route.params
if(route.store.handler)return route.store.handler(c)
return route.store.compile()(c)
`;
  let switchMap = "";
  for (let [path3, methods] of Object.entries(router.static)) {
    switchMap += `case'${path3}':`, app.config.strictPath !== true && (switchMap += `case'${getLoosePath(path3)}':`);
    let encoded = encodePath(path3);
    path3 !== encoded && (switchMap += `case'${encoded}':`), switchMap += "switch(r.method){", (("GET" in methods) || ("WS" in methods)) && (switchMap += "case 'GET':", ("WS" in methods) && (switchMap += `if(r.headers.get('upgrade')==='websocket')return ht[${methods.WS}].composed(c)
`, ("GET" in methods) || ("ALL" in methods ? switchMap += `return ht[${methods.ALL}].composed(c)
` : switchMap += `break map
`)), ("GET" in methods) && (switchMap += `return ht[${methods.GET}].composed(c)
`)), isWebstandard && (("GET" in methods) || ("ALL" in methods)) && !("HEAD" in methods) && (switchMap += `case 'HEAD':const _res=ht[${methods.GET ?? methods.ALL}].composed(c)
return getResponseLength(_res).then((length)=>{_res.headers.set('content-length', length)
return new Response(null,{status:_res.status,statusText:_res.statusText,headers:_res.headers})
})
`);
    for (let [method, index] of Object.entries(methods))
      method === "ALL" || method === "GET" || method === "WS" || (switchMap += `case '${method}':return ht[${index}].composed(c)
`);
    "ALL" in methods ? switchMap += `default:return ht[${methods.ALL}].composed(c)
` : switchMap += `default:break map
`, switchMap += "}";
  }
  let maybeAsync = !!app.event.request?.some(isAsync), adapterVariables = adapter.inject ? Object.keys(adapter.inject).join(",") + "," : "";
  fnLiteral += `
const {app,mapEarlyResponse,NotFoundError,randomId,handleError,status,redirect,getResponseLength,` + allocateIf("parseQueryFromURL,", app.inference.query) + allocateIf("ELYSIA_TRACE,", hasTrace) + allocateIf("ELYSIA_REQUEST_ID,", hasTrace) + adapterVariables + `}=data
const store=app.singleton.store
const decorator=app.singleton.decorator
const staticRouter=app.router.static.http
const ht=app.router.history
const router=app.router.http
const trace=app.event.trace?.map(x=>typeof x==='function'?x:x.fn)??[]
const notFound=new NotFoundError()
const hoc=app.extender.higherOrderFunctions.map(x=>x.fn)
`, app.event.request?.length && (fnLiteral += `const onRequest=app.event.request.map(x=>x.fn)
`), app.event.afterResponse?.length && (fnLiteral += `const afterResponse=app.event.afterResponse.map(x=>x.fn)
`), fnLiteral += error404.declare, app.event.trace?.length && (fnLiteral += "const " + app.event.trace.map((_, i) => `tr${i}=app.event.trace[${i}].fn`).join(",") + `
`), fnLiteral += `${maybeAsync ? "async " : ""}function map(${adapter.parameters}){`, app.event.request?.length && (fnLiteral += `let re
`), fnLiteral += adapter.createContext(app), app.event.trace?.length && (fnLiteral += "c[ELYSIA_TRACE]=[" + app.event.trace.map((_, i) => `tr${i}(c)`).join(",") + `]
`), fnLiteral += createOnRequestHandler(app), switchMap && (fnLiteral += `
map: switch(p){
` + switchMap + "}"), fnLiteral += findDynamicRoute + `}
` + createHoc(app);
  let handleError = composeErrorHandler(app);
  app.handleError = handleError;
  let fn = Function("data", `"use strict";
` + fnLiteral)({
    app,
    mapEarlyResponse: app["~adapter"].handler.mapEarlyResponse,
    NotFoundError,
    randomId,
    handleError,
    status,
    redirect,
    getResponseLength,
    parseQueryFromURL: app.inference.query ? parseQueryFromURL : undefined,
    ELYSIA_TRACE: hasTrace ? ELYSIA_TRACE : undefined,
    ELYSIA_REQUEST_ID: hasTrace ? ELYSIA_REQUEST_ID : undefined,
    ...adapter.inject
  });
  return isBun && Bun.gc(false), fn;
};
var composeErrorHandler = (app) => {
  let hooks = app.event, fnLiteral = "", adapter = app["~adapter"].composeError, adapterVariables = adapter.inject ? Object.keys(adapter.inject).join(",") + "," : "", hasTrace = !!app.event.trace?.length;
  fnLiteral += "const {mapResponse,ERROR_CODE,ElysiaCustomStatusResponse," + allocateIf("onError,", app.event.error) + allocateIf("afterResponse,", app.event.afterResponse) + allocateIf("trace,", app.event.trace) + allocateIf("onMapResponse,", app.event.mapResponse) + allocateIf("ELYSIA_TRACE,", hasTrace) + allocateIf("ELYSIA_REQUEST_ID,", hasTrace) + adapterVariables + `}=inject
`, fnLiteral += `return ${app.event.error?.find(isAsync) || app.event.mapResponse?.find(isAsync) ? "async " : ""}function(context,error,skipGlobal){`, fnLiteral += "", hasTrace && (fnLiteral += `const id=context[ELYSIA_REQUEST_ID]
`);
  let report = createReport({
    context: "context",
    trace: hooks.trace,
    addFn: (word) => {
      fnLiteral += word;
    }
  }), afterResponse = () => {
    if (!hooks.afterResponse?.length && !hasTrace)
      return "";
    let afterResponse2 = "", prefix = hooks.afterResponse?.some(isAsync) ? "async" : "";
    afterResponse2 += `
setImmediate(${prefix}()=>{`;
    let reporter = createReport({
      context: "context",
      trace: hooks.trace,
      addFn: (word) => {
        afterResponse2 += word;
      }
    })("afterResponse", {
      total: hooks.afterResponse?.length,
      name: "context"
    });
    if (hooks.afterResponse?.length && hooks.afterResponse)
      for (let i = 0;i < hooks.afterResponse.length; i++) {
        let fn = hooks.afterResponse[i].fn, endUnit = reporter.resolveChild(fn.name);
        afterResponse2 += `
${isAsyncName(fn) ? "await " : ""}afterResponse[${i}](context)
`, endUnit();
      }
    return reporter.resolve(), afterResponse2 += `})
`, afterResponse2;
  };
  fnLiteral += `const set=context.set
let _r
if(!context.code)context.code=error.code??error[ERROR_CODE]
if(!(context.error instanceof Error))context.error=error
if(error instanceof ElysiaCustomStatusResponse){set.status=error.status=error.code
error.message=error.response}`, adapter.declare && (fnLiteral += adapter.declare);
  let saveResponse = hasTrace || hooks.afterResponse?.length ? "context.response = " : "";
  if (app.event.error)
    for (let i = 0;i < app.event.error.length; i++) {
      let handler = app.event.error[i], response = `${isAsync(handler) ? "await " : ""}onError[${i}](context)
`;
      if (fnLiteral += "if(skipGlobal!==true){", hasReturn(handler)) {
        fnLiteral += `_r=${response}
if(_r!==undefined){if(_r instanceof Response){` + afterResponse() + `return mapResponse(_r,set${adapter.mapResponseContext})}if(_r instanceof ElysiaCustomStatusResponse){error.status=error.code
error.message = error.response}if(set.status===200||!set.status)set.status=error.status
`;
        let mapResponseReporter2 = report("mapResponse", {
          total: hooks.mapResponse?.length,
          name: "context"
        });
        if (hooks.mapResponse?.length)
          for (let i2 = 0;i2 < hooks.mapResponse.length; i2++) {
            let mapResponse3 = hooks.mapResponse[i2], endUnit = mapResponseReporter2.resolveChild(mapResponse3.fn.name);
            fnLiteral += `context.response=context.responseValue=_r_r=${isAsyncName(mapResponse3) ? "await " : ""}onMapResponse[${i2}](context)
`, endUnit();
          }
        mapResponseReporter2.resolve(), fnLiteral += afterResponse() + `return mapResponse(${saveResponse}_r,set${adapter.mapResponseContext})}`;
      } else
        fnLiteral += response;
      fnLiteral += "}";
    }
  fnLiteral += `if(error.constructor.name==="ValidationError"||error.constructor.name==="TransformDecodeError"){
if(error.error)error=error.error
set.status=error.status??422
` + afterResponse() + adapter.validationError + `
}
`, fnLiteral += "if(error instanceof Error){" + afterResponse() + `
if(typeof error.toResponse==='function')return context.response=context.responseValue=error.toResponse()
` + adapter.unknownError + `
}`;
  let mapResponseReporter = report("mapResponse", {
    total: hooks.mapResponse?.length,
    name: "context"
  });
  if (fnLiteral += `
if(!context.response)context.response=context.responseValue=error.message??error
`, hooks.mapResponse?.length) {
    fnLiteral += `let mr
`;
    for (let i = 0;i < hooks.mapResponse.length; i++) {
      let mapResponse3 = hooks.mapResponse[i], endUnit = mapResponseReporter.resolveChild(mapResponse3.fn.name);
      fnLiteral += `if(mr===undefined){mr=${isAsyncName(mapResponse3) ? "await " : ""}onMapResponse[${i}](context)
if(mr!==undefined)error=context.response=context.responseValue=mr}`, endUnit();
    }
  }
  mapResponseReporter.resolve(), fnLiteral += afterResponse() + `
return mapResponse(${saveResponse}error,set${adapter.mapResponseContext})}`;
  let mapFn = (x) => typeof x == "function" ? x : x.fn;
  return Function("inject", `"use strict";
` + fnLiteral)({
    mapResponse: app["~adapter"].handler.mapResponse,
    ERROR_CODE,
    ElysiaCustomStatusResponse,
    onError: app.event.error?.map(mapFn),
    afterResponse: app.event.afterResponse?.map(mapFn),
    trace: app.event.trace?.map(mapFn),
    onMapResponse: app.event.mapResponse?.map(mapFn),
    ELYSIA_TRACE: hasTrace ? ELYSIA_TRACE : undefined,
    ELYSIA_REQUEST_ID: hasTrace ? ELYSIA_REQUEST_ID : undefined,
    ...adapter.inject
  });
};
var allocateIf2 = (value, condition) => condition ? value : "";
var createContext = (app, route, inference, isInline = false) => {
  let fnLiteral = "", defaultHeaders = app.setHeaders, hasTrace = !!app.event.trace?.length;
  hasTrace && (fnLiteral += `const id=randomId()
`);
  let isDynamic = /[:*]/.test(route.path), getQi = `const u=request.url,s=u.indexOf('/',${app.config.handler?.standardHostname ?? true ? 11 : 7}),qi=u.indexOf('?', s + 1)
`, needsQuery = inference.query || !!route.hooks.query || !!route.hooks.standaloneValidator?.find((x) => x.query) || app.event.request?.length;
  needsQuery && (fnLiteral += getQi);
  let getPath = inference.path ? isDynamic ? "get path(){" + (needsQuery ? "" : getQi) + `if(qi===-1)return u.substring(s)
return u.substring(s,qi)
},` : `path:'${route.path}',` : "";
  fnLiteral += allocateIf2("const c=", !isInline) + "{request,store," + allocateIf2("qi,", needsQuery) + allocateIf2("params:request.params,", isDynamic) + getPath + allocateIf2("url:request.url,", hasTrace || inference.url || needsQuery) + "redirect,status,set:{headers:" + (isNotEmpty(defaultHeaders) ? "Object.assign({},app.setHeaders)" : "Object.create(null)") + ",status:200}", inference.server && (fnLiteral += ",get server(){return app.getServer()}"), hasTrace && (fnLiteral += ",[ELYSIA_REQUEST_ID]:id");
  {
    let decoratorsLiteral = "";
    for (let key of Object.keys(app.singleton.decorator))
      decoratorsLiteral += `,'${key}':decorator['${key}']`;
    fnLiteral += decoratorsLiteral;
  }
  return fnLiteral += `}
`, fnLiteral;
};
var createBunRouteHandler = (app, route) => {
  let hasTrace = !!app.event.trace?.length, hasHoc = !!app.extender.higherOrderFunctions.length, inference = sucrose(route.hooks, app.inference);
  inference = sucrose({
    handler: route.handler
  }, inference);
  let fnLiteral = "const handler=data.handler,app=data.app,store=data.store,decorator=data.decorator,redirect=data.redirect,route=data.route,mapEarlyResponse=data.mapEarlyResponse," + allocateIf2("randomId=data.randomId,", hasTrace) + allocateIf2("ELYSIA_REQUEST_ID=data.ELYSIA_REQUEST_ID,", hasTrace) + allocateIf2("ELYSIA_TRACE=data.ELYSIA_TRACE,", hasTrace) + allocateIf2("trace=data.trace,", hasTrace) + allocateIf2("hoc=data.hoc,", hasHoc) + `status=data.status
`;
  app.event.request?.length && (fnLiteral += `const onRequest=app.event.request.map(x=>x.fn)
`), fnLiteral += `${app.event.request?.find(isAsync) ? "async" : ""} function map(request){`;
  let needsQuery = inference.query || !!route.hooks.query || !!route.hooks.standaloneValidator?.find((x) => x.query);
  return hasTrace || needsQuery || app.event.request?.length ? (fnLiteral += createContext(app, route, inference), fnLiteral += createOnRequestHandler(app), fnLiteral += "return handler(c)}") : fnLiteral += `return handler(${createContext(app, route, inference, true)})}`, fnLiteral += createHoc(app), Function("data", fnLiteral)({
    app,
    handler: route.compile?.() ?? route.composed,
    redirect,
    status,
    hoc: app.extender.higherOrderFunctions.map((x) => x.fn),
    store: app.store,
    decorator: app.decorator,
    route: route.path,
    randomId: hasTrace ? randomId : undefined,
    ELYSIA_TRACE: hasTrace ? ELYSIA_TRACE : undefined,
    ELYSIA_REQUEST_ID: hasTrace ? ELYSIA_REQUEST_ID : undefined,
    trace: hasTrace ? app.event.trace?.map((x) => x?.fn ?? x) : undefined,
    mapEarlyResponse: mapEarlyResponse2
  });
};
var createNativeStaticHandler = (handle, hooks, set2) => {
  if (typeof handle == "function" || handle instanceof Blob)
    return;
  if (isHTMLBundle(handle))
    return () => handle;
  let response = mapResponse2(handle, set2 ?? {
    headers: {}
  });
  if (!hooks.parse?.length && !hooks.transform?.length && !hooks.beforeHandle?.length && !hooks.afterHandle?.length)
    return response instanceof Promise ? response.then((response2) => {
      if (response2)
        return response2.headers.has("content-type") || response2.headers.append("content-type", "text/plain"), response2.clone();
    }) : (response.headers.has("content-type") || response.headers.append("content-type", "text/plain"), () => response.clone());
};
var websocket = {
  open(ws) {
    ws.data.open?.(ws);
  },
  message(ws, message) {
    ws.data.message?.(ws, message);
  },
  drain(ws) {
    ws.data.drain?.(ws);
  },
  close(ws, code, reason) {
    ws.data.close?.(ws, code, reason);
  }
};
var ElysiaWS = class {
  constructor(raw, data, body = undefined) {
    this.raw = raw;
    this.data = data;
    this.body = body;
    this.validator = raw.data?.validator, this.sendText = raw.sendText.bind(raw), this.sendBinary = raw.sendBinary.bind(raw), this.close = raw.close.bind(raw), this.terminate = raw.terminate.bind(raw), this.publishText = raw.publishText.bind(raw), this.publishBinary = raw.publishBinary.bind(raw), this.subscribe = raw.subscribe.bind(raw), this.unsubscribe = raw.unsubscribe.bind(raw), this.isSubscribed = raw.isSubscribed.bind(raw), this.cork = raw.cork.bind(raw), this.remoteAddress = raw.remoteAddress, this.binaryType = raw.binaryType, this.data = raw.data, this.send = this.send.bind(this), this.ping = this.ping.bind(this), this.pong = this.pong.bind(this), this.publish = this.publish.bind(this);
  }
  send(data, compress) {
    return Buffer.isBuffer(data) ? this.raw.send(data, compress) : this.validator?.Check(data) === false ? this.raw.send(new ValidationError("message", this.validator, data).message) : (typeof data == "object" && (data = JSON.stringify(data)), this.raw.send(data, compress));
  }
  ping(data) {
    return Buffer.isBuffer(data) ? this.raw.ping(data) : this.validator?.Check(data) === false ? this.raw.send(new ValidationError("message", this.validator, data).message) : (typeof data == "object" && (data = JSON.stringify(data)), this.raw.ping(data));
  }
  pong(data) {
    return Buffer.isBuffer(data) ? this.raw.pong(data) : this.validator?.Check(data) === false ? this.raw.send(new ValidationError("message", this.validator, data).message) : (typeof data == "object" && (data = JSON.stringify(data)), this.raw.pong(data));
  }
  publish(topic, data, compress) {
    return Buffer.isBuffer(data) ? this.raw.publish(topic, data, compress) : this.validator?.Check(data) === false ? this.raw.send(new ValidationError("message", this.validator, data).message) : (typeof data == "object" && (data = JSON.stringify(data)), this.raw.publish(topic, data, compress));
  }
  get readyState() {
    return this.raw.readyState;
  }
  get id() {
    return this.data.id;
  }
};
var createWSMessageParser = (parse22) => {
  let parsers = typeof parse22 == "function" ? [parse22] : parse22;
  return async function(ws, message) {
    if (typeof message == "string") {
      let start = message?.charCodeAt(0);
      if (start === 34 || start === 47 || start === 91 || start === 123)
        try {
          message = JSON.parse(message);
        } catch {}
      else
        isNumericString(message) ? message = +message : message === "true" ? message = true : message === "false" ? message = false : message === "null" && (message = null);
    }
    if (parsers)
      for (let i = 0;i < parsers.length; i++) {
        let temp = parsers[i](ws, message);
        if (temp instanceof Promise && (temp = await temp), temp !== undefined)
          return temp;
      }
    return message;
  };
};
var createHandleWSResponse = (validateResponse) => {
  let handleWSResponse = (ws, data) => {
    if (data instanceof Promise)
      return data.then((data2) => handleWSResponse(ws, data2));
    if (Buffer.isBuffer(data))
      return ws.send(data.toString());
    if (data === undefined)
      return;
    let send = (datum) => {
      if (validateResponse?.Check(datum) === false)
        return ws.send(new ValidationError("message", validateResponse, datum).message);
      if (typeof datum == "object")
        return ws.send(JSON.stringify(datum));
      ws.send(datum);
    };
    if (typeof data?.next != "function")
      return void send(data);
    let init = data.next();
    if (init instanceof Promise)
      return (async () => {
        let first = await init;
        if (validateResponse?.Check(first) === false)
          return ws.send(new ValidationError("message", validateResponse, first).message);
        if (send(first.value), !first.done)
          for await (let datum of data)
            send(datum);
      })();
    if (send(init.value), !init.done)
      for (let datum of data)
        send(datum);
  };
  return handleWSResponse;
};
var optionalParam = /:.+?\?(?=\/|$)/;
var getPossibleParams = (path3) => {
  let match = optionalParam.exec(path3);
  if (!match)
    return [path3];
  let routes = [], head = path3.slice(0, match.index), param = match[0].slice(0, -1), tail = path3.slice(match.index + match[0].length);
  routes.push(head.slice(0, -1)), routes.push(head + param);
  for (let fragment of getPossibleParams(tail))
    fragment && (fragment.startsWith("/:") || routes.push(head.slice(0, -1) + fragment), routes.push(head + param + fragment));
  return routes;
};
var isHTMLBundle = (handle) => typeof handle == "object" && handle !== null && (handle.toString() === "[object HTMLBundle]" || typeof handle.index == "string");
var supportedMethods = {
  GET: true,
  HEAD: true,
  OPTIONS: true,
  DELETE: true,
  PATCH: true,
  POST: true,
  PUT: true
};
var mapRoutes = (app) => {
  if (!app.config.aot || !app.config.systemRouter)
    return;
  let routes = {}, add = (route, handler) => {
    let path3 = encodeURI(route.path);
    routes[path3] ? routes[path3][route.method] || (routes[path3][route.method] = handler) : routes[path3] = {
      [route.method]: handler
    };
  }, tree = app.routeTree;
  for (let route of app.router.history) {
    if (typeof route.handler != "function")
      continue;
    let method = route.method;
    if (method === "GET" && `WS_${route.path}` in tree || method === "WS" || route.path.charCodeAt(route.path.length - 1) === 42 || !(method in supportedMethods))
      continue;
    if (method === "ALL") {
      `WS_${route.path}` in tree || (routes[route.path] = route.hooks?.config?.mount ? route.hooks.trace || app.event.trace || app.extender.higherOrderFunctions ? createBunRouteHandler(app, route) : route.hooks.mount || route.handler : route.handler);
      continue;
    }
    let compiled, handler = app.config.precompile ? createBunRouteHandler(app, route) : (request) => compiled ? compiled(request) : (compiled = createBunRouteHandler(app, route))(request);
    for (let path3 of getPossibleParams(route.path))
      add({
        method,
        path: path3
      }, handler);
  }
  return routes;
};
var mergeRoutes = (r1, r2) => {
  if (!r2)
    return r1;
  for (let key of Object.keys(r2))
    if (r1[key] !== r2[key]) {
      if (!r1[key]) {
        r1[key] = r2[key];
        continue;
      }
      if (r1[key] && r2[key]) {
        if (typeof r1[key] == "function" || r1[key] instanceof Response) {
          r1[key] = r2[key];
          continue;
        }
        r1[key] = {
          ...r1[key],
          ...r2[key]
        };
      }
    }
  return r1;
};
var BunAdapter = {
  ...WebStandardAdapter,
  name: "bun",
  handler: {
    mapResponse: mapResponse2,
    mapEarlyResponse: mapEarlyResponse2,
    mapCompactResponse: mapCompactResponse2,
    createStaticHandler: createStaticHandler2,
    createNativeStaticHandler
  },
  composeHandler: {
    ...WebStandardAdapter.composeHandler,
    headers: hasHeaderShorthand ? `c.headers=c.request.headers.toJSON()
` : `c.headers={}
for(const [k,v] of c.request.headers.entries())c.headers[k]=v
`
  },
  listen(app) {
    return (options, callback) => {
      if (typeof Bun > "u")
        throw new Error(".listen() is designed to run on Bun only. If you are running Elysia in other environment please use a dedicated plugin or export the handler via Elysia.fetch");
      if (app.compile(), typeof options == "string") {
        if (!isNumericString(options))
          throw new Error("Port must be a numeric value");
        options = parseInt(options);
      }
      let createStaticRoute = (iterator, { withAsync = false } = {}) => {
        let staticRoutes = {}, ops = [];
        for (let [path3, route] of Object.entries(iterator))
          if (path3 = encodeURI(path3), supportPerMethodInlineHandler) {
            if (!route)
              continue;
            for (let [method, value] of Object.entries(route))
              if (!(!value || !(method in supportedMethods))) {
                if (value instanceof Promise) {
                  withAsync && (staticRoutes[path3] || (staticRoutes[path3] = {}), ops.push(value.then((awaited) => {
                    awaited instanceof Response && (staticRoutes[path3][method] = awaited), isHTMLBundle(awaited) && (staticRoutes[path3][method] = awaited);
                  })));
                  continue;
                }
                !(value instanceof Response) && !isHTMLBundle(value) || (staticRoutes[path3] || (staticRoutes[path3] = {}), staticRoutes[path3][method] = value);
              }
          } else {
            if (!route)
              continue;
            if (route instanceof Promise) {
              withAsync && (staticRoutes[path3] || (staticRoutes[path3] = {}), ops.push(route.then((awaited) => {
                awaited instanceof Response && (staticRoutes[path3] = awaited);
              })));
              continue;
            }
            if (!(route instanceof Response))
              continue;
            staticRoutes[path3] = route;
          }
        return withAsync ? Promise.all(ops).then(() => staticRoutes) : staticRoutes;
      }, serve = typeof options == "object" ? {
        development: !isProduction,
        reusePort: true,
        idleTimeout: 30,
        ...app.config.serve || {},
        ...options || {},
        routes: mergeRoutes(mergeRoutes(createStaticRoute(app.router.response), mapRoutes(app)), app.config.serve?.routes),
        websocket: {
          ...app.config.websocket || {},
          ...websocket || {},
          ...options.websocket || {}
        },
        fetch: app.fetch
      } : {
        development: !isProduction,
        reusePort: true,
        idleTimeout: 30,
        ...app.config.serve || {},
        routes: mergeRoutes(mergeRoutes(createStaticRoute(app.router.response), mapRoutes(app)), app.config.serve?.routes),
        websocket: {
          ...app.config.websocket || {},
          ...websocket || {}
        },
        port: options,
        fetch: app.fetch
      };
      if (app.server = Bun.serve(serve), app.event.start)
        for (let i = 0;i < app.event.start.length; i++)
          app.event.start[i].fn(app);
      callback && callback(app.server), process.on("beforeExit", () => {
        if (app.server && (app.server.stop?.(), app.server = null, app.event.stop))
          for (let i = 0;i < app.event.stop.length; i++)
            app.event.stop[i].fn(app);
      }), app.promisedModules.then(async () => {
        app.server?.reload({
          ...serve,
          fetch: app.fetch,
          routes: mergeRoutes(mergeRoutes(await createStaticRoute(app.router.response, {
            withAsync: true
          }), mapRoutes(app)), app.config.serve?.routes)
        }), Bun?.gc(false);
      });
    };
  },
  async stop(app, closeActiveConnections) {
    if (app.server) {
      if (app.server.stop(closeActiveConnections), app.server = null, app.event.stop?.length)
        for (let i = 0;i < app.event.stop.length; i++)
          app.event.stop[i].fn(app);
    } else
      console.log("Elysia isn't running. Call `app.listen` to start the server.", new Error().stack);
  },
  ws(app, path3, options) {
    let { parse: parse22, body, response, ...rest } = options, validateMessage = getSchemaValidator(body, {
      modules: app.definitions.typebox,
      models: app.definitions.type,
      normalize: app.config.normalize
    }), validateResponse = getSchemaValidator(response, {
      modules: app.definitions.typebox,
      models: app.definitions.type,
      normalize: app.config.normalize
    });
    app.route("WS", path3, async (context) => {
      let server = context.server ?? app.server, { set: set2, path: path22, qi, headers, query, params } = context;
      if (context.validator = validateResponse, options.upgrade)
        if (typeof options.upgrade == "function") {
          let temp = options.upgrade(context);
          temp instanceof Promise && await temp;
        } else
          options.upgrade && Object.assign(set2.headers, options.upgrade);
      if (set2.cookie && isNotEmpty(set2.cookie)) {
        let cookie = serializeCookie(set2.cookie);
        cookie && (set2.headers["set-cookie"] = cookie);
      }
      set2.headers["set-cookie"] && Array.isArray(set2.headers["set-cookie"]) && (set2.headers = parseSetCookies(new Headers(set2.headers), set2.headers["set-cookie"]));
      let handleResponse3 = createHandleWSResponse(validateResponse), parseMessage = createWSMessageParser(parse22), _id;
      if (typeof options.beforeHandle == "function") {
        let result = options.beforeHandle(context);
        result instanceof Promise && await result;
      }
      let errorHandlers = [
        ...options.error ? Array.isArray(options.error) ? options.error : [options.error] : [],
        ...(app.event.error ?? []).map((x) => typeof x == "function" ? x : x.fn)
      ].filter((x) => x), hasCustomErrorHandlers = errorHandlers.length > 0, handleErrors = hasCustomErrorHandlers ? async (ws, error) => {
        for (let handleError of errorHandlers) {
          let response2 = handleError(Object.assign(context, { error }));
          if (response2 instanceof Promise && (response2 = await response2), await handleResponse3(ws, response2), response2)
            break;
        }
      } : () => {};
      if (!server?.upgrade(context.request, {
        headers: isNotEmpty(set2.headers) ? set2.headers : undefined,
        data: {
          ...context,
          get id() {
            return _id || (_id = randomId());
          },
          validator: validateResponse,
          ping(data) {
            options.ping?.(data);
          },
          pong(data) {
            options.pong?.(data);
          },
          open: async (ws) => {
            try {
              await handleResponse3(ws, options.open?.(new ElysiaWS(ws, context)));
            } catch (error) {
              handleErrors(ws, error);
            }
          },
          message: async (ws, _message) => {
            let message = await parseMessage(ws, _message);
            if (validateMessage?.Check(message) === false) {
              let validationError = new ValidationError("message", validateMessage, message);
              return hasCustomErrorHandlers ? handleErrors(ws, validationError) : void ws.send(validationError.message);
            }
            try {
              await handleResponse3(ws, options.message?.(new ElysiaWS(ws, context, message), message));
            } catch (error) {
              handleErrors(ws, error);
            }
          },
          drain: async (ws) => {
            try {
              await handleResponse3(ws, options.drain?.(new ElysiaWS(ws, context)));
            } catch (error) {
              handleErrors(ws, error);
            }
          },
          close: async (ws, code, reason) => {
            try {
              await handleResponse3(ws, options.close?.(new ElysiaWS(ws, context), code, reason));
            } catch (error) {
              handleErrors(ws, error);
            }
          }
        }
      }))
        return set2.status = 400, "Expected a websocket connection";
    }, {
      ...rest,
      websocket: options
    });
  }
};
var env2 = isBun ? Bun.env : typeof process < "u" && process?.env ? process.env : {};
var injectDefaultValues = (typeChecker, obj) => {
  let schema = typeChecker.schema;
  if (schema && (schema.$defs?.[schema.$ref] && (schema = schema.$defs[schema.$ref]), !!schema?.properties))
    for (let [key, keySchema] of Object.entries(schema.properties))
      obj[key] ??= keySchema.default;
};
var createDynamicHandler = (app) => {
  let { mapResponse: mapResponse3, mapEarlyResponse: mapEarlyResponse3 } = app["~adapter"].handler, defaultHeader = app.setHeaders;
  return async (request) => {
    let url = request.url, s = url.indexOf("/", 11), qi = url.indexOf("?", s + 1), path3 = qi === -1 ? url.substring(s) : url.substring(s, qi), set2 = {
      cookie: {},
      status: 200,
      headers: defaultHeader ? { ...defaultHeader } : {}
    }, context = Object.assign({}, app.singleton.decorator, {
      set: set2,
      store: app.singleton.store,
      request,
      path: path3,
      qi,
      error: status,
      status,
      redirect
    });
    try {
      if (app.event.request)
        for (let i = 0;i < app.event.request.length; i++) {
          let onRequest = app.event.request[i].fn, response2 = onRequest(context);
          if (response2 instanceof Promise && (response2 = await response2), response2 = mapEarlyResponse3(response2, set2), response2)
            return context.response = response2;
        }
      let methodKey = request.method === "GET" && request.headers.get("upgrade")?.toLowerCase() === "websocket" ? "WS" : request.method, handler = app.router.dynamic.find(request.method, path3) ?? app.router.dynamic.find(methodKey, path3) ?? app.router.dynamic.find("ALL", path3);
      if (!handler)
        throw context.query = qi === -1 ? {} : parseQuery(url.substring(qi + 1)), new NotFoundError;
      let { handle, hooks, validator, content, route } = handler.store, body;
      if (request.method !== "GET" && request.method !== "HEAD")
        if (content)
          switch (content) {
            case "application/json":
              body = await request.json();
              break;
            case "text/plain":
              body = await request.text();
              break;
            case "application/x-www-form-urlencoded":
              body = parseQuery(await request.text());
              break;
            case "application/octet-stream":
              body = await request.arrayBuffer();
              break;
            case "multipart/form-data":
              body = {};
              let form2 = await request.formData();
              for (let key of form2.keys()) {
                if (body[key])
                  continue;
                let value = form2.getAll(key);
                value.length === 1 ? body[key] = value[0] : body[key] = value;
              }
              break;
          }
        else {
          let contentType;
          if (request.body && (contentType = request.headers.get("content-type")), contentType) {
            let index = contentType.indexOf(";");
            if (index !== -1 && (contentType = contentType.slice(0, index)), context.contentType = contentType, hooks.parse)
              for (let i = 0;i < hooks.parse.length; i++) {
                let hook = hooks.parse[i].fn;
                if (typeof hook == "string")
                  switch (hook) {
                    case "json":
                    case "application/json":
                      body = await request.json();
                      break;
                    case "text":
                    case "text/plain":
                      body = await request.text();
                      break;
                    case "urlencoded":
                    case "application/x-www-form-urlencoded":
                      body = parseQuery(await request.text());
                      break;
                    case "arrayBuffer":
                    case "application/octet-stream":
                      body = await request.arrayBuffer();
                      break;
                    case "formdata":
                    case "multipart/form-data":
                      body = {};
                      let form2 = await request.formData();
                      for (let key of form2.keys()) {
                        if (body[key])
                          continue;
                        let value = form2.getAll(key);
                        value.length === 1 ? body[key] = value[0] : body[key] = value;
                      }
                      break;
                    default:
                      let parser = app["~parser"][hook];
                      if (parser) {
                        let temp = parser(context, contentType);
                        if (temp instanceof Promise && (temp = await temp), temp) {
                          body = temp;
                          break;
                        }
                      }
                      break;
                  }
                else {
                  let temp = hook(context, contentType);
                  if (temp instanceof Promise && (temp = await temp), temp) {
                    body = temp;
                    break;
                  }
                }
              }
            if (delete context.contentType, body === undefined)
              switch (contentType) {
                case "application/json":
                  body = await request.json();
                  break;
                case "text/plain":
                  body = await request.text();
                  break;
                case "application/x-www-form-urlencoded":
                  body = parseQuery(await request.text());
                  break;
                case "application/octet-stream":
                  body = await request.arrayBuffer();
                  break;
                case "multipart/form-data":
                  body = {};
                  let form2 = await request.formData();
                  for (let key of form2.keys()) {
                    if (body[key])
                      continue;
                    let value = form2.getAll(key);
                    value.length === 1 ? body[key] = value[0] : body[key] = value;
                  }
                  break;
              }
          }
        }
      context.route = route, context.body = body, context.params = handler?.params || undefined, context.query = qi === -1 ? {} : parseQuery(url.substring(qi + 1)), context.headers = {};
      for (let [key, value] of request.headers.entries())
        context.headers[key] = value;
      let cookieMeta = {
        domain: app.config.cookie?.domain ?? validator?.cookie?.config.domain,
        expires: app.config.cookie?.expires ?? validator?.cookie?.config.expires,
        httpOnly: app.config.cookie?.httpOnly ?? validator?.cookie?.config.httpOnly,
        maxAge: app.config.cookie?.maxAge ?? validator?.cookie?.config.maxAge,
        path: app.config.cookie?.path ?? validator?.cookie?.config.path,
        priority: app.config.cookie?.priority ?? validator?.cookie?.config.priority,
        partitioned: app.config.cookie?.partitioned ?? validator?.cookie?.config.partitioned,
        sameSite: app.config.cookie?.sameSite ?? validator?.cookie?.config.sameSite,
        secure: app.config.cookie?.secure ?? validator?.cookie?.config.secure,
        secrets: app.config.cookie?.secrets ?? validator?.cookie?.config.secrets,
        sign: app.config.cookie?.sign ?? validator?.cookie?.config.sign
      }, cookieHeaderValue = request.headers.get("cookie");
      context.cookie = await parseCookie(context.set, cookieHeaderValue, cookieMeta);
      let headerValidator = validator?.createHeaders?.();
      headerValidator && injectDefaultValues(headerValidator, context.headers);
      let paramsValidator = validator?.createParams?.();
      paramsValidator && injectDefaultValues(paramsValidator, context.params);
      let queryValidator = validator?.createQuery?.();
      if (queryValidator && injectDefaultValues(queryValidator, context.query), hooks.transform)
        for (let i = 0;i < hooks.transform.length; i++) {
          let hook = hooks.transform[i], response2 = hook.fn(context);
          if (response2 instanceof Promise && (response2 = await response2), response2 instanceof ElysiaCustomStatusResponse) {
            let result = mapEarlyResponse3(response2, context.set);
            if (result)
              return context.response = result;
          }
          hook.subType === "derive" && Object.assign(context, response2);
        }
      if (validator) {
        if (headerValidator) {
          let _header = structuredClone(context.headers);
          for (let [key, value] of request.headers)
            _header[key] = value;
          if (validator.headers.Check(_header) === false)
            throw new ValidationError("header", validator.headers, _header);
        } else
          validator.headers?.Decode && (context.headers = validator.headers.Decode(context.headers));
        if (paramsValidator?.Check(context.params) === false)
          throw new ValidationError("params", validator.params, context.params);
        if (validator.params?.Decode && (context.params = validator.params.Decode(context.params)), validator.query?.schema) {
          let schema = validator.query.schema;
          schema.$defs?.[schema.$ref] && (schema = schema.$defs[schema.$ref]);
          let properties = schema.properties;
          for (let property of Object.keys(properties)) {
            let value = properties[property];
            (value.type === "array" || value.items?.type === "string") && typeof context.query[property] == "string" && context.query[property] && (context.query[property] = context.query[property].split(","));
          }
        }
        if (queryValidator?.Check(context.query) === false)
          throw new ValidationError("query", validator.query, context.query);
        if (validator.query?.Decode && (context.query = validator.query.Decode(context.query)), validator.createCookie?.()) {
          let cookieValue = {};
          for (let [key, value] of Object.entries(context.cookie))
            cookieValue[key] = value.value;
          if (validator.cookie.Check(cookieValue) === false)
            throw new ValidationError("cookie", validator.cookie, cookieValue);
          validator.cookie?.Decode && (cookieValue = validator.cookie.Decode(cookieValue));
        }
        if (validator.createBody?.()?.Check(body) === false)
          throw new ValidationError("body", validator.body, body);
        validator.body?.Decode && (context.body = validator.body.Decode(body));
      }
      if (hooks.beforeHandle)
        for (let i = 0;i < hooks.beforeHandle.length; i++) {
          let hook = hooks.beforeHandle[i], response2 = hook.fn(context);
          if (response2 instanceof Promise && (response2 = await response2), response2 instanceof ElysiaCustomStatusResponse) {
            let result = mapEarlyResponse3(response2, context.set);
            if (result)
              return context.response = result;
          }
          if (hook.subType === "resolve") {
            Object.assign(context, response2);
            continue;
          }
          if (response2 !== undefined) {
            if (context.response = response2, hooks.afterHandle)
              for (let i2 = 0;i2 < hooks.afterHandle.length; i2++) {
                let newResponse = hooks.afterHandle[i2].fn(context);
                newResponse instanceof Promise && (newResponse = await newResponse), newResponse && (response2 = newResponse);
              }
            let result = mapEarlyResponse3(response2, context.set);
            if (result)
              return context.response = result;
          }
        }
      let response = typeof handle == "function" ? handle(context) : handle;
      if (response instanceof Promise && (response = await response), hooks.afterHandle?.length) {
        context.response = response;
        for (let i = 0;i < hooks.afterHandle.length; i++) {
          let response2 = hooks.afterHandle[i].fn(context);
          response2 instanceof Promise && (response2 = await response2);
          let isCustomStatuResponse = response2 instanceof ElysiaCustomStatusResponse, status2 = isCustomStatuResponse ? response2.code : set2.status ? typeof set2.status == "string" ? StatusMap[set2.status] : set2.status : 200;
          isCustomStatuResponse && (set2.status = status2, response2 = response2.response);
          let responseValidator = validator?.createResponse?.()?.[status2];
          if (responseValidator?.Check(response2) === false)
            if (responseValidator?.Clean) {
              let temp = responseValidator.Clean(response2);
              if (responseValidator?.Check(temp) === false)
                throw new ValidationError("response", responseValidator, response2);
              response2 = temp;
            } else
              throw new ValidationError("response", responseValidator, response2);
          responseValidator?.Encode && (context.response = response2 = responseValidator.Encode(response2)), responseValidator?.Clean && (context.response = response2 = responseValidator.Clean(response2));
          let result = mapEarlyResponse3(response2, context.set);
          if (result !== undefined)
            return context.response = result;
        }
      } else {
        let isCustomStatuResponse = response instanceof ElysiaCustomStatusResponse, status2 = isCustomStatuResponse ? response.code : set2.status ? typeof set2.status == "string" ? StatusMap[set2.status] : set2.status : 200;
        isCustomStatuResponse && (set2.status = status2, response = response.response);
        let responseValidator = validator?.createResponse?.()?.[status2];
        if (responseValidator?.Check(response) === false)
          if (responseValidator?.Clean) {
            let temp = responseValidator.Clean(response);
            if (responseValidator?.Check(temp) === false)
              throw new ValidationError("response", responseValidator, response);
            response = temp;
          } else
            throw new ValidationError("response", responseValidator, response);
        responseValidator?.Encode && (response = responseValidator.Encode(response)), responseValidator?.Clean && (response = responseValidator.Clean(response));
      }
      if (context.set.cookie && cookieMeta?.sign) {
        let secret = cookieMeta.secrets ? typeof cookieMeta.secrets == "string" ? cookieMeta.secrets : cookieMeta.secrets[0] : undefined;
        if (cookieMeta.sign === true) {
          if (secret)
            for (let [key, cookie] of Object.entries(context.set.cookie))
              context.set.cookie[key].value = await signCookie(cookie.value, secret);
        } else {
          let properties = validator?.cookie?.schema?.properties;
          if (secret)
            for (let name of cookieMeta.sign)
              name in properties && context.set.cookie[name]?.value && (context.set.cookie[name].value = await signCookie(context.set.cookie[name].value, secret));
        }
      }
      return mapResponse3(context.response = response, context.set);
    } catch (error) {
      let reportedError = error instanceof TransformDecodeError && error.error ? error.error : error;
      return app.handleError(context, reportedError);
    } finally {
      app.event.afterResponse && setImmediate(async () => {
        for (let afterResponse of app.event.afterResponse)
          await afterResponse.fn(context);
      });
    }
  };
};
var createDynamicErrorHandler = (app) => {
  let { mapResponse: mapResponse3 } = app["~adapter"].handler;
  return async (context, error) => {
    let errorContext = Object.assign(context, { error, code: error.code });
    if (errorContext.set = context.set, app.event.error)
      for (let i = 0;i < app.event.error.length; i++) {
        let response = app.event.error[i].fn(errorContext);
        if (response instanceof Promise && (response = await response), response != null)
          return context.response = mapResponse3(response, context.set);
      }
    return new Response(typeof error.cause == "string" ? error.cause : error.message, {
      headers: context.set.headers,
      status: error.status ?? 500
    });
  };
};
var _a;
_a = Symbol.dispose;
var _Elysia = class _Elysia2 {
  constructor(config = {}) {
    this.server = null;
    this.dependencies = {};
    this["~Prefix"] = "";
    this["~Singleton"] = null;
    this["~Definitions"] = null;
    this["~Metadata"] = null;
    this["~Ephemeral"] = null;
    this["~Volatile"] = null;
    this["~Routes"] = null;
    this.singleton = {
      decorator: {},
      store: {},
      derive: {},
      resolve: {}
    };
    this.definitions = {
      typebox: t.Module({}),
      type: {},
      error: {}
    };
    this.extender = {
      macro: {},
      higherOrderFunctions: []
    };
    this.validator = {
      global: null,
      scoped: null,
      local: null,
      getCandidate() {
        return !this.global && !this.scoped && !this.local ? {
          body: undefined,
          headers: undefined,
          params: undefined,
          query: undefined,
          cookie: undefined,
          response: undefined
        } : mergeSchemaValidator(mergeSchemaValidator(this.global, this.scoped), this.local);
      }
    };
    this.standaloneValidator = {
      global: null,
      scoped: null,
      local: null
    };
    this.event = {};
    this.router = {
      "~http": undefined,
      get http() {
        return this["~http"] || (this["~http"] = new Memoirist({
          lazy: true,
          onParam: import_fast_decode_uri_component.default
        })), this["~http"];
      },
      "~dynamic": undefined,
      get dynamic() {
        return this["~dynamic"] || (this["~dynamic"] = new Memoirist({
          onParam: import_fast_decode_uri_component.default
        })), this["~dynamic"];
      },
      static: {},
      response: {},
      history: []
    };
    this.routeTree = {};
    this.inference = {
      body: false,
      cookie: false,
      headers: false,
      query: false,
      set: false,
      server: false,
      path: false,
      route: false,
      url: false
    };
    this["~parser"] = {};
    this.handle = async (request) => this.fetch(request);
    this.fetch = (request) => (this.fetch = this.config.aot ? composeGeneralHandler(this) : createDynamicHandler(this))(request);
    this.handleError = async (context, error) => (this.handleError = this.config.aot ? composeErrorHandler(this) : createDynamicErrorHandler(this))(context, error);
    this.listen = (options, callback) => (this["~adapter"].listen(this)(options, callback), this);
    this.stop = async (closeActiveConnections) => (await this["~adapter"].stop?.(this, closeActiveConnections), this);
    this[_a] = () => {
      this.server && this.stop();
    };
    config.tags && (config.detail ? config.detail.tags = config.tags : config.detail = {
      tags: config.tags
    }), this.config = {
      aot: env2.ELYSIA_AOT !== "false",
      nativeStaticResponse: true,
      systemRouter: true,
      encodeSchema: true,
      normalize: true,
      ...config,
      prefix: config.prefix ? config.prefix.charCodeAt(0) === 47 ? config.prefix : `/${config.prefix}` : undefined,
      cookie: {
        path: "/",
        ...config?.cookie
      },
      experimental: config?.experimental ?? {},
      seed: config?.seed === undefined ? "" : config?.seed
    }, this["~adapter"] = config.adapter ?? (typeof Bun < "u" ? BunAdapter : WebStandardAdapter), config?.analytic && (config?.name || config?.seed !== undefined) && (this.telemetry = {
      stack: new Error().stack
    });
  }
  get store() {
    return this.singleton.store;
  }
  get decorator() {
    return this.singleton.decorator;
  }
  get routes() {
    return this.router.history;
  }
  getGlobalRoutes() {
    return this.router.history;
  }
  getGlobalDefinitions() {
    return this.definitions;
  }
  getServer() {
    return this.server;
  }
  getParent() {
    return null;
  }
  get promisedModules() {
    return this._promisedModules || (this._promisedModules = new PromiseGroup(console.error, () => {})), this._promisedModules;
  }
  env(model, _env = env2) {
    if (getSchemaValidator(model, {
      modules: this.definitions.typebox,
      dynamic: true,
      additionalProperties: true,
      coerce: true,
      sanitize: () => this.config.sanitize
    }).Check(_env) === false) {
      let error = new ValidationError("env", model, _env);
      throw new Error(error.all.map((x) => x.summary).join(`
`));
    }
    return this;
  }
  wrap(fn) {
    return this.extender.higherOrderFunctions.push({
      checksum: checksum(JSON.stringify({
        name: this.config.name,
        seed: this.config.seed,
        content: fn.toString()
      })),
      fn
    }), this;
  }
  get models() {
    let models = {};
    for (let name of Object.keys(this.definitions.type))
      models[name] = getSchemaValidator(this.definitions.typebox.Import(name));
    return models.modules = this.definitions.typebox, models;
  }
  add(method, path3, handle, localHook, options) {
    let skipPrefix = options?.skipPrefix ?? false, allowMeta = options?.allowMeta ?? false;
    localHook ??= {}, this.applyMacro(localHook);
    let standaloneValidators = [];
    if (localHook.standaloneValidator && (standaloneValidators = standaloneValidators.concat(localHook.standaloneValidator)), this.standaloneValidator.local && (standaloneValidators = standaloneValidators.concat(this.standaloneValidator.local)), this.standaloneValidator.scoped && (standaloneValidators = standaloneValidators.concat(this.standaloneValidator.scoped)), this.standaloneValidator.global && (standaloneValidators = standaloneValidators.concat(this.standaloneValidator.global)), path3 !== "" && path3.charCodeAt(0) !== 47 && (path3 = "/" + path3), this.config.prefix && !skipPrefix && (path3 = this.config.prefix + path3), localHook?.type)
      switch (localHook.type) {
        case "text":
          localHook.type = "text/plain";
          break;
        case "json":
          localHook.type = "application/json";
          break;
        case "formdata":
          localHook.type = "multipart/form-data";
          break;
        case "urlencoded":
          localHook.type = "application/x-www-form-urlencoded";
          break;
        case "arrayBuffer":
          localHook.type = "application/octet-stream";
          break;
        default:
          break;
      }
    let instanceValidator = this.validator.getCandidate(), cloned = {
      body: localHook?.body ?? instanceValidator?.body,
      headers: localHook?.headers ?? instanceValidator?.headers,
      params: localHook?.params ?? instanceValidator?.params,
      query: localHook?.query ?? instanceValidator?.query,
      cookie: localHook?.cookie ?? instanceValidator?.cookie,
      response: localHook?.response ?? instanceValidator?.response
    }, shouldPrecompile = this.config.precompile === true || typeof this.config.precompile == "object" && this.config.precompile.compose === true, createValidator = () => {
      let models = this.definitions.type, dynamic = !this.config.aot, normalize = this.config.normalize, modules = this.definitions.typebox, sanitize2 = () => this.config.sanitize, cookieValidator = () => {
        if (cloned.cookie || standaloneValidators.find((x) => x.cookie))
          return getCookieValidator({
            modules,
            validator: cloned.cookie,
            defaultConfig: this.config.cookie,
            normalize,
            config: cloned.cookie?.config ?? {},
            dynamic,
            models,
            validators: standaloneValidators.map((x) => x.cookie),
            sanitize: sanitize2
          });
      };
      return shouldPrecompile ? {
        body: getSchemaValidator(cloned.body, {
          modules,
          dynamic,
          models,
          normalize,
          additionalCoerce: coercePrimitiveRoot(),
          validators: standaloneValidators.map((x) => x.body),
          sanitize: sanitize2
        }),
        headers: getSchemaValidator(cloned.headers, {
          modules,
          dynamic,
          models,
          additionalProperties: true,
          coerce: true,
          additionalCoerce: stringToStructureCoercions(),
          validators: standaloneValidators.map((x) => x.headers),
          sanitize: sanitize2
        }),
        params: getSchemaValidator(cloned.params, {
          modules,
          dynamic,
          models,
          coerce: true,
          additionalCoerce: stringToStructureCoercions(),
          validators: standaloneValidators.map((x) => x.params),
          sanitize: sanitize2
        }),
        query: getSchemaValidator(cloned.query, {
          modules,
          dynamic,
          models,
          normalize,
          coerce: true,
          additionalCoerce: queryCoercions(),
          validators: standaloneValidators.map((x) => x.query),
          sanitize: sanitize2
        }),
        cookie: cookieValidator(),
        response: getResponseSchemaValidator(cloned.response, {
          modules,
          dynamic,
          models,
          normalize,
          validators: standaloneValidators.map((x) => x.response),
          sanitize: sanitize2
        })
      } : {
        createBody() {
          return this.body ? this.body : this.body = getSchemaValidator(cloned.body, {
            modules,
            dynamic,
            models,
            normalize,
            additionalCoerce: coercePrimitiveRoot(),
            validators: standaloneValidators.map((x) => x.body),
            sanitize: sanitize2
          });
        },
        createHeaders() {
          return this.headers ? this.headers : this.headers = getSchemaValidator(cloned.headers, {
            modules,
            dynamic,
            models,
            normalize,
            additionalProperties: !normalize,
            coerce: true,
            additionalCoerce: stringToStructureCoercions(),
            validators: standaloneValidators.map((x) => x.headers),
            sanitize: sanitize2
          });
        },
        createParams() {
          return this.params ? this.params : this.params = getSchemaValidator(cloned.params, {
            modules,
            dynamic,
            models,
            normalize,
            coerce: true,
            additionalCoerce: stringToStructureCoercions(),
            validators: standaloneValidators.map((x) => x.params),
            sanitize: sanitize2
          });
        },
        createQuery() {
          return this.query ? this.query : this.query = getSchemaValidator(cloned.query, {
            modules,
            dynamic,
            models,
            normalize,
            coerce: true,
            additionalCoerce: queryCoercions(),
            validators: standaloneValidators.map((x) => x.query),
            sanitize: sanitize2
          });
        },
        createCookie() {
          return this.cookie ? this.cookie : this.cookie = cookieValidator();
        },
        createResponse() {
          return this.response ? this.response : this.response = getResponseSchemaValidator(cloned.response, {
            modules,
            dynamic,
            models,
            normalize,
            validators: standaloneValidators.map((x) => x.response),
            sanitize: sanitize2
          });
        }
      };
    };
    (instanceValidator.body || instanceValidator.cookie || instanceValidator.headers || instanceValidator.params || instanceValidator.query || instanceValidator.response) && (localHook = mergeHook(localHook, instanceValidator)), localHook.tags && (localHook.detail ? localHook.detail.tags = localHook.tags : localHook.detail = {
      tags: localHook.tags
    }), isNotEmpty(this.config.detail) && (localHook.detail = mergeDeep(Object.assign({}, this.config.detail), localHook.detail));
    let hooks = isNotEmpty(this.event) ? mergeHook(this.event, localHookToLifeCycleStore(localHook)) : { ...lifeCycleToArray(localHookToLifeCycleStore(localHook)) };
    if (standaloneValidators.length && Object.assign(hooks, {
      standaloneValidator: standaloneValidators
    }), this.config.aot === false) {
      let validator = createValidator();
      this.router.dynamic.add(method, path3, {
        validator,
        hooks,
        content: localHook?.type,
        handle,
        route: path3
      });
      let encoded = encodePath(path3, { dynamic: true });
      if (path3 !== encoded && this.router.dynamic.add(method, encoded, {
        validator,
        hooks,
        content: localHook?.type,
        handle,
        route: path3
      }), this.config.strictPath === false) {
        let loosePath = getLoosePath(path3);
        this.router.dynamic.add(method, loosePath, {
          validator,
          hooks,
          content: localHook?.type,
          handle,
          route: path3
        });
        let encoded2 = encodePath(loosePath);
        loosePath !== encoded2 && this.router.dynamic.add(method, loosePath, {
          validator,
          hooks,
          content: localHook?.type,
          handle,
          route: path3
        });
      }
      this.router.history.push({
        method,
        path: path3,
        composed: null,
        handler: handle,
        compile: undefined,
        hooks
      });
      return;
    }
    let adapter = this["~adapter"].handler, nativeStaticHandler = typeof handle != "function" ? () => {
      let context = {
        redirect,
        request: this["~adapter"].isWebStandard ? new Request(`http://e.ly${path3}`, {
          method
        }) : undefined,
        server: null,
        set: {
          headers: Object.assign({}, this.setHeaders)
        },
        status,
        store: this.store
      };
      try {
        this.event.request?.map((x) => {
          if (typeof x.fn == "function")
            return x.fn(context);
          if (typeof x == "function")
            return x(context);
        });
      } catch (error) {
        let res;
        context.error = error, this.event.error?.some((x) => {
          if (typeof x.fn == "function")
            return res = x.fn(context);
          if (typeof x == "function")
            return res = x(context);
        }), res !== undefined && (handle = res);
      }
      let fn = adapter.createNativeStaticHandler?.(handle, hooks, context.set);
      return fn instanceof Promise ? fn.then((fn2) => {
        if (fn2)
          return fn2;
      }) : fn?.();
    } : undefined, useNativeStaticResponse = this.config.nativeStaticResponse === true, addResponsePath = (path22) => {
      !useNativeStaticResponse || !nativeStaticHandler || (supportPerMethodInlineHandler ? this.router.response[path22] ? this.router.response[path22][method] = nativeStaticHandler() : this.router.response[path22] = {
        [method]: nativeStaticHandler()
      } : this.router.response[path22] = nativeStaticHandler());
    };
    addResponsePath(path3);
    let _compiled, compile2 = () => _compiled || (_compiled = composeHandler({
      app: this,
      path: path3,
      method,
      hooks,
      validator: createValidator(),
      handler: typeof handle != "function" && typeof adapter.createStaticHandler != "function" ? () => handle : handle,
      allowMeta,
      inference: this.inference
    })), oldIndex;
    if (`${method}_${path3}` in this.routeTree)
      for (let i = 0;i < this.router.history.length; i++) {
        let route = this.router.history[i];
        if (route.path === path3 && route.method === method) {
          oldIndex = i;
          break;
        }
      }
    else
      this.routeTree[`${method}_${path3}`] = this.router.history.length;
    let index = oldIndex ?? this.router.history.length, mainHandler = shouldPrecompile ? compile2() : (ctx) => (this.router.history[index].composed = compile2())(ctx);
    oldIndex !== undefined ? this.router.history[oldIndex] = Object.assign({
      method,
      path: path3,
      composed: mainHandler,
      compile: compile2,
      handler: handle,
      hooks
    }, standaloneValidators.length ? {
      standaloneValidators
    } : undefined, localHook.webSocket ? { websocket: localHook.websocket } : undefined) : this.router.history.push(Object.assign({
      method,
      path: path3,
      composed: mainHandler,
      compile: compile2,
      handler: handle,
      hooks
    }, localHook.webSocket ? { websocket: localHook.websocket } : undefined));
    let handler = {
      handler: shouldPrecompile ? mainHandler : undefined,
      compile() {
        return this.handler = compile2();
      }
    }, staticRouter = this.router.static, isStaticPath = path3.indexOf(":") === -1 && path3.indexOf("*") === -1;
    if (method === "WS") {
      if (isStaticPath) {
        path3 in staticRouter ? staticRouter[path3][method] = index : staticRouter[path3] = {
          [method]: index
        };
        return;
      }
      this.router.http.add("WS", path3, handler), this.config.strictPath || this.router.http.add("WS", getLoosePath(path3), handler);
      let encoded = encodePath(path3, { dynamic: true });
      path3 !== encoded && this.router.http.add("WS", encoded, handler);
      return;
    }
    if (isStaticPath)
      path3 in staticRouter ? staticRouter[path3][method] = index : staticRouter[path3] = {
        [method]: index
      }, this.config.strictPath || addResponsePath(getLoosePath(path3));
    else {
      if (this.router.http.add(method, path3, handler), !this.config.strictPath) {
        let loosePath = getLoosePath(path3);
        addResponsePath(loosePath), this.router.http.add(method, loosePath, handler);
      }
      let encoded = encodePath(path3, { dynamic: true });
      path3 !== encoded && (this.router.http.add(method, encoded, handler), addResponsePath(encoded));
    }
  }
  headers(header) {
    return header ? (this.setHeaders || (this.setHeaders = {}), this.setHeaders = mergeDeep(this.setHeaders, header), this) : this;
  }
  onStart(handler) {
    return this.on("start", handler), this;
  }
  onRequest(handler) {
    return this.on("request", handler), this;
  }
  onParse(options, handler) {
    return handler ? this.on(options, "parse", handler) : typeof options == "string" ? this.on("parse", this["~parser"][options]) : this.on("parse", options);
  }
  parser(name, parser) {
    return this["~parser"][name] = parser, this;
  }
  onTransform(options, handler) {
    return handler ? this.on(options, "transform", handler) : this.on("transform", options);
  }
  resolve(optionsOrResolve, resolve) {
    resolve || (resolve = optionsOrResolve, optionsOrResolve = { as: "local" });
    let hook = {
      subType: "resolve",
      fn: resolve
    };
    return this.onBeforeHandle(optionsOrResolve, hook);
  }
  mapResolve(optionsOrResolve, mapper) {
    mapper || (mapper = optionsOrResolve, optionsOrResolve = { as: "local" });
    let hook = {
      subType: "mapResolve",
      fn: mapper
    };
    return this.onBeforeHandle(optionsOrResolve, hook);
  }
  onBeforeHandle(options, handler) {
    return handler ? this.on(options, "beforeHandle", handler) : this.on("beforeHandle", options);
  }
  onAfterHandle(options, handler) {
    return handler ? this.on(options, "afterHandle", handler) : this.on("afterHandle", options);
  }
  mapResponse(options, handler) {
    return handler ? this.on(options, "mapResponse", handler) : this.on("mapResponse", options);
  }
  onAfterResponse(options, handler) {
    return handler ? this.on(options, "afterResponse", handler) : this.on("afterResponse", options);
  }
  trace(options, handler) {
    handler || (handler = options, options = { as: "local" }), Array.isArray(handler) || (handler = [handler]);
    for (let fn of handler)
      this.on(options, "trace", createTracer(fn));
    return this;
  }
  error(name, error) {
    switch (typeof name) {
      case "string":
        return error.prototype[ERROR_CODE] = name, this.definitions.error[name] = error, this;
      case "function":
        return this.definitions.error = name(this.definitions.error), this;
    }
    for (let [code, error2] of Object.entries(name))
      error2.prototype[ERROR_CODE] = code, this.definitions.error[code] = error2;
    return this;
  }
  onError(options, handler) {
    return handler ? this.on(options, "error", handler) : this.on("error", options);
  }
  onStop(handler) {
    return this.on("stop", handler), this;
  }
  on(optionsOrType, typeOrHandlers, handlers) {
    let type;
    switch (typeof optionsOrType) {
      case "string":
        type = optionsOrType, handlers = typeOrHandlers;
        break;
      case "object":
        type = typeOrHandlers, !Array.isArray(typeOrHandlers) && typeof typeOrHandlers == "object" && (handlers = typeOrHandlers);
        break;
    }
    Array.isArray(handlers) ? handlers = fnToContainer(handlers) : typeof handlers == "function" ? handlers = [
      {
        fn: handlers
      }
    ] : handlers = [handlers];
    let handles = handlers;
    for (let handle of handles)
      handle.scope = typeof optionsOrType == "string" ? "local" : optionsOrType?.as ?? "local", (type === "resolve" || type === "derive") && (handle.subType = type);
    type !== "trace" && (this.inference = sucrose({
      [type]: handles.map((x) => x.fn)
    }, this.inference, this.config.sucrose));
    for (let handle of handles) {
      let fn = asHookType(handle, "global", { skipIfHasType: true });
      switch (type) {
        case "start":
          this.event.start ??= [], this.event.start.push(fn);
          break;
        case "request":
          this.event.request ??= [], this.event.request.push(fn);
          break;
        case "parse":
          this.event.parse ??= [], this.event.parse.push(fn);
          break;
        case "transform":
          this.event.transform ??= [], this.event.transform.push(fn);
          break;
        case "derive":
          this.event.transform ??= [], this.event.transform.push(fnToContainer(fn, "derive"));
          break;
        case "beforeHandle":
          this.event.beforeHandle ??= [], this.event.beforeHandle.push(fn);
          break;
        case "resolve":
          this.event.beforeHandle ??= [], this.event.beforeHandle.push(fnToContainer(fn, "resolve"));
          break;
        case "afterHandle":
          this.event.afterHandle ??= [], this.event.afterHandle.push(fn);
          break;
        case "mapResponse":
          this.event.mapResponse ??= [], this.event.mapResponse.push(fn);
          break;
        case "afterResponse":
          this.event.afterResponse ??= [], this.event.afterResponse.push(fn);
          break;
        case "trace":
          this.event.trace ??= [], this.event.trace.push(fn);
          break;
        case "error":
          this.event.error ??= [], this.event.error.push(fn);
          break;
        case "stop":
          this.event.stop ??= [], this.event.stop.push(fn);
          break;
      }
    }
    return this;
  }
  as(type) {
    return promoteEvent(this.event.parse, type), promoteEvent(this.event.transform, type), promoteEvent(this.event.beforeHandle, type), promoteEvent(this.event.afterHandle, type), promoteEvent(this.event.mapResponse, type), promoteEvent(this.event.afterResponse, type), promoteEvent(this.event.trace, type), promoteEvent(this.event.error, type), type === "scoped" ? (this.validator.scoped = mergeSchemaValidator(this.validator.scoped, this.validator.local), this.validator.local = null, this.standaloneValidator.local !== null && (this.standaloneValidator.scoped ||= [], this.standaloneValidator.scoped.push(...this.standaloneValidator.local), this.standaloneValidator.local = null)) : type === "global" && (this.validator.global = mergeSchemaValidator(this.validator.global, mergeSchemaValidator(this.validator.scoped, this.validator.local)), this.validator.scoped = null, this.validator.local = null, this.standaloneValidator.local !== null && (this.standaloneValidator.scoped ||= [], this.standaloneValidator.scoped.push(...this.standaloneValidator.local), this.standaloneValidator.local = null), this.standaloneValidator.scoped !== null && (this.standaloneValidator.global ||= [], this.standaloneValidator.global.push(...this.standaloneValidator.scoped), this.standaloneValidator.scoped = null)), this;
  }
  group(prefix, schemaOrRun, run) {
    let instance = new _Elysia2({
      ...this.config,
      prefix: ""
    });
    instance.singleton = { ...this.singleton }, instance.definitions = { ...this.definitions }, instance.getServer = () => this.getServer(), instance.inference = cloneInference(this.inference), instance.extender = { ...this.extender }, instance["~parser"] = this["~parser"], instance.standaloneValidator = {
      local: [...this.standaloneValidator.local ?? []],
      scoped: [...this.standaloneValidator.scoped ?? []],
      global: [...this.standaloneValidator.global ?? []]
    };
    let isSchema = typeof schemaOrRun == "object", sandbox = (isSchema ? run : schemaOrRun)(instance);
    return this.singleton = mergeDeep(this.singleton, instance.singleton), this.definitions = mergeDeep(this.definitions, instance.definitions), sandbox.event.request?.length && (this.event.request = [
      ...this.event.request || [],
      ...sandbox.event.request || []
    ]), sandbox.event.mapResponse?.length && (this.event.mapResponse = [
      ...this.event.mapResponse || [],
      ...sandbox.event.mapResponse || []
    ]), this.model(sandbox.definitions.type), Object.values(instance.router.history).forEach(({ method, path: path3, handler, hooks }) => {
      if (path3 = (isSchema ? "" : this.config.prefix ?? "") + prefix + path3, isSchema) {
        let {
          body,
          headers,
          query,
          params,
          cookie,
          response,
          ...hook
        } = schemaOrRun, localHook = hooks, hasStandaloneSchema = body || headers || query || params || cookie || response;
        this.add(method, path3, handler, mergeHook(hook, {
          ...localHook || {},
          error: localHook.error ? Array.isArray(localHook.error) ? [
            ...localHook.error ?? [],
            ...sandbox.event.error ?? []
          ] : [
            localHook.error,
            ...sandbox.event.error ?? []
          ] : sandbox.event.error,
          standaloneValidator: hasStandaloneSchema ? [
            ...localHook.standaloneValidator ?? [],
            {
              body,
              headers,
              query,
              params,
              cookie,
              response
            }
          ] : localHook.standaloneValidator
        }), undefined);
      } else
        this.add(method, path3, handler, mergeHook(hooks, {
          error: sandbox.event.error
        }), {
          skipPrefix: true
        });
    }), this;
  }
  guard(hook, run) {
    if (!run) {
      if (typeof hook == "object") {
        this.applyMacro(hook), hook.detail && (this.config.detail ? this.config.detail = mergeDeep(Object.assign({}, this.config.detail), hook.detail) : this.config.detail = hook.detail), hook.tags && (this.config.detail ? this.config.detail.tags = hook.tags : this.config.detail = {
          tags: hook.tags
        });
        let type = hook.as ?? "local";
        if (hook.schema === "standalone") {
          this.standaloneValidator[type] || (this.standaloneValidator[type] = []);
          let response = hook?.response ? typeof hook.response == "string" || Kind in hook.response || "~standard" in hook.response ? {
            200: hook.response
          } : hook?.response : undefined;
          this.standaloneValidator[type].push({
            body: hook.body,
            headers: hook.headers,
            params: hook.params,
            query: hook.query,
            response,
            cookie: hook.cookie
          });
        } else
          this.validator[type] = {
            body: hook.body ?? this.validator[type]?.body,
            headers: hook.headers ?? this.validator[type]?.headers,
            params: hook.params ?? this.validator[type]?.params,
            query: hook.query ?? this.validator[type]?.query,
            response: hook.response ?? this.validator[type]?.response,
            cookie: hook.cookie ?? this.validator[type]?.cookie
          };
        return hook.parse && this.on({ as: type }, "parse", hook.parse), hook.transform && this.on({ as: type }, "transform", hook.transform), hook.derive && this.on({ as: type }, "derive", hook.derive), hook.beforeHandle && this.on({ as: type }, "beforeHandle", hook.beforeHandle), hook.resolve && this.on({ as: type }, "resolve", hook.resolve), hook.afterHandle && this.on({ as: type }, "afterHandle", hook.afterHandle), hook.mapResponse && this.on({ as: type }, "mapResponse", hook.mapResponse), hook.afterResponse && this.on({ as: type }, "afterResponse", hook.afterResponse), hook.error && this.on({ as: type }, "error", hook.error), this;
      }
      return this.guard({}, hook);
    }
    let instance = new _Elysia2({
      ...this.config,
      prefix: ""
    });
    instance.singleton = { ...this.singleton }, instance.definitions = { ...this.definitions }, instance.inference = cloneInference(this.inference), instance.extender = { ...this.extender }, instance.getServer = () => this.getServer();
    let sandbox = run(instance);
    return this.singleton = mergeDeep(this.singleton, instance.singleton), this.definitions = mergeDeep(this.definitions, instance.definitions), sandbox.getServer = () => this.server, sandbox.event.request?.length && (this.event.request = [
      ...this.event.request || [],
      ...sandbox.event.request || []
    ]), sandbox.event.mapResponse?.length && (this.event.mapResponse = [
      ...this.event.mapResponse || [],
      ...sandbox.event.mapResponse || []
    ]), this.model(sandbox.definitions.type), Object.values(instance.router.history).forEach(({ method, path: path3, handler, hooks: localHook }) => {
      let {
        body,
        headers,
        query,
        params,
        cookie,
        response,
        ...guardHook
      } = hook, hasStandaloneSchema = body || headers || query || params || cookie || response;
      this.add(method, path3, handler, mergeHook(guardHook, {
        ...localHook || {},
        error: localHook.error ? Array.isArray(localHook.error) ? [
          ...localHook.error ?? [],
          ...sandbox.event.error ?? []
        ] : [
          localHook.error,
          ...sandbox.event.error ?? []
        ] : sandbox.event.error,
        standaloneValidator: hasStandaloneSchema ? [
          ...localHook.standaloneValidator ?? [],
          {
            body,
            headers,
            query,
            params,
            cookie,
            response
          }
        ] : localHook.standaloneValidator
      }));
    }), this;
  }
  use(plugin) {
    if (!plugin)
      return this;
    if (Array.isArray(plugin)) {
      let app = this;
      for (let p of plugin)
        app = app.use(p);
      return app;
    }
    return plugin instanceof Promise ? (this.promisedModules.add(plugin.then((plugin2) => {
      if (typeof plugin2 == "function")
        return plugin2(this);
      if (plugin2 instanceof _Elysia2)
        return this._use(plugin2).compile();
      if (plugin2.constructor?.name === "Elysia")
        return this._use(plugin2).compile();
      if (typeof plugin2.default == "function")
        return plugin2.default(this);
      if (plugin2.default instanceof _Elysia2)
        return this._use(plugin2.default);
      if (plugin2.constructor?.name === "Elysia")
        return this._use(plugin2.default);
      if (plugin2.constructor?.name === "_Elysia")
        return this._use(plugin2.default);
      try {
        return this._use(plugin2.default);
      } catch (error) {
        throw console.error('Invalid plugin type. Expected Elysia instance, function, or module with "default" as Elysia instance or function that returns Elysia instance.'), error;
      }
    }).then((v) => (v && typeof v.compile == "function" && v.compile(), v))), this) : this._use(plugin);
  }
  propagatePromiseModules(plugin) {
    if (plugin.promisedModules.size <= 0)
      return this;
    for (let promise of plugin.promisedModules.promises)
      this.promisedModules.add(promise.then((v) => {
        if (!v)
          return;
        let t2 = this._use(v);
        return t2 instanceof Promise ? t2.then((v2) => {
          v2 ? v2.compile() : v.compile();
        }) : v.compile();
      }));
    return this;
  }
  _use(plugin) {
    if (typeof plugin == "function") {
      let instance = plugin(this);
      return instance instanceof Promise ? (this.promisedModules.add(instance.then((plugin2) => {
        if (plugin2 instanceof _Elysia2) {
          plugin2.getServer = () => this.getServer(), plugin2.getGlobalRoutes = () => this.getGlobalRoutes(), plugin2.getGlobalDefinitions = () => this.getGlobalDefinitions(), plugin2.model(this.definitions.type), plugin2.error(this.definitions.error);
          for (let {
            method,
            path: path3,
            handler,
            hooks
          } of Object.values(plugin2.router.history))
            this.add(method, path3, handler, hooks, undefined);
          return plugin2 === this ? undefined : (this.propagatePromiseModules(plugin2), plugin2);
        }
        return typeof plugin2 == "function" ? plugin2(this) : typeof plugin2.default == "function" ? plugin2.default(this) : this._use(plugin2);
      }).then((v) => (v && typeof v.compile == "function" && v.compile(), v))), this) : instance;
    }
    this.propagatePromiseModules(plugin);
    let name = plugin.config.name, seed = plugin.config.seed;
    if (plugin.getParent = () => this, plugin.getServer = () => this.getServer(), plugin.getGlobalRoutes = () => this.getGlobalRoutes(), plugin.getGlobalDefinitions = () => this.getGlobalDefinitions(), plugin.standaloneValidator?.scoped && (this.standaloneValidator.local ? this.standaloneValidator.local = this.standaloneValidator.local.concat(plugin.standaloneValidator.scoped) : this.standaloneValidator.local = plugin.standaloneValidator.scoped), plugin.standaloneValidator?.global && (this.standaloneValidator.global ? this.standaloneValidator.global = this.standaloneValidator.global.concat(plugin.standaloneValidator.global) : this.standaloneValidator.global = plugin.standaloneValidator.global), isNotEmpty(plugin["~parser"]) && (this["~parser"] = {
      ...plugin["~parser"],
      ...this["~parser"]
    }), plugin.setHeaders && this.headers(plugin.setHeaders), name) {
      name in this.dependencies || (this.dependencies[name] = []);
      let current = seed !== undefined ? checksum(name + JSON.stringify(seed)) : 0;
      this.dependencies[name].some(({ checksum: checksum2 }) => current === checksum2) || (this.extender.macro = {
        ...this.extender.macro,
        ...plugin.extender.macro
      }, this.extender.higherOrderFunctions = this.extender.higherOrderFunctions.concat(plugin.extender.higherOrderFunctions));
    } else
      isNotEmpty(plugin.extender.macro) && (this.extender.macro = {
        ...this.extender.macro,
        ...plugin.extender.macro
      }), plugin.extender.higherOrderFunctions.length && (this.extender.higherOrderFunctions = this.extender.higherOrderFunctions.concat(plugin.extender.higherOrderFunctions));
    if (plugin.extender.higherOrderFunctions.length) {
      deduplicateChecksum(this.extender.higherOrderFunctions);
      let hofHashes = [];
      for (let i = 0;i < this.extender.higherOrderFunctions.length; i++) {
        let hof = this.extender.higherOrderFunctions[i];
        hof.checksum && (hofHashes.includes(hof.checksum) && (this.extender.higherOrderFunctions.splice(i, 1), i--), hofHashes.push(hof.checksum));
      }
      hofHashes.length = 0;
    }
    this.inference = mergeInference(this.inference, plugin.inference), isNotEmpty(plugin.singleton.decorator) && this.decorate(plugin.singleton.decorator), isNotEmpty(plugin.singleton.store) && this.state(plugin.singleton.store), isNotEmpty(plugin.definitions.type) && this.model(plugin.definitions.type), isNotEmpty(plugin.definitions.error) && this.error(plugin.definitions.error), isNotEmpty(plugin.extender.macro) && (this.extender.macro = {
      ...this.extender.macro,
      ...plugin.extender.macro
    });
    for (let { method, path: path3, handler, hooks } of Object.values(plugin.router.history))
      this.add(method, path3, handler, hooks);
    if (name) {
      name in this.dependencies || (this.dependencies[name] = []);
      let current = seed !== undefined ? checksum(name + JSON.stringify(seed)) : 0;
      if (this.dependencies[name].some(({ checksum: checksum2 }) => current === checksum2))
        return this;
      this.dependencies[name].push(this.config?.analytic ? {
        name: plugin.config.name,
        seed: plugin.config.seed,
        checksum: current,
        dependencies: plugin.dependencies,
        stack: plugin.telemetry?.stack,
        routes: plugin.router.history,
        decorators: plugin.singleton,
        store: plugin.singleton.store,
        error: plugin.definitions.error,
        derive: plugin.event.transform?.filter((x) => x?.subType === "derive").map((x) => ({
          fn: x.toString(),
          stack: new Error().stack ?? ""
        })),
        resolve: plugin.event.transform?.filter((x) => x?.subType === "resolve").map((x) => ({
          fn: x.toString(),
          stack: new Error().stack ?? ""
        }))
      } : {
        name: plugin.config.name,
        seed: plugin.config.seed,
        checksum: current,
        dependencies: plugin.dependencies
      }), isNotEmpty(plugin.event) && (this.event = mergeLifeCycle(this.event, filterGlobalHook(plugin.event), current));
    } else
      isNotEmpty(plugin.event) && (this.event = mergeLifeCycle(this.event, filterGlobalHook(plugin.event)));
    return plugin.validator.global && (this.validator.global = mergeHook(this.validator.global, {
      ...plugin.validator.global
    })), plugin.validator.scoped && (this.validator.local = mergeHook(this.validator.local, {
      ...plugin.validator.scoped
    })), this;
  }
  macro(macroOrName, macro) {
    if (typeof macroOrName == "string" && !macro)
      throw new Error("Macro function is required");
    return typeof macroOrName == "string" ? this.extender.macro[macroOrName] = macro : this.extender.macro = {
      ...this.extender.macro,
      ...macroOrName
    }, this;
  }
  applyMacro(localHook, appliable = localHook, {
    iteration = 0,
    applied = {}
  } = {}) {
    if (iteration >= 16)
      return;
    let macro = this.extender.macro;
    for (let [key, value] of Object.entries(appliable)) {
      if (!(key in macro))
        continue;
      let macroHook = typeof macro[key] == "function" ? macro[key](value) : macro[key];
      if (!macroHook || typeof macro[key] == "object" && value === false)
        return;
      let seed = checksum(key + JSON.stringify(macroHook.seed ?? value));
      if (!(seed in applied)) {
        applied[seed] = true;
        for (let [k, value2] of Object.entries(macroHook))
          if (k !== "seed") {
            if (k in emptySchema) {
              insertStandaloneValidator(localHook, k, value2), delete localHook[key];
              continue;
            }
            if (k === "detail") {
              localHook.detail || (localHook.detail = {}), localHook.detail = mergeDeep(localHook.detail, value2, {
                mergeArray: true
              }), delete localHook[key];
              continue;
            }
            if (k in macro) {
              this.applyMacro(localHook, { [k]: value2 }, { applied, iteration: iteration + 1 }), delete localHook[key];
              continue;
            }
            switch ((k === "derive" || k === "resolve") && typeof value2 == "function" && (value2 = {
              fn: value2,
              subType: k
            }), typeof localHook[k]) {
              case "function":
                localHook[k] = [localHook[k], value2];
                break;
              case "object":
                Array.isArray(localHook[k]) ? localHook[k].push(value2) : localHook[k] = [localHook[k], value2];
                break;
              case "undefined":
                localHook[k] = value2;
                break;
            }
            delete localHook[key];
          }
      }
    }
  }
  mount(path3, handleOrConfig, config) {
    if (path3 instanceof _Elysia2 || typeof path3 == "function" || path3.length === 0 || path3 === "/") {
      let run = typeof path3 == "function" ? path3 : path3 instanceof _Elysia2 ? path3.compile().fetch : handleOrConfig instanceof _Elysia2 ? handleOrConfig.compile().fetch : typeof handleOrConfig == "function" ? handleOrConfig : (() => {
        throw new Error("Invalid handler");
      })(), handler2 = ({ request, path: path22 }) => run(new Request(replaceUrlPath(request.url, path22), {
        method: request.method,
        headers: request.headers,
        signal: request.signal,
        credentials: request.credentials,
        referrerPolicy: request.referrerPolicy,
        duplex: request.duplex,
        redirect: request.redirect,
        mode: request.mode,
        keepalive: request.keepalive,
        integrity: request.integrity,
        body: request.body
      }));
      return this.route("ALL", "/*", handler2, {
        parse: "none",
        ...config,
        detail: {
          ...config?.detail,
          hide: true
        },
        config: {
          mount: run
        }
      }), this;
    }
    let handle = handleOrConfig instanceof _Elysia2 ? handleOrConfig.compile().fetch : typeof handleOrConfig == "function" ? handleOrConfig : (() => {
      throw new Error("Invalid handler");
    })(), length = path3.length - (path3.endsWith("*") ? 1 : 0), handler = ({ request, path: path22 }) => handle(new Request(replaceUrlPath(request.url, path22.slice(length) || "/"), {
      method: request.method,
      headers: request.headers,
      signal: request.signal,
      credentials: request.credentials,
      referrerPolicy: request.referrerPolicy,
      duplex: request.duplex,
      redirect: request.redirect,
      mode: request.mode,
      keepalive: request.keepalive,
      integrity: request.integrity,
      body: request.body
    }));
    return this.route("ALL", path3, handler, {
      parse: "none",
      ...config,
      detail: {
        ...config?.detail,
        hide: true
      },
      config: {
        mount: handle
      }
    }), this.route("ALL", path3 + (path3.endsWith("/") ? "*" : "/*"), handler, {
      parse: "none",
      ...config,
      detail: {
        ...config?.detail,
        hide: true
      },
      config: {
        mount: handle
      }
    }), this;
  }
  get(path3, handler, hook) {
    return this.add("GET", path3, handler, hook), this;
  }
  post(path3, handler, hook) {
    return this.add("POST", path3, handler, hook), this;
  }
  put(path3, handler, hook) {
    return this.add("PUT", path3, handler, hook), this;
  }
  patch(path3, handler, hook) {
    return this.add("PATCH", path3, handler, hook), this;
  }
  delete(path3, handler, hook) {
    return this.add("DELETE", path3, handler, hook), this;
  }
  options(path3, handler, hook) {
    return this.add("OPTIONS", path3, handler, hook), this;
  }
  all(path3, handler, hook) {
    return this.add("ALL", path3, handler, hook), this;
  }
  head(path3, handler, hook) {
    return this.add("HEAD", path3, handler, hook), this;
  }
  connect(path3, handler, hook) {
    return this.add("CONNECT", path3, handler, hook), this;
  }
  route(method, path3, handler, hook) {
    return this.add(method.toUpperCase(), path3, handler, hook, hook?.config), this;
  }
  ws(path3, options) {
    return this["~adapter"].ws ? this["~adapter"].ws(this, path3, options) : console.warn("Current adapter doesn't support WebSocket"), this;
  }
  state(options, name, value) {
    name === undefined ? (value = options, options = { as: "append" }, name = "") : value === undefined && (typeof options == "string" ? (value = name, name = options, options = { as: "append" }) : typeof options == "object" && (value = name, name = ""));
    let { as } = options;
    if (typeof name != "string")
      return this;
    switch (typeof value) {
      case "object":
        return !value || !isNotEmpty(value) ? this : name ? ((name in this.singleton.store) ? this.singleton.store[name] = mergeDeep(this.singleton.store[name], value, {
          override: as === "override"
        }) : this.singleton.store[name] = value, this) : value === null ? this : (this.singleton.store = mergeDeep(this.singleton.store, value, {
          override: as === "override"
        }), this);
      case "function":
        return name ? (as === "override" || !(name in this.singleton.store)) && (this.singleton.store[name] = value) : this.singleton.store = value(this.singleton.store), this;
      default:
        return (as === "override" || !(name in this.singleton.store)) && (this.singleton.store[name] = value), this;
    }
  }
  decorate(options, name, value) {
    name === undefined ? (value = options, options = { as: "append" }, name = "") : value === undefined && (typeof options == "string" ? (value = name, name = options, options = { as: "append" }) : typeof options == "object" && (value = name, name = ""));
    let { as } = options;
    if (typeof name != "string")
      return this;
    switch (typeof value) {
      case "object":
        return name ? ((name in this.singleton.decorator) ? this.singleton.decorator[name] = mergeDeep(this.singleton.decorator[name], value, {
          override: as === "override"
        }) : this.singleton.decorator[name] = value, this) : value === null ? this : (this.singleton.decorator = mergeDeep(this.singleton.decorator, value, {
          override: as === "override"
        }), this);
      case "function":
        return name ? (as === "override" || !(name in this.singleton.decorator)) && (this.singleton.decorator[name] = value) : this.singleton.decorator = value(this.singleton.decorator), this;
      default:
        return (as === "override" || !(name in this.singleton.decorator)) && (this.singleton.decorator[name] = value), this;
    }
  }
  derive(optionsOrTransform, transform2) {
    transform2 || (transform2 = optionsOrTransform, optionsOrTransform = { as: "local" });
    let hook = {
      subType: "derive",
      fn: transform2
    };
    return this.onTransform(optionsOrTransform, hook);
  }
  model(name, model) {
    let onlyTypebox = (a) => {
      let res = {};
      for (let key in a)
        "~standard" in a[key] || (res[key] = a[key]);
      return res;
    };
    switch (typeof name) {
      case "object":
        let parsedTypebox = {}, kvs = Object.entries(name);
        if (!kvs.length)
          return this;
        for (let [key, value] of kvs)
          key in this.definitions.type || ("~standard" in value ? this.definitions.type[key] = value : (parsedTypebox[key] = this.definitions.type[key] = value, parsedTypebox[key].$id ??= `#/components/schemas/${key}`));
        return this.definitions.typebox = t.Module({
          ...this.definitions.typebox.$defs,
          ...parsedTypebox
        }), this;
      case "function":
        let result = name(this.definitions.type);
        return this.definitions.type = result, this.definitions.typebox = t.Module(onlyTypebox(result)), this;
      case "string":
        if (!model)
          break;
        if (this.definitions.type[name] = model, "~standard" in model)
          return this;
        let newModel = {
          ...model,
          id: model.$id ?? `#/components/schemas/${name}`
        };
        return this.definitions.typebox = t.Module({
          ...this.definitions.typebox.$defs,
          ...newModel
        }), this;
    }
    return model ? (this.definitions.type[name] = model, ("~standard" in model) ? this : (this.definitions.typebox = t.Module({
      ...this.definitions.typebox.$defs,
      [name]: model
    }), this)) : this;
  }
  Ref(key) {
    return t.Ref(key);
  }
  mapDerive(optionsOrDerive, mapper) {
    mapper || (mapper = optionsOrDerive, optionsOrDerive = { as: "local" });
    let hook = {
      subType: "mapDerive",
      fn: mapper
    };
    return this.onTransform(optionsOrDerive, hook);
  }
  affix(base, type, word) {
    if (word === "")
      return this;
    let delimieter = ["_", "-", " "], capitalize = (word2) => word2[0].toUpperCase() + word2.slice(1), joinKey = base === "prefix" ? (prefix, word2) => delimieter.includes(prefix.at(-1) ?? "") ? prefix + word2 : prefix + capitalize(word2) : delimieter.includes(word.at(-1) ?? "") ? (suffix, word2) => word2 + suffix : (suffix, word2) => word2 + capitalize(suffix), remap = (type2) => {
      let store = {};
      switch (type2) {
        case "decorator":
          for (let key in this.singleton.decorator)
            store[joinKey(word, key)] = this.singleton.decorator[key];
          this.singleton.decorator = store;
          break;
        case "state":
          for (let key in this.singleton.store)
            store[joinKey(word, key)] = this.singleton.store[key];
          this.singleton.store = store;
          break;
        case "model":
          for (let key in this.definitions.type)
            store[joinKey(word, key)] = this.definitions.type[key];
          this.definitions.type = store;
          break;
        case "error":
          for (let key in this.definitions.error)
            store[joinKey(word, key)] = this.definitions.error[key];
          this.definitions.error = store;
          break;
      }
    }, types = Array.isArray(type) ? type : [type];
    for (let type2 of types.some((x) => x === "all") ? ["decorator", "state", "model", "error"] : types)
      remap(type2);
    return this;
  }
  prefix(type, word) {
    return this.affix("prefix", type, word);
  }
  suffix(type, word) {
    return this.affix("suffix", type, word);
  }
  compile() {
    return this["~adapter"].beforeCompile?.(this), this["~adapter"].isWebStandard ? (this.fetch = this.config.aot ? composeGeneralHandler(this) : createDynamicHandler(this), typeof this.server?.reload == "function" && this.server.reload({
      ...this.server || {},
      fetch: this.fetch
    }), this) : (typeof this.server?.reload == "function" && this.server.reload(this.server || {}), this._handle = composeGeneralHandler(this), this);
  }
  get modules() {
    return this.promisedModules;
  }
};
var Elysia = _Elysia;

// src/infrastructure/cache/cache.repository.ts
var CACHE_TTL = Number(process.env.CACHE_TTL) || 5 * 60 * 1000;

class CacheRepository {
  db;
  constructor() {
    this.db = SQLITE;
  }
  static create() {
    return new CacheRepository;
  }
  async get(key) {
    try {
      const data = await this.db`SELECT value,createdAt FROM cache WHERE id = ${key} LIMIT 1`.values();
      if (data.length === 0)
        return null;
      return data[0][0];
    } catch (error) {
      return null;
    }
  }
  async set(key, value) {
    if (!value || Array.isArray(value) && value.length === 0)
      return;
    await this.db`
      INSERT OR REPLACE INTO cache (id, value, createdAt)
      VALUES (${key}, ${value}, CURRENT_TIMESTAMP)
    `;
    return;
  }
  async delete(key) {
    await this.db`DELETE FROM cache WHERE id = ${key}`;
    return;
  }
  clear() {
    return this.db`DELETE FROM cache WHERE createdAt <= datetime('now', '-${CACHE_TTL} milliseconds')  `;
  }
}

// src/core/services/animeHome.service.ts
class AnimeHomeService {
  static async getHomePageListAnime() {
    const cacheKey = "getHomePageListAnime";
    const cached = await cacheRepository.get(cacheKey);
    if (cached) {
      try {
        return JSON.parse(cached);
      } catch {
        await cacheRepository.delete(cacheKey);
      }
    }
    let animeClient;
    try {
      animeClient = await sendMessage(cacheKey, {});
    } catch (err) {
      throw status(500, { error: "Failed to fetch anime list from source" });
    }
    if (!animeClient.success) {
      throw status(404, { error: "Anime home list not found" });
    }
    await cacheRepository.set(cacheKey, JSON.stringify(animeClient.content));
    return animeClient.content;
  }
}

// src/core/entities/animeHome.entity.ts
var animeHomeEntity = t.Object({
  animeId: t.String(),
  name: t.String(),
  cap: t.String(),
  url: t.String(),
  urlImg: t.Union([t.String(), t.Null()])
});
var animeHomeInvalid = t.Object({ error: t.String() });

// src/core/entities/animeVideo.entity.ts
var animeVideoEntity;
((animeVideoEntity) => {
  animeVideoEntity.animeVideo = t.Object({
    foundUrl: t.Union([t.String(), t.Null()]),
    cap: t.String()
  });
  animeVideoEntity.animeVideoInvalid = t.Object({ error: t.String() });
})(animeVideoEntity ||= {});

// src/core/services/animeVideo.service.ts
class AnimeVideoService {
  static async getVideoSource(id, cap) {
    const manifest = await SQLITE`SELECT * FROM puglins_manifest`.values();
    if (manifest.length === 0) {
      throw status(500, { error: "Manifest not found" });
    }
    console.log(id, cap);
    const cacheKey = `getAnimeStreamingLinks-${id}-${cap}`;
    const cached = await cacheRepository.get(cacheKey);
    if (cached)
      return JSON.parse(cached);
    if (cached) {
      try {
        return JSON.parse(cached);
      } catch {
        await cacheRepository.delete(cacheKey);
      }
    }
    let videoSource;
    try {
      videoSource = await sendMessage("getAnimeStreamingLinks", { url: [`${manifest[0][2]}/media/${id}/${cap}`] });
    } catch (error) {
      throw status(500, { error: "Failed to fetch video source" });
    }
    if (!videoSource.success) {
      throw status(404, { error: "Video source not found" });
    }
    await cacheRepository.set(cacheKey, JSON.stringify(videoSource.content));
    return videoSource.content;
  }
}

// src/core/entities/animeFilter.entity.ts
var animeFilter = t.Object({
  genres: t.Optional(t.Array(t.String())),
  category: t.Optional(t.String()),
  status: t.Optional(t.String())
});
var FilterInvalid = t.Object({ error: t.String() });

// src/core/entities/animeSearch.entity.ts
var AnimeSearchEntity = t.Object({
  animeId: t.String(),
  name: t.String(),
  url: t.String(),
  urlImg: t.Union([t.String(), t.Null()])
});
var animeSearchInvalid = t.Object({
  error: t.String(),
  numberPages: t.String()
});

// src/core/services/animeSearch.service.ts
class AnimeSearchService {
  static async getSearchAnimeResults(query, page, filter) {
    const cacheKey = "getSearchAnime-" + query + (page ? "-" + page : "") + (filter ? "-" + JSON.stringify(filter) : "");
    const cached = await cacheRepository.get(cacheKey);
    if (cached) {
      try {
        return JSON.parse(cached);
      } catch {
        await cacheRepository.delete(cacheKey);
      }
    }
    let animeClient;
    try {
      animeClient = await sendMessage("getSearchAnime", {
        args: {
          query,
          page,
          category: filter?.category,
          genres: filter?.genres,
          status: filter?.status
        }
      });
      console.log(animeClient);
    } catch (err) {
      throw status(500, { error: "Failed to fetch anime list from source" });
    }
    if (!animeClient.success) {
      throw status(404, { error: "Anime catalog list not found" });
    }
    await cacheRepository.set(cacheKey, JSON.stringify(animeClient.content));
    return animeClient.content;
  }
}

// src/core/entities/animeDetails.entity.ts
var AnimeDetailsEntity = t.Object({
  idAnime: t.Optional(t.String()),
  name: t.String(),
  urlImg: t.Union([t.String(), t.Null()]),
  description: t.Union([t.String(), t.Null()]),
  status: t.String(),
  date: t.String(),
  genres: t.Array(t.String()),
  caps: t.Number()
});
var AnimeDetailsInvalidEntity = t.Object({
  error: t.String()
});

// src/core/services/animeDetails.service.ts
class AnimeDetailsService {
  static async getAnimeDetails(slug) {
    const cacheKey = "getAnimeDetails-" + slug;
    const cached = await cacheRepository.get(cacheKey);
    if (cached) {
      try {
        return JSON.parse(cached);
      } catch {
        await cacheRepository.delete(cacheKey);
      }
    }
    let animeClient;
    try {
      animeClient = await sendMessage("getAnimeDetails", { slug });
    } catch (err) {
      throw status(500, { error: "Failed to fetch anime list from source" });
    }
    if (!animeClient.success) {
      throw status(404, { error: "Anime catalog list not found" });
    }
    await cacheRepository.set(cacheKey, JSON.stringify(animeClient.content));
    return animeClient.content;
  }
}

// src/infrastructure/http/routes/anime.route.ts
var animeRoutes = new Elysia({ prefix: "/anime" });
animeRoutes.get("/home", async () => {
  const animeClient = await AnimeHomeService.getHomePageListAnime();
  return animeClient;
}, {
  response: {
    200: t.Array(animeHomeEntity),
    400: animeHomeInvalid,
    500: animeHomeInvalid
  }
});
animeRoutes.get("/video/:id/:cap", async ({ params: { id, cap } }) => {
  const animeVideo = await AnimeVideoService.getVideoSource(id, cap);
  return animeVideo;
}, {
  params: t.Object({
    id: t.String(),
    cap: t.String()
  }),
  response: {
    200: t.Array(animeVideoEntity.animeVideo),
    400: animeVideoEntity.animeVideoInvalid,
    500: animeVideoEntity.animeVideoInvalid
  }
});
animeRoutes.get("/search", async ({ query }) => {
  const { status: status2, genres, category, querySearch, page } = query;
  const result = await AnimeSearchService.getSearchAnimeResults(querySearch, page, {
    genres,
    status: status2,
    category
  });
  return result;
}, {
  query: t.Object({
    querySearch: t.String(),
    page: t.Optional(t.Number()),
    ...animeFilter.properties
  }),
  response: t.Object({
    results: t.Array(AnimeSearchEntity),
    numberPages: t.Number()
  })
});
animeRoutes.get("/details/:slug", async ({ params: { slug } }) => {
  const animeDetails = await AnimeDetailsService.getAnimeDetails(slug);
  console.log("hola");
  return animeDetails;
}, {
  params: t.Object({
    slug: t.String()
  }),
  response: {
    200: AnimeDetailsEntity,
    404: AnimeDetailsInvalidEntity,
    500: AnimeDetailsInvalidEntity
  }
});

// node_modules/@elysiajs/cors/dist/index.mjs
var isBun3 = typeof new Headers()?.toJSON === "function";
var processHeaders = (headers) => {
  if (isBun3)
    return Object.keys(headers.toJSON()).join(", ");
  let keys = "";
  let i = 0;
  headers.forEach((_, key) => {
    if (i)
      keys = keys + ", " + key;
    else
      keys = key;
    i++;
  });
  return keys;
};
var cors = (config) => {
  let {
    aot = true,
    origin = true,
    methods = true,
    allowedHeaders = true,
    exposeHeaders = true,
    credentials = true,
    maxAge = 5,
    preflight = true
  } = config ?? {};
  if (Array.isArray(allowedHeaders))
    allowedHeaders = allowedHeaders.join(", ");
  if (Array.isArray(exposeHeaders))
    exposeHeaders = exposeHeaders.join(", ");
  const origins = typeof origin === "boolean" ? undefined : Array.isArray(origin) ? origin : [origin];
  const app = new Elysia({
    name: "@elysiajs/cors",
    seed: config,
    aot
  });
  const anyOrigin = origins?.some((o) => o === "*");
  const originMap = {};
  if (origins) {
    for (const origin2 of origins)
      if (typeof origin2 === "string")
        originMap[origin2] = true;
  }
  const processOrigin = (origin2, request, from) => {
    if (Array.isArray(origin2))
      return origin2.some((o) => processOrigin(o, request, from));
    switch (typeof origin2) {
      case "string":
        if (from in originMap)
          return true;
        const fromProtocol = from.indexOf("://");
        if (fromProtocol !== -1)
          from = from.slice(fromProtocol + 3);
        return origin2 === from;
      case "function":
        return origin2(request) === true;
      case "object":
        if (origin2 instanceof RegExp)
          return origin2.test(from);
    }
    return false;
  };
  const handleOrigin = (set2, request) => {
    if (origin === true) {
      set2.headers.vary = "*";
      set2.headers["access-control-allow-origin"] = request.headers.get("Origin") || "*";
      return;
    }
    if (anyOrigin) {
      set2.headers.vary = "*";
      set2.headers["access-control-allow-origin"] = "*";
      return;
    }
    if (!origins?.length)
      return;
    const headers = [];
    if (origins.length) {
      const from = request.headers.get("Origin") ?? "";
      for (let i = 0;i < origins.length; i++) {
        const value = processOrigin(origins[i], request, from);
        if (value === true) {
          set2.headers.vary = origin ? "Origin" : "*";
          set2.headers["access-control-allow-origin"] = from || "*";
          return;
        }
      }
    }
    set2.headers.vary = "Origin";
    if (headers.length)
      set2.headers["access-control-allow-origin"] = headers.join(", ");
  };
  const handleMethod = (set2, method) => {
    if (!method)
      return;
    if (methods === true)
      return set2.headers["access-control-allow-methods"] = method ?? "*";
    if (methods === false || !methods?.length)
      return;
    if (methods === "*")
      return set2.headers["access-control-allow-methods"] = "*";
    if (!Array.isArray(methods))
      return set2.headers["access-control-allow-methods"] = methods;
    set2.headers["access-control-allow-methods"] = methods.join(", ");
  };
  const defaultHeaders = {};
  if (typeof exposeHeaders === "string")
    defaultHeaders["access-control-expose-headers"] = exposeHeaders;
  if (typeof allowedHeaders === "string")
    defaultHeaders["access-control-allow-headers"] = allowedHeaders;
  if (credentials === true)
    defaultHeaders["access-control-allow-credentials"] = "true";
  app.headers(defaultHeaders);
  function handleOption({ set: set2, request, headers }) {
    handleOrigin(set2, request);
    handleMethod(set2, request.headers.get("access-control-request-method"));
    if (allowedHeaders === true || exposeHeaders === true) {
      if (allowedHeaders === true)
        set2.headers["access-control-allow-headers"] = headers["access-control-request-headers"];
      if (exposeHeaders === true)
        set2.headers["access-control-expose-headers"] = Object.keys(headers).join(",");
    }
    if (maxAge)
      set2.headers["access-control-max-age"] = maxAge.toString();
    return new Response(null, {
      status: 204
    });
  }
  if (preflight)
    app.options("/", handleOption).options("/*", handleOption);
  return app.onRequest(function processCors({ set: set2, request }) {
    handleOrigin(set2, request);
    handleMethod(set2, request.method);
    if (allowedHeaders === true || exposeHeaders === true) {
      const headers = processHeaders(request.headers);
      if (allowedHeaders === true)
        set2.headers["access-control-allow-headers"] = headers;
      if (exposeHeaders === true)
        set2.headers["access-control-expose-headers"] = headers;
    }
  });
};

// node_modules/croner/dist/croner.min.js
function minitz(y, m, d, h, i, s, tz, throwOnInvalid) {
  return minitz.fromTZ(minitz.tp(y, m, d, h, i, s, tz), throwOnInvalid);
}
minitz.fromTZISO = (localTimeStr, tz, throwOnInvalid) => {
  return minitz.fromTZ(parseISOLocal(localTimeStr, tz), throwOnInvalid);
};
minitz.fromTZ = function(tp, throwOnInvalid) {
  const inDate = new Date(Date.UTC(tp.y, tp.m - 1, tp.d, tp.h, tp.i, tp.s)), offset = getTimezoneOffset(tp.tz, inDate), dateGuess = new Date(inDate.getTime() - offset), dateOffsGuess = getTimezoneOffset(tp.tz, dateGuess);
  if (dateOffsGuess - offset === 0) {
    return dateGuess;
  } else {
    const dateGuess2 = new Date(inDate.getTime() - dateOffsGuess), dateOffsGuess2 = getTimezoneOffset(tp.tz, dateGuess2);
    if (dateOffsGuess2 - dateOffsGuess === 0) {
      return dateGuess2;
    } else if (!throwOnInvalid && dateOffsGuess2 - dateOffsGuess > 0) {
      return dateGuess2;
    } else if (!throwOnInvalid) {
      return dateGuess;
    } else {
      throw new Error("Invalid date passed to fromTZ()");
    }
  }
};
minitz.toTZ = function(d, tzStr) {
  const localDateString = d.toLocaleString("en-US", { timeZone: tzStr }).replace(/[\u202f]/, " ");
  const td = new Date(localDateString);
  return { y: td.getFullYear(), m: td.getMonth() + 1, d: td.getDate(), h: td.getHours(), i: td.getMinutes(), s: td.getSeconds(), tz: tzStr };
};
minitz.tp = (y, m, d, h, i, s, tz) => {
  return { y, m, d, h, i, s, tz };
};
function getTimezoneOffset(timeZone, date2 = new Date) {
  const tz = date2.toLocaleString("en-US", { timeZone, timeZoneName: "short" }).split(" ").slice(-1)[0];
  const dateString = date2.toLocaleString("en-US").replace(/[\u202f]/, " ");
  return Date.parse(`${dateString} GMT`) - Date.parse(`${dateString} ${tz}`);
}
function parseISOLocal(dtStr, tz) {
  const pd = new Date(Date.parse(dtStr));
  if (isNaN(pd)) {
    throw new Error("minitz: Invalid ISO8601 passed to parser.");
  }
  const stringEnd = dtStr.substring(9);
  if (dtStr.includes("Z") || stringEnd.includes("-") || stringEnd.includes("+")) {
    return minitz.tp(pd.getUTCFullYear(), pd.getUTCMonth() + 1, pd.getUTCDate(), pd.getUTCHours(), pd.getUTCMinutes(), pd.getUTCSeconds(), "Etc/UTC");
  } else {
    return minitz.tp(pd.getFullYear(), pd.getMonth() + 1, pd.getDate(), pd.getHours(), pd.getMinutes(), pd.getSeconds(), tz);
  }
}
minitz.minitz = minitz;
function CronOptions(options) {
  if (options === undefined) {
    options = {};
  }
  delete options.name;
  options.legacyMode = options.legacyMode === undefined ? true : options.legacyMode;
  options.paused = options.paused === undefined ? false : options.paused;
  options.maxRuns = options.maxRuns === undefined ? Infinity : options.maxRuns;
  options.catch = options.catch === undefined ? false : options.catch;
  options.interval = options.interval === undefined ? 0 : parseInt(options.interval, 10);
  options.utcOffset = options.utcOffset === undefined ? undefined : parseInt(options.utcOffset, 10);
  options.unref = options.unref === undefined ? false : options.unref;
  if (options.startAt) {
    options.startAt = new CronDate(options.startAt, options.timezone);
  }
  if (options.stopAt) {
    options.stopAt = new CronDate(options.stopAt, options.timezone);
  }
  if (options.interval !== null) {
    if (isNaN(options.interval)) {
      throw new Error("CronOptions: Supplied value for interval is not a number");
    } else if (options.interval < 0) {
      throw new Error("CronOptions: Supplied value for interval can not be negative");
    }
  }
  if (options.utcOffset !== undefined) {
    if (isNaN(options.utcOffset)) {
      throw new Error("CronOptions: Invalid value passed for utcOffset, should be number representing minutes offset from UTC.");
    } else if (options.utcOffset < -870 || options.utcOffset > 870) {
      throw new Error("CronOptions: utcOffset out of bounds.");
    }
    if (options.utcOffset !== undefined && options.timezone) {
      throw new Error("CronOptions: Combining 'utcOffset' with 'timezone' is not allowed.");
    }
  }
  if (options.unref !== true && options.unref !== false) {
    throw new Error("CronOptions: Unref should be either true, false or undefined(false).");
  }
  return options;
}
var DaysOfMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var RecursionSteps = [["month", "year", 0], ["day", "month", -1], ["hour", "day", 0], ["minute", "hour", 0], ["second", "minute", 0]];
function CronDate(d, tz) {
  this.tz = tz;
  if (d && d instanceof Date) {
    if (!isNaN(d)) {
      this.fromDate(d);
    } else {
      throw new TypeError("CronDate: Invalid date passed to CronDate constructor");
    }
  } else if (d === undefined) {
    this.fromDate(new Date);
  } else if (d && typeof d === "string") {
    this.fromString(d);
  } else if (d instanceof CronDate) {
    this.fromCronDate(d);
  } else {
    throw new TypeError("CronDate: Invalid type (" + typeof d + ") passed to CronDate constructor");
  }
}
CronDate.prototype.fromDate = function(inDate) {
  if (this.tz !== undefined) {
    if (typeof this.tz === "number") {
      this.ms = inDate.getUTCMilliseconds();
      this.second = inDate.getUTCSeconds();
      this.minute = inDate.getUTCMinutes() + this.tz;
      this.hour = inDate.getUTCHours();
      this.day = inDate.getUTCDate();
      this.month = inDate.getUTCMonth();
      this.year = inDate.getUTCFullYear();
      this.apply();
    } else {
      const d = minitz.toTZ(inDate, this.tz);
      this.ms = inDate.getMilliseconds();
      this.second = d.s;
      this.minute = d.i;
      this.hour = d.h;
      this.day = d.d;
      this.month = d.m - 1;
      this.year = d.y;
    }
  } else {
    this.ms = inDate.getMilliseconds();
    this.second = inDate.getSeconds();
    this.minute = inDate.getMinutes();
    this.hour = inDate.getHours();
    this.day = inDate.getDate();
    this.month = inDate.getMonth();
    this.year = inDate.getFullYear();
  }
};
CronDate.prototype.fromCronDate = function(d) {
  this.tz = d.tz;
  this.year = d.year;
  this.month = d.month;
  this.day = d.day;
  this.hour = d.hour;
  this.minute = d.minute;
  this.second = d.second;
  this.ms = d.ms;
};
CronDate.prototype.apply = function() {
  if (this.month > 11 || this.day > DaysOfMonth[this.month] || this.hour > 59 || this.minute > 59 || this.second > 59 || this.hour < 0 || this.minute < 0 || this.second < 0) {
    const d = new Date(Date.UTC(this.year, this.month, this.day, this.hour, this.minute, this.second, this.ms));
    this.ms = d.getUTCMilliseconds();
    this.second = d.getUTCSeconds();
    this.minute = d.getUTCMinutes();
    this.hour = d.getUTCHours();
    this.day = d.getUTCDate();
    this.month = d.getUTCMonth();
    this.year = d.getUTCFullYear();
    return true;
  } else {
    return false;
  }
};
CronDate.prototype.fromString = function(str) {
  return this.fromDate(minitz.fromTZISO(str, this.tz));
};
CronDate.prototype.findNext = function(options, target, pattern, offset) {
  const originalTarget = this[target];
  let lastDayOfMonth;
  if (pattern.lastDayOfMonth || pattern.lastWeekdayOfMonth) {
    if (this.month !== 1) {
      lastDayOfMonth = DaysOfMonth[this.month];
    } else {
      lastDayOfMonth = new Date(Date.UTC(this.year, this.month + 1, 0, 0, 0, 0, 0)).getUTCDate();
    }
  }
  const fDomWeekDay = !pattern.starDOW && target == "day" ? new Date(Date.UTC(this.year, this.month, 1, 0, 0, 0, 0)).getUTCDay() : undefined;
  for (let i = this[target] + offset;i < pattern[target].length; i++) {
    let match = pattern[target][i];
    if (target === "day" && pattern.lastDayOfMonth && i - offset == lastDayOfMonth) {
      match = true;
    }
    if (target === "day" && !pattern.starDOW) {
      let dowMatch = pattern.dayOfWeek[(fDomWeekDay + (i - offset - 1)) % 7];
      if (dowMatch && pattern.lastWeekdayOfMonth) {
        dowMatch = dowMatch && i - offset > lastDayOfMonth - 7;
      }
      if (options.legacyMode && !pattern.starDOM) {
        match = match || dowMatch;
      } else {
        match = match && dowMatch;
      }
    }
    if (match) {
      this[target] = i - offset;
      return originalTarget !== this[target] ? 2 : 1;
    }
  }
  return 3;
};
CronDate.prototype.recurse = function(pattern, options, doing) {
  const res = this.findNext(options, RecursionSteps[doing][0], pattern, RecursionSteps[doing][2]);
  if (res > 1) {
    let resetLevel = doing + 1;
    while (resetLevel < RecursionSteps.length) {
      this[RecursionSteps[resetLevel][0]] = -RecursionSteps[resetLevel][2];
      resetLevel++;
    }
    if (res === 3) {
      this[RecursionSteps[doing][1]]++;
      this[RecursionSteps[doing][0]] = -RecursionSteps[doing][2];
      this.apply();
      return this.recurse(pattern, options, 0);
    } else if (this.apply()) {
      return this.recurse(pattern, options, doing - 1);
    }
  }
  doing += 1;
  if (doing >= RecursionSteps.length) {
    return this;
  } else if (this.year >= 3000) {
    return null;
  } else {
    return this.recurse(pattern, options, doing);
  }
};
CronDate.prototype.increment = function(pattern, options, hasPreviousRun) {
  this.second += options.interval > 1 && hasPreviousRun ? options.interval : 1;
  this.ms = 0;
  this.apply();
  return this.recurse(pattern, options, 0);
};
CronDate.prototype.getDate = function(internal) {
  if (internal || this.tz === undefined) {
    return new Date(this.year, this.month, this.day, this.hour, this.minute, this.second, this.ms);
  } else {
    if (typeof this.tz === "number") {
      return new Date(Date.UTC(this.year, this.month, this.day, this.hour, this.minute - this.tz, this.second, this.ms));
    } else {
      return minitz(this.year, this.month + 1, this.day, this.hour, this.minute, this.second, this.tz);
    }
  }
};
CronDate.prototype.getTime = function() {
  return this.getDate().getTime();
};
function CronPattern(pattern, timezone) {
  this.pattern = pattern;
  this.timezone = timezone;
  this.second = Array(60).fill(0);
  this.minute = Array(60).fill(0);
  this.hour = Array(24).fill(0);
  this.day = Array(31).fill(0);
  this.month = Array(12).fill(0);
  this.dayOfWeek = Array(8).fill(0);
  this.lastDayOfMonth = false;
  this.lastWeekdayOfMonth = false;
  this.starDOM = false;
  this.starDOW = false;
  this.parse();
}
CronPattern.prototype.parse = function() {
  if (!(typeof this.pattern === "string" || this.pattern.constructor === String)) {
    throw new TypeError("CronPattern: Pattern has to be of type string.");
  }
  if (this.pattern.indexOf("@") >= 0)
    this.pattern = this.handleNicknames(this.pattern).trim();
  const parts = this.pattern.replace(/\s+/g, " ").split(" ");
  if (parts.length < 5 || parts.length > 6) {
    throw new TypeError("CronPattern: invalid configuration format ('" + this.pattern + "'), exacly five or six space separated parts required.");
  }
  if (parts.length === 5) {
    parts.unshift("0");
  }
  if (parts[3].indexOf("L") >= 0) {
    parts[3] = parts[3].replace("L", "");
    this.lastDayOfMonth = true;
  }
  if (parts[5].indexOf("L") >= 0) {
    parts[5] = parts[5].replace("L", "");
    this.lastWeekdayOfMonth = true;
  }
  if (parts[3] == "*") {
    this.starDOM = true;
  }
  if (parts[4].length >= 3)
    parts[4] = this.replaceAlphaMonths(parts[4]);
  if (parts[5].length >= 3)
    parts[5] = this.replaceAlphaDays(parts[5]);
  if (parts[5] == "*") {
    this.starDOW = true;
  }
  if (this.pattern.indexOf("?") >= 0) {
    const initDate = new CronDate(new Date, this.timezone).getDate(true);
    parts[0] = parts[0].replace("?", initDate.getSeconds());
    parts[1] = parts[1].replace("?", initDate.getMinutes());
    parts[2] = parts[2].replace("?", initDate.getHours());
    if (!this.starDOM)
      parts[3] = parts[3].replace("?", initDate.getDate());
    parts[4] = parts[4].replace("?", initDate.getMonth() + 1);
    if (!this.starDOW)
      parts[5] = parts[5].replace("?", initDate.getDay());
  }
  this.throwAtIllegalCharacters(parts);
  this.partToArray("second", parts[0], 0);
  this.partToArray("minute", parts[1], 0);
  this.partToArray("hour", parts[2], 0);
  this.partToArray("day", parts[3], -1);
  this.partToArray("month", parts[4], -1);
  this.partToArray("dayOfWeek", parts[5], 0);
  if (this.dayOfWeek[7]) {
    this.dayOfWeek[0] = 1;
  }
};
CronPattern.prototype.partToArray = function(type, conf, valueIndexOffset) {
  const arr = this[type];
  if (conf === "*")
    return arr.fill(1);
  const split = conf.split(",");
  if (split.length > 1) {
    for (let i = 0;i < split.length; i++) {
      this.partToArray(type, split[i], valueIndexOffset);
    }
  } else if (conf.indexOf("-") !== -1 && conf.indexOf("/") !== -1) {
    this.handleRangeWithStepping(conf, type, valueIndexOffset);
  } else if (conf.indexOf("-") !== -1) {
    this.handleRange(conf, type, valueIndexOffset);
  } else if (conf.indexOf("/") !== -1) {
    this.handleStepping(conf, type, valueIndexOffset);
  } else if (conf !== "") {
    this.handleNumber(conf, type, valueIndexOffset);
  }
};
CronPattern.prototype.throwAtIllegalCharacters = function(parts) {
  const reValidCron = /[^/*0-9,-]+/;
  for (let i = 0;i < parts.length; i++) {
    if (reValidCron.test(parts[i])) {
      throw new TypeError("CronPattern: configuration entry " + i + " (" + parts[i] + ") contains illegal characters.");
    }
  }
};
CronPattern.prototype.handleNumber = function(conf, type, valueIndexOffset) {
  const i = parseInt(conf, 10) + valueIndexOffset;
  if (isNaN(i)) {
    throw new TypeError("CronPattern: " + type + " is not a number: '" + conf + "'");
  }
  if (i < 0 || i >= this[type].length) {
    throw new TypeError("CronPattern: " + type + " value out of range: '" + conf + "'");
  }
  this[type][i] = 1;
};
CronPattern.prototype.handleRangeWithStepping = function(conf, type, valueIndexOffset) {
  const matches = conf.match(/^(\d+)-(\d+)\/(\d+)$/);
  if (matches === null)
    throw new TypeError("CronPattern: Syntax error, illegal range with stepping: '" + conf + "'");
  let [, lower, upper, steps] = matches;
  lower = parseInt(lower, 10) + valueIndexOffset;
  upper = parseInt(upper, 10) + valueIndexOffset;
  steps = parseInt(steps, 10);
  if (isNaN(lower))
    throw new TypeError("CronPattern: Syntax error, illegal lower range (NaN)");
  if (isNaN(upper))
    throw new TypeError("CronPattern: Syntax error, illegal upper range (NaN)");
  if (isNaN(steps))
    throw new TypeError("CronPattern: Syntax error, illegal stepping: (NaN)");
  if (steps === 0)
    throw new TypeError("CronPattern: Syntax error, illegal stepping: 0");
  if (steps > this[type].length)
    throw new TypeError("CronPattern: Syntax error, steps cannot be greater than maximum value of part (" + this[type].length + ")");
  if (lower < 0 || upper >= this[type].length)
    throw new TypeError("CronPattern: Value out of range: '" + conf + "'");
  if (lower > upper)
    throw new TypeError("CronPattern: From value is larger than to value: '" + conf + "'");
  for (let i = lower;i <= upper; i += steps) {
    this[type][i] = 1;
  }
};
CronPattern.prototype.handleRange = function(conf, type, valueIndexOffset) {
  const split = conf.split("-");
  if (split.length !== 2) {
    throw new TypeError("CronPattern: Syntax error, illegal range: '" + conf + "'");
  }
  const lower = parseInt(split[0], 10) + valueIndexOffset, upper = parseInt(split[1], 10) + valueIndexOffset;
  if (isNaN(lower)) {
    throw new TypeError("CronPattern: Syntax error, illegal lower range (NaN)");
  } else if (isNaN(upper)) {
    throw new TypeError("CronPattern: Syntax error, illegal upper range (NaN)");
  }
  if (lower < 0 || upper >= this[type].length) {
    throw new TypeError("CronPattern: Value out of range: '" + conf + "'");
  }
  if (lower > upper) {
    throw new TypeError("CronPattern: From value is larger than to value: '" + conf + "'");
  }
  for (let i = lower;i <= upper; i++) {
    this[type][i] = 1;
  }
};
CronPattern.prototype.handleStepping = function(conf, type) {
  const split = conf.split("/");
  if (split.length !== 2) {
    throw new TypeError("CronPattern: Syntax error, illegal stepping: '" + conf + "'");
  }
  let start = 0;
  if (split[0] !== "*") {
    start = parseInt(split[0], 10);
  }
  const steps = parseInt(split[1], 10);
  if (isNaN(steps))
    throw new TypeError("CronPattern: Syntax error, illegal stepping: (NaN)");
  if (steps === 0)
    throw new TypeError("CronPattern: Syntax error, illegal stepping: 0");
  if (steps > this[type].length)
    throw new TypeError("CronPattern: Syntax error, max steps for part is (" + this[type].length + ")");
  for (let i = start;i < this[type].length; i += steps) {
    this[type][i] = 1;
  }
};
CronPattern.prototype.replaceAlphaDays = function(conf) {
  return conf.replace(/-sun/gi, "-7").replace(/sun/gi, "0").replace(/mon/gi, "1").replace(/tue/gi, "2").replace(/wed/gi, "3").replace(/thu/gi, "4").replace(/fri/gi, "5").replace(/sat/gi, "6");
};
CronPattern.prototype.replaceAlphaMonths = function(conf) {
  return conf.replace(/jan/gi, "1").replace(/feb/gi, "2").replace(/mar/gi, "3").replace(/apr/gi, "4").replace(/may/gi, "5").replace(/jun/gi, "6").replace(/jul/gi, "7").replace(/aug/gi, "8").replace(/sep/gi, "9").replace(/oct/gi, "10").replace(/nov/gi, "11").replace(/dec/gi, "12");
};
CronPattern.prototype.handleNicknames = function(pattern) {
  const cleanPattern = pattern.trim().toLowerCase();
  if (cleanPattern === "@yearly" || cleanPattern === "@annually") {
    return "0 0 1 1 *";
  } else if (cleanPattern === "@monthly") {
    return "0 0 1 * *";
  } else if (cleanPattern === "@weekly") {
    return "0 0 * * 0";
  } else if (cleanPattern === "@daily") {
    return "0 0 * * *";
  } else if (cleanPattern === "@hourly") {
    return "0 * * * *";
  } else {
    return pattern;
  }
};
function isFunction(v) {
  return Object.prototype.toString.call(v) === "[object Function]" || typeof v === "function" || v instanceof Function;
}
function unrefTimer(timer) {
  if (typeof Deno !== "undefined" && typeof Deno.unrefTimer !== "undefined") {
    Deno.unrefTimer(timer);
  } else if (timer && typeof timer.unref !== "undefined") {
    timer.unref();
  }
}
var maxDelay = 30 * 1000;
var scheduledJobs = [];
function Cron(pattern, fnOrOptions1, fnOrOptions2) {
  if (!(this instanceof Cron)) {
    return new Cron(pattern, fnOrOptions1, fnOrOptions2);
  }
  let options, func;
  if (isFunction(fnOrOptions1)) {
    func = fnOrOptions1;
  } else if (typeof fnOrOptions1 === "object") {
    options = fnOrOptions1;
  } else if (fnOrOptions1 !== undefined) {
    throw new Error("Cron: Invalid argument passed for optionsIn. Should be one of function, or object (options).");
  }
  if (isFunction(fnOrOptions2)) {
    func = fnOrOptions2;
  } else if (typeof fnOrOptions2 === "object") {
    options = fnOrOptions2;
  } else if (fnOrOptions2 !== undefined) {
    throw new Error("Cron: Invalid argument passed for funcIn. Should be one of function, or object (options).");
  }
  this.name = options ? options.name : undefined;
  this.options = CronOptions(options);
  this._states = { kill: false, blocking: false, previousRun: undefined, currentRun: undefined, once: undefined, currentTimeout: undefined, maxRuns: options ? options.maxRuns : undefined, paused: options ? options.paused : false, pattern: undefined };
  if (pattern && (pattern instanceof Date || typeof pattern === "string" && pattern.indexOf(":") > 0)) {
    this._states.once = new CronDate(pattern, this.options.timezone || this.options.utcOffset);
  } else {
    this._states.pattern = new CronPattern(pattern, this.options.timezone);
  }
  if (this.name) {
    const existing = scheduledJobs.find((j) => j.name === this.name);
    if (existing) {
      throw new Error("Cron: Tried to initialize new named job '" + this.name + "', but name already taken.");
    } else {
      scheduledJobs.push(this);
    }
  }
  if (func !== undefined) {
    this.fn = func;
    this.schedule();
  }
  return this;
}
Cron.prototype.nextRun = function(prev) {
  const next = this._next(prev);
  return next ? next.getDate() : null;
};
Cron.prototype.nextRuns = function(n, previous) {
  if (n > this._states.maxRuns) {
    n = this._states.maxRuns;
  }
  const enumeration = [];
  let prev = previous || this._states.currentRun;
  while (n-- && (prev = this.nextRun(prev))) {
    enumeration.push(prev);
  }
  return enumeration;
};
Cron.prototype.getPattern = function() {
  return this._states.pattern ? this._states.pattern.pattern : undefined;
};
Cron.prototype.isRunning = function() {
  const msLeft = this.msToNext(this._states.currentRun);
  const isRunning = !this._states.paused;
  const isScheduled = this.fn !== undefined;
  const notIsKilled = !this._states.kill;
  return isRunning && isScheduled && notIsKilled && msLeft !== null;
};
Cron.prototype.isStopped = function() {
  return this._states.kill;
};
Cron.prototype.isBusy = function() {
  return this._states.blocking;
};
Cron.prototype.currentRun = function() {
  return this._states.currentRun ? this._states.currentRun.getDate() : null;
};
Cron.prototype.previousRun = function() {
  return this._states.previousRun ? this._states.previousRun.getDate() : null;
};
Cron.prototype.msToNext = function(prev) {
  const next = this._next(prev);
  prev = new CronDate(prev, this.options.timezone || this.options.utcOffset);
  if (next) {
    return next.getTime(true) - prev.getTime(true);
  } else {
    return null;
  }
};
Cron.prototype.stop = function() {
  this._states.kill = true;
  if (this._states.currentTimeout) {
    clearTimeout(this._states.currentTimeout);
  }
  const jobIndex = scheduledJobs.indexOf(this);
  if (jobIndex >= 0) {
    scheduledJobs.splice(jobIndex, 1);
  }
};
Cron.prototype.pause = function() {
  this._states.paused = true;
  return !this._states.kill;
};
Cron.prototype.resume = function() {
  this._states.paused = false;
  return !this._states.kill;
};
Cron.prototype.schedule = function(func, partial) {
  if (func && this.fn) {
    throw new Error("Cron: It is not allowed to schedule two functions using the same Croner instance.");
  } else if (func) {
    this.fn = func;
  }
  let waitMs = this.msToNext(partial ? partial : this._states.currentRun);
  const target = this.nextRun(partial ? partial : this._states.currentRun);
  if (waitMs === null || target === null)
    return this;
  if (waitMs > maxDelay) {
    waitMs = maxDelay;
  }
  this._states.currentTimeout = setTimeout(() => this._checkTrigger(target), waitMs);
  if (this._states.currentTimeout && this.options.unref) {
    unrefTimer(this._states.currentTimeout);
  }
  return this;
};
Cron.prototype._trigger = async function(initiationDate) {
  this._states.blocking = true;
  this._states.currentRun = new CronDate(undefined, this.options.timezone || this.options.utcOffset);
  if (this.options.catch) {
    try {
      await this.fn(this, this.options.context);
    } catch (_e) {
      if (isFunction(this.options.catch)) {
        this.options.catch(_e, this);
      }
    }
  } else {
    await this.fn(this, this.options.context);
  }
  this._states.previousRun = new CronDate(initiationDate, this.options.timezone || this.options.utcOffset);
  this._states.blocking = false;
};
Cron.prototype.trigger = async function() {
  await this._trigger();
};
Cron.prototype._checkTrigger = function(target) {
  const now = new Date, shouldRun = !this._states.paused && now.getTime() >= target, isBlocked = this._states.blocking && this.options.protect;
  if (shouldRun && !isBlocked) {
    this._states.maxRuns--;
    this._trigger();
  } else {
    if (shouldRun && isBlocked && isFunction(this.options.protect)) {
      setTimeout(() => this.options.protect(this), 0);
    }
  }
  this.schedule(undefined, now);
};
Cron.prototype._next = function(prev) {
  const hasPreviousRun = prev || this._states.currentRun ? true : false;
  prev = new CronDate(prev, this.options.timezone || this.options.utcOffset);
  if (this.options.startAt && prev && prev.getTime() < this.options.startAt.getTime()) {
    prev = this.options.startAt;
  }
  const nextRun = this._states.once || new CronDate(prev, this.options.timezone || this.options.utcOffset).increment(this._states.pattern, this.options, hasPreviousRun);
  if (this._states.once && this._states.once.getTime() <= prev.getTime()) {
    return null;
  } else if (nextRun === null || this._states.maxRuns <= 0 || this._states.kill || this.options.stopAt && nextRun.getTime() >= this.options.stopAt.getTime()) {
    return null;
  } else {
    return nextRun;
  }
};
Cron.Cron = Cron;
Cron.scheduledJobs = scheduledJobs;

// node_modules/@elysiajs/cron/dist/index.mjs
var Days = /* @__PURE__ */ ((Days2) => {
  Days2[Days2["SUNDAY"] = 0] = "SUNDAY";
  Days2[Days2["MONDAY"] = 1] = "MONDAY";
  Days2[Days2["TUESDAY"] = 2] = "TUESDAY";
  Days2[Days2["WEDNESDAY"] = 3] = "WEDNESDAY";
  Days2[Days2["THURSDAY"] = 4] = "THURSDAY";
  Days2[Days2["FRIDAY"] = 5] = "FRIDAY";
  Days2[Days2["SATURDAY"] = 6] = "SATURDAY";
  return Days2;
})(Days || {});
var ConstantExpressions = /* @__PURE__ */ ((ConstantExpressions2) => {
  ConstantExpressions2["EVERY_SECOND"] = "* * * * * *";
  ConstantExpressions2["EVERY_5_SECONDS"] = "*/5 * * * * *";
  ConstantExpressions2["EVERY_10_SECONDS"] = "*/10 * * * * *";
  ConstantExpressions2["EVERY_30_SECONDS"] = "*/30 * * * * *";
  ConstantExpressions2["EVERY_MINUTE"] = "*/1 * * * *";
  ConstantExpressions2["EVERY_5_MINUTES"] = "0 */5 * * * *";
  ConstantExpressions2["EVERY_10_MINUTES"] = "0 */10 * * * *";
  ConstantExpressions2["EVERY_30_MINUTES"] = "0 */30 * * * *";
  ConstantExpressions2["EVERY_HOUR"] = "0 0-23/1 * * *";
  ConstantExpressions2["EVERY_2_HOURS"] = "0 0-23/2 * * *";
  ConstantExpressions2["EVERY_3_HOURS"] = "0 0-23/3 * * *";
  ConstantExpressions2["EVERY_4_HOURS"] = "0 0-23/4 * * *";
  ConstantExpressions2["EVERY_5_HOURS"] = "0 0-23/5 * * *";
  ConstantExpressions2["EVERY_6_HOURS"] = "0 0-23/6 * * *";
  ConstantExpressions2["EVERY_7_HOURS"] = "0 0-23/7 * * *";
  ConstantExpressions2["EVERY_8_HOURS"] = "0 0-23/8 * * *";
  ConstantExpressions2["EVERY_9_HOURS"] = "0 0-23/9 * * *";
  ConstantExpressions2["EVERY_10_HOURS"] = "0 0-23/10 * * *";
  ConstantExpressions2["EVERY_11_HOURS"] = "0 0-23/11 * * *";
  ConstantExpressions2["EVERY_12_HOURS"] = "0 0-23/12 * * *";
  ConstantExpressions2["EVERY_DAY_AT_1AM"] = "0 01 * * *";
  ConstantExpressions2["EVERY_DAY_AT_2AM"] = "0 02 * * *";
  ConstantExpressions2["EVERY_DAY_AT_3AM"] = "0 03 * * *";
  ConstantExpressions2["EVERY_DAY_AT_4AM"] = "0 04 * * *";
  ConstantExpressions2["EVERY_DAY_AT_5AM"] = "0 05 * * *";
  ConstantExpressions2["EVERY_DAY_AT_6AM"] = "0 06 * * *";
  ConstantExpressions2["EVERY_DAY_AT_7AM"] = "0 07 * * *";
  ConstantExpressions2["EVERY_DAY_AT_8AM"] = "0 08 * * *";
  ConstantExpressions2["EVERY_DAY_AT_9AM"] = "0 09 * * *";
  ConstantExpressions2["EVERY_DAY_AT_10AM"] = "0 10 * * *";
  ConstantExpressions2["EVERY_DAY_AT_11AM"] = "0 11 * * *";
  ConstantExpressions2["EVERY_DAY_AT_NOON"] = "0 12 * * *";
  ConstantExpressions2["EVERY_DAY_AT_1PM"] = "0 13 * * *";
  ConstantExpressions2["EVERY_DAY_AT_2PM"] = "0 14 * * *";
  ConstantExpressions2["EVERY_DAY_AT_3PM"] = "0 15 * * *";
  ConstantExpressions2["EVERY_DAY_AT_4PM"] = "0 16 * * *";
  ConstantExpressions2["EVERY_DAY_AT_5PM"] = "0 17 * * *";
  ConstantExpressions2["EVERY_DAY_AT_6PM"] = "0 18 * * *";
  ConstantExpressions2["EVERY_DAY_AT_7PM"] = "0 19 * * *";
  ConstantExpressions2["EVERY_DAY_AT_8PM"] = "0 20 * * *";
  ConstantExpressions2["EVERY_DAY_AT_9PM"] = "0 21 * * *";
  ConstantExpressions2["EVERY_DAY_AT_10PM"] = "0 22 * * *";
  ConstantExpressions2["EVERY_DAY_AT_11PM"] = "0 23 * * *";
  ConstantExpressions2["EVERY_DAY_AT_MIDNIGHT"] = "0 0 * * *";
  ConstantExpressions2["EVERY_WEEK"] = "0 0 * * 0";
  ConstantExpressions2["EVERY_WEEKDAY"] = "0 0 * * 1-5";
  ConstantExpressions2["EVERY_WEEKEND"] = "0 0 * * 6,0";
  ConstantExpressions2["EVERY_1ST_DAY_OF_MONTH_AT_MIDNIGHT"] = "0 0 1 * *";
  ConstantExpressions2["EVERY_1ST_DAY_OF_MONTH_AT_NOON"] = "0 12 1 * *";
  ConstantExpressions2["EVERY_2ND_HOUR"] = "0 */2 * * *";
  ConstantExpressions2["EVERY_2ND_HOUR_FROM_1AM_THROUGH_11PM"] = "0 1-23/2 * * *";
  ConstantExpressions2["EVERY_2ND_MONTH"] = "0 0 1 */2 *";
  ConstantExpressions2["EVERY_QUARTER"] = "0 0 1 */3 *";
  ConstantExpressions2["EVERY_6_MONTHS"] = "0 0 1 */6 *";
  ConstantExpressions2["EVERY_YEAR"] = "0 0 1 1 *";
  ConstantExpressions2["EVERY_30_MINUTES_BETWEEN_9AM_AND_5PM"] = "0 */30 9-17 * * *";
  ConstantExpressions2["EVERY_30_MINUTES_BETWEEN_9AM_AND_6PM"] = "0 */30 9-18 * * *";
  ConstantExpressions2["EVERY_30_MINUTES_BETWEEN_10AM_AND_7PM"] = "0 */30 10-19 * * *";
  return ConstantExpressions2;
})(ConstantExpressions || {});
var FunctionExpressions = {
  everySeconds(seconds = 1) {
    return `*/${seconds} * * * * *`;
  },
  everyMinutes(minutes = 1) {
    return `0 */${minutes} * * * *`;
  },
  everyHours(hours = 1) {
    return `0 0-23/${hours} * * *`;
  },
  everyHoursAt(hours, minutes = 0) {
    return `${minutes} 0-23/${hours} * * *`;
  },
  everyDayAt(time = "00:00") {
    const [hours, minutes] = time.split(":");
    return `${minutes} ${hours} * * *`;
  },
  everyWeekOn(day, time = "00:00") {
    const [hours, minutes] = time.split(":");
    return `${minutes} ${hours} * * ${day}`;
  },
  everyWeekdayAt(time = "00:00") {
    const [hours, minutes] = time.split(":");
    return `${minutes} ${hours} * * 1-5`;
  },
  everyWeekendAt(time = "00:00") {
    const [hours, minutes] = time.split(":");
    return `${minutes} ${hours} * * 6,0`;
  },
  everySecond() {
    return "* * * * * *";
  },
  everyMinute() {
    return "*/1 * * * *";
  },
  hourly() {
    return "0 0-23/1 * * *";
  },
  daily() {
    return "0 0 * * *";
  },
  everyWeekday() {
    return "0 0 * * 1-5";
  },
  everyWeekend() {
    return "0 0 * * 6,0";
  },
  weekly() {
    return "0 0 * * 0";
  },
  monthly() {
    return "0 0 1 * *";
  },
  everyQuarter() {
    return "0 0 1 */3 *";
  },
  yearly() {
    return "0 0 1 1 *";
  }
};
var Patterns = {
  ...FunctionExpressions,
  ...Days,
  ...ConstantExpressions
};
var cron = ({
  pattern,
  name,
  run,
  ...options
}) => (app) => {
  if (!pattern)
    throw new Error("pattern is required");
  if (!name)
    throw new Error("name is required");
  return app.state((store) => {
    const prevCron = app.singleton.store?.cron ?? {};
    return {
      ...store,
      cron: {
        ...prevCron,
        [name]: new Cron(pattern, options, () => run(app.singleton.store))
      }
    };
  });
};
var index_default = cron;

// src/infrastructure/http/server.ts
var mainServer = new Elysia().use(cors()).onRequest(({ request, status: status2 }) => {
  console.log(`[${new Date().toISOString()}] ${request.method} ${request.url}`);
}).use(animeRoutes).use(index_default({
  name: "clearCache",
  pattern: Patterns.EVERY_5_MINUTES,
  async run(store) {
    if (Boolean((await SQLITE`SELECT EXISTS(SELECT 1 FROM cache)`.values())[0][0])) {
      await SQLITE`DELETE FROM cache WHERE createdAt <= datetime('now', '-5 minutes')`;
    }
  }
})).listen({ port: 3000, hostname: "0.0.0.0" });
console.log(`Server running at http://localhost:3000`);

// src/main.ts
import os from "node:os";

// node_modules/engine.io-client/build/esm-debug/transports/polling-xhr.node.js
var XMLHttpRequestModule = __toESM(require_XMLHttpRequest(), 1);

// node_modules/engine.io-parser/build/esm/commons.js
var PACKET_TYPES = Object.create(null);
PACKET_TYPES["open"] = "0";
PACKET_TYPES["close"] = "1";
PACKET_TYPES["ping"] = "2";
PACKET_TYPES["pong"] = "3";
PACKET_TYPES["message"] = "4";
PACKET_TYPES["upgrade"] = "5";
PACKET_TYPES["noop"] = "6";
var PACKET_TYPES_REVERSE = Object.create(null);
Object.keys(PACKET_TYPES).forEach((key) => {
  PACKET_TYPES_REVERSE[PACKET_TYPES[key]] = key;
});
var ERROR_PACKET = { type: "error", data: "parser error" };

// node_modules/engine.io-parser/build/esm/encodePacket.js
var encodePacket = ({ type, data }, supportsBinary, callback) => {
  if (data instanceof ArrayBuffer || ArrayBuffer.isView(data)) {
    return callback(supportsBinary ? data : "b" + toBuffer(data, true).toString("base64"));
  }
  return callback(PACKET_TYPES[type] + (data || ""));
};
var toBuffer = (data, forceBufferConversion) => {
  if (Buffer.isBuffer(data) || data instanceof Uint8Array && !forceBufferConversion) {
    return data;
  } else if (data instanceof ArrayBuffer) {
    return Buffer.from(data);
  } else {
    return Buffer.from(data.buffer, data.byteOffset, data.byteLength);
  }
};
var TEXT_ENCODER;
function encodePacketToBinary(packet, callback) {
  if (packet.data instanceof ArrayBuffer || ArrayBuffer.isView(packet.data)) {
    return callback(toBuffer(packet.data, false));
  }
  encodePacket(packet, true, (encoded) => {
    if (!TEXT_ENCODER) {
      TEXT_ENCODER = new TextEncoder;
    }
    callback(TEXT_ENCODER.encode(encoded));
  });
}

// node_modules/engine.io-parser/build/esm/decodePacket.js
var decodePacket = (encodedPacket, binaryType) => {
  if (typeof encodedPacket !== "string") {
    return {
      type: "message",
      data: mapBinary(encodedPacket, binaryType)
    };
  }
  const type = encodedPacket.charAt(0);
  if (type === "b") {
    const buffer = Buffer.from(encodedPacket.substring(1), "base64");
    return {
      type: "message",
      data: mapBinary(buffer, binaryType)
    };
  }
  if (!PACKET_TYPES_REVERSE[type]) {
    return ERROR_PACKET;
  }
  return encodedPacket.length > 1 ? {
    type: PACKET_TYPES_REVERSE[type],
    data: encodedPacket.substring(1)
  } : {
    type: PACKET_TYPES_REVERSE[type]
  };
};
var mapBinary = (data, binaryType) => {
  switch (binaryType) {
    case "arraybuffer":
      if (data instanceof ArrayBuffer) {
        return data;
      } else if (Buffer.isBuffer(data)) {
        return data.buffer.slice(data.byteOffset, data.byteOffset + data.byteLength);
      } else {
        return data.buffer;
      }
    case "nodebuffer":
    default:
      if (Buffer.isBuffer(data)) {
        return data;
      } else {
        return Buffer.from(data);
      }
  }
};

// node_modules/engine.io-parser/build/esm/index.js
var SEPARATOR = String.fromCharCode(30);
var encodePayload = (packets, callback) => {
  const length = packets.length;
  const encodedPackets = new Array(length);
  let count = 0;
  packets.forEach((packet, i) => {
    encodePacket(packet, false, (encodedPacket) => {
      encodedPackets[i] = encodedPacket;
      if (++count === length) {
        callback(encodedPackets.join(SEPARATOR));
      }
    });
  });
};
var decodePayload = (encodedPayload, binaryType) => {
  const encodedPackets = encodedPayload.split(SEPARATOR);
  const packets = [];
  for (let i = 0;i < encodedPackets.length; i++) {
    const decodedPacket = decodePacket(encodedPackets[i], binaryType);
    packets.push(decodedPacket);
    if (decodedPacket.type === "error") {
      break;
    }
  }
  return packets;
};
function createPacketEncoderStream() {
  return new TransformStream({
    transform(packet, controller) {
      encodePacketToBinary(packet, (encodedPacket) => {
        const payloadLength = encodedPacket.length;
        let header;
        if (payloadLength < 126) {
          header = new Uint8Array(1);
          new DataView(header.buffer).setUint8(0, payloadLength);
        } else if (payloadLength < 65536) {
          header = new Uint8Array(3);
          const view = new DataView(header.buffer);
          view.setUint8(0, 126);
          view.setUint16(1, payloadLength);
        } else {
          header = new Uint8Array(9);
          const view = new DataView(header.buffer);
          view.setUint8(0, 127);
          view.setBigUint64(1, BigInt(payloadLength));
        }
        if (packet.data && typeof packet.data !== "string") {
          header[0] |= 128;
        }
        controller.enqueue(header);
        controller.enqueue(encodedPacket);
      });
    }
  });
}
var TEXT_DECODER;
function totalLength(chunks) {
  return chunks.reduce((acc, chunk) => acc + chunk.length, 0);
}
function concatChunks(chunks, size) {
  if (chunks[0].length === size) {
    return chunks.shift();
  }
  const buffer = new Uint8Array(size);
  let j = 0;
  for (let i = 0;i < size; i++) {
    buffer[i] = chunks[0][j++];
    if (j === chunks[0].length) {
      chunks.shift();
      j = 0;
    }
  }
  if (chunks.length && j < chunks[0].length) {
    chunks[0] = chunks[0].slice(j);
  }
  return buffer;
}
function createPacketDecoderStream(maxPayload, binaryType) {
  if (!TEXT_DECODER) {
    TEXT_DECODER = new TextDecoder;
  }
  const chunks = [];
  let state = 0;
  let expectedLength = -1;
  let isBinary = false;
  return new TransformStream({
    transform(chunk, controller) {
      chunks.push(chunk);
      while (true) {
        if (state === 0) {
          if (totalLength(chunks) < 1) {
            break;
          }
          const header = concatChunks(chunks, 1);
          isBinary = (header[0] & 128) === 128;
          expectedLength = header[0] & 127;
          if (expectedLength < 126) {
            state = 3;
          } else if (expectedLength === 126) {
            state = 1;
          } else {
            state = 2;
          }
        } else if (state === 1) {
          if (totalLength(chunks) < 2) {
            break;
          }
          const headerArray = concatChunks(chunks, 2);
          expectedLength = new DataView(headerArray.buffer, headerArray.byteOffset, headerArray.length).getUint16(0);
          state = 3;
        } else if (state === 2) {
          if (totalLength(chunks) < 8) {
            break;
          }
          const headerArray = concatChunks(chunks, 8);
          const view = new DataView(headerArray.buffer, headerArray.byteOffset, headerArray.length);
          const n = view.getUint32(0);
          if (n > Math.pow(2, 53 - 32) - 1) {
            controller.enqueue(ERROR_PACKET);
            break;
          }
          expectedLength = n * Math.pow(2, 32) + view.getUint32(4);
          state = 3;
        } else {
          if (totalLength(chunks) < expectedLength) {
            break;
          }
          const data = concatChunks(chunks, expectedLength);
          controller.enqueue(decodePacket(isBinary ? data : TEXT_DECODER.decode(data), binaryType));
          state = 0;
        }
        if (expectedLength === 0 || expectedLength > maxPayload) {
          controller.enqueue(ERROR_PACKET);
          break;
        }
      }
    }
  });
}
var protocol = 4;

// node_modules/@socket.io/component-emitter/lib/cjs/index.js
var $Emitter = Emitter;
function Emitter(obj) {
  if (obj)
    return mixin(obj);
}
function mixin(obj) {
  for (var key in Emitter.prototype) {
    obj[key] = Emitter.prototype[key];
  }
  return obj;
}
Emitter.prototype.on = Emitter.prototype.addEventListener = function(event, fn) {
  this._callbacks = this._callbacks || {};
  (this._callbacks["$" + event] = this._callbacks["$" + event] || []).push(fn);
  return this;
};
Emitter.prototype.once = function(event, fn) {
  function on() {
    this.off(event, on);
    fn.apply(this, arguments);
  }
  on.fn = fn;
  this.on(event, on);
  return this;
};
Emitter.prototype.off = Emitter.prototype.removeListener = Emitter.prototype.removeAllListeners = Emitter.prototype.removeEventListener = function(event, fn) {
  this._callbacks = this._callbacks || {};
  if (arguments.length == 0) {
    this._callbacks = {};
    return this;
  }
  var callbacks = this._callbacks["$" + event];
  if (!callbacks)
    return this;
  if (arguments.length == 1) {
    delete this._callbacks["$" + event];
    return this;
  }
  var cb;
  for (var i = 0;i < callbacks.length; i++) {
    cb = callbacks[i];
    if (cb === fn || cb.fn === fn) {
      callbacks.splice(i, 1);
      break;
    }
  }
  if (callbacks.length === 0) {
    delete this._callbacks["$" + event];
  }
  return this;
};
Emitter.prototype.emit = function(event) {
  this._callbacks = this._callbacks || {};
  var args = new Array(arguments.length - 1), callbacks = this._callbacks["$" + event];
  for (var i = 1;i < arguments.length; i++) {
    args[i - 1] = arguments[i];
  }
  if (callbacks) {
    callbacks = callbacks.slice(0);
    for (var i = 0, len = callbacks.length;i < len; ++i) {
      callbacks[i].apply(this, args);
    }
  }
  return this;
};
Emitter.prototype.emitReserved = Emitter.prototype.emit;
Emitter.prototype.listeners = function(event) {
  this._callbacks = this._callbacks || {};
  return this._callbacks["$" + event] || [];
};
Emitter.prototype.hasListeners = function(event) {
  return !!this.listeners(event).length;
};

// node_modules/engine.io-client/build/esm-debug/globals.node.js
var nextTick = process.nextTick;
var globalThisShim = global;
var defaultBinaryType = "nodebuffer";
function createCookieJar2() {
  return new CookieJar;
}
function parse3(setCookieString) {
  const parts = setCookieString.split("; ");
  const i = parts[0].indexOf("=");
  if (i === -1) {
    return;
  }
  const name = parts[0].substring(0, i).trim();
  if (!name.length) {
    return;
  }
  let value = parts[0].substring(i + 1).trim();
  if (value.charCodeAt(0) === 34) {
    value = value.slice(1, -1);
  }
  const cookie = {
    name,
    value
  };
  for (let j = 1;j < parts.length; j++) {
    const subParts = parts[j].split("=");
    if (subParts.length !== 2) {
      continue;
    }
    const key = subParts[0].trim();
    const value2 = subParts[1].trim();
    switch (key) {
      case "Expires":
        cookie.expires = new Date(value2);
        break;
      case "Max-Age":
        const expiration = new Date;
        expiration.setUTCSeconds(expiration.getUTCSeconds() + parseInt(value2, 10));
        cookie.expires = expiration;
        break;
      default:
    }
  }
  return cookie;
}

class CookieJar {
  constructor() {
    this._cookies = new Map;
  }
  parseCookies(values) {
    if (!values) {
      return;
    }
    values.forEach((value) => {
      const parsed = parse3(value);
      if (parsed) {
        this._cookies.set(parsed.name, parsed);
      }
    });
  }
  get cookies() {
    const now = Date.now();
    this._cookies.forEach((cookie, name) => {
      var _a2;
      if (((_a2 = cookie.expires) === null || _a2 === undefined ? undefined : _a2.getTime()) < now) {
        this._cookies.delete(name);
      }
    });
    return this._cookies.entries();
  }
  addCookies(xhr) {
    const cookies = [];
    for (const [name, cookie] of this.cookies) {
      cookies.push(`${name}=${cookie.value}`);
    }
    if (cookies.length) {
      xhr.setDisableHeaderCheck(true);
      xhr.setRequestHeader("cookie", cookies.join("; "));
    }
  }
  appendCookies(headers) {
    for (const [name, cookie] of this.cookies) {
      headers.append("cookie", `${name}=${cookie.value}`);
    }
  }
}

// node_modules/engine.io-client/build/esm-debug/util.js
function pick(obj, ...attr) {
  return attr.reduce((acc, k) => {
    if (obj.hasOwnProperty(k)) {
      acc[k] = obj[k];
    }
    return acc;
  }, {});
}
var NATIVE_SET_TIMEOUT = globalThisShim.setTimeout;
var NATIVE_CLEAR_TIMEOUT = globalThisShim.clearTimeout;
function installTimerFunctions(obj, opts) {
  if (opts.useNativeTimers) {
    obj.setTimeoutFn = NATIVE_SET_TIMEOUT.bind(globalThisShim);
    obj.clearTimeoutFn = NATIVE_CLEAR_TIMEOUT.bind(globalThisShim);
  } else {
    obj.setTimeoutFn = globalThisShim.setTimeout.bind(globalThisShim);
    obj.clearTimeoutFn = globalThisShim.clearTimeout.bind(globalThisShim);
  }
}
var BASE64_OVERHEAD = 1.33;
function byteLength(obj) {
  if (typeof obj === "string") {
    return utf8Length(obj);
  }
  return Math.ceil((obj.byteLength || obj.size) * BASE64_OVERHEAD);
}
function utf8Length(str) {
  let c = 0, length = 0;
  for (let i = 0, l = str.length;i < l; i++) {
    c = str.charCodeAt(i);
    if (c < 128) {
      length += 1;
    } else if (c < 2048) {
      length += 2;
    } else if (c < 55296 || c >= 57344) {
      length += 3;
    } else {
      i++;
      length += 4;
    }
  }
  return length;
}
function randomString() {
  return Date.now().toString(36).substring(3) + Math.random().toString(36).substring(2, 5);
}

// node_modules/engine.io-client/build/esm-debug/contrib/parseqs.js
function encode2(obj) {
  let str = "";
  for (let i in obj) {
    if (obj.hasOwnProperty(i)) {
      if (str.length)
        str += "&";
      str += encodeURIComponent(i) + "=" + encodeURIComponent(obj[i]);
    }
  }
  return str;
}
function decode4(qs) {
  let qry = {};
  let pairs = qs.split("&");
  for (let i = 0, l = pairs.length;i < l; i++) {
    let pair = pairs[i].split("=");
    qry[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
  }
  return qry;
}

// node_modules/engine.io-client/build/esm-debug/transport.js
var import_debug = __toESM(require_src(), 1);
var debug = import_debug.default("engine.io-client:transport");

class TransportError extends Error {
  constructor(reason, description, context) {
    super(reason);
    this.description = description;
    this.context = context;
    this.type = "TransportError";
  }
}

class Transport extends $Emitter {
  constructor(opts) {
    super();
    this.writable = false;
    installTimerFunctions(this, opts);
    this.opts = opts;
    this.query = opts.query;
    this.socket = opts.socket;
    this.supportsBinary = !opts.forceBase64;
  }
  onError(reason, description, context) {
    super.emitReserved("error", new TransportError(reason, description, context));
    return this;
  }
  open() {
    this.readyState = "opening";
    this.doOpen();
    return this;
  }
  close() {
    if (this.readyState === "opening" || this.readyState === "open") {
      this.doClose();
      this.onClose();
    }
    return this;
  }
  send(packets) {
    if (this.readyState === "open") {
      this.write(packets);
    } else {
      debug("transport is not open, discarding packets");
    }
  }
  onOpen() {
    this.readyState = "open";
    this.writable = true;
    super.emitReserved("open");
  }
  onData(data) {
    const packet = decodePacket(data, this.socket.binaryType);
    this.onPacket(packet);
  }
  onPacket(packet) {
    super.emitReserved("packet", packet);
  }
  onClose(details) {
    this.readyState = "closed";
    super.emitReserved("close", details);
  }
  pause(onPause) {}
  createUri(schema, query = {}) {
    return schema + "://" + this._hostname() + this._port() + this.opts.path + this._query(query);
  }
  _hostname() {
    const hostname = this.opts.hostname;
    return hostname.indexOf(":") === -1 ? hostname : "[" + hostname + "]";
  }
  _port() {
    if (this.opts.port && (this.opts.secure && Number(this.opts.port !== 443) || !this.opts.secure && Number(this.opts.port) !== 80)) {
      return ":" + this.opts.port;
    } else {
      return "";
    }
  }
  _query(query) {
    const encodedQuery = encode2(query);
    return encodedQuery.length ? "?" + encodedQuery : "";
  }
}

// node_modules/engine.io-client/build/esm-debug/transports/polling.js
var import_debug2 = __toESM(require_src(), 1);
var debug2 = import_debug2.default("engine.io-client:polling");

class Polling extends Transport {
  constructor() {
    super(...arguments);
    this._polling = false;
  }
  get name() {
    return "polling";
  }
  doOpen() {
    this._poll();
  }
  pause(onPause) {
    this.readyState = "pausing";
    const pause = () => {
      debug2("paused");
      this.readyState = "paused";
      onPause();
    };
    if (this._polling || !this.writable) {
      let total = 0;
      if (this._polling) {
        debug2("we are currently polling - waiting to pause");
        total++;
        this.once("pollComplete", function() {
          debug2("pre-pause polling complete");
          --total || pause();
        });
      }
      if (!this.writable) {
        debug2("we are currently writing - waiting to pause");
        total++;
        this.once("drain", function() {
          debug2("pre-pause writing complete");
          --total || pause();
        });
      }
    } else {
      pause();
    }
  }
  _poll() {
    debug2("polling");
    this._polling = true;
    this.doPoll();
    this.emitReserved("poll");
  }
  onData(data) {
    debug2("polling got data %s", data);
    const callback = (packet) => {
      if (this.readyState === "opening" && packet.type === "open") {
        this.onOpen();
      }
      if (packet.type === "close") {
        this.onClose({ description: "transport closed by the server" });
        return false;
      }
      this.onPacket(packet);
    };
    decodePayload(data, this.socket.binaryType).forEach(callback);
    if (this.readyState !== "closed") {
      this._polling = false;
      this.emitReserved("pollComplete");
      if (this.readyState === "open") {
        this._poll();
      } else {
        debug2('ignoring poll - transport state "%s"', this.readyState);
      }
    }
  }
  doClose() {
    const close = () => {
      debug2("writing close packet");
      this.write([{ type: "close" }]);
    };
    if (this.readyState === "open") {
      debug2("transport open - closing");
      close();
    } else {
      debug2("transport not open - deferring close");
      this.once("open", close);
    }
  }
  write(packets) {
    this.writable = false;
    encodePayload(packets, (data) => {
      this.doWrite(data, () => {
        this.writable = true;
        this.emitReserved("drain");
      });
    });
  }
  uri() {
    const schema = this.opts.secure ? "https" : "http";
    const query = this.query || {};
    if (this.opts.timestampRequests !== false) {
      query[this.opts.timestampParam] = randomString();
    }
    if (!this.supportsBinary && !query.sid) {
      query.b64 = 1;
    }
    return this.createUri(schema, query);
  }
}

// node_modules/engine.io-client/build/esm-debug/contrib/has-cors.js
var value = false;
try {
  value = typeof XMLHttpRequest !== "undefined" && "withCredentials" in new XMLHttpRequest;
} catch (err) {}
var hasCORS = value;

// node_modules/engine.io-client/build/esm-debug/transports/polling-xhr.js
var import_debug3 = __toESM(require_src(), 1);
var debug3 = import_debug3.default("engine.io-client:polling");
function empty() {}

class BaseXHR extends Polling {
  constructor(opts) {
    super(opts);
    if (typeof location !== "undefined") {
      const isSSL = location.protocol === "https:";
      let port = location.port;
      if (!port) {
        port = isSSL ? "443" : "80";
      }
      this.xd = typeof location !== "undefined" && opts.hostname !== location.hostname || port !== opts.port;
    }
  }
  doWrite(data, fn) {
    const req = this.request({
      method: "POST",
      data
    });
    req.on("success", fn);
    req.on("error", (xhrStatus, context) => {
      this.onError("xhr post error", xhrStatus, context);
    });
  }
  doPoll() {
    debug3("xhr poll");
    const req = this.request();
    req.on("data", this.onData.bind(this));
    req.on("error", (xhrStatus, context) => {
      this.onError("xhr poll error", xhrStatus, context);
    });
    this.pollXhr = req;
  }
}

class Request2 extends $Emitter {
  constructor(createRequest, uri2, opts) {
    super();
    this.createRequest = createRequest;
    installTimerFunctions(this, opts);
    this._opts = opts;
    this._method = opts.method || "GET";
    this._uri = uri2;
    this._data = opts.data !== undefined ? opts.data : null;
    this._create();
  }
  _create() {
    var _a2;
    const opts = pick(this._opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
    opts.xdomain = !!this._opts.xd;
    const xhr = this._xhr = this.createRequest(opts);
    try {
      debug3("xhr open %s: %s", this._method, this._uri);
      xhr.open(this._method, this._uri, true);
      try {
        if (this._opts.extraHeaders) {
          xhr.setDisableHeaderCheck && xhr.setDisableHeaderCheck(true);
          for (let i in this._opts.extraHeaders) {
            if (this._opts.extraHeaders.hasOwnProperty(i)) {
              xhr.setRequestHeader(i, this._opts.extraHeaders[i]);
            }
          }
        }
      } catch (e) {}
      if (this._method === "POST") {
        try {
          xhr.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
        } catch (e) {}
      }
      try {
        xhr.setRequestHeader("Accept", "*/*");
      } catch (e) {}
      (_a2 = this._opts.cookieJar) === null || _a2 === undefined || _a2.addCookies(xhr);
      if ("withCredentials" in xhr) {
        xhr.withCredentials = this._opts.withCredentials;
      }
      if (this._opts.requestTimeout) {
        xhr.timeout = this._opts.requestTimeout;
      }
      xhr.onreadystatechange = () => {
        var _a3;
        if (xhr.readyState === 3) {
          (_a3 = this._opts.cookieJar) === null || _a3 === undefined || _a3.parseCookies(xhr.getResponseHeader("set-cookie"));
        }
        if (xhr.readyState !== 4)
          return;
        if (xhr.status === 200 || xhr.status === 1223) {
          this._onLoad();
        } else {
          this.setTimeoutFn(() => {
            this._onError(typeof xhr.status === "number" ? xhr.status : 0);
          }, 0);
        }
      };
      debug3("xhr data %s", this._data);
      xhr.send(this._data);
    } catch (e) {
      this.setTimeoutFn(() => {
        this._onError(e);
      }, 0);
      return;
    }
    if (typeof document !== "undefined") {
      this._index = Request2.requestsCount++;
      Request2.requests[this._index] = this;
    }
  }
  _onError(err) {
    this.emitReserved("error", err, this._xhr);
    this._cleanup(true);
  }
  _cleanup(fromError) {
    if (typeof this._xhr === "undefined" || this._xhr === null) {
      return;
    }
    this._xhr.onreadystatechange = empty;
    if (fromError) {
      try {
        this._xhr.abort();
      } catch (e) {}
    }
    if (typeof document !== "undefined") {
      delete Request2.requests[this._index];
    }
    this._xhr = null;
  }
  _onLoad() {
    const data = this._xhr.responseText;
    if (data !== null) {
      this.emitReserved("data", data);
      this.emitReserved("success");
      this._cleanup();
    }
  }
  abort() {
    this._cleanup();
  }
}
Request2.requestsCount = 0;
Request2.requests = {};
if (typeof document !== "undefined") {
  if (typeof attachEvent === "function") {
    attachEvent("onunload", unloadHandler);
  } else if (typeof addEventListener === "function") {
    const terminationEvent = "onpagehide" in globalThisShim ? "pagehide" : "unload";
    addEventListener(terminationEvent, unloadHandler, false);
  }
}
function unloadHandler() {
  for (let i in Request2.requests) {
    if (Request2.requests.hasOwnProperty(i)) {
      Request2.requests[i].abort();
    }
  }
}
var hasXHR2 = function() {
  const xhr = newRequest({
    xdomain: false
  });
  return xhr && xhr.responseType !== null;
}();
function newRequest(opts) {
  const xdomain = opts.xdomain;
  try {
    if (typeof XMLHttpRequest !== "undefined" && (!xdomain || hasCORS)) {
      return new XMLHttpRequest;
    }
  } catch (e) {}
  if (!xdomain) {
    try {
      return new globalThisShim[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
    } catch (e) {}
  }
}

// node_modules/engine.io-client/build/esm-debug/transports/polling-xhr.node.js
var XMLHttpRequest2 = XMLHttpRequestModule.default || XMLHttpRequestModule;

class XHR extends BaseXHR {
  request(opts = {}) {
    var _a2;
    Object.assign(opts, { xd: this.xd, cookieJar: (_a2 = this.socket) === null || _a2 === undefined ? undefined : _a2._cookieJar }, this.opts);
    return new Request2((opts2) => new XMLHttpRequest2(opts2), this.uri(), opts);
  }
}

// node_modules/ws/wrapper.mjs
var import_stream = __toESM(require_stream(), 1);
var import_receiver = __toESM(require_receiver(), 1);
var import_sender = __toESM(require_sender(), 1);
var import_websocket = __toESM(require_websocket(), 1);
var import_websocket_server = __toESM(require_websocket_server(), 1);

// node_modules/engine.io-client/build/esm-debug/transports/websocket.js
var import_debug4 = __toESM(require_src(), 1);
var debug4 = import_debug4.default("engine.io-client:websocket");
var isReactNative = typeof navigator !== "undefined" && typeof navigator.product === "string" && navigator.product.toLowerCase() === "reactnative";

class BaseWS extends Transport {
  get name() {
    return "websocket";
  }
  doOpen() {
    const uri2 = this.uri();
    const protocols = this.opts.protocols;
    const opts = isReactNative ? {} : pick(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
    if (this.opts.extraHeaders) {
      opts.headers = this.opts.extraHeaders;
    }
    try {
      this.ws = this.createSocket(uri2, protocols, opts);
    } catch (err) {
      return this.emitReserved("error", err);
    }
    this.ws.binaryType = this.socket.binaryType;
    this.addEventListeners();
  }
  addEventListeners() {
    this.ws.onopen = () => {
      if (this.opts.autoUnref) {
        this.ws._socket.unref();
      }
      this.onOpen();
    };
    this.ws.onclose = (closeEvent) => this.onClose({
      description: "websocket connection closed",
      context: closeEvent
    });
    this.ws.onmessage = (ev) => this.onData(ev.data);
    this.ws.onerror = (e) => this.onError("websocket error", e);
  }
  write(packets) {
    this.writable = false;
    for (let i = 0;i < packets.length; i++) {
      const packet = packets[i];
      const lastPacket = i === packets.length - 1;
      encodePacket(packet, this.supportsBinary, (data) => {
        try {
          this.doWrite(packet, data);
        } catch (e) {
          debug4("websocket closed before onclose event");
        }
        if (lastPacket) {
          nextTick(() => {
            this.writable = true;
            this.emitReserved("drain");
          }, this.setTimeoutFn);
        }
      });
    }
  }
  doClose() {
    if (typeof this.ws !== "undefined") {
      this.ws.onerror = () => {};
      this.ws.close();
      this.ws = null;
    }
  }
  uri() {
    const schema = this.opts.secure ? "wss" : "ws";
    const query = this.query || {};
    if (this.opts.timestampRequests) {
      query[this.opts.timestampParam] = randomString();
    }
    if (!this.supportsBinary) {
      query.b64 = 1;
    }
    return this.createUri(schema, query);
  }
}
var WebSocketCtor = globalThisShim.WebSocket || globalThisShim.MozWebSocket;

// node_modules/engine.io-client/build/esm-debug/transports/websocket.node.js
class WS extends BaseWS {
  createSocket(uri2, protocols, opts) {
    var _a2;
    if ((_a2 = this.socket) === null || _a2 === undefined ? undefined : _a2._cookieJar) {
      opts.headers = opts.headers || {};
      opts.headers.cookie = typeof opts.headers.cookie === "string" ? [opts.headers.cookie] : opts.headers.cookie || [];
      for (const [name, cookie] of this.socket._cookieJar.cookies) {
        opts.headers.cookie.push(`${name}=${cookie.value}`);
      }
    }
    return new import_websocket.default(uri2, protocols, opts);
  }
  doWrite(packet, data) {
    const opts = {};
    if (packet.options) {
      opts.compress = packet.options.compress;
    }
    if (this.opts.perMessageDeflate) {
      const len = typeof data === "string" ? Buffer.byteLength(data) : data.length;
      if (len < this.opts.perMessageDeflate.threshold) {
        opts.compress = false;
      }
    }
    this.ws.send(data, opts);
  }
}

// node_modules/engine.io-client/build/esm-debug/transports/webtransport.js
var import_debug5 = __toESM(require_src(), 1);
var debug5 = import_debug5.default("engine.io-client:webtransport");

class WT extends Transport {
  get name() {
    return "webtransport";
  }
  doOpen() {
    try {
      this._transport = new WebTransport(this.createUri("https"), this.opts.transportOptions[this.name]);
    } catch (err) {
      return this.emitReserved("error", err);
    }
    this._transport.closed.then(() => {
      debug5("transport closed gracefully");
      this.onClose();
    }).catch((err) => {
      debug5("transport closed due to %s", err);
      this.onError("webtransport error", err);
    });
    this._transport.ready.then(() => {
      this._transport.createBidirectionalStream().then((stream) => {
        const decoderStream = createPacketDecoderStream(Number.MAX_SAFE_INTEGER, this.socket.binaryType);
        const reader = stream.readable.pipeThrough(decoderStream).getReader();
        const encoderStream = createPacketEncoderStream();
        encoderStream.readable.pipeTo(stream.writable);
        this._writer = encoderStream.writable.getWriter();
        const read = () => {
          reader.read().then(({ done, value: value2 }) => {
            if (done) {
              debug5("session is closed");
              return;
            }
            debug5("received chunk: %o", value2);
            this.onPacket(value2);
            read();
          }).catch((err) => {
            debug5("an error occurred while reading: %s", err);
          });
        };
        read();
        const packet = { type: "open" };
        if (this.query.sid) {
          packet.data = `{"sid":"${this.query.sid}"}`;
        }
        this._writer.write(packet).then(() => this.onOpen());
      });
    });
  }
  write(packets) {
    this.writable = false;
    for (let i = 0;i < packets.length; i++) {
      const packet = packets[i];
      const lastPacket = i === packets.length - 1;
      this._writer.write(packet).then(() => {
        if (lastPacket) {
          nextTick(() => {
            this.writable = true;
            this.emitReserved("drain");
          }, this.setTimeoutFn);
        }
      });
    }
  }
  doClose() {
    var _a2;
    (_a2 = this._transport) === null || _a2 === undefined || _a2.close();
  }
}

// node_modules/engine.io-client/build/esm-debug/transports/index.js
var transports = {
  websocket: WS,
  webtransport: WT,
  polling: XHR
};

// node_modules/engine.io-client/build/esm-debug/contrib/parseuri.js
var re = /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;
var parts = [
  "source",
  "protocol",
  "authority",
  "userInfo",
  "user",
  "password",
  "host",
  "port",
  "relative",
  "path",
  "directory",
  "file",
  "query",
  "anchor"
];
function parse4(str) {
  if (str.length > 8000) {
    throw "URI too long";
  }
  const src = str, b = str.indexOf("["), e = str.indexOf("]");
  if (b != -1 && e != -1) {
    str = str.substring(0, b) + str.substring(b, e).replace(/:/g, ";") + str.substring(e, str.length);
  }
  let m = re.exec(str || ""), uri2 = {}, i = 14;
  while (i--) {
    uri2[parts[i]] = m[i] || "";
  }
  if (b != -1 && e != -1) {
    uri2.source = src;
    uri2.host = uri2.host.substring(1, uri2.host.length - 1).replace(/;/g, ":");
    uri2.authority = uri2.authority.replace("[", "").replace("]", "").replace(/;/g, ":");
    uri2.ipv6uri = true;
  }
  uri2.pathNames = pathNames(uri2, uri2["path"]);
  uri2.queryKey = queryKey(uri2, uri2["query"]);
  return uri2;
}
function pathNames(obj, path3) {
  const regx = /\/{2,9}/g, names = path3.replace(regx, "/").split("/");
  if (path3.slice(0, 1) == "/" || path3.length === 0) {
    names.splice(0, 1);
  }
  if (path3.slice(-1) == "/") {
    names.splice(names.length - 1, 1);
  }
  return names;
}
function queryKey(uri2, query) {
  const data = {};
  query.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function($0, $1, $2) {
    if ($1) {
      data[$1] = $2;
    }
  });
  return data;
}

// node_modules/engine.io-client/build/esm-debug/socket.js
var import_debug6 = __toESM(require_src(), 1);
var debug6 = import_debug6.default("engine.io-client:socket");
var withEventListeners = typeof addEventListener === "function" && typeof removeEventListener === "function";
var OFFLINE_EVENT_LISTENERS = [];
if (withEventListeners) {
  addEventListener("offline", () => {
    debug6("closing %d connection(s) because the network was lost", OFFLINE_EVENT_LISTENERS.length);
    OFFLINE_EVENT_LISTENERS.forEach((listener) => listener());
  }, false);
}

class SocketWithoutUpgrade extends $Emitter {
  constructor(uri2, opts) {
    super();
    this.binaryType = defaultBinaryType;
    this.writeBuffer = [];
    this._prevBufferLen = 0;
    this._pingInterval = -1;
    this._pingTimeout = -1;
    this._maxPayload = -1;
    this._pingTimeoutTime = Infinity;
    if (uri2 && typeof uri2 === "object") {
      opts = uri2;
      uri2 = null;
    }
    if (uri2) {
      const parsedUri = parse4(uri2);
      opts.hostname = parsedUri.host;
      opts.secure = parsedUri.protocol === "https" || parsedUri.protocol === "wss";
      opts.port = parsedUri.port;
      if (parsedUri.query)
        opts.query = parsedUri.query;
    } else if (opts.host) {
      opts.hostname = parse4(opts.host).host;
    }
    installTimerFunctions(this, opts);
    this.secure = opts.secure != null ? opts.secure : typeof location !== "undefined" && location.protocol === "https:";
    if (opts.hostname && !opts.port) {
      opts.port = this.secure ? "443" : "80";
    }
    this.hostname = opts.hostname || (typeof location !== "undefined" ? location.hostname : "localhost");
    this.port = opts.port || (typeof location !== "undefined" && location.port ? location.port : this.secure ? "443" : "80");
    this.transports = [];
    this._transportsByName = {};
    opts.transports.forEach((t2) => {
      const transportName = t2.prototype.name;
      this.transports.push(transportName);
      this._transportsByName[transportName] = t2;
    });
    this.opts = Object.assign({
      path: "/engine.io",
      agent: false,
      withCredentials: false,
      upgrade: true,
      timestampParam: "t",
      rememberUpgrade: false,
      addTrailingSlash: true,
      rejectUnauthorized: true,
      perMessageDeflate: {
        threshold: 1024
      },
      transportOptions: {},
      closeOnBeforeunload: false
    }, opts);
    this.opts.path = this.opts.path.replace(/\/$/, "") + (this.opts.addTrailingSlash ? "/" : "");
    if (typeof this.opts.query === "string") {
      this.opts.query = decode4(this.opts.query);
    }
    if (withEventListeners) {
      if (this.opts.closeOnBeforeunload) {
        this._beforeunloadEventListener = () => {
          if (this.transport) {
            this.transport.removeAllListeners();
            this.transport.close();
          }
        };
        addEventListener("beforeunload", this._beforeunloadEventListener, false);
      }
      if (this.hostname !== "localhost") {
        debug6("adding listener for the 'offline' event");
        this._offlineEventListener = () => {
          this._onClose("transport close", {
            description: "network connection lost"
          });
        };
        OFFLINE_EVENT_LISTENERS.push(this._offlineEventListener);
      }
    }
    if (this.opts.withCredentials) {
      this._cookieJar = createCookieJar2();
    }
    this._open();
  }
  createTransport(name) {
    debug6('creating transport "%s"', name);
    const query = Object.assign({}, this.opts.query);
    query.EIO = protocol;
    query.transport = name;
    if (this.id)
      query.sid = this.id;
    const opts = Object.assign({}, this.opts, {
      query,
      socket: this,
      hostname: this.hostname,
      secure: this.secure,
      port: this.port
    }, this.opts.transportOptions[name]);
    debug6("options: %j", opts);
    return new this._transportsByName[name](opts);
  }
  _open() {
    if (this.transports.length === 0) {
      this.setTimeoutFn(() => {
        this.emitReserved("error", "No transports available");
      }, 0);
      return;
    }
    const transportName = this.opts.rememberUpgrade && SocketWithoutUpgrade.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1 ? "websocket" : this.transports[0];
    this.readyState = "opening";
    const transport = this.createTransport(transportName);
    transport.open();
    this.setTransport(transport);
  }
  setTransport(transport) {
    debug6("setting transport %s", transport.name);
    if (this.transport) {
      debug6("clearing existing transport %s", this.transport.name);
      this.transport.removeAllListeners();
    }
    this.transport = transport;
    transport.on("drain", this._onDrain.bind(this)).on("packet", this._onPacket.bind(this)).on("error", this._onError.bind(this)).on("close", (reason) => this._onClose("transport close", reason));
  }
  onOpen() {
    debug6("socket open");
    this.readyState = "open";
    SocketWithoutUpgrade.priorWebsocketSuccess = this.transport.name === "websocket";
    this.emitReserved("open");
    this.flush();
  }
  _onPacket(packet) {
    if (this.readyState === "opening" || this.readyState === "open" || this.readyState === "closing") {
      debug6('socket receive: type "%s", data "%s"', packet.type, packet.data);
      this.emitReserved("packet", packet);
      this.emitReserved("heartbeat");
      switch (packet.type) {
        case "open":
          this.onHandshake(JSON.parse(packet.data));
          break;
        case "ping":
          this._sendPacket("pong");
          this.emitReserved("ping");
          this.emitReserved("pong");
          this._resetPingTimeout();
          break;
        case "error":
          const err = new Error("server error");
          err.code = packet.data;
          this._onError(err);
          break;
        case "message":
          this.emitReserved("data", packet.data);
          this.emitReserved("message", packet.data);
          break;
      }
    } else {
      debug6('packet received with socket readyState "%s"', this.readyState);
    }
  }
  onHandshake(data) {
    this.emitReserved("handshake", data);
    this.id = data.sid;
    this.transport.query.sid = data.sid;
    this._pingInterval = data.pingInterval;
    this._pingTimeout = data.pingTimeout;
    this._maxPayload = data.maxPayload;
    this.onOpen();
    if (this.readyState === "closed")
      return;
    this._resetPingTimeout();
  }
  _resetPingTimeout() {
    this.clearTimeoutFn(this._pingTimeoutTimer);
    const delay = this._pingInterval + this._pingTimeout;
    this._pingTimeoutTime = Date.now() + delay;
    this._pingTimeoutTimer = this.setTimeoutFn(() => {
      this._onClose("ping timeout");
    }, delay);
    if (this.opts.autoUnref) {
      this._pingTimeoutTimer.unref();
    }
  }
  _onDrain() {
    this.writeBuffer.splice(0, this._prevBufferLen);
    this._prevBufferLen = 0;
    if (this.writeBuffer.length === 0) {
      this.emitReserved("drain");
    } else {
      this.flush();
    }
  }
  flush() {
    if (this.readyState !== "closed" && this.transport.writable && !this.upgrading && this.writeBuffer.length) {
      const packets = this._getWritablePackets();
      debug6("flushing %d packets in socket", packets.length);
      this.transport.send(packets);
      this._prevBufferLen = packets.length;
      this.emitReserved("flush");
    }
  }
  _getWritablePackets() {
    const shouldCheckPayloadSize = this._maxPayload && this.transport.name === "polling" && this.writeBuffer.length > 1;
    if (!shouldCheckPayloadSize) {
      return this.writeBuffer;
    }
    let payloadSize = 1;
    for (let i = 0;i < this.writeBuffer.length; i++) {
      const data = this.writeBuffer[i].data;
      if (data) {
        payloadSize += byteLength(data);
      }
      if (i > 0 && payloadSize > this._maxPayload) {
        debug6("only send %d out of %d packets", i, this.writeBuffer.length);
        return this.writeBuffer.slice(0, i);
      }
      payloadSize += 2;
    }
    debug6("payload size is %d (max: %d)", payloadSize, this._maxPayload);
    return this.writeBuffer;
  }
  _hasPingExpired() {
    if (!this._pingTimeoutTime)
      return true;
    const hasExpired = Date.now() > this._pingTimeoutTime;
    if (hasExpired) {
      debug6("throttled timer detected, scheduling connection close");
      this._pingTimeoutTime = 0;
      nextTick(() => {
        this._onClose("ping timeout");
      }, this.setTimeoutFn);
    }
    return hasExpired;
  }
  write(msg, options, fn) {
    this._sendPacket("message", msg, options, fn);
    return this;
  }
  send(msg, options, fn) {
    this._sendPacket("message", msg, options, fn);
    return this;
  }
  _sendPacket(type, data, options, fn) {
    if (typeof data === "function") {
      fn = data;
      data = undefined;
    }
    if (typeof options === "function") {
      fn = options;
      options = null;
    }
    if (this.readyState === "closing" || this.readyState === "closed") {
      return;
    }
    options = options || {};
    options.compress = options.compress !== false;
    const packet = {
      type,
      data,
      options
    };
    this.emitReserved("packetCreate", packet);
    this.writeBuffer.push(packet);
    if (fn)
      this.once("flush", fn);
    this.flush();
  }
  close() {
    const close = () => {
      this._onClose("forced close");
      debug6("socket closing - telling transport to close");
      this.transport.close();
    };
    const cleanupAndClose = () => {
      this.off("upgrade", cleanupAndClose);
      this.off("upgradeError", cleanupAndClose);
      close();
    };
    const waitForUpgrade = () => {
      this.once("upgrade", cleanupAndClose);
      this.once("upgradeError", cleanupAndClose);
    };
    if (this.readyState === "opening" || this.readyState === "open") {
      this.readyState = "closing";
      if (this.writeBuffer.length) {
        this.once("drain", () => {
          if (this.upgrading) {
            waitForUpgrade();
          } else {
            close();
          }
        });
      } else if (this.upgrading) {
        waitForUpgrade();
      } else {
        close();
      }
    }
    return this;
  }
  _onError(err) {
    debug6("socket error %j", err);
    SocketWithoutUpgrade.priorWebsocketSuccess = false;
    if (this.opts.tryAllTransports && this.transports.length > 1 && this.readyState === "opening") {
      debug6("trying next transport");
      this.transports.shift();
      return this._open();
    }
    this.emitReserved("error", err);
    this._onClose("transport error", err);
  }
  _onClose(reason, description) {
    if (this.readyState === "opening" || this.readyState === "open" || this.readyState === "closing") {
      debug6('socket close with reason: "%s"', reason);
      this.clearTimeoutFn(this._pingTimeoutTimer);
      this.transport.removeAllListeners("close");
      this.transport.close();
      this.transport.removeAllListeners();
      if (withEventListeners) {
        if (this._beforeunloadEventListener) {
          removeEventListener("beforeunload", this._beforeunloadEventListener, false);
        }
        if (this._offlineEventListener) {
          const i = OFFLINE_EVENT_LISTENERS.indexOf(this._offlineEventListener);
          if (i !== -1) {
            debug6("removing listener for the 'offline' event");
            OFFLINE_EVENT_LISTENERS.splice(i, 1);
          }
        }
      }
      this.readyState = "closed";
      this.id = null;
      this.emitReserved("close", reason, description);
      this.writeBuffer = [];
      this._prevBufferLen = 0;
    }
  }
}
SocketWithoutUpgrade.protocol = protocol;

class SocketWithUpgrade extends SocketWithoutUpgrade {
  constructor() {
    super(...arguments);
    this._upgrades = [];
  }
  onOpen() {
    super.onOpen();
    if (this.readyState === "open" && this.opts.upgrade) {
      debug6("starting upgrade probes");
      for (let i = 0;i < this._upgrades.length; i++) {
        this._probe(this._upgrades[i]);
      }
    }
  }
  _probe(name) {
    debug6('probing transport "%s"', name);
    let transport = this.createTransport(name);
    let failed = false;
    SocketWithoutUpgrade.priorWebsocketSuccess = false;
    const onTransportOpen = () => {
      if (failed)
        return;
      debug6('probe transport "%s" opened', name);
      transport.send([{ type: "ping", data: "probe" }]);
      transport.once("packet", (msg) => {
        if (failed)
          return;
        if (msg.type === "pong" && msg.data === "probe") {
          debug6('probe transport "%s" pong', name);
          this.upgrading = true;
          this.emitReserved("upgrading", transport);
          if (!transport)
            return;
          SocketWithoutUpgrade.priorWebsocketSuccess = transport.name === "websocket";
          debug6('pausing current transport "%s"', this.transport.name);
          this.transport.pause(() => {
            if (failed)
              return;
            if (this.readyState === "closed")
              return;
            debug6("changing transport and sending upgrade packet");
            cleanup();
            this.setTransport(transport);
            transport.send([{ type: "upgrade" }]);
            this.emitReserved("upgrade", transport);
            transport = null;
            this.upgrading = false;
            this.flush();
          });
        } else {
          debug6('probe transport "%s" failed', name);
          const err = new Error("probe error");
          err.transport = transport.name;
          this.emitReserved("upgradeError", err);
        }
      });
    };
    function freezeTransport() {
      if (failed)
        return;
      failed = true;
      cleanup();
      transport.close();
      transport = null;
    }
    const onerror = (err) => {
      const error = new Error("probe error: " + err);
      error.transport = transport.name;
      freezeTransport();
      debug6('probe transport "%s" failed because of error: %s', name, err);
      this.emitReserved("upgradeError", error);
    };
    function onTransportClose() {
      onerror("transport closed");
    }
    function onclose() {
      onerror("socket closed");
    }
    function onupgrade(to) {
      if (transport && to.name !== transport.name) {
        debug6('"%s" works - aborting "%s"', to.name, transport.name);
        freezeTransport();
      }
    }
    const cleanup = () => {
      transport.removeListener("open", onTransportOpen);
      transport.removeListener("error", onerror);
      transport.removeListener("close", onTransportClose);
      this.off("close", onclose);
      this.off("upgrading", onupgrade);
    };
    transport.once("open", onTransportOpen);
    transport.once("error", onerror);
    transport.once("close", onTransportClose);
    this.once("close", onclose);
    this.once("upgrading", onupgrade);
    if (this._upgrades.indexOf("webtransport") !== -1 && name !== "webtransport") {
      this.setTimeoutFn(() => {
        if (!failed) {
          transport.open();
        }
      }, 200);
    } else {
      transport.open();
    }
  }
  onHandshake(data) {
    this._upgrades = this._filterUpgrades(data.upgrades);
    super.onHandshake(data);
  }
  _filterUpgrades(upgrades) {
    const filteredUpgrades = [];
    for (let i = 0;i < upgrades.length; i++) {
      if (~this.transports.indexOf(upgrades[i]))
        filteredUpgrades.push(upgrades[i]);
    }
    return filteredUpgrades;
  }
}

class Socket extends SocketWithUpgrade {
  constructor(uri2, opts = {}) {
    const o = typeof uri2 === "object" ? uri2 : opts;
    if (!o.transports || o.transports && typeof o.transports[0] === "string") {
      o.transports = (o.transports || ["polling", "websocket", "webtransport"]).map((transportName) => transports[transportName]).filter((t2) => !!t2);
    }
    super(uri2, o);
  }
}
// node_modules/engine.io-client/build/esm-debug/index.js
var protocol2 = Socket.protocol;

// node_modules/socket.io-client/build/esm-debug/url.js
var import_debug7 = __toESM(require_src(), 1);
var debug7 = import_debug7.default("socket.io-client:url");
function url(uri2, path3 = "", loc) {
  let obj = uri2;
  loc = loc || typeof location !== "undefined" && location;
  if (uri2 == null)
    uri2 = loc.protocol + "//" + loc.host;
  if (typeof uri2 === "string") {
    if (uri2.charAt(0) === "/") {
      if (uri2.charAt(1) === "/") {
        uri2 = loc.protocol + uri2;
      } else {
        uri2 = loc.host + uri2;
      }
    }
    if (!/^(https?|wss?):\/\//.test(uri2)) {
      debug7("protocol-less url %s", uri2);
      if (typeof loc !== "undefined") {
        uri2 = loc.protocol + "//" + uri2;
      } else {
        uri2 = "https://" + uri2;
      }
    }
    debug7("parse %s", uri2);
    obj = parse4(uri2);
  }
  if (!obj.port) {
    if (/^(http|ws)$/.test(obj.protocol)) {
      obj.port = "80";
    } else if (/^(http|ws)s$/.test(obj.protocol)) {
      obj.port = "443";
    }
  }
  obj.path = obj.path || "/";
  const ipv6 = obj.host.indexOf(":") !== -1;
  const host = ipv6 ? "[" + obj.host + "]" : obj.host;
  obj.id = obj.protocol + "://" + host + ":" + obj.port + path3;
  obj.href = obj.protocol + "://" + host + (loc && loc.port === obj.port ? "" : ":" + obj.port);
  return obj;
}

// node_modules/socket.io-parser/build/esm-debug/index.js
var exports_esm_debug = {};
__export(exports_esm_debug, {
  protocol: () => protocol3,
  PacketType: () => PacketType,
  Encoder: () => Encoder,
  Decoder: () => Decoder
});

// node_modules/socket.io-parser/build/esm-debug/is-binary.js
var withNativeArrayBuffer = typeof ArrayBuffer === "function";
var isView = (obj) => {
  return typeof ArrayBuffer.isView === "function" ? ArrayBuffer.isView(obj) : obj.buffer instanceof ArrayBuffer;
};
var toString = Object.prototype.toString;
var withNativeBlob = typeof Blob === "function" || typeof Blob !== "undefined" && toString.call(Blob) === "[object BlobConstructor]";
var withNativeFile = typeof File === "function" || typeof File !== "undefined" && toString.call(File) === "[object FileConstructor]";
function isBinary(obj) {
  return withNativeArrayBuffer && (obj instanceof ArrayBuffer || isView(obj)) || withNativeBlob && obj instanceof Blob || withNativeFile && obj instanceof File;
}
function hasBinary(obj, toJSON) {
  if (!obj || typeof obj !== "object") {
    return false;
  }
  if (Array.isArray(obj)) {
    for (let i = 0, l = obj.length;i < l; i++) {
      if (hasBinary(obj[i])) {
        return true;
      }
    }
    return false;
  }
  if (isBinary(obj)) {
    return true;
  }
  if (obj.toJSON && typeof obj.toJSON === "function" && arguments.length === 1) {
    return hasBinary(obj.toJSON(), true);
  }
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key) && hasBinary(obj[key])) {
      return true;
    }
  }
  return false;
}

// node_modules/socket.io-parser/build/esm-debug/binary.js
function deconstructPacket(packet) {
  const buffers = [];
  const packetData = packet.data;
  const pack = packet;
  pack.data = _deconstructPacket(packetData, buffers);
  pack.attachments = buffers.length;
  return { packet: pack, buffers };
}
function _deconstructPacket(data, buffers) {
  if (!data)
    return data;
  if (isBinary(data)) {
    const placeholder = { _placeholder: true, num: buffers.length };
    buffers.push(data);
    return placeholder;
  } else if (Array.isArray(data)) {
    const newData = new Array(data.length);
    for (let i = 0;i < data.length; i++) {
      newData[i] = _deconstructPacket(data[i], buffers);
    }
    return newData;
  } else if (typeof data === "object" && !(data instanceof Date)) {
    const newData = {};
    for (const key in data) {
      if (Object.prototype.hasOwnProperty.call(data, key)) {
        newData[key] = _deconstructPacket(data[key], buffers);
      }
    }
    return newData;
  }
  return data;
}
function reconstructPacket(packet, buffers) {
  packet.data = _reconstructPacket(packet.data, buffers);
  delete packet.attachments;
  return packet;
}
function _reconstructPacket(data, buffers) {
  if (!data)
    return data;
  if (data && data._placeholder === true) {
    const isIndexValid = typeof data.num === "number" && data.num >= 0 && data.num < buffers.length;
    if (isIndexValid) {
      return buffers[data.num];
    } else {
      throw new Error("illegal attachments");
    }
  } else if (Array.isArray(data)) {
    for (let i = 0;i < data.length; i++) {
      data[i] = _reconstructPacket(data[i], buffers);
    }
  } else if (typeof data === "object") {
    for (const key in data) {
      if (Object.prototype.hasOwnProperty.call(data, key)) {
        data[key] = _reconstructPacket(data[key], buffers);
      }
    }
  }
  return data;
}

// node_modules/socket.io-parser/build/esm-debug/index.js
var import_debug8 = __toESM(require_src(), 1);
var debug8 = import_debug8.default("socket.io-parser");
var RESERVED_EVENTS = [
  "connect",
  "connect_error",
  "disconnect",
  "disconnecting",
  "newListener",
  "removeListener"
];
var protocol3 = 5;
var PacketType;
(function(PacketType2) {
  PacketType2[PacketType2["CONNECT"] = 0] = "CONNECT";
  PacketType2[PacketType2["DISCONNECT"] = 1] = "DISCONNECT";
  PacketType2[PacketType2["EVENT"] = 2] = "EVENT";
  PacketType2[PacketType2["ACK"] = 3] = "ACK";
  PacketType2[PacketType2["CONNECT_ERROR"] = 4] = "CONNECT_ERROR";
  PacketType2[PacketType2["BINARY_EVENT"] = 5] = "BINARY_EVENT";
  PacketType2[PacketType2["BINARY_ACK"] = 6] = "BINARY_ACK";
})(PacketType || (PacketType = {}));

class Encoder {
  constructor(replacer) {
    this.replacer = replacer;
  }
  encode(obj) {
    debug8("encoding packet %j", obj);
    if (obj.type === PacketType.EVENT || obj.type === PacketType.ACK) {
      if (hasBinary(obj)) {
        return this.encodeAsBinary({
          type: obj.type === PacketType.EVENT ? PacketType.BINARY_EVENT : PacketType.BINARY_ACK,
          nsp: obj.nsp,
          data: obj.data,
          id: obj.id
        });
      }
    }
    return [this.encodeAsString(obj)];
  }
  encodeAsString(obj) {
    let str = "" + obj.type;
    if (obj.type === PacketType.BINARY_EVENT || obj.type === PacketType.BINARY_ACK) {
      str += obj.attachments + "-";
    }
    if (obj.nsp && obj.nsp !== "/") {
      str += obj.nsp + ",";
    }
    if (obj.id != null) {
      str += obj.id;
    }
    if (obj.data != null) {
      str += JSON.stringify(obj.data, this.replacer);
    }
    debug8("encoded %j as %s", obj, str);
    return str;
  }
  encodeAsBinary(obj) {
    const deconstruction = deconstructPacket(obj);
    const pack = this.encodeAsString(deconstruction.packet);
    const buffers = deconstruction.buffers;
    buffers.unshift(pack);
    return buffers;
  }
}
function isObject2(value2) {
  return Object.prototype.toString.call(value2) === "[object Object]";
}

class Decoder extends $Emitter {
  constructor(reviver) {
    super();
    this.reviver = reviver;
  }
  add(obj) {
    let packet;
    if (typeof obj === "string") {
      if (this.reconstructor) {
        throw new Error("got plaintext data when reconstructing a packet");
      }
      packet = this.decodeString(obj);
      const isBinaryEvent = packet.type === PacketType.BINARY_EVENT;
      if (isBinaryEvent || packet.type === PacketType.BINARY_ACK) {
        packet.type = isBinaryEvent ? PacketType.EVENT : PacketType.ACK;
        this.reconstructor = new BinaryReconstructor(packet);
        if (packet.attachments === 0) {
          super.emitReserved("decoded", packet);
        }
      } else {
        super.emitReserved("decoded", packet);
      }
    } else if (isBinary(obj) || obj.base64) {
      if (!this.reconstructor) {
        throw new Error("got binary data when not reconstructing a packet");
      } else {
        packet = this.reconstructor.takeBinaryData(obj);
        if (packet) {
          this.reconstructor = null;
          super.emitReserved("decoded", packet);
        }
      }
    } else {
      throw new Error("Unknown type: " + obj);
    }
  }
  decodeString(str) {
    let i = 0;
    const p = {
      type: Number(str.charAt(0))
    };
    if (PacketType[p.type] === undefined) {
      throw new Error("unknown packet type " + p.type);
    }
    if (p.type === PacketType.BINARY_EVENT || p.type === PacketType.BINARY_ACK) {
      const start = i + 1;
      while (str.charAt(++i) !== "-" && i != str.length) {}
      const buf = str.substring(start, i);
      if (buf != Number(buf) || str.charAt(i) !== "-") {
        throw new Error("Illegal attachments");
      }
      p.attachments = Number(buf);
    }
    if (str.charAt(i + 1) === "/") {
      const start = i + 1;
      while (++i) {
        const c = str.charAt(i);
        if (c === ",")
          break;
        if (i === str.length)
          break;
      }
      p.nsp = str.substring(start, i);
    } else {
      p.nsp = "/";
    }
    const next = str.charAt(i + 1);
    if (next !== "" && Number(next) == next) {
      const start = i + 1;
      while (++i) {
        const c = str.charAt(i);
        if (c == null || Number(c) != c) {
          --i;
          break;
        }
        if (i === str.length)
          break;
      }
      p.id = Number(str.substring(start, i + 1));
    }
    if (str.charAt(++i)) {
      const payload = this.tryParse(str.substr(i));
      if (Decoder.isPayloadValid(p.type, payload)) {
        p.data = payload;
      } else {
        throw new Error("invalid payload");
      }
    }
    debug8("decoded %s as %j", str, p);
    return p;
  }
  tryParse(str) {
    try {
      return JSON.parse(str, this.reviver);
    } catch (e) {
      return false;
    }
  }
  static isPayloadValid(type, payload) {
    switch (type) {
      case PacketType.CONNECT:
        return isObject2(payload);
      case PacketType.DISCONNECT:
        return payload === undefined;
      case PacketType.CONNECT_ERROR:
        return typeof payload === "string" || isObject2(payload);
      case PacketType.EVENT:
      case PacketType.BINARY_EVENT:
        return Array.isArray(payload) && (typeof payload[0] === "number" || typeof payload[0] === "string" && RESERVED_EVENTS.indexOf(payload[0]) === -1);
      case PacketType.ACK:
      case PacketType.BINARY_ACK:
        return Array.isArray(payload);
    }
  }
  destroy() {
    if (this.reconstructor) {
      this.reconstructor.finishedReconstruction();
      this.reconstructor = null;
    }
  }
}

class BinaryReconstructor {
  constructor(packet) {
    this.packet = packet;
    this.buffers = [];
    this.reconPack = packet;
  }
  takeBinaryData(binData) {
    this.buffers.push(binData);
    if (this.buffers.length === this.reconPack.attachments) {
      const packet = reconstructPacket(this.reconPack, this.buffers);
      this.finishedReconstruction();
      return packet;
    }
    return null;
  }
  finishedReconstruction() {
    this.reconPack = null;
    this.buffers = [];
  }
}

// node_modules/socket.io-client/build/esm-debug/on.js
function on(obj, ev, fn) {
  obj.on(ev, fn);
  return function subDestroy() {
    obj.off(ev, fn);
  };
}

// node_modules/socket.io-client/build/esm-debug/socket.js
var import_debug9 = __toESM(require_src(), 1);
var debug9 = import_debug9.default("socket.io-client:socket");
var RESERVED_EVENTS2 = Object.freeze({
  connect: 1,
  connect_error: 1,
  disconnect: 1,
  disconnecting: 1,
  newListener: 1,
  removeListener: 1
});

class Socket2 extends $Emitter {
  constructor(io, nsp, opts) {
    super();
    this.connected = false;
    this.recovered = false;
    this.receiveBuffer = [];
    this.sendBuffer = [];
    this._queue = [];
    this._queueSeq = 0;
    this.ids = 0;
    this.acks = {};
    this.flags = {};
    this.io = io;
    this.nsp = nsp;
    if (opts && opts.auth) {
      this.auth = opts.auth;
    }
    this._opts = Object.assign({}, opts);
    if (this.io._autoConnect)
      this.open();
  }
  get disconnected() {
    return !this.connected;
  }
  subEvents() {
    if (this.subs)
      return;
    const io = this.io;
    this.subs = [
      on(io, "open", this.onopen.bind(this)),
      on(io, "packet", this.onpacket.bind(this)),
      on(io, "error", this.onerror.bind(this)),
      on(io, "close", this.onclose.bind(this))
    ];
  }
  get active() {
    return !!this.subs;
  }
  connect() {
    if (this.connected)
      return this;
    this.subEvents();
    if (!this.io["_reconnecting"])
      this.io.open();
    if (this.io._readyState === "open")
      this.onopen();
    return this;
  }
  open() {
    return this.connect();
  }
  send(...args) {
    args.unshift("message");
    this.emit.apply(this, args);
    return this;
  }
  emit(ev, ...args) {
    var _a2, _b, _c;
    if (RESERVED_EVENTS2.hasOwnProperty(ev)) {
      throw new Error('"' + ev.toString() + '" is a reserved event name');
    }
    args.unshift(ev);
    if (this._opts.retries && !this.flags.fromQueue && !this.flags.volatile) {
      this._addToQueue(args);
      return this;
    }
    const packet = {
      type: PacketType.EVENT,
      data: args
    };
    packet.options = {};
    packet.options.compress = this.flags.compress !== false;
    if (typeof args[args.length - 1] === "function") {
      const id = this.ids++;
      debug9("emitting packet with ack id %d", id);
      const ack = args.pop();
      this._registerAckCallback(id, ack);
      packet.id = id;
    }
    const isTransportWritable = (_b = (_a2 = this.io.engine) === null || _a2 === undefined ? undefined : _a2.transport) === null || _b === undefined ? undefined : _b.writable;
    const isConnected = this.connected && !((_c = this.io.engine) === null || _c === undefined ? undefined : _c._hasPingExpired());
    const discardPacket = this.flags.volatile && !isTransportWritable;
    if (discardPacket) {
      debug9("discard packet as the transport is not currently writable");
    } else if (isConnected) {
      this.notifyOutgoingListeners(packet);
      this.packet(packet);
    } else {
      this.sendBuffer.push(packet);
    }
    this.flags = {};
    return this;
  }
  _registerAckCallback(id, ack) {
    var _a2;
    const timeout = (_a2 = this.flags.timeout) !== null && _a2 !== undefined ? _a2 : this._opts.ackTimeout;
    if (timeout === undefined) {
      this.acks[id] = ack;
      return;
    }
    const timer = this.io.setTimeoutFn(() => {
      delete this.acks[id];
      for (let i = 0;i < this.sendBuffer.length; i++) {
        if (this.sendBuffer[i].id === id) {
          debug9("removing packet with ack id %d from the buffer", id);
          this.sendBuffer.splice(i, 1);
        }
      }
      debug9("event with ack id %d has timed out after %d ms", id, timeout);
      ack.call(this, new Error("operation has timed out"));
    }, timeout);
    const fn = (...args) => {
      this.io.clearTimeoutFn(timer);
      ack.apply(this, args);
    };
    fn.withError = true;
    this.acks[id] = fn;
  }
  emitWithAck(ev, ...args) {
    return new Promise((resolve, reject) => {
      const fn = (arg1, arg2) => {
        return arg1 ? reject(arg1) : resolve(arg2);
      };
      fn.withError = true;
      args.push(fn);
      this.emit(ev, ...args);
    });
  }
  _addToQueue(args) {
    let ack;
    if (typeof args[args.length - 1] === "function") {
      ack = args.pop();
    }
    const packet = {
      id: this._queueSeq++,
      tryCount: 0,
      pending: false,
      args,
      flags: Object.assign({ fromQueue: true }, this.flags)
    };
    args.push((err, ...responseArgs) => {
      if (packet !== this._queue[0]) {
        return;
      }
      const hasError = err !== null;
      if (hasError) {
        if (packet.tryCount > this._opts.retries) {
          debug9("packet [%d] is discarded after %d tries", packet.id, packet.tryCount);
          this._queue.shift();
          if (ack) {
            ack(err);
          }
        }
      } else {
        debug9("packet [%d] was successfully sent", packet.id);
        this._queue.shift();
        if (ack) {
          ack(null, ...responseArgs);
        }
      }
      packet.pending = false;
      return this._drainQueue();
    });
    this._queue.push(packet);
    this._drainQueue();
  }
  _drainQueue(force = false) {
    debug9("draining queue");
    if (!this.connected || this._queue.length === 0) {
      return;
    }
    const packet = this._queue[0];
    if (packet.pending && !force) {
      debug9("packet [%d] has already been sent and is waiting for an ack", packet.id);
      return;
    }
    packet.pending = true;
    packet.tryCount++;
    debug9("sending packet [%d] (try n°%d)", packet.id, packet.tryCount);
    this.flags = packet.flags;
    this.emit.apply(this, packet.args);
  }
  packet(packet) {
    packet.nsp = this.nsp;
    this.io._packet(packet);
  }
  onopen() {
    debug9("transport is open - connecting");
    if (typeof this.auth == "function") {
      this.auth((data) => {
        this._sendConnectPacket(data);
      });
    } else {
      this._sendConnectPacket(this.auth);
    }
  }
  _sendConnectPacket(data) {
    this.packet({
      type: PacketType.CONNECT,
      data: this._pid ? Object.assign({ pid: this._pid, offset: this._lastOffset }, data) : data
    });
  }
  onerror(err) {
    if (!this.connected) {
      this.emitReserved("connect_error", err);
    }
  }
  onclose(reason, description) {
    debug9("close (%s)", reason);
    this.connected = false;
    delete this.id;
    this.emitReserved("disconnect", reason, description);
    this._clearAcks();
  }
  _clearAcks() {
    Object.keys(this.acks).forEach((id) => {
      const isBuffered = this.sendBuffer.some((packet) => String(packet.id) === id);
      if (!isBuffered) {
        const ack = this.acks[id];
        delete this.acks[id];
        if (ack.withError) {
          ack.call(this, new Error("socket has been disconnected"));
        }
      }
    });
  }
  onpacket(packet) {
    const sameNamespace = packet.nsp === this.nsp;
    if (!sameNamespace)
      return;
    switch (packet.type) {
      case PacketType.CONNECT:
        if (packet.data && packet.data.sid) {
          this.onconnect(packet.data.sid, packet.data.pid);
        } else {
          this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
        }
        break;
      case PacketType.EVENT:
      case PacketType.BINARY_EVENT:
        this.onevent(packet);
        break;
      case PacketType.ACK:
      case PacketType.BINARY_ACK:
        this.onack(packet);
        break;
      case PacketType.DISCONNECT:
        this.ondisconnect();
        break;
      case PacketType.CONNECT_ERROR:
        this.destroy();
        const err = new Error(packet.data.message);
        err.data = packet.data.data;
        this.emitReserved("connect_error", err);
        break;
    }
  }
  onevent(packet) {
    const args = packet.data || [];
    debug9("emitting event %j", args);
    if (packet.id != null) {
      debug9("attaching ack callback to event");
      args.push(this.ack(packet.id));
    }
    if (this.connected) {
      this.emitEvent(args);
    } else {
      this.receiveBuffer.push(Object.freeze(args));
    }
  }
  emitEvent(args) {
    if (this._anyListeners && this._anyListeners.length) {
      const listeners = this._anyListeners.slice();
      for (const listener of listeners) {
        listener.apply(this, args);
      }
    }
    super.emit.apply(this, args);
    if (this._pid && args.length && typeof args[args.length - 1] === "string") {
      this._lastOffset = args[args.length - 1];
    }
  }
  ack(id) {
    const self = this;
    let sent = false;
    return function(...args) {
      if (sent)
        return;
      sent = true;
      debug9("sending ack %j", args);
      self.packet({
        type: PacketType.ACK,
        id,
        data: args
      });
    };
  }
  onack(packet) {
    const ack = this.acks[packet.id];
    if (typeof ack !== "function") {
      debug9("bad ack %s", packet.id);
      return;
    }
    delete this.acks[packet.id];
    debug9("calling ack %s with %j", packet.id, packet.data);
    if (ack.withError) {
      packet.data.unshift(null);
    }
    ack.apply(this, packet.data);
  }
  onconnect(id, pid) {
    debug9("socket connected with id %s", id);
    this.id = id;
    this.recovered = pid && this._pid === pid;
    this._pid = pid;
    this.connected = true;
    this.emitBuffered();
    this.emitReserved("connect");
    this._drainQueue(true);
  }
  emitBuffered() {
    this.receiveBuffer.forEach((args) => this.emitEvent(args));
    this.receiveBuffer = [];
    this.sendBuffer.forEach((packet) => {
      this.notifyOutgoingListeners(packet);
      this.packet(packet);
    });
    this.sendBuffer = [];
  }
  ondisconnect() {
    debug9("server disconnect (%s)", this.nsp);
    this.destroy();
    this.onclose("io server disconnect");
  }
  destroy() {
    if (this.subs) {
      this.subs.forEach((subDestroy) => subDestroy());
      this.subs = undefined;
    }
    this.io["_destroy"](this);
  }
  disconnect() {
    if (this.connected) {
      debug9("performing disconnect (%s)", this.nsp);
      this.packet({ type: PacketType.DISCONNECT });
    }
    this.destroy();
    if (this.connected) {
      this.onclose("io client disconnect");
    }
    return this;
  }
  close() {
    return this.disconnect();
  }
  compress(compress) {
    this.flags.compress = compress;
    return this;
  }
  get volatile() {
    this.flags.volatile = true;
    return this;
  }
  timeout(timeout) {
    this.flags.timeout = timeout;
    return this;
  }
  onAny(listener) {
    this._anyListeners = this._anyListeners || [];
    this._anyListeners.push(listener);
    return this;
  }
  prependAny(listener) {
    this._anyListeners = this._anyListeners || [];
    this._anyListeners.unshift(listener);
    return this;
  }
  offAny(listener) {
    if (!this._anyListeners) {
      return this;
    }
    if (listener) {
      const listeners = this._anyListeners;
      for (let i = 0;i < listeners.length; i++) {
        if (listener === listeners[i]) {
          listeners.splice(i, 1);
          return this;
        }
      }
    } else {
      this._anyListeners = [];
    }
    return this;
  }
  listenersAny() {
    return this._anyListeners || [];
  }
  onAnyOutgoing(listener) {
    this._anyOutgoingListeners = this._anyOutgoingListeners || [];
    this._anyOutgoingListeners.push(listener);
    return this;
  }
  prependAnyOutgoing(listener) {
    this._anyOutgoingListeners = this._anyOutgoingListeners || [];
    this._anyOutgoingListeners.unshift(listener);
    return this;
  }
  offAnyOutgoing(listener) {
    if (!this._anyOutgoingListeners) {
      return this;
    }
    if (listener) {
      const listeners = this._anyOutgoingListeners;
      for (let i = 0;i < listeners.length; i++) {
        if (listener === listeners[i]) {
          listeners.splice(i, 1);
          return this;
        }
      }
    } else {
      this._anyOutgoingListeners = [];
    }
    return this;
  }
  listenersAnyOutgoing() {
    return this._anyOutgoingListeners || [];
  }
  notifyOutgoingListeners(packet) {
    if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
      const listeners = this._anyOutgoingListeners.slice();
      for (const listener of listeners) {
        listener.apply(this, packet.data);
      }
    }
  }
}

// node_modules/socket.io-client/build/esm-debug/contrib/backo2.js
function Backoff(opts) {
  opts = opts || {};
  this.ms = opts.min || 100;
  this.max = opts.max || 1e4;
  this.factor = opts.factor || 2;
  this.jitter = opts.jitter > 0 && opts.jitter <= 1 ? opts.jitter : 0;
  this.attempts = 0;
}
Backoff.prototype.duration = function() {
  var ms = this.ms * Math.pow(this.factor, this.attempts++);
  if (this.jitter) {
    var rand = Math.random();
    var deviation = Math.floor(rand * this.jitter * ms);
    ms = (Math.floor(rand * 10) & 1) == 0 ? ms - deviation : ms + deviation;
  }
  return Math.min(ms, this.max) | 0;
};
Backoff.prototype.reset = function() {
  this.attempts = 0;
};
Backoff.prototype.setMin = function(min) {
  this.ms = min;
};
Backoff.prototype.setMax = function(max) {
  this.max = max;
};
Backoff.prototype.setJitter = function(jitter) {
  this.jitter = jitter;
};

// node_modules/socket.io-client/build/esm-debug/manager.js
var import_debug10 = __toESM(require_src(), 1);
var debug10 = import_debug10.default("socket.io-client:manager");

class Manager extends $Emitter {
  constructor(uri2, opts) {
    var _a2;
    super();
    this.nsps = {};
    this.subs = [];
    if (uri2 && typeof uri2 === "object") {
      opts = uri2;
      uri2 = undefined;
    }
    opts = opts || {};
    opts.path = opts.path || "/socket.io";
    this.opts = opts;
    installTimerFunctions(this, opts);
    this.reconnection(opts.reconnection !== false);
    this.reconnectionAttempts(opts.reconnectionAttempts || Infinity);
    this.reconnectionDelay(opts.reconnectionDelay || 1000);
    this.reconnectionDelayMax(opts.reconnectionDelayMax || 5000);
    this.randomizationFactor((_a2 = opts.randomizationFactor) !== null && _a2 !== undefined ? _a2 : 0.5);
    this.backoff = new Backoff({
      min: this.reconnectionDelay(),
      max: this.reconnectionDelayMax(),
      jitter: this.randomizationFactor()
    });
    this.timeout(opts.timeout == null ? 20000 : opts.timeout);
    this._readyState = "closed";
    this.uri = uri2;
    const _parser = opts.parser || exports_esm_debug;
    this.encoder = new _parser.Encoder;
    this.decoder = new _parser.Decoder;
    this._autoConnect = opts.autoConnect !== false;
    if (this._autoConnect)
      this.open();
  }
  reconnection(v) {
    if (!arguments.length)
      return this._reconnection;
    this._reconnection = !!v;
    if (!v) {
      this.skipReconnect = true;
    }
    return this;
  }
  reconnectionAttempts(v) {
    if (v === undefined)
      return this._reconnectionAttempts;
    this._reconnectionAttempts = v;
    return this;
  }
  reconnectionDelay(v) {
    var _a2;
    if (v === undefined)
      return this._reconnectionDelay;
    this._reconnectionDelay = v;
    (_a2 = this.backoff) === null || _a2 === undefined || _a2.setMin(v);
    return this;
  }
  randomizationFactor(v) {
    var _a2;
    if (v === undefined)
      return this._randomizationFactor;
    this._randomizationFactor = v;
    (_a2 = this.backoff) === null || _a2 === undefined || _a2.setJitter(v);
    return this;
  }
  reconnectionDelayMax(v) {
    var _a2;
    if (v === undefined)
      return this._reconnectionDelayMax;
    this._reconnectionDelayMax = v;
    (_a2 = this.backoff) === null || _a2 === undefined || _a2.setMax(v);
    return this;
  }
  timeout(v) {
    if (!arguments.length)
      return this._timeout;
    this._timeout = v;
    return this;
  }
  maybeReconnectOnOpen() {
    if (!this._reconnecting && this._reconnection && this.backoff.attempts === 0) {
      this.reconnect();
    }
  }
  open(fn) {
    debug10("readyState %s", this._readyState);
    if (~this._readyState.indexOf("open"))
      return this;
    debug10("opening %s", this.uri);
    this.engine = new Socket(this.uri, this.opts);
    const socket = this.engine;
    const self = this;
    this._readyState = "opening";
    this.skipReconnect = false;
    const openSubDestroy = on(socket, "open", function() {
      self.onopen();
      fn && fn();
    });
    const onError = (err) => {
      debug10("error");
      this.cleanup();
      this._readyState = "closed";
      this.emitReserved("error", err);
      if (fn) {
        fn(err);
      } else {
        this.maybeReconnectOnOpen();
      }
    };
    const errorSub = on(socket, "error", onError);
    if (this._timeout !== false) {
      const timeout = this._timeout;
      debug10("connect attempt will timeout after %d", timeout);
      const timer = this.setTimeoutFn(() => {
        debug10("connect attempt timed out after %d", timeout);
        openSubDestroy();
        onError(new Error("timeout"));
        socket.close();
      }, timeout);
      if (this.opts.autoUnref) {
        timer.unref();
      }
      this.subs.push(() => {
        this.clearTimeoutFn(timer);
      });
    }
    this.subs.push(openSubDestroy);
    this.subs.push(errorSub);
    return this;
  }
  connect(fn) {
    return this.open(fn);
  }
  onopen() {
    debug10("open");
    this.cleanup();
    this._readyState = "open";
    this.emitReserved("open");
    const socket = this.engine;
    this.subs.push(on(socket, "ping", this.onping.bind(this)), on(socket, "data", this.ondata.bind(this)), on(socket, "error", this.onerror.bind(this)), on(socket, "close", this.onclose.bind(this)), on(this.decoder, "decoded", this.ondecoded.bind(this)));
  }
  onping() {
    this.emitReserved("ping");
  }
  ondata(data) {
    try {
      this.decoder.add(data);
    } catch (e) {
      this.onclose("parse error", e);
    }
  }
  ondecoded(packet) {
    nextTick(() => {
      this.emitReserved("packet", packet);
    }, this.setTimeoutFn);
  }
  onerror(err) {
    debug10("error", err);
    this.emitReserved("error", err);
  }
  socket(nsp, opts) {
    let socket = this.nsps[nsp];
    if (!socket) {
      socket = new Socket2(this, nsp, opts);
      this.nsps[nsp] = socket;
    } else if (this._autoConnect && !socket.active) {
      socket.connect();
    }
    return socket;
  }
  _destroy(socket) {
    const nsps = Object.keys(this.nsps);
    for (const nsp of nsps) {
      const socket2 = this.nsps[nsp];
      if (socket2.active) {
        debug10("socket %s is still active, skipping close", nsp);
        return;
      }
    }
    this._close();
  }
  _packet(packet) {
    debug10("writing packet %j", packet);
    const encodedPackets = this.encoder.encode(packet);
    for (let i = 0;i < encodedPackets.length; i++) {
      this.engine.write(encodedPackets[i], packet.options);
    }
  }
  cleanup() {
    debug10("cleanup");
    this.subs.forEach((subDestroy) => subDestroy());
    this.subs.length = 0;
    this.decoder.destroy();
  }
  _close() {
    debug10("disconnect");
    this.skipReconnect = true;
    this._reconnecting = false;
    this.onclose("forced close");
  }
  disconnect() {
    return this._close();
  }
  onclose(reason, description) {
    var _a2;
    debug10("closed due to %s", reason);
    this.cleanup();
    (_a2 = this.engine) === null || _a2 === undefined || _a2.close();
    this.backoff.reset();
    this._readyState = "closed";
    this.emitReserved("close", reason, description);
    if (this._reconnection && !this.skipReconnect) {
      this.reconnect();
    }
  }
  reconnect() {
    if (this._reconnecting || this.skipReconnect)
      return this;
    const self = this;
    if (this.backoff.attempts >= this._reconnectionAttempts) {
      debug10("reconnect failed");
      this.backoff.reset();
      this.emitReserved("reconnect_failed");
      this._reconnecting = false;
    } else {
      const delay = this.backoff.duration();
      debug10("will wait %dms before reconnect attempt", delay);
      this._reconnecting = true;
      const timer = this.setTimeoutFn(() => {
        if (self.skipReconnect)
          return;
        debug10("attempting reconnect");
        this.emitReserved("reconnect_attempt", self.backoff.attempts);
        if (self.skipReconnect)
          return;
        self.open((err) => {
          if (err) {
            debug10("reconnect attempt error");
            self._reconnecting = false;
            self.reconnect();
            this.emitReserved("reconnect_error", err);
          } else {
            debug10("reconnect success");
            self.onreconnect();
          }
        });
      }, delay);
      if (this.opts.autoUnref) {
        timer.unref();
      }
      this.subs.push(() => {
        this.clearTimeoutFn(timer);
      });
    }
  }
  onreconnect() {
    const attempt = this.backoff.attempts;
    this._reconnecting = false;
    this.backoff.reset();
    this.emitReserved("reconnect", attempt);
  }
}

// node_modules/socket.io-client/build/esm-debug/index.js
var import_debug11 = __toESM(require_src(), 1);
var debug11 = import_debug11.default("socket.io-client");
var cache = {};
function lookup(uri2, opts) {
  if (typeof uri2 === "object") {
    opts = uri2;
    uri2 = undefined;
  }
  opts = opts || {};
  const parsed = url(uri2, opts.path || "/socket.io");
  const source = parsed.source;
  const id = parsed.id;
  const path3 = parsed.path;
  const sameNamespace = cache[id] && path3 in cache[id]["nsps"];
  const newConnection = opts.forceNew || opts["force new connection"] || opts.multiplex === false || sameNamespace;
  let io;
  if (newConnection) {
    debug11("ignoring socket cache for %s", source);
    io = new Manager(source, opts);
  } else {
    if (!cache[id]) {
      debug11("new io instance for %s", source);
      cache[id] = new Manager(source, opts);
    }
    io = cache[id];
  }
  if (parsed.query && !opts.query) {
    opts.query = parsed.queryKey;
  }
  return io.socket(parsed.path, opts);
}
Object.assign(lookup, {
  Manager,
  Socket: Socket2,
  io: lookup,
  connect: lookup
});

// src/main.ts
import path3 from "node:path";
import fs from "node:fs";
async function init() {
  Bun.spawn([path3.join(process.cwd(), "plugins", "animeav1.exe")]);
  await SQLITE`
      CREATE TABLE IF NOT EXISTS cache (
        id TEXT PRIMARY KEY NOT NULL,
        value TEXT NOT NULL,
        createdAt DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL
      )
    `;
  await SQLITE`
      CREATE TABLE IF NOT EXISTS plugins_manifest (
        name TEXT PRIMARY KEY NOT NULL,
        version TEXT NOT NULL,
        urlPage TEXT NOT NULL,
        date_created DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL,
        filterSupportedList TEXT NOT NULL,
        createdAt DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL
      )
    `;
  const manifestDB = await SQLITE`SELECT * FROM plugins_manifest`;
  if (manifestDB.length === 0) {
    const manifest = await ManifestClient.getInstance().getManifest();
    if (manifest) {
      const manifestParsed = JSON.parse(manifest);
      await SQLITE`
          INSERT INTO plugins_manifest (
            name,
            version,
            urlPage,
            date_created,
            filterSupportedList
          ) VALUES (
            ${manifestParsed.name},
            ${manifestParsed.version},
            ${manifestParsed.urlPage},
            ${manifestParsed.date_created},
            ${JSON.stringify(manifestParsed.filterSupportedList)}
          )
        `;
    }
  }
}
init();
var pathPluginPort = path3.join(os.tmpdir(), "animeav1", "config.json");
var config = JSON.parse(fs.readFileSync(pathPluginPort, "utf-8"));
var port = config.port;
var socket = lookup("http://localhost:" + port);
socket.on("connect", () => {
  console.log("✅ Connected to scraper server webSocket");
});
var sendMessage = async (command, message) => {
  return new Promise((resolve, reject) => {
    socket.emit(command, message, (response) => {
      resolve(response);
    });
  });
};
socket.on("disconnect", () => {
  console.log("❌ Disconnected from scraper server webSocket");
});
var cacheRepository = CacheRepository.create();
export {
  sendMessage,
  cacheRepository
};
