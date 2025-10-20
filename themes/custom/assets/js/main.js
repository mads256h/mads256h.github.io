window.addEventListener("DOMContentLoaded", () => {
  mediumZoom(document.querySelectorAll("main img"),
    {
      background: "var(--bs-body-bg)"
    })

  
  createCopyButtons(document.querySelectorAll("main .highlight"))


  function createCopyButtons(elements) {
    for (let element of elements) {
      createCopyButton(element)
    }
  }

  function createCopyButton(element) {
    const copyButtonElement = document.createElement("button")
    copyButtonElement.classList.add("btn")
    copyButtonElement.classList.add("btn-secondary")
    copyButtonElement.classList.add("btn-sm")
    copyButtonElement.classList.add("copy-button")
    copyButtonElement.setAttribute("data-toggle", "tooltip")
    copyButtonElement.title = "Copy code to clipboard"
    copyButtonElement.innerHTML = '<span class="fa-solid fa-copy"></span>'
    copyButtonElement.addEventListener("click", () => copyText(element))

    element.appendChild(copyButtonElement)
  }

  function copyText(element) {
    const codeElement = element.querySelectorAll("code")[1]

    const textToCopy = Array.from(codeElement.children)
      .map(c => c.innerText)
      .reduce((a, i) => a += i)

    navigator.clipboard.writeText(textToCopy)

    const toast = document.getElementById("liveToast")
    const toastBoostrap = bootstrap.Toast.getOrCreateInstance(toast)
    toastBoostrap.show()
  }
})
