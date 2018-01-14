import axios from 'axios';
const SERVER = 'https://proiectweb-dananeagu.c9users.io:8081/';

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

export const getFolders = (callback) => sendGet("folders", response => callback(response));

export const addFolder = (data, callback) => sendPost("folders", data, response => callback(response));

export const deleteFolder = (id, callback) => sendDelete("folders/" + id, response => callback(response));

export const saveFolder = (id, data, callback) => sendPut("folders/" + id, data, response => callback(response));

export const getSingleFolder = (id, callback) => sendGet("folders/" + id, response => callback(response));