/**  */
export declare namespace Config {
    /** */
    namespace v2xx {
        /** */
        enum VideoModeEnum {
            _PAL = 0,
            _NTSC = 1,
            _576p2500 = 2,
            _720p2398 = 3,
            _720p2400 = 4,
            _720p2500 = 5,
            _720p5000 = 6,
            _720p2997 = 7,
            _720p5994 = 8,
            _720p3000 = 9,
            _720p6000 = 10,
            _1080p2398 = 11,
            _1080p2400 = 12,
            _1080i5000 = 13,
            _1080i5994 = 14,
            _1080i6000 = 15,
            _1080p2500 = 16,
            _1080p2997 = 17,
            _1080p3000 = 18,
            _1080p5000 = 19,
            _1080p5994 = 20,
            _1080p6000 = 21,
            _1556p2398 = 22,
            _1556p2400 = 23,
            _1556p2500 = 24,
            _dci1080p2398 = 25,
            _dci1080p2400 = 26,
            _dci1080p2500 = 27,
            _2160p2398 = 28,
            _2160p2400 = 29,
            _2160p2500 = 30,
            _2160p2997 = 31,
            _2160p3000 = 32,
            _dci2160p2398 = 33,
            _dci2160p2400 = 34,
            _dci2160p2500 = 35,
        }
        /** */
        enum ChannelLayoutEnum {
            _mono = 0,
            _stereo = 1,
            _dts = 2,
            _dolbye = 3,
            _dolbydigital = 4,
            _smpte = 5,
            _passthru = 6,
        }
        class Paths {
            mediaPath?: string | null;
            logPath?: string | null;
            dataPath?: string | null;
            templatePath?: string | null;
            thumbnailPath?: string | null;
            thumbnailsPath?: string | null;
            fontPath?: string | null;
        }
        /** */
        class Consumer {
            _type: string;
        }
        /** */
        class DecklinkConsumer extends Consumer {
            _type: string;
            device: number;
            keyDevice: Number;
            embeddedAudio: boolean;
            channelLayout: string;
            latency: string;
            keyer: string;
            keyOnly: boolean;
            bufferDepth: number;
            customAllocator: boolean;
        }
        /** */
        class BluefishConsumer extends Consumer {
            _type: string;
            device: number;
            embeddedAudio: boolean;
            channelLayout: string;
            keyOnly: boolean;
        }
        /** */
        class SystemAudioConsumer extends Consumer {
            _type: string;
            channelLayout: string;
            latency: number;
        }
        /** */
        class ScreenConsumer extends Consumer {
            _type: string;
            device: number;
            aspectRatio: string;
            stretch: string;
            windowed: boolean;
            keyOnly: boolean;
            autoDeinterlace: boolean;
            vsync: boolean;
            borderless: boolean;
            interactive: boolean;
            name: string;
        }
        /** */
        class NewtekIvgaConsumer extends Consumer {
            _type: string;
            channelLayout: string;
            provideSync: boolean;
        }
        /** */
        class FfmpegConsumer extends Consumer {
            _type: string;
            path: string;
            args: string;
            separateKey: boolean;
            monoStreams: boolean;
        }
        /** */
        class FileConsumer extends Consumer {
            _type: string;
            path: string;
            vcodec: string;
            separateKey: boolean;
        }
        /** */
        class StreamConsumer extends Consumer {
            _type: string;
            path: string;
            args: string;
        }
        /** */
        class SynctoConsumer extends Consumer {
            _type: string;
            channelId: Number;
        }
        /** */
        class Channel {
            consumers: Array<Consumer>;
            _type: string;
            videoMode: string;
            straightAlphaOutput?: boolean;
            channelLayout?: string;
            /** */
            _consumers: Array<Object>;
        }
        /** */
        class Mixer {
            chromaKey?: boolean | null;
            blendModes: boolean;
            straightAlpha: boolean;
            mipmappingDefaultOn: boolean;
        }
        /** */
        class Controller {
            _type: string;
            port: number;
            protocol: string;
        }
        /** */
        class OscClient {
            _type: string;
            address: string;
            port: number;
        }
        /** */
        class Thumbnails {
            generateThumbnails: boolean;
            width: number;
            height: number;
            videoGrid: number;
            scanIntervalMillis: number;
            generateDelayMillis: number;
            videoMode: string;
        }
        /** */
        class Flash {
            bufferDepth: string;
        }
        /** */
        class TemplateHost {
            _type: string;
            videoMode: string;
            filename: string;
            width: number;
            height: number;
        }
        /**  */
        class Osc {
            disableSendToAmcpClients?: boolean | null;
            defaultPort: number;
            predefinedClients: Array<OscClient>;
        }
        /**  */
        class ChannelLayout {
            _type: string;
            name: string;
            type: string;
            numChannels: number;
            channels: string;
        }
        /**  */
        class MixConfig {
            _type: string;
            from: string;
            to: string;
            mix: string;
            mappings: Array<string>;
        }
        /**  */
        class Audio {
            channelLayouts: Array<v2xx.ChannelLayout>;
            mixConfigs: Array<v2xx.MixConfig>;
        }
    }
    /** */
    namespace v207 {
        /** */
        class Paths extends v2xx.Paths {
            mediaPath: string;
            logPath: string;
            dataPath: string;
            templatePath: string;
            thumbnailsPath: string;
        }
        /** */
        class Mixer extends v2xx.Mixer {
            chromaKey: boolean;
        }
        /**  */
        class Thumbnails extends v2xx.Thumbnails {
            mipmap: boolean;
        }
    }
    /** */
    namespace v21x {
        /** */
        class Paths extends v2xx.Paths {
            mediaPath: string;
            logPath: string;
            dataPath: string;
            templatePath: string;
            thumbnailPath: string;
            fontPath: string;
        }
        /**  */
        class Mixer extends v2xx.Mixer {
        }
        /**  */
        class Thumbnails extends v2xx.Thumbnails {
            mipmap: boolean;
        }
        /** */
        class Html {
            remoteDebuggingPort: number;
        }
        /**  */
        class Osc extends v2xx.Osc {
            disableSendToAmcpClients: boolean;
        }
        /**  */
        class ChannelLayout {
            _type: string;
            name: string;
            type: string;
            numChannels: number;
            channelOrder: string;
        }
        /**  */
        class MixConfig {
            _type: string;
            fromType: string;
            toTypes: string;
            mix: string;
        }
        /**  */
        class Audio {
            channelLayouts: Array<v21x.ChannelLayout>;
            mixConfigs: Array<v21x.MixConfig>;
        }
        /** */
        enum ChannelLayoutEnum {
            _mono = 0,
            _stereo = 1,
            _matrix = 2,
            _film = 3,
            _smpte = 4,
            _ebu_r123_8a = 5,
            _ebu_r123_8b = 6,
            _8ch = 7,
            _16ch = 8,
        }
    }
    /** */
    namespace v21x {
    }
    /** */
    namespace CasparCGAbstract {
        /** */
        class Audio {
            channelLayouts: Array<v21x.ChannelLayout>;
            mixConfigs: Array<CasparCGAbstract.MixConfig>;
        }
        /**  */
        class MixConfig {
            _type: string;
            fromType: string;
            toTypes: string;
            mix: {
                mixType: string;
                destinations: {
                    [destination: string]: Array<{
                        source: string;
                        expression: string;
                    }>;
                };
            };
        }
    }
    /** */
    class ConfigxxVO {
        channels: Array<v2xx.Channel>;
        channelGrid: boolean;
        flash: v2xx.Flash;
        templateHosts: Array<v2xx.TemplateHost>;
    }
    /** */
    class Config207VO extends ConfigxxVO {
        paths: v207.Paths;
        mixer: v207.Mixer;
        logLevel: string;
        autoDeinterlace: boolean;
        autoTranscode: boolean;
        pipelineTokens: number;
        controllers: Array<v2xx.Controller>;
        thumbnails: v207.Thumbnails;
        osc: v2xx.Osc;
        audio: v2xx.Audio;
    }
    /**  */
    class Config210VO extends ConfigxxVO {
        paths: v21x.Paths;
        lockClearPhrase: string;
        mixer: v21x.Mixer;
        logLevel: string;
        logCategories: string;
        forceDeinterlace: boolean;
        accelerator: string;
        controllers: Array<v2xx.Controller>;
        thumbnails: v21x.Thumbnails;
        html: v21x.Html;
        osc: v21x.Osc;
        audio: v21x.Audio;
    }
    /** */
    interface ICasparCGConfig {
        paths: v2xx.Paths;
        lockClearPhrase: string | null;
        channels: Array<v2xx.Channel>;
        mixer: v2xx.Mixer;
        controllers: Array<v2xx.Controller>;
        logLevel: string;
        logCategories: string | null;
        channelGrid: boolean;
        forceDeinterlace: boolean | null;
        autoDeinterlace: boolean | null;
        autoTranscode: boolean | null;
        pipelineTokens: number | null;
        accelerator: string | null;
        thumbnails: v21x.Thumbnails;
        flash: v2xx.Flash;
        html: v21x.Html;
        templateHosts: Array<v2xx.TemplateHost>;
        osc: v2xx.Osc;
        audio: CasparCGAbstract.Audio;
    }
    /** */
    abstract class AbstractDefaultCasparCGConfig implements ICasparCGConfig {
        paths: v2xx.Paths;
        lockClearPhrase: string | null;
        channels: Array<v2xx.Channel>;
        mixer: v2xx.Mixer;
        controllers: Array<v2xx.Controller>;
        logLevel: string;
        logCategories: string | null;
        channelGrid: boolean;
        forceDeinterlace: boolean | null;
        autoDeinterlace: boolean | null;
        autoTranscode: boolean | null;
        pipelineTokens: number | null;
        accelerator: string | null;
        thumbnails: v21x.Thumbnails;
        flash: v2xx.Flash;
        html: v21x.Html;
        templateHosts: Array<v2xx.TemplateHost>;
        osc: v2xx.Osc;
        audio: CasparCGAbstract.Audio;
    }
    /** */ class CasparCGConfig extends AbstractDefaultCasparCGConfig implements ICasparCGConfig {
        private mode;
        /** */
        constructor(version: string);
        constructor(initConfigVO: Config207VO | Config210VO | {});
        /** */
        import(configVO: Object): void;
        /** */
        fromV207ConfigVO(configVO: Config207VO): void;
        /** */
        fromV210ConfigVO(configVO: Config210VO): void;
        /** */
        readonly V207ConfigVO: Config207VO;
        /** */
        readonly V210ConfigVO: Config210VO;
        /** */
        readonly configXML: string;
        /** */
        readonly V207ConfigXML: string;
        /** */
        readonly V210ConfigXML: string;
        /** */
        static addFormattedXMLChildsFromObject(root: Object, data: Object, blacklist?: Array<string>): Object;
        /** */
        static addFormattedXMLChildsFromArray(root: Object, data: Object, whitelist?: Array<string>): Object;
    }
}
