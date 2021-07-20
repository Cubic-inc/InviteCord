async function WebRequest(Method, Url, Headers, Body) {
    var RequestData = await fetch(
        "https://Fetch-Proxy.scriptitwithcod.repl.co/request/",
        {
            method: "POST",

            body: JSON.stringify(
                {
                    Method: Method,
                    Headers: Headers,
                    Url: Url,
                    Body: Body
                }
            )
        }
    );

    var ParsedRequest = await RequestData.json()

    console.log(ParsedRequest)
    //var Data = JSON.parse(ParsedRequest.Body)

    return ParsedRequest
}
