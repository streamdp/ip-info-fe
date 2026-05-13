htmx.on("htmx:responseError", function (evt) {
    const errorContainer = document.getElementById('error')
    const errorText = document.getElementById('error-message')
    const xhr = evt.detail.xhr;

    let message = "Unknown server error";

    try {
        // Handle JSON error response
        const response = JSON.parse(xhr.responseText)
        message = response.error || response.message || xhr.statusText;
    } catch (e) {
        // Fallback if server returns plain text or HTML
        message = xhr.statusText || "Server error";
    }

    errorText.innerText = message;
    errorContainer.hidden = false;
})

htmx.on("htmx:sendError", function () {
    const errorContainer = document.getElementById('error')
    const errorText = document.getElementById('error-message')

    errorText.innerText = "Network error. Please check your connection.";
    errorContainer.hidden = false;
})

htmx.on("htmx:beforeSend", function () {
    document.getElementById('error').hidden = true;
})