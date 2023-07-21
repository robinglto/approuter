"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";

export default function Page() {
  const router = useRouter();
  const ruta = usePathname();
  const search = useSearchParams();

  return (
    <button type="button" onClick={() => router.push("/dashboard")}>
      Dashboard
      {ruta}
      {search}
    </button>
  );
}
