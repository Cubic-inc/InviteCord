window.onload = async () => {

    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());

    if (!params.id) {
        window.location.href = "../index.html"
    }

    let Id = params.id

    const WidgedLink = `https://discord.com/api/guilds/${Id}/widget.json` 
    console.info("Requesting from " + WidgedLink + "\n")

    var WidgedRequest = await WebRequest("GET", WidgedLink)
    var WidgedData = await JSON.parse(WidgedRequest.Body)

    if (WidgedData.id) {
        document.getElementById("servername").innerHTML = "Sending you to: \n" + WidgedData.name

        const InviteCode = WidgedData.instant_invite.split("/")[4]
        console.log(InviteCode)


        const InviteLink = `https://discord.com/api/v8/invites/${InviteCode}`
        console.log(InviteRequest)

        var InviteRequest = await WebRequest("GET", InviteLink)
        var InviteData = await JSON.parse(InviteRequest.Body)

        document.getElementById("image").src = "https://cdn.discordapp.com/icons/" + InviteData.guild.id + "/" + InviteData.guild.icon + ".png"

        await Wait(5000)
        window.location = WidgedData.instant_invite

        console.log(WidgedData)
    } else {
        document.getElementById("homelink").innerHTML = "Home"
        document.getElementById("servername").innerHTML = "An error occured"
        document.getElementById("image").src = "../assets/Images/crab.gif"

        if (data.message) {
            document.getElementById("message").innerHTML = data.message
        } else {
            document.getElementById("message").innerHTML = data.guild_id
        }
    }

};