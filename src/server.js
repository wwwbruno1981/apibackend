const express = require( "express" );
const mongoose = require( "mongoose" );
const routes = require("./routes")

const app = express();

mongoose.connect('mongodb+srv://data-02:Mongodb1981@cluster0.lvpqp.mongodb.net/usersbook?retryWrites=true&w=majority', {
   useNewUrlParser: true,
   useUnifiedTopology: true,
})

app.use(express.json());
app.use(routes);

app.listen(3000);