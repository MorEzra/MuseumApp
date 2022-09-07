

24-08-2022

Below is a simple API by Ataria that is currently working.
You should get your own key.
Yonatan has one.

# get all session for worker
curl "https://experiments.schonberglab.org/v2/workers-api/sessions?key=<your-worker-key>"
[{"_id":"628626525c62c1118d09136d","test":2,"some-prop":34,"subId":"62861eeed2c57bfc640fe6af"}]

# add new session
curl "localhost:3000/v2/workers-api/sessions?key=<your-worker-key>" -X POST --header "Content-Type: application/json" -d '{"hello": "world"}'
{"_id":"6286acfecef8f6bc6b84c095","hello":"world","subId":"62861eeed2c57bfc640fe6af"}

# get session with id (using id 6286acfecef8f6bc6b84c095 from previous response)
curl "https://experiments.schonberglab.org/v2/workers-api/sessions/6286acfecef8f6bc6b84c095?key=<your-worker-key>"
{"_id":"6286acfecef8f6bc6b84c095","hello":"world","subId":"62861eeed2c57bfc640fe6af"}

# update session (using id 6286acfecef8f6bc6b84c095 from previous response)
curl "https://experiments.schonberglab.org/v2/workers-api/sessions?key=<your-worker-key>" -X POST --header "Content-Type: application/json" -d '{"_id": "6286acfecef8f6bc6b84c095", "new": "data"}
{"_id":"6286acfecef8f6bc6b84c095","hello":"world","subId":"62861eeed2c57bfc640fe6af","new":"data"}

# get all sessions again
curl "https://experiments.schonberglab.org/v2/workers-api/sessions?key=<your-worker-key>
[{"_id":"628626525c62c1118d09136d","test":2,"some-prop":34,"subId":"62861eeed2c57bfc640fe6af"},{"_id":"6286acfecef8f6bc6b84c095","hello":"world","subId":"62861eeed2c57bfc640fe6af","new":"data"}]


Also there's an admin interface here: https://experiments.schonberglab.org/v2/admin
You should get a password from Ataria to get your experiment set-up over there and get a key.


Neat.
Yonatan.
