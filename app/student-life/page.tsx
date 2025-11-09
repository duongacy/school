import { redirect } from "next/navigation";

export default function StudentLifePage() {
  // Old route preserved; redirect to /library
  redirect("/library");
}
