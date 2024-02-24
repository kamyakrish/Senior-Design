import userServices from "./userServices"

const getUsers = (setUsers) =>
{
    const fetchPromise = userServices.getAll("/users/getusers")
    fetchPromise.then(responce => {
        console.log(responce)
        setUsers(responce.data);
        return responce.data
    })
}