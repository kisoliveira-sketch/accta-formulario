function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Respostas");
    var data = JSON.parse(e.postData.contents);

    sheet.appendRow([
      new Date(),
      data.fullName || "",
      data.birthDate || "",
      data.phone || "",
      data.email || "",
      data.linkedin || "",
      data.facebook || "",
      data.instagram || "",
      data.twitter || "",
      data.otherSocial || "",
      data.notes || "",
      data.submittedAt || ""
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({
        success: false,
        error: String(error)
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
