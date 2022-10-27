exports.handler = function(context, event, callback) {
  // Here's an example of setting up some TWiML to respond to with this function
  console.log(`The body was ${event.Body}`);
	const twiml = new Twilio.twiml.MessagingResponse();
  if (event.Body.toLowerCase().includes("quest")) {
    twiml.message("Make sure to download TwilioQuest! https://twilio.com/quest 🚀");
  } else {
    twiml.message("Make sure to Choose Your Own Adventure! https://twil.io/readme-on-demand 📚")
  }
  return callback(null, twiml);
};