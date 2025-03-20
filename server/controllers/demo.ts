import express from 'express';
import demoService from '../services/demoService.js';
const router = express.Router();

router.get("/GetAllAsync", async (req, res) =>{
    try{
       res.send(await demoService.GetAllAsync());
    }
    catch(err){
        res.send("Fix your api...");
    }
});

export default router;