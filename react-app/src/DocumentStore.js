import axios from 'axios'
const SERVER = 'https://proiectweb-dananeagu.c9users.io:8081/'

const sendGet = (address, callback) => {
    axios.get(SERVER + address)
        .then(response => callback(response))
        .catch(error => console.log("Error."));
};

const sendPost = (address, data, callback) => { 
    axios.post(SERVER + address, data)
        .then(response => callback(response))
        .catch(error => console.log("Error."));
};

const sendDelete = (address, callback) => {
    axios.delete(SERVER + address)
        .then(response => callback(response))
        .catch(error => console.log("Error."));
};

const sendPut = (address, data, callback) => {
    axios.put(SERVER + address, data)
        .then(response => callback(response))
        .catch(error => console.log("Error."));
};

export const getDocuments = (callback) => sendGet("documents", response => callback(response));

export const addDocument = (data, callback) => sendPost("documents", data, response => callback(response));

export const deleteDocument = (id, callback) => sendDelete("documents/" + id, response => callback(response));

export const saveDocument = (id, data, callback) => sendPut("documents/" + id, data, response => callback(response));

export const getSingleDocument = (id, callback) => sendGet("documents/" + id, response => callback(response));