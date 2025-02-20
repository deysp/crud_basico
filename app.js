import express from "express";
import cors from "cors";
import sql from './database.js'

const app = express();
app.use(express.json());
app.use(cors());

app.get("/consultar", async ( res ) => {
    try {
        await sql`select * from gerenciador`;
        res.json({ mensagem: `Usuário ${nome} cadastrado com sucesso` });
    } catch (error) {
        res.status(400).json({ mensagem: "erro ao cadastrar usuario", erro: error.message });
    }
});

app.post("/cadastrar", async (req, res) => {
    const { nome, email } = req.body; 
    try {
        await sql`insert into gerenciador (nome, email) VALUES (${nome}, ${email})`;
        res.json({ mensagem: `Usuário ${nome} cadastrado com sucesso` });
    } catch (error) {
        console.log(error)
        res.status(400).json({ mensagem: "erro ao cadastrar usuario", erro: error.message });
    }
});

app.put("/editar", async (req, res) => {
    const { nome, email } = req.body;
    try {
        await sql`update gerenciador nome = ${nome} WHERE email = ${email}`;
        res.json({ mensagem: `Usuário com email ${email} atualizado com sucesso` });
    } catch (error) {
        res.status(400).json({ mensagem: "erro ao editar usuario", erro: error.message });
    }
});

app.delete("/deletar", async (req, res) => {
    const { email } = req.body;
    try {
        await sql`delete gerenciador deletar email = ${email}`;
        res.json({ mensagem: `usuario com email ${email} deletado com sucesso!` });
    } catch (error) {
        res.status(400).json({ mensagem: "erro ao deletar usuario.", erro: error.message });
    }
});

app.listen(3000, () => console.log("running"));
