// import { Request, Response, NextFunction } from "express";
import "dotenv/config";
import bcrypt from "bcrypt";


const Salt_Rounds= process.env.SALT_ROUNDS/*  || 10 */;
const saltRounds = Number(Salt_Rounds);

// const saltRounds = process.env.SALT_ROUNDS || 20000;

async function genSalt(rounds: any) {
    return new Promise((resolve, reject) => {
        bcrypt.genSalt(rounds, (error, result) => {
            if (error) {
                return reject(error);
            } else {
                return resolve(result);
            }
        });
    });
}

/*
    async function hash(data: any) {
        return new Promise(async (resolve, reject) => {
            const salt = await genSalt(saltRounds);

            bcrypt.hash(data, salt, null, (error, result) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(result);
                }
            });
        });
    }
*/
export async function hash(data: any) {
    return new Promise(async (resolve, reject) => {
        const salt: any = await genSalt(saltRounds);
        bcrypt.hash(data, salt, (error: any, result: any) => {
            if (error) {
                return reject(error);
            } else {
                return resolve(result);
            }
        });
    });
}

export async function compare(data: any, encrypted: any) {
    return new Promise((resolve, reject) => {
        bcrypt.compare(data, encrypted, (error, result) => {
            if (error) {
                return reject(error);
            } else {
                return resolve(result);
            }
        });
    });
}
//mypassword = $2a$10$3pwJNVCM6NKzBOD1HPZHjuFdjX2Dg771aPZNbbBw9jTUbEMS919Te
