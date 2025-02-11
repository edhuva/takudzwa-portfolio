//server response 
export const sendContact = async ({validName, name, validEmail, email, message}) => {
    const delay = (0.7 + Math.random() * 2) * 1000;

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (validName === true && !!name && validEmail === true && !!email && !!message) {
                resolve()
            } else {
                reject(new Error('Invalid Input'))
            }
        }, delay)
    })
}