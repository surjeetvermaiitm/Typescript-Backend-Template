import { Request, Response } from "express";
import GenericError from "../errors/genericError";
import { unknownErrorResponse } from "../utils/response.utils";
import { StatusCodes } from "http-status-codes";

const getInfo = async (req: Request, res: Response) => {
    try {
        
        return res.status(StatusCodes.CREATED).json({
            message: 'Info API is live',
            data: {},
            err: {},
            success: true
        })
    } catch(error) {
        if(error instanceof GenericError) {
            return res.status(error.statusCode).json({
                message: 'Something went wrong',
                data: {},
                err: error,
                success: true
            })
        }
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(unknownErrorResponse);

    }
}




export default {
    getInfo
}