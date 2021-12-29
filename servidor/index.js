let express = require("express")
let app = express()
let mysql = require("mysql")

let db = mysql.createPool({
    host: "%",
    user: "eron",
    password: "Fisic@1020",
    database: "cruddb",
})

app.get("/", (req, res) => {
    let SQL = "INSERT INTO cruddb (nome, preco, categoria) VALUES ('Far Cry 5','R$120,00','Ação')"

    db.query(SQL, (err, result) => {
        console.log(err)
    })
}
)

app.listen(3001, () => {
    console.log("Rodando servidor...")
})