export type Plan = {
  name: string;
  slug: string;
  description: string;
  features?: string[];
};

export type Provider = {
  name: string;
  slug: string;
  description: string;
  plans?: Plan[];
};

export type Service = {
  name: string;
  slug: string;
  description: string;
  providers?: Provider[];
};

export const services: Service[] = [
  {
    name: "Life Insurance",
    slug: "life-insurance",
    description: "Financial protection and long-term savings plans.",
    providers: [
      {
        name: "LIC",
        slug: "lic",
        description: "Life Insurance Corporation of India offers a wide range of protection and savings plans.",
        plans: [
          // Endowment Plans
          { name: "LIC's Bima Jyoti", slug: "lic-bima-jyoti", description: "Non-linked, non-participating, individual savings plan." },
          { name: "LIC's Bima Ratna", slug: "lic-bima-ratna", description: "A non-linked, non-participating, individual, life insurance savings plan." },
          { name: "LIC's Dhan Sanchay", slug: "lic-dhan-sanchay", description: "Non-linked, non-participating personal savings life insurance plan." },
          { name: "LIC's Jeevan Azad", slug: "lic-jeevan-azad", description: "Limited premium payment, non-linked, non-participating plan." },
          { name: "LIC's Jeevan Labh", slug: "lic-jeevan-labh", description: "Limited premium paying, non-linked, participating endowment plan." },
          { name: "LIC's New Endowment Plan", slug: "lic-new-endowment-plan", description: "Participating non-linked plan offering an attractive combination of protection and saving." },
          { name: "LIC's Single Premium Endowment Plan", slug: "lic-single-premium-endowment", description: "A participating non-linked single premium plan." },
          { name: "LIC's New Jeevan Anand", slug: "lic-new-jeevan-anand", description: "Participating non-linked plan which offers an attractive combination of protection and saving." },
          { name: "LIC's Jeevan Lakshya", slug: "lic-jeevan-lakshya", description: "Participating non-linked plan which offers a combination of protection and savings." },

          // Whole Life Plans
          { name: "LIC's Jeevan Umang", slug: "lic-jeevan-umang", description: "Non-linked, participating, individual, whole life assurance plan." },
          { name: "LIC's Jeevan Utsav", slug: "lic-jeevan-utsav", description: "Non-linked, non-participating, individual, savings, whole life insurance plan." },

          // Money Back Plans
          { name: "LIC's Bima Shree", slug: "lic-bima-shree", description: "Non-linked, participating, individual, life guarantee savings plan." },
          { name: "LIC's New Money Back Plan - 20 Years", slug: "lic-new-money-back-20", description: "Non-linked, participating, individual, life insurance savings plan." },
          { name: "LIC's New Money Back Plan - 25 Years", slug: "lic-new-money-back-25", description: "A participating non-linked plan which offers an attractive combination of protection against death throughout the term." },
          { name: "LIC's Jeevan Tarun", slug: "lic-jeevan-tarun", description: "Non-linked, participating, individual, life assurance savings plan for children." },

          // Term Assurance Plans
          { name: "LIC's New Jeevan Amar", slug: "lic-new-jeevan-amar", description: "Non-linked, non-participating, individual, pure risk premium life insurance plan." },
          { name: "LIC's Digi Term", slug: "lic-digi-term", description: "Non-linked, non-participating, individual, pure risk premium life insurance plan." },
          { name: "LIC's Digi Credit Life", slug: "lic-digi-credit-life", description: "Non-linked, non-participating, individual, pure risk premium life insurance plan." },
          { name: "LIC's Yuva Credit Life", slug: "lic-yuva-credit-life", description: "Non-linked, non-participating, individual, pure risk premium life insurance plan." },
          { name: "LIC's Yuva Term", slug: "lic-yuva-term", description: "Non-linked, non-participating, individual, pure risk premium life insurance plan." },
          { name: "LIC's New Tech-Term", slug: "lic-new-tech-term", description: "Non-linked, non-participating, individual, pure risk premium life insurance plan." },
          { name: "LIC's Saral Jeevan Bima", slug: "lic-saral-jeevan-bima", description: "Non-linked, non-participating, individual, pure risk premium life insurance plan." },

          // ULIPs
          { name: "LIC's SIIP", slug: "lic-siip", description: "Unit Linked, regular premium, individual life insurance plan." },
          { name: "LIC's Index Plus", slug: "lic-index-plus", description: "Unit Linked, regular premium, individual life insurance plan." },
          { name: "LIC's Nivesh Plus", slug: "lic-nivesh-plus", description: "Unit Linked, single premium, individual life insurance plan." },

          // Pension Plans
          { name: "LIC's New Pension Plus", slug: "lic-new-pension-plus", description: "Unit Linked, non-participating, individual pension plan." },
          { name: "LIC's New Jeevan Shanti", slug: "lic-new-jeevan-shanti", description: "Non-linked, non-participating, individual, single premium, deferred annuity plan." },
          { name: "LIC's Jeevan Akshay - VII", slug: "lic-jeevan-akshay-vii", description: "Non-linked, non-participating, individual immediate annuity plan." }
        ]
      }
    ]
  },
  {
    name: "Health Insurance",
    slug: "health-insurance",
    description: "Covers medical and hospitalization expenses.",
    providers: [
      {
        name: "Galaxy Health Insurance",
        slug: "galaxy-health",
        description: "Comprehensive health insurance provider with innovative plans.",
        plans: [
          {
            name: "Galaxy Promise",
            slug: "galaxy-promise",
            description: "Comprehensive family health plan covering up to six members with 'Premium Promise' to lock in your initial premium rate.",
            features: [
              "Up to ₹1 Crore Sum Insured",
              "Family Floater Option",
              "Premium Promise (Rate lock guarantee)",
              "Unlimited restoration of sum insured",
              "Cumulative Bonus up to 500%",
              "Maternity and newborn coverage (in select variants)",
              "In-patient hospitalization & Daycare",
              "Ambulance cover"
            ]
          },
          {
            name: "Galaxy Marvel",
            slug: "galaxy-marvel",
            description: "High-value individual and family plan focusing on rapid coverage for modern treatments.",
            features: [
              "From ₹5 Lakhs to ₹2 Crores Sum Insured",
              "Pre-existing diseases covered from 31st day (select conditions)",
              "AYUSH and modern treatments covered",
              "Enhanced multiplier cumulative bonus",
              "Automatic restoration mechanism",
              "Maternity and newborn coverage inclusion"
            ]
          },
          {
            name: "Galaxy Guardian",
            slug: "galaxy-guardian",
            description: "Accessible health coverage plan suitable for individuals and families needing strong core benefits.",
            features: [
              "₹3 Lakhs to ₹5 Lakhs Sum Insured",
              "Cashless hospital facility",
              "In-patient hospitalization",
              "AYUSH treatments covered",
              "Daycare procedures"
            ]
          },
          {
            name: "Galaxy Top-up",
            slug: "galaxy-top-up",
            description: "Flexible add-on coverage to boost existing or employer-provided health insurance.",
            features: [
              "₹5 Lakhs to ₹2 Crores Sum Insured",
              "Flexible deductible options",
              "Customizable riders available",
              "Wide network of cashless hospitals",
              "Simple claim procedure"
            ]
          },
          {
            name: "Arogya Sanjeevani Policy",
            slug: "galaxy-arogya-sanjeevani",
            description: "Standard, affordable health policy mandated by IRDAI for essential coverages.",
            features: [
              "Pre and post-hospitalization",
              "Emergency ambulance services",
              "Daycare procedures",
              "AYUSH treatment up to limit",
              "Standardized terms across all insurers"
            ]
          }
        ]
      }
    ]
  },
  {
    name: "General Insurance",
    slug: "general-insurance",
    description: "Comprehensive coverage for your vehicles and personal assets.",
    providers: [
      {
        name: "Motor Insurance Solutions",
        slug: "motor-insurance-solutions",
        description: "Protecting your journey with comprehensive and third-party motor insurance offerings.",
        plans: [
          {
            name: "Two-Wheeler Insurance",
            slug: "two-wheeler-insurance",
            description: "Coverage for bikes and scooters against accidents, theft, and natural disasters.",
            features: [
              "Comprehensive and Third-Party liability cover",
              "Personal Accident Cover for owner-driver",
              "Cashless repairs across network garages",
              "No Claim Bonus (NCB) retention algorithms",
              "Optional Zero Depreciation add-on"
            ]
          },
          {
            name: "Private Car Insurance",
            slug: "private-car-insurance",
            description: "Extensive protection for your personal cars.",
            features: [
              "Own Damage and Third-Party Liability cover",
              "Cashless claim settlement at preferred garages",
              "Engine Protection and Consumables cover add-ons",
              "24/7 Roadside Assistance",
              "Return to Invoice (RTI) benefit in case of total loss"
            ]
          },
          {
            name: "Commercial Vehicle Insurance",
            slug: "commercial-vehicle-insurance",
            description: "Insurance designed for commercial vehicles including trucks, taxis, and goods carriers.",
            features: [
              "Coverage against natural and man-made calamities",
              "Passenger Cover for commercial transport",
              "Towing facility in case of accidents",
              "Legal liability coverage for paid drivers/employees",
              "Fleet insurance discounts available"
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Home Loans",
    slug: "home-loans",
    description: "Flexible financing solutions to help you build or buy your dream home.",
    providers: [
      {
        name: "Partner Banks & NBFCs",
        slug: "partner-banks-nbfcs",
        description: "Various banking partners offering competitive interest rates for all your home financing needs.",
        plans: [
          {
            name: "New Home Purchase Loan",
            slug: "home-purchase-loan",
            description: "Financial assistance to purchase a new flat, apartment, or bungalow.",
            features: [
              "Funding up to 90% of the property value",
              "Flexible repayment tenure up to 30 years",
              "Attractive floating and fixed interest rates",
              "Minimal documentation and quick processing",
              "PMAY subsidy benefits for eligible customers"
            ]
          },
          {
            name: "Home Construction Loan",
            slug: "home-construction-loan",
            description: "Loans designed specifically to finance the construction of a house on a pre-owned plot.",
            features: [
              "Disbursements aligned with the stages of construction",
              "Lower interest rates for eco-friendly constructions",
              "Expert property valuation assistance",
              "Option to convert to regular home loan upon completion",
              "Tax benefits under Sections 80C and 24(b)"
            ]
          },
          {
            name: "Home Renovation Loan",
            slug: "home-renovation-loan",
            description: "Funds to upgrade, repair, or extend your existing home.",
            features: [
              "Quick approval for urgent repairs",
              "Loan amounts tailored to estimated renovation costs",
              "No hidden charges or pre-payment penalties",
              "Simple and transparent term conditions",
              "Top-up options available for existing home loan customers"
            ]
          },
          {
            name: "Plot Purchase Loan",
            slug: "plot-purchase-loan",
            description: "Financing to purchase a vacant plot for future home construction.",
            features: [
              "Funding available for plots within municipal limits",
              "Competitive maximum loan amounts",
              "Flexible repayment options to suit your cash flow",
              "Transparent legal and technical valuation processes",
              "Special rates for women co-applicants"
            ]
          }
        ]
      }
    ]
  }
];
