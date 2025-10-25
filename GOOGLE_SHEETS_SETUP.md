# Google Sheets Integration Setup

## Overview
This setup allows the contact form to automatically submit data to a Google Sheets spreadsheet for tracking marketing strategy requests.

## Setup Instructions

### 1. Create Google Apps Script
1. Go to [Google Apps Script](https://script.google.com/)
2. Click "New Project"
3. Replace the default code with the content from `google-apps-script.js`
4. Save the project (Ctrl+S or Cmd+S)
5. Name your project (e.g., "Contact Form Handler")

### 2. Deploy as Web App
1. Click "Deploy" → "New deployment"
2. Choose "Web app" as the type
3. Set the following options:
   - **Execute as**: Me
   - **Who has access**: Anyone
4. Click "Deploy"
5. **Copy the Web App URL** - you'll need this for the React component

### 3. Update React Component
1. Open `src/components/ContactSection.tsx`
2. Find the line with `'https://script.google.com/macros/s/AKfycbzYOUR_SCRIPT_ID/exec'`
3. Replace `YOUR_SCRIPT_ID` with the actual script ID from your deployed web app URL
4. The URL should look like: `https://script.google.com/macros/s/AKfycbz[ACTUAL_SCRIPT_ID]/exec`

### 4. Set Up Spreadsheet Headers
1. In your Google Apps Script editor, run the `setupHeaders()` function once
2. This will create the column headers in your spreadsheet
3. The headers will be: Timestamp, Name, Email, Message, Submission Time

### 5. Test the Integration
1. Run the `testScript()` function in Google Apps Script to verify everything works
2. Check your spreadsheet to see if test data appears
3. Test the actual contact form on your website

## Spreadsheet Structure
The data will be saved with the following columns:
- **Column A**: Timestamp (when the script processed the data)
- **Column B**: Name (from the form)
- **Column C**: Email (from the form)
- **Column D**: Message (from the form)
- **Column E**: Submission Time (when the form was submitted)

## Troubleshooting

### Common Issues:
1. **CORS Errors**: Make sure the web app is deployed with "Anyone" access
2. **Script Not Found**: Verify the script ID in the URL is correct
3. **No Data Appearing**: Check that the `setupHeaders()` function was run
4. **Permission Errors**: Ensure the script has permission to access the spreadsheet

### Testing:
- Use the `testScript()` function to verify the script works
- Check the Google Apps Script execution logs for any errors
- Verify the spreadsheet permissions allow the script to write data

## Security Notes
- The web app is set to "Anyone" access for form submissions
- Consider implementing additional validation if needed
- Monitor the spreadsheet for spam submissions
- You can add email notifications for new submissions if desired

## Optional Enhancements
You can extend the script to:
- Send email notifications for new submissions
- Add data validation
- Create automated responses
- Generate reports from the collected data
