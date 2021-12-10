// source: taxi.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = (function() {
  if (this) { return this; }
  if (typeof window !== 'undefined') { return window; }
  if (typeof global !== 'undefined') { return global; }
  if (typeof self !== 'undefined') { return self; }
  return Function('return this')();
}.call(null));

goog.exportSymbol('proto.taxi.AssetDetails', null, global);
goog.exportSymbol('proto.taxi.ListAssetsReply', null, global);
goog.exportSymbol('proto.taxi.ListAssetsRequest', null, global);
goog.exportSymbol('proto.taxi.Topup', null, global);
goog.exportSymbol('proto.taxi.TopupWithAssetReply', null, global);
goog.exportSymbol('proto.taxi.TopupWithAssetRequest', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.taxi.ListAssetsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.taxi.ListAssetsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.taxi.ListAssetsRequest.displayName = 'proto.taxi.ListAssetsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.taxi.ListAssetsReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.taxi.ListAssetsReply.repeatedFields_, null);
};
goog.inherits(proto.taxi.ListAssetsReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.taxi.ListAssetsReply.displayName = 'proto.taxi.ListAssetsReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.taxi.TopupWithAssetRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.taxi.TopupWithAssetRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.taxi.TopupWithAssetRequest.displayName = 'proto.taxi.TopupWithAssetRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.taxi.TopupWithAssetReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.taxi.TopupWithAssetReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.taxi.TopupWithAssetReply.displayName = 'proto.taxi.TopupWithAssetReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.taxi.Topup = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.taxi.Topup, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.taxi.Topup.displayName = 'proto.taxi.Topup';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.taxi.AssetDetails = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.taxi.AssetDetails, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.taxi.AssetDetails.displayName = 'proto.taxi.AssetDetails';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.taxi.ListAssetsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.taxi.ListAssetsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.taxi.ListAssetsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.taxi.ListAssetsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.taxi.ListAssetsRequest}
 */
proto.taxi.ListAssetsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.taxi.ListAssetsRequest;
  return proto.taxi.ListAssetsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.taxi.ListAssetsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.taxi.ListAssetsRequest}
 */
proto.taxi.ListAssetsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.taxi.ListAssetsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.taxi.ListAssetsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.taxi.ListAssetsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.taxi.ListAssetsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.taxi.ListAssetsReply.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.taxi.ListAssetsReply.prototype.toObject = function(opt_includeInstance) {
  return proto.taxi.ListAssetsReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.taxi.ListAssetsReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.taxi.ListAssetsReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    assetsList: jspb.Message.toObjectList(msg.getAssetsList(),
    proto.taxi.AssetDetails.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.taxi.ListAssetsReply}
 */
proto.taxi.ListAssetsReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.taxi.ListAssetsReply;
  return proto.taxi.ListAssetsReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.taxi.ListAssetsReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.taxi.ListAssetsReply}
 */
proto.taxi.ListAssetsReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.taxi.AssetDetails;
      reader.readMessage(value,proto.taxi.AssetDetails.deserializeBinaryFromReader);
      msg.addAssets(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.taxi.ListAssetsReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.taxi.ListAssetsReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.taxi.ListAssetsReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.taxi.ListAssetsReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAssetsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.taxi.AssetDetails.serializeBinaryToWriter
    );
  }
};


/**
 * repeated AssetDetails assets = 1;
 * @return {!Array<!proto.taxi.AssetDetails>}
 */
proto.taxi.ListAssetsReply.prototype.getAssetsList = function() {
  return /** @type{!Array<!proto.taxi.AssetDetails>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.taxi.AssetDetails, 1));
};


/**
 * @param {!Array<!proto.taxi.AssetDetails>} value
 * @return {!proto.taxi.ListAssetsReply} returns this
*/
proto.taxi.ListAssetsReply.prototype.setAssetsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.taxi.AssetDetails=} opt_value
 * @param {number=} opt_index
 * @return {!proto.taxi.AssetDetails}
 */
proto.taxi.ListAssetsReply.prototype.addAssets = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.taxi.AssetDetails, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.taxi.ListAssetsReply} returns this
 */
proto.taxi.ListAssetsReply.prototype.clearAssetsList = function() {
  return this.setAssetsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.taxi.TopupWithAssetRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.taxi.TopupWithAssetRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.taxi.TopupWithAssetRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.taxi.TopupWithAssetRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    assetHash: jspb.Message.getFieldWithDefault(msg, 1, ""),
    feeAmount: jspb.Message.getFieldWithDefault(msg, 2, 0),
    millisatPerByte: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.taxi.TopupWithAssetRequest}
 */
proto.taxi.TopupWithAssetRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.taxi.TopupWithAssetRequest;
  return proto.taxi.TopupWithAssetRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.taxi.TopupWithAssetRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.taxi.TopupWithAssetRequest}
 */
proto.taxi.TopupWithAssetRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAssetHash(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setFeeAmount(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setMillisatPerByte(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.taxi.TopupWithAssetRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.taxi.TopupWithAssetRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.taxi.TopupWithAssetRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.taxi.TopupWithAssetRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAssetHash();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getFeeAmount();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getMillisatPerByte();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
};


/**
 * optional string asset_hash = 1;
 * @return {string}
 */
proto.taxi.TopupWithAssetRequest.prototype.getAssetHash = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.taxi.TopupWithAssetRequest} returns this
 */
proto.taxi.TopupWithAssetRequest.prototype.setAssetHash = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint64 fee_amount = 2;
 * @return {number}
 */
proto.taxi.TopupWithAssetRequest.prototype.getFeeAmount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.taxi.TopupWithAssetRequest} returns this
 */
proto.taxi.TopupWithAssetRequest.prototype.setFeeAmount = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint64 millisat_per_byte = 3;
 * @return {number}
 */
proto.taxi.TopupWithAssetRequest.prototype.getMillisatPerByte = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.taxi.TopupWithAssetRequest} returns this
 */
proto.taxi.TopupWithAssetRequest.prototype.setMillisatPerByte = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.taxi.TopupWithAssetReply.prototype.toObject = function(opt_includeInstance) {
  return proto.taxi.TopupWithAssetReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.taxi.TopupWithAssetReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.taxi.TopupWithAssetReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    topup: (f = msg.getTopup()) && proto.taxi.Topup.toObject(includeInstance, f),
    expiry: jspb.Message.getFieldWithDefault(msg, 2, 0),
    privateBlindingKey: jspb.Message.getFieldWithDefault(msg, 3, ""),
    publicBlindingKey: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.taxi.TopupWithAssetReply}
 */
proto.taxi.TopupWithAssetReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.taxi.TopupWithAssetReply;
  return proto.taxi.TopupWithAssetReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.taxi.TopupWithAssetReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.taxi.TopupWithAssetReply}
 */
proto.taxi.TopupWithAssetReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.taxi.Topup;
      reader.readMessage(value,proto.taxi.Topup.deserializeBinaryFromReader);
      msg.setTopup(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setExpiry(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setPrivateBlindingKey(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setPublicBlindingKey(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.taxi.TopupWithAssetReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.taxi.TopupWithAssetReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.taxi.TopupWithAssetReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.taxi.TopupWithAssetReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTopup();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.taxi.Topup.serializeBinaryToWriter
    );
  }
  f = message.getExpiry();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getPrivateBlindingKey();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getPublicBlindingKey();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional Topup topup = 1;
 * @return {?proto.taxi.Topup}
 */
proto.taxi.TopupWithAssetReply.prototype.getTopup = function() {
  return /** @type{?proto.taxi.Topup} */ (
    jspb.Message.getWrapperField(this, proto.taxi.Topup, 1));
};


/**
 * @param {?proto.taxi.Topup|undefined} value
 * @return {!proto.taxi.TopupWithAssetReply} returns this
*/
proto.taxi.TopupWithAssetReply.prototype.setTopup = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.taxi.TopupWithAssetReply} returns this
 */
proto.taxi.TopupWithAssetReply.prototype.clearTopup = function() {
  return this.setTopup(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.taxi.TopupWithAssetReply.prototype.hasTopup = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional uint64 expiry = 2;
 * @return {number}
 */
proto.taxi.TopupWithAssetReply.prototype.getExpiry = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.taxi.TopupWithAssetReply} returns this
 */
proto.taxi.TopupWithAssetReply.prototype.setExpiry = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string private_blinding_key = 3;
 * @return {string}
 */
proto.taxi.TopupWithAssetReply.prototype.getPrivateBlindingKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.taxi.TopupWithAssetReply} returns this
 */
proto.taxi.TopupWithAssetReply.prototype.setPrivateBlindingKey = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string public_blinding_key = 4;
 * @return {string}
 */
proto.taxi.TopupWithAssetReply.prototype.getPublicBlindingKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.taxi.TopupWithAssetReply} returns this
 */
proto.taxi.TopupWithAssetReply.prototype.setPublicBlindingKey = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.taxi.Topup.prototype.toObject = function(opt_includeInstance) {
  return proto.taxi.Topup.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.taxi.Topup} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.taxi.Topup.toObject = function(includeInstance, msg) {
  var f, obj = {
    topupId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    partial: jspb.Message.getFieldWithDefault(msg, 2, ""),
    assetHash: jspb.Message.getFieldWithDefault(msg, 3, ""),
    assetAmount: jspb.Message.getFieldWithDefault(msg, 4, 0),
    assetSpread: jspb.Message.getFieldWithDefault(msg, 5, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.taxi.Topup}
 */
proto.taxi.Topup.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.taxi.Topup;
  return proto.taxi.Topup.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.taxi.Topup} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.taxi.Topup}
 */
proto.taxi.Topup.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTopupId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPartial(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setAssetHash(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setAssetAmount(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setAssetSpread(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.taxi.Topup.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.taxi.Topup.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.taxi.Topup} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.taxi.Topup.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTopupId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPartial();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getAssetHash();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getAssetAmount();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
  f = message.getAssetSpread();
  if (f !== 0) {
    writer.writeUint64(
      5,
      f
    );
  }
};


/**
 * optional string topup_id = 1;
 * @return {string}
 */
proto.taxi.Topup.prototype.getTopupId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.taxi.Topup} returns this
 */
proto.taxi.Topup.prototype.setTopupId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string partial = 2;
 * @return {string}
 */
proto.taxi.Topup.prototype.getPartial = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.taxi.Topup} returns this
 */
proto.taxi.Topup.prototype.setPartial = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string asset_hash = 3;
 * @return {string}
 */
proto.taxi.Topup.prototype.getAssetHash = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.taxi.Topup} returns this
 */
proto.taxi.Topup.prototype.setAssetHash = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional uint64 asset_amount = 4;
 * @return {number}
 */
proto.taxi.Topup.prototype.getAssetAmount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.taxi.Topup} returns this
 */
proto.taxi.Topup.prototype.setAssetAmount = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional uint64 asset_spread = 5;
 * @return {number}
 */
proto.taxi.Topup.prototype.getAssetSpread = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.taxi.Topup} returns this
 */
proto.taxi.Topup.prototype.setAssetSpread = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.taxi.AssetDetails.prototype.toObject = function(opt_includeInstance) {
  return proto.taxi.AssetDetails.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.taxi.AssetDetails} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.taxi.AssetDetails.toObject = function(includeInstance, msg) {
  var f, obj = {
    assetHash: jspb.Message.getFieldWithDefault(msg, 1, ""),
    basisPoint: jspb.Message.getFieldWithDefault(msg, 2, 0),
    assetPrice: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.taxi.AssetDetails}
 */
proto.taxi.AssetDetails.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.taxi.AssetDetails;
  return proto.taxi.AssetDetails.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.taxi.AssetDetails} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.taxi.AssetDetails}
 */
proto.taxi.AssetDetails.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAssetHash(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setBasisPoint(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setAssetPrice(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.taxi.AssetDetails.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.taxi.AssetDetails.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.taxi.AssetDetails} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.taxi.AssetDetails.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAssetHash();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getBasisPoint();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getAssetPrice();
  if (f !== 0.0) {
    writer.writeFloat(
      3,
      f
    );
  }
};


/**
 * optional string asset_hash = 1;
 * @return {string}
 */
proto.taxi.AssetDetails.prototype.getAssetHash = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.taxi.AssetDetails} returns this
 */
proto.taxi.AssetDetails.prototype.setAssetHash = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint32 basis_point = 2;
 * @return {number}
 */
proto.taxi.AssetDetails.prototype.getBasisPoint = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.taxi.AssetDetails} returns this
 */
proto.taxi.AssetDetails.prototype.setBasisPoint = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional float asset_price = 3;
 * @return {number}
 */
proto.taxi.AssetDetails.prototype.getAssetPrice = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.taxi.AssetDetails} returns this
 */
proto.taxi.AssetDetails.prototype.setAssetPrice = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


goog.object.extend(exports, proto.taxi);
