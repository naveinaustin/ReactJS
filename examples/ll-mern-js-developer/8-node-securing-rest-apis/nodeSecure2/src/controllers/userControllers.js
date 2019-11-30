import mongoose from 'mongoose';
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { UserSchema } from '../models/userModel';

const User = mongoose.model('User', UserSchema);

export const register = (req, res) => {
    const newUser = new User(req.body);
    newUser.hashPassword = bcrypt.hashSync(req.body.password, 10);
    newUser.save((err, user) => {
        if(err) {
            return res.status(400).send({
                message: err
            })
        } else {
            user.hashPassword = undefined;
            return res.json(user);
        }
    });
}

export const login = (req, res) => {
    console.log(req.body);
    User.findOne({
        email: req.body.email
    }, (err, user) => {
        console.log(err);
        if(err) throw err;
        if(!user) {
            console.log('user not found');
            res.status(401).json({message: 'Authentication failed. No user found!'});
        } else if(user) {
            console.log('compare password');
            if(!user.comparePassword(req.body.password, user.hashPassword)) {
                console.log('password nto matching');
                res.status(401).json({message: 'Authentication failed. Wrong password!'});
            } else {
                console.log('trying to return a token');
                return res.json({token: jwt.sign({email: user.email, username: user.username, _id: user.id}, 'RESTFULAPIs')});
            }
        }
    });
}

export const loginRequired = (req, res, next) => {
    if(req.user) {
        next();
    } else {
        return  res.status(401).json({message: 'Unauthorized user found!'});
    }
}