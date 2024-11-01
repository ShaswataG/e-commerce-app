const jwt = require("jsonwebtoken");

const isAuth = async (req, res, next) => {
    console.log('auth.js');
    console.log('test1');

    const authHeader = req.get("Authorization");
    console.log('authHeader: ', authHeader);
    if (!authHeader) {
        req.isAuth = false;
        return next();
    }


    const token = authHeader.split(" ")[1];
    console.log('token split: ', token)
    if (!token || token === "") {
        {
            req.isAuth = false;
            return next();
        }
    }
    console.log('hello')

    try {
        const decoded = await jwt.verify(token, process.env.SECRET_KEY);
        console.log('token: ', token)
        console.log('decoded: ', decoded)
        req.user = decoded;
        req.isAuth = true;
        console.log('decoded: ', decoded);
        next();
    } catch (ex) {
        console.log('error decoding token: ', ex)
        req.isAuth = false;
        next();
    }
};
module.exports = isAuth;
