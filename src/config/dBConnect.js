//mongodb+srv://amiendadesign:<password>@cluster0.tb41tu3.mongodb.net/?retryWrites=true&w=majority tentativa 1
//mongodb+srv://amiendadesign:<password>@agenda.6s9pr5o.mongodb.net/?retryWrites=true&w=majority  tentativa 2


import mongoose from "mongoose";

mongoose.connect(
    "mongodb+srv://amiendadesign:amandamienda@agenda.6s9pr5o.mongodb.net/agenda"
);

let db = mongoose.connection;

export default db;