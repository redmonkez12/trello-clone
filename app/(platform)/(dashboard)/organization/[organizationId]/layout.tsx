import { startCase } from "lodash";
import { auth } from "@clerk/nextjs";

import { OrgControl } from "./_components/org-control";
import { PropsWithChildren } from "react";

export async function generateMetadata() {
    const { orgSlug } = auth();

    return {
        title: startCase(orgSlug || "organization"),
    };
};

const OrganizationIdLayout = ({
                                  children
                              }: PropsWithChildren) => {
    return (
        <>
            <OrgControl/>
            {children}
        </>
    );
};

export default OrganizationIdLayout;
