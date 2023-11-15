import { PropsWithChildren } from "react";
import { ClerkProvider } from "@clerk/nextjs";

export default function Layout({ children }: PropsWithChildren) {
    return (
        <ClerkProvider>{children}</ClerkProvider>
    );
}