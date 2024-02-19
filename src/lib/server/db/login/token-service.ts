import jwt from 'jsonwebtoken';
import type { User } from '../schema';

const accessTokenSalt = 'very-secret-salt';
const tokenExpiresIn = '1y';

async function generateToken(
  payload: object,
  salt: string,
  options: jwt.SignOptions
): Promise<string> {
  return new Promise((res, rej) => {
    jwt.sign(payload, salt, options, (err, token) => {
      if (err) {
        return rej(err);
      }
      res(token!);
    });
  });
}

export function generateAccessToken(user: User): Promise<string> {
  return generateToken({ id: user.id, email: user.username }, accessTokenSalt, {
    expiresIn: tokenExpiresIn,
  });
}

async function verifyToken(
  token: string,
): Promise<boolean>{
  try {
    await jwt.verify(token, accessTokenSalt)
    return true
  } catch(err) {
    return false
  }

}


export function verifyAccessToken(token: string): Promise<boolean> {
  return verifyToken(token)
}
