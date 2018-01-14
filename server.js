var express = require("express")
var Sequelize = require("sequelize")
var bodyParser = require("body-parser")
var cors = require("cors")


//conectare la baza de date
var sequelize = new Sequelize('mendeleydb', 'root', '', {
    dialect:'mysql',
    host:'localhost',
   port: 3306
})

sequelize.authenticate().then(function(){
    console.log('Success')
})

//creez modelele Sequelize in functie de tabelele din baza de date
var Folders = sequelize.define('folders', {
    name: Sequelize.STRING, 
    //timestamps: true,
    //updatedAt: false,
   // createdAt: 'createTimestamp'
     
})

var Documents = sequelize.define('documents', {
    folder_id: Sequelize.INTEGER,
    author: Sequelize.STRING,
    title: Sequelize.INTEGER,
    pages: Sequelize.INTEGER,
    publicationYear: Sequelize.INTEGER,
    publisher: Sequelize.STRING
})

//setez foreign key pentru a lega cele doua tabele pe baza id-ului unui folder
Documents.belongsTo(Folders, {foreignKey: 'folder_id', targetKey: 'id'})

sequelize.sync()

var app = express() 

app.use(express.static('react-app/public'))
app.use(bodyParser.json());
app.use(cors())
//app.use(express.urlencoded()); 



//preluare toate folderele 
app.get('/folders', function(request, response) {
    Folders.findAll().then(function(folders){
        response.status(200).send(folders)
    })
        
})

//preluare folder dupa id 
app.get('/folders/:id', function(request, response) {
    Folders.findOne({where: {id:request.params.id}}).then(function(folders) {
        if(folders) {
            response.status(200).send(folders)
        } else {
            response.status(404).send()
        }
    })
})


//creare folder nou 
app.post('/folders', function(request, response) {
    Folders.create(request.body).then(function(folder) {
        response.status(201).send(folder)
    })
})

//update pe folderul preluat dupa id 
app.put('/folders/:id', function(request, response) {
    Folders.findById(request.params.id).then(function(folder) {
        if(folder) {
            folder.update(request.body).then(function(folder){
                response.status(201).send(folder)
            }).catch(function(error) {
                response.status(200).send(error)
            })
        } else {
            response.status(404).send('Not found')
        }
    })
}) 
//stergerea unui anumit folder
app.delete('/folders/:id', function(request, response) {
    Folders.findById(request.params.id).then(function(folder) {
        if(folder) {
            folder.destroy().then(function(){
                response.status(204).send()
            })
        } else {
            response.status(404).send('Not found')
        }
    })
})


//preluarea tuturor documentelor utilizatorului
app.get('/documents', function(request, response) {
    Documents.findAll().then(
            function(documents) {
                response.status(200).send(documents)
            }
        )
})

//preluarea informatiilor despre documentul cu un anumit id
app.get('/documents/:id', function(request, response) {
    Documents.findById(request.params.id).then(
            function(document){
            if(document){
                response.status(200).send(document)
            }
             else {
            response.status(404).send('Not found')
        }}
        )
})

//crearea unui document nou
app.post('/documents', function(request, response) {
   Documents.create(request.body).then(function(documents){
       response.status(201).send(documents)
   })
})

app.put('/documents/:id', function(request, response) {
    Documents.findById(request.params.id).then(function(documents) {
        if(documents) {
            documents.update(request.body).then(function(print){
                response.status(201).send(documents)
            }).catch(function(error) {
                response.status(200).send(error)
            })
        } else {
            response.status(404).send('Not found')
        }
    })
})

//stergerea unui anumit document
app.delete('/documents/:id', function(request, response) {
    Documents.findById(request.params.id).then(function(documents) {
        if(documents) {
            documents.destroy().then(function(){
                response.status(204).send()
            })
        } else {
            response.status(404).send('Not found')
        }
    })
})
 //preluarea documentelor din folderul cu un anumit id
app.get('/folders/:id/documents', function(request, response) {
    Documents.findAll({where:{folder_id: request.params.id}}).then(
            function(documents)
            
            {
            if(documents) {
                response.status(200).send(documents)
             }
            else{
            response.status(404).send('Not found');
        }}
     
        )
})

app.listen(8081)