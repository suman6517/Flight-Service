import express from "express";
import { PORT , logger } from "./Config/index.js";
import apiRoutes from "./Routes/index.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use("/api", apiRoutes);


app.listen(PORT, () => {
    console.log(`Server is running `);
    logger.info("Succesfully started the server " , {});
});

