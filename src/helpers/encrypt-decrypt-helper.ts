// import crypto from 'crypto';
// export let encryptionKey = 'c8b8d5e7f2a5367e0139b8d9cfd5b63e0e5f0bc397ce0e3d29a6d2c29e4b7ed6';

// export function encrypt(data: any): string {
//     if (data == '' || null || undefined) {
//         return '';
//     }
//     const cipher = crypto.createCipher('aes-256-cbc', encryptionKey);
//     let encrypted = cipher.update(JSON.stringify(data), 'utf8', 'hex');
//     encrypted += cipher.final('hex');
//     return encrypted;
// }

// export function decrypt(data: string): any {
//     if (!data) {
//         return null;
//     }
//     const decipher = crypto.createDecipher('aes-256-cbc', encryptionKey);
//     let decrypted = decipher.update(data, 'hex', 'utf8');
//     decrypted += decipher.final('utf8');
//     return JSON.parse(decrypted);
// }