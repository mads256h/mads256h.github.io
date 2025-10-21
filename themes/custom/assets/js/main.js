window.addEventListener("DOMContentLoaded", () => {
  mediumZoom(document.querySelectorAll("main img"),
    {
      background: "var(--bs-body-bg)"
    })

})

window.copyText = function(element) {
  const codeElement = element.parentElement.parentElement.querySelectorAll("code")[1]

  const textToCopy = Array.from(codeElement.children)
    .map(c => c.innerText)
    .reduce((a, i) => a += i)

  navigator.clipboard.writeText(textToCopy)

  const toast = document.getElementById("liveToast")
  const toastBoostrap = bootstrap.Toast.getOrCreateInstance(toast)
  toastBoostrap.show()
}
