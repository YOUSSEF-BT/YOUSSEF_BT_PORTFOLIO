from pathlib import Path

path = Path('src/sections/Contact.jsx')
text = path.read_text()

text = text.replace('import emailjs from "@emailjs/browser";\n', '')

old = '''  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error(
          "EmailJS configuration is missing. Please check your environment variables."
        );
      }

      await emailjs.send(
        serviceId,
        templateId,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        publicKey
      );

      setSubmitStatus({
        type: "success",
        message: t("contact.success"),
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("EmailJS error:", err);
      setSubmitStatus({
        type: "error",
        message: t("contact.error"),
      });
    } finally {
      setIsLoading(false);
    }
  };
'''

new = '''  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const payload = new URLSearchParams({
        name: formData.name,
        email: formData.email,
        message: formData.message,
        _replyto: formData.email,
        _subject: `Portfolio message from ${formData.name}`,
        source: window.location.href,
      });

      const response = await fetch(
        "https://flowform.to/bt.youssef.369@gmail.com",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: payload.toString(),
        }
      );

      const data = await response.json().catch(() => ({}));

      if (!response.ok || data.success !== true) {
        throw new Error(data.message || "Unable to send message.");
      }

      setSubmitStatus({
        type: "success",
        message: t("contact.success"),
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("Contact form error:", err);
      setSubmitStatus({
        type: "error",
        message: t("contact.error"),
      });
    } finally {
      setIsLoading(false);
    }
  };
'''

if old not in text:
    raise RuntimeError('Expected EmailJS submit handler not found')

path.write_text(text.replace(old, new, 1))
print('Contact form switched from EmailJS to FlowForm.')
