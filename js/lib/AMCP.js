"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ServerStateEnum_1 = require("./ServerStateEnum");
// ResponseNS
var ResponseSignature_1 = require("./ResponseSignature");
var ResponseValidators_1 = require("./ResponseValidators");
var ResponseParsers_1 = require("./ResponseParsers");
var ResponseSignature = ResponseSignature_1.Response.ResponseSignature;
// Command NS
var AbstractCommand_1 = require("./AbstractCommand");
var AbstractCommand = AbstractCommand_1.Command.AbstractCommand;
var AbstractOrChannelOrLayerCommand = AbstractCommand_1.Command.AbstractOrChannelOrLayerCommand;
var AbstractChannelCommand = AbstractCommand_1.Command.AbstractChannelCommand;
var AbstractChannelOrLayerCommand = AbstractCommand_1.Command.AbstractChannelOrLayerCommand;
var AbstractLayerWithFallbackCommand = AbstractCommand_1.Command.AbstractLayerWithFallbackCommand;
var AbstractLayerWithCgFallbackCommand = AbstractCommand_1.Command.AbstractLayerWithCgFallbackCommand;
// Param NS
var ParamSignature_1 = require("./ParamSignature");
var required = ParamSignature_1.Param.Required;
var optional = ParamSignature_1.Param.Optional;
var ParamSignature = ParamSignature_1.Param.ParamSignature;
// Validation NS
var ParamValidators_1 = require("./ParamValidators");
// Protocol NS
var ProtocolLogic_1 = require("./ProtocolLogic");
var Depends = ProtocolLogic_1.Protocol.Depends;
var Coupled = ProtocolLogic_1.Protocol.Coupled;
var OneOf = ProtocolLogic_1.Protocol.OneOf;
/**
 * Factory
 */
var AMCPUtil;
(function (AMCPUtil) {
    /**
     *
     */
    function deSerialize(cmd, id) {
        // errror: commandstatus -1 //invalid command
        // @todo: error handling much?????? (callback??????)
        var command = Object.create(AMCP[cmd._commandName]["prototype"]);
        command.constructor.call(command, cmd._objectParams);
        command.populate(cmd, id);
        return command;
    }
    AMCPUtil.deSerialize = deSerialize;
    /**
     *
     */
    var CasparCGSocketResponse = (function () {
        /**
         *
         */
        function CasparCGSocketResponse(responseString) {
            this.items = [];
            this.statusCode = CasparCGSocketResponse.evaluateStatusCode(responseString);
            this.responseString = responseString;
        }
        /**
         *
         */
        CasparCGSocketResponse.evaluateStatusCode = function (responseString) {
            return parseInt(responseString.substr(0, 3), 10);
        };
        return CasparCGSocketResponse;
    }());
    AMCPUtil.CasparCGSocketResponse = CasparCGSocketResponse;
})(AMCPUtil = exports.AMCPUtil || (exports.AMCPUtil = {}));
/**
 * Internal
 */
var AMCP;
(function (AMCP) {
    var CustomCommand = (function (_super) {
        __extends(CustomCommand, _super);
        function CustomCommand() {
            _super.apply(this, arguments);
            this.paramProtocol = [
                new ParamSignature(required, "command", null, new ParamValidators_1.Validation.StringValidator(false))
            ];
        }
        CustomCommand.commandString = "";
        return CustomCommand;
    }(AbstractCommand));
    AMCP.CustomCommand = CustomCommand;
})(AMCP = exports.AMCP || (exports.AMCP = {}));
/**
 * IVideo
 */
var AMCP;
(function (AMCP) {
    /**
     *
     */
    var LoadbgCommand = (function (_super) {
        __extends(LoadbgCommand, _super);
        function LoadbgCommand() {
            _super.apply(this, arguments);
            this.paramProtocol = [
                new ParamSignature(required, "clip", null, new ParamValidators_1.Validation.ClipNameValidator()),
                new ParamSignature(optional, "loop", null, new ParamValidators_1.Validation.BooleanValidatorWithDefaults("LOOP")),
                new ParamSignature(optional, "transition", null, new ParamValidators_1.Validation.EnumValidator(ServerStateEnum_1.Enum.Transition)),
                new ParamSignature(optional, "transitionDuration", null, new ParamValidators_1.Validation.PositiveNumberValidatorBetween(0)),
                new ParamSignature(optional, "transitionEasing", null, new ParamValidators_1.Validation.EnumValidator(ServerStateEnum_1.Enum.Ease)),
                new ParamSignature(optional, "transitionDirection", null, new ParamValidators_1.Validation.EnumValidator(ServerStateEnum_1.Enum.Direction)),
                new ParamSignature(optional, "seek", "SEEK", new ParamValidators_1.Validation.FrameValidator("SEEK")),
                new ParamSignature(optional, "length", "LENGTH", new ParamValidators_1.Validation.FrameValidator("LENGTH")),
                new ParamSignature(optional, "filter", "FILTER", new ParamValidators_1.Validation.StringValidator()),
                new ParamSignature(optional, "auto", null, new ParamValidators_1.Validation.BooleanValidatorWithDefaults("AUTO"))
            ];
        }
        LoadbgCommand.commandString = "LOADBG";
        LoadbgCommand.protocolLogic = [
            new Depends("transitionDuration", "transition"),
            new Depends("transitionEasing", "transition"),
            new Depends("transitionDirection", "transition")
        ];
        return LoadbgCommand;
    }(AbstractLayerWithFallbackCommand));
    AMCP.LoadbgCommand = LoadbgCommand;
    /**
     *
     */
    var LoadCommand = (function (_super) {
        __extends(LoadCommand, _super);
        function LoadCommand() {
            _super.apply(this, arguments);
            this.paramProtocol = [
                new ParamSignature(required, "clip", null, new ParamValidators_1.Validation.ClipNameValidator),
                new ParamSignature(optional, "loop", null, new ParamValidators_1.Validation.BooleanValidatorWithDefaults("LOOP")),
                new ParamSignature(optional, "transition", null, new ParamValidators_1.Validation.EnumValidator(ServerStateEnum_1.Enum.Transition)),
                new ParamSignature(optional, "transitionDuration", null, new ParamValidators_1.Validation.PositiveNumberValidatorBetween(0)),
                new ParamSignature(optional, "transitionEasing", null, new ParamValidators_1.Validation.EnumValidator(ServerStateEnum_1.Enum.Ease)),
                new ParamSignature(optional, "transitionDirection", null, new ParamValidators_1.Validation.EnumValidator(ServerStateEnum_1.Enum.Direction)),
                new ParamSignature(optional, "seek", "SEEK", new ParamValidators_1.Validation.FrameValidator("SEEK")),
                new ParamSignature(optional, "length", "LENGTH", new ParamValidators_1.Validation.FrameValidator("LENGTH")),
                new ParamSignature(optional, "filter", "FILTER", new ParamValidators_1.Validation.StringValidator()),
                new ParamSignature(optional, "auto", null, new ParamValidators_1.Validation.BooleanValidatorWithDefaults("AUTO"))
            ];
        }
        LoadCommand.commandString = "LOAD";
        LoadCommand.protocolLogic = [
            new Depends("transitionDuration", "transition"),
            new Depends("transitionEasing", "transition"),
            new Depends("transitionDirection", "transition")
        ];
        return LoadCommand;
    }(AbstractLayerWithFallbackCommand));
    AMCP.LoadCommand = LoadCommand;
    /**
     *
     */
    var PlayCommand = (function (_super) {
        __extends(PlayCommand, _super);
        function PlayCommand() {
            _super.apply(this, arguments);
            this.paramProtocol = [
                new ParamSignature(optional, "clip", null, new ParamValidators_1.Validation.ClipNameValidator),
                new ParamSignature(optional, "loop", null, new ParamValidators_1.Validation.BooleanValidatorWithDefaults("LOOP")),
                new ParamSignature(optional, "transition", null, new ParamValidators_1.Validation.EnumValidator(ServerStateEnum_1.Enum.Transition)),
                new ParamSignature(optional, "transitionDuration", null, new ParamValidators_1.Validation.PositiveNumberValidatorBetween(0)),
                new ParamSignature(optional, "transitionEasing", null, new ParamValidators_1.Validation.EnumValidator(ServerStateEnum_1.Enum.Ease)),
                new ParamSignature(optional, "transitionDirection", null, new ParamValidators_1.Validation.EnumValidator(ServerStateEnum_1.Enum.Direction)),
                new ParamSignature(optional, "seek", "SEEK", new ParamValidators_1.Validation.FrameValidator("SEEK")),
                new ParamSignature(optional, "length", "LENGTH", new ParamValidators_1.Validation.FrameValidator("LENGTH")),
                new ParamSignature(optional, "filter", "FILTER", new ParamValidators_1.Validation.StringValidator()),
                new ParamSignature(optional, "auto", null, new ParamValidators_1.Validation.BooleanValidatorWithDefaults("AUTO"))
            ];
        }
        PlayCommand.commandString = "PLAY";
        PlayCommand.protocolLogic = [
            new Depends("loop", "clip"),
            new Depends("seek", "clip"),
            new Depends("length", "clip"),
            new Depends("filter", "clip"),
            new Depends("auto", "clip"),
            new Depends("transition", "clip"),
            new Depends("transitionDuration", "clip"),
            new Depends("transitionEasing", "clip"),
            new Depends("transitionDirection", "clip"),
            new Depends("transitionDuration", "transition"),
            new Depends("transitionEasing", "transition"),
            new Depends("transitionDirection", "transition")
        ];
        return PlayCommand;
    }(AbstractLayerWithFallbackCommand));
    AMCP.PlayCommand = PlayCommand;
    /**
     *
     */
    var PauseCommand = (function (_super) {
        __extends(PauseCommand, _super);
        function PauseCommand() {
            _super.apply(this, arguments);
        }
        PauseCommand.commandString = "PAUSE";
        return PauseCommand;
    }(AbstractLayerWithFallbackCommand));
    AMCP.PauseCommand = PauseCommand;
    /**
     *
     */
    var ResumeCommand = (function (_super) {
        __extends(ResumeCommand, _super);
        function ResumeCommand() {
            _super.apply(this, arguments);
        }
        ResumeCommand.commandString = "RESUME";
        return ResumeCommand;
    }(AbstractLayerWithFallbackCommand));
    AMCP.ResumeCommand = ResumeCommand;
    /**
     *
     */
    var StopCommand = (function (_super) {
        __extends(StopCommand, _super);
        function StopCommand() {
            _super.apply(this, arguments);
        }
        StopCommand.commandString = "STOP";
        return StopCommand;
    }(AbstractLayerWithFallbackCommand));
    AMCP.StopCommand = StopCommand;
})(AMCP = exports.AMCP || (exports.AMCP = {}));
/**
 * ICG
 */
var AMCP;
(function (AMCP) {
    /**
     *
     */
    var CGAddCommand = (function (_super) {
        __extends(CGAddCommand, _super);
        function CGAddCommand() {
            _super.apply(this, arguments);
            this.paramProtocol = [
                new ParamSignature(required, "flashLayer", "ADD", new ParamValidators_1.Validation.PositiveNumberValidatorBetween(0)),
                new ParamSignature(required, "templateName", null, new ParamValidators_1.Validation.TemplateNameValidator()),
                new ParamSignature(required, "playOnLoad", null, new ParamValidators_1.Validation.BooleanValidatorWithDefaults(1, 0)),
                new ParamSignature(optional, "data", null, new ParamValidators_1.Validation.TemplateDataValidator())
            ];
        }
        CGAddCommand.commandString = "CG";
        return CGAddCommand;
    }(AbstractLayerWithCgFallbackCommand));
    AMCP.CGAddCommand = CGAddCommand;
    /**
     *
     */
    var CGPlayCommand = (function (_super) {
        __extends(CGPlayCommand, _super);
        function CGPlayCommand() {
            _super.apply(this, arguments);
            this.paramProtocol = [
                new ParamSignature(required, "flashLayer", "PLAY", new ParamValidators_1.Validation.PositiveNumberValidatorBetween(0))
            ];
        }
        CGPlayCommand.commandString = "CG";
        return CGPlayCommand;
    }(AbstractLayerWithCgFallbackCommand));
    AMCP.CGPlayCommand = CGPlayCommand;
    /**
     *
     */
    var CGStopCommand = (function (_super) {
        __extends(CGStopCommand, _super);
        function CGStopCommand() {
            _super.apply(this, arguments);
            this.paramProtocol = [
                new ParamSignature(required, "flashLayer", "STOP", new ParamValidators_1.Validation.PositiveNumberValidatorBetween(0))
            ];
        }
        CGStopCommand.commandString = "CG";
        return CGStopCommand;
    }(AbstractLayerWithCgFallbackCommand));
    AMCP.CGStopCommand = CGStopCommand;
    /**
     *
     */
    var CGNextCommand = (function (_super) {
        __extends(CGNextCommand, _super);
        function CGNextCommand() {
            _super.apply(this, arguments);
            this.paramProtocol = [
                new ParamSignature(required, "flashLayer", "NEXT", new ParamValidators_1.Validation.PositiveNumberValidatorBetween(0))
            ];
        }
        CGNextCommand.commandString = "CG";
        return CGNextCommand;
    }(AbstractLayerWithCgFallbackCommand));
    AMCP.CGNextCommand = CGNextCommand;
    /**
     *
     */
    var CGRemoveCommand = (function (_super) {
        __extends(CGRemoveCommand, _super);
        function CGRemoveCommand() {
            _super.apply(this, arguments);
            this.paramProtocol = [
                new ParamSignature(required, "flashLayer", "REMOVE", new ParamValidators_1.Validation.PositiveNumberValidatorBetween(0))
            ];
        }
        CGRemoveCommand.commandString = "CG";
        return CGRemoveCommand;
    }(AbstractLayerWithCgFallbackCommand));
    AMCP.CGRemoveCommand = CGRemoveCommand;
    /**
     *
     */
    var CGClearCommand = (function (_super) {
        __extends(CGClearCommand, _super);
        function CGClearCommand() {
            _super.apply(this, arguments);
        }
        CGClearCommand.commandString = "CG CLEAR";
        return CGClearCommand;
    }(AbstractLayerWithCgFallbackCommand));
    AMCP.CGClearCommand = CGClearCommand;
    /**
     *
     */
    var CGUpdateCommand = (function (_super) {
        __extends(CGUpdateCommand, _super);
        function CGUpdateCommand() {
            _super.apply(this, arguments);
            this.paramProtocol = [
                new ParamSignature(required, "flashLayer", "UPDATE", new ParamValidators_1.Validation.PositiveNumberValidatorBetween(0)),
                new ParamSignature(required, "data", null, new ParamValidators_1.Validation.TemplateDataValidator())
            ];
        }
        CGUpdateCommand.commandString = "CG";
        return CGUpdateCommand;
    }(AbstractLayerWithCgFallbackCommand));
    AMCP.CGUpdateCommand = CGUpdateCommand;
    /**
     * @todo: 201 response code, parsing???????
     */
    var CGInvokeCommand = (function (_super) {
        __extends(CGInvokeCommand, _super);
        function CGInvokeCommand() {
            _super.apply(this, arguments);
            this.paramProtocol = [
                new ParamSignature(required, "flashLayer", "INVOKE", new ParamValidators_1.Validation.PositiveNumberValidatorBetween(0)),
                new ParamSignature(required, "method", null, new ParamValidators_1.Validation.StringValidator())
            ];
            this.responseProtocol = new ResponseSignature(201);
        }
        CGInvokeCommand.commandString = "CG";
        return CGInvokeCommand;
    }(AbstractLayerWithCgFallbackCommand));
    AMCP.CGInvokeCommand = CGInvokeCommand;
})(AMCP = exports.AMCP || (exports.AMCP = {}));
/**
 * IMixer
 * @todo: switch 201/202 based on mode
 */
var AMCP;
(function (AMCP) {
    /**
     *
     */
    var MixerKeyerCommand = (function (_super) {
        __extends(MixerKeyerCommand, _super);
        /**
         *
         */
        function MixerKeyerCommand(params) {
            _super.call(this, params);
            this.paramProtocol = [
                new ParamSignature(required, "keyword", null, new ParamValidators_1.Validation.KeywordValidator("KEYER")),
                new ParamSignature(optional, "keyer", null, new ParamValidators_1.Validation.BooleanValidatorWithDefaults(1, 0)),
                new ParamSignature(optional, "defer", null, new ParamValidators_1.Validation.BooleanValidatorWithDefaults("DEFER"))
            ];
            this._objectParams["keyword"] = "KEYER";
        }
        MixerKeyerCommand.commandString = "MIXER";
        MixerKeyerCommand.protocolLogic = [
            new Depends("defer", "keyer")
        ];
        return MixerKeyerCommand;
    }(AbstractLayerWithFallbackCommand));
    AMCP.MixerKeyerCommand = MixerKeyerCommand;
    /**
     * @todo	Validata/clamp lamp number range?
     */
    var MixerChromaCommand = (function (_super) {
        __extends(MixerChromaCommand, _super);
        /**
         *
         */
        function MixerChromaCommand(params) {
            _super.call(this, params);
            this.paramProtocol = [
                new ParamSignature(required, "keyword", null, new ParamValidators_1.Validation.KeywordValidator("CHROMA")),
                new ParamSignature(optional, "keyer", null, new ParamValidators_1.Validation.EnumValidator(ServerStateEnum_1.Enum.Chroma)),
                new ParamSignature(optional, "threshold", null, new ParamValidators_1.Validation.NumberValidator()),
                new ParamSignature(optional, "softness", null, new ParamValidators_1.Validation.NumberValidator()),
                new ParamSignature(optional, "spill", null, new ParamValidators_1.Validation.NumberValidator()),
                new ParamSignature(optional, "transitionDuration", null, new ParamValidators_1.Validation.PositiveNumberValidatorBetween(0)),
                new ParamSignature(optional, "transitionEasing", null, new ParamValidators_1.Validation.EnumValidator(ServerStateEnum_1.Enum.Ease)),
                new ParamSignature(optional, "defer", null, new ParamValidators_1.Validation.BooleanValidatorWithDefaults("DEFER"))
            ];
            this._objectParams["keyword"] = "CHROMA";
        }
        MixerChromaCommand.commandString = "MIXER";
        MixerChromaCommand.protocolLogic = [
            new Coupled("threshold", "softness"),
            new Depends("keyer", "threshold").ifNot("keyer", ServerStateEnum_1.Enum.Chroma.NONE),
            new Depends("spill", "threshold"),
            new Depends("transitionDuration", "keyer"),
            new Depends("transitionEasing", "keyer"),
            new Depends("defer", "threshold").ifNot("keyer", ServerStateEnum_1.Enum.Chroma.NONE)
        ];
        return MixerChromaCommand;
    }(AbstractLayerWithFallbackCommand));
    AMCP.MixerChromaCommand = MixerChromaCommand;
    /**
     *
     */
    var MixerBlendCommand = (function (_super) {
        __extends(MixerBlendCommand, _super);
        /**
         *
         */
        function MixerBlendCommand(params) {
            _super.call(this, params);
            this.paramProtocol = [
                new ParamSignature(required, "keyword", null, new ParamValidators_1.Validation.KeywordValidator("BLEND")),
                new ParamSignature(optional, "blendmode", null, new ParamValidators_1.Validation.EnumValidator(ServerStateEnum_1.Enum.BlendMode)),
                new ParamSignature(optional, "defer", null, new ParamValidators_1.Validation.BooleanValidatorWithDefaults("DEFER"))
            ];
            this._objectParams["keyword"] = "BLEND";
        }
        MixerBlendCommand.commandString = "MIXER";
        MixerBlendCommand.protocolLogic = [
            new Depends("defer", "blendmode")
        ];
        return MixerBlendCommand;
    }(AbstractLayerWithFallbackCommand));
    AMCP.MixerBlendCommand = MixerBlendCommand;
    /**
     *
     */
    var MixerOpacityCommand = (function (_super) {
        __extends(MixerOpacityCommand, _super);
        /**
         *
         */
        function MixerOpacityCommand(params) {
            _super.call(this, params);
            this.paramProtocol = [
                new ParamSignature(required, "keyword", null, new ParamValidators_1.Validation.KeywordValidator("OPACITY")),
                new ParamSignature(optional, "opacity", null, new ParamValidators_1.Validation.PositiveNumberValidatorBetween(0, 1)),
                new ParamSignature(optional, "transitionDuration", null, new ParamValidators_1.Validation.PositiveNumberValidatorBetween(0)),
                new ParamSignature(optional, "transitionEasing", null, new ParamValidators_1.Validation.EnumValidator(ServerStateEnum_1.Enum.Ease)),
                new ParamSignature(optional, "defer", null, new ParamValidators_1.Validation.BooleanValidatorWithDefaults("DEFER"))
            ];
            this._objectParams["keyword"] = "OPACITY";
        }
        MixerOpacityCommand.commandString = "MIXER";
        MixerOpacityCommand.protocolLogic = [
            new Depends("transitionDuration", "opacity"),
            new Depends("transitionEasing", "opacity"),
            new Depends("defer", "opacity")
        ];
        return MixerOpacityCommand;
    }(AbstractLayerWithFallbackCommand));
    AMCP.MixerOpacityCommand = MixerOpacityCommand;
    /**
     *
     */
    var MixerBrightnessCommand = (function (_super) {
        __extends(MixerBrightnessCommand, _super);
        /**
         *
         */
        function MixerBrightnessCommand(params) {
            _super.call(this, params);
            this.paramProtocol = [
                new ParamSignature(required, "keyword", null, new ParamValidators_1.Validation.KeywordValidator("BRIGHTNESS")),
                new ParamSignature(optional, "brightness", null, new ParamValidators_1.Validation.PositiveNumberValidatorBetween(0, 1)),
                new ParamSignature(optional, "transitionDuration", null, new ParamValidators_1.Validation.PositiveNumberValidatorBetween(0)),
                new ParamSignature(optional, "transitionEasing", null, new ParamValidators_1.Validation.EnumValidator(ServerStateEnum_1.Enum.Ease)),
                new ParamSignature(optional, "defer", null, new ParamValidators_1.Validation.BooleanValidatorWithDefaults("DEFER"))
            ];
            this._objectParams["keyword"] = "BRIGHTNESS";
        }
        MixerBrightnessCommand.commandString = "MIXER";
        MixerBrightnessCommand.protocolLogic = [
            new Depends("transitionDuration", "brightness"),
            new Depends("transitionEasing", "brightness"),
            new Depends("defer", "brightness")
        ];
        return MixerBrightnessCommand;
    }(AbstractLayerWithFallbackCommand));
    AMCP.MixerBrightnessCommand = MixerBrightnessCommand;
    /**
     *
     */
    var MixerSaturationCommand = (function (_super) {
        __extends(MixerSaturationCommand, _super);
        /**
         *
         */
        function MixerSaturationCommand(params) {
            _super.call(this, params);
            this.paramProtocol = [
                new ParamSignature(required, "keyword", null, new ParamValidators_1.Validation.KeywordValidator("SATURATION")),
                new ParamSignature(optional, "saturation", null, new ParamValidators_1.Validation.PositiveNumberValidatorBetween(0, 1)),
                new ParamSignature(optional, "transitionDuration", null, new ParamValidators_1.Validation.PositiveNumberValidatorBetween(0)),
                new ParamSignature(optional, "transitionEasing", null, new ParamValidators_1.Validation.EnumValidator(ServerStateEnum_1.Enum.Ease)),
                new ParamSignature(optional, "defer", null, new ParamValidators_1.Validation.BooleanValidatorWithDefaults("DEFER"))
            ];
            this._objectParams["keyword"] = "SATURATION";
        }
        MixerSaturationCommand.commandString = "MIXER";
        MixerSaturationCommand.protocolLogic = [
            new Depends("transitionDuration", "saturation"),
            new Depends("transitionEasing", "saturation"),
            new Depends("defer", "saturation")
        ];
        return MixerSaturationCommand;
    }(AbstractLayerWithFallbackCommand));
    AMCP.MixerSaturationCommand = MixerSaturationCommand;
    /**
     *
     */
    var MixerContrastCommand = (function (_super) {
        __extends(MixerContrastCommand, _super);
        /**
         *
         */
        function MixerContrastCommand(params) {
            _super.call(this, params);
            this.paramProtocol = [
                new ParamSignature(required, "keyword", null, new ParamValidators_1.Validation.KeywordValidator("CONTRAST")),
                new ParamSignature(optional, "contrast", null, new ParamValidators_1.Validation.PositiveNumberValidatorBetween(0, 1)),
                new ParamSignature(optional, "transitionDuration", null, new ParamValidators_1.Validation.PositiveNumberValidatorBetween(0)),
                new ParamSignature(optional, "transitionEasing", null, new ParamValidators_1.Validation.EnumValidator(ServerStateEnum_1.Enum.Ease)),
                new ParamSignature(optional, "defer", null, new ParamValidators_1.Validation.BooleanValidatorWithDefaults("DEFER"))
            ];
            this._objectParams["keyword"] = "CONTRAST";
        }
        MixerContrastCommand.commandString = "MIXER";
        MixerContrastCommand.protocolLogic = [
            new Depends("transitionDuration", "contrast"),
            new Depends("transitionEasing", "contrast"),
            new Depends("defer", "contrast")
        ];
        return MixerContrastCommand;
    }(AbstractLayerWithFallbackCommand));
    AMCP.MixerContrastCommand = MixerContrastCommand;
    /**
     * @todo:	verify `gamma` value range
     */
    var MixerLevelsCommand = (function (_super) {
        __extends(MixerLevelsCommand, _super);
        /**
         *
         */
        function MixerLevelsCommand(params) {
            _super.call(this, params);
            this.paramProtocol = [
                new ParamSignature(required, "keyword", null, new ParamValidators_1.Validation.KeywordValidator("LEVELS")),
                new ParamSignature(optional, "minInput", null, new ParamValidators_1.Validation.PositiveNumberValidatorBetween(0, 1)),
                new ParamSignature(optional, "maxInput", null, new ParamValidators_1.Validation.PositiveNumberValidatorBetween(0, 1)),
                new ParamSignature(optional, "gamma", null, new ParamValidators_1.Validation.PositiveNumberValidatorBetween(0)),
                new ParamSignature(optional, "minOutput", null, new ParamValidators_1.Validation.PositiveNumberValidatorBetween(0, 1)),
                new ParamSignature(optional, "maxOutput", null, new ParamValidators_1.Validation.PositiveNumberValidatorBetween(0, 1)),
                new ParamSignature(optional, "transitionDuration", null, new ParamValidators_1.Validation.PositiveNumberValidatorBetween(0)),
                new ParamSignature(optional, "transitionEasing", null, new ParamValidators_1.Validation.EnumValidator(ServerStateEnum_1.Enum.Ease)),
                new ParamSignature(optional, "defer", null, new ParamValidators_1.Validation.BooleanValidatorWithDefaults("DEFER"))
            ];
            this._objectParams["keyword"] = "LEVELS";
        }
        MixerLevelsCommand.commandString = "MIXER";
        MixerLevelsCommand.protocolLogic = [
            new Coupled("minInput", "maxInput", "gamma", "minOutput", "maxOutput"),
            new Depends("transitionDuration", "minInput"),
            new Depends("transitionEasing", "minInput"),
            new Depends("defer", "minInput")
        ];
        return MixerLevelsCommand;
    }(AbstractLayerWithFallbackCommand));
    AMCP.MixerLevelsCommand = MixerLevelsCommand;
    /**
     *
     */
    var MixerFillCommand = (function (_super) {
        __extends(MixerFillCommand, _super);
        /**
         *
         */
        function MixerFillCommand(params) {
            _super.call(this, params);
            this.paramProtocol = [
                new ParamSignature(required, "keyword", null, new ParamValidators_1.Validation.KeywordValidator("FILL")),
                new ParamSignature(optional, "x", null, new ParamValidators_1.Validation.NumberValidator()),
                new ParamSignature(optional, "y", null, new ParamValidators_1.Validation.NumberValidator()),
                new ParamSignature(optional, "xScale", null, new ParamValidators_1.Validation.NumberValidator()),
                new ParamSignature(optional, "yScale", null, new ParamValidators_1.Validation.NumberValidator()),
                new ParamSignature(optional, "transitionDuration", null, new ParamValidators_1.Validation.PositiveNumberValidatorBetween(0)),
                new ParamSignature(optional, "transitionEasing", null, new ParamValidators_1.Validation.EnumValidator(ServerStateEnum_1.Enum.Ease)),
                new ParamSignature(optional, "defer", null, new ParamValidators_1.Validation.BooleanValidatorWithDefaults("DEFER"))
            ];
            this._objectParams["keyword"] = "FILL";
        }
        MixerFillCommand.commandString = "MIXER";
        MixerFillCommand.protocolLogic = [
            new Coupled("x", "y", "xScale", "yScale"),
            new Depends("transitionDuration", "x"),
            new Depends("transitionEasing", "x"),
            new Depends("defer", "x")
        ];
        return MixerFillCommand;
    }(AbstractLayerWithFallbackCommand));
    AMCP.MixerFillCommand = MixerFillCommand;
    /**
     *
     */
    var MixerClipCommand = (function (_super) {
        __extends(MixerClipCommand, _super);
        /**
         *
         */
        function MixerClipCommand(params) {
            _super.call(this, params);
            this.paramProtocol = [
                new ParamSignature(required, "keyword", null, new ParamValidators_1.Validation.KeywordValidator("CLIP")),
                new ParamSignature(optional, "x", null, new ParamValidators_1.Validation.NumberValidator()),
                new ParamSignature(optional, "y", null, new ParamValidators_1.Validation.NumberValidator()),
                new ParamSignature(optional, "width", null, new ParamValidators_1.Validation.NumberValidator()),
                new ParamSignature(optional, "height", null, new ParamValidators_1.Validation.NumberValidator()),
                new ParamSignature(optional, "transitionDuration", null, new ParamValidators_1.Validation.PositiveNumberValidatorBetween(0)),
                new ParamSignature(optional, "transitionEasing", null, new ParamValidators_1.Validation.EnumValidator(ServerStateEnum_1.Enum.Ease)),
                new ParamSignature(optional, "defer", null, new ParamValidators_1.Validation.BooleanValidatorWithDefaults("DEFER"))
            ];
            this._objectParams["keyword"] = "CLIP";
        }
        MixerClipCommand.commandString = "MIXER";
        MixerClipCommand.protocolLogic = [
            new Coupled("x", "y", "width", "height"),
            new Depends("transitionDuration", "x"),
            new Depends("transitionEasing", "x"),
            new Depends("defer", "x")
        ];
        return MixerClipCommand;
    }(AbstractLayerWithFallbackCommand));
    AMCP.MixerClipCommand = MixerClipCommand;
    /**
     *
     */
    var MixerAnchorCommand = (function (_super) {
        __extends(MixerAnchorCommand, _super);
        /**
         *
         */
        function MixerAnchorCommand(params) {
            _super.call(this, params);
            this.paramProtocol = [
                new ParamSignature(required, "keyword", null, new ParamValidators_1.Validation.KeywordValidator("ANCHOR")),
                new ParamSignature(optional, "x", null, new ParamValidators_1.Validation.NumberValidator()),
                new ParamSignature(optional, "y", null, new ParamValidators_1.Validation.NumberValidator()),
                new ParamSignature(optional, "transitionDuration", null, new ParamValidators_1.Validation.PositiveNumberValidatorBetween(0)),
                new ParamSignature(optional, "transitionEasing", null, new ParamValidators_1.Validation.EnumValidator(ServerStateEnum_1.Enum.Ease)),
                new ParamSignature(optional, "defer", null, new ParamValidators_1.Validation.BooleanValidatorWithDefaults("DEFER"))
            ];
            this._objectParams["keyword"] = "ANCHOR";
        }
        MixerAnchorCommand.commandString = "MIXER";
        MixerAnchorCommand.protocolLogic = [
            new Coupled("x", "y"),
            new Depends("transitionDuration", "x"),
            new Depends("transitionEasing", "x"),
            new Depends("defer", "x")
        ];
        return MixerAnchorCommand;
    }(AbstractLayerWithFallbackCommand));
    AMCP.MixerAnchorCommand = MixerAnchorCommand;
    /**
     *
     */
    var MixerCropCommand = (function (_super) {
        __extends(MixerCropCommand, _super);
        /**
         *
         */
        function MixerCropCommand(params) {
            _super.call(this, params);
            this.paramProtocol = [
                new ParamSignature(required, "keyword", null, new ParamValidators_1.Validation.KeywordValidator("CROP")),
                new ParamSignature(optional, "left", null, new ParamValidators_1.Validation.PositiveNumberValidatorBetween(0, 1)),
                new ParamSignature(optional, "top", null, new ParamValidators_1.Validation.PositiveNumberValidatorBetween(0, 1)),
                new ParamSignature(optional, "right", null, new ParamValidators_1.Validation.PositiveNumberValidatorBetween(0, 1)),
                new ParamSignature(optional, "bottom", null, new ParamValidators_1.Validation.PositiveNumberValidatorBetween(0, 1)),
                new ParamSignature(optional, "transitionDuration", null, new ParamValidators_1.Validation.PositiveNumberValidatorBetween(0)),
                new ParamSignature(optional, "transitionEasing", null, new ParamValidators_1.Validation.EnumValidator(ServerStateEnum_1.Enum.Ease)),
                new ParamSignature(optional, "defer", null, new ParamValidators_1.Validation.BooleanValidatorWithDefaults("DEFER"))
            ];
            this._objectParams["keyword"] = "CROP";
        }
        MixerCropCommand.commandString = "MIXER";
        MixerCropCommand.protocolLogic = [
            new Coupled("left", "top", "right", "bottom"),
            new Depends("transitionDuration", "x"),
            new Depends("transitionEasing", "x"),
            new Depends("defer", "x")
        ];
        return MixerCropCommand;
    }(AbstractLayerWithFallbackCommand));
    AMCP.MixerCropCommand = MixerCropCommand;
    /**
     *
     */
    var MixerRotationCommand = (function (_super) {
        __extends(MixerRotationCommand, _super);
        /**
         *
         */
        function MixerRotationCommand(params) {
            _super.call(this, params);
            this.paramProtocol = [
                new ParamSignature(required, "keyword", null, new ParamValidators_1.Validation.KeywordValidator("ROTATION")),
                new ParamSignature(optional, "rotation", null, new ParamValidators_1.Validation.NumberValidator()),
                new ParamSignature(optional, "transitionDuration", null, new ParamValidators_1.Validation.NumberValidator()),
                new ParamSignature(optional, "transitionEasing", null, new ParamValidators_1.Validation.EnumValidator(ServerStateEnum_1.Enum.Ease)),
                new ParamSignature(optional, "defer", null, new ParamValidators_1.Validation.BooleanValidatorWithDefaults("DEFER"))
            ];
            this._objectParams["keyword"] = "ROTATION";
        }
        MixerRotationCommand.commandString = "MIXER";
        MixerRotationCommand.protocolLogic = [
            new Depends("transitionDuration", "rotation"),
            new Depends("transitionEasing", "rotation"),
            new Depends("defer", "rotation")
        ];
        return MixerRotationCommand;
    }(AbstractLayerWithFallbackCommand));
    AMCP.MixerRotationCommand = MixerRotationCommand;
    /**
     *
     */
    var MixerPerspectiveCommand = (function (_super) {
        __extends(MixerPerspectiveCommand, _super);
        /**
         *
         */
        function MixerPerspectiveCommand(params) {
            _super.call(this, params);
            this.paramProtocol = [
                new ParamSignature(required, "keyword", null, new ParamValidators_1.Validation.KeywordValidator("PERSPECTIVE")),
                new ParamSignature(optional, "topLeftX", null, new ParamValidators_1.Validation.NumberValidator()),
                new ParamSignature(optional, "topLeftY", null, new ParamValidators_1.Validation.NumberValidator()),
                new ParamSignature(optional, "topRightX", null, new ParamValidators_1.Validation.NumberValidator()),
                new ParamSignature(optional, "topRightY", null, new ParamValidators_1.Validation.NumberValidator()),
                new ParamSignature(optional, "bottomRightX", null, new ParamValidators_1.Validation.NumberValidator()),
                new ParamSignature(optional, "bottomRightY", null, new ParamValidators_1.Validation.NumberValidator()),
                new ParamSignature(optional, "bottomLeftX", null, new ParamValidators_1.Validation.NumberValidator()),
                new ParamSignature(optional, "bottomLeftY", null, new ParamValidators_1.Validation.NumberValidator()),
                new ParamSignature(optional, "transitionDuration", null, new ParamValidators_1.Validation.NumberValidator()),
                new ParamSignature(optional, "transitionEasing", null, new ParamValidators_1.Validation.EnumValidator(ServerStateEnum_1.Enum.Ease)),
                new ParamSignature(optional, "defer", null, new ParamValidators_1.Validation.BooleanValidatorWithDefaults("DEFER"))
            ];
            this._objectParams["keyword"] = "PERSPECTIVE";
        }
        MixerPerspectiveCommand.commandString = "MIXER";
        MixerPerspectiveCommand.protocolLogic = [
            new Coupled("topLeftX", "topLeftY", "topRightX", "topRightY", "bottomRightX", "bottomRightY", "bottomLeftX", "bottomLeftY"),
            new Depends("transitionDuration", "topLeftX"),
            new Depends("transitionEasing", "topLeftX"),
            new Depends("defer", "topLeftX")
        ];
        return MixerPerspectiveCommand;
    }(AbstractLayerWithFallbackCommand));
    AMCP.MixerPerspectiveCommand = MixerPerspectiveCommand;
    /**
     *
     */
    var MixerMipmapCommand = (function (_super) {
        __extends(MixerMipmapCommand, _super);
        /**
         *
         */
        function MixerMipmapCommand(params) {
            _super.call(this, params);
            this.paramProtocol = [
                new ParamSignature(required, "keyword", null, new ParamValidators_1.Validation.KeywordValidator("MIPMAP")),
                new ParamSignature(optional, "mipmap", null, new ParamValidators_1.Validation.BooleanValidatorWithDefaults(1, 0)),
                new ParamSignature(optional, "defer", null, new ParamValidators_1.Validation.BooleanValidatorWithDefaults("DEFER"))
            ];
            this._objectParams["keyword"] = "MIPMAP";
        }
        MixerMipmapCommand.commandString = "MIXER";
        MixerMipmapCommand.protocolLogic = [
            new Depends("defer", "mipmap")
        ];
        return MixerMipmapCommand;
    }(AbstractLayerWithFallbackCommand));
    AMCP.MixerMipmapCommand = MixerMipmapCommand;
    /**
     *
     */
    var MixerVolumeCommand = (function (_super) {
        __extends(MixerVolumeCommand, _super);
        /**
         *
         */
        function MixerVolumeCommand(params) {
            _super.call(this, params);
            this.paramProtocol = [
                new ParamSignature(required, "keyword", null, new ParamValidators_1.Validation.KeywordValidator("VOLUME")),
                new ParamSignature(optional, "volume", null, new ParamValidators_1.Validation.PositiveNumberValidatorBetween(0)),
                new ParamSignature(optional, "transitionDuration", null, new ParamValidators_1.Validation.PositiveNumberValidatorBetween(0)),
                new ParamSignature(optional, "transitionEasing", null, new ParamValidators_1.Validation.EnumValidator(ServerStateEnum_1.Enum.Ease)),
                new ParamSignature(optional, "defer", null, new ParamValidators_1.Validation.BooleanValidatorWithDefaults("DEFER"))
            ];
            this._objectParams["keyword"] = "VOLUME";
        }
        MixerVolumeCommand.commandString = "MIXER";
        MixerVolumeCommand.protocolLogic = [
            new Depends("transitionDuration", "volume"),
            new Depends("transitionEasing", "volume"),
            new Depends("defer", "volume")
        ];
        return MixerVolumeCommand;
    }(AbstractLayerWithFallbackCommand));
    AMCP.MixerVolumeCommand = MixerVolumeCommand;
    /**
     *
     */
    var MixerMastervolumeCommand = (function (_super) {
        __extends(MixerMastervolumeCommand, _super);
        /**
         *
         */
        function MixerMastervolumeCommand(params) {
            _super.call(this, params);
            this.paramProtocol = [
                new ParamSignature(required, "keyword", null, new ParamValidators_1.Validation.KeywordValidator("MASTERVOLUME")),
                new ParamSignature(optional, "mastervolume", null, new ParamValidators_1.Validation.PositiveNumberValidatorBetween(0)),
                new ParamSignature(optional, "defer", null, new ParamValidators_1.Validation.BooleanValidatorWithDefaults("DEFER"))
            ];
            this._objectParams["keyword"] = "MASTERVOLUME";
        }
        MixerMastervolumeCommand.commandString = "MIXER";
        MixerMastervolumeCommand.protocolLogic = [
            new Depends("transitionDuration", "mastervolume"),
            new Depends("transitionEasing", "mastervolume"),
            new Depends("defer", "mastervolume")
        ];
        return MixerMastervolumeCommand;
    }(AbstractChannelOrLayerCommand));
    AMCP.MixerMastervolumeCommand = MixerMastervolumeCommand;
    /**
     *
     */
    var MixerStraightAlphaOutputCommand = (function (_super) {
        __extends(MixerStraightAlphaOutputCommand, _super);
        /**
         *
         */
        function MixerStraightAlphaOutputCommand(params) {
            _super.call(this, params);
            this.paramProtocol = [
                new ParamSignature(required, "keyword", null, new ParamValidators_1.Validation.KeywordValidator("STRAIGHT_ALPHA_OUTPUT")),
                new ParamSignature(optional, "straight_alpha_output", null, new ParamValidators_1.Validation.BooleanValidatorWithDefaults(1, 0)),
                new ParamSignature(optional, "defer", null, new ParamValidators_1.Validation.BooleanValidatorWithDefaults("DEFER"))
            ];
            this._objectParams["keyword"] = "STRAIGHT_ALPHA_OUTPUT";
        }
        MixerStraightAlphaOutputCommand.commandString = "MIXER";
        MixerStraightAlphaOutputCommand.protocolLogic = [
            new Depends("defer", "straight_alpha_output")
        ];
        return MixerStraightAlphaOutputCommand;
    }(AbstractChannelCommand));
    AMCP.MixerStraightAlphaOutputCommand = MixerStraightAlphaOutputCommand;
    /**
     *
     */
    var MixerGridCommand = (function (_super) {
        __extends(MixerGridCommand, _super);
        /**
         *
         */
        function MixerGridCommand(params) {
            _super.call(this, params);
            this.paramProtocol = [
                new ParamSignature(required, "keyword", null, new ParamValidators_1.Validation.KeywordValidator("GRID")),
                new ParamSignature(optional, "resolution", null, new ParamValidators_1.Validation.PositiveNumberRoundValidatorBetween(1)),
                new ParamSignature(optional, "transitionDuration", null, new ParamValidators_1.Validation.PositiveNumberValidatorBetween(0)),
                new ParamSignature(optional, "transitionEasing", null, new ParamValidators_1.Validation.EnumValidator(ServerStateEnum_1.Enum.Ease)),
                new ParamSignature(optional, "defer", null, new ParamValidators_1.Validation.BooleanValidatorWithDefaults("DEFER"))
            ];
            this._objectParams["keyword"] = "GRID";
        }
        MixerGridCommand.commandString = "MIXER";
        return MixerGridCommand;
    }(AbstractChannelCommand));
    AMCP.MixerGridCommand = MixerGridCommand;
    /**
     *
     */
    var MixerCommitCommand = (function (_super) {
        __extends(MixerCommitCommand, _super);
        /**
         *
         */
        function MixerCommitCommand(params) {
            _super.call(this, params);
            this.paramProtocol = [
                new ParamSignature(required, "keyword", null, new ParamValidators_1.Validation.KeywordValidator("COMMIT"))
            ];
            this._objectParams["keyword"] = "COMMIT";
        }
        MixerCommitCommand.commandString = "MIXER";
        return MixerCommitCommand;
    }(AbstractChannelCommand));
    AMCP.MixerCommitCommand = MixerCommitCommand;
    /**
     *
     */
    var MixerClearCommand = (function (_super) {
        __extends(MixerClearCommand, _super);
        /**
         *
         */
        function MixerClearCommand(params) {
            _super.call(this, params);
            this.paramProtocol = [
                new ParamSignature(required, "keyword", null, new ParamValidators_1.Validation.KeywordValidator("CLEAR"))
            ];
            this._objectParams["keyword"] = "CLEAR";
        }
        MixerClearCommand.commandString = "MIXER";
        return MixerClearCommand;
    }(AbstractChannelOrLayerCommand));
    AMCP.MixerClearCommand = MixerClearCommand;
})(AMCP = exports.AMCP || (exports.AMCP = {}));
/**
 * IChannel
 */
var AMCP;
(function (AMCP) {
    /**
     *
     */
    var ClearCommand = (function (_super) {
        __extends(ClearCommand, _super);
        function ClearCommand() {
            _super.apply(this, arguments);
        }
        ClearCommand.commandString = "CLEAR";
        return ClearCommand;
    }(AbstractChannelOrLayerCommand));
    AMCP.ClearCommand = ClearCommand;
    /**
     *
     */
    var CallCommand = (function (_super) {
        __extends(CallCommand, _super);
        function CallCommand() {
            _super.apply(this, arguments);
        }
        CallCommand.commandString = "CALL";
        return CallCommand;
    }(AbstractLayerWithFallbackCommand));
    AMCP.CallCommand = CallCommand;
    /**
     *
     */
    var SwapCommand = (function (_super) {
        __extends(SwapCommand, _super);
        /**
         *
         */
        function SwapCommand() {
            _super.call(this, "1-1"); // @todo: foo
            // @todo: custom parameters dual layerOrchannel with 1 optional param
            // overloading in method
        }
        SwapCommand.commandString = "SWAP";
        return SwapCommand;
    }(AbstractChannelOrLayerCommand));
    AMCP.SwapCommand = SwapCommand;
    /**
     *
     */
    var AddCommand = (function (_super) {
        __extends(AddCommand, _super);
        function AddCommand() {
            _super.apply(this, arguments);
        }
        AddCommand.commandString = "ADD";
        return AddCommand;
    }(AbstractChannelCommand));
    AMCP.AddCommand = AddCommand;
    /**
     *
     */
    var RemoveCommand = (function (_super) {
        __extends(RemoveCommand, _super);
        function RemoveCommand() {
            _super.apply(this, arguments);
        }
        RemoveCommand.commandString = "REMOVE";
        return RemoveCommand;
    }(AbstractChannelOrLayerCommand));
    AMCP.RemoveCommand = RemoveCommand;
    /**
     *
     */
    var PrintCommand = (function (_super) {
        __extends(PrintCommand, _super);
        function PrintCommand() {
            _super.apply(this, arguments);
        }
        PrintCommand.commandString = "PRINT";
        return PrintCommand;
    }(AbstractChannelCommand));
    AMCP.PrintCommand = PrintCommand;
    /**
     *
     */
    var SetCommand = (function (_super) {
        __extends(SetCommand, _super);
        function SetCommand() {
            _super.apply(this, arguments);
        }
        SetCommand.commandString = "SET";
        return SetCommand;
    }(AbstractChannelCommand));
    AMCP.SetCommand = SetCommand;
    /**
     *
     */
    var LockCommand = (function (_super) {
        __extends(LockCommand, _super);
        function LockCommand() {
            _super.apply(this, arguments);
            this.paramProtocol = [
                new ParamSignature(required, "action", null, new ParamValidators_1.Validation.EnumValidator(ServerStateEnum_1.Enum.Lock)),
                new ParamSignature(optional, "phrase", null, new ParamValidators_1.Validation.StringValidator())
            ];
        }
        LockCommand.commandString = "LOCK";
        LockCommand.protocolLogic = [
            new Depends("action", "phrase").ifNot("action", ServerStateEnum_1.Enum.Lock.RELEASE)
        ];
        return LockCommand;
    }(AbstractChannelCommand));
    AMCP.LockCommand = LockCommand;
    /**
     *
     */
    var ChannelGridCommand = (function (_super) {
        __extends(ChannelGridCommand, _super);
        function ChannelGridCommand() {
            _super.apply(this, arguments);
        }
        ChannelGridCommand.commandString = "CHANNEL_GRID";
        return ChannelGridCommand;
    }(AbstractCommand));
    AMCP.ChannelGridCommand = ChannelGridCommand;
    /**
     *
     */
    var GlGCCommand = (function (_super) {
        __extends(GlGCCommand, _super);
        function GlGCCommand() {
            _super.apply(this, arguments);
        }
        GlGCCommand.commandString = "GL GC";
        return GlGCCommand;
    }(AbstractCommand));
    AMCP.GlGCCommand = GlGCCommand;
})(AMCP = exports.AMCP || (exports.AMCP = {}));
/**
 * IData
 */
var AMCP;
(function (AMCP) {
    /**
     *
     */
    var DataStoreCommand = (function (_super) {
        __extends(DataStoreCommand, _super);
        function DataStoreCommand() {
            _super.apply(this, arguments);
            this.paramProtocol = [
                new ParamSignature(required, "fileName", null, new ParamValidators_1.Validation.DataNameValidator()),
                new ParamSignature(required, "data", null, new ParamValidators_1.Validation.TemplateDataValidator())
            ];
        }
        DataStoreCommand.commandString = "DATA STORE";
        return DataStoreCommand;
    }(AbstractCommand));
    AMCP.DataStoreCommand = DataStoreCommand;
    /**
     *
     */
    var DataRetrieveCommand = (function (_super) {
        __extends(DataRetrieveCommand, _super);
        function DataRetrieveCommand() {
            _super.apply(this, arguments);
            this.paramProtocol = [
                new ParamSignature(required, "fileName", null, new ParamValidators_1.Validation.DataNameValidator())
            ];
            this.responseProtocol = new ResponseSignature(201, ResponseValidators_1.Response.DataValidator, ResponseParsers_1.Response.DataParser);
        }
        DataRetrieveCommand.commandString = "DATA RETRIEVE";
        return DataRetrieveCommand;
    }(AbstractCommand));
    AMCP.DataRetrieveCommand = DataRetrieveCommand;
    /**
     *
     */
    var DataListCommand = (function (_super) {
        __extends(DataListCommand, _super);
        function DataListCommand() {
            _super.apply(this, arguments);
            this.responseProtocol = new ResponseSignature(200, ResponseValidators_1.Response.ListValidator, ResponseParsers_1.Response.DataListParser);
        }
        DataListCommand.commandString = "DATA LIST";
        return DataListCommand;
    }(AbstractCommand));
    AMCP.DataListCommand = DataListCommand;
    /**
     *
     */
    var DataRemoveCommand = (function (_super) {
        __extends(DataRemoveCommand, _super);
        function DataRemoveCommand() {
            _super.apply(this, arguments);
            this.paramProtocol = [
                new ParamSignature(required, "fileName", null, new ParamValidators_1.Validation.DataNameValidator())
            ];
        }
        DataRemoveCommand.commandString = "DATA REMOVE";
        return DataRemoveCommand;
    }(AbstractCommand));
    AMCP.DataRemoveCommand = DataRemoveCommand;
})(AMCP = exports.AMCP || (exports.AMCP = {}));
/**
 * IThumbnail
 */
var AMCP;
(function (AMCP) {
    /**
     *
     */
    var ThumbnailListCommand = (function (_super) {
        __extends(ThumbnailListCommand, _super);
        function ThumbnailListCommand() {
            _super.apply(this, arguments);
            this.responseProtocol = new ResponseSignature(200, ResponseValidators_1.Response.ListValidator, ResponseParsers_1.Response.PathParser);
        }
        ThumbnailListCommand.commandString = "THUMBNAIL LIST";
        return ThumbnailListCommand;
    }(AbstractCommand));
    AMCP.ThumbnailListCommand = ThumbnailListCommand;
    /**
     *
     */
    var ThumbnailRetrieveCommand = (function (_super) {
        __extends(ThumbnailRetrieveCommand, _super);
        function ThumbnailRetrieveCommand() {
            _super.apply(this, arguments);
            this.paramProtocol = [
                new ParamSignature(required, "fileName", null, new ParamValidators_1.Validation.ClipNameValidator())
            ];
            this.responseProtocol = new ResponseSignature(201, ResponseValidators_1.Response.Base64Validator, ResponseParsers_1.Response.ThumbnailParser);
        }
        ThumbnailRetrieveCommand.commandString = "THUMBNAIL RETRIEVE";
        return ThumbnailRetrieveCommand;
    }(AbstractCommand));
    AMCP.ThumbnailRetrieveCommand = ThumbnailRetrieveCommand;
    /**
     *
     */
    var ThumbnailGenerateCommand = (function (_super) {
        __extends(ThumbnailGenerateCommand, _super);
        function ThumbnailGenerateCommand() {
            _super.apply(this, arguments);
            this.paramProtocol = [
                new ParamSignature(required, "fileName", null, new ParamValidators_1.Validation.ClipNameValidator())
            ];
        }
        ThumbnailGenerateCommand.commandString = "THUMBNAIL GENERATE";
        return ThumbnailGenerateCommand;
    }(AbstractCommand));
    AMCP.ThumbnailGenerateCommand = ThumbnailGenerateCommand;
    /**
     *
     */
    var ThumbnailGenerateAllCommand = (function (_super) {
        __extends(ThumbnailGenerateAllCommand, _super);
        function ThumbnailGenerateAllCommand() {
            _super.apply(this, arguments);
        }
        ThumbnailGenerateAllCommand.commandString = "THUMBNAIL GENERATE_ALL";
        return ThumbnailGenerateAllCommand;
    }(AbstractCommand));
    AMCP.ThumbnailGenerateAllCommand = ThumbnailGenerateAllCommand;
})(AMCP = exports.AMCP || (exports.AMCP = {}));
/**
 * IInfo
 */
var AMCP;
(function (AMCP) {
    /**
     *
     */
    var CinfCommand = (function (_super) {
        __extends(CinfCommand, _super);
        function CinfCommand() {
            _super.apply(this, arguments);
            this.paramProtocol = [
                new ParamSignature(required, "fileName", null, new ParamValidators_1.Validation.ClipNameValidator())
            ];
            this.responseProtocol = new ResponseSignature(200, ResponseValidators_1.Response.ListValidator, ResponseParsers_1.Response.CinfParser);
        }
        CinfCommand.commandString = "CINF";
        return CinfCommand;
    }(AbstractCommand));
    AMCP.CinfCommand = CinfCommand;
    /**
     *
     */
    var ClsCommand = (function (_super) {
        __extends(ClsCommand, _super);
        function ClsCommand() {
            _super.apply(this, arguments);
            this.responseProtocol = new ResponseSignature(200, ResponseValidators_1.Response.ListValidator, ResponseParsers_1.Response.PathParser);
        }
        ClsCommand.commandString = "CLS";
        return ClsCommand;
    }(AbstractCommand));
    AMCP.ClsCommand = ClsCommand;
    /**
     *
     */
    var FlsCommand = (function (_super) {
        __extends(FlsCommand, _super);
        function FlsCommand() {
            _super.apply(this, arguments);
            this.responseProtocol = new ResponseSignature(200, ResponseValidators_1.Response.ListValidator, ResponseParsers_1.Response.PathParser);
        }
        FlsCommand.commandString = "FLS";
        return FlsCommand;
    }(AbstractCommand));
    AMCP.FlsCommand = FlsCommand;
    /**
     *
     */
    var TlsCommand = (function (_super) {
        __extends(TlsCommand, _super);
        function TlsCommand() {
            _super.apply(this, arguments);
            this.responseProtocol = new ResponseSignature(200, ResponseValidators_1.Response.ListValidator, ResponseParsers_1.Response.PathParser);
        }
        TlsCommand.commandString = "TLS";
        return TlsCommand;
    }(AbstractCommand));
    AMCP.TlsCommand = TlsCommand;
    /**
     *
     */
    var VersionCommand = (function (_super) {
        __extends(VersionCommand, _super);
        function VersionCommand() {
            _super.apply(this, arguments);
            this.paramProtocol = [
                new ParamSignature(optional, "component", null, new ParamValidators_1.Validation.EnumValidator(ServerStateEnum_1.Enum.Version))
            ];
            this.responseProtocol = new ResponseSignature(201, ResponseValidators_1.Response.StringValidator, ResponseParsers_1.Response.VersionParser);
        }
        VersionCommand.commandString = "VERSION";
        return VersionCommand;
    }(AbstractCommand));
    AMCP.VersionCommand = VersionCommand;
    /**
     *
     */
    var InfoCommand = (function (_super) {
        __extends(InfoCommand, _super);
        /**
         *
         */
        function InfoCommand(params) {
            _super.call(this, params);
            this.responseProtocol = new ResponseSignature(200, ResponseValidators_1.Response.ListValidator, ResponseParsers_1.Response.ChannelParser);
            if (this.channel && this.channel > -1) {
                this.responseProtocol = new ResponseSignature(201, ResponseValidators_1.Response.XMLValidator, ResponseParsers_1.Response.InfoParser);
            }
        }
        InfoCommand.commandString = "INFO";
        return InfoCommand;
    }(AbstractOrChannelOrLayerCommand));
    AMCP.InfoCommand = InfoCommand;
    /**
     *
     */
    var InfoTemplateCommand = (function (_super) {
        __extends(InfoTemplateCommand, _super);
        function InfoTemplateCommand() {
            _super.apply(this, arguments);
            this.paramProtocol = [
                new ParamSignature(required, "template", null, new ParamValidators_1.Validation.TemplateNameValidator())
            ];
            this.responseProtocol = new ResponseSignature(201, ResponseValidators_1.Response.XMLValidator, ResponseParsers_1.Response.InfoTemplateParser);
        }
        InfoTemplateCommand.commandString = "INFO TEMPLATE";
        return InfoTemplateCommand;
    }(AbstractCommand));
    AMCP.InfoTemplateCommand = InfoTemplateCommand;
    /**
     *
     */
    var InfoConfigCommand = (function (_super) {
        __extends(InfoConfigCommand, _super);
        /**
         *
         */
        function InfoConfigCommand(params, context) {
            _super.call(this, params, context);
            this.responseProtocol = new ResponseSignature(201, ResponseValidators_1.Response.XMLValidator, ResponseParsers_1.Response.ConfigParser);
        }
        InfoConfigCommand.commandString = "INFO CONFIG";
        return InfoConfigCommand;
    }(AbstractCommand));
    AMCP.InfoConfigCommand = InfoConfigCommand;
    /**
     *
     */
    var InfoPathsCommand = (function (_super) {
        __extends(InfoPathsCommand, _super);
        function InfoPathsCommand() {
            _super.apply(this, arguments);
            this.responseProtocol = new ResponseSignature(201, ResponseValidators_1.Response.XMLValidator, ResponseParsers_1.Response.InfoPathsParser);
        }
        InfoPathsCommand.commandString = "INFO PATHS";
        return InfoPathsCommand;
    }(AbstractCommand));
    AMCP.InfoPathsCommand = InfoPathsCommand;
    /**
     *
     */
    var InfoSystemCommand = (function (_super) {
        __extends(InfoSystemCommand, _super);
        function InfoSystemCommand() {
            _super.apply(this, arguments);
            this.responseProtocol = new ResponseSignature(201, ResponseValidators_1.Response.XMLValidator, ResponseParsers_1.Response.InfoSystemParser);
        }
        InfoSystemCommand.commandString = "INFO SYSTEM";
        return InfoSystemCommand;
    }(AbstractCommand));
    AMCP.InfoSystemCommand = InfoSystemCommand;
    /**
     *
     */
    var InfoServerCommand = (function (_super) {
        __extends(InfoServerCommand, _super);
        function InfoServerCommand() {
            _super.apply(this, arguments);
            this.responseProtocol = new ResponseSignature(201, ResponseValidators_1.Response.XMLValidator, ResponseParsers_1.Response.InfoServerParser);
        }
        InfoServerCommand.commandString = "INFO SERVER";
        return InfoServerCommand;
    }(AbstractCommand));
    AMCP.InfoServerCommand = InfoServerCommand;
    /**
     *
     */
    var InfoQueuesCommand = (function (_super) {
        __extends(InfoQueuesCommand, _super);
        function InfoQueuesCommand() {
            _super.apply(this, arguments);
            this.responseProtocol = new ResponseSignature(201, ResponseValidators_1.Response.XMLValidator, ResponseParsers_1.Response.InfoQueuesParser);
        }
        InfoQueuesCommand.commandString = "INFO QUEUES";
        return InfoQueuesCommand;
    }(AbstractCommand));
    AMCP.InfoQueuesCommand = InfoQueuesCommand;
    /**
     *
     */
    var InfoThreadsCommand = (function (_super) {
        __extends(InfoThreadsCommand, _super);
        function InfoThreadsCommand() {
            _super.apply(this, arguments);
            this.responseProtocol = new ResponseSignature(200, ResponseValidators_1.Response.ListValidator, ResponseParsers_1.Response.InfoThreadsParser);
        }
        InfoThreadsCommand.commandString = "INFO THREADS";
        return InfoThreadsCommand;
    }(AbstractCommand));
    AMCP.InfoThreadsCommand = InfoThreadsCommand;
    /**
     *
     */
    var InfoDelayCommand = (function (_super) {
        __extends(InfoDelayCommand, _super);
        /**
         *
         */
        function InfoDelayCommand(params) {
            _super.call(this, params);
            this.paramProtocol = [
                new ParamSignature(required, "delay", null, new ParamValidators_1.Validation.KeywordValidator("DELAY"))
            ];
            this.responseProtocol = new ResponseSignature(201, ResponseValidators_1.Response.XMLValidator, ResponseParsers_1.Response.InfoDelayParser);
            this._objectParams["delay"] = "DELAY";
        }
        InfoDelayCommand.commandString = "INFO";
        return InfoDelayCommand;
    }(AbstractChannelOrLayerCommand));
    AMCP.InfoDelayCommand = InfoDelayCommand;
    /**
     * @todo: response validator/parser
     */
    var CGInfoCommand = (function (_super) {
        __extends(CGInfoCommand, _super);
        /**
         *
         */
        function CGInfoCommand(params) {
            _super.call(this, params);
            this.paramProtocol = [
                new ParamSignature(required, "info", null, new ParamValidators_1.Validation.KeywordValidator("INFO")),
                new ParamSignature(optional, "flashLayer", null, new ParamValidators_1.Validation.PositiveNumberValidatorBetween(0))
            ];
            this.responseProtocol = new ResponseSignature(201);
            this._objectParams["info"] = "INFO";
        }
        CGInfoCommand.commandString = "CG";
        return CGInfoCommand;
    }(AbstractLayerWithCgFallbackCommand));
    AMCP.CGInfoCommand = CGInfoCommand;
    /**
     *
     */
    var GlInfoCommand = (function (_super) {
        __extends(GlInfoCommand, _super);
        function GlInfoCommand() {
            _super.apply(this, arguments);
            this.responseProtocol = new ResponseSignature(201, ResponseValidators_1.Response.XMLValidator, ResponseParsers_1.Response.GLParser);
        }
        GlInfoCommand.commandString = "GL INFO";
        return GlInfoCommand;
    }(AbstractCommand));
    AMCP.GlInfoCommand = GlInfoCommand;
    /**
     *
     */
    var LogLevelCommand = (function (_super) {
        __extends(LogLevelCommand, _super);
        function LogLevelCommand() {
            _super.apply(this, arguments);
            this.paramProtocol = [
                new ParamSignature(optional, "level", null, new ParamValidators_1.Validation.EnumValidator(ServerStateEnum_1.Enum.LogLevel))
            ];
        }
        LogLevelCommand.commandString = "LOG LEVEL";
        return LogLevelCommand;
    }(AbstractCommand));
    AMCP.LogLevelCommand = LogLevelCommand;
    /**
     * @protocol	Needs either `calltrace` or `communication` parameter.
     */
    var LogCategoryCommand = (function (_super) {
        __extends(LogCategoryCommand, _super);
        function LogCategoryCommand() {
            _super.apply(this, arguments);
            this.paramProtocol = [
                new ParamSignature(optional, "calltrace", ServerStateEnum_1.Enum.LogCategory.CALLTRACE.value, new ParamValidators_1.Validation.BooleanValidatorWithDefaults(1, 0)),
                new ParamSignature(optional, "communication", ServerStateEnum_1.Enum.LogCategory.COMMUNICATION.value, new ParamValidators_1.Validation.BooleanValidatorWithDefaults(1, 0))
            ];
        }
        LogCategoryCommand.commandString = "LOG CATEGORY";
        LogCategoryCommand.protocolLogic = [
            new OneOf("calltrace", "communication")
        ];
        return LogCategoryCommand;
    }(AbstractCommand));
    AMCP.LogCategoryCommand = LogCategoryCommand;
    /**
     *
     */
    var DiagCommand = (function (_super) {
        __extends(DiagCommand, _super);
        function DiagCommand() {
            _super.apply(this, arguments);
        }
        DiagCommand.commandString = "DIAG";
        return DiagCommand;
    }(AbstractCommand));
    AMCP.DiagCommand = DiagCommand;
    /**
     * @todo: mixed mode!!!!
     * 202/201
     */
    var HelpCommand = (function (_super) {
        __extends(HelpCommand, _super);
        function HelpCommand() {
            _super.apply(this, arguments);
            this.paramProtocol = [
                new ParamSignature(optional, "command", null, new ParamValidators_1.Validation.EnumValidator(ServerStateEnum_1.Enum.Command))
            ];
            this.responseProtocol = new ResponseSignature(200, ResponseValidators_1.Response.ListValidator, ResponseParsers_1.Response.HelpParser);
        }
        HelpCommand.commandString = "HELP";
        return HelpCommand;
    }(AbstractCommand));
    AMCP.HelpCommand = HelpCommand;
    /**
     *
     */
    var HelpProducerCommand = (function (_super) {
        __extends(HelpProducerCommand, _super);
        function HelpProducerCommand() {
            _super.apply(this, arguments);
            this.paramProtocol = [
                new ParamSignature(optional, "producer", null, new ParamValidators_1.Validation.EnumValidator(ServerStateEnum_1.Enum.Producer))
            ];
            this.responseProtocol = new ResponseSignature(200, ResponseValidators_1.Response.ListValidator, ResponseParsers_1.Response.HelpParser);
        }
        HelpProducerCommand.commandString = "HELP PRODUCER";
        return HelpProducerCommand;
    }(AbstractCommand));
    AMCP.HelpProducerCommand = HelpProducerCommand;
    /**
     *
     */
    var HelpConsumerCommand = (function (_super) {
        __extends(HelpConsumerCommand, _super);
        function HelpConsumerCommand() {
            _super.apply(this, arguments);
            this.paramProtocol = [
                new ParamSignature(optional, "consumer", null, new ParamValidators_1.Validation.EnumValidator(ServerStateEnum_1.Enum.Consumer))
            ];
            this.responseProtocol = new ResponseSignature(200, ResponseValidators_1.Response.ListValidator, ResponseParsers_1.Response.HelpParser);
        }
        HelpConsumerCommand.commandString = "HELP CONSUMER";
        return HelpConsumerCommand;
    }(AbstractCommand));
    AMCP.HelpConsumerCommand = HelpConsumerCommand;
})(AMCP = exports.AMCP || (exports.AMCP = {}));
/**
 * IOperation
 */
var AMCP;
(function (AMCP) {
    /**
     * @todo: response
     */
    var ByeCommand = (function (_super) {
        __extends(ByeCommand, _super);
        function ByeCommand() {
            _super.apply(this, arguments);
        }
        ByeCommand.commandString = "BYE";
        return ByeCommand;
    }(AbstractCommand));
    AMCP.ByeCommand = ByeCommand;
    /**
     * @todo: response
     */
    var KillCommand = (function (_super) {
        __extends(KillCommand, _super);
        function KillCommand() {
            _super.apply(this, arguments);
        }
        KillCommand.commandString = "KILL";
        return KillCommand;
    }(AbstractCommand));
    AMCP.KillCommand = KillCommand;
    /**
     * @todo: response
     */
    var RestartCommand = (function (_super) {
        __extends(RestartCommand, _super);
        function RestartCommand() {
            _super.apply(this, arguments);
        }
        RestartCommand.commandString = "RESTART";
        return RestartCommand;
    }(AbstractCommand));
    AMCP.RestartCommand = RestartCommand;
})(AMCP = exports.AMCP || (exports.AMCP = {}));
