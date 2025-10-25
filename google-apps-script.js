/**
 * Google Apps Script for handling contact form submissions
 * This script should be deployed as a web app in Google Apps Script
 * 
 * Setup Instructions:
 * 1. Go to https://script.google.com/
 * 2. Create a new project
 * 3. Replace the default code with this script
 * 4. Save the project
 * 5. Deploy as web app with execute permissions for "Anyone"
 * 6. Copy the web app URL and replace 'YOUR_SCRIPT_ID' in the React component
 */

function doPost(e) {
  try {
    // Get the active spreadsheet
    const sheet = SpreadsheetApp.getActiveSheet();
    
    // Parse the incoming data
    const data = JSON.parse(e.postData.contents);
    
    // Prepare the row data
    const timestamp = new Date();
    const rowData = [
      timestamp,
      data.name || '',
      data.email || '',
      data.message || '',
      data.timestamp || ''
    ];
    
    // Add the data to the spreadsheet
    sheet.appendRow(rowData);
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({
        success: true,
        message: 'Data saved successfully'
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({
        success: false,
        error: error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  // Handle GET requests (optional)
  return ContentService
    .createTextOutput(JSON.stringify({
      message: 'Contact form handler is running',
      status: 'active'
    }))
    .setMimeType(ContentService.MimeType.JSON);
}

/**
 * Setup function to create headers in the spreadsheet
 * Run this function once to set up the column headers
 */
function setupHeaders() {
  const sheet = SpreadsheetApp.getActiveSheet();
  
  // Set up column headers
  const headers = [
    'Timestamp',
    'Name', 
    'Email',
    'Message',
    'Submission Time'
  ];
  
  // Clear existing data and add headers
  sheet.clear();
  sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
  
  // Format header row
  const headerRange = sheet.getRange(1, 1, 1, headers.length);
  headerRange.setBackground('#4285f4');
  headerRange.setFontColor('white');
  headerRange.setFontWeight('bold');
  
  // Set column widths
  sheet.setColumnWidth(1, 150); // Timestamp
  sheet.setColumnWidth(2, 200); // Name
  sheet.setColumnWidth(3, 250); // Email
  sheet.setColumnWidth(4, 400); // Message
  sheet.setColumnWidth(5, 150); // Submission Time
  
  console.log('Headers set up successfully!');
}

/**
 * Test function to verify the script is working
 */
function testScript() {
  const testData = {
    name: 'Test User',
    email: 'test@example.com',
    message: 'This is a test submission'
  };
  
  const mockEvent = {
    postData: {
      contents: JSON.stringify(testData)
    }
  };
  
  const result = doPost(mockEvent);
  console.log('Test result:', result.getContent());
}
