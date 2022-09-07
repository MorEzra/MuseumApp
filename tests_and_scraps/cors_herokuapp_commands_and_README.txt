


I have left running a heroku server that deploys this repository:

	https://github.com/Rob--W/cors-anywhere/
	
The url for the server is:

	https://secure-tor-66457.herokuapp.com
	
And it can be used to bypass CORS problems to Ataria's server for example like this:

	https://secure-tor-66457.herokuapp.com/https://experiments.schonberglab.org/v2/workers-api/sessions?key=<your-key-here>
	
We use this in the app for example like so:

	fetch("https://secure-tor-66457.herokuapp.com/https://experiments.schonberglab.org/v2/workers-api/sessions?key=<our-key>", {
		method: "POST",
		mode: 'cors',
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify({"timingsData": timingsData, "otherData": otherData}),
		}
		)

Make sure Ataria didn't change anything about his server or the API to it,
	and that the heroku server is actually running by going to the url. You'll see a short readme if it is.
		
		Best,
			Yonatan.
