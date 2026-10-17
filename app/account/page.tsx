import type { Metadata } from "next";
import { AccountForms } from "@/components/account-forms";
export const metadata: Metadata = { title: "Account" };
export default function AccountPage() { return <AccountForms/>; }
