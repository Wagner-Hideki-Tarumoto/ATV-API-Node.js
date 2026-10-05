import mongoose from "mongoose";

const dbUser = "wtarumoto_db_user";
const dbPassword = "Wagner123"; 
const cluster = "cluster0.7y6miyt.mongodb.net";
const dbName = "api-theturismo";

const connect = () => {
  mongoose.connect(
    `mongodb+srv://${dbUser}:${dbPassword}@${cluster}/${dbName}?retryWrites=true&w=majority&authSource=admin`
  );

  const connection = mongoose.connection;
  
  connection.on("error", (erro) => {
    console.log("Erro de conexão:", erro.message);
  });
  
  connection.once("open", () => {
    console.log("Conectado ao MongoDB Atlas com sucesso!");
  });
};

connect();
export default mongoose;