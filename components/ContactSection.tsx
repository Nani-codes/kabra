"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimateOnScroll } from "./AnimateOnScroll";

const DOTS_IMG =
  "https://manufacturer.stylemixthemes.com/industrial/wp-content/uploads/sites/2/2018/08/dots.png";

export function ContactSection() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    mail: "",
    phone: "",
    Help: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", company: "", mail: "", phone: "", Help: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // Temporarily disabled contact form/intro section on the homepage.
  // Keeping logic here so it can be re-enabled easily later.
  return null;
}
