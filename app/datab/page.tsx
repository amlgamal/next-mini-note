import { connectedDB } from "../lib/db";

export default async function TestPage() {
  await connectedDB();

  return <h1>Database Connected Successfully</h1>;
}