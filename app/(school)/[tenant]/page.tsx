import { notFound } from "next/navigation";
import TenantClient from "./TenantClient";
import { isValidTenant } from "@/lib/tenants";

type Props = { params: { tenant?: string } };

export default async function TenantPage({ params }: Props) {
  const tenant = (await params)?.tenant;

  const ok = isValidTenant(tenant);
  if (!ok) return notFound();
  return <TenantClient tenant={tenant!} />;
}
