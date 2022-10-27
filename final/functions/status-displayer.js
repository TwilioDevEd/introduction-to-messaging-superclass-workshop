exports.handler = function(context, event, callback) {
  console.log(`Message: ${event.MessageSid} Status: ${event.MessageStatus}`)
  return callback(null);
};