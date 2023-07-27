//mongodb+srv://amiendadesign:<password>@cluster0.tb41tu3.mongodb.net/?retryWrites=true&w=majority

import mongoose from "mongoose";

mongoose.connect(
    "mongodb+srv://amiendadesign:amienda123@cluster0.tb41tu3.mongodb.net/agenda"
);

let db = mongoose.connection;

export default db;