import { useEffect, useState } from 'react';
import {
  AlertCircle,
  CheckCircle2,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
} from 'lucide-react';
import { motion } from 'motion/react';
import { OFFICES, SERVICES, SITE_CONFIG } from '../config/siteConfig';

interface ContactSectionProps {
  selectedService?: string;
}

interface FormState {
  fullName: string;
  companyName: string;
  email: string;
  contactNumber: string;
  country: string;
  service: string;
  message: string;
}

type FormErrors = Partial<Record<keyof FormState, string>>;

const INITIAL_FORM: FormState = {
  fullName: '',
  companyName: '',
  email: '',
  contactNumber: '',
  country: 'India',
  service: SERVICES[0].title,
  message: '',
};

const COUNTRY_OPTIONS = [
  'India',
  'United Arab Emirates',
  'Other GCC Country',
  'International',
];

export function ContactSection({ selectedService }: ContactSectionProps) {
  const [form, setForm] = useState<FormState>(INITIAL_FORM);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [submittedRef, setSubmittedRef] = useState<string>('');
  const [whatsappNotice, setWhatsappNotice] = useState(false);

  useEffect(() => {
    if (selectedService) {
      setForm((prev) => ({ ...prev, service: selectedService }));
      setSubmitted(false);
    }
  }, [selectedService]);

  const validate = (data: FormState): FormErrors => {
    const nextErrors: FormErrors = {};
    if (!data.fullName.trim() || data.fullName.trim().length < 2) {
      nextErrors.fullName = 'Please enter your full name.';
    }
    if (!data.companyName.trim()) {
      nextErrors.companyName = 'Please enter your company or organisation name.';
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(data.email.trim())) {
      nextErrors.email = 'Please enter a valid business email address.';
    }
    const digitsOnly = data.contactNumber.replace(/[^\d+]/g, '');
    if (digitsOnly.replace(/\+/g, '').length < 7) {
      nextErrors.contactNumber = 'Please enter a valid contact number with country code.';
    }
    if (!data.country) {
      nextErrors.country = 'Please select your country.';
    }
    if (!data.service) {
      nextErrors.service = 'Please select a service area.';
    }
    if (!data.message.trim() || data.message.trim().length < 12) {
      nextErrors.message = 'Please share a brief overview of your requirements (at least 12 characters).';
    }
    return nextErrors;
  };

  const handleChange = (
    field: keyof FormState,
    value: string
  ) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const updated = { ...prev };
        delete updated[field];
        return updated;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validate(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const refCode = `FIN-${Date.now().toString().slice(-6)}`;
    setSubmittedRef(refCode);
    setSubmitted(true);
    setErrors({});
  };

  const handleReset = () => {
    setForm({
      ...INITIAL_FORM,
      service: selectedService || SERVICES[0].title,
    });
    setSubmitted(false);
    setErrors({});
  };

  const handleWhatsAppClick = () => {
    if (SITE_CONFIG.whatsappNumber) {
      const encoded = encodeURIComponent(SITE_CONFIG.whatsappPrefill);
      const url = `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encoded}`;
      window.location.href = url;
      return;
    }
    setWhatsappNotice(true);
  };

  const inputBaseClass =
    'mt-1.5 block w-full rounded-sm border bg-white px-4 py-3 text-[0.93rem] text-[#14283D] placeholder:text-[#94A3B8] transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-[#07518D]/15';

  return (
    <section
      id="contact"
      className="border-t border-[#E9EEF2] bg-[#F5F7F9] py-24 lg:py-32"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Left Column: Intro, Office Contact Blocks & WhatsApp */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-between lg:col-span-5"
          >
            <div>
              <p className="text-xs font-semibold tracking-[0.16em] text-[#008577] uppercase">
                Contact &amp; Enquiry
              </p>
              <h2
                id="contact-heading"
                className="mt-4 font-display text-[clamp(1.85rem,3.1vw,2.75rem)] font-bold leading-[1.15] tracking-[-0.02em] text-[#14283D]"
              >
                Let&apos;s Start a Conversation.
              </h2>
              <p className="mt-5 text-[0.98rem] leading-[1.7] text-[#596675]">
                Whether you are exploring financial solutions or seeking management
                consultancy, connect with our team to discuss your requirements.
              </p>

              {/* Separate Office Contact Blocks (Editable Placeholders) */}
              <div className="mt-10 space-y-5">
                {OFFICES.map((office) => (
                  <div
                    key={office.id}
                    className="rounded-sm border border-[#E4EAF0] bg-white p-6"
                  >
                    <p className="text-[0.7rem] font-semibold tracking-[0.15em] text-[#008577] uppercase">
                      {office.countryLabel}
                    </p>
                    <h3 className="mt-1.5 font-display text-[1.05rem] font-bold text-[#14283D]">
                      {office.entityName}
                    </h3>

                    <dl className="mt-4 space-y-2.5 text-[0.86rem] text-[#596675]">
                      <div className="flex items-start gap-2.5">
                        <MapPin
                          className="mt-0.5 h-4 w-4 shrink-0 text-[#07518D]"
                          strokeWidth={1.6}
                          aria-hidden="true"
                        />
                        <div>
                          <dt className="sr-only">Address</dt>
                          <dd>{office.contact.addressPlaceholder}</dd>
                        </div>
                      </div>

                      <div className="flex items-start gap-2.5">
                        <Mail
                          className="mt-0.5 h-4 w-4 shrink-0 text-[#07518D]"
                          strokeWidth={1.6}
                          aria-hidden="true"
                        />
                        <div>
                          <dt className="sr-only">Email</dt>
                          <dd className="italic text-[#596675]/90">
                            {office.contact.emailPlaceholder}
                          </dd>
                        </div>
                      </div>

                      <div className="flex items-start gap-2.5">
                        <Phone
                          className="mt-0.5 h-4 w-4 shrink-0 text-[#07518D]"
                          strokeWidth={1.6}
                          aria-hidden="true"
                        />
                        <div>
                          <dt className="sr-only">Telephone</dt>
                          <dd className="italic text-[#596675]/90">
                            {office.contact.phonePlaceholder}
                          </dd>
                        </div>
                      </div>
                    </dl>
                  </div>
                ))}
              </div>
            </div>

            {/* Dedicated WhatsApp Contact Action */}
            <div className="mt-7 rounded-sm border border-[#E4EAF0] bg-white p-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="font-display text-[0.98rem] font-semibold text-[#14283D]">
                    Direct WhatsApp Desk
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-[#596675]">
                    Connect directly for scheduling and initial enquiries.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={handleWhatsAppClick}
                  className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-sm border border-[#008577] bg-[#008577] px-5 py-2.5 text-sm font-medium text-white whitespace-nowrap shrink-0 transition-colors duration-150 hover:bg-[#006D61] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#008577]"
                >
                  <MessageCircle className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
                  <span>WhatsApp Us</span>
                </button>
              </div>

              {whatsappNotice && (
                <p className="mt-4 border-t border-[#E9EEF2] pt-3 text-xs leading-relaxed text-[#596675]">
                  Official WhatsApp Business contact number is pending confirmation. Please
                  submit your details using the enquiry form alongside and our team will
                  respond directly.
                </p>
              )}
            </div>
          </motion.div>

          {/* Right Column: Validated Corporate Enquiry Form */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <div className="rounded-sm border border-[#E4EAF0] bg-white p-7 sm:p-10">
              {submitted ? (
                <div className="py-10 text-left" role="status" aria-live="polite">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-sm bg-[#008577]/10 text-[#008577]">
                    <CheckCircle2 className="h-6 w-6" strokeWidth={1.75} />
                  </div>

                  <p className="mt-6 font-display text-xs font-semibold tracking-[0.14em] tabular-nums text-[#008577] uppercase">
                    Enquiry Recorded · Reference {submittedRef}
                  </p>

                  <h3 className="mt-2 font-display text-2xl font-bold text-[#14283D]">
                    Thank you, {form.fullName}.
                  </h3>

                  <p className="mt-3 max-w-lg text-[0.95rem] leading-[1.7] text-[#596675]">
                    Your enquiry regarding <strong className="font-medium text-[#14283D]">{form.service}</strong> for{' '}
                    <strong className="font-medium text-[#14283D]">{form.companyName}</strong> ({form.country}) has been
                    received. Our consultancy team will review your requirements and follow up at{' '}
                    <span className="font-medium text-[#14283D]">{form.email}</span>.
                  </p>

                  <div className="mt-8 border-t border-[#E9EEF2] pt-6">
                    <button
                      type="button"
                      onClick={handleReset}
                      className="inline-flex min-h-[44px] items-center justify-center rounded-sm border border-[#CBD5E1] bg-white px-5 py-2.5 text-sm font-medium text-[#14283D] transition-colors hover:border-[#07518D] hover:text-[#07518D]"
                    >
                      Submit Another Enquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <div className="border-b border-[#E9EEF2] pb-5">
                    <h3 className="font-display text-xl font-bold text-[#14283D]">
                      Business Enquiry Form
                    </h3>
                    <p className="mt-1.5 text-sm text-[#596675]">
                      Share your details and area of interest. All enquiries are handled with
                      strict confidentiality.
                    </p>
                  </div>

                  <div className="mt-7 grid grid-cols-1 gap-5 sm:grid-cols-2">
                    {/* Full Name */}
                    <div>
                      <label
                        htmlFor="enquiry-fullName"
                        className="block text-xs font-semibold tracking-[0.06em] text-[#14283D] uppercase"
                      >
                        Full Name <span className="text-[#008577]">*</span>
                      </label>
                      <input
                        id="enquiry-fullName"
                        name="fullName"
                        type="text"
                        autoComplete="name"
                        value={form.fullName}
                        onChange={(e) => handleChange('fullName', e.target.value)}
                        placeholder="Your full name"
                        aria-invalid={Boolean(errors.fullName)}
                        aria-describedby={errors.fullName ? 'error-fullName' : undefined}
                        className={`${inputBaseClass} ${
                          errors.fullName
                            ? 'border-[#B91C1C] focus:border-[#B91C1C]'
                            : 'border-[#DCE3EB] focus:border-[#07518D]'
                        }`}
                      />
                      {errors.fullName && (
                        <p
                          id="error-fullName"
                          className="mt-1.5 flex items-center gap-1.5 text-xs text-[#B91C1C]"
                        >
                          <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                          <span>{errors.fullName}</span>
                        </p>
                      )}
                    </div>

                    {/* Company Name */}
                    <div>
                      <label
                        htmlFor="enquiry-companyName"
                        className="block text-xs font-semibold tracking-[0.06em] text-[#14283D] uppercase"
                      >
                        Company Name <span className="text-[#008577]">*</span>
                      </label>
                      <input
                        id="enquiry-companyName"
                        name="companyName"
                        type="text"
                        autoComplete="organization"
                        value={form.companyName}
                        onChange={(e) => handleChange('companyName', e.target.value)}
                        placeholder="Organisation name"
                        aria-invalid={Boolean(errors.companyName)}
                        aria-describedby={errors.companyName ? 'error-companyName' : undefined}
                        className={`${inputBaseClass} ${
                          errors.companyName
                            ? 'border-[#B91C1C] focus:border-[#B91C1C]'
                            : 'border-[#DCE3EB] focus:border-[#07518D]'
                        }`}
                      />
                      {errors.companyName && (
                        <p
                          id="error-companyName"
                          className="mt-1.5 flex items-center gap-1.5 text-xs text-[#B91C1C]"
                        >
                          <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                          <span>{errors.companyName}</span>
                        </p>
                      )}
                    </div>

                    {/* Email Address */}
                    <div>
                      <label
                        htmlFor="enquiry-email"
                        className="block text-xs font-semibold tracking-[0.06em] text-[#14283D] uppercase"
                      >
                        Email Address <span className="text-[#008577]">*</span>
                      </label>
                      <input
                        id="enquiry-email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        value={form.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        placeholder="name@company.com"
                        aria-invalid={Boolean(errors.email)}
                        aria-describedby={errors.email ? 'error-email' : undefined}
                        className={`${inputBaseClass} ${
                          errors.email
                            ? 'border-[#B91C1C] focus:border-[#B91C1C]'
                            : 'border-[#DCE3EB] focus:border-[#07518D]'
                        }`}
                      />
                      {errors.email && (
                        <p
                          id="error-email"
                          className="mt-1.5 flex items-center gap-1.5 text-xs text-[#B91C1C]"
                        >
                          <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>

                    {/* Contact Number */}
                    <div>
                      <label
                        htmlFor="enquiry-contactNumber"
                        className="block text-xs font-semibold tracking-[0.06em] text-[#14283D] uppercase"
                      >
                        Contact Number <span className="text-[#008577]">*</span>
                      </label>
                      <input
                        id="enquiry-contactNumber"
                        name="contactNumber"
                        type="tel"
                        autoComplete="tel"
                        value={form.contactNumber}
                        onChange={(e) => handleChange('contactNumber', e.target.value)}
                        placeholder="+91 / +971 ..."
                        aria-invalid={Boolean(errors.contactNumber)}
                        aria-describedby={errors.contactNumber ? 'error-contactNumber' : undefined}
                        className={`${inputBaseClass} ${
                          errors.contactNumber
                            ? 'border-[#B91C1C] focus:border-[#B91C1C]'
                            : 'border-[#DCE3EB] focus:border-[#07518D]'
                        }`}
                      />
                      {errors.contactNumber && (
                        <p
                          id="error-contactNumber"
                          className="mt-1.5 flex items-center gap-1.5 text-xs text-[#B91C1C]"
                        >
                          <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                          <span>{errors.contactNumber}</span>
                        </p>
                      )}
                    </div>

                    {/* Country */}
                    <div>
                      <label
                        htmlFor="enquiry-country"
                        className="block text-xs font-semibold tracking-[0.06em] text-[#14283D] uppercase"
                      >
                        Country <span className="text-[#008577]">*</span>
                      </label>
                      <select
                        id="enquiry-country"
                        name="country"
                        value={form.country}
                        onChange={(e) => handleChange('country', e.target.value)}
                        className={`${inputBaseClass} border-[#DCE3EB] focus:border-[#07518D]`}
                      >
                        {COUNTRY_OPTIONS.map((country) => (
                          <option key={country} value={country}>
                            {country}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Service Interested In */}
                    <div>
                      <label
                        htmlFor="enquiry-service"
                        className="block text-xs font-semibold tracking-[0.06em] text-[#14283D] uppercase"
                      >
                        Service Interested In <span className="text-[#008577]">*</span>
                      </label>
                      <select
                        id="enquiry-service"
                        name="service"
                        value={form.service}
                        onChange={(e) => handleChange('service', e.target.value)}
                        className={`${inputBaseClass} border-[#DCE3EB] focus:border-[#07518D]`}
                      >
                        {SERVICES.map((svc) => (
                          <option key={svc.id} value={svc.title}>
                            {svc.title}
                          </option>
                        ))}
                        <option value="General Consultancy Enquiry">
                          General Consultancy Enquiry
                        </option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="mt-5">
                    <label
                      htmlFor="enquiry-message"
                      className="block text-xs font-semibold tracking-[0.06em] text-[#14283D] uppercase"
                    >
                      Message <span className="text-[#008577]">*</span>
                    </label>
                    <textarea
                      id="enquiry-message"
                      name="message"
                      rows={4}
                      value={form.message}
                      onChange={(e) => handleChange('message', e.target.value)}
                      placeholder="Briefly outline your financial or management consultancy requirements..."
                      aria-invalid={Boolean(errors.message)}
                      aria-describedby={errors.message ? 'error-message' : undefined}
                      className={`${inputBaseClass} resize-y ${
                        errors.message
                          ? 'border-[#B91C1C] focus:border-[#B91C1C]'
                          : 'border-[#DCE3EB] focus:border-[#07518D]'
                      }`}
                    />
                    {errors.message && (
                      <p
                        id="error-message"
                        className="mt-1.5 flex items-center gap-1.5 text-xs text-[#B91C1C]"
                      >
                        <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  <div className="mt-8 flex flex-col gap-4 border-t border-[#E9EEF2] pt-6 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-xs text-[#596675]">
                      Required fields are marked with <span className="text-[#008577]">*</span>.
                    </p>
                    <button
                      type="submit"
                      className="inline-flex min-h-[48px] items-center justify-center gap-2.5 rounded-sm bg-[#07518D] px-7 py-3 text-sm font-medium text-white whitespace-nowrap shrink-0 transition-colors duration-150 hover:bg-[#053E6E] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#07518D]"
                    >
                      <span>Send an Enquiry</span>
                      <Send className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
