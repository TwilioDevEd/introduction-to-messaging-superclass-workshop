# Download the helper library from https://www.twilio.com/docs/python/install
import os
from twilio.rest import Client


# Find your Account SID and Auth Token at twilio.com/console
# and set the environment variables. See http://twil.io/secure
account_sid = os.environ['TWILIO_ACCOUNT_SID']
auth_token = os.environ['TWILIO_AUTH_TOKEN']
client = Client(account_sid, auth_token)

message = client.messages.create(
    from_='+17078737252',
    body='Ahoy from Python! 🐍',
    to=os.environ['CRAIGS_NUMBER']
)

print(f'Message: {message.sid} Status: {message.status}')
