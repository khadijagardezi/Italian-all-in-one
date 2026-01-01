import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import verbs from "@/data/verbs.json";
import Card from "@/app/components/Card";
import { Verb } from "@/types";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Italian Verbs",
  description: "A collection of Italian verbs with their English translations.",
};

export default function RootLayout() {
  return (
    <html lang="en">
      <body>
        <div className="min-vh-100 bg-light py-5">
          <div className="container">
            <h1 className="text-center mb-5">Italian Verbs</h1>
            <div className="row g-4">
              {verbs.map((verb) => (
                <Card key={verb.id} verb={verb as Verb} />
              ))}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
