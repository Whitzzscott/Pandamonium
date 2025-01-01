
export const shortenImage = (image, name, description) => {
    try {
        const base64Data = image.split(',')[1];
        const buffer = Buffer.from(base64Data, 'base64'); 
        const imageSize = buffer.length;

        // Check if the image size is too large (limit: 12.4KB)
        if (imageSize > 12400) {
            throw new Error('Image too large');
        }

        // Create the shortened image data
        const shortenedData = {
            name,
            description,
            image: base64Data
        };

        return shortenedData;
    } catch (error) {
        throw new Error('Error shortening image: ' + error.message);
    }
};
