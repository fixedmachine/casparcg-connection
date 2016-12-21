"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var typedjson_npm_1 = require("typedjson-npm");
var xmlbuilder_1 = require("xmlbuilder");
var AMCPConnectionOptions_1 = require("./AMCPConnectionOptions");
// Options NS
var ServerVersion = AMCPConnectionOptions_1.Options.ServerVersion;
/**  */
var Config;
(function (Config) {
    /** */
    var v2xx;
    (function (v2xx) {
        /** */
        (function (VideoModeEnum) {
            VideoModeEnum[VideoModeEnum["_PAL"] = 0] = "_PAL";
            VideoModeEnum[VideoModeEnum["_NTSC"] = 1] = "_NTSC";
            VideoModeEnum[VideoModeEnum["_576p2500"] = 2] = "_576p2500";
            VideoModeEnum[VideoModeEnum["_720p2398"] = 3] = "_720p2398";
            VideoModeEnum[VideoModeEnum["_720p2400"] = 4] = "_720p2400";
            VideoModeEnum[VideoModeEnum["_720p2500"] = 5] = "_720p2500";
            VideoModeEnum[VideoModeEnum["_720p5000"] = 6] = "_720p5000";
            VideoModeEnum[VideoModeEnum["_720p2997"] = 7] = "_720p2997";
            VideoModeEnum[VideoModeEnum["_720p5994"] = 8] = "_720p5994";
            VideoModeEnum[VideoModeEnum["_720p3000"] = 9] = "_720p3000";
            VideoModeEnum[VideoModeEnum["_720p6000"] = 10] = "_720p6000";
            VideoModeEnum[VideoModeEnum["_1080p2398"] = 11] = "_1080p2398";
            VideoModeEnum[VideoModeEnum["_1080p2400"] = 12] = "_1080p2400";
            VideoModeEnum[VideoModeEnum["_1080i5000"] = 13] = "_1080i5000";
            VideoModeEnum[VideoModeEnum["_1080i5994"] = 14] = "_1080i5994";
            VideoModeEnum[VideoModeEnum["_1080i6000"] = 15] = "_1080i6000";
            VideoModeEnum[VideoModeEnum["_1080p2500"] = 16] = "_1080p2500";
            VideoModeEnum[VideoModeEnum["_1080p2997"] = 17] = "_1080p2997";
            VideoModeEnum[VideoModeEnum["_1080p3000"] = 18] = "_1080p3000";
            VideoModeEnum[VideoModeEnum["_1080p5000"] = 19] = "_1080p5000";
            VideoModeEnum[VideoModeEnum["_1080p5994"] = 20] = "_1080p5994";
            VideoModeEnum[VideoModeEnum["_1080p6000"] = 21] = "_1080p6000";
            VideoModeEnum[VideoModeEnum["_1556p2398"] = 22] = "_1556p2398";
            VideoModeEnum[VideoModeEnum["_1556p2400"] = 23] = "_1556p2400";
            VideoModeEnum[VideoModeEnum["_1556p2500"] = 24] = "_1556p2500";
            VideoModeEnum[VideoModeEnum["_dci1080p2398"] = 25] = "_dci1080p2398";
            VideoModeEnum[VideoModeEnum["_dci1080p2400"] = 26] = "_dci1080p2400";
            VideoModeEnum[VideoModeEnum["_dci1080p2500"] = 27] = "_dci1080p2500";
            VideoModeEnum[VideoModeEnum["_2160p2398"] = 28] = "_2160p2398";
            VideoModeEnum[VideoModeEnum["_2160p2400"] = 29] = "_2160p2400";
            VideoModeEnum[VideoModeEnum["_2160p2500"] = 30] = "_2160p2500";
            VideoModeEnum[VideoModeEnum["_2160p2997"] = 31] = "_2160p2997";
            VideoModeEnum[VideoModeEnum["_2160p3000"] = 32] = "_2160p3000";
            VideoModeEnum[VideoModeEnum["_dci2160p2398"] = 33] = "_dci2160p2398";
            VideoModeEnum[VideoModeEnum["_dci2160p2400"] = 34] = "_dci2160p2400";
            VideoModeEnum[VideoModeEnum["_dci2160p2500"] = 35] = "_dci2160p2500";
        })(v2xx.VideoModeEnum || (v2xx.VideoModeEnum = {}));
        var VideoModeEnum = v2xx.VideoModeEnum;
        /** */
        (function (ChannelLayoutEnum) {
            ChannelLayoutEnum[ChannelLayoutEnum["_mono"] = 0] = "_mono";
            ChannelLayoutEnum[ChannelLayoutEnum["_stereo"] = 1] = "_stereo";
            ChannelLayoutEnum[ChannelLayoutEnum["_dts"] = 2] = "_dts";
            ChannelLayoutEnum[ChannelLayoutEnum["_dolbye"] = 3] = "_dolbye";
            ChannelLayoutEnum[ChannelLayoutEnum["_dolbydigital"] = 4] = "_dolbydigital";
            ChannelLayoutEnum[ChannelLayoutEnum["_smpte"] = 5] = "_smpte";
            ChannelLayoutEnum[ChannelLayoutEnum["_passthru"] = 6] = "_passthru";
        })(v2xx.ChannelLayoutEnum || (v2xx.ChannelLayoutEnum = {}));
        var ChannelLayoutEnum = v2xx.ChannelLayoutEnum;
        var Paths = (function () {
            function Paths() {
            }
            return Paths;
        }());
        v2xx.Paths = Paths;
        ;
        /** */
        var Consumer = (function () {
            function Consumer() {
            }
            __decorate([
                typedjson_npm_1.JsonMember({ type: String, isRequired: true })
            ], Consumer.prototype, "_type", void 0);
            Consumer = __decorate([
                typedjson_npm_1.JsonObject
            ], Consumer);
            return Consumer;
        }());
        v2xx.Consumer = Consumer;
        /** */
        var DecklinkConsumer = (function (_super) {
            __extends(DecklinkConsumer, _super);
            function DecklinkConsumer() {
                _super.apply(this, arguments);
                this._type = "decklink";
                this.device = 1;
                this.embeddedAudio = false;
                this.channelLayout = "stereo";
                this.latency = "normal";
                this.keyer = "external";
                this.keyOnly = false;
                this.bufferDepth = 3;
                this.customAllocator = true; // @todo: ns 2.0 only
            }
            __decorate([
                typedjson_npm_1.JsonMember({ type: Number })
            ], DecklinkConsumer.prototype, "device", void 0);
            __decorate([
                typedjson_npm_1.JsonMember({ type: Number, name: "key-device" })
            ], DecklinkConsumer.prototype, "keyDevice", void 0);
            __decorate([
                typedjson_npm_1.JsonMember({ type: Boolean, name: "embedded-audio" })
            ], DecklinkConsumer.prototype, "embeddedAudio", void 0);
            __decorate([
                typedjson_npm_1.JsonMember({ type: String, name: "channel-layout" })
            ], DecklinkConsumer.prototype, "channelLayout", void 0);
            __decorate([
                typedjson_npm_1.JsonMember({ type: String })
            ], DecklinkConsumer.prototype, "latency", void 0);
            __decorate([
                typedjson_npm_1.JsonMember({ type: String })
            ], DecklinkConsumer.prototype, "keyer", void 0);
            __decorate([
                typedjson_npm_1.JsonMember({ type: Boolean, name: "key-only" })
            ], DecklinkConsumer.prototype, "keyOnly", void 0);
            __decorate([
                typedjson_npm_1.JsonMember({ type: Number, name: "buffer-depth" })
            ], DecklinkConsumer.prototype, "bufferDepth", void 0);
            __decorate([
                typedjson_npm_1.JsonMember({ type: Boolean, name: "custom-allocator" })
            ], DecklinkConsumer.prototype, "customAllocator", void 0);
            DecklinkConsumer = __decorate([
                typedjson_npm_1.JsonObject
            ], DecklinkConsumer);
            return DecklinkConsumer;
        }(Consumer));
        v2xx.DecklinkConsumer = DecklinkConsumer;
        /** */
        var BluefishConsumer = (function (_super) {
            __extends(BluefishConsumer, _super);
            function BluefishConsumer() {
                _super.apply(this, arguments);
                this._type = "bluefish";
                this.device = 1;
                this.embeddedAudio = false;
                this.channelLayout = "stereo";
                this.keyOnly = false;
            }
            __decorate([
                typedjson_npm_1.JsonMember({ type: Number })
            ], BluefishConsumer.prototype, "device", void 0);
            __decorate([
                typedjson_npm_1.JsonMember({ type: Boolean, name: "embedded-audio" })
            ], BluefishConsumer.prototype, "embeddedAudio", void 0);
            __decorate([
                typedjson_npm_1.JsonMember({ type: String, name: "channel-layout" })
            ], BluefishConsumer.prototype, "channelLayout", void 0);
            __decorate([
                typedjson_npm_1.JsonMember({ type: Boolean, name: "key-only" })
            ], BluefishConsumer.prototype, "keyOnly", void 0);
            BluefishConsumer = __decorate([
                typedjson_npm_1.JsonObject
            ], BluefishConsumer);
            return BluefishConsumer;
        }(Consumer));
        v2xx.BluefishConsumer = BluefishConsumer;
        /** */
        var SystemAudioConsumer = (function (_super) {
            __extends(SystemAudioConsumer, _super);
            function SystemAudioConsumer() {
                _super.apply(this, arguments);
                this._type = "system-audio";
                this.channelLayout = "stereo";
                this.latency = 200;
            }
            __decorate([
                typedjson_npm_1.JsonMember({ type: String, name: "channel-layout" })
            ], SystemAudioConsumer.prototype, "channelLayout", void 0);
            __decorate([
                typedjson_npm_1.JsonMember({ type: Number })
            ], SystemAudioConsumer.prototype, "latency", void 0);
            SystemAudioConsumer = __decorate([
                typedjson_npm_1.JsonObject
            ], SystemAudioConsumer);
            return SystemAudioConsumer;
        }(Consumer));
        v2xx.SystemAudioConsumer = SystemAudioConsumer;
        /** */
        var ScreenConsumer = (function (_super) {
            __extends(ScreenConsumer, _super);
            function ScreenConsumer() {
                _super.apply(this, arguments);
                this._type = "screen";
                this.device = 1; // @todo: wrong default implemented in caspar, should be 0:::
                this.aspectRatio = "default";
                this.stretch = "fill";
                this.windowed = true;
                this.keyOnly = false;
                this.autoDeinterlace = true;
                this.vsync = false;
                this.borderless = false;
                this.interactive = true; // @todo: ns 2.1 only
                this.name = "Screen Consumer"; // @todo: ns 2.0 only
            }
            __decorate([
                typedjson_npm_1.JsonMember({ type: Number })
            ], ScreenConsumer.prototype, "device", void 0);
            __decorate([
                // @todo: wrong default implemented in caspar, should be 0:::
                typedjson_npm_1.JsonMember({ type: String, name: "aspect-ratio" })
            ], ScreenConsumer.prototype, "aspectRatio", void 0);
            __decorate([
                typedjson_npm_1.JsonMember({ type: String })
            ], ScreenConsumer.prototype, "stretch", void 0);
            __decorate([
                typedjson_npm_1.JsonMember({ type: Boolean })
            ], ScreenConsumer.prototype, "windowed", void 0);
            __decorate([
                typedjson_npm_1.JsonMember({ type: Boolean, name: "key-only" })
            ], ScreenConsumer.prototype, "keyOnly", void 0);
            __decorate([
                typedjson_npm_1.JsonMember({ type: Boolean, name: "auto-deinterlace" })
            ], ScreenConsumer.prototype, "autoDeinterlace", void 0);
            __decorate([
                typedjson_npm_1.JsonMember({ type: Boolean })
            ], ScreenConsumer.prototype, "vsync", void 0);
            __decorate([
                typedjson_npm_1.JsonMember({ type: Boolean })
            ], ScreenConsumer.prototype, "borderless", void 0);
            __decorate([
                typedjson_npm_1.JsonMember({ type: Boolean })
            ], ScreenConsumer.prototype, "interactive", void 0);
            __decorate([
                // @todo: ns 2.1 only
                typedjson_npm_1.JsonMember({ type: String })
            ], ScreenConsumer.prototype, "name", void 0);
            ScreenConsumer = __decorate([
                typedjson_npm_1.JsonObject
            ], ScreenConsumer);
            return ScreenConsumer;
        }(Consumer));
        v2xx.ScreenConsumer = ScreenConsumer;
        /** */
        var NewtekIvgaConsumer = (function (_super) {
            __extends(NewtekIvgaConsumer, _super);
            function NewtekIvgaConsumer() {
                _super.apply(this, arguments);
                this._type = "newtek-ivga";
                this.channelLayout = "stereo"; // @todo: ns 2.0 only
                this.provideSync = true; // @todo: ns 2.0 only
            }
            __decorate([
                typedjson_npm_1.JsonMember({ type: String, name: "channel-layout" })
            ], NewtekIvgaConsumer.prototype, "channelLayout", void 0);
            __decorate([
                // @todo: ns 2.0 only
                typedjson_npm_1.JsonMember({ type: Boolean, name: "provide-sync" })
            ], NewtekIvgaConsumer.prototype, "provideSync", void 0);
            NewtekIvgaConsumer = __decorate([
                typedjson_npm_1.JsonObject
            ], NewtekIvgaConsumer);
            return NewtekIvgaConsumer;
        }(Consumer));
        v2xx.NewtekIvgaConsumer = NewtekIvgaConsumer;
        /** */
        var FfmpegConsumer = (function (_super) {
            __extends(FfmpegConsumer, _super);
            function FfmpegConsumer() {
                _super.apply(this, arguments);
                this._type = "ffmpeg";
                this.separateKey = false;
                this.monoStreams = false;
            }
            __decorate([
                typedjson_npm_1.JsonMember({ type: String })
            ], FfmpegConsumer.prototype, "path", void 0);
            __decorate([
                typedjson_npm_1.JsonMember({ type: String })
            ], FfmpegConsumer.prototype, "args", void 0);
            __decorate([
                typedjson_npm_1.JsonMember({ type: Boolean, name: "separate-key" })
            ], FfmpegConsumer.prototype, "separateKey", void 0);
            __decorate([
                typedjson_npm_1.JsonMember({ type: Boolean, name: "mono-streams" })
            ], FfmpegConsumer.prototype, "monoStreams", void 0);
            FfmpegConsumer = __decorate([
                typedjson_npm_1.JsonObject
            ], FfmpegConsumer);
            return FfmpegConsumer;
        }(Consumer));
        v2xx.FfmpegConsumer = FfmpegConsumer;
        /** */
        var FileConsumer = (function (_super) {
            __extends(FileConsumer, _super);
            function FileConsumer() {
                _super.apply(this, arguments);
                this._type = "file";
                this.vcodec = "libx264";
                this.separateKey = false;
            }
            __decorate([
                typedjson_npm_1.JsonMember({ type: String })
            ], FileConsumer.prototype, "path", void 0);
            __decorate([
                typedjson_npm_1.JsonMember({ type: String })
            ], FileConsumer.prototype, "vcodec", void 0);
            __decorate([
                typedjson_npm_1.JsonMember({ type: Boolean, name: "separate-key" })
            ], FileConsumer.prototype, "separateKey", void 0);
            FileConsumer = __decorate([
                typedjson_npm_1.JsonObject
            ], FileConsumer);
            return FileConsumer;
        }(Consumer));
        v2xx.FileConsumer = FileConsumer;
        /** */
        var StreamConsumer = (function (_super) {
            __extends(StreamConsumer, _super);
            function StreamConsumer() {
                _super.apply(this, arguments);
                this._type = "stream";
            }
            __decorate([
                typedjson_npm_1.JsonMember({ type: String })
            ], StreamConsumer.prototype, "path", void 0);
            __decorate([
                typedjson_npm_1.JsonMember({ type: String })
            ], StreamConsumer.prototype, "args", void 0);
            StreamConsumer = __decorate([
                typedjson_npm_1.JsonObject
            ], StreamConsumer);
            return StreamConsumer;
        }(Consumer));
        v2xx.StreamConsumer = StreamConsumer;
        /** */
        var SynctoConsumer = (function (_super) {
            __extends(SynctoConsumer, _super);
            function SynctoConsumer() {
                _super.apply(this, arguments);
                this._type = "syncto";
            }
            __decorate([
                typedjson_npm_1.JsonMember({ type: Number, name: "channel-id" })
            ], SynctoConsumer.prototype, "channelId", void 0);
            SynctoConsumer = __decorate([
                typedjson_npm_1.JsonObject
            ], SynctoConsumer);
            return SynctoConsumer;
        }(Consumer));
        v2xx.SynctoConsumer = SynctoConsumer;
        /** */
        var Channel = (function () {
            function Channel() {
                this.consumers = [];
                this.videoMode = "PAL";
                this.straightAlphaOutput = false;
                this.channelLayout = "stereo";
            }
            Object.defineProperty(Channel.prototype, "_consumers", {
                get: function () {
                    return this.consumers || [];
                },
                /** */
                set: function (consumers) {
                    var _this = this;
                    consumers.forEach(function (i) {
                        if (i.hasOwnProperty("_type")) {
                            var className = i["_type"];
                            var dashBlocks = className.split(/-/);
                            className = dashBlocks.map(function (i) { return i.charAt(0).toUpperCase() + i.slice(1); }).join("") + "Consumer";
                            if (v2xx[className]) {
                                var consumer = new v2xx[className]();
                                var consumerKey = void 0;
                                for (var key in i) {
                                    var dashBlocks_1 = key.split(/-|_/);
                                    consumerKey = dashBlocks_1.map(function (i, o) { return o > 0 ? i.charAt(0).toUpperCase() + i.slice(1) : i; }).join("");
                                    if (!i.hasOwnProperty(key)) {
                                        continue;
                                    }
                                    if (consumer.hasOwnProperty(consumerKey)) {
                                        consumer[consumerKey] = i[key];
                                    }
                                    else {
                                    }
                                }
                                _this.consumers.push(consumer);
                            }
                        }
                    });
                },
                enumerable: true,
                configurable: true
            });
            __decorate([
                typedjson_npm_1.JsonMember({ type: String, isRequired: true })
            ], Channel.prototype, "_type", void 0);
            __decorate([
                typedjson_npm_1.JsonMember({ type: String, isRequired: true, name: "video-mode" })
            ], Channel.prototype, "videoMode", void 0);
            __decorate([
                typedjson_npm_1.JsonMember({ type: Boolean, name: "straight-alpha-output" })
            ], Channel.prototype, "straightAlphaOutput", void 0);
            __decorate([
                typedjson_npm_1.JsonMember({ type: String, name: "channel-layout" })
            ], Channel.prototype, "channelLayout", void 0);
            __decorate([
                typedjson_npm_1.JsonMember({ type: Array, elements: Object, isRequired: true, name: "consumers" })
            ], Channel.prototype, "_consumers", null);
            Channel = __decorate([
                typedjson_npm_1.JsonObject
            ], Channel);
            return Channel;
        }());
        v2xx.Channel = Channel;
        /** */
        var Mixer = (function () {
            function Mixer() {
                this.blendModes = false;
                this.straightAlpha = false;
                this.mipmappingDefaultOn = false;
            }
            __decorate([
                typedjson_npm_1.JsonMember({ type: Boolean, name: "blend-modes" })
            ], Mixer.prototype, "blendModes", void 0);
            __decorate([
                typedjson_npm_1.JsonMember({ type: Boolean, name: "straight-alpha" })
            ], Mixer.prototype, "straightAlpha", void 0);
            __decorate([
                typedjson_npm_1.JsonMember({ type: Boolean, name: "mipmapping-default-on" })
            ], Mixer.prototype, "mipmappingDefaultOn", void 0);
            Mixer = __decorate([
                typedjson_npm_1.JsonObject
            ], Mixer);
            return Mixer;
        }());
        v2xx.Mixer = Mixer;
        /** */
        var Controller = (function () {
            function Controller() {
            }
            __decorate([
                typedjson_npm_1.JsonMember({ type: String })
            ], Controller.prototype, "_type", void 0);
            __decorate([
                typedjson_npm_1.JsonMember({ type: Number })
            ], Controller.prototype, "port", void 0);
            __decorate([
                typedjson_npm_1.JsonMember({ type: String })
            ], Controller.prototype, "protocol", void 0);
            Controller = __decorate([
                typedjson_npm_1.JsonObject
            ], Controller);
            return Controller;
        }());
        v2xx.Controller = Controller;
        /** */
        var OscClient = (function () {
            function OscClient() {
            }
            __decorate([
                typedjson_npm_1.JsonMember({ type: String })
            ], OscClient.prototype, "_type", void 0);
            __decorate([
                typedjson_npm_1.JsonMember({ type: String })
            ], OscClient.prototype, "address", void 0);
            __decorate([
                typedjson_npm_1.JsonMember({ type: Number })
            ], OscClient.prototype, "port", void 0);
            OscClient = __decorate([
                typedjson_npm_1.JsonObject
            ], OscClient);
            return OscClient;
        }());
        v2xx.OscClient = OscClient;
        /** */
        var Thumbnails = (function () {
            function Thumbnails() {
                this.generateThumbnails = true;
                this.width = 256;
                this.height = 144;
                this.videoGrid = 2;
                this.scanIntervalMillis = 5000;
                this.generateDelayMillis = 2000;
                this.videoMode = "720p5000";
            }
            __decorate([
                // @todo: isRequired on childs?
                typedjson_npm_1.JsonMember({ type: Boolean, name: "generate-thumbnails" })
            ], Thumbnails.prototype, "generateThumbnails", void 0);
            __decorate([
                typedjson_npm_1.JsonMember({ type: Number })
            ], Thumbnails.prototype, "width", void 0);
            __decorate([
                typedjson_npm_1.JsonMember({ type: Number })
            ], Thumbnails.prototype, "height", void 0);
            __decorate([
                typedjson_npm_1.JsonMember({ type: Number, name: "video-grid" })
            ], Thumbnails.prototype, "videoGrid", void 0);
            __decorate([
                typedjson_npm_1.JsonMember({ type: Number, name: "scan-interval-millis" })
            ], Thumbnails.prototype, "scanIntervalMillis", void 0);
            __decorate([
                typedjson_npm_1.JsonMember({ type: Number, name: "generate-delay-millis" })
            ], Thumbnails.prototype, "generateDelayMillis", void 0);
            __decorate([
                typedjson_npm_1.JsonMember({ type: String, name: "video-mode" })
            ], Thumbnails.prototype, "videoMode", void 0);
            Thumbnails = __decorate([
                typedjson_npm_1.JsonObject
            ], Thumbnails);
            return Thumbnails;
        }());
        v2xx.Thumbnails = Thumbnails;
        /** */
        var Flash = (function () {
            function Flash() {
                this.bufferDepth = "auto";
            }
            __decorate([
                typedjson_npm_1.JsonMember({ type: String, name: "buffer-depth" })
            ], Flash.prototype, "bufferDepth", void 0);
            Flash = __decorate([
                typedjson_npm_1.JsonObject
            ], Flash);
            return Flash;
        }());
        v2xx.Flash = Flash;
        /** */
        var TemplateHost = (function () {
            function TemplateHost() {
            }
            __decorate([
                typedjson_npm_1.JsonMember({ type: String })
            ], TemplateHost.prototype, "_type", void 0);
            __decorate([
                typedjson_npm_1.JsonMember({ type: String, name: "video-mode" })
            ], TemplateHost.prototype, "videoMode", void 0);
            __decorate([
                typedjson_npm_1.JsonMember({ type: String })
            ], TemplateHost.prototype, "filename", void 0);
            __decorate([
                typedjson_npm_1.JsonMember({ type: Number })
            ], TemplateHost.prototype, "width", void 0);
            __decorate([
                typedjson_npm_1.JsonMember({ type: Number })
            ], TemplateHost.prototype, "height", void 0);
            TemplateHost = __decorate([
                typedjson_npm_1.JsonObject
            ], TemplateHost);
            return TemplateHost;
        }());
        v2xx.TemplateHost = TemplateHost;
        /**  */
        var Osc = (function () {
            function Osc() {
                this.defaultPort = 6250;
                this.predefinedClients = [];
            }
            __decorate([
                typedjson_npm_1.JsonMember({ type: Number, name: "default-port" })
            ], Osc.prototype, "defaultPort", void 0);
            __decorate([
                typedjson_npm_1.JsonMember({ type: Array, elements: OscClient, name: "predefined-clients" })
            ], Osc.prototype, "predefinedClients", void 0);
            Osc = __decorate([
                typedjson_npm_1.JsonObject
            ], Osc);
            return Osc;
        }());
        v2xx.Osc = Osc;
        /**  */
        var ChannelLayout = (function () {
            function ChannelLayout() {
            }
            __decorate([
                typedjson_npm_1.JsonMember({ type: String })
            ], ChannelLayout.prototype, "_type", void 0);
            __decorate([
                typedjson_npm_1.JsonMember({ type: String })
            ], ChannelLayout.prototype, "name", void 0);
            __decorate([
                typedjson_npm_1.JsonMember({ type: String })
            ], ChannelLayout.prototype, "type", void 0);
            __decorate([
                typedjson_npm_1.JsonMember({ type: Number, name: "num-channels" })
            ], ChannelLayout.prototype, "numChannels", void 0);
            __decorate([
                typedjson_npm_1.JsonMember({ type: String })
            ], ChannelLayout.prototype, "channels", void 0);
            ChannelLayout = __decorate([
                typedjson_npm_1.JsonObject
            ], ChannelLayout);
            return ChannelLayout;
        }());
        v2xx.ChannelLayout = ChannelLayout;
        /**  */
        var MixConfig = (function () {
            function MixConfig() {
                this.mappings = [];
            }
            __decorate([
                typedjson_npm_1.JsonMember({ type: String })
            ], MixConfig.prototype, "_type", void 0);
            __decorate([
                typedjson_npm_1.JsonMember({ type: String })
            ], MixConfig.prototype, "from", void 0);
            __decorate([
                typedjson_npm_1.JsonMember({ type: String })
            ], MixConfig.prototype, "to", void 0);
            __decorate([
                typedjson_npm_1.JsonMember({ type: String })
            ], MixConfig.prototype, "mix", void 0);
            __decorate([
                typedjson_npm_1.JsonMember({ type: Array, elements: String })
            ], MixConfig.prototype, "mappings", void 0);
            MixConfig = __decorate([
                typedjson_npm_1.JsonObject
            ], MixConfig);
            return MixConfig;
        }());
        v2xx.MixConfig = MixConfig;
        /**  */
        var Audio = (function () {
            function Audio() {
                this.channelLayouts = [];
                this.mixConfigs = [];
            }
            __decorate([
                typedjson_npm_1.JsonMember({ type: Array, elements: v2xx.ChannelLayout, name: "channel-layouts" })
            ], Audio.prototype, "channelLayouts", void 0);
            __decorate([
                typedjson_npm_1.JsonMember({ type: Array, elements: v2xx.MixConfig, name: "mix-configs" })
            ], Audio.prototype, "mixConfigs", void 0);
            Audio = __decorate([
                typedjson_npm_1.JsonObject
            ], Audio);
            return Audio;
        }());
        v2xx.Audio = Audio;
    })(v2xx = Config.v2xx || (Config.v2xx = {}));
    /** */
    var v207;
    (function (v207) {
        /** */
        var Paths = (function (_super) {
            __extends(Paths, _super);
            function Paths() {
                _super.apply(this, arguments);
                this.mediaPath = "media\\";
                this.logPath = "log\\";
                this.dataPath = "data\\";
                this.templatePath = "templates\\";
                this.thumbnailsPath = "thumbnails\\";
            }
            __decorate([
                typedjson_npm_1.JsonMember({ type: String, name: "media-path" })
            ], Paths.prototype, "mediaPath", void 0);
            __decorate([
                typedjson_npm_1.JsonMember({ type: String, name: "log-path" })
            ], Paths.prototype, "logPath", void 0);
            __decorate([
                typedjson_npm_1.JsonMember({ type: String, name: "data-path" })
            ], Paths.prototype, "dataPath", void 0);
            __decorate([
                typedjson_npm_1.JsonMember({ type: String, name: "template-path" })
            ], Paths.prototype, "templatePath", void 0);
            __decorate([
                typedjson_npm_1.JsonMember({ type: String, name: "thumbnails-path" })
            ], Paths.prototype, "thumbnailsPath", void 0);
            Paths = __decorate([
                typedjson_npm_1.JsonObject
            ], Paths);
            return Paths;
        }(v2xx.Paths));
        v207.Paths = Paths;
        ;
        /** */
        var Mixer = (function (_super) {
            __extends(Mixer, _super);
            function Mixer() {
                _super.apply(this, arguments);
                this.chromaKey = false;
            }
            __decorate([
                typedjson_npm_1.JsonMember({ type: Boolean, name: "chroma-key" })
            ], Mixer.prototype, "chromaKey", void 0);
            Mixer = __decorate([
                typedjson_npm_1.JsonObject
            ], Mixer);
            return Mixer;
        }(v2xx.Mixer));
        v207.Mixer = Mixer;
        /**  */
        var Thumbnails = (function (_super) {
            __extends(Thumbnails, _super);
            function Thumbnails() {
                _super.apply(this, arguments);
                this.mipmap = false;
            }
            __decorate([
                typedjson_npm_1.JsonMember({ type: Boolean })
            ], Thumbnails.prototype, "mipmap", void 0);
            Thumbnails = __decorate([
                typedjson_npm_1.JsonObject
            ], Thumbnails);
            return Thumbnails;
        }(v2xx.Thumbnails));
        v207.Thumbnails = Thumbnails;
    })(v207 = Config.v207 || (Config.v207 = {}));
    /** */
    var v21x;
    (function (v21x) {
        /** */
        var Paths = (function (_super) {
            __extends(Paths, _super);
            function Paths() {
                _super.apply(this, arguments);
                this.mediaPath = "media/";
                this.logPath = "log/";
                this.dataPath = "data/";
                this.templatePath = "template/";
                this.thumbnailPath = "thumbnail/";
                this.fontPath = "font/";
            }
            __decorate([
                typedjson_npm_1.JsonMember({ type: String, name: "media-path" })
            ], Paths.prototype, "mediaPath", void 0);
            __decorate([
                typedjson_npm_1.JsonMember({ type: String, name: "log-path" })
            ], Paths.prototype, "logPath", void 0);
            __decorate([
                typedjson_npm_1.JsonMember({ type: String, name: "data-path" })
            ], Paths.prototype, "dataPath", void 0);
            __decorate([
                typedjson_npm_1.JsonMember({ type: String, name: "template-path" })
            ], Paths.prototype, "templatePath", void 0);
            __decorate([
                typedjson_npm_1.JsonMember({ type: String, name: "thumbnail-path" })
            ], Paths.prototype, "thumbnailPath", void 0);
            __decorate([
                typedjson_npm_1.JsonMember({ type: String, name: "font-path" })
            ], Paths.prototype, "fontPath", void 0);
            Paths = __decorate([
                typedjson_npm_1.JsonObject
            ], Paths);
            return Paths;
        }(v2xx.Paths));
        v21x.Paths = Paths;
        ;
        /**  */
        var Mixer = (function (_super) {
            __extends(Mixer, _super);
            function Mixer() {
                _super.apply(this, arguments);
            }
            Mixer = __decorate([
                typedjson_npm_1.JsonObject
            ], Mixer);
            return Mixer;
        }(v2xx.Mixer));
        v21x.Mixer = Mixer;
        /**  */
        var Thumbnails = (function (_super) {
            __extends(Thumbnails, _super);
            function Thumbnails() {
                _super.apply(this, arguments);
                this.mipmap = true;
            }
            __decorate([
                typedjson_npm_1.JsonMember({ type: Boolean })
            ], Thumbnails.prototype, "mipmap", void 0);
            Thumbnails = __decorate([
                typedjson_npm_1.JsonObject
            ], Thumbnails);
            return Thumbnails;
        }(v2xx.Thumbnails));
        v21x.Thumbnails = Thumbnails;
        /** */
        var Html = (function () {
            function Html() {
                this.remoteDebuggingPort = 0; // @todo: valid range = 0|1024-6535
            }
            __decorate([
                typedjson_npm_1.JsonMember({ type: Number, name: "remote-debugging-port" })
            ], Html.prototype, "remoteDebuggingPort", void 0);
            Html = __decorate([
                typedjson_npm_1.JsonObject
            ], Html);
            return Html;
        }());
        v21x.Html = Html;
        /**  */
        var Osc = (function (_super) {
            __extends(Osc, _super);
            function Osc() {
                _super.apply(this, arguments);
                this.disableSendToAmcpClients = false;
            }
            __decorate([
                typedjson_npm_1.JsonMember({ type: Boolean, name: "disable-send-to-amcp-clients" })
            ], Osc.prototype, "disableSendToAmcpClients", void 0);
            Osc = __decorate([
                typedjson_npm_1.JsonObject
            ], Osc);
            return Osc;
        }(v2xx.Osc));
        v21x.Osc = Osc;
        /**  */
        var ChannelLayout = (function () {
            function ChannelLayout() {
            }
            __decorate([
                typedjson_npm_1.JsonMember({ type: String })
            ], ChannelLayout.prototype, "_type", void 0);
            __decorate([
                typedjson_npm_1.JsonMember({ type: String })
            ], ChannelLayout.prototype, "name", void 0);
            __decorate([
                typedjson_npm_1.JsonMember({ type: String })
            ], ChannelLayout.prototype, "type", void 0);
            __decorate([
                typedjson_npm_1.JsonMember({ type: Number, name: "num-channels" })
            ], ChannelLayout.prototype, "numChannels", void 0);
            __decorate([
                typedjson_npm_1.JsonMember({ type: String, name: "channel-order" })
            ], ChannelLayout.prototype, "channelOrder", void 0);
            ChannelLayout = __decorate([
                typedjson_npm_1.JsonObject
            ], ChannelLayout);
            return ChannelLayout;
        }());
        v21x.ChannelLayout = ChannelLayout;
        /**  */
        var MixConfig = (function () {
            function MixConfig() {
            }
            __decorate([
                typedjson_npm_1.JsonMember({ type: String })
            ], MixConfig.prototype, "_type", void 0);
            __decorate([
                typedjson_npm_1.JsonMember({ type: String, name: "from-type" })
            ], MixConfig.prototype, "fromType", void 0);
            __decorate([
                typedjson_npm_1.JsonMember({ type: String, name: "to-types" })
            ], MixConfig.prototype, "toTypes", void 0);
            __decorate([
                typedjson_npm_1.JsonMember({ type: String })
            ], MixConfig.prototype, "mix", void 0);
            MixConfig = __decorate([
                typedjson_npm_1.JsonObject
            ], MixConfig);
            return MixConfig;
        }());
        v21x.MixConfig = MixConfig;
        /**  */
        var Audio = (function () {
            function Audio() {
                this.channelLayouts = [];
                this.mixConfigs = [];
            }
            __decorate([
                typedjson_npm_1.JsonMember({ type: Array, elements: v21x.ChannelLayout, name: "channel-layouts" })
            ], Audio.prototype, "channelLayouts", void 0);
            __decorate([
                typedjson_npm_1.JsonMember({ type: Array, elements: v21x.MixConfig, name: "mix-configs" })
            ], Audio.prototype, "mixConfigs", void 0);
            Audio = __decorate([
                typedjson_npm_1.JsonObject
            ], Audio);
            return Audio;
        }());
        v21x.Audio = Audio;
        /** */
        (function (ChannelLayoutEnum) {
            ChannelLayoutEnum[ChannelLayoutEnum["_mono"] = 0] = "_mono";
            ChannelLayoutEnum[ChannelLayoutEnum["_stereo"] = 1] = "_stereo";
            ChannelLayoutEnum[ChannelLayoutEnum["_matrix"] = 2] = "_matrix";
            ChannelLayoutEnum[ChannelLayoutEnum["_film"] = 3] = "_film";
            ChannelLayoutEnum[ChannelLayoutEnum["_smpte"] = 4] = "_smpte";
            ChannelLayoutEnum[ChannelLayoutEnum["_ebu_r123_8a"] = 5] = "_ebu_r123_8a";
            ChannelLayoutEnum[ChannelLayoutEnum["_ebu_r123_8b"] = 6] = "_ebu_r123_8b";
            ChannelLayoutEnum[ChannelLayoutEnum["_8ch"] = 7] = "_8ch";
            ChannelLayoutEnum[ChannelLayoutEnum["_16ch"] = 8] = "_16ch";
        })(v21x.ChannelLayoutEnum || (v21x.ChannelLayoutEnum = {}));
        var ChannelLayoutEnum = v21x.ChannelLayoutEnum;
    })(v21x = Config.v21x || (Config.v21x = {}));
    /** */
    var CasparCGAbstract;
    (function (CasparCGAbstract) {
        /** */
        var Audio = (function () {
            function Audio() {
                this.channelLayouts = [];
                this.mixConfigs = [];
            }
            return Audio;
        }());
        CasparCGAbstract.Audio = Audio;
        /**  */
        var MixConfig = (function () {
            function MixConfig() {
            }
            __decorate([
                typedjson_npm_1.JsonMember({ type: String })
            ], MixConfig.prototype, "_type", void 0);
            __decorate([
                typedjson_npm_1.JsonMember({ type: String, name: "from-type" })
            ], MixConfig.prototype, "fromType", void 0);
            __decorate([
                typedjson_npm_1.JsonMember({ type: String, name: "to-types" })
            ], MixConfig.prototype, "toTypes", void 0);
            __decorate([
                typedjson_npm_1.JsonMember({ type: String })
            ], MixConfig.prototype, "mix", void 0);
            return MixConfig;
        }());
        CasparCGAbstract.MixConfig = MixConfig;
    })(CasparCGAbstract = Config.CasparCGAbstract || (Config.CasparCGAbstract = {}));
    /**  */
    var defaultChannel_2xx = { videoMode: "PAL", _consumers: [], consumers: [], _type: "channel" };
    var defaultAMCPController = { _type: "tcp", port: 5250, protocol: "AMCP" };
    var defaultLOGController = { _type: "tcp", port: 3250, protocol: "LOG" };
    // @todo: add interfaces
    /** */
    var ConfigxxVO = (function () {
        function ConfigxxVO() {
            this.channels = [defaultChannel_2xx];
            this.channelGrid = false;
            this.flash = new v2xx.Flash();
            this.templateHosts = [];
        }
        __decorate([
            typedjson_npm_1.JsonMember({ type: Array, elements: v2xx.Channel, isRequired: true })
        ], ConfigxxVO.prototype, "channels", void 0);
        __decorate([
            typedjson_npm_1.JsonMember({ type: Boolean, name: "channel-grid" })
        ], ConfigxxVO.prototype, "channelGrid", void 0);
        __decorate([
            typedjson_npm_1.JsonMember({ type: v2xx.Flash })
        ], ConfigxxVO.prototype, "flash", void 0);
        __decorate([
            typedjson_npm_1.JsonMember({ type: Array, elements: v2xx.TemplateHost, name: "template-hosts" })
        ], ConfigxxVO.prototype, "templateHosts", void 0);
        ConfigxxVO = __decorate([
            typedjson_npm_1.JsonObject
        ], ConfigxxVO);
        return ConfigxxVO;
    }());
    Config.ConfigxxVO = ConfigxxVO;
    /** */
    var Config207VO = (function (_super) {
        __extends(Config207VO, _super);
        function Config207VO() {
            _super.apply(this, arguments);
            this.paths = new v207.Paths();
            this.mixer = new v207.Mixer();
            this.logLevel = "trace"; // @todo: differs from 2.1.0 default
            this.autoDeinterlace = true;
            this.autoTranscode = true;
            this.pipelineTokens = 2;
            this.controllers = [defaultAMCPController];
            this.thumbnails = new v207.Thumbnails();
            this.osc = new v2xx.Osc();
            this.audio = new v2xx.Audio();
        }
        __decorate([
            typedjson_npm_1.JsonMember({ type: v207.Paths, isRequired: true })
        ], Config207VO.prototype, "paths", void 0);
        __decorate([
            typedjson_npm_1.JsonMember({ type: v207.Mixer })
        ], Config207VO.prototype, "mixer", void 0);
        __decorate([
            typedjson_npm_1.JsonMember({ type: String, name: "log-level" })
        ], Config207VO.prototype, "logLevel", void 0);
        __decorate([
            // @todo: differs from 2.1.0 default
            typedjson_npm_1.JsonMember({ type: Boolean, name: "atuo-deinterlace" })
        ], Config207VO.prototype, "autoDeinterlace", void 0);
        __decorate([
            typedjson_npm_1.JsonMember({ type: Boolean, name: "auto-transcode" })
        ], Config207VO.prototype, "autoTranscode", void 0);
        __decorate([
            typedjson_npm_1.JsonMember({ type: Number, name: "pipeline-tokens" })
        ], Config207VO.prototype, "pipelineTokens", void 0);
        __decorate([
            typedjson_npm_1.JsonMember({ type: Array, elements: v2xx.Controller, isRequired: true })
        ], Config207VO.prototype, "controllers", void 0);
        __decorate([
            typedjson_npm_1.JsonMember({ type: v207.Thumbnails })
        ], Config207VO.prototype, "thumbnails", void 0);
        __decorate([
            typedjson_npm_1.JsonMember({ type: v2xx.Osc })
        ], Config207VO.prototype, "osc", void 0);
        __decorate([
            typedjson_npm_1.JsonMember({ type: v2xx.Audio })
        ], Config207VO.prototype, "audio", void 0);
        Config207VO = __decorate([
            typedjson_npm_1.JsonObject
        ], Config207VO);
        return Config207VO;
    }(ConfigxxVO));
    Config.Config207VO = Config207VO;
    /**  */
    var Config210VO = (function (_super) {
        __extends(Config210VO, _super);
        function Config210VO() {
            _super.apply(this, arguments);
            this.paths = new v21x.Paths();
            this.lockClearPhrase = "secret";
            this.mixer = new v21x.Mixer();
            this.logLevel = "info"; // @todo: differs from 2.0.7 default
            this.logCategories = "communication"; // @todo, concated (comma-delimited) values in string
            this.forceDeinterlace = false;
            this.accelerator = "auto";
            this.controllers = [defaultAMCPController, defaultLOGController];
            this.thumbnails = new v21x.Thumbnails();
            this.html = new v21x.Html();
            this.osc = new v21x.Osc();
            this.audio = new v21x.Audio();
        }
        __decorate([
            typedjson_npm_1.JsonMember({ type: v21x.Paths, isRequired: true })
        ], Config210VO.prototype, "paths", void 0);
        __decorate([
            typedjson_npm_1.JsonMember({ type: String, name: "lock-clear-phrase" })
        ], Config210VO.prototype, "lockClearPhrase", void 0);
        __decorate([
            typedjson_npm_1.JsonMember({ type: v21x.Mixer })
        ], Config210VO.prototype, "mixer", void 0);
        __decorate([
            typedjson_npm_1.JsonMember({ type: String, name: "log-level" })
        ], Config210VO.prototype, "logLevel", void 0);
        __decorate([
            // @todo: differs from 2.0.7 default
            typedjson_npm_1.JsonMember({ type: String, name: "log-categories" })
        ], Config210VO.prototype, "logCategories", void 0);
        __decorate([
            // @todo, concated (comma-delimited) values in string
            typedjson_npm_1.JsonMember({ type: Boolean, name: "force-deinterlace" })
        ], Config210VO.prototype, "forceDeinterlace", void 0);
        __decorate([
            typedjson_npm_1.JsonMember({ type: String })
        ], Config210VO.prototype, "accelerator", void 0);
        __decorate([
            typedjson_npm_1.JsonMember({ type: Array, elements: v2xx.Controller, isRequired: true })
        ], Config210VO.prototype, "controllers", void 0);
        __decorate([
            typedjson_npm_1.JsonMember({ type: v21x.Thumbnails })
        ], Config210VO.prototype, "thumbnails", void 0);
        __decorate([
            typedjson_npm_1.JsonMember({ type: v21x.Html })
        ], Config210VO.prototype, "html", void 0);
        __decorate([
            typedjson_npm_1.JsonMember({ type: v21x.Osc })
        ], Config210VO.prototype, "osc", void 0);
        __decorate([
            typedjson_npm_1.JsonMember({ type: v21x.Audio })
        ], Config210VO.prototype, "audio", void 0);
        Config210VO = __decorate([
            typedjson_npm_1.JsonObject
        ], Config210VO);
        return Config210VO;
    }(ConfigxxVO));
    Config.Config210VO = Config210VO;
    /** */
    var AbstractDefaultCasparCGConfig = (function () {
        function AbstractDefaultCasparCGConfig() {
            this.paths = new v2xx.Paths();
            this.lockClearPhrase = null;
            this.channels = [];
            this.mixer = new v2xx.Mixer();
            this.controllers = [];
            this.logLevel = "";
            this.logCategories = null;
            this.channelGrid = false;
            this.forceDeinterlace = null;
            this.autoDeinterlace = null;
            this.autoTranscode = null;
            this.pipelineTokens = null;
            this.accelerator = null;
            this.thumbnails = new v21x.Thumbnails();
            this.flash = new v2xx.Flash();
            this.html = new v21x.Html();
            this.templateHosts = [];
            this.osc = new v2xx.Osc();
            this.audio = new CasparCGAbstract.Audio();
        }
        return AbstractDefaultCasparCGConfig;
    }());
    Config.AbstractDefaultCasparCGConfig = AbstractDefaultCasparCGConfig;
    /** */ var CasparCGConfig = (function (_super) {
        __extends(CasparCGConfig, _super);
        function CasparCGConfig(initConfigVOOrString) {
            _super.call(this);
            this.mode = ServerVersion.V2xx;
            if (typeof initConfigVOOrString === "object") {
                var initConfigVO = initConfigVOOrString;
                if (initConfigVO instanceof Config207VO) {
                    this.mode = ServerVersion.V207;
                    this.fromV207ConfigVO(initConfigVO);
                }
                else if (initConfigVO instanceof Config210VO) {
                    this.mode = ServerVersion.V210;
                    this.fromV210ConfigVO(initConfigVO);
                }
                else {
                    this.import(initConfigVO);
                }
            }
            else if (typeof initConfigVOOrString === "string") {
                var versionString = initConfigVOOrString;
                if (versionString === "2.0.7") {
                    this.mode = ServerVersion.V207;
                }
                else if (versionString === "2.1.0") {
                    this.mode = ServerVersion.V210;
                }
            }
        }
        /** */
        CasparCGConfig.prototype.import = function (configVO) {
            for (var key in configVO) {
                if (configVO.hasOwnProperty(key) && this.hasOwnProperty(key)) {
                    this[key] = configVO[key];
                }
            }
        };
        /** */
        CasparCGConfig.prototype.fromV207ConfigVO = function (configVO) {
            var _this = this;
            // paths
            this.paths = new v21x.Paths();
            this.paths.mediaPath = configVO.paths.mediaPath;
            this.paths.logPath = configVO.paths.logPath;
            this.paths.dataPath = configVO.paths.dataPath;
            this.paths.templatePath = configVO.paths.templatePath;
            this.paths.thumbnailPath = configVO.paths.thumbnailsPath;
            this.paths.fontPath = null;
            // lock clear phrase
            this.lockClearPhrase = null;
            // channels
            this.channels = configVO.channels;
            // mixer
            this.mixer = configVO.mixer;
            // controllers
            this.controllers = configVO.controllers;
            // log level
            this.logLevel = configVO.logLevel;
            // log categories
            this.logCategories = null;
            // channel grid
            this.channelGrid = configVO.channelGrid;
            // force deinterlace
            this.forceDeinterlace = null;
            // auto deinterlace
            this.autoDeinterlace = configVO.autoDeinterlace;
            // auto transcode
            this.autoTranscode = configVO.autoTranscode;
            // pipeline tokens
            this.pipelineTokens = configVO.pipelineTokens;
            // accelerator
            this.accelerator = null;
            // thumbnails
            this.thumbnails = configVO.thumbnails;
            // flash
            this.flash = configVO.flash;
            // html
            this.html = { remoteDebuggingPort: -1 }; // @todo: default null
            // template hosts
            this.templateHosts = configVO.templateHosts;
            // osc
            this.osc = new v2xx.Osc();
            this.osc.defaultPort = configVO.osc.defaultPort;
            this.osc.disableSendToAmcpClients = null;
            this.osc.predefinedClients = configVO.osc.predefinedClients;
            // audio
            this.audio = new CasparCGAbstract.Audio();
            this.audio.channelLayouts = new Array();
            configVO.audio.channelLayouts.forEach(function (i) {
                var channelLayout = new v21x.ChannelLayout();
                channelLayout._type = i._type;
                channelLayout.channelOrder = i.channels;
                channelLayout.name = i.name;
                channelLayout.numChannels = i.numChannels;
                channelLayout.type = i.type;
                _this.audio.channelLayouts.push(channelLayout);
            });
            this.audio.mixConfigs = new Array();
            configVO.audio.mixConfigs.forEach(function (i) {
                var mixConfig = new CasparCGAbstract.MixConfig();
                mixConfig._type = i._type;
                mixConfig.fromType = i.from;
                mixConfig.toTypes = i.to;
                mixConfig.mix = { mixType: i.mix, destinations: {} };
                // convert 2.0.x mix-config to 2.1.x
                var destinations = {};
                var mapSections;
                for (var o = 0; o < i.mappings.length; o++) {
                    mapSections = i.mappings[o].match(/(\S+)\s+(\S+)\s+(\S+)/);
                    if (mapSections !== null) {
                        var src = mapSections[1];
                        var dst = mapSections[2];
                        var expr = mapSections[3];
                        if (!destinations.hasOwnProperty(dst)) {
                            destinations[dst] = [];
                        }
                        destinations[dst].push({ source: src, expression: expr });
                    }
                }
                mixConfig.mix.destinations = destinations;
                _this.audio.mixConfigs.push(mixConfig);
            });
        };
        /** */
        CasparCGConfig.prototype.fromV210ConfigVO = function (configVO) {
            var _this = this;
            // paths
            this.paths = configVO.paths;
            // lock clear phrase
            this.lockClearPhrase = configVO.lockClearPhrase;
            // channels
            this.channels = configVO.channels;
            // mixer
            this.mixer = new v2xx.Mixer();
            this.mixer.blendModes = configVO.mixer.blendModes;
            this.mixer.chromaKey = null;
            this.mixer.mipmappingDefaultOn = configVO.mixer.mipmappingDefaultOn;
            this.mixer.straightAlpha = configVO.mixer.straightAlpha;
            // controllers
            this.controllers = configVO.controllers;
            // log level
            this.logLevel = configVO.logLevel;
            // log categories
            this.logCategories = configVO.logCategories;
            // channel grid
            this.channelGrid = configVO.channelGrid;
            // force deinterlace
            this.forceDeinterlace = configVO.forceDeinterlace;
            // auto deinterlace
            this.autoDeinterlace = null;
            // auto transcode
            this.autoTranscode = null;
            // pipeline tokens
            this.pipelineTokens = -1; // @todo: null value
            // accelerator
            this.accelerator = configVO.accelerator;
            // thumbnails
            this.thumbnails = configVO.thumbnails;
            // flash
            this.flash = configVO.flash;
            // html
            this.html = configVO.html;
            // template hosts
            this.templateHosts = configVO.templateHosts;
            // osc
            this.osc = configVO.osc;
            // audio
            this.audio = new CasparCGAbstract.Audio();
            this.audio.channelLayouts = configVO.audio.channelLayouts;
            this.audio.mixConfigs = new Array();
            configVO.audio.mixConfigs.forEach(function (i) {
                var mixConfig = new CasparCGAbstract.MixConfig();
                mixConfig._type = i._type;
                mixConfig.fromType = i.fromType;
                mixConfig.toTypes = i.toTypes;
                var destinations = {};
                var mixType = i.mix.match(/\&lt\;|\</g) !== null ? "average" : "add";
                var src;
                var dest;
                var expr;
                i.mix.split("|").map(function (i) { return i.replace(/^\s*|\s*$/g, ""); }).forEach(function (o) {
                    var srcDstSplit = o.split(/\&lt\;|\<|\=/);
                    dest = srcDstSplit[0].replace(/^\s*|\s*$/g, "");
                    destinations[dest] = [];
                    srcDstSplit[1].split("+").forEach(function (u) {
                        var exprSplit = u.split("*");
                        if (exprSplit.length > 1) {
                            expr = exprSplit[0].replace(/^\s*|\s*$/g, "");
                            src = exprSplit[1].replace(/^\s*|\s*$/g, "");
                        }
                        else {
                            src = exprSplit[0].replace(/^\s*|\s*$/g, "");
                            expr = "1.0";
                        }
                        destinations[dest].push({ source: src, expression: expr });
                    });
                });
                mixConfig.mix = { mixType: mixType, destinations: destinations };
                _this.audio.mixConfigs.push(mixConfig);
            });
        };
        Object.defineProperty(CasparCGConfig.prototype, "V207ConfigVO", {
            /** */
            get: function () { return new Config207VO(); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CasparCGConfig.prototype, "V210ConfigVO", {
            /** */
            get: function () { return new Config210VO(); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CasparCGConfig.prototype, "configXML", {
            /** */
            get: function () {
                if (this.mode === ServerVersion.V207) {
                    return this.V207ConfigXML;
                }
                else if (this.mode === ServerVersion.V210) {
                    return this.V210ConfigXML;
                }
                return "";
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CasparCGConfig.prototype, "V207ConfigXML", {
            /** */
            get: function () {
                var root = xmlbuilder_1.create("configuration");
                // paths
                var paths = new v2xx.Paths();
                paths = this.paths;
                paths.thumbnailsPath = paths.thumbnailPath;
                delete paths.thumbnailPath;
                CasparCGConfig.addFormattedXMLChildsFromObject(root.ele("paths"), paths); // , ["mediaPath", "logPath", "dataPath", "templatesPath", "thumbnailPath"]);
                // channels
                var channels = root.ele("channels");
                this.channels.forEach(function (i) {
                    var channel = channels.ele("channel");
                    CasparCGConfig.addFormattedXMLChildsFromObject(channel, i, ["_type", "consumers", "_consumers"]);
                    // consumer
                    var consumers = channel.ele("consumers");
                    i.consumers.forEach(function (i) {
                        var consumer = consumers.ele(i._type);
                        CasparCGConfig.addFormattedXMLChildsFromObject(consumer, i, ["_type"]);
                    });
                });
                // controllers
                var controllers = root.ele("controllers");
                this.controllers.forEach(function (i) {
                    var controller = controllers.ele(i._type);
                    CasparCGConfig.addFormattedXMLChildsFromObject(controller, i, ["_type"]);
                });
                // all root-level single values
                CasparCGConfig.addFormattedXMLChildsFromArray(root, this, ["logLevel", "autoDeinterlace", "autoTranscode", "pipelineTokens", "channelGrid"]);
                // mixer
                if (this.mixer) {
                    CasparCGConfig.addFormattedXMLChildsFromObject(root.ele("mixer"), this.mixer);
                }
                // flash
                if (this.flash) {
                    CasparCGConfig.addFormattedXMLChildsFromObject(root.ele("flash"), this.flash);
                }
                // template hosts
                if (this.templateHosts && this.templateHosts.length > 0) {
                    var templateHosts_1 = root.ele("template-hosts");
                    this.templateHosts.forEach(function (i) {
                        var templatehost = templateHosts_1.ele(i._type);
                        CasparCGConfig.addFormattedXMLChildsFromObject(templatehost, i, ["_type"]);
                    });
                }
                // thumbnails
                if (this.thumbnails) {
                    CasparCGConfig.addFormattedXMLChildsFromObject(root.ele("thumbnails"), this.thumbnails);
                }
                // osc
                if (this.osc) {
                    var osc = root.ele("osc");
                    // predefined clients
                    if (this.osc.predefinedClients && this.osc.predefinedClients.length > 0) {
                        var predefinedClients_1 = osc.ele("predefined-clients");
                        this.osc.predefinedClients.forEach(function (i) {
                            predefinedClients_1;
                            var client = predefinedClients_1.ele(i._type);
                            CasparCGConfig.addFormattedXMLChildsFromObject(client, i, ["_type"]);
                        });
                    }
                }
                // audio
                if (this.audio && ((this.audio.channelLayouts && this.audio.channelLayouts.length > 0) || (this.audio.mixConfigs && this.audio.mixConfigs.length > 0))) {
                    var audio = root.ele("audio");
                    if (this.audio.channelLayouts && this.audio.channelLayouts.length > 0) {
                        var channelLayouts_1 = audio.ele("channel-layouts");
                        this.audio.channelLayouts.forEach(function (i) {
                            var channelLayout = channelLayouts_1.ele("channel-layout");
                            if (i.name)
                                channelLayout.att("name", i.name);
                            if (i.type)
                                channelLayout.att("type", i.type);
                            if (i.numChannels)
                                channelLayout.att("num-channels", i.numChannels);
                            if (i.channelOrder)
                                channelLayout.att("channels", i.channelOrder);
                        });
                    }
                    if (this.audio.mixConfigs && this.audio.mixConfigs.length > 0) {
                        var mixConfigs_1 = audio.ele("mix-configs");
                        this.audio.mixConfigs.forEach(function (i) {
                            var mixConfig = mixConfigs_1.ele("mix-config");
                            mixConfig.ele("from", i.fromType);
                            mixConfig.ele("to", i.toTypes);
                            mixConfig.ele("mix", i.mix.mixType);
                            var mappings = mixConfig.ele("mappings");
                            var _loop_1 = function(o) {
                                var destination = i.mix.destinations[o];
                                destination.forEach(function (u) {
                                    mappings.ele("mapping", u.source + " " + o + " " + u.expression);
                                });
                            };
                            for (var o in i.mix.destinations) {
                                _loop_1(o);
                            }
                        });
                    }
                }
                return root.end({ pretty: true });
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CasparCGConfig.prototype, "V210ConfigXML", {
            /** */
            get: function () {
                var root = xmlbuilder_1.create("configuration");
                // paths
                CasparCGConfig.addFormattedXMLChildsFromObject(root.ele("paths"), this.paths); // , ["mediaPath", "logPath", "dataPath", "templatePath", "thumbnailPath", "fontpath"]);
                // channels
                var channels = root.ele("channels");
                this.channels.forEach(function (i) {
                    var channel = channels.ele("channel");
                    CasparCGConfig.addFormattedXMLChildsFromObject(channel, i, ["_type", "consumers", "_consumers"]);
                    // consumer
                    var consumers = channel.ele("consumers");
                    i.consumers.forEach(function (i) {
                        var consumer = consumers.ele(i._type);
                        CasparCGConfig.addFormattedXMLChildsFromObject(consumer, i, ["_type"]);
                    });
                });
                // controllers
                var controllers = root.ele("controllers");
                this.controllers.forEach(function (i) {
                    var controller = controllers.ele(i._type);
                    CasparCGConfig.addFormattedXMLChildsFromObject(controller, i, ["_type"]);
                });
                // all root-level single values
                CasparCGConfig.addFormattedXMLChildsFromArray(root, this, ["lockClearPhrase", "logLevel", "logCategories", "forceDeinterlace", "channelGrid", "accelerator"]);
                // mixer
                if (this.mixer) {
                    CasparCGConfig.addFormattedXMLChildsFromObject(root.ele("mixer"), this.mixer);
                }
                // flash
                if (this.flash) {
                    CasparCGConfig.addFormattedXMLChildsFromObject(root.ele("flash"), this.flash);
                }
                // html
                if (this.html) {
                    CasparCGConfig.addFormattedXMLChildsFromObject(root.ele("html"), this.html);
                }
                // template hosts
                if (this.templateHosts && this.templateHosts.length > 0) {
                    var templateHosts_2 = root.ele("template-hosts");
                    this.templateHosts.forEach(function (i) {
                        var templatehost = templateHosts_2.ele(i._type);
                        CasparCGConfig.addFormattedXMLChildsFromObject(templatehost, i, ["_type"]);
                    });
                }
                // thumbnails
                if (this.thumbnails) {
                    CasparCGConfig.addFormattedXMLChildsFromObject(root.ele("thumbnails"), this.thumbnails);
                }
                // osc
                if (this.osc) {
                    var osc = root.ele("osc");
                    CasparCGConfig.addFormattedXMLChildsFromArray(osc, this.osc, ["defaultPort", "disableSendToAmcpClients"]);
                    // predefined clients
                    if (this.osc.predefinedClients && this.osc.predefinedClients.length > 0) {
                        var predefinedClients_2 = osc.ele("predefined-clients");
                        this.osc.predefinedClients.forEach(function (i) {
                            predefinedClients_2;
                            var client = predefinedClients_2.ele(i._type);
                            CasparCGConfig.addFormattedXMLChildsFromObject(client, i, ["_type"]);
                        });
                    }
                }
                // audio
                if (this.audio && ((this.audio.channelLayouts && this.audio.channelLayouts.length > 0) || (this.audio.mixConfigs && this.audio.mixConfigs.length > 0))) {
                    var audio = root.ele("audio");
                    if (this.audio.channelLayouts && this.audio.channelLayouts.length > 0) {
                        var channelLayouts_2 = audio.ele("channel-layouts");
                        this.audio.channelLayouts.forEach(function (i) {
                            var channelLayout = channelLayouts_2.ele("channel-layout");
                            if (i.name)
                                channelLayout.att("name", i.name);
                            if (i.type)
                                channelLayout.att("type", i.type);
                            if (i.numChannels)
                                channelLayout.att("num-channels", i.numChannels);
                            if (i.channelOrder)
                                channelLayout.att("channel-order", i.channelOrder);
                        });
                    }
                    if (this.audio.mixConfigs && this.audio.mixConfigs.length > 0) {
                        var mixConfigs_2 = audio.ele("mix-configs");
                        this.audio.mixConfigs.forEach(function (i) {
                            var mixStrings = [];
                            var mixOperator = i.mix.mixType === "average" ? "<" : i.mix.mixType === "add" ? "=" : "";
                            var destination;
                            var _loop_2 = function(o) {
                                destination = i.mix.destinations[o];
                                if (destination.length > 1) {
                                    var subSourceStrings_1 = [];
                                    destination.forEach(function (u) {
                                        subSourceStrings_1.push(u.expression === "1.0" ? u.source : (u.expression.toString() + "*" + u.source));
                                    });
                                    mixStrings.push(o + " " + mixOperator + " " + subSourceStrings_1.join(" + "));
                                }
                                else {
                                    mixStrings.push(o + " = " + (destination[0].expression === "1.0" ? destination[0].source : (destination[0].expression.toString() + "*" + destination[0].source)));
                                }
                            };
                            for (var o in i.mix.destinations) {
                                _loop_2(o);
                            }
                            mixConfigs_2.ele("mix-config")
                                .att("from-type", i.fromType)
                                .att("to-types", i.toTypes)
                                .att("mix", mixStrings.join(" | "));
                        });
                    }
                }
                return root.end({ pretty: true });
            },
            enumerable: true,
            configurable: true
        });
        /** */
        CasparCGConfig.addFormattedXMLChildsFromObject = function (root, data, blacklist) {
            blacklist && blacklist.push("arrayNo", "array-no");
            for (var key in data) {
                if ((key === "constructor") || (blacklist && blacklist.indexOf(key) > -1)) {
                    continue;
                }
                var value = data[key];
                if (value !== null && value !== "") {
                    var keyBlocks = key.split(/(?=[A-Z])/);
                    key = keyBlocks.map(function (i) { return i.toLowerCase(); }).join("-");
                    root["ele"].call(root, key, value);
                }
            }
            return root;
        };
        /** */
        CasparCGConfig.addFormattedXMLChildsFromArray = function (root, data, whitelist) {
            if (whitelist) {
                whitelist.forEach(function (key) {
                    if (data.hasOwnProperty(key)) {
                        var value = data[key];
                        if (value !== null && value !== "") {
                            var keyBlocks = key.split(/(?=[A-Z])/);
                            key = keyBlocks.map(function (i) { return i.toLowerCase(); }).join("-");
                            root["ele"].call(root, key, value);
                        }
                    }
                });
            }
            return root;
        };
        return CasparCGConfig;
    }(AbstractDefaultCasparCGConfig));
    Config.CasparCGConfig = CasparCGConfig;
})(Config = exports.Config || (exports.Config = {}));
