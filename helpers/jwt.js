const jwt = require('jsonwebtoken');

const generarJWT = ( uid, name ) => {

    return new Promise( (resolve, reject) => {

        const payload = { uid, name };

        jwt.sign( payload, process.env.SECRET_JWT_SED, { //ERROR - habia una letra de mas en la llave privada
            expiresIn: '2h'
        }, (err, token) => { //ERROR - Habia un parentesis de mas

            if( err ) {
                console.log(err);
                reject('No se pudo generar el token');
            }

            resolve( token );

        });

    });

}

module.exports = {
    generarJWT
}