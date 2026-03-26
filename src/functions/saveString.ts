try {
    // your code here
} catch (error) {
    if (error instanceof SomeSpecificError) {
        // handle specific error
    } else {
        // handle unknown error
        console.error('An unknown error occurred:', error);
    }
}