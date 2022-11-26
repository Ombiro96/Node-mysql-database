const mysql=require('mysql');
const connection=mysql.createConnection({
    host: 'localhost',
    user: 'clifford',
    password: 'pswd123',
    database: 'cliffdb'
});
connection.connect();

function viewStudents(){
    let sql="SELECT id, name FROM students";
    connection.query(sql, function(err, rows, fields){
        if (err) throw err;
        console.log('Records available: ' + rows.length);
        for(let i=0; i<rows.length; i++){
            console.log(rows[i].id + ' ' + rows[i].name);
        }
    });
}
function addStudents(){
    let sql="INSERT INTO students (id, name) VALUES" + "(1, John Doe)";
    connection.query(sql, function(err, result){
        if (err) throw err;
        console.log("Records INSERTED: " + results.affectedRows);
    })
};
addStudents();
viewStudents();
connection.end(); //if running a server, remove this line