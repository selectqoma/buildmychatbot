import type { Metadata } from "next";
import { TattooTryOn } from "@/components/tattoo-try-on";

export const metadata: Metadata = {
  title: "Tattoo Try-On Studio",
  description:
    "Upload a body photo and a tattoo design, place it by hand, and generate a realistic tattoo preview.",
};

export default function TattooPage() {
  return <TattooTryOn />;
}
