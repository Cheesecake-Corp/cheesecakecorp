// Import required modules for error handling and logging
import fs from 'fs';
import path from 'path';

// Function to save a string to a specified file
export function saveString(fileName: string, data: string): void {
    const filePath = path.join(__dirname, fileName);
    try {
        // Write data to the file
        fs.writeFileSync(filePath, data);
        console.log(`Data successfully saved to ${filePath}`);
    } catch (error) {
        // Log error message for debugging
        console.error(`Failed to save data to ${filePath}:`, error);
    }
}