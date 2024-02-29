export const price = (price) =>
        Number(price).toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD'
        })