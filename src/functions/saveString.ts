// Updated saveString function with proper error handling

function saveString(value: string): void {
    try {
        // Simulate saving the string
        // ... some saving logic
    } catch (error) {
        if (error instanceof Error) {
            console.error('Error saving string:', error.message);
        } else {
            console.error('Unexpected error:', error);
        }
    }
}