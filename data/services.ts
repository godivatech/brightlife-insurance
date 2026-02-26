export type Plan = {
  name: string;
  slug: string;
  description: string;
  features?: string[];
  whyChoose?: string;
};

export type Provider = {
  name: string;
  slug: string;
  description: string;
  plans?: Plan[];
  whyChoose?: string;
};

export type Service = {
  name: string;
  slug: string;
  description: string;
  providers?: Provider[];
  whyChoose?: string;
  keyBenefits?: string[];
};

export const services: Service[] = [
  {
    name: "Life Insurance",
    slug: "life-insurance",
    description: "Protect your family's future with trusted Life Insurance plans from LIC — India's most reliable insurer with over 65 years of legacy.",
    whyChoose: "Life Insurance is not just a policy — it is a promise you make to the people who depend on you. At BrightLife Insurance, we guide you through India's most comprehensive range of life insurance plans from LIC, covering protection, savings, investment, and pension. Whether you are a young professional starting out or a parent securing your child's future, we ensure you get the right plan at the right premium. With S. Sonai's 25+ years of expertise, we simplify the process and stand by you at every stage of life.",
    keyBenefits: [
      "Death Benefit & Maturity Payout",
      "Tax Savings under Sec 80C & 10(10D)",
      "Long-Term Wealth Accumulation",
      "Trusted LIC Claim Settlement"
    ],
    providers: [
      {
        name: "LIC",
        slug: "lic",
        description: "Life Insurance Corporation of India — the nation's largest and most trusted insurer with a claim settlement ratio above 98%, offering a diverse portfolio of protection and savings plans.",
        whyChoose: "LIC (Life Insurance Corporation of India) has been safeguarding Indian families since 1956. With a claim settlement ratio consistently above 98%, LIC is synonymous with trust and reliability. As an authorised LIC agent with over 25 years of experience, BrightLife Insurance helps you navigate LIC's vast product portfolio — from simple term plans to ULIPs and pension products — ensuring you choose a plan that perfectly aligns with your life goals and financial capacity. LIC's sovereign backing and government guarantee make it the most secure insurance choice available in India.",
        plans: [
          // SPECIAL / MISC CATEGORY
          {
            name: "Bima Lakshmi",
            slug: "lic-bima-lakshmi",
            description: "A specialized savings and protection plan designed to empower and secure the financial future of women.",
            whyChoose: "Bima Lakshmi is a dedicated plan reflecting LIC's commitment to women's financial independence. It provides a unique combination of savings and life cover, tailored to meet the specific requirements of women at various life stages. Whether you are building a retirement fund, saving for a child's milestone, or seeking a primary life cover, Bima Lakshmi offers competitive returns with the absolute security of LIC."
          },

          // ENDOWMENT PLANS
          {
            name: "LIC's New Endowment Plan",
            slug: "lic-new-endowment-plan",
            description: "Participating non-linked plan offering an attractive combination of protection and saving with bonus additions.",
            whyChoose: "The LIC New Endowment Plan is a time-tested savings-cum-protection plan that earns simple reversionary bonus throughout the policy term. It is ideally suited for people who want a straightforward policy with no complex structures — pay premiums for the chosen term, earn bonuses, and receive a lump sum at maturity or upon death of the life assured. This plan is a cornerstone of sound financial planning for families."
          },
          {
            name: "LIC's New Jeevan Anand",
            slug: "lic-new-jeevan-anand",
            description: "Participating non-linked plan that combines endowment savings with lifelong whole life cover after maturity.",
            whyChoose: "LIC's New Jeevan Anand is unique — it is the only plan that gives you the best of both worlds: an endowment plan that pays out at maturity AND continues to cover you for your entire life after maturity. This means your family is protected even after you have received your savings payout. It is the perfect plan for people who want a guaranteed maturity benefit while also ensuring permanent life protection for their loved ones. Bonus accumulation throughout the policy term adds further value."
          },
          {
            name: "LIC's Single Premium Endowment Plan",
            slug: "lic-single-premium-endowment",
            description: "A participating non-linked single premium plan — pay once and enjoy life cover with bonus accumulation for the entire term.",
            whyChoose: "If you have a lump sum available and want to put it to work as a secure, long-term savings instrument, LIC's Single Premium Endowment Plan is the answer. Pay just once, and your money grows through bonuses over the policy term while keeping a life cover active for your family. There are no annual premium obligations, making this ideal for NRIs, retirees, or anyone who has received a one-time windfall and wants a guaranteed, safe investment."
          },
          {
            name: "LIC's Jeevan Lakshya",
            slug: "lic-jeevan-lakshya",
            description: "Participating non-linked plan specially designed to secure a child's future needs with guaranteed annual income on death.",
            whyChoose: "Jeevan Lakshya is specifically crafted for parents who want to ensure their child's milestones are never compromised. In the event of the policyholder's unfortunate death during the term, the policy does not lapse — instead, all future premiums are waived AND the nominee receives 10% of the Sum Assured annually until policy maturity, guaranteeing a regular income for the child. At maturity, the full Sum Assured with bonuses is also paid. This is an exceptional child protection plan built on LIC's unwavering reliability."
          },
          {
            name: "LIC's Jeevan Labh",
            slug: "lic-jeevan-labh",
            description: "Limited premium paying, non-linked, participating endowment plan offering bonuses on a regular basis.",
            whyChoose: "Jeevan Labh is one of LIC's most popular endowment plans — and for good reason. It combines the advantage of limited premium payments with the long-term growth of bonuses (both simple reversionary and final additional bonus). You pay premiums for a shorter period of 10, 15, or 16 years while the policy continues to earn bonuses until maturity. This makes Jeevan Labh ideal for salaried professionals who want to accumulate a substantial corpus for retirement or children's higher education."
          },
          {
            name: "LIC's Bima Jyoti",
            slug: "lic-bima-jyoti",
            description: "Non-linked, non-participating, individual savings plan providing guaranteed additions and life cover for a fixed term.",
            whyChoose: "LIC's Bima Jyoti is ideal for disciplined savers who want guaranteed returns without any market risk. This plan offers guaranteed additions of ₹50 per ₹1,000 Sum Assured per year throughout the premium payment term, making your savings grow predictably. At maturity, you receive the entire Sum Assured along with all accumulated guaranteed additions — giving you a solid financial cushion for milestones like children's education, marriage, or retirement. The built-in life cover ensures your family is protected throughout the policy term."
          },
          {
            name: "LIC's Jeevan Azad",
            slug: "lic-jeevan-azad",
            description: "Limited premium payment, non-linked, non-participating plan with guaranteed additions and flexible payout option.",
            whyChoose: "LIC's Jeevan Azad is designed for those who want to pay premiums for a shorter period but retain coverage for a longer term. With limited premium payment terms, you complete your financial commitment early and then enjoy a prolonged life cover with guaranteed additions building up in the background. At maturity, the entire Sum Assured with accumulated guaranteed additions is paid — making it a smart plan for young earners who want to close premium payments before retirement."
          },
          {
            name: "Nav Jeevan Shree (Single Premium)",
            slug: "lic-nav-jeevan-shree-single",
            description: "A high-sum assured endowment plan offering localized stability and growth through a single premium commitment.",
            whyChoose: "Nav Jeevan Shree is designed for individuals looking to secure a large corpus with a one-time investment. Providing both life cover and guaranteed returns, it is an efficient way to deploy surplus funds while ensuring long-term financial security for your family. It stands as a premium choice for HNI clients looking for the LIC trust factor."
          },
          {
            name: "Nav Jeevan Shree (Limited Premium)",
            slug: "lic-nav-jeevan-shree-limited",
            description: "A participating endowment plan featuring limited premium payments and high sum assured for comprehensive protection.",
            whyChoose: "This variant of Nav Jeevan Shree offers the flexibility of paying premiums for a shorter duration while enjoying the full coverage of a high-value endowment policy. It is perfect for professionals in their peak earning years who want to complete their financial commitments early while securing a substantial maturity benefit for the future."
          },
          {
            name: "LIC's Dhan Sanchay",
            slug: "lic-dhan-sanchay",
            description: "Non-linked, non-participating personal savings life insurance plan with guaranteed income and flexible benefit structures.",
            whyChoose: "Dhan Sanchay is one of LIC's most flexible savings plans. It offers three distinct benefit options — allowing you to choose between an income stream during the policy term, a lump sum payout, or a combination of both. Whether you are building a retirement corpus or saving for a future commitment, Dhan Sanchay lets you lock in guaranteed returns from day one, shielding your savings from market volatility."
          },

          // NEW PLANS
          {
            name: "Jan Suraksha",
            slug: "lic-jan-suraksha",
            description: "A simplified, affordable insurance plan aimed at providing basic life cover to all segments of society.",
            whyChoose: "Jan Suraksha is designed with the mission of 'Insurance for All'. It offers a straightforward application process and extremely low premiums, making it the ideal starter policy for individuals who want to secure a basic safety net for their families without heavy financial burden. It provides the core protection every household needs."
          },

          // MONEYBACK PLANS
          {
            name: "LIC's New Money Back Plan - 20 Years",
            slug: "lic-new-money-back-20",
            description: "Non-linked, participating plan that pays 20% of the sum assured every 5 years with a bonus-enhanced maturity payout.",
            whyChoose: "The LIC New Money Back Plan (20 Years) is a classic money-back policy that ensures you receive funds at critical intervals — 20% of Sum Assured at the 5th, 10th, and 15th years — while the remaining 40% plus all accumulated bonuses are paid at maturity. This regular flow of funds makes it perfect for planning foreseeable expenses: a car purchase, a home renovation, or children's school fees. Life coverage remains in force for the full Sum Assured throughout the term, irrespective of survival benefits already paid."
          },
          {
            name: "LIC's New Money Back Plan - 25 Years",
            slug: "lic-new-money-back-25",
            description: "A participating non-linked plan paying survival benefits every 5 years with enhanced life cover for a 25-year term.",
            whyChoose: "The LIC New Money Back Plan (25 Years) extends the money-back structure over a longer horizon, giving you more time for bonus accumulation and a higher final maturity payout. Survival benefits are paid at the 5th, 10th, 15th, and 20th year, putting cash in your hands for larger life milestones over a quarter century. This plan suits younger buyers who want a long-term savings plan with built-in liquidity and strong life coverage through their prime earning years."
          },
          {
            name: "LIC's Bima Shree",
            slug: "lic-bima-shree",
            description: "Non-linked, participating, individual, life guaranteed savings plan aimed at high Net Worth Individuals (HNIs).",
            whyChoose: "LIC's Bima Shree is a premium plan crafted for high-income individuals who want a policy with a high Sum Assured (minimum ₹10 lakh), regular money-back payouts, and strong bonus accumulation. It offers survival payouts at regular intervals during the policy term, keeping your liquidity intact for major expenses. The combination of guaranteed payouts, bonus income, and substantial life cover makes Bima Shree an ideal plan for executives, business owners, and professionals seeking a prestigious, high-value insurance policy."
          },
          {
            name: "LIC's Bima Ratna",
            slug: "lic-bima-ratna",
            description: "A non-linked, non-participating, individual, life insurance savings plan offering survival payouts at regular intervals.",
            whyChoose: "LIC's Bima Ratna is a money-back style savings plan that pays you a portion of the Sum Assured at intervals before maturity — giving you liquidity when you need it most. This plan is suited for families who need periodic income for major life events (a child starting college, a planned renovation) while still keeping a life cover active. It combines protection and staged payouts in a single, straightforward policy."
          },

          // WHOLELIFE PLANS
          {
            name: "LIC's Jeevan Umang",
            slug: "lic-jeevan-umang",
            description: "Non-linked, participating, individual, whole life assurance plan with annual survival benefits from the end of premium payment term.",
            whyChoose: "LIC's Jeevan Umang is a truly unique whole life plan that pays you annually after the premium payment term is complete — effectively becoming a lifetime income source. Once your premium payment period ends (at age 100 of the life assured), you receive 8% of the Sum Assured annually as a survival benefit, for the rest of your life. At death or maturity at age 100, the full Sum Assured plus bonuses is paid. It is an exceptional retirement planning and legacy building tool for those who want a policy that keeps paying them back."
          },
          {
            name: "LIC's Jeevan Utsav",
            slug: "lic-jeevan-utsav",
            description: "Non-linked, non-participating, individual, savings, whole life insurance plan with guaranteed income for life.",
            whyChoose: "Jeevan Utsav is a whole life plan that offers guaranteed income for as long as you live, starting after the premium payment term. Unlike market-linked products, the income from Jeevan Utsav is completely guaranteed — providing you with financial security and predictability in retirement. The plan also includes a flexible 'Flexi Income' option, allowing you to defer income accumulation during the payout period. It is an excellent choice for retirement planning and ensuring a regular income stream without depending on market performance."
          },
          {
            name: "Jeevan Utsav (Single Premium)",
            slug: "lic-jeevan-utsav-single",
            description: "The whole-life guaranteed income benefit of Jeevan Utsav, now available with a single one-time premium payout.",
            whyChoose: "For those who want to secure a lifetime of guaranteed income in one go, the Single Premium version of Jeevan Utsav is unmatched. By paying a single lump sum, you lock in a lifelong income stream that is shielded from market fluctuations. It is an ideal way to deploy a retirement corpus or windfall to ensure you never run out of reliable cash flow."
          },

          // CHILD PLANS
          {
            name: "Child Money Back Plan",
            slug: "lic-child-money-back",
            description: "A participating money-back plan specifically designed to meet the growing educational and lifestyle needs of your child.",
            whyChoose: "The Child Money Back plan provides liquidity exactly when it is needed most — during your child's higher education years. With survival benefits paid at key ages (18, 20, and 22), it ensures that funds are available for college admissions and related expenses. It's a reliable tool for parents to build a dedicated fund for their child's future milestones."
          },
          {
            name: "LIC's Jeevan Tarun",
            slug: "lic-jeevan-tarun",
            description: "Non-linked, participating, individual, life assurance savings plan specifically designed to fund a child's future needs.",
            whyChoose: "Jeevan Tarun is LIC's dedicated child plan, designed to provide funds exactly when your child needs them most — from age 20 to 24. The plan pays 5%, 10%, 15%, or 20% of the Sum Assured annually between age 20 and 24 (you choose the proportion), with the remaining amount paid at maturity at age 25. This structured payout covers college years perfectly, ensuring your child completes their education without financial stress. The plan also includes a premium waiver if the parent/policyholder passes away during the term."
          },
          {
            name: "Amritbaal",
            slug: "lic-amritbaal",
            description: "A specialized child plan offering guaranteed additions and high returns to secure the ambitious dreams of the next generation.",
            whyChoose: "Amritbaal is one of LIC's most high-growth offerings for children. It features robust guaranteed additions that ensure your child's corpus grows significantly over time. Designed for the long term, it provides the substantial financial backing needed for premium higher education or starting a business later in life. It's the ultimate gift of financial security for a young child."
          },

          // TERM PLANS
          {
            name: "LIC's Saral Jeevan Bima",
            slug: "lic-saral-jeevan-bima",
            description: "A standard, simple, IRDAI-mandated term insurance plan with uniform coverage terms across all insurers.",
            whyChoose: "LIC's Saral Jeevan Bima is the simplest possible term insurance policy — standardised by the IRDAI so all insurers offer identical terms, making comparison easy and decision-making straightforward. It is especially suited for first-time insurance buyers, rural customers, and those with limited insurance literacy. The plan offers life cover from ₹5 lakh to ₹25 lakh with no complex conditions or exclusions beyond the standard waiting period for accidents. If you want a basic, no-frills life cover from LIC's trusted brand, this is the place to start."
          },
          {
            name: "LIC's Yuva Term",
            slug: "lic-yuva-term",
            description: "LIC's pure term plan exclusively for young individuals, offering high coverage at very competitive premiums.",
            whyChoose: "Yuva Term is LIC's answer for young adults who want to get a strong life insurance foundation early. Younger entry age means significantly lower premiums locked in for the entire term, making this one of the most cost-efficient ways to secure a large life cover. With flexible Sum Assured options and premium payment modes, Yuva Term is the ideal first life insurance policy for anyone in their 20s or early 30s who wants to protect their family's future affordably."
          },
          {
            name: "LIC's Yuva Credit Life",
            slug: "lic-yuva-credit-life",
            description: "A pure term insurance plan for young borrowers to protect their families from outstanding loan liabilities.",
            whyChoose: "LIC's Yuva Credit Life is designed for young individuals (18–40 years) who have taken loans early in their career. It provides life cover equivalent to the outstanding loan amount, protecting your family from inheriting your financial liabilities. With preferential rates for younger applicants, this is a smart, affordable add-on for any young professional managing a home loan, personal loan, or education loan. It provides peace of mind without straining your monthly budget."
          },
          {
            name: "Bima Kavach",
            slug: "lic-bima-kavach",
            description: "A comprehensive term insurance offering 'shield-like' protection with highly affordable premiums for standard risks.",
            whyChoose: "Bima Kavach is built for individuals who prioritize high death benefit over everything else. It acts as a primary financial shield, ensuring that in your absence, your family's standard of living and future goals remain protected. It is an essential component of any responsible adult's financial portfolio."
          },
          {
            name: "LIC's New Jeevan Amar",
            slug: "lic-new-jeevan-amar",
            description: "Non-linked, non-participating, individual, pure risk premium life insurance plan offering high Sum Assured at low cost.",
            whyChoose: "LIC's New Jeevan Amar is a pure term insurance plan — the most cost-effective way to buy a large life cover. There is no savings component, which means premiums are extremely affordable, allowing you to secure a very high Sum Assured for your family at a fraction of the cost of an endowment plan. This plan is the right choice for breadwinners who want to ensure their family's financial independence in case of an unfortunate event. With options for level or increasing sum assured, it adapts to your growing responsibilities."
          },
          {
            name: "LIC's New Tech-Term",
            slug: "lic-new-tech-term",
            description: "A digitally-purchased pure-term insurance plan with competitive rates and a wide Sum Assured range.",
            whyChoose: "LIC's New Tech-Term is an online pure-term plan that bridges the gap between LIC's trusted claim settlement and the efficiency of digital insurance. You get the same sovereign-backed reliability with a simplified online process and lower premiums compared to offline term plans. The Sum Assured range is wide — from ₹5 lakh upward — ensuring you can customize coverage to your exact income replacement needs. It is plain, transparent, and powerful."
          },
          {
            name: "LIC's Digi Term",
            slug: "lic-digi-term",
            description: "Online-only, non-linked pure term insurance plan from LIC with affordable premiums and flexible coverage options.",
            whyChoose: "LIC's Digi Term is specifically designed for the digital-savvy customer who prefers to buy insurance online. As an exclusively online plan, it offers lower premiums than regular policy channels while providing the same level of trust and claim reliability LIC is known for. You can choose your Sum Assured, premium payment term, and benefit payout option (lump sum or regular income) entirely online. It is a practical option for urban professionals who want maximum coverage at minimum cost."
          },
          {
            name: "LIC's Digi Credit Life",
            slug: "lic-digi-credit-life",
            description: "Online pure term insurance plan for loan borrowers, ensuring your outstanding loans are covered in case of death.",
            whyChoose: "LIC's Digi Credit Life is a decreasing-term insurance plan tailored for individuals with outstanding loans — home loans, car loans, or personal loans. The Sum Assured reduces in line with your diminishing loan balance, ensuring your family is never burdened with repaying debt in case of your untimely demise. Premium prices are extremely competitive and the entire process is online. If you have recently taken a significant loan, pairing it with Digi Credit Life is a financially responsible decision."
          },

          // PENSION PLANS
          {
            name: "LIC's New Jeevan Shanti",
            slug: "lic-new-jeevan-shanti",
            description: "Non-linked, non-participating, individual, single premium, deferred annuity plan for guaranteed future pension.",
            whyChoose: "LIC's New Jeevan Shanti lets you lock in a guaranteed pension payout rate today, with the pension starting at a future date you choose. Pay once, and from your chosen vesting date you receive a guaranteed monthly/annual pension for life — regardless of how much interest rates change in the future. This is particularly valuable in a falling interest-rate environment where traditional FDs cannot guarantee future rates. It is the anchor product for retirement planning among BrightLife's clients."
          },
          {
            name: "Saral Pension",
            slug: "lic-saral-pension",
            description: "A standardized immediate annuity plan offering transparent lifetime income for you and your spouse.",
            whyChoose: "Saral Pension is the gold standard for simple retirement income. As an immediate annuity, it starts paying you as soon as you invest. Its standardized terms mean you get exactly what you expect: a reliable, lifelong income stream that allows you to enjoy your golden years with absolute financial peace of mind. It's the ideal choice for those migrating from a career to a secure retirement."
          },
          {
            name: "LIC's Jeevan Akshay - VII",
            slug: "lic-jeevan-akshay-vii",
            description: "Non-linked, non-participating, individual immediate annuity plan — pay once and get pension payments starting immediately.",
            whyChoose: "Jeevan Akshay VII is LIC's flagship immediate annuity plan — perfect for retirees or anyone who wants to convert a lump sum into a regular, guaranteed income stream that begins immediately. With 10 different annuity options (life only, joint life, with return of purchase price, etc.), you can fully customise how the pension is paid and what happens to the residual amount. It eliminates longevity risk — the fear of outliving your savings. Once invested, regardless of how long you live, LIC guarantees your pension."
          },
          {
            name: "Smart Pension",
            slug: "lic-smart-pension",
            description: "A modern pension planning tool that allows you to build a substantial retirement kitty with flexibility and market-aligned growth.",
            whyChoose: "Smart Pension is designed for the proactive retiree. It offers the ability to contribute regularly towards your retirement while benefiting from LIC's expert fund management. It focuses on maximizing the final corpus, ensuring that when you do decide to retire, you have a substantial 'Smart' fund to support your lifestyle without compromise."
          },

          // ULIP PLANS
          {
            name: "Endowment Plus",
            slug: "lic-endowment-plus",
            description: "A unit-linked plan that gives you the dual benefit of life cover and market-linked returns in a discipline endowment format.",
            whyChoose: "Endowment Plus is perfect for investors who want to participate in the equity or debt markets while maintaining a safety net of life insurance. It bridges the gap between traditional savings and aggressive investing, offering LIC's reliable management with the potential for inflation-beating returns over the long term."
          },
          {
            name: "LIC's Nivesh Plus",
            slug: "lic-nivesh-plus",
            description: "Unit Linked, single premium, individual life insurance plan — invest once and let your money grow market-linked.",
            whyChoose: "LIC's Nivesh Plus is a single premium ULIP — ideal for investors with a lump sum to deploy. You pay once and your money is invested across LIC's fund options (debt, equity, or balanced) based on your risk appetite. The policy provides life cover throughout the term and the fund value grows based on market performance. Suitable for investors who have received a bonus, matured an FD, or received a windfall and want to put it into a long-term, market-linked instrument with a life cover."
          },
          {
            name: "LIC's SIIP",
            slug: "lic-siip",
            description: "Unit Linked, regular premium, individual life insurance plan offering market-linked growth with life protection.",
            whyChoose: "LIC's SIIP (Systematic Investment Insurance Plan) is a ULIP that combines life insurance with market-linked investment — similar to investing in mutual funds, but with an inbuilt life cover. You invest regularly (like an SIP) across LIC's internally managed funds, with the flexibility to switch between funds as market conditions change. SIIP is ideal for investors who want equity and debt market participation within the safety net of a life insurance policy, especially over a long investment horizon of 10+ years."
          },
          {
            name: "LIC's New Pension Plus",
            slug: "lic-new-pension-plus",
            description: "Unit Linked, non-participating, individual pension plan to accumulate a retirement corpus through market-linked investment.",
            whyChoose: "LIC's New Pension Plus is a ULIP-based retirement plan that lets you accumulate a pension corpus by investing in market-linked funds. Unlike traditional endowment-based pension plans, New Pension Plus gives you the potential for higher long-term returns through equity participation. Upon retirement, the accumulated fund value can be used to buy a regular annuity for life income. If you are a working professional still years away from retirement, this plan's long investment horizon allows your corpus to grow significantly."
          },
          {
            name: "LIC's Index Plus",
            slug: "lic-index-plus",
            description: "Unit Linked, regular premium plan where the fund performance is benchmarked to leading market indices.",
            whyChoose: "LIC's Index Plus is a ULIP that tracks leading market indices (like the Nifty 50), giving you transparent, passive market returns without active fund management risk. It is perfect for financially aware investors who believe in index-based investing and want to combine it with life insurance. Lower fund management charges compared to actively managed ULIPs make it cost-effective over the long term. Index Plus is the smart choice for someone who wants LIC's stability with market index growth."
          },
          {
            name: "Protection Plus",
            slug: "lic-protection-plus",
            description: "A premium ULIP focused on providing higher life cover alongside specialized market investment options for HNI clients.",
            whyChoose: "Protection Plus is designed for clients who need substantial insurance coverage along with the benefits of unit-linked investing. It allows you to protect your family's massive financial future while simultaneously growing your wealth through a curated selection of market funds. It is the sophisticated choice for wealth preservation and growth."
          },

          // MICRO INSURANCE
          {
            name: "Micro Bachat",
            slug: "lic-micro-bachat",
            description: "A small-ticket insurance plan designed for the common man, offering savings and protection with minimal documentation.",
            whyChoose: "Micro Bachat brings LIC's safety to every doorstep. With small premium amounts and easy accessibility, it ensures that even small-scale savings are converted into meaningful life protection. It is a cornerstone of financial inclusion, providing dignity and security to millions of families who deserve a reliable financial anchor."
          }
        ]
      }
    ]
  },
  {
    name: "Health Insurance",
    slug: "health-insurance",
    description: "Secure your health and your savings with comprehensive health insurance plans from Galaxy Health Insurance — designed for today's rising medical costs.",
    whyChoose: "Medical emergencies are unpredictable, but their financial impact doesn't have to be. At BrightLife Insurance, we offer a carefully selected range of Health Insurance plans from Galaxy Health Insurance — one of India's most innovative and customer-friendly health insurers. Whether you are an individual, a family, or someone seeking to enhance an existing policy, we help you find a plan that covers hospitalisation, pre-existing diseases, maternity, modern treatments, and more. Our goal is to make sure you focus on recovery — not on bills.",
    keyBenefits: [
      "Cashless Hospitalisation Nationwide",
      "No-Claim Bonus up to 500%",
      "Pre-Existing Disease Coverage",
      "Maternity & Newborn Protection"
    ],
    providers: [
      {
        name: "Galaxy Health Insurance",
        slug: "galaxy-health",
        description: "Galaxy Health Insurance is a new-age health insurer known for innovative policies, transparent terms, generous Sum Insured options, and customer-first claim processes.",
        whyChoose: "Galaxy Health Insurance stands out in the crowded health insurance market with its innovative product design, generous Sum Insured options (up to ₹2 Crore), and customer-centric features like the 'Premium Promise' — a guarantee that your health insurance premium will not increase just because you made a claim. Galaxy's wide hospital network ensures cashless access across major cities and towns. BrightLife Insurance recommends Galaxy Health for families and individuals who want robust, long-term health protection with transparent terms and no unpleasant surprises at claim time.",
        plans: [
          {
            name: "Galaxy Promise (Premium Plan)",
            slug: "galaxy-promise-premium",
            description: "An advanced health plan offering comprehensive coverage with the signature 'Premium Promise' to safeguard you against future rate hikes.",
            whyChoose: "The Galaxy Promise Premium Plan is designed for families who want a solid balance between extensive coverage and affordability. It includes our unique 'Premium Promise'—guaranteeing that your base premium won't increase just because you made a claim. With sum insured options up to ₹1 Crore and restoration benefits, it ensures your family is protected against even the most significant medical emergencies without the stress of rising costs.",
            features: [
              "Up to ₹1 Crore Sum Insured",
              "Premium Promise (Rate lock guarantee)",
              "Unlimited restoration of sum insured",
              "Comprehensive maternity and newborn coverage",
              "No Claim Bonus up to 500%"
            ]
          },
          {
            name: "Galaxy Promise (Signature Plan)",
            slug: "galaxy-promise-signature",
            description: "A premium tier of the Promise series offering higher sub-limits and enhanced comfort during hospitalization.",
            whyChoose: "The Signature Plan is for those who prioritize comfort and higher coverage limits. It offers all the benefits of the Premium plan but with enhanced room rent limits and pre/post-hospitalization windows. It's the perfect middle ground for families who want superior healthcare access and the long-term security of LIC-backed Galaxy reliability.",
            features: [
              "Enhanced room rent and ICU limits",
              "Extended pre & post hospitalization coverage",
              "Air ambulance and organ donor cover",
              "Premium Promise rate protection",
              "Annual health check-ups for all members"
            ]
          },
          {
            name: "Galaxy Promise (Elite Plan)",
            slug: "galaxy-promise-elite",
            description: "The top-tier Promise plan offering luxury healthcare access, global coverage options, and maximum medical limits.",
            whyChoose: "Galaxy Promise Elite is the ultimate health protection package. Designed for high-net-worth families, it offers the highest sum insured options, private suite room coverage, and global medical second opinions. With the Elite plan, you don't just get insurance—you get a VIP pass to India's best medical facilities with zero compromises and absolute premium protection.",
            features: [
              "Maximum Sum Insured up to ₹2 Crore",
              "Global medical second opinion services",
              "Private suite room eligibility",
              "Highest maternity and OP benefit limits",
              "Premium Promise (Absolute rate lock)"
            ]
          },
          {
            name: "Galaxy Marvel (Neo Plan)",
            slug: "galaxy-marvel-neo",
            description: "A futuristic health plan focusing on rapid coverage for modern treatments and very high Sum Insured with minimal waiting periods.",
            whyChoose: "Galaxy Marvel Neo is built for the modern individual. It focuses on technology-driven healthcare, covering robotic surgeries, advanced diagnostics, and stem cell therapy with minimal waiting periods. If you value speed and access to the latest medical innovations, the Neo Plan is your perfect partner. It offers an enhanced Multiplier Cumulative Bonus that can grow your coverage by up to 100% in a single claim-free year.",
            features: [
              "High Sum Insured up to ₹2 Crores",
              "Robotic and modern treatments covered",
              "Multiplier Cumulative Bonus up to 100% per year",
              "Minimal waiting period for pre-existing diseases",
              "Automatic restoration mechanism"
            ]
          },
          {
            name: "Galaxy Guardian",
            slug: "galaxy-guardian",
            description: "Accessible health coverage plan suitable for individuals and families needing strong core benefits at an affordable premium.",
            whyChoose: "Galaxy Guardian is the ideal entry-level health insurance plan for individuals and small families who are buying health insurance for the first time or are on a tighter budget. It covers the essentials — in-patient hospitalisation, daycare procedures, AYUSH treatments, and cashless facility at a wide hospital network — without unnecessary add-ons that inflate premiums. It is a solid, straightforward start to health insurance coverage that you can enhance or top up as your needs grow.",
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
            description: "Flexible add-on coverage to significantly boost your existing or employer-provided health insurance at a low additional premium.",
            whyChoose: "Galaxy Top-up is not a standalone policy — it is a powerful strategy. If you already have a corporate health cover or a basic individual policy, Galaxy Top-up extends your coverage at a fraction of the cost of buying a new high Sum Insured plan. Once your existing coverage is exhausted (the deductible threshold), Galaxy Top-up kicks in and covers the remaining hospitalisation expenses up to ₹2 Crore. It is the smart, cost-effective way to dramatically increase your health coverage without duplicating benefits or paying double premiums.",
            features: [
              "₹5 Lakhs to ₹2 Crores Sum Insured",
              "Flexible deductible options",
              "Customizable riders available",
              "Wide network of cashless hospitals",
              "Simple claim procedure"
            ]
          },
          {
            name: "Galaxy Personal Accidental Shield",
            slug: "galaxy-personal-accidental-shield",
            description: "A specialized individual policy providing robust financial protection against accidental death, disability, and income loss.",
            whyChoose: "Accidents can happen in a split second, but their financial impact can last a lifetime. The Galaxy Personal Accidental Shield provides a massive lump sum payout in case of accidental death or permanent disability, ensuring your family's lifestyle isn't destroyed. It also includes daily cash benefits for hospitalization and education grants for children, making it an essential safety net for every primary earner.",
            features: [
              "High accidental death benefit",
              "Permanent and partial disability coverage",
              "Temporary Total Disablement (Weekly Income)",
              "Children education grant benefit",
              "Worldwide coverage (24/7)"
            ]
          },
          {
            name: "Galaxy Personal Accidental Shield Family Floater",
            slug: "galaxy-accidental-shield-floater",
            description: "A comprehensive family protection plan covering all members against accidental risks under a single affordable policy.",
            whyChoose: "Protect your entire family in one go with the Family Floater version of our Accidental Shield. Whether you're on a family vacation or going about daily errands, this plan ensures that every member is covered against accidental injuries and disability. It's the most cost-effective way to extend premium accidental protection to your spouse and children, ensuring nobody is left vulnerable.",
            features: [
              "Single policy covering multiple family members",
              "Lump sum benefits for death and disability",
              "Hospitalization expenses for accidental injuries",
              "Ambulance and repatriation benefits",
              "High sum insured options for the whole family"
            ]
          },
          {
            name: "Arogya Sanjeevani Policy",
            slug: "galaxy-arogya-sanjeevani",
            description: "Standard, affordable IRDAI-mandated health policy with essential hospitalization coverage and uniform terms across all insurers.",
            whyChoose: "The Arogya Sanjeevani Policy is the IRDAI's standardised basic health insurance plan — designed to be simple, clear, and universally accessible. Since every insurer offers the same terms, you can easily compare and choose based on price and service quality. It covers hospitalisation, pre- and post-hospitalisation expenses, daycare procedures, and AYUSH treatments up to the allowed limits. It is a perfect starter policy for those who are new to health insurance and want reliable, no-confusion coverage at the most affordable premium available.",
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
    description: "Protect your vehicles and personal assets with reliable General Insurance plans — from two-wheelers to commercial fleets, we have you covered.",
    whyChoose: "Your vehicle is more than just a mode of transport — it is an asset, a daily necessity, and sometimes a business tool. At BrightLife Insurance, we help you choose the right motor insurance plan that covers you against accidents, theft, natural disasters, and third-party liabilities. Whether you ride a bike, drive a family car, or run a commercial fleet, our motor insurance offerings ensure you are legally compliant and financially protected. With expert guidance from S. Sonai, we help you maximise your coverage while minimising your premium.",
    keyBenefits: [
      "Comprehensive Own-Damage Cover",
      "Third-Party Liability Protection",
      "Cashless Repairs at Network Garages",
      "24/7 Roadside Assistance"
    ],
    providers: [
      {
        name: "Asset & Property Protection Solutions",
        slug: "general-insurance-solutions",
        description: "Comprehensive protection for your most valuable assets — from vehicles and property to personal liabilities — partnering with leading general insurers for total peace of mind.",
        whyChoose: "BrightLife Insurance partners with India's top general insurance companies to provide a holistic '360-degree' protection shield for your assets. Whether it's the car you drive, the home you live in, or the commercial fleet that supports your business, we ensure you have elite-level coverage at the most competitive premiums. Our expertise goes beyond just selling policies — we provide deep technical analysis of terms, dedicated claims assistance, and 24/7 support to ensure that when an accident happens, your financial stability remains untouched.",
        plans: [
          {
            name: "Comprehensive Home Insurance",
            slug: "home-insurance",
            description: "Shield your dream home and its contents against fire, theft, natural disasters, and accidental damage with our all-in-one housing insurance.",
            whyChoose: "Your home is more than just four walls—it's likely your biggest life investment. Our Comprehensive Home Insurance covers the structure of your house and all your precious belongings (furniture, electronics, jewelry) against unexpected events like fire, floods, earthquakes, and burglary. We even provide alternate accommodation expenses if your home becomes temporarily uninhabitable. With BrightLife, you don't just insure a building; you protect your peace of mind and the sanctity of your living space.",
            features: [
              "Protection against fire and allied perils",
              "Burglary and theft cover for home contents",
              "Natural calamity cover (Earthquake, Floods, etc.)",
              "Electrical & mechanical breakdown cover for appliances",
              "Rent for alternative accommodation benefit"
            ]
          },
          {
            name: "Two-Wheeler Insurance",
            slug: "two-wheeler-insurance",
            description: "Coverage for bikes and scooters against accidents, theft, natural disasters, and third-party liabilities.",
            whyChoose: "Two-wheeler insurance is legally mandatory in India, but a comprehensive policy goes far beyond the legal minimum. Our Two-Wheeler Insurance covers your bike or scooter against own-damage from accidents, theft, fire, and natural calamities — not just third-party liabilities. Add-ons like Zero Depreciation ensure that in case of a claim, you receive the full replacement cost of parts without depreciation deductions. A No Claim Bonus (NCB) protects and rewards your safe riding record, reducing your renewal premium every consecutive claim-free year.",
            features: [
              "Comprehensive and Third-Party liability cover",
              "Personal Accident Cover for owner-driver",
              "Cashless repairs across network garages",
              "No Claim Bonus (NCB) retention",
              "Optional Zero Depreciation add-on"
            ]
          },
          {
            name: "Private Car Insurance",
            slug: "private-car-insurance",
            description: "Extensive protection for your personal car against accidents, theft, natural disasters, and third-party claims.",
            whyChoose: "Your car is likely one of your biggest personal assets — and it deserves comprehensive protection. Our Private Car Insurance covers your vehicle for own-damage (accidents, theft, fire, floods) and third-party liabilities in a single integrated policy. Cashless claim settlement at a vast network of preferred garages means minimal hassle when you need to make a claim. Essential add-ons like Engine Protection, Return to Invoice (RTI), and Zero Depreciation cover are available to ensure you are never left covering a large out-of-pocket expense after an incident.",
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
            description: "Purpose-built insurance for trucks, taxis, auto-rickshaws, and goods carriers — protecting your business vehicle and livelihood.",
            whyChoose: "A commercial vehicle is your business on wheels. When it is off the road — whether due to an accident, breakdown, or legal dispute — your income stops. Our Commercial Vehicle Insurance ensures your business vehicle is covered for damage from accidents, natural calamities, theft, and fire, along with third-party liabilities (both property damage and bodily injury). Legal liability coverage for paid drivers protects your business from employee-related claims. Fleet insurance discounts are available for businesses operating multiple vehicles, making large-scale operations more affordable to protect.",
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
    description: "Turn your dream of homeownership into reality with flexible, competitive home loan solutions from India's leading banks and NBFCs.",
    whyChoose: "Buying a home is the single biggest financial decision most people make in their lifetime. At BrightLife Insurance, we make the home loan process simple and transparent — connecting you with the right lending partner from our network of leading banks and NBFCs at competitive interest rates. Whether you are buying your first home, constructing on a plot, renovating an existing property, or purchasing land for future construction, we guide you from application to disbursement. S. Sonai's expertise ensures you get the best interest rate, maximum eligible loan amount, and minimum documentation hassle.",
    keyBenefits: [
      "Loans up to 90% of Property Value",
      "Tenures up to 30 Years",
      "Competitive Interest Rates",
      "Quick Processing & Minimal Docs"
    ],
    providers: [
      {
        name: "Partner Banks & NBFCs",
        slug: "partner-banks-nbfcs",
        description: "BrightLife Insurance works with multiple leading banks and housing finance companies to offer you the most competitive home loan rates, maximum loan eligibility, and streamlined processing.",
        whyChoose: "Rather than going directly to a single bank, working with BrightLife Insurance gives you access to multiple lenders simultaneously — allowing us to compare interest rates, processing fees, and terms to find the best deal for your specific profile. Our relationships with partner banks and NBFCs mean faster approvals, reduced documentation, and often better interest rate negotiations than you could achieve independently. Whether your requirement is a simple home purchase loan or a complex construction finance arrangement, we have the expertise and lender relationships to make it happen.",
        plans: [
          {
            name: "New Home Purchase Loan",
            slug: "home-purchase-loan",
            description: "Financial assistance to purchase a new flat, apartment, villa, or independent bungalow from a developer or in a resale transaction.",
            whyChoose: "Buying a new home requires significant capital — and a Home Purchase Loan bridges that gap efficiently. We help you borrow up to 90% of the property's registered value, with flexible repayment tenures of up to 30 years to keep your EMI manageable. For eligible buyers, PMAY (Pradhan Mantri Awas Yojana) subsidy benefits can reduce your effective interest rate further. Our team handles all the legal and technical due diligence coordination, making your property purchase smooth and stress-free from sanction to registration.",
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
            description: "Loans designed to finance the construction of a house on your own plot, with stage-wise disbursement aligned to construction progress.",
            whyChoose: "If you own a plot and want to build your dream home, a Construction Loan provides the funds in stages — disbursed as your construction progresses — so you only pay interest on the amount drawn rather than the total sanctioned loan. This stage-wise disbursement structure is both cost-efficient and practical. Our partner lenders offer tax benefits under Sections 80C (principal repayment) and 24(b) (interest), helping you maximise your tax savings throughout the construction period. Expert property valuation assistance is part of our service.",
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
            description: "Loans to upgrade, repair, extend, or refurbish an existing property — from minor repairs to full home makeovers.",
            whyChoose: "Your existing home may need a fresh coat of paint, a new bathroom, an additional room, or a complete renovation — and a Home Renovation Loan provides the funds without forcing you to liquidate savings or investments. Approval is typically quick (since the property is already registered and valued), and loan amounts are tailored to the scope of your renovation. With no pre-payment penalties from most partner lenders, you can close the loan early as your finances improve. Existing home loan customers can also benefit from convenient top-up facility on their current loan.",
            features: [
              "Quick approval for urgent repairs",
              "Loan amounts tailored to estimated renovation costs",
              "No hidden charges or pre-payment penalties",
              "Simple and transparent terms",
              "Top-up options available for existing home loan customers"
            ]
          },
          {
            name: "Plot Purchase Loan",
            slug: "plot-purchase-loan",
            description: "Financing to purchase a vacant residential plot for future home construction within approved layouts.",
            whyChoose: "Land is among the best long-term investments, and a Plot Purchase Loan makes it accessible without needing the full amount upfront. Our partner banks offer competitive loans for plots within municipal and approved RERA layouts. Special interest rate concessions are available for women co-applicants — making this an excellent option for joint property purchases. Unlike a regular home loan, plot loans are typically available for plots intended for residential construction, and we guide you through the eligibility criteria, legal verifications, and documentation to make the process seamless.",
            features: [
              "Funding available for plots within municipal limits",
              "Competitive maximum loan amounts",
              "Flexible repayment options to suit your cash flow",
              "Transparent legal and technical valuation processes",
              "Special rates for women co-applicants"
            ]
          },
          {
            name: "Mortgage Loan (LAP)",
            slug: "mortgage-loan-lap",
            description: "Unlock the hidden value of your property with a Loan Against Property (LAP) for business expansion, weddings, or any major financial need.",
            whyChoose: "A Mortgage Loan (or LAP) is the smartest way to raise large funds at much lower interest rates than personal loans. By using your residential or commercial property as collateral, you can access substantial capital for business growth, children's higher education, or unplanned medical needs. At BrightLife, we ensure you get the highest LTV (Loan to Value) and the most flexible repayment tenures, allowing you to meet your big life goals without selling your precious assets.",
            features: [
              "Lower interest rates than personal or business loans",
              "High loan amounts against residential/commercial property",
              "Repayment tenure up to 15 years",
              "Minimal documentation for self-employed & salaried",
              "Freedom to use funds for any legitimate purpose"
            ]
          }
        ]
      }
    ]
  }
];
