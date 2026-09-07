import {
  Mail,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
  ExternalLink,
  MessageSquareText,
} from "lucide-react";
import { Button } from "@/components/Button";
import { FIVERR_PROFILE_URL } from "@/components/FiverrLogo";
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "bt.youssef.369@gmail.com",
    href: "mailto:bt.youssef.369@gmail.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Rabat, Morocco",
  },
];

export const Contact = () => {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    type: null,
    message: "",
  });

  const contactCopy =
    language === "fr"
      ? {
          formTitle: "Envoyez-moi un message",
          formDescription:
            "Une opportunité, un projet ou une collaboration ? Écrivez-moi directement.",
          namePlaceholder: "Votre nom",
          emailPlaceholder: "votre@email.com",
          messagePlaceholder: "Parlez-moi de votre projet ou opportunité...",
          availabilityTitle: "Ouvert aux opportunités IA/ML",
          availabilityDescription:
            "Disponible pour des postes CDI / temps plein en ingénierie IA/ML et une sélection de missions freelance, avec un focus sur RAG, LLM, Computer Vision, MLOps et Data Science.",
          badges: ["CDI / Temps plein", "Freelance", "Remote / Hybride"],
          location:
            "Rabat · Casablanca · Ouvert aux opportunités internationales",
          emailCta: "M’envoyer un e-mail",
          fiverrCta: "Profil Fiverr",
        }
      : {
          formTitle: "Send me a message",
          formDescription:
            "Have an opportunity, project, or collaboration in mind? Reach out directly.",
          namePlaceholder: "Your name",
          emailPlaceholder: "your@email.com",
          messagePlaceholder: "Tell me about your project or opportunity...",
          availabilityTitle: "Open to AI/ML Opportunities",
          availabilityDescription:
            "Available for full-time AI/ML Engineering roles and selected freelance projects, with a focus on RAG, LLM applications, Computer Vision, MLOps, and Data Science.",
          badges: ["Full-Time", "Freelance", "Remote / Hybrid"],
          location:
            "Rabat · Casablanca · Open to international opportunities",
          emailCta: "Email Me",
          fiverrCta: "Fiverr Profile",
        };

  const handleSubmit = async (e) => {
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

  return (
    <section id="contact" className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 md:w-96 h-64 md:h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-48 md:w-64 h-48 md:h-64 bg-highlight/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-9 md:mb-12">
          <span className="text-secondary-foreground text-xs md:text-sm font-medium tracking-wider uppercase animate-fade-in">
            {t("contact.title")}
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-4 md:mb-5 animate-fade-in animation-delay-100 text-secondary-foreground">
            {t("contact.headline")}{" "}
            <span className="font-serif italic font-normal text-foreground">
              {t("contact.headlineHighlight")}
            </span>
          </h2>
          <p className="text-sm md:text-base text-muted-foreground animate-fade-in animation-delay-200">
            {t("contact.description")}
          </p>
        </div>

        <div className="max-w-6xl mx-auto glass rounded-3xl md:rounded-[2rem] border border-border/60 overflow-hidden shadow-[0_20px_70px_rgba(0,0,0,0.16)] ring-1 ring-white/[0.02] animate-fade-in animation-delay-300">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
            <div className="p-5 sm:p-7 md:p-8 lg:p-9">
              <div className="flex items-start gap-3.5 mb-6 md:mb-7">
                <div className="w-10 h-10 md:w-11 md:h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                  <MessageSquareText className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-semibold tracking-tight">
                    {contactCopy.formTitle}
                  </h3>
                  <p className="mt-1 text-xs md:text-sm leading-relaxed text-muted-foreground max-w-xl">
                    {contactCopy.formDescription}
                  </p>
                </div>
              </div>

              <form
                id="contact-form"
                className="space-y-4"
                onSubmit={handleSubmit}
              >
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs md:text-sm font-medium mb-2"
                    >
                      {t("contact.name")}
                    </label>
                    <input
                      id="name"
                      type="text"
                      autoComplete="name"
                      required
                      placeholder={contactCopy.namePlaceholder}
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-surface/65 rounded-xl border border-border/70 focus:border-primary/70 focus:ring-2 focus:ring-primary/10 outline-none transition-all text-sm md:text-base placeholder:text-muted-foreground/55"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs md:text-sm font-medium mb-2"
                    >
                      {t("contact.email")}
                    </label>
                    <input
                      id="email"
                      type="email"
                      autoComplete="email"
                      required
                      placeholder={contactCopy.emailPlaceholder}
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-surface/65 rounded-xl border border-border/70 focus:border-primary/70 focus:ring-2 focus:ring-primary/10 outline-none transition-all text-sm md:text-base placeholder:text-muted-foreground/55"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs md:text-sm font-medium mb-2"
                  >
                    {t("contact.message")}
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder={contactCopy.messagePlaceholder}
                    className="w-full px-4 py-3 bg-surface/65 rounded-xl border border-border/70 focus:border-primary/70 focus:ring-2 focus:ring-primary/10 outline-none transition-all resize-none text-sm md:text-base placeholder:text-muted-foreground/55"
                  />
                </div>

                <Button
                  className="w-full rounded-xl shadow-md shadow-primary/10"
                  type="submit"
                  size="default"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>{t("contact.sending")}</>
                  ) : (
                    <>
                      {t("contact.send")}
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </Button>

                {submitStatus.type && (
                  <div
                    className={`flex items-center gap-3 p-3.5 rounded-xl ${
                      submitStatus.type === "success"
                        ? "bg-emerald-500/10 border border-emerald-500/20 text-emerald-400"
                        : "bg-rose-500/10 border border-rose-500/20 text-rose-400"
                    }`}
                  >
                    {submitStatus.type === "success" ? (
                      <CheckCircle className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
                    ) : (
                      <AlertCircle className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
                    )}
                    <p className="text-xs md:text-sm">{submitStatus.message}</p>
                  </div>
                )}
              </form>
            </div>

            <aside className="relative p-5 sm:p-7 md:p-8 lg:p-9 border-t lg:border-t-0 lg:border-l border-border/60 bg-gradient-to-br from-surface/25 via-surface/15 to-primary/[0.03]">
              <div className="absolute -top-20 -right-20 w-52 h-52 rounded-full bg-primary/10 blur-3xl pointer-events-none" />

              <div className="relative z-10">
                <h3 className="text-lg md:text-xl font-semibold mb-5">
                  {t("contact.contactInfo")}
                </h3>

                <div className="space-y-2">
                  {contactInfo.map((item) => {
                    const content = (
                      <>
                        <div className="w-10 h-10 md:w-11 md:h-11 rounded-xl bg-primary/10 border border-primary/10 flex items-center justify-center flex-shrink-0 transition-colors group-hover:bg-primary/15">
                          <item.icon className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                        </div>
                        <div className="min-w-0">
                          <div className="text-[11px] md:text-xs uppercase tracking-wider text-muted-foreground">
                            {item.label}
                          </div>
                          <div className="mt-0.5 text-sm md:text-base font-medium break-words">
                            {item.value}
                          </div>
                        </div>
                      </>
                    );

                    return item.href ? (
                      <a
                        key={item.label}
                        href={item.href}
                        className="group flex items-center gap-3.5 p-3 rounded-2xl border border-transparent hover:border-border/70 hover:bg-background/30 transition-all"
                      >
                        {content}
                      </a>
                    ) : (
                      <div
                        key={item.label}
                        className="group flex items-center gap-3.5 p-3 rounded-2xl"
                      >
                        {content}
                      </div>
                    );
                  })}
                </div>

                <div className="my-5 md:my-6 h-px bg-border/60" />

                <div className="flex items-center gap-2.5">
                  <span className="relative flex w-2.5 h-2.5 flex-shrink-0">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60 animate-ping" />
                    <span className="relative inline-flex h-full w-full rounded-full bg-emerald-500" />
                  </span>
                  <h3 className="text-sm md:text-base font-semibold tracking-tight">
                    {contactCopy.availabilityTitle}
                  </h3>
                </div>

                <p className="mt-3 text-xs md:text-sm leading-relaxed text-muted-foreground">
                  {contactCopy.availabilityDescription}
                </p>

                <div className="mt-3.5 flex flex-wrap gap-2">
                  {contactCopy.badges.map((badge) => (
                    <span
                      key={badge}
                      className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5 text-[10px] md:text-xs font-medium text-foreground/80"
                    >
                      {badge}
                    </span>
                  ))}
                </div>

                <div className="mt-4 flex items-start gap-2 text-xs md:text-sm text-muted-foreground">
                  <MapPin className="mt-0.5 w-3.5 h-3.5 md:w-4 md:h-4 flex-shrink-0 text-primary" />
                  <span>{contactCopy.location}</span>
                </div>

                <div className="mt-5 grid sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-3">
                  <a
                    href="mailto:bt.youssef.369@gmail.com"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground shadow-md shadow-primary/10 transition-all duration-300 hover:bg-primary/90 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-primary/30"
                  >
                    {contactCopy.emailCta}
                    <Mail className="w-4 h-4" />
                  </a>

                  <a
                    href={FIVERR_PROFILE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-border/80 bg-background/25 px-4 py-2.5 text-sm font-medium text-foreground transition-all duration-300 hover:border-primary/40 hover:bg-primary/5 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-primary/20"
                  >
                    {contactCopy.fiverrCta}
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
};
