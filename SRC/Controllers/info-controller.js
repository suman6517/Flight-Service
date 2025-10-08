import statusCodes from "http-status-codes";
const info = (req, res) => {
    
    return res.status(statusCodes.OK).json({
        "name": "Flight-Tickets",
        "version": "1.0.0",
        success: true,
        data:{},
        error:{}    
    });
}

export default info;