function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    
    var name = data.name;
    var email = data.email;
    var service = data.service;
    var description = data.description;
    var files = data.files || []; // Array of {base64: "", name: "", type: ""}

    var body = "New Quote Request from 3D Scan Boston Website\n\n" +
               "Name: " + name + "\n" +
               "Email: " + email + "\n" +
               "Service: " + service + "\n\n" +
               "Description:\n" + description;

    var attachments = files.map(function(f) {
      return {
        fileName: f.name,
        content: Utilities.base64Decode(f.base64.split(",")[1]),
        mimeType: f.type
      };
    });

    MailApp.sendEmail({
      to: "3dscanboston@gmail.com",
      subject: "New Quote Request: " + service + " from " + name,
      replyTo: email,
      body: body,
      attachments: attachments
    });

    return ContentService.createTextOutput(JSON.stringify({ "result": "success" }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (f) {
    return ContentService.createTextOutput(JSON.stringify({ "result": "error", "error": f.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
