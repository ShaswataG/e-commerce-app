const jwt = require("jsonwebtoken");

const isAuth = async (req, res, next) => {
    console.log('auth.js');
    console.log('test1');

    const authHeader = req.get("Authorization");
    if (!authHeader) {
        req.isAuth = false;
        return next();
    }


    const token = authHeader.split(" ")[1];
    if (!token || token === "") {
        {
        req.isAuth = false;
        return next();
        }
    }

    try {
        const decoded = await jwt.verify(token, process.env.SECRET_KEY);
        req.user = decoded;
        req.isAuth = true;
        console.log('decoded: ', decoded);
        next();
    } catch (ex) {
        req.isAuth = false;
        next();
    }
}
console.log('3');
module.exports = isAuth;