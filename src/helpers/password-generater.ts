const generateRandomPassword = (length: number): string => {
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const digitChars = '0123456789';
    const specialChars = '~!@#$%_-';

    const getRandomChar = (charSet: string) => {
        const randomIndex = Math.floor(Math.random() * charSet.length);
        return charSet.charAt(randomIndex);
    };

    // Ensure at least one uppercase, one lowercase, one digit, and one special character
    const password =
        getRandomChar(uppercaseChars) +
        getRandomChar(lowercaseChars) +
        getRandomChar(digitChars) +
        getRandomChar(specialChars) +
        Array.from({ length: length - 4 }, () => {
            const allChars = uppercaseChars + lowercaseChars + digitChars + specialChars;
            return getRandomChar(allChars);
        }).join('');

    // Shuffle the password to randomize the order
    const shuffledPassword = password.split('').sort(() => Math.random() - 0.5).join('');

    return shuffledPassword;
};


export default generateRandomPassword;