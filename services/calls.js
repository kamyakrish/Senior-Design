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
const postPickups = async (payload) => {
    console.log('Received payload in postPickups:', payload); // This should log the structured payload you saw earlier
  
    const url = 'https://express-auv3rzs3sa-uw.a.run.app/api/pickup/';
  
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
  
      const data = await response.json();
      console.log('Response from the server:', data);
      return data;
    } catch (error) {
      console.error('Error in postPickups:', error);
    }
  };
  

  


const calls = {
    getUsers,
    fetchUsers,
    fetchClients,
    postPickups
}

export default calls