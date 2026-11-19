/*
  WiT Hub data file.
  To update the hub, edit this file only. Each entry needs:
    cat      : "opensource" | "internship" | "hackathon" | "conference"
    title, org, blurb
    deadline : "YYYY-MM-DD" when there is a confirmed deadline, otherwise null
    opens    : "YYYY-MM-DD" (optional) when applications or the challenge open later
    expected : true when dates are not announced yet and are estimated from last year
    rolling  : true when applications are reviewed as they come in
    when     : short human text for the key dates
    apply    : link to apply or read more
    source   : link where the dates were checked
  Dates were last checked on the date in HUB.checked.
*/
window.HUB = {
  checked: "2026-11-17",

  items: [
    /* ---------------- HACKATHONS (Zindi) ---------------- */
    {
      cat: "hackathon", featured: true,
      title: "University Hackathon by CMU: Climate Risk and Health Prediction",
      org: "Zindi x CMU-Africa Research Club x CMU-Africa Data Science Club",
      blurb: "Build a model that predicts whether a recorded death is climate-sensitive, using health, demographic, geographic and climate data. Beginner friendly and run on our own campus community.",
      opens: "2026-11-20", deadline: "2026-11-27",
      when: "Runs 20 Nov to 27 Nov 2026",
      prize: "500 Zindi points", tags: ["Beginner friendly", "Classification", "Geospatial"],
      apply: "https://zindi.world/competitions/climate-risk-health-prediction-cmu-hackathon",
      source: "https://zindi.world/competitions/climate-risk-health-prediction-cmu-hackathon"
    },
    {
      cat: "hackathon",
      title: "GenAI for Good Challenge: Cities Edition (Phase 1)",
      org: "IEEE Humanitarian Technologies x UNDP, on Zindi",
      blurb: "Phase 1 technical assessment for a generative AI challenge focused on city-scale problems.",
      deadline: "2026-12-13",
      when: "Closes 13 Dec 2026",
      prize: "$40,000", tags: ["GenAI", "Social impact"],
      apply: "https://zindi.world/competitions/GenAI-for-Good-Challenge",
      source: "https://zindi.world/competitions/GenAI-for-Good-Challenge"
    },
    {
      cat: "hackathon",
      title: "Underwater Vessel Noise Challenge",
      org: "French Embassy in South Africa, on Zindi",
      blurb: "Use acoustic data to help marine researchers understand ship noise in the ocean.",
      deadline: "2026-12-13",
      when: "Closes 13 Dec 2026",
      prize: "$5,000", tags: ["Audio", "Climate"],
      apply: "https://zindi.world/competitions/french-embassy-underwater-vessel-noise-challenge",
      source: "https://zindi.world/competitions/french-embassy-underwater-vessel-noise-challenge"
    },
    {
      cat: "hackathon",
      title: "Dis-Chem Product Data Enrichment Challenge",
      org: "Dis-Chem, on Zindi",
      blurb: "Build a system that cleans up and enriches retail product data.",
      deadline: "2026-12-14",
      when: "Closes 14 Dec 2026",
      prize: "$5,000", tags: ["NLP", "Retail"],
      apply: "https://zindi.world/competitions/dischem-product-data-entichment-challenge",
      source: "https://zindi.world/competitions/dischem-product-data-entichment-challenge"
    },
    {
      cat: "hackathon",
      title: "TelcoRetrieve Challenge: Unlocking Telco Knowledge",
      org: "ITU, on Zindi",
      blurb: "Build a retrieval system over telecom standards and documents. Enrolment closes a week before the end.",
      deadline: "2027-01-14",
      when: "Enrol by 7 Jan 2027, closes 14 Jan 2027",
      prize: "€25,000", tags: ["RAG", "LLMs"],
      apply: "https://zindi.world/competitions/telcoretrieve-challenge-unlocking-telco-knowledge",
      source: "https://zindi.world/competitions/telcoretrieve-challenge-unlocking-telco-knowledge"
    },
    {
      cat: "hackathon",
      title: "AMD Global Physical AI Behavioral Safety Challenge",
      org: "AMD, on Zindi",
      blurb: "Predict and flag unsafe behaviour in physical AI and robotics settings.",
      deadline: "2027-02-01",
      when: "Closes 1 Feb 2027",
      prize: "$10,000", tags: ["AI safety", "Robotics"],
      apply: "https://zindi.world/competitions/amd-global-physical-ai-safety-challenge",
      source: "https://zindi.world/competitions/amd-global-physical-ai-safety-challenge"
    },
    {
      cat: "hackathon",
      title: "AI Agents for RAN Challenge",
      org: "ITU, on Zindi",
      blurb: "Build AI agents that help manage radio access networks.",
      opens: "2026-11-27", deadline: "2027-02-05",
      when: "Opens 27 Nov 2026, closes 5 Feb 2027",
      prize: "€20,000", tags: ["Agents", "Telecom"],
      apply: "https://zindi.world/competitions/ai-agents-for-ran-challenge",
      source: "https://zindi.world/competitions/ai-agents-for-ran-challenge"
    },
    {
      cat: "hackathon",
      title: "Green Rising Methane Innovation Challenge",
      org: "Green Rising, on Zindi",
      blurb: "Forecast methane emissions to support climate action.",
      opens: "2026-12-11", deadline: "2027-02-14",
      when: "Opens 11 Dec 2026, closes 14 Feb 2027",
      prize: "$10,000", tags: ["Climate", "Forecasting"],
      apply: "https://zindi.world/competitions/green-rising-methane-innovation-challenge",
      source: "https://zindi.world/competitions/green-rising-methane-innovation-challenge"
    },

    /* ---------------- OPEN SOURCE ---------------- */
    {
      cat: "opensource",
      title: "MLH Fellowship, Spring 2027 batch",
      org: "Major League Hacking",
      blurb: "A remote, paid fellowship where you contribute to real open source projects with a pod and a mentor. Spring batch runs 25 Jan to 16 Apr 2027.",
      deadline: "2027-01-04",
      when: "Applications close 4 Jan 2027",
      tags: ["Remote", "Paid", "Software engineering"],
      apply: "https://fellowship.mlh.io",
      source: "https://fellowship.mlh.io"
    },
    {
      cat: "opensource",
      title: "Outreachy, May 2027 cohort",
      org: "Outreachy",
      blurb: "Paid, remote open source internships for people underrepresented in tech. The December 2026 round has closed; initial applications for the May round usually open in early February.",
      deadline: null, opens: "2027-02-05", expected: true,
      when: "Expected early Feb 2027 (2026 round: 6 to 13 Feb)",
      tags: ["Remote", "Paid", "Underrepresented in tech"],
      apply: "https://www.outreachy.org",
      source: "https://www.outreachy.org"
    },
    {
      cat: "opensource",
      title: "LFX Mentorship, Term 1 (Mar to May 2027)",
      org: "Linux Foundation (CNCF and other foundations)",
      blurb: "Mentored projects across cloud native, Linux kernel and more. Projects are posted in January and mentee applications run for about two weeks.",
      deadline: null, opens: "2027-01-26", expected: true,
      when: "Expected late Jan to mid Feb 2027 (2026: 26 Jan to 10 Feb)",
      tags: ["Remote", "Paid", "Cloud native"],
      apply: "https://mentorship.lfx.linuxfoundation.org",
      source: "https://docs.linuxfoundation.org/lfx/mentorship/mentorship-program-timelines"
    },
    {
      cat: "opensource",
      title: "Google Summer of Code 2027",
      org: "Google",
      blurb: "Paid summer projects with open source organisations. The best time to start is now: pick an org, join their chat and make small contributions before applications open. Organisations are usually announced in February.",
      deadline: null, opens: "2027-03-15", expected: true,
      when: "Expected mid to late Mar 2027 (2026: 16 to 31 Mar)",
      tags: ["Paid", "Remote", "Start contributing now"],
      apply: "https://summerofcode.withgoogle.com",
      source: "https://developers.google.com/open-source/gsoc/timeline"
    },

    /* ---------------- INTERNSHIPS & FELLOWSHIPS ---------------- */
    {
      cat: "internship",
      title: "EDSAFE AI Fellowships 2027 (incl. Women in AI track)",
      org: "EDSAFE AI Alliance",
      blurb: "A 12-month fellowship with a dedicated Women in AI pathway. Open to global applicants. Fellows are announced in January 2027.",
      deadline: "2026-11-30",
      when: "Closes 30 Nov 2026, 10 PM EST",
      tags: ["Women in AI", "Global", "12 months"],
      apply: "https://www.edsafeai.org",
      source: "https://opportunitiesforyouth.org/2026/11/05/edsafe-ai-fellowships-2027-applications-open-worldwide-for-the-fully-funded-12-month-ai-in-education-leadership-programme/"
    },
    {
      cat: "internship",
      title: "Google Software Engineering Intern, Summer 2027",
      org: "Google",
      blurb: "BS and MS internship roles for summer 2027 are posted on Google Careers in several countries. Reviews are rolling and postings close once filled, so apply early.",
      deadline: null, rolling: true,
      when: "Open now, rolling",
      tags: ["Software engineering", "Paid", "Rolling"],
      apply: "https://www.google.com/about/careers/applications/jobs/results/?q=intern%202027",
      source: "https://www.extern.com/post/google-internship-guide"
    },
    {
      cat: "internship",
      title: "Google Student Researcher Program 2027",
      org: "Google and Google DeepMind",
      blurb: "Research roles for MS and PhD students on projects aligned with Google research priorities. Postings for the 2027 cycle are expected from late 2026 into early 2027.",
      deadline: null, rolling: true, expected: true,
      when: "Expected late 2026 to early 2027, rolling",
      tags: ["Research", "MS / PhD", "Rolling"],
      apply: "https://www.google.com/about/careers/applications/jobs/results/?q=student%20researcher",
      source: "https://www.extern.com/post/google-deepmind-internship-guide"
    },
    {
      cat: "internship",
      title: "Summer 2027 internship tracker",
      org: "Simplify",
      blurb: "A live, filterable list of summer 2027 internships across software, data, AI/ML, product and design. Useful for checking what opened this week.",
      deadline: null, rolling: true,
      when: "Updated continuously",
      tags: ["Tracker", "Many companies"],
      apply: "https://simplify.jobs/l/Top-Summer-Internships-2027",
      source: "https://simplify.jobs/l/Top-Summer-Internships-2027"
    },

    /* -------- SUMMER RESEARCH INTERNSHIPS (abroad) --------
       Most need you to still be a student during the internship. */
    {
      cat: "internship", checked: "2026-11-19",
      title: "Summer@EPFL 2027",
      org: "EPFL School of Computer and Communication Sciences, Switzerland",
      blurb: "A 2 to 3 month research internship in an EPFL lab for BSc and MSc students in computer science, data, communications and related fields. Comes with a monthly allowance of about CHF 1,800. You must still be a student during the internship.",
      deadline: "2026-11-29",
      when: "Closes 29 Nov 2026 · Internship between May and Sep 2027",
      tags: ["Summer research", "Switzerland", "Paid"],
      apply: "https://summer.epfl.ch",
      source: "https://scholarshipsforafricans.com/fr/bourses/summer-epfl-computer-and-communication-sciences"
    },
    {
      cat: "internship", checked: "2026-11-19",
      title: "ETH Zurich Student Summer Research Fellowship 2027",
      org: "ETH Zurich Department of Computer Science, Switzerland",
      blurb: "Two months of research in an ETH computer science lab, open to BS and MS students of all nationalities. Includes CHF 4,000, travel and visa costs, and arranged housing. No recommendation letters needed.",
      deadline: "2026-12-16",
      when: "Closes 16 Dec 2026, 1 PM CET · Runs 2 Jul to 27 Aug 2027",
      tags: ["Summer research", "Switzerland", "Fully funded"],
      apply: "https://inf.ethz.ch/studies/summer-research-fellowship.html",
      source: "https://fellowshipsguide.com/?p=7903"
    },
    {
      cat: "internship", checked: "2026-11-19",
      title: "CERN Summer Student Programme 2027 (incl. openlab)",
      org: "CERN, Geneva",
      blurb: "Summer projects at CERN for BSc and MSc students in physics, engineering and computer science, from member and non-member states. Pays about CHF 94 a day. CERN openlab, the computing track, has the same deadline. Students from non-member states usually stay for 8 weeks.",
      deadline: "2027-01-21",
      when: "Closes 21 Jan 2027, 23:59 Geneva time",
      tags: ["Summer research", "Switzerland", "Paid"],
      apply: "https://careers.cern",
      source: "https://opportunitiesfeed.com/?p=13614"
    },
    {
      cat: "internship", checked: "2026-11-19",
      title: "Aalto Science Institute International Summer Research Programme 2027",
      org: "Aalto University, Finland",
      blurb: "A paid 12-week research position between June and August, in computer science, engineering and the sciences. Projects are posted in mid December, and you pick the ones that fit you.",
      deadline: "2027-01-31", opens: "2027-01-07",
      when: "Opens 7 Jan 2027, closes 31 Jan 2027",
      tags: ["Summer research", "Finland", "Paid"],
      apply: "https://www.aalto.fi/en/aalto-science-institute-asci/aalto-science-institute-international-summer-research-programme",
      source: "https://www.aalto.fi/en/aalto-university-science-institute-asci/how-to-apply-for-the-asci-international-summer-research-programme"
    },
    {
      cat: "internship", checked: "2026-11-19",
      title: "KAUST Visiting Student Research Program (VSRP)",
      org: "KAUST, Saudi Arabia",
      blurb: "A 3 to 6 month research internship for 3rd-year BSc and MSc students in STEM. Comes with about $1,000 a month, housing and return airfare. Applications are open all year, so apply early to get the project you want.",
      deadline: null, rolling: true,
      when: "Open all year",
      tags: ["Research", "Saudi Arabia", "Fully funded"],
      apply: "https://vsrp.kaust.edu.sa/",
      source: "https://cemse.kaust.edu.sa/node/7003"
    },

    /* ---------------- CONFERENCES ---------------- */
    {
      cat: "conference",
      title: "NeurIPS 2026 and the WiML Workshop",
      org: "NeurIPS / Women in Machine Learning",
      blurb: "The main conference is in Sydney, with satellites in Atlanta and Paris. WiML, the Women in Machine Learning workshop, meets on 7 December. Submissions have closed; follow along online.",
      deadline: null, event: "2026-12-06",
      when: "Sydney, 6 to 12 Dec 2026 (WiML: 7 Dec)",
      tags: ["ML", "Women in ML"],
      apply: "https://neurips.cc",
      source: "https://sites.google.com/wimlworkshop.org/wimlworkshopneurips2026/"
    },
    {
      cat: "conference",
      title: "ACL 2027 (via ACL Rolling Review)",
      org: "Association for Computational Linguistics",
      blurb: "The flagship NLP conference, in Kyoto. Papers go through ACL Rolling Review first, then get committed to ACL.",
      deadline: "2027-01-04", event: "2027-08-17",
      when: "ARR deadline 4 Jan 2027 · Kyoto, 17 to 22 Aug 2027",
      tags: ["NLP", "Paper deadline"],
      apply: "https://2027.aclweb.org/calls/main/",
      source: "https://2027.aclweb.org/calls/main/"
    },
    {
      cat: "conference",
      title: "ICML 2027",
      org: "International Conference on Machine Learning",
      blurb: "Abstract registration is 14 Jan and the full paper is due 22 Jan 2027. New submission quotas apply for first-time authors, so read the rules early.",
      deadline: "2027-01-22", event: "2027-07-31",
      when: "Paper deadline 22 Jan 2027 · Rio de Janeiro, from 31 Jul 2027",
      tags: ["ML", "Paper deadline"],
      apply: "https://icml.cc/Conferences/2027",
      source: "https://icml.cc/Conferences/2027/ReciprocalReviewingAndSubmissionQuotas"
    },
    {
      cat: "conference",
      title: "PyCon Namibia 2027",
      org: "Python Namibia",
      blurb: "The 12th edition of Namibia's Python conference, with talks, workshops and open source sprints. Talk proposals have closed; tickets are open.",
      deadline: null, event: "2027-02-26",
      when: "Windhoek, 26 Feb to 4 Mar 2027",
      tags: ["Python", "Africa"],
      apply: "https://na.pycon.org/2027/",
      source: "https://na.pycon.org/2027/"
    },
    {
      cat: "conference",
      title: "AfricaNLP Workshop 2027",
      org: "AfricaNLP",
      blurb: "The workshop for NLP on African languages. The 2026 edition ran with EACL and its call for papers came out in late October. Watch for the 2027 call.",
      deadline: null, expected: true, opens: "2027-01-01",
      when: "Call expected soon (2026 deadline was mid December)",
      tags: ["NLP", "African languages"],
      apply: "https://sites.google.com/view/africanlp2026",
      source: "https://sites.google.com/view/africanlp2026"
    },
    {
      cat: "conference",
      title: "Deep Learning Indaba 2027",
      org: "Deep Learning Indaba",
      blurb: "Africa's biggest ML gathering. 2025 was in Kigali and 2026 in Lagos. The 2027 host and dates are not announced yet; calls for attendees usually open early in the year.",
      deadline: null, expected: true, opens: "2027-02-01",
      when: "Expected Aug 2027, host city TBA",
      tags: ["ML", "Africa", "Travel grants"],
      apply: "https://deeplearningindaba.com",
      source: "https://deeplearningindaba.com"
    },
    {
      cat: "conference",
      title: "PyCon Africa 2027",
      org: "PyCon Africa",
      blurb: "The 2026 edition ran 7 to 11 Oct in Kampala, with Opportunity Grants that closed on 1 June. Expect a similar timeline for 2027.",
      deadline: null, expected: true, opens: "2027-04-15",
      when: "Expected Oct 2027, grants usually close around June",
      tags: ["Python", "Africa", "Opportunity grants"],
      apply: "https://africa.pycon.org",
      source: "https://africa.pycon.org"
    }
  ],

  /* Sample semester calendar. "club" events are a SAMPLE of what WiT could run.
     "deadline" events are pulled from the items above automatically. */
  calendar: [
    { date: "2026-11-21", title: "WiT elections: vote!", kind: "club", real: true, note: "Saturday, 21 November" },
    { date: "2027-01-13", title: "Semester calendar published + welcome hangout", kind: "club", note: "Week 1" },
    { date: "2027-01-04", title: "The Opportunity Drop: January edition", kind: "club" },
    { date: "2027-01-27", title: "Beyond the Classroom workshop #1: AI/ML", kind: "club" },
    { date: "2027-01-29", title: "Suggestion box review", kind: "club" },
    { date: "2027-02-01", title: "The Opportunity Drop: February edition", kind: "club" },
    { date: "2027-02-03", title: "Woman Crush Wednesday", kind: "club", note: "Every Wednesday" },
    { date: "2027-02-10", title: "Interview Ready: CV and LinkedIn clinic", kind: "club" },
    { date: "2027-02-17", title: "Open source pathway kickoff: GSoC, Outreachy, LFX", kind: "club" },
    { date: "2027-02-26", title: "Inside Kigali Tech: company visit", kind: "club" },
    { date: "2027-02-26", title: "Suggestion box review", kind: "club" },
    { date: "2027-03-01", title: "The Opportunity Drop: March edition", kind: "club" },
    { date: "2027-03-08", title: "International Women's Day celebration", kind: "club" },
    { date: "2027-03-17", title: "Interview Ready: mock interviews", kind: "club" },
    { date: "2027-03-24", title: "Beyond the Classroom workshop #2: Cloud", kind: "club" },
    { date: "2027-03-26", title: "Mentorship pods meetup", kind: "club" },
    { date: "2027-03-31", title: "Suggestion box review", kind: "club" },
    { date: "2027-04-05", title: "The Opportunity Drop: April edition", kind: "club" },
    { date: "2027-04-10", title: "WiT Hackathon (team matching on the day)", kind: "club" },
    { date: "2027-04-21", title: "Semester feedback survey opens", kind: "club" },
    { date: "2027-04-28", title: "Impact report: Promised vs. delivered", kind: "club" }
  ]
};
