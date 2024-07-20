import { BadRequestException, InternalServerErrorException } from "@nestjs/common"
import Logging from "library/Logging"
import * as bycrpt from 'bcrypt'

export const hash = async (data: string, salt = 10): Promise<string> => {
    try{
        const generatedSalt = await bycrpt.genSalt(salt)
        return bycrpt.hash(data,generatedSalt)
    } catch (error){
        Logging.error(error)
        throw new InternalServerErrorException('Something went wrong while hasing password')
    }
}

export const compareHash = async (data:string | Buffer, encryptedData: string): Promise<boolean> => {
    try{
        return bycrpt.compare(data, encryptedData)
    } catch (error){
        Logging.error(error)
        throw new BadRequestException('Something wnt wrong while comapring hash')
    }
}