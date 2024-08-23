const ANTON_WEB_API = {
    production: {
        // baseUrl: "https://anton-suite-anton-web.vercel.app/api",
        chat: "/chat",
        hello: "/protected/hello",
        helloHono: "/api/hello",
        // baseUrl: "http://localhost:3002/api"
        baseUrl: "http://localhost:3010/api"
    }
}

const antonApiKey = process.env.EXPO_PUBLIC_ANTON_WEB_API_KEY ?? ''

export const antonAPIRequest = async () => {
    try {
        console.log(antonApiKey)
        const url = `${ANTON_WEB_API.production.baseUrl}${ANTON_WEB_API.production.chat}`
        console.log("Requesting to", url)

        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                messages: [{
                    role: 'user',
                    content: "hey there!"
                }]
            }),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${antonApiKey}`
            }
        })

        const json = await response.json()
        console.log("This is response", json)

        return json
    } catch (error) {
        console.log(error)
    }
}