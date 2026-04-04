export async function onRequestPost(context) {
  const { request, env } = context;

  try {
    const formData = await request.formData();
    const name = formData.get('name');
    const email = formData.get('email');
    const service = formData.get('service');
    const description = formData.get('description');
    const file = formData.get('file');

    // Prepare the email body
    let emailText = `New Quote Request from 3D Scan Boston Website\n\n`;
    emailText += `Name: ${name}\n`;
    emailText += `Email: ${email}\n`;
    emailText += `Service: ${service}\n\n`;
    emailText += `Description:\n${description}\n`;

    if (file && file.name) {
      emailText += `\nAttachment: ${file.name} (${file.size} bytes)\n`;
    }

    // Send the email using the Cloudflare SEND_EMAIL binding
    // NOTE: The 'to' address must be a verified Destination Address in Cloudflare Email Routing
    // The 'from' address can be any email on your 3dscanboston.com domain
    await env.SEND_EMAIL.send({
      to: [{ email: "info@3dscanboston.com" }], // Updated based on your decision
      from: { email: "quotes@3dscanboston.com", name: "3D Scan Boston Website" },
      subject: `New Quote Request: ${service} from ${name}`,
      text: emailText,
    });

    return new Response(JSON.stringify({ success: true }), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ success: false, error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
