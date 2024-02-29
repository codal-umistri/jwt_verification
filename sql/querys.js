const { connection } = require("../dbconfig/dbconfig");

exports.addNote = (userid, title, description, table, callback) => {
  try {
    connection.query(
      `INSERT INTO ${table} (userid,title,Description) VALUES ('${userid}', '${title}', '${description}')`,
      (error, results, fields) => {
        if (error) return callback(error, null);

        return callback(null, results);
      }
    );
  } catch (error) {
    return callback(error, null);
  }
};

exports.cheackNote = (userid, title, table, callback) => {
  try {
    connection.query(
      `SELECT * FROM ${table} WHERE title = '${title}' AND userid = '${userid}'`,
      (error, results, fields) => {
        if (error) return callback(error, null);

        return callback(null, results);
      }
    );
  } catch (error) {
    return callback(error, null);
  }
};

exports.getNote = (userid, table, callback) => {
  try {
    connection.query(
      `SELECT * FROM ${table} WHERE userid = '${userid}'`,
      (error, results, fields) => {
        if (error) return callback(error, null);

        console.log(results);
        return callback(null, results);
      }
    );
  } catch (error) {
    return callback(error, null);
  }
};

exports.getAllNote = (table, callback) => {
  try {
    connection.query(`SELECT * FROM ${table}`, (error, results, fields) => {
      if (error) return callback(error, null);

      console.log(results);
      return callback(null, results);
    });
  } catch (error) {
    return callback(error, null);
  }
};

exports.updateNote = (userid, title, description, table, callback) => {
  try {
    connection.query(
      `UPDATE ${table} SET Description = '${description}' WHERE title = '${title}' AND userid = '${userid}'`,
      (error, results, fields) => {
        if (error) return callback(error, null);

        return callback(null, results);
      }
    );
  } catch (error) {
    return callback(error, null);
  }
};

exports.deleteNote = (userid, title, table, callback) => {
  try {
    connection.query(
      `DELETE FROM ${table} WHERE title = '${title}' AND userid = '${userid}'`,
      (error, results, fields) => {
        if (error) return callback(error, null);

        return callback(null, results);
      }
    );
  } catch (error) {
    return callback(error, null);
  }
};

exports.checkUser = (email, table, callback) => {
  try {
    connection.query(
      `SELECT * FROM ${table} WHERE email  = '${email}'`,
      (error, results, fields) => {
        if (error) return callback(error, null);

        return callback(null, results);
      }
    );
  } catch (error) {
    return callback(error, null);
  }
};

exports.addUser = (name, email, password, table, callback) => {
  try {
    connection.query(
      `INSERT INTO ${table} (Name, email, password) VALUES('${name}', '${email}', '${password}')`,
      (error, results, fields) => {
        if (error) return callback(error, null);

        return callback(null, results);
      }
    );
  } catch (error) {
    return callback(error, null);
  }
};

exports.deleteUser = (email, table, callback) => {
  try {
    connection.query(
      `DELETE FROM ${table} WHERE email ='${email}'`,
      (error, results, fields) => {
        if (error) return callback(error, null);

        return callback(null, results);
      }
    );
  } catch (error) {
    return callback(error, null);
  }
};
