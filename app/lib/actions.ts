"use client";

import { signIn } from "next-auth/react";

export async function signInAction() {
  await signIn("github");
}
