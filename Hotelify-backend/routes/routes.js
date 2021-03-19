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

app.post('/insert_hotel', (request, response) => {
    console.log(request);
    pool.query('INSERT INTO hotel(Name, Chain, Location, Rating) VALUES(?,?,?,?)',
        request.body.name,
        request.body.chain,
        request.body.location,
        request.body.rating,
        (error, result) => {
        if (error) throw error;
            response.setHeader("Access-Control-Allow-Origin", "*")
            response.status(201).send(`Hotel Inserted Successfully: ${result.insertId}`);
        })
    })

app.post('/update_hotel', (request, response) => {
    console.log(request);
    pool.query(`UPDATE hotel SET Name = ?, Chain = ?, Locatoin = ?, Rating = ? WHERE Name = ${request.body.name}, Chain = ${request.body.chain}, Location = ${request.body.location}, Rating = ${request.body.rating}`,
        (error, result) => {
            if (error) throw error;
            response.setHeader("Access-Control-Allow-Origin", "*")
            response.status(201).send(`Hotel Updated: ${result.insertId}`);
        })
    })

app.get('/delete_hotel', (request, response) => {
    console.log(request);
    pool.query(`DELETE FROM hotel WHERE Name = ${request.body.name}`,
        (error, result) => {
            if (error) throw error;
            response.setHeader("Access-Control-Allow-Origin", "*")
            response.status(201).send(`Hotel Deleted Successfully: ${result.insertId}`);
        })
    })