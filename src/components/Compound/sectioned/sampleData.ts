
export const sampleDrugData = {
    "cid": "sample-full-details",
    "version": 1,
    "name": "Aspirin (Complete Demo Record)",
    "description": "A comprehensive sample record containing every field defined in the ChemBank2 drug form.",

    "ExecutiveSummary": "Aspirin (acetylsalicylic acid) is a widely used analgesic, antipyretic, and anti-inflammatory drug with established antiplatelet activity. First approved in 1899, it remains one of the most prescribed medicines globally with a robust generic market and well-understood safety profile.",

    "ProductOverview": {
        "version": "1.0.0",
        "drugName": "Aspirin Gold",
        "apiName": "Acetylsalicylic Acid",
        "mechanismOfAction": "Irreversible inhibition of cyclooxygenase enzymes (COX-1 and COX-2).",
        "companyName": "ChemBank Pharmaceuticals",
        "approvedIndications": "Pain relief, fever reduction, anti-inflammatory, antiplatelet therapy.",
        "firstApprovedDate": "1899-03-06",
        "firstApprovedRegion": "Germany",
        "dosageForms": "Tablet, Enteric-Coated Tablet, Effervescent Tablet, Capsule",
        "lossOfExclusivity": "2030-01-01",
        "globalAnnualRevenue": "$1.2B"
    },

    "RegulatoryInsights": {
        "regulatoryInsights": "Widely used analgesic and antipyretic. Essential medicine status.",
        "regionalApproval": "Approved in USA, EU, Japan, China, India, and 150+ other countries.",
        "approvalDetails": [
            {
                "drugName": "Aspirin Protective",
                "region": "USA",
                "indication": "Reduction of risk of death and nonfatal stroke",
                "patientSegments": "Adults with prior history",
                "dosageForm": "Enteric Coated Tablet",
                "dose": "81 mg",
                "approvedDate": "1980-01-01",
                "regulatoryBodies": "US FDA"
            },
            {
                "drugName": "Aspirin Flush",
                "region": "Global",
                "indication": "Acute pain relief",
                "patientSegments": "General population",
                "dosageForm": "Effervescent Tablet",
                "dose": "325 mg",
                "approvedDate": "1995-12-31",
                "regulatoryBodies": "Various"
            }
        ],
        "specialDesignations": [
            {
                "designationType": "Orphan Drug",
                "country": "USA",
                "regulatorBody": "US FDA",
                "indication": "Antiplatelet therapy",
                "dateGranted": "2000-06-15",
                "expiryDate": "2027-06-15",
                "withdrawn": "No"
            }
        ],
        "exclusivityInfo": [
            {
                "designationType": "NCE Exclusivity",
                "regulatoryBody": "US FDA",
                "country": "USA",
                "expiryDate": "2028-10-15"
            }
        ],
        "patentInformation": [
            {
                "patentNo": "US 7,654,321",
                "patentExpiration": "2032-05-12",
                "drugSubstance": "Yes",
                "drugProduct": "Yes",
                "submissionDate": "2015-03-10",
                "regulatoryBody": "US FDA"
            }
        ],
        "drugPatents": [
            {
                "patentNo": "US 7,654,321",
                "patentExpiration": "2032-05-12",
                "drugSubstance": "Yes",
                "drugProduct": "Yes",
                "submissionDate": "2015-03-10",
                "regulatoryBody": "US FDA"
            }
        ],
        "additionalInfo": [
            { "consideration": "Monitor for GI bleeding in elderly patients.", "impactForGenericFilers": "Moderate" }
        ]
    },

    "GenericEntrants": {
        "genericEntrants": [
            {
                "anda": "ANDA 012345",
                "companyName": "GenPharma Inc.",
                "dosageDetails": "325mg IR Tablets",
                "approvalType": "Final Approval",
                "andaSubmissionDate": "2010-05-05",
                "tentativeApprovalDate": "2012-06-06",
                "finalApprovalDate": "2013-07-07",
                "ftfExclusivity": "No"
            }
        ],
        "genericsApprovedByEma": [
            {
                "companyName": "EuroGenerics Ltd.",
                "drugName": "Acetasal EU",
                "dosageDetails": "500mg Film Coated",
                "chmpOpinion": "Positive",
                "ecDecision": "Approved",
                "ecApprovalDate": "2015-09-20"
            }
        ]
    },

    "PhysicalChemicalProperties": {
        "innName": "Acetylsalicylic Acid",
        "synonyms": "2-Acetoxybenzoic acid; ASA; o-acetylsalicylic acid; Polopiryn",
        "iupacName": "2-acetyloxybenzoic acid",
        "molecularFormula": "C9H8O4",
        "molecularWeight": "180.16 g/mol",
        "structure": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Aspirin-skeletal.svg/400px-Aspirin-skeletal.svg.png",
        "stereochemistry": "Achiral",
        "bcsClass": "Class I",
        "aqueousSolubility": [
            { "ph": "1.2", "solvent": "0.1N HCl buffer", "solubility": ">100", "units": "mg/mL" },
            { "ph": "4.5", "solvent": "Acetate buffer", "solubility": ">100", "units": "mg/mL" },
            { "ph": "6.8", "solvent": "Phosphate buffer", "solubility": ">100", "units": "mg/mL" }
        ],
        "pka": "3.5",
        "logp": "1.19",
        "logd": "0.90",
        "compendialStatus": "USP",
        "hygroscopicity": "Non-hygroscopic",
        "photostability": "Photostable",
        "particleSizeDistribution": "D10: 12 um, D50: 45 um, D90: 110 um",
        "monoisotopicMass": "180.04 g/mol",
        "solubility": "Soluble in ethanol (1 in 5), ether (1 in 17), and water (1 in 300).",
        "individualSolvent": [
            { "solvent": "Ethanol", "solubility": "200" },
            { "solvent": "Water", "solubility": "3.3" }
        ]
    },

    "DrugSubstance": {
        "availableDmfVendors": [
            { "dmf": "DMF-001", "holder": "Bayer AG", "apiForm": "Form I (Crystalline)", "company": "Bayer AG", "typeOfDmf": "Type II", "yearApproved": "2010", "status": "Active" }
        ],
        "ksmAvailability": [
            { "rsmName": "Salicylic acid", "supplier": "Sigma-Aldrich / Dow Chemical" },
            { "rsmName": "Acetic anhydride", "supplier": "BASF SE" }
        ],
        "manufacturingRoutes": [
            { "step": "Step 1", "description": "Acetylation of salicylic acid using acetic anhydride in a batch reactor at 85°C." },
            { "step": "Step 2", "description": "Recrystallization from water/ethanol to obtain high-purity crystalline drug substance." }
        ],
        "stableAndCommerciallyUsedPolymorphicForm": "Form I (anhydrous crystalline)",
        "drugSubstanceSpecifications": [
            { "testCriteria": "Assay (HPLC)", "acceptanceCriteria": "98.0% - 102.0% on dried basis" },
            { "testCriteria": "Free Salicylic Acid", "acceptanceCriteria": "NMT 0.1%" },
            { "testCriteria": "Loss on Drying", "acceptanceCriteria": "NMT 0.5%" }
        ],
        "dsImpurities": [
            { "name": "Salicylic Acid", "structure": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Salicylic_acid.svg/200px-Salicylic_acid.svg.png", "knownUnknown": "Known" }
        ],
        "forcedDegradationStudies": [
            { "stressCondition": "Acid Hydrolysis", "details": "0.1N HCl, 24h, 60°C", "percentAssay": "98.2", "percentImpurities": "1.8" },
            { "stressCondition": "Base Hydrolysis", "details": "0.1N NaOH, 6h, 25°C", "percentAssay": "95.4", "percentImpurities": "4.6" }
        ],
        "genotoxicImpurities": [
            { "name": "GTI-1", "gtiClass": "Class 5" }
        ],
        "nitrosaminesAssessment": [
            { "nameOfImpurity": "NDMA", "riskOutcome": "Below AI limit (<0.03 ppm)" }
        ],
        "recommendedStorageCondition": "Store below 25°C (77°F); excursions permitted to 15-30°C (59-86°F).",
        "stabilityData": [
            { "condition": "25°C/60% RH", "durationMonths": "36" },
            { "condition": "40°C/75% RH", "durationMonths": "6" }
        ],
        "packaging": "HDPE drum with double LDPE liner and silica gel desiccant",
        "otherInformation": "Moisture sensitive; minimize ambient humidity during processing."
    },

    "DrugProductInformation": {
        "presentation": [
            {
                "strength": "100 mg",
                "dosageForm": "Tablet",
                "shape": "Round",
                "size": "7.0 mm",
                "color": "White",
                "imprint": "ASP100",
                "ndcCode": "0001-0002-01"
            }
        ],
        "containerClosureSystem": [
            { "component": "Bottle", "material": "HDPE", "function": "Primary moisture barrier" },
            { "component": "Closure", "material": "Polypropylene (CRC)", "function": "Child-resistant seal" }
        ],
        "excipientsCompliance": [
            { "excipient": "Microcrystalline Cellulose", "proposedLevel": "20% w/w", "fdaIidMaxLevel": "30% w/w (oral tablet)", "status": "Within IID limit" },
            { "excipient": "Corn Starch", "proposedLevel": "15% w/w", "fdaIidMaxLevel": "25% w/w", "status": "Within IID limit" }
        ],
        "manufacturingTechnology": "Direct Compression",
        "manufacturingProcess": [
            { "step": "Step 1", "description": "Sifting and blending of API and excipients in a V-blender for 15 minutes." },
            { "step": "Step 2", "description": "Compression into tablets using rotary tablet press with 7mm tooling." }
        ],
        "maximumDailyDose": "4000 mg/day (analgesic); 325 mg/day (cardiovascular)",
        "storageAndShippingConditions": "Store at 20°C to 25°C (68°F to 77°F). Protect from moisture and excessive heat.",
        "drugProductSpecifications": [
            { "testCriteria": "Dissolution", "methodTechnique": "USP Apparatus II (Paddle), 50 rpm", "acceptanceCriteria": "Q=80% in 30 min" },
            { "testCriteria": "Assay", "methodTechnique": "HPLC", "acceptanceCriteria": "95.0% - 105.0%" }
        ],
        "dpImpurities": [
            { "name": "Degradant A (Salicylic acid)", "knownUnknown": "Known" }
        ],
        "nitrosamineStatement": "No nitrosamines detected or expected based on raw materials and manufacturing process risk assessment.",
        "stabilityStudies": [
            { "condition": "25°C/60% RH", "durationMonths": "24", "packaging": "HDPE bottle with induction seal" },
            { "condition": "40°C/75% RH", "durationMonths": "6", "packaging": "HDPE bottle with induction seal" }
        ],
        "dissolutionMethod": [
            {
                "apparatus": "USP Apparatus II (Paddle)",
                "media": "900 mL pH 6.8 phosphate buffer",
                "speedRpm": "50",
                "samplingTimes": "10, 20, 30, 45 min",
                "temperature": "37°C ± 0.5°C"
            }
        ],
        "unmetClinicalNeed": "Need for safer chronic low-dose options for geriatric patients."
    },

    "LabelingInformation": {
        "labelingInformation": [
            { "image": "https://via.placeholder.com/600x400?text=Outer+Carton+Aspirin" },
            { "image": "https://via.placeholder.com/600x400?text=Bottle+Label+81mg" }
        ]
    },

    "BaBeStudies": {
        "baBeStudies": [
            {
                "studyType": "Fasting Study",
                "dosageForm": "Tablets",
                "dosageStrength": "500mg",
                "studyDesign": "Crossover",
                "studyCondition": "Fasted",
                "additionalDetails": "Standard BE study for generic submission.",
                "endPoint": "Cmax, AUC"
            }
        ],
        "biowaiverRequest": "Requested based on BCS Class I profile.",
        "biowaiverEligibility": "Conditional",
        "additionalInformation": "Standard BE study protocol complies with USFDA and EMA guidance.",
        "dissolutionTestMethodAndSamplingTimes": "USP <711> Apparatus 2, 50 rpm, 900 mL 0.1N HCl. Times: 5, 15, 30, 45 min."
    },

    "Sources": "WHO Essential Medicines List; FDA Drug Database; EMA Product Information.",

    "Glossary": "ASA (Acetylsalicylic Acid); OTC (Over-the-Counter); BE (Bioequivalence).",

    "Appendices": {
        "appendices": [
            { "appendix": "Stability Report Summary" },
            { "appendix": "Analytical Validation Log" }
        ]
    }
}
