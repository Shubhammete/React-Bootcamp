function customRender(element,container){

    // const domElement = document.createElement(element.type)
    // domElement.innerHTML = element.content
    // domElement.setAttribute("href",element.link.href) 
    // domElement.setAttribute("target",element.link.target) 
    
    //more efficient code

    //create that element
    const domElement = document.createElement(element.type)
    // change innerHTML
    domElement.innerHTML = element.content
    // loop for inserting the desired attribute
    for (const prop in element.link) {
        domElement.setAttribute(prop,element.link[prop])
    }
    //append the element to root
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