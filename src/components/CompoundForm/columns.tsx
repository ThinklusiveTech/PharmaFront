import { CustomForm, type FieldConfig } from "../shared";
import {
    RECOMMENDED_REGULATORY_PATHWAY_OPTIONS,
    OVERALL_CMC_COMPLEXITY_RATING_OPTIONS,
    FIRST_TO_FILE_EXCLUSIVITY_OPTIONS,
    THERAPEUTIC_EQUIVALENCE_TE_CODE_OPTIONS,
    BD_RECOMMENDATION_OPTIONS,
} from "../../utils/utils";

// Step 1: Executive Summary
export const addExecutiveSummary: FieldConfig[] = [
    {
        key: "executiveSummary",
        label: "Overview & Summary",
        type: "textarea",
        required: false,
        placeholder: "Enter Executive Summary",
        fullRowWidth: true,
    },
];
// Step 2: Product Overview & Basic Details
export const addProductOverview: FieldConfig[] = [
    {
        key: "drugInfoSectionHeader",
        label: "Drug Information",
        type: "header",
    },
    {
        key: "drugName",
        label: "Drug Name",
        type: "text",
        required: true,
        placeholder: "Enter drug name",
    },
    {
        key: "apiName",
        label: "API Name",
        type: "text",
        required: true,
        placeholder: "Enter API name",
    },
    {
        key: "mechanismOfAction",
        label: "Mechanism of Action",
        type: "text",
        required: false,
        placeholder: "Select mechanism",
    },
    {
        key: "companyName",
        label: "Company Name",
        type: "text",
        required: false,
        placeholder: "Enter company name",
    },
    {
        key: "regulatoryInfoSectionHeader",
        label: "Regulatory Information",
        type: "header",
    },
    {
        key: "therapeuticArea",
        label: "Therapeutic Area",
        type: "dropdown",
        required: false,
        placeholder: "Select Therapeutic Area",
    },
    {
        key: "approvedIndications",
        label: "Approved Indications",
        type: "dropdown",
        required: false,
        placeholder: "Select Approved Indication",
    },
    {
        key: "firstApprovedDate",
        label: "First Approved Date",
        type: "datepicker",
        required: false,
        placeholder: "Select First Approved Date",
    },
    {
        key: "firstApprovedRegion",
        label: "First Approved Region",
        type: "dropdown",
        required: false,
        placeholder: "Select First Approved Region",
    },
    {
        key: "globalAnnualRevenue",
        label: "Global Annual Revenue",
        type: "dynamic",
        required: false,
        singleFieldInRow: true,
        dynamicComponent: (key: string, field: any, form: any) => (
            <CustomForm key={key} field={field} form={form} />
        ),
        dynamicFields: [
            {
                key: "fiscalYear",
                label: "Fiscal Year",
                type: "datepicker",
                required: false,
                placeholder: "Select Fiscal Year",
            },
            {
                key: "region",
                label: "Region",
                type: "dropdown",
                required: false,
                placeholder: "Select Region",
            },
            {
                key: "revenue",
                label: "Revenue",
                type: "text",
                required: false,
                placeholder: "Enter Revenue (e.g. $1.2B)",
            },
            {
                key: "currency",
                label: "Currency",
                type: "text",
                required: false,
                placeholder: "Enter Currency (e.g. USD)",
            },
        ],
    },
    {
        key: "marketingRights",
        label: "Marketing/Distribution Rights",
        type: "dynamic",
        required: false,
        singleFieldInRow: true,
        dynamicComponent: (key: string, field: any, form: any) => (
            <CustomForm key={key} field={field} form={form} />
        ),
        dynamicFields: [
            {
                key: "country",
                label: "Country",
                type: "dropdown",
                required: false,
                placeholder: "Select Country",
            },
            {
                key: "company",
                label: "Company",
                type: "text",
                required: false,
                placeholder: "Enter Company (e.g. ABC)",
            },
            {
                key: "typeOfRights",
                label: "Type of Rights",
                type: "text",
                required: false,
                placeholder: "Enter Type of Rights (e.g. Marketing or distribution)",
            },
        ],
    },
    {
        key: "lossOfExclusivitySectionHeader",
        label: "Loss Of Exclusivity",
        type: "header",
    },
    {
        key: "exclusivityCode",
        label: "Designation Type / Exclusivity Code",
        type: "text",
        required: false,
        placeholder: "Enter Designation Type / Exclusivity Code",
    },
    {
        key: "country",
        label: "Country",
        type: "dropdown",
        required: false,
        placeholder: "Select Country",
    },
    {
        key: "regulatoryBody",
        label: "Regulatory Body",
        type: "dropdown",
        required: false,
        placeholder: "Select Regulatory Body",
    },
    {
        key: "expiredDate",
        label: "Loss of Exclusivity (LOE) Date",
        type: "datepicker",
        required: false,
        placeholder: "Select Loss of Exclusivity (LOE) Date",
    },
    {
        key: "timeFromLoeToFirstGenericLaunchMonths",
        label: "Time from LOE to First Generic Launch (months)",
        type: "number",
        required: false,
        placeholder: "Enter months (e.g. 6)",
    },
    {
        key: "dosageFormsAndStrengths",
        label: "Dosage Forms & Strengths",
        type: "dynamic",
        required: false,
        singleFieldInRow: true,
        dynamicComponent: (key: string, field: any, form: any) => (
            <CustomForm key={key} field={field} form={form} />
        ),
        dynamicFields: [
            {
                key: "dosageForm",
                label: "Dosage Form",
                type: "dropdown",
                required: false,
                placeholder: "Select Dosage Form",
                options: [
                    "Tablet",
                    "Capsule",
                    "Injection",
                    "Solution",
                    "Suspension",
                    "Inhalation",
                    "Cream",
                    "Ointment",
                    "Gel",
                    "Powder",
                    "Drops",
                    "Suppository",
                    "Syrup",
                    "Transdermal Patch",
                    "Spray",
                    "Implant"
                ].map((d) => ({ label: d, value: d })),
            },
            {
                key: "doseStrength",
                label: "Dose/Strength",
                type: "text",
                required: false,
                placeholder: "Enter Dose/Strength (e.g. 100 mg)",
            },
            {
                key: "route",
                label: "Route",
                type: "dropdown",
                required: false,
                placeholder: "Select Route",
                options: [
                    "Oral",
                    "Intravenous (IV)",
                    "Intramuscular (IM)",
                    "Subcutaneous (SC)",
                    "Topical",
                    "Inhalation",
                    "Sublingual",
                    "Buccal",
                    "Rectal",
                    "Nasal",
                    "Ophthalmic",
                    "Otic",
                    "Transdermal"
                ].map((r) => ({ label: r, value: r })),
            },
            {
                key: "marketingStatus",
                label: "Marketing Status",
                type: "dropdown",
                required: false,
                placeholder: "Select Marketing Status",
                options: [
                    "Marketed",
                    "Withdrawn",
                    "Discontinued",
                    "Approved",
                    "Investigational"
                ].map((m) => ({ label: m, value: m })),
            },
        ],
    },
    {
        key: "additionalInfoSectionHeader",
        label: "Additional Information",
        type: "header",
    },
    {
        key: "version",
        label: "Version",
        type: "text",
        required: false,
        placeholder: "Enter Version",
    },
];

// Step 3: Development Feasibility & Timeline
export const addDevelopmentFeasibility: FieldConfig[] = [
    {
        key: "recommendedRegulatoryPathway",
        label: "Recommended Regulatory Pathway",
        type: "dropdown",
        required: false,
        placeholder: "Select Recommended Regulatory Pathway",
        options: RECOMMENDED_REGULATORY_PATHWAY_OPTIONS,
    },
    {
        key: "overallCmcComplexityRating",
        label: "Overall CMC Complexity Rating",
        type: "dropdown",
        required: false,
        placeholder: "Select Overall CMC Complexity Rating",
        options: OVERALL_CMC_COMPLEXITY_RATING_OPTIONS,
    },
    {
        key: "estimatedDsDevelopmentTimelineMonths",
        label: "Estimated DS Development Timeline (months)",
        type: "number",
        required: false,
        placeholder: "Enter timeline in months",
    },
    {
        key: "estimatedDpDevelopmentTimelineMonths",
        label: "Estimated DP Development Timeline (months)",
        type: "number",
        required: false,
        placeholder: "Enter timeline in months",
    },
    {
        key: "estimatedTotalTimeToFilingMonths",
        label: "Estimated Total Time-to-Filing (months)",
        type: "number",
        required: false,
        placeholder: "Enter timeline in months",
    },
    {
        key: "keyDevelopmentRiskFlags",
        label: "Key Development Risk Flags",
        type: "text",
        required: false,
        placeholder: "Enter Key Development Risk Flags",
    },
    {
        key: "firstToFile180DayExclusivityOpportunity",
        label: "First-to-File / 180-Day Exclusivity Opportunity",
        type: "dropdown",
        required: false,
        placeholder: "Select First-to-File / 180-Day Exclusivity Opportunity",
        options: FIRST_TO_FILE_EXCLUSIVITY_OPTIONS,
    },
    {
        key: "therapeuticEquivalenceTeCode",
        label: "Therapeutic Equivalence (TE) Code",
        type: "dropdown",
        required: false,
        placeholder: "Select Therapeutic Equivalence (TE) Code",
        options: THERAPEUTIC_EQUIVALENCE_TE_CODE_OPTIONS,
    },
    {
        key: "bdRecommendation",
        label: "BD Recommendation",
        type: "dropdown",
        required: false,
        placeholder: "Select BD Recommendation",
        options: BD_RECOMMENDATION_OPTIONS,
    },
];

// Step 5: Physical & Chemical Properties
export const addPhysicalChemicalProperties: FieldConfig[] = [
    {
        key: "innName",
        label: "INN Name",
        type: "text",
        required: false,
        placeholder: "Enter INN Name",
    },
    {
        key: "synonyms",
        label: "Synonyms",
        type: "textarea",
        required: false,
        placeholder: "Enter Synonyms",
    },
    {
        key: "iupacName",
        label: "IUPAC Name",
        type: "text",
        required: false,
        placeholder: "Enter IUPAC Name",
    },
    {
        key: "molecularFormula",
        label: "Molecular Formula",
        type: "text",
        required: false,
        placeholder: "Enter Molecular Formula",
    },
    {
        key: "molecularWeight",
        label: "Molecular Weight (g/mol)",
        type: "text",
        required: false,
        placeholder: "Enter Molecular Weight",
    },
    {
        key: "structure",
        label: "Structure",
        type: "file",
        required: false,
        placeholder: "Upload Structure Image (PNG/JPEG/PDF)",
    },
    {
        key: "stereochemistry",
        label: "Stereochemistry",
        type: "text",
        required: false,
        placeholder: "Enter Stereochemistry",
    },
    {
        key: "bcsClass",
        label: "BCS Class",
        type: "dropdown",
        required: false,
        placeholder: "Select BCS Class",
        options: [
            { label: "Class I", value: "Class I" },
            { label: "Class II", value: "Class II" },
            { label: "Class III", value: "Class III" },
            { label: "Class IV", value: "Class IV" },
            { label: "NA", value: "NA" },
        ],
    },
    {
        key: "aqueousSolubility",
        label: "Aqueous Solubility",
        type: "dynamic",
        required: false,
        singleFieldInRow: true,
        dynamicComponent: (key: string, field: any, form: any) => (
            <CustomForm key={key} field={field} form={form} />
        ),
        dynamicFields: [
            {
                key: "ph",
                label: "pH",
                type: "text",
                required: false,
                placeholder: "Enter pH or Range (e.g. 1.2, 4.5, 6.8)",
            },
            {
                key: "solvent",
                label: "Solvent",
                type: "text",
                required: false,
                placeholder: "Enter Solvent (e.g. HCl buffer, Water)",
            },
            {
                key: "solubility",
                label: "Solubility",
                type: "text",
                required: false,
                placeholder: "Enter Solubility (e.g. >100)",
            },
            {
                key: "units",
                label: "Units",
                type: "text",
                required: false,
                placeholder: "Enter Units (e.g. mg/mL)",
            },
        ],
    },
    {
        key: "pka",
        label: "pKa",
        type: "text",
        required: false,
        placeholder: "Enter pKa (List all values)",
    },
    {
        key: "logp",
        label: "LogP / LogD (pH 7.4)",
        type: "text",
        required: false,
        placeholder: "Enter LogP / LogD (pH 7.4)",
    },
    {
        key: "logd",
        label: "logD",
        type: "text",
        required: false,
        placeholder: "Enter logD",
    },
    {
        key: "compendialStatus",
        label: "Compendial Status",
        type: "dropdown",
        required: false,
        placeholder: "Select Compendial Status",
        options: [
            { label: "USP", value: "USP" },
            { label: "Ph.Eur.", value: "Ph.Eur." },
            { label: "JP", value: "JP" },
            { label: "Non-Compendial", value: "Non-Compendial" },
        ],
    },
    {
        key: "referenceStandard",
        label: "Reference Standard Availability & Lead Time",
        type: "text",
        required: false,
        placeholder: "Enter Reference Standard details or purchase link",
    },
    {
        key: "hygroscopicity",
        label: "Hygroscopicity",
        type: "dropdown",
        required: false,
        placeholder: "Select Hygroscopicity",
        options: [
            { label: "Non-hygroscopic", value: "Non-hygroscopic" },
            { label: "Slightly hygroscopic", value: "Slightly hygroscopic" },
            { label: "Moderately hygroscopic", value: "Moderately hygroscopic" },
            { label: "Very hygroscopic", value: "Very hygroscopic" },
        ],
    },
    {
        key: "photostability",
        label: "Photostability (ICH Q1B)",
        type: "dropdown",
        required: false,
        placeholder: "Select Photostability",
        options: [
            { label: "Photostable", value: "Photostable" },
            { label: "Light-Sensitive", value: "Light-Sensitive" },
        ],
    },
    {
        key: "particleSizeDistribution",
        label: "Particle Size Distribution (D10/D50/D90)",
        type: "text",
        required: false,
        placeholder: "Enter Particle Size Distribution (D10/D50/D90)",
    },
    {
        key: "monoisotopicMass",
        label: "Monoisotopic Mass (g/mol)",
        type: "text",
        required: false,
        placeholder: "Enter Monoisotopic Mass",
    },
    {
        key: "solubility",
        label: "General Solubility",
        type: "text",
        required: false,
        placeholder: "Enter General Solubility",
    },
    {
        key: "individualSolvent",
        label: "Individual Solvent",
        type: "dynamic",
        required: false,
        singleFieldInRow: true,
        dynamicComponent: (key: string, field: any, form: any) => (
            <CustomForm key={key} field={field} form={form} />
        ),
        dynamicFields: [
            {
                key: "solvent",
                label: "Solvent",
                type: "text",
                required: false,
                placeholder: "Enter Solvent",
            },
            {
                key: "solubility",
                label: "Solubility (mg/mL)",
                type: "text",
                required: false,
                placeholder: "Enter Solubility",
            },
        ],
    },
];

// Step 3: Regulatory Insights
export const addRegulatoryInsights: FieldConfig[] = [
    {
        key: "approvalDetails",
        label: "Approval Details",
        type: "dynamic",
        required: false,
        singleFieldInRow: true,
        dynamicComponent: (key: string, field: any, form: any) => (
            <CustomForm key={key} field={field} form={form} />
        ),
        dynamicFields: [
            {
                key: "drugName",
                label: "Drug Name",
                type: "text",
                required: false,
                placeholder: "Enter Drug Name",
            },
            {
                key: "region",
                label: "Region",
                type: "dropdown",
                required: false,
                placeholder: "Select Region",
            },
            {
                key: "indication",
                label: "Indication",
                type: "text",
                required: false,
                placeholder: "Enter Indication",
            },
            {
                key: "patientSegments",
                label: "Patient Segments",
                type: "text",
                required: false,
                placeholder: "Enter Patient Segments",
            },
            {
                key: "dosageForm",
                label: "Dosage Form",
                type: "text",
                required: false,
                placeholder: "Enter Dosage Form",
            },
            {
                key: "dose",
                label: "Dose or Strength",
                type: "text",
                required: false,
                placeholder: "Enter Dose or Strength",
            },
            {
                key: "approvedDate",
                label: "Approved Date",
                type: "datepicker",
                required: false,
                placeholder: "Enter Approved Date",
            },
            {
                key: "regulatoryBodies",
                label: "Regulatory Bodies",
                type: "dropdown",
                required: false,
                placeholder: "Select Regulatory Bodies",
            },
        ],
    },
    {
        key: "specialDesignations",
        label: "Special Designations",
        type: "dynamic",
        required: false,
        singleFieldInRow: true,
        dynamicComponent: (key: string, field: any, form: any) => (
            <CustomForm key={key} field={field} form={form} />
        ),
        dynamicFields: [
            {
                key: "designationType",
                label: "Designation Type",
                type: "text",
                required: false,
                placeholder: "Enter Designation Type",
            },
            {
                key: "country",
                label: "Country",
                type: "dropdown",
                required: false,
                placeholder: "Select Country",
            },
            {
                key: "regulatorBody",
                label: "Regulator Body",
                type: "dropdown",
                required: false,
                placeholder: "Select Regulator Body",
            },
            {
                key: "indication",
                label: "Indication",
                type: "text",
                required: false,
                placeholder: "Enter Indication",
            },
            {
                key: "dateGranted",
                label: "Date Granted",
                type: "datepicker",
                required: false,
                placeholder: "Enter Date Granted",
            },
            {
                key: "expiryDate",
                label: "Expiry Date",
                type: "datepicker",
                required: false,
                placeholder: "Enter Expiry Date",
            },
            {
                key: "withdrawn",
                label: "Withdrawn",
                type: "text",
                required: false,
                placeholder: "Enter Withdrawn Date / Status",
            },
        ],
    },
    {
        key: "exclusivityInfo",
        label: "Exclusivity Info",
        type: "dynamic",
        required: false,
        singleFieldInRow: true,
        dynamicComponent: (key: string, field: any, form: any) => (
            <CustomForm key={key} field={field} form={form} />
        ),
        dynamicFields: [
            {
                key: "designationType",
                label: "Designation Type / Exclusivity Code",
                type: "text",
                required: false,
                placeholder: "Enter Designation Type / Exclusivity Code",
            },
            {
                key: "regulatoryBody",
                label: "Regulatory Body",
                type: "dropdown",
                required: false,
                placeholder: "Select Regulatory Body",
            },
            {
                key: "country",
                label: "Country",
                type: "dropdown",
                required: false,
                placeholder: "Select Country",
            },
            {
                key: "expiryDate",
                label: "Expiry Date",
                type: "datepicker",
                required: false,
                placeholder: "Select Expiry Date",
            },
        ],
    },
    {
        key: "patentInformation",
        label: "Patent Information",
        type: "dynamic",
        required: false,
        singleFieldInRow: true,
        dynamicComponent: (key: string, field: any, form: any) => (
            <CustomForm key={key} field={field} form={form} />
        ),
        dynamicFields: [
            {
                key: "patentNo",
                label: "Patent No",
                type: "text",
                required: false,
                placeholder: "Enter Patent No",
            },
            {
                key: "patentExpiration",
                label: "Patent Expiration",
                type: "datepicker",
                required: false,
                placeholder: "Select Patent Expiration Date",
            },
            {
                key: "drugSubstance",
                label: "Drug Substance",
                type: "text",
                required: false,
                placeholder: "Enter Drug Substance",
            },
            {
                key: "drugProduct",
                label: "Drug Product",
                type: "text",
                required: false,
                placeholder: "Enter Drug Product",
            },
            {
                key: "submissionDate",
                label: "Submission Date",
                type: "datepicker",
                required: false,
                placeholder: "Select Submission Date",
            },
            {
                key: "regulatoryBody",
                label: "Regulatory Body",
                type: "dropdown",
                required: false,
                placeholder: "Select Regulatory Body",
            },
        ],
    },
    {
        key: "additionalInfo",
        label: "Additional Information",
        type: "dynamic",
        required: false,
        singleFieldInRow: true,
        dynamicComponent: (key: string, field: any, form: any) => (
            <CustomForm key={key} field={field} form={form} />
        ),
        dynamicFields: [
            {
                key: "consideration",
                label: "Consideration",
                type: "text",
                required: false,
                placeholder: "Enter Consideration",
            },
            {
                key: "impactForGenericFilers",
                label: "Impact For Generic Filers",
                type: "text",
                required: false,
                placeholder: "Enter Impact For Generic Filers",
            },
        ],
    },
];

// Step 4: Generic Entrants
export const addGenericEntrants: FieldConfig[] = [
    {
        key: "genericEntrants",
        label: "Generic Entrants (ANDAs Approved by the US FDA)",
        type: "dynamic",
        required: false,
        singleFieldInRow: true,
        dynamicComponent: (key: string, field: any, form: any) => (
            <CustomForm key={key} field={field} form={form} />
        ),
        dynamicFields: [
            {
                key: "anda",
                label: "ANDA",
                type: "text",
                required: false,
                placeholder: "Enter ANDA",
            },
            {
                key: "companyName",
                label: "Company Name",
                type: "text",
                required: false,
                placeholder: "Enter Company Name",
            },
            {
                key: "dosageDetails",
                label: "Dosage Details",
                type: "text",
                required: false,
                placeholder: "Enter Dosage Details",
            },
            {
                key: "approvalType",
                label: "Approval Type",
                type: "text",
                required: false,
                placeholder: "Enter Approval Type",
            },
            {
                key: "andaSubmissionDate",
                label: "ANDA Submission Date",
                type: "datepicker",
                required: false,
                placeholder: "Enter ANDA Submission Date",
            },
            {
                key: "tentativeApprovalDate",
                label: "Tentative Approval Date",
                type: "datepicker",
                required: false,
                placeholder: "Enter Tentative Approval Date",
            },
            {
                key: "finalApprovalDate",
                label: "Final Approval Date",
                type: "datepicker",
                required: false,
                placeholder: "Enter Final Approval Date",
            },
            {
                key: "ftfExclusivity",
                label: "FTF Exclusivity",
                type: "text",
                required: false,
                placeholder: "Enter FTF Exclusivity",
            },
        ],
    },
    {
        key: "genericsApprovedByEma",
        label: "Generics Approved By EMA",
        type: "dynamic",
        required: false,
        singleFieldInRow: true,
        dynamicComponent: (key: string, field: any, form: any) => (
            <CustomForm key={key} field={field} form={form} />
        ),
        dynamicFields: [
            {
                key: "companyName",
                label: "Company Name",
                type: "text",
                required: false,
                placeholder: "Enter Company Name",
            },
            {
                key: "drugName",
                label: "Drug Name",
                type: "text",
                required: false,
                placeholder: "Enter Drug Name",
            },
            {
                key: "dosageDetails",
                label: "Dosage Details",
                type: "textarea",
                required: false,
                placeholder: "Enter Dosage Details",
            },
            {
                key: "chmpOpinion",
                label: "CHMP Opinion",
                type: "text",
                required: false,
                placeholder: "Enter CHMP Opinion",
            },
            {
                key: "ecDecision",
                label: "EC Decision",
                type: "text",
                required: false,
                placeholder: "Enter EC Decision",
            },
            {
                key: "ecApprovalDate",
                label: "EC Approval Date",
                type: "datepicker",
                required: false,
                placeholder: "Enter EC Approval Date",
            },
        ],
    },
];

// Step 6: Drug Substance
export const addDrugSubstance: FieldConfig[] = [
    {
        key: "availableDmfVendors",
        label: "Available DMF Vendors",
        type: "dynamic",
        required: false,
        singleFieldInRow: true,
        dynamicComponent: (key: string, field: any, form: any) => (
            <CustomForm key={key} field={field} form={form} />
        ),
        dynamicFields: [
            {
                key: "dmf",
                label: "DMF #",
                type: "text",
                required: false,
                placeholder: "Enter DMF #",
            },
            {
                key: "company",
                label: "Company",
                type: "text",
                required: false,
                placeholder: "Enter Company",
            },
            {
                key: "typeOfDmf",
                label: "Type of DMF",
                type: "dropdown",
                required: false,
                placeholder: "Select Type of DMF",
                options: [
                    { label: "Type I", value: "Type I" },
                    { label: "Type II", value: "Type II" },
                    { label: "Type IV", value: "Type IV" },
                ],
            },
            {
                key: "yearApproved",
                label: "Year Approved",
                type: "text",
                required: false,
                placeholder: "Enter Year Approved (e.g. 2020)",
            },
            {
                key: "status",
                label: "Status",
                type: "dropdown",
                required: false,
                placeholder: "Select Status",
                options: [
                    { label: "Active", value: "Active" },
                    { label: "Inactive", value: "Inactive" },
                    { label: "Withdrawn", value: "Withdrawn" },
                ],
            },
        ],
    },
    {
        key: "ksmAvailability",
        label: "Regulatory Starting Material (RSM) Availability",
        type: "dynamic",
        required: false,
        singleFieldInRow: true,
        dynamicComponent: (key: string, field: any, form: any) => (
            <CustomForm key={key} field={field} form={form} />
        ),
        dynamicFields: [
            {
                key: "rsmName",
                label: "RSM Name",
                type: "text",
                required: false,
                placeholder: "Enter RSM Name",
            },
            {
                key: "supplier",
                label: "Supplier(s)",
                type: "text",
                required: false,
                placeholder: "Enter Supplier(s)",
            },
        ],
    },
    {
        key: "manufacturingRoutes",
        label: "Manufacturing Route",
        type: "dynamic",
        required: false,
        singleFieldInRow: true,
        dynamicComponent: (key: string, field: any, form: any) => (
            <CustomForm key={key} field={field} form={form} />
        ),
        dynamicFields: [
            {
                key: "step",
                label: "Step",
                type: "text",
                required: false,
                placeholder: "Enter Step (e.g. Step 1)",
            },
            {
                key: "description",
                label: "Description",
                type: "textarea",
                required: false,
                placeholder: "Enter Description",
            },
            {
                key: "schematicRepresentation",
                label: "Schematic Representation",
                type: "file",
                required: false,
                placeholder: "Upload Schematic Image",
            },
        ],
    },
    {
        key: "stableAndCommerciallyUsedPolymorphicForm",
        label: "Stable, Commercially Used Polymorphic Form",
        type: "text",
        required: false,
        placeholder: "Enter Stable, Commercially Used Polymorphic Form",
    },
    {
        key: "drugSubstanceSpecifications",
        label: "Drug Substance Specifications",
        type: "dynamic",
        required: false,
        singleFieldInRow: true,
        dynamicComponent: (key: string, field: any, form: any) => (
            <CustomForm key={key} field={field} form={form} />
        ),
        dynamicFields: [
            {
                key: "testCriteria",
                label: "Test Criteria",
                type: "text",
                required: false,
                placeholder: "Enter Test Criteria (e.g. Assay, Related Substances)",
            },
            {
                key: "acceptanceCriteria",
                label: "Acceptance Criteria",
                type: "text",
                required: false,
                placeholder: "Enter Acceptance Criteria (e.g. 98.0% - 102.0%)",
            },
        ],
    },
    {
        key: "dsImpurities",
        label: "DS Impurities",
        type: "dynamic",
        required: false,
        singleFieldInRow: true,
        dynamicComponent: (key: string, field: any, form: any) => (
            <CustomForm key={key} field={field} form={form} />
        ),
        dynamicFields: [
            {
                key: "name",
                label: "Name",
                type: "text",
                required: false,
                placeholder: "Enter Impurity Name (e.g. Impurity A)",
            },
            {
                key: "structure",
                label: "Structure",
                type: "file",
                required: false,
                placeholder: "Upload Structure Image",
            },
            {
                key: "knownUnknown",
                label: "Known / Unknown",
                type: "dropdown",
                required: false,
                placeholder: "Select Known / Unknown",
                options: [
                    { label: "Known", value: "Known" },
                    { label: "Unknown", value: "Unknown" },
                ],
            },
        ],
    },
    {
        key: "forcedDegradationStudies",
        label: "Forced Degradation Studies",
        type: "dynamic",
        required: false,
        singleFieldInRow: true,
        dynamicComponent: (key: string, field: any, form: any) => (
            <CustomForm key={key} field={field} form={form} />
        ),
        dynamicFields: [
            {
                key: "stressCondition",
                label: "Stress Condition",
                type: "text",
                required: false,
                placeholder: "Enter Stress Condition (e.g. Acid hydrolysis, Thermal)",
            },
            {
                key: "details",
                label: "Details",
                type: "text",
                required: false,
                placeholder: "Enter Details (e.g. 0.1N HCl, 24h, 60°C)",
            },
            {
                key: "percentAssay",
                label: "% Assay",
                type: "text",
                required: false,
                placeholder: "Enter % Assay (e.g. 98.2)",
            },
            {
                key: "percentImpurities",
                label: "% Impurities",
                type: "text",
                required: false,
                placeholder: "Enter % Impurities (e.g. 2.1)",
            },
        ],
    },
    {
        key: "genotoxicImpurities",
        label: "Genotoxic Impurities",
        type: "dynamic",
        required: false,
        singleFieldInRow: true,
        dynamicComponent: (key: string, field: any, form: any) => (
            <CustomForm key={key} field={field} form={form} />
        ),
        dynamicFields: [
            {
                key: "name",
                label: "Name",
                type: "text",
                required: false,
                placeholder: "Enter Impurity Name (e.g. GTI-1)",
            },
            {
                key: "gtiClass",
                label: "Class",
                type: "dropdown",
                required: false,
                placeholder: "Select Class",
                options: [
                    { label: "Class 1", value: "Class 1" },
                    { label: "Class 2", value: "Class 2" },
                    { label: "Class 3", value: "Class 3" },
                    { label: "Class 4", value: "Class 4" },
                    { label: "Class 5", value: "Class 5" },
                ],
            },
        ],
    },
    {
        key: "nitrosaminesAssessment",
        label: "Nitrosamines Assessment",
        type: "dynamic",
        required: false,
        singleFieldInRow: true,
        dynamicComponent: (key: string, field: any, form: any) => (
            <CustomForm key={key} field={field} form={form} />
        ),
        dynamicFields: [
            {
                key: "nameOfImpurity",
                label: "Name of Impurity",
                type: "text",
                required: false,
                placeholder: "Enter Impurity Name (e.g. NDMA)",
            },
            {
                key: "structure",
                label: "Structure",
                type: "file",
                required: false,
                placeholder: "Upload Structure Image",
            },
            {
                key: "riskOutcome",
                label: "Risk Outcome",
                type: "text",
                required: false,
                placeholder: "Enter Risk Outcome (e.g. Below AI limit)",
            },
        ],
    },
    {
        key: "recommendedStorageCondition",
        label: "Recommended Storage Condition",
        type: "text",
        required: false,
        placeholder: "Enter Recommended Storage Condition",
    },
    {
        key: "stabilityData",
        label: "Stability Data (Drug Substance)",
        type: "dynamic",
        required: false,
        singleFieldInRow: true,
        dynamicComponent: (key: string, field: any, form: any) => (
            <CustomForm key={key} field={field} form={form} />
        ),
        dynamicFields: [
            {
                key: "condition",
                label: "Condition",
                type: "text",
                required: false,
                placeholder: "Enter Condition (e.g. 25°C/60% RH)",
            },
            {
                key: "durationMonths",
                label: "Duration (months)",
                type: "text",
                required: false,
                placeholder: "Enter Duration in months (e.g. 24)",
            },
        ],
    },
    {
        key: "packaging",
        label: "Packaging",
        type: "text",
        required: false,
        placeholder: "Enter Packaging (e.g. HDPE drum, double LDPE liner)",
    },
    {
        key: "otherInformation",
        label: "Other Information",
        type: "textarea",
        required: false,
        placeholder: "Enter Other Information",
    },
];

// Step 5: Drug Product Information
export const addDrugProductInformation: FieldConfig[] = [
    {
        key: "presentation",
        label: "Presentation",
        type: "dynamic",
        required: false,
        singleFieldInRow: true,
        dynamicComponent: (key: string, field: any, form: any) => (
            <CustomForm key={key} field={field} form={form} />
        ),
        dynamicFields: [
            {
                key: "strength",
                label: "Strength",
                type: "text",
                required: false,
                placeholder: "Enter Strength (e.g. 100 mg)",
            },
            {
                key: "dosageForm",
                label: "Dosage Form",
                type: "text",
                required: false,
                placeholder: "Enter Dosage Form (e.g. Tablet)",
            },
            {
                key: "shape",
                label: "Shape",
                type: "text",
                required: false,
                placeholder: "Enter Shape (e.g. Round/oval/oblong)",
            },
            {
                key: "size",
                label: "Size",
                type: "text",
                required: false,
                placeholder: "Enter Size (e.g. 10 mm)",
            },
            {
                key: "color",
                label: "Color",
                type: "text",
                required: false,
                placeholder: "Enter Color (e.g. White)",
            },
            {
                key: "imprint",
                label: "Imprint",
                type: "text",
                required: false,
                placeholder: "Enter Imprint (e.g. X100)",
            },
            {
                key: "ndcCode",
                label: "NDC Code",
                type: "text",
                required: false,
                placeholder: "Enter NDC Code (e.g. 12345-678-00)",
            },
        ],
    },
    {
        key: "containerClosureSystem",
        label: "Container Closure System",
        type: "dynamic",
        required: false,
        singleFieldInRow: true,
        dynamicComponent: (key: string, field: any, form: any) => (
            <CustomForm key={key} field={field} form={form} />
        ),
        dynamicFields: [
            {
                key: "component",
                label: "Component",
                type: "text",
                required: false,
                placeholder: "Enter Component (e.g. Bottle, Blister)",
            },
            {
                key: "material",
                label: "Material",
                type: "text",
                required: false,
                placeholder: "Enter Material (e.g. HDPE, PVC)",
            },
            {
                key: "function",
                label: "Function",
                type: "text",
                required: false,
                placeholder: "Enter Function (e.g. Moisture barrier)",
            },
        ],
    },
    {
        key: "excipientsCompliance",
        label: "Excipients & IID Compliance Check",
        type: "dynamic",
        required: false,
        singleFieldInRow: true,
        dynamicComponent: (key: string, field: any, form: any) => (
            <CustomForm key={key} field={field} form={form} />
        ),
        dynamicFields: [
            {
                key: "excipient",
                label: "Excipient",
                type: "text",
                required: false,
                placeholder: "Enter Excipient (e.g. Microcrystalline cellulose)",
            },
            {
                key: "proposedLevel",
                label: "Proposed Level",
                type: "text",
                required: false,
                placeholder: "Enter Proposed Level (e.g. 20% w/w)",
            },
            {
                key: "fdaIidMaxLevel",
                label: "FDA IID Max Level",
                type: "text",
                required: false,
                placeholder: "Enter FDA IID Max Level (e.g. 30% w/w)",
            },
            {
                key: "status",
                label: "Status",
                type: "dropdown",
                required: false,
                placeholder: "Select Status",
                options: [
                    { label: "Within IID limit", value: "Within IID limit" },
                    { label: "Exceeds IID limit", value: "Exceeds IID limit" },
                    { label: "Not in IID", value: "Not in IID" },
                ],
            },
        ],
    },
    {
        key: "manufacturingTechnology",
        label: "Manufacturing Technology / Process Type",
        type: "dropdown",
        required: false,
        placeholder: "Select Manufacturing Technology",
        options: [
            { label: "Direct Compression", value: "Direct Compression" },
            { label: "Wet Granulation", value: "Wet Granulation" },
            { label: "Dry Granulation / Roller Compaction", value: "Dry Granulation / Roller Compaction" },
            { label: "Fluid Bed Granulation", value: "Fluid Bed Granulation" },
            { label: "Hot Melt Extrusion", value: "Hot Melt Extrusion" },
            { label: "Spray Drying", value: "Spray Drying" },
            { label: "Lyophilization", value: "Lyophilization" },
            { label: "Aseptic Fill", value: "Aseptic Fill" },
            { label: "Other", value: "Other" },
        ],
    },
    {
        key: "manufacturingProcess",
        label: "Manufacturing Process",
        type: "dynamic",
        required: false,
        singleFieldInRow: true,
        dynamicComponent: (key: string, field: any, form: any) => (
            <CustomForm key={key} field={field} form={form} />
        ),
        dynamicFields: [
            {
                key: "step",
                label: "Step",
                type: "text",
                required: false,
                placeholder: "Enter Step (e.g. Step 1)",
            },
            {
                key: "description",
                label: "Description",
                type: "textarea",
                required: false,
                placeholder: "Enter Description (e.g. Blending of API and excipients)",
            },
        ],
    },
    {
        key: "maximumDailyDose",
        label: "Maximum Daily Dose",
        type: "text",
        required: false,
        placeholder: "Enter Maximum Daily Dose",
    },
    {
        key: "storageAndShippingConditions",
        label: "Storage & Shipping Conditions",
        type: "text",
        required: false,
        placeholder: "Enter Storage & Shipping Conditions",
    },
    {
        key: "drugProductSpecifications",
        label: "Drug Product Specifications",
        type: "dynamic",
        required: false,
        singleFieldInRow: true,
        dynamicComponent: (key: string, field: any, form: any) => (
            <CustomForm key={key} field={field} form={form} />
        ),
        dynamicFields: [
            {
                key: "testCriteria",
                label: "Test Criteria",
                type: "text",
                required: false,
                placeholder: "Enter Test Criteria (e.g. Dissolution)",
            },
            {
                key: "methodTechnique",
                label: "Method / Technique",
                type: "text",
                required: false,
                placeholder: "Enter Method / Technique (e.g. USP Apparatus II)",
            },
            {
                key: "acceptanceCriteria",
                label: "Acceptance Criteria",
                type: "text",
                required: false,
                placeholder: "Enter Acceptance Criteria (e.g. Q=80% in 30 min)",
            },
        ],
    },
    {
        key: "dpImpurities",
        label: "DP Impurities",
        type: "dynamic",
        required: false,
        singleFieldInRow: true,
        dynamicComponent: (key: string, field: any, form: any) => (
            <CustomForm key={key} field={field} form={form} />
        ),
        dynamicFields: [
            {
                key: "name",
                label: "Name",
                type: "text",
                required: false,
                placeholder: "Enter Degradant / Impurity Name (e.g. Degradant A)",
            },
            {
                key: "structure",
                label: "Structure",
                type: "file",
                required: false,
                placeholder: "Upload Structure Image",
            },
            {
                key: "knownUnknown",
                label: "Known / Unknown",
                type: "dropdown",
                required: false,
                placeholder: "Select Known / Unknown",
                options: [
                    { label: "Known", value: "Known" },
                    { label: "Unknown", value: "Unknown" },
                ],
            },
        ],
    },
    {
        key: "nitrosamineStatement",
        label: "Nitrosamine Statement",
        type: "textarea",
        required: false,
        placeholder: "Enter Nitrosamine Statement",
    },
    {
        key: "stabilityStudies",
        label: "Stability Studies",
        type: "dynamic",
        required: false,
        singleFieldInRow: true,
        dynamicComponent: (key: string, field: any, form: any) => (
            <CustomForm key={key} field={field} form={form} />
        ),
        dynamicFields: [
            {
                key: "condition",
                label: "Condition",
                type: "text",
                required: false,
                placeholder: "Enter Condition (e.g. 25°C/60% RH)",
            },
            {
                key: "durationMonths",
                label: "Duration (months)",
                type: "text",
                required: false,
                placeholder: "Enter Duration in months (e.g. 24)",
            },
            {
                key: "packaging",
                label: "Packaging",
                type: "text",
                required: false,
                placeholder: "Enter Packaging (e.g. HDPE bottle, induction seal)",
            },
        ],
    },
    {
        key: "dissolutionMethod",
        label: "Dissolution Method",
        type: "dynamic",
        required: false,
        singleFieldInRow: true,
        dynamicComponent: (key: string, field: any, form: any) => (
            <CustomForm key={key} field={field} form={form} />
        ),
        dynamicFields: [
            {
                key: "apparatus",
                label: "Apparatus",
                type: "text",
                required: false,
                placeholder: "Enter Apparatus (e.g. USP Apparatus II (Paddle))",
            },
            {
                key: "media",
                label: "Media",
                type: "text",
                required: false,
                placeholder: "Enter Media (e.g. 900 mL pH 6.8 buffer)",
            },
            {
                key: "speedRpm",
                label: "Speed (rpm)",
                type: "text",
                required: false,
                placeholder: "Enter Speed (e.g. 50)",
            },
            {
                key: "samplingTimes",
                label: "Sampling Times",
                type: "text",
                required: false,
                placeholder: "Enter Sampling Times (e.g. 10, 20, 30, 45 min)",
            },
            {
                key: "temperature",
                label: "Temperature",
                type: "text",
                required: false,
                placeholder: "Enter Temperature (e.g. 37°C)",
            },
        ],
    },
    {
        key: "supplyChain",
        label: "Supply Chain",
        type: "dynamic",
        required: false,
        singleFieldInRow: true,
        dynamicComponent: (key: string, field: any, form: any) => (
            <CustomForm key={key} field={field} form={form} />
        ),
        dynamicFields: [
            {
                key: "apiManufacturingAndAnalysis",
                label: "API Manufacturing and Analysis",
                type: "text",
                required: false,
                placeholder: "Enter Manufacturing and Analysis",
            },
            {
                key: "company",
                label: "Company",
                type: "text",
                required: false,
                placeholder: "Enter Company",
            },
            {
                key: "location",
                label: "Location",
                type: "text",
                required: false,
                placeholder: "Select Location",
            },
            {
                key: "reference",
                label: "Reference",
                type: "text",
                required: false,
                placeholder: "Enter Reference",
            },
            {
                key: "phaseOfProgram",
                label: "Phase of Program",
                type: "text",
                required: false,
                placeholder: "Select Phase of Program",
            },
        ],
    },
    {
        key: "shelfLife",
        label: "Shelf Life",
        type: "dynamic",
        required: false,
        singleFieldInRow: true,
        dynamicComponent: (key: string, field: any, form: any) => (
            <CustomForm key={key} field={field} form={form} />
        ),
        dynamicFields: [
            {
                key: "numberOfYears",
                label: "Number of Years",
                type: "text",
                required: false,
                placeholder: "Enter Number of Years",
            },
            {
                key: "strength",
                label: "Strength",
                type: "text",
                required: false,
                placeholder: "Enter Strength",
            },
            {
                key: "expiryDate",
                label: "Expiry Date",
                type: "datepicker",
                required: false,
                placeholder: "Enter Expiry Date",
            },
        ],
    },
    {
        key: "pharmacokinetics",
        label: "Pharmacokinetics",
        type: "dynamic",
        required: false,
        singleFieldInRow: true,
        dynamicComponent: (key: string, field: any, form: any) => (
            <CustomForm key={key} field={field} form={form} />
        ),
        dynamicFields: [
            {
                key: "absorption",
                label: "Absorption (Tmax)",
                type: "text",
                required: false,
                placeholder: "Enter Absorption (Tmax)",
            },
            {
                key: "volumeOfDistribution",
                label: "Volume of Distribution",
                type: "text",
                required: false,
                placeholder: "Select Known Impurities",
            },
            {
                key: "metabolism",
                label: "Metabolism",
                type: "text",
                required: false,
                placeholder: "Select Metabolism",
            },
            {
                key: "excretion",
                label: "Excretion",
                type: "text",
                required: false,
                placeholder: "Select Excretion",
            },
            {
                key: "halfLife",
                label: "Half Life",
                type: "text",
                required: false,
                placeholder: "Select Half Life",
            },
            {
                key: "steadyState",
                label: "Steady State",
                type: "text",
                required: false,
                placeholder: "Select Steady State",
            },
            {
                key: "foodInteractions",
                label: "Food Interactions",
                type: "textarea",
                required: false,
                placeholder: "Enter Food Interactions",
            },
            {
                key: "drugInteractions",
                label: "Drug Interactions",
                type: "textarea",
                required: false,
                placeholder: "Enter Drug Interactions",
            },
        ],
    },
    {
        key: "formulationChallenges",
        label: "Formulation Challenges",
        type: "textarea",
        required: false,
        placeholder: "Enter Formulation Challenges",
    },
    {
        key: "unmetClinicalNeed",
        label: "Unmet Clinical Need",
        type: "textarea",
        required: false,
        placeholder: "Enter Unmet Clinical Need",
    },
];

// Labeling Information (separate section)
export const addLabelingInformation: FieldConfig[] = [
    {
        key: "labelingInformation",
        label: "Labeling Information",
        type: "dynamic",
        required: false,
        singleFieldInRow: true,
        dynamicComponent: (key: string, field: any, form: any) => (
            <CustomForm key={key} field={field} form={form} />
        ),
        dynamicFields: [
            {
                key: "image",
                label: "Image",
                type: "file",
                required: false,
                placeholder: "Upload Label Image",
            },
        ],
    },
];

// BA/BE Studies (separate section)
export const addBaBeStudies: FieldConfig[] = [
    {
        key: "baBeStudies",
        label: "BA/BE Studies",
        type: "dynamic",
        required: false,
        singleFieldInRow: true,
        dynamicComponent: (key: string, field: any, form: any) => (
            <CustomForm key={key} field={field} form={form} />
        ),
        dynamicFields: [
            {
                key: "studyType",
                label: "Study Type",
                type: "text",
                required: false,
                placeholder: "Enter Study Type",
            },
            {
                key: "dosageForm",
                label: "Dosage Form",
                type: "text",
                required: false,
                placeholder: "Enter Dosage Form",
            },
            {
                key: "dosageStrength",
                label: "Dosage Strength",
                type: "text",
                required: false,
                placeholder: "Enter Dosage Strength",
            },
            {
                key: "studyDesign",
                label: "Study Design",
                type: "text",
                required: false,
                placeholder: "Enter Study Design",
            },
            {
                key: "studyCondition",
                label: "Study Condition",
                type: "text",
                required: false,
                placeholder: "Enter Study Condition",
            },
            {
                key: "additionalDetails",
                label: "Additional Details",
                type: "textarea",
                required: false,
                placeholder: "Enter Additional Details",
            },
            {
                key: "endPoint",
                label: "End Point",
                type: "text",
                required: false,
                placeholder: "Enter End Point",
            },
        ],
    },
    {
        key: "biowaiverRequest",
        label: "Biowaiver Request",
        type: "text",
        required: false,
        placeholder: "Enter Biowaiver Request",
    },
    {
        key: "dissolutionTestMethodAndSamplingTimes",
        label: "Dissolution Test Method and Sampling Times",
        type: "textarea",
        required: false,
        placeholder: "Enter Dissolution Test Method and Sampling Times",
    },
];

// Sources (separate section)
export const addSources: FieldConfig[] = [
    {
        key: "sources",
        label: "Sources",
        type: "dynamic",
        required: false,
        singleFieldInRow: true,
        dynamicComponent: (key: string, field: any, form: any) => (
            <CustomForm key={key} field={field} form={form} />
        ),
        dynamicFields: [
            {
                key: "source",
                label: "Source / Reference",
                type: "textarea",
                required: false,
                placeholder: "Enter Source or Reference link/citation",
            },
        ],
    },
];

// Glossary (separate section)
export const addGlossary: FieldConfig[] = [
    {
        key: "glossary",
        label: "Glossary",
        type: "dynamic",
        required: false,
        singleFieldInRow: true,
        dynamicComponent: (key: string, field: any, form: any) => (
            <CustomForm key={key} field={field} form={form} />
        ),
        dynamicFields: [
            {
                key: "term",
                label: "Term",
                type: "text",
                required: false,
                placeholder: "Enter Term (e.g. ANDA, API, BCS)",
            },
            {
                key: "definition",
                label: "Definition",
                type: "textarea",
                required: false,
                placeholder: "Enter Definition or Explanation",
            },
        ],
    },
];

// Step 6: Appendices & References
export const addAppendices: FieldConfig[] = [
    {
        key: "appendices",
        label: "Appendices",
        type: "dynamic",
        required: false,
        singleFieldInRow: true,
        dynamicComponent: (key: string, field: any, form: any) => (
            <CustomForm key={key} field={field} form={form} />
        ),
        dynamicFields: [
            {
                key: "appendix",
                label: "Appendix",
                type: "textarea",
                required: false,
                placeholder: "Enter Appendix",

            },
        ],
    },
];

