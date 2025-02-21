// https://stackoverflow.com/a/78978176

htmx.on("htmx:responseError", function (evt) {
    const error = document.getElementById('error')
    const xhr = evt.detail.xhr;
    const response = JSON.parse(xhr.responseText)

    error.innerHTML = `${xhr.statusText} (${xhr.status}): ${response.error}`
    error.hidden=false
})

htmx.on("htmx:sendError", function (evt) {
    const requestConfig = evt.detail.requestConfig;
    const error = document.getElementById('error')

    error.innerHTML = `Network error on <b>${requestConfig.verb} ${requestConfig.path}</b>`
})

htmx.on("htmx:beforeSend", function () {
    const error = document.getElementById('error')

    error.innerHTML = ""
    error.hidden=true
})
