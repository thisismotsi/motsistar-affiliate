import { ReactNode } from "react";

export default function Section({ children, id }: { children: ReactNode; id?: string }) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-4 py-16">
      {children}
    </section>
  );
}
