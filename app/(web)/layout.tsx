import React from 'react'
import { ORG_CONTACT_PHONE, ORG_NAME, SITE_URL } from '@/libs/seo'

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: ORG_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/logo.svg`,
  description: "Online IT training and certification programs in Salesforce Administration and Digital Marketing.",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: ORG_CONTACT_PHONE,
    contactType: "customer service",
  },
};

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      {children}
    </>
  );
}

export default layout;