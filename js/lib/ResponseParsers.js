"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var typedjson_npm_1 = require("typedjson-npm");
var Path = require("path");
var _ = require("highland");
var AMCPConnectionOptions_1 = require("./AMCPConnectionOptions");
// Options NS
var ServerVersion = AMCPConnectionOptions_1.Options.ServerVersion;
// config NS
var Config_1 = require("./Config");
var CasparCGConfig = Config_1.Config.CasparCGConfig;
var Config207VO = Config_1.Config.Config207VO;
var Config210VO = Config_1.Config.Config210VO;
var Response;
(function (Response) {
    /** */
    var CasparCGPaths = (function () {
        function CasparCGPaths() {
        }
        Object.defineProperty(CasparCGPaths.prototype, "thumbnails", {
            /** */
            get: function () {
                return this.thumbnail;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CasparCGPaths.prototype, "absoluteMedia", {
            /** */
            get: function () {
                return this.absolutePath(this.media);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CasparCGPaths.prototype, "absoluteData", {
            /** */
            get: function () {
                return this.absolutePath(this.data);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CasparCGPaths.prototype, "absoluteLog", {
            /** */
            get: function () {
                return this.absolutePath(this.log);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CasparCGPaths.prototype, "absoluteTemplate", {
            /** */
            get: function () {
                return this.absolutePath(this.template);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CasparCGPaths.prototype, "absoluteThumbnail", {
            /** */
            get: function () {
                return this.absolutePath(this.thumbnail);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CasparCGPaths.prototype, "absoluteThumbnails", {
            /** */
            get: function () {
                return this.absolutePath(this.thumbnails);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CasparCGPaths.prototype, "absoluteFont", {
            /** */
            get: function () {
                return this.font ? this.absolutePath(this.font) : undefined;
            },
            enumerable: true,
            configurable: true
        });
        /** */
        CasparCGPaths.prototype.absolutePath = function (relativeOrAbsolutePath) {
            if (relativeOrAbsolutePath.match(/\:\\|\:\//)) {
                return CasparCGPaths.ensureTrailingSlash(relativeOrAbsolutePath);
            }
            return CasparCGPaths.ensureTrailingSlash(Path.join(this.root, relativeOrAbsolutePath));
        };
        /** */
        CasparCGPaths.ensureTrailingSlash = function (path) {
            return ((path.slice(-1) === "/" || path.slice(-1) === "\\") ? path : path + "/");
        };
        return CasparCGPaths;
    }());
    Response.CasparCGPaths = CasparCGPaths;
    /**
     *
     */
    var AbstractParser = (function () {
        function AbstractParser() {
        }
        return AbstractParser;
    }());
    Response.AbstractParser = AbstractParser;
    /**
     *
     */
    var ChannelParser = (function (_super) {
        __extends(ChannelParser, _super);
        function ChannelParser() {
            _super.apply(this, arguments);
        }
        /**
         *
         */
        ChannelParser.prototype.parse = function (data) {
            var result = [];
            var components = data.toString().split(/\s|,/);
            while (components.length > 0) {
                result.push({ channel: components.shift(), format: components.shift(), status: components.shift() });
            }
            if (result.length > 0) {
                return result;
            }
            return {};
        };
        return ChannelParser;
    }(AbstractParser));
    Response.ChannelParser = ChannelParser;
    /**
     *
     */
    var ConfigParser = (function (_super) {
        __extends(ConfigParser, _super);
        function ConfigParser() {
            _super.apply(this, arguments);
        }
        /**
         *
         */
        ConfigParser.prototype.childrenToArray = function (root, childIndices) {
            _.pairs(root).map(function (i) {
                var outerKey = i[0].toString();
                var outerValue = i[1];
                // filter top-level possible arrays
                if (childIndices.indexOf(outerKey) > -1) {
                    var flatArray_1 = [];
                    var _loop_1 = function(innerKey) {
                        var innerValue = outerValue[innerKey];
                        if (typeof innerValue === "object") {
                            if (Array.isArray(innerValue)) {
                                innerValue.forEach(function (o) {
                                    if (typeof o !== "object") {
                                        o = {};
                                    }
                                    o["_type"] = innerKey;
                                    flatArray_1.push(o);
                                });
                            }
                            else {
                                innerValue["_type"] = innerKey;
                                flatArray_1.push(innerValue);
                            }
                        }
                        else {
                            flatArray_1.push({ _type: innerKey });
                        }
                    };
                    for (var innerKey in outerValue) {
                        _loop_1(innerKey);
                    }
                    i[1] = flatArray_1;
                }
                return i;
            }).toArray(function (i) {
                root = {};
                i.forEach(function (o) {
                    root[o[0]] = o[1];
                });
            });
            return root;
        };
        /**
         *
         */
        ConfigParser.prototype.parse = function (data) {
            data = this.childrenToArray(data, ["channels", "controllers", "template-hosts"]);
            if (data.hasOwnProperty("channels")) {
                for (var i in data["channels"]) {
                    data["channels"][i] = this.childrenToArray(data["channels"][i], ["consumers"]);
                }
            }
            if (data.hasOwnProperty("osc")) {
                data["osc"] = this.childrenToArray(data["osc"], ["predefined-clients"]);
            }
            if (data.hasOwnProperty("audio")) {
                data["audio"] = this.childrenToArray(data["audio"], ["channel-layouts", "mix-configs"]);
                if (data["audio"].hasOwnProperty("channel-layouts")) {
                    var o = void 0;
                    for (var i in data["audio"]["channel-layouts"]) {
                        if (data["audio"]["channel-layouts"][i]["type"] && !isNaN(data["audio"]["channel-layouts"][i]["type"])) {
                            o = (data["audio"]["channel-layouts"][i]["type"]).toString();
                            o += o.indexOf(".") === -1 ? ".0" : ""; // 
                            data["audio"]["channel-layouts"][i]["type"] = o;
                        }
                    }
                }
                if (data["audio"].hasOwnProperty("mix-configs")) {
                    var o = void 0;
                    for (var i in data["audio"]["mix-configs"]) {
                        if (data["audio"]["mix-configs"][i]["to"] && !isNaN(data["audio"]["mix-configs"][i]["to"])) {
                            o = (data["audio"]["mix-configs"][i]["to"]).toString();
                            o += o.indexOf(".") === -1 ? ".0" : "";
                            data["audio"]["mix-configs"][i]["to"] = o;
                        }
                        if (data["audio"]["mix-configs"][i]["from"] && !isNaN(data["audio"]["mix-configs"][i]["from"])) {
                            o = (data["audio"]["mix-configs"][i]["from"]).toString();
                            o += o.indexOf(".") === -1 ? ".0" : "";
                            data["audio"]["mix-configs"][i]["from"] = o;
                        }
                        if (data["audio"]["mix-configs"][i]["to-types"] && !isNaN(data["audio"]["mix-configs"][i]["to-types"])) {
                            o = (data["audio"]["mix-configs"][i]["to-types"]).toString();
                            o += o.indexOf(".") === -1 ? ".0" : "";
                            data["audio"]["mix-configs"][i]["to-types"] = o;
                        }
                        if (data["audio"]["mix-configs"][i]["from-type"] && !isNaN(data["audio"]["mix-configs"][i]["from-type"])) {
                            o = (data["audio"]["mix-configs"][i]["from-type"]).toString();
                            o += o.indexOf(".") === -1 ? ".0" : "";
                            data["audio"]["mix-configs"][i]["from-type"] = o;
                        }
                        if (data["audio"]["mix-configs"][i]["mappings"] && data["audio"]["mix-configs"][i]["mappings"]["mapping"] && Array.isArray(data["audio"]["mix-configs"][i]["mappings"]["mapping"])) {
                            data["audio"]["mix-configs"][i]["mappings"] = data["audio"]["mix-configs"][i]["mappings"]["mapping"];
                        }
                        else if (data["audio"]["mix-configs"][i]["mappings"] && data["audio"]["mix-configs"][i]["mappings"]["mapping"]) {
                            data["audio"]["mix-configs"][i]["mappings"] = [(data["audio"]["mix-configs"][i]["mappings"]["mapping"]).toString()];
                        }
                    }
                }
            }
            if (data.hasOwnProperty("flash") && data["flash"].hasOwnProperty("buffer-depth")) {
                data["flash"]["buffer-depth"] = (data["flash"]["buffer-depth"]).toString();
            }
            var dataString = JSON.stringify(data).toLowerCase();
            var configVOClass;
            if (this.context && this.context.hasOwnProperty("serverVersion") && this.context["serverVersion"] > ServerVersion.V21x) {
                configVOClass = Config210VO;
            }
            else {
                configVOClass = Config207VO;
            }
            var configVO;
            // errors thrown in parsing bubbles and rejects the promise for the active command
            configVO = typedjson_npm_1.TypedJSON.parse(dataString, configVOClass);
            var configResult = new CasparCGConfig(configVO);
            return configResult;
        };
        return ConfigParser;
    }(AbstractParser));
    Response.ConfigParser = ConfigParser;
    /**
     *
     */
    var DataParser = (function (_super) {
        __extends(DataParser, _super);
        function DataParser() {
            _super.apply(this, arguments);
        }
        /**
         *
         */
        DataParser.prototype.parse = function (data) {
            return data;
        };
        return DataParser;
    }(AbstractParser));
    Response.DataParser = DataParser;
    /**
     *
     */
    var DataListParser = (function (_super) {
        __extends(DataListParser, _super);
        function DataListParser() {
            _super.apply(this, arguments);
        }
        /**
         *
         */
        DataListParser.prototype.parse = function (data) {
            return data;
        };
        return DataListParser;
    }(AbstractParser));
    Response.DataListParser = DataListParser;
    /**
     *
     */
    var InfoTemplateParser = (function (_super) {
        __extends(InfoTemplateParser, _super);
        function InfoTemplateParser() {
            _super.apply(this, arguments);
        }
        /**
         *
         */
        InfoTemplateParser.prototype.parse = function (data) {
            return data;
        };
        return InfoTemplateParser;
    }(AbstractParser));
    Response.InfoTemplateParser = InfoTemplateParser;
    /**
     *
     */
    var HelpParser = (function (_super) {
        __extends(HelpParser, _super);
        function HelpParser() {
            _super.apply(this, arguments);
        }
        /**
         *
         */
        HelpParser.prototype.parse = function (data) {
            return data;
        };
        return HelpParser;
    }(AbstractParser));
    Response.HelpParser = HelpParser;
    /**
     *
     */
    var GLParser = (function (_super) {
        __extends(GLParser, _super);
        function GLParser() {
            _super.apply(this, arguments);
        }
        /**
         *
         */
        GLParser.prototype.parse = function (data) {
            return data;
        };
        return GLParser;
    }(AbstractParser));
    Response.GLParser = GLParser;
    /**
     *
     */
    var InfoDelayParser = (function (_super) {
        __extends(InfoDelayParser, _super);
        function InfoDelayParser() {
            _super.apply(this, arguments);
        }
        /**
         *
         */
        InfoDelayParser.prototype.parse = function (data) {
            return data;
        };
        return InfoDelayParser;
    }(AbstractParser));
    Response.InfoDelayParser = InfoDelayParser;
    /**
     *
     */
    var InfoParser = (function (_super) {
        __extends(InfoParser, _super);
        function InfoParser() {
            _super.apply(this, arguments);
        }
        /**
         *
         */
        InfoParser.prototype.parse = function (data) {
            return data;
        };
        return InfoParser;
    }(AbstractParser));
    Response.InfoParser = InfoParser;
    /**
     *
     */
    var InfoThreadsParser = (function (_super) {
        __extends(InfoThreadsParser, _super);
        function InfoThreadsParser() {
            _super.apply(this, arguments);
        }
        /**
         *
         */
        InfoThreadsParser.prototype.parse = function (data) {
            return data;
        };
        return InfoThreadsParser;
    }(AbstractParser));
    Response.InfoThreadsParser = InfoThreadsParser;
    /**
     *
     */
    var ThumbnailParser = (function (_super) {
        __extends(ThumbnailParser, _super);
        function ThumbnailParser() {
            _super.apply(this, arguments);
        }
        /**
         *
         */
        ThumbnailParser.prototype.parse = function (data) {
            return "data:image/png;base64," + data;
        };
        return ThumbnailParser;
    }(AbstractParser));
    Response.ThumbnailParser = ThumbnailParser;
    /**
     *
     */
    var VersionParser = (function (_super) {
        __extends(VersionParser, _super);
        function VersionParser() {
            _super.apply(this, arguments);
        }
        /**
         *
         */
        VersionParser.prototype.parse = function (data) {
            return data;
        };
        return VersionParser;
    }(AbstractParser));
    Response.VersionParser = VersionParser;
    /**
     *
     */
    var PathParser = (function (_super) {
        __extends(PathParser, _super);
        function PathParser() {
            _super.apply(this, arguments);
        }
        /**
         *
         */
        PathParser.prototype.parse = function (data) {
            return data.map(function (i) {
                var components = i.match(/\"([\s\S]*)\" +([\s\S]*)/);
                if (components === null) {
                    return null;
                }
                var name = components[1].replace(/\\/g, "/");
                var typeData = components[2].split(/\s+/);
                // is font
                if (typeData.length === 1) {
                    return { name: name, type: "font" };
                }
                // is template
                if (typeData.length === 3) {
                    return { name: name, type: "template" };
                }
                // is media
                return { name: name, type: typeData[0].toLowerCase() === "movie" ? "video" : typeData[0].toLowerCase() === "still" ? "image" : typeData[0].toLowerCase() };
            });
        };
        return PathParser;
    }(AbstractParser));
    Response.PathParser = PathParser;
    /**
     *
     */
    var CinfParser = (function (_super) {
        __extends(CinfParser, _super);
        function CinfParser() {
            _super.apply(this, arguments);
        }
        /**
         *
         */
        CinfParser.prototype.parse = function (data) {
            if (data && Array.isArray(data)) {
                var components = data[0].match(/\"([\s\S]*)\" +([\s\S]*)/);
                if (components === null) {
                    return {};
                }
                // let name: string = components[1].replace(/\\/g, "/");
                var typeData = components[2].split(/\s+/);
                return { size: parseInt(typeData[1]), created: typeData[2], duration: parseInt(typeData[3]), fps: typeData[4] };
            }
            return {};
        };
        return CinfParser;
    }(AbstractParser));
    Response.CinfParser = CinfParser;
    /**
     *
     */
    var InfoQueuesParser = (function (_super) {
        __extends(InfoQueuesParser, _super);
        function InfoQueuesParser() {
            _super.apply(this, arguments);
        }
        /**
         *
         */
        InfoQueuesParser.prototype.parse = function (data) {
            return data;
        };
        return InfoQueuesParser;
    }(AbstractParser));
    Response.InfoQueuesParser = InfoQueuesParser;
    /**
        *
     */
    var InfoServerParser = (function (_super) {
        __extends(InfoServerParser, _super);
        function InfoServerParser() {
            _super.apply(this, arguments);
        }
        /**
         *
         */
        InfoServerParser.prototype.parse = function (data) {
            return data;
        };
        return InfoServerParser;
    }(AbstractParser));
    Response.InfoServerParser = InfoServerParser;
    /**
     *
     */
    var InfoPathsParser = (function (_super) {
        __extends(InfoPathsParser, _super);
        function InfoPathsParser() {
            _super.apply(this, arguments);
        }
        /**
         *
         */
        InfoPathsParser.prototype.parse = function (data) {
            var paths = new CasparCGPaths();
            if (data.hasOwnProperty("initial-path")) {
                paths.root = data["initial-path"];
            }
            if (data.hasOwnProperty("media-path")) {
                paths.media = data["media-path"];
            }
            if (data.hasOwnProperty("data-path")) {
                paths.data = data["data-path"];
            }
            if (data.hasOwnProperty("log-path")) {
                paths.log = data["log-path"];
            }
            if (data.hasOwnProperty("template-path")) {
                paths.template = data["template-path"];
            }
            if (data.hasOwnProperty("thumbnails-path")) {
                paths.thumbnail = data["thumbnails-path"];
            }
            if (data.hasOwnProperty("thumbnail-path")) {
                paths.thumbnail = data["thumbnail-path"];
            }
            if (data.hasOwnProperty("font-path")) {
                paths.font = data["font-path"];
            }
            return paths;
        };
        return InfoPathsParser;
    }(AbstractParser));
    Response.InfoPathsParser = InfoPathsParser;
    /**
     *
     */
    var InfoSystemParser = (function (_super) {
        __extends(InfoSystemParser, _super);
        function InfoSystemParser() {
            _super.apply(this, arguments);
        }
        /**
         *
         */
        InfoSystemParser.prototype.parse = function (data) {
            // wrap devices in arrays (if single device of a type)
            if (data.hasOwnProperty("decklink") && data["decklink"].hasOwnProperty("device")) {
                if (!Array.isArray(data["decklink"]["device"])) {
                    data["decklink"]["device"] = [data["decklink"]["device"]];
                }
            }
            if (data.hasOwnProperty("bluefish") && data["bluefish"].hasOwnProperty("device")) {
                if (!Array.isArray(data["bluefish"]["device"])) {
                    data["bluefish"]["device"] = [data["bluefish"]["device"]];
                }
            }
            return data;
        };
        return InfoSystemParser;
    }(AbstractParser));
    Response.InfoSystemParser = InfoSystemParser;
})(Response = exports.Response || (exports.Response = {}));
