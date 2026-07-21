import { client } from "@/sanity/lib/client";
import ClientLogosClient from "./ClientLogosClient";

export interface ClientLogoType {
  _id: string;
  name: string;
  logoUrl: string;
}

export default async function ClientLogos() {
  const query = `*[_type == "clientLogo"]{
    _id,
    name,
    "logoUrl": logo.asset->url
  }`;

  const logos: ClientLogoType[] = await client.fetch(query, {}, { cache: 'no-store' });

  if (!logos || logos.length === 0) return null;

  return <ClientLogosClient logos={logos} />;
}