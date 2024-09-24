var baseUrl = "http://localhost:8989";

var backendApi = {
    session: {
        get() {
            return fetch(`${baseUrl}/session/current`, {
                
                method:"GET",
                credentials: 'include'
            }).then(res => res.json())
        },
        sendMesage(message) {
            return fetch(`${baseUrl}/session/send-message`, {
                method: "POST",
                credentials: 'include',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ message })
            }).then(res => res.json())
        },
        logout() {
            return fetch(`${baseUrl}/session/logout`, { credentials: 'include' }).then(res => res.json())
        },
    }
}

export { baseUrl, backendApi }