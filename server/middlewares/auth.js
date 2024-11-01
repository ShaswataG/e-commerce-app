const jwt = require("jsonwebtoken");

const isAuth = async (req, res, next) => {

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
    console.log('hello')

    try {
        const decoded = await jwt.verify(token, process.env.SECRET_KEY);
        req.user = decoded;
        console.log(req.user)
        req.isAuth = true;
        console.log('end')
        next();
    } catch (error) {
        req.isAuth = false;
        next();
    }
};
module.exports = isAuth;
