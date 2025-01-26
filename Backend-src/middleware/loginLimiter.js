const rateLimit = require('express-rate-limit')

const loginLimiter = rateLimit({
    windowMS: 60 * 100,
    max: 5, // limits IP's to 5 logins a min
    message:{ Message:'Too many funny logins from your ip, Please try again later'}, 
    handler: (res) => {
        return res
        .status(400)
        .json({ success: false, msg: "Too many login requests" });
    },
    standardHeaders: true,
    legacyHeaders: False,
}

)