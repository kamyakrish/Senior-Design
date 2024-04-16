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
    fetch('https://express-auv3rzs3sa-uw.a.run.app/api/user/')
    .then((response) => {
        return response.json()
    })
    .then((response) => {
        console.log(response)
        setUsers(response.users)
    })
}

const fetchClients = (setClients) =>{
    fetch('https://express-auv3rzs3sa-uw.a.run.app/api/client/')
    .then((response) => {
        return response.json()
    })
    .then((response) => {
        console.log(response)
        setClients(response.clients)
    })
}


const calls = {
    getUsers,
    fetchUsers,
    fetchClients
}

export default calls