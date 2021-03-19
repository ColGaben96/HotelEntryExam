const pool = require('../db/config');

app.get('/hotels', (request, response) => {
    pool.query(
        "SELECT * FROM hotel",
        (error, result) => {
        if (error) throw error
            response.setHeader("Access-Control-Allow-Origin", "*")
            response.send(result)
    })
});