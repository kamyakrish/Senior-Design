import userServices from "./userServices"

const getUsers = (setUsers) =>
{
    const fetchPromise = userServices.getAll("/users/getusers")
    fetchPromise.then(response => {
        console.log(response)
        setUsers(response.data);
        return response.data
    })
    .catch((e) => {
        console.log(e)
    })
}

const fetchUsers = (setUsers) =>{
    fetch('https://express-auv3rzs3sa-uw.a.run.app/users/getusers')
    .then((response) => {
        return response.json()
    })
    .then((response) => {
        console.log(response)
        setUsers(response)
    })
}

const fetchClients = (setClients) =>{
    fetch('https://express-auv3rzs3sa-uw.a.run.app/mobile/getclients')
    .then((response) => {
        return response.json()
    })
    .then((response) => {
        console.log(response)
        setClients(response)
    })
}


const calls = {
    getUsers,
    fetchUsers,
    fetchClients
}

export default calls