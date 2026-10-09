"use client";
import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import styles from "./Contact.module.css";

interface Values { name: string; email: string; phone: string; country: string; message: string; }
type Errors = Partial<Record<keyof Values, string>>;
const INIT: Values = { name: "", email: "", phone: "", country: "", message: "" };

// Frontend-only validation until backend integration.
function validate(v: Values): Errors {
  const e: Errors = {};
  const okMail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  const digits = v.phone.replace(/[^\d]/g, "");
  if (!v.name.trim()) e.name = "Please share your full name.";
  if (!v.email.trim()) e.email = "Please share your email address.";
  else if (!okMail.test(v.email.trim())) e.email = "Please enter a valid email address.";
  if (!v.phone.trim()) e.phone = "Please share your phone number.";
  else if (digits.length < 7 || digits.length > 15) e.phone = "Please enter a valid phone number.";
  if (!v.country.trim()) e.country = "Please share your country.";
  return e;
}

export default function Contact() {
  const [values, setValues] = useState<Values>(INIT);
  const [errors, setErrors] = useState<Errors>({});
  const [done, setDone] = useState(false);

  const onChange = (ev: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = ev.target;
    setValues((p) => ({ ...p, [name]: value }));
    setErrors((p) => {
      if (!p[name as keyof Values]) return p;
      const n = { ...p };
      delete n[name as keyof Values];
      return n;
    });
    setDone(false);
  };

  const onSubmit = (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    const next = validate(values);
    setErrors(next);
    if (Object.keys(next).length > 0) return;
    setDone(true); // frontend-only success; no server submission yet
    setValues(INIT);
  };

  const err = (f: keyof Values) =>
    errors[f] ? <p id={`contact-${f}-error`} className={styles.error} role="alert">{errors[f]}</p> : null;

  const describedBy = (f: keyof Values) => (errors[f] ? `contact-${f}-error` : undefined);

  return (
    <section id="contact" className={styles.contact} aria-labelledby="contact-heading">
      <div className={`container ${styles.grid}`}>
        <div className={styles.copy}>
          <p className="eyebrow rise rise-1">Get in Touch</p>
          <h2 id="contact-heading" className={`${styles.heading} rise rise-2`}>Enquire<br /><em>now.</em></h2>
          <p className={`lead ${styles.lead} rise rise-3`}>Share your details and the team will respond with availability, documentation and arrangements for a visit.</p>
          <div className={`${styles.meta} rise rise-3`} aria-label="Enquiry notes">
            <span>By Invitation Only</span>
            <span aria-hidden="true" className={styles.dot}>·</span>
            <span>Shirdi Central</span>
          </div>
        </div>
        <div className={`${styles.formWrap} rise rise-2`}>
          {done ? (
            <div className={styles.success} role="status">
              <CheckCircle2 size={30} aria-hidden="true" />
              <h3 className={styles.successTitle}>Thank you.</h3>
              <p className={styles.successText}>Your enquiry has been received. The team will reach out shortly with the next steps.</p>
            </div>
          ) : (
            <form className={styles.form} onSubmit={onSubmit} noValidate>
              <div className={styles.field}>
                <label htmlFor="contact-name">Full Name</label>
                <input id="contact-name" name="name" type="text" autoComplete="name" value={values.name} onChange={onChange} aria-invalid={Boolean(errors.name)} aria-describedby={describedBy("name")} placeholder="Your full name" />
                {err("name")}
              </div>
              <div className={styles.rowTwo}>
                <div className={styles.field}>
                  <label htmlFor="contact-email">Email Address</label>
                  <input id="contact-email" name="email" type="email" autoComplete="email" value={values.email} onChange={onChange} aria-invalid={Boolean(errors.email)} aria-describedby={describedBy("email")} placeholder="you@example.com" />
                  {err("email")}
                </div>
                <div className={styles.field}>
                  <label htmlFor="contact-phone">Phone Number</label>
                  <input id="contact-phone" name="phone" type="tel" autoComplete="tel" value={values.phone} onChange={onChange} aria-invalid={Boolean(errors.phone)} aria-describedby={describedBy("phone")} placeholder="+91 98765 43210" />
                  {err("phone")}
                </div>
              </div>
              <div className={styles.field}>
                <label htmlFor="contact-country">Country</label>
                <input id="contact-country" name="country" type="text" autoComplete="country-name" value={values.country} onChange={onChange} aria-invalid={Boolean(errors.country)} aria-describedby={describedBy("country")} placeholder="India" />
                {err("country")}
              </div>
              <div className={styles.field}>
                <label htmlFor="contact-message">Message <span className={styles.optional}>(optional)</span></label>
                <textarea id="contact-message" name="message" rows={4} value={values.message} onChange={onChange} placeholder="Anything you would like the team to know" />
              </div>
              <button type="submit" className={`btn btn--dark ${styles.submit}`}>Send Enquiry<ArrowRight size={17} aria-hidden="true" /></button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
