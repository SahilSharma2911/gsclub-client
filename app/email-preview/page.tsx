import type { Metadata } from "next";
import { signupTemplate } from "@/emails/signupTemplate";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function EmailPreview() {
    const previewHTML = signupTemplate("John Doe"); // Example name

    return (
        <div dangerouslySetInnerHTML={{ __html: previewHTML }} />
    );
}
