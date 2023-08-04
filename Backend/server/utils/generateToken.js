import jwt from 'jsonwebtoken'
// Example code for setting a secret key
const jwtSecret = process.env.JWT_SECRET || 'mysecretkey';

const generateToken = (id) => {  
  return jwt.sign({ id }, jwtSecret, {
    expiresIn: '30d',
  })
}

export default generateToken
