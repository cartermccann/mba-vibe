"use client";

import type { ChangeEvent, FormEvent } from "react";
import { useRef, useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  ATHLETE_AGE_NOTICE,
  CONTACT_PROGRAMS,
  CONTACT_ROLES,
} from "@/lib/contact-options";
import { FORM_LIMITS } from "@/lib/form-constants";
import { contactCopy } from "@/lib/site-content";

type SubmitStatus = "idle" | "submitting" | "success" | "error";

interface ContactFields {
  name: string;
  email: string;
  role: string;
  athleteOver18: "" | "yes" | "no";
  programs: string[];
  team: string;
}

const emptyFields: ContactFields = {
  name: "",
  email: "",
  role: "",
  athleteOver18: "",
  programs: [],
  team: "",
};

const fieldClass =
  "h-40 w-full rounded-none border border-ink bg-canvas px-8 text-[16px] text-ink shadow-none " +
  "focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-2";

const choiceClass =
  "size-20 shrink-0 accent-gold border border-ink bg-canvas";

export function ContactForm() {
  const [fields, setFields] = useState<ContactFields>(emptyFields);
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [feedback, setFeedback] = useState("");
  const honeypotRef = useRef<HTMLInputElement>(null);
  const isAthlete = fields.role === "athlete";
  const showAgeNotice = isAthlete && fields.athleteOver18 === "no";

  function handleChange(
    event: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) {
    const { name, value } = event.target;
    setFields((current) => {
      if (name === "role") {
        return {
          ...current,
          role: value,
          athleteOver18: value === "athlete" ? current.athleteOver18 : "",
        };
      }
      return { ...current, [name]: value };
    });
    if (status === "error" || status === "success") {
      setStatus("idle");
      setFeedback("");
    }
  }

  function toggleProgram(value: string, checked: boolean) {
    setFields((current) => ({
      ...current,
      programs: checked
        ? [...current.programs, value]
        : current.programs.filter((item) => item !== value),
    }));
    if (status === "error" || status === "success") {
      setStatus("idle");
      setFeedback("");
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!fields.role) {
      setStatus("error");
      setFeedback("Please select your role.");
      return;
    }

    if (fields.programs.length === 0) {
      setStatus("error");
      setFeedback("Please choose at least one program.");
      return;
    }

    setStatus("submitting");
    setFeedback("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...fields,
          company: honeypotRef.current?.value ?? "",
        }),
      });
      const result = (await response.json().catch(() => null)) as {
        error?: string;
      } | null;

      if (!response.ok) {
        setStatus("error");
        setFeedback(
          result?.error ||
            "We couldn't send your request. Please check the form and try again.",
        );
        return;
      }

      setStatus("success");
      setFeedback(contactCopy.success);
      setFields(emptyFields);
    } catch {
      setStatus("error");
      setFeedback("We couldn't reach the server. Check your connection and try again.");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      aria-busy={status === "submitting"}
      className="flex flex-col gap-24 bg-canvas text-ink"
    >
      <div aria-hidden="true" className="sr-only">
        <label htmlFor="contact-company">Company (leave blank)</label>
        <input
          ref={honeypotRef}
          id="contact-company"
          name="company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="grid gap-16 md:grid-cols-2">
        <div className="flex flex-col gap-8">
          <Label htmlFor="contact-name" className="font-apercu text-caption-25 uppercase">
            Name
          </Label>
          <Input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            required
            maxLength={FORM_LIMITS.name}
            value={fields.name}
            onChange={handleChange}
            className={fieldClass}
          />
        </div>
        <div className="flex flex-col gap-8">
          <Label htmlFor="contact-email" className="font-apercu text-caption-25 uppercase">
            Email
          </Label>
          <Input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            maxLength={FORM_LIMITS.email}
            value={fields.email}
            onChange={handleChange}
            className={fieldClass}
          />
        </div>
      </div>

      <div className="flex flex-col gap-8">
        <Label htmlFor="contact-role" className="font-apercu text-caption-25 uppercase">
          Role
        </Label>
        <select
          id="contact-role"
          name="role"
          required
          value={fields.role}
          onChange={handleChange}
          className={fieldClass}
        >
          <option value="" disabled>
            Select your role
          </option>
          {CONTACT_ROLES.map((role) => (
            <option key={role.value} value={role.value}>
              {role.label}
            </option>
          ))}
        </select>
      </div>

      {isAthlete ? (
        <fieldset className="flex flex-col gap-12 border-0 p-0">
          <legend className="mb-12 font-apercu text-caption-25 uppercase">
            Are you 18 or older?
          </legend>
          <div className="flex gap-24">
            {(["yes", "no"] as const).map((value) => (
              <label key={value} className="flex items-center gap-8 text-body-30">
                <input
                  type="radio"
                  name="athleteOver18"
                  value={value}
                  required
                  checked={fields.athleteOver18 === value}
                  onChange={handleChange}
                  className={choiceClass}
                />
                <span>{value === "yes" ? "Yes" : "No"}</span>
              </label>
            ))}
          </div>
          {showAgeNotice ? (
            <p className="text-caption-20 text-quiet">{ATHLETE_AGE_NOTICE}</p>
          ) : null}
        </fieldset>
      ) : null}

      <fieldset className="flex flex-col gap-12 border-0 p-0">
        <legend className="mb-12 font-apercu text-caption-25 uppercase">
          Program(s)
        </legend>
        <div className="flex flex-col gap-16">
          {CONTACT_PROGRAMS.map((program) => (
            <label
              key={program.value}
              className="flex items-center gap-12 text-body-30"
            >
              <input
                type="checkbox"
                checked={fields.programs.includes(program.value)}
                onChange={(event) =>
                  toggleProgram(program.value, event.target.checked)
                }
                className={choiceClass}
              />
              <span>{program.label}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <div className="flex flex-col gap-8">
        <Label htmlFor="contact-team" className="font-apercu text-caption-25 uppercase">
          Tell us about your team <span className="text-quiet">(optional)</span>
        </Label>
        <Textarea
          id="contact-team"
          name="team"
          maxLength={FORM_LIMITS.team}
          rows={5}
          value={fields.team}
          onChange={handleChange}
          className="min-h-120 w-full rounded-none border border-ink bg-canvas px-8 py-12 text-[16px] text-ink shadow-none focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-2"
        />
      </div>

      <Button
        type="submit"
        disabled={status === "submitting"}
        className="min-h-40 w-fit rounded-none bg-gold px-24 text-cta uppercase text-ink hover:bg-gold-matte"
      >
        {status === "submitting" ? contactCopy.submitting : contactCopy.submit}
      </Button>

      <div
        role={status === "error" ? "alert" : "status"}
        aria-live={status === "error" ? "assertive" : "polite"}
        className={feedback ? "text-body-30" : "sr-only"}
      >
        {feedback}
      </div>
    </form>
  );
}
