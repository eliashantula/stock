const parse = (url) => {
let idStart
        let idEnd
        let id
        if (url[url.length-3] === "/") {
        idStart = url.length-2
        idEnd = idStart+1
        id = url.substring(idStart,idEnd)
} else {
idStart = url.length-3
idEnd = idStart+2
id = url.substring(idStart,idEnd)
}
return id 
}


export default parse