import request from 'superagent'


//functions go here

export function getLibbyProfile () {
    return request.get('/')
    .then(data => {
        console.log("app index page")
        console.log(data)
        return data})
    .catch(err => {
        throw Error('Cannot GET Posts!')
    })
}
//chaange url to fancy one