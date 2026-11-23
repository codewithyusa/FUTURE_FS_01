import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import emailjs from "@emailjs/browser";
import ContactForm from "../components/contact/ContactForm";

vi.mock("@emailjs/browser", () => ({
  default: { send: vi.fn().mockResolvedValue({ status: 200 }) },
}));

describe("ContactForm", () => {
  it("renders name, email and message fields", () => {
    render(<ContactForm />);
    expect(screen.getByLabelText("Name")).toBeInTheDocument();
    expect(screen.getByLabelText("Email")).toBeInTheDocument();
    expect(screen.getByLabelText("Message")).toBeInTheDocument();
  });

  it("does not send when the form is empty", async () => {
    render(<ContactForm />);
    await userEvent.click(screen.getByRole("button", { name: /send message/i }));
    expect(emailjs.send).not.toHaveBeenCalled();
    expect(screen.getByLabelText("Name")).toHaveAttribute("aria-invalid", "true");
  });
});