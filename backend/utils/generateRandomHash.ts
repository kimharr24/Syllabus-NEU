/* eslint-disable import/prefer-default-export */
import crypto from 'crypto';

export const generateRandomHash = (bytes = 32): string => {
    return crypto.randomBytes(bytes).toString('hex');
};
