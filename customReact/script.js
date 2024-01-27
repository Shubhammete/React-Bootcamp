function customRender(element,container){

    // const domElement = document.createElement(element.type)
    // domElement.innerHTML = element.content
    // domElement.setAttribute("href",element.link.href) 
    // domElement.setAttribute("target",element.link.target) 
    
    const domElement = document.createElement(element.type)
    domElement.innerHTML = element.content
    for (const prop in element.link) {
        domElement.setAttribute(prop,element.link[prop])
    }
    container.append(domElement)
}
// all element in react is object so
const element = {
    type: "a",
    link:{
        href:"https://google.com",
        target:"_blank"
            },
    content:"Google link"
}

// select root element
const container = document.getElementById('root')
customRender(element,container)