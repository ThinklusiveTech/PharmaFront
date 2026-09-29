import { convertDatesToUnix, fileToBase64 } from "../../utils/utils";
import {
    formatDateForInput,
    extractSources,
    extractGlossary,
    extractAppendices,
} from "../../utils/formUtils";

export { formatDateForInput, extractSources, extractGlossary, extractAppendices };

/**
 * Flattens a stored drug record (nested sections) into
 * the flat key map the form expects.
 */
export const flattenDrug = (drug: any): any => {
    if (!drug) return {};
    const existingId = drug._id || drug.id || drug.original_id;
    const existingVersion = drug.ProductOverview?.version || drug.version || drug.originalVersion || "1.0";
    
    const loeList = drug.ProductOverview?.lossOfExclusivity || drug.lossOfExclusivity || [];
    const firstLoe = Array.isArray(loeList) && loeList.length > 0 ? loeList[0] : {};

    return {
        _id: existingId,
        original_id: existingId,
        originalVersion: existingVersion,
        cid: drug.cid ?? drug.ProductOverview?.cid ?? "",
        createdBy: drug.createdBy ?? drug.ProductOverview?.createdBy ?? "",
        createdByName: drug.createdByName ?? drug.ProductOverview?.createdByName ?? "",
        createdByEmail: drug.createdByEmail ?? drug.ProductOverview?.createdByEmail ?? "",
        createdAt: drug.createdAt ?? drug.ProductOverview?.createdAt ?? (existingId && typeof existingId === 'string' && /^[0-9a-fA-F]{24}$/.test(existingId) ? parseInt(existingId.substring(0, 8), 16) * 1000 : ""),
        updatedAt: drug.updatedAt ?? drug.ProductOverview?.updatedAt ?? drug.createdAt ?? (existingId && typeof existingId === 'string' && /^[0-9a-fA-F]{24}$/.test(existingId) ? parseInt(existingId.substring(0, 8), 16) * 1000 : ""),
        updatedBy: drug.updatedBy ?? "",
        updatedByName: drug.updatedByName ?? "",
        updatedByEmail: drug.updatedByEmail ?? "",

        // Executive Summary
        executiveSummary: typeof drug.ExecutiveSummary === 'object' && drug.ExecutiveSummary !== null
            ? (drug.ExecutiveSummary.executiveSummary ?? drug.ExecutiveSummary.ExecutiveSummary ?? Object.values(drug.ExecutiveSummary)[0] ?? "")
            : (drug.ExecutiveSummary ?? drug.executiveSummary ?? ""),

        // Product Overview
        version: existingVersion,
        drugName: drug.ProductOverview?.drugName ?? drug.drugName ?? drug.name ?? "",
        apiName: drug.ProductOverview?.apiName ?? drug.apiName ?? "",
        mechanismOfAction: drug.ProductOverview?.mechanismOfAction ?? drug.mechanismOfAction ?? "",
        companyName: drug.ProductOverview?.companyName ?? drug.companyName ?? drug.innovator ?? "",
        approvedIndications: drug.ProductOverview?.approvedIndications ?? drug.approvedIndications ?? "",
        therapeuticArea: drug.ProductOverview?.therapeuticArea ?? drug.therapeuticArea ?? "",
        firstApprovedDate: formatDateForInput(drug.ProductOverview?.firstApprovedDate ?? drug.firstApprovedDate ?? drug.ProductOverview?.firstApprovedYear ?? drug.firstApprovedYear),
        firstApprovedRegion: drug.ProductOverview?.firstApprovedRegion ?? drug.firstApprovedRegion ?? "",
        dosageForms: drug.ProductOverview?.dosageForms ?? drug.dosageForms ?? "",
        dosageFormsAndStrengths: Array.isArray(drug.ProductOverview?.dosageFormsAndStrengths)
            ? drug.ProductOverview.dosageFormsAndStrengths
            : (Array.isArray(drug.ProductOverview?.dosageFormAndStrength)
                ? drug.ProductOverview.dosageFormAndStrength
                : (Array.isArray(drug.dosageFormsAndStrengths)
                    ? drug.dosageFormsAndStrengths
                    : (Array.isArray(drug.dosageFormAndStrength) ? drug.dosageFormAndStrength : []))),
        lossOfExclusivity: loeList,
        exclusivityCode: firstLoe.exclusivityCode ?? drug.ProductOverview?.exclusivityCode ?? drug.exclusivityCode ?? "",
        country: firstLoe.country ?? drug.ProductOverview?.country ?? drug.country ?? "",
        regulatoryBody: firstLoe.regulatoryBody ?? drug.ProductOverview?.regulatoryBody ?? drug.regulatoryBody ?? "",
        expiredDate: formatDateForInput(firstLoe.expiredDate ?? drug.ProductOverview?.expiredDate ?? drug.ProductOverview?.lossOfExclusivityDate ?? drug.expiredDate),
        lossOfExclusivityDate: formatDateForInput(firstLoe.expiredDate ?? drug.ProductOverview?.expiredDate ?? drug.ProductOverview?.lossOfExclusivityDate ?? drug.expiredDate),
        timeFromLoeToFirstGenericLaunchMonths: drug.ProductOverview?.timeFromLoeToFirstGenericLaunchMonths ?? drug.timeFromLoeToFirstGenericLaunchMonths ?? drug.ProductOverview?.timeFromLoeToFirstGenericLaunch ?? drug.timeFromLoeToFirstGenericLaunch ?? "",
        globalAnnualRevenue: Array.isArray(drug.ProductOverview?.globalAnnualRevenue)
            ? drug.ProductOverview.globalAnnualRevenue
            : (Array.isArray(drug.globalAnnualRevenue)
                ? drug.globalAnnualRevenue
                : (typeof drug.ProductOverview?.globalAnnualRevenue === 'string' && drug.ProductOverview.globalAnnualRevenue.trim()
                    ? [{ fiscalYear: "", region: "", revenue: drug.ProductOverview.globalAnnualRevenue, currency: "USD" }]
                    : [])),
        marketingRights: Array.isArray(drug.ProductOverview?.marketingRights)
            ? drug.ProductOverview.marketingRights
            : (Array.isArray(drug.ProductOverview?.marketingDistributionRights)
                ? drug.ProductOverview.marketingDistributionRights
                : (Array.isArray(drug.marketingRights) ? drug.marketingRights : [])),

        // Development Feasibility & Timeline
        recommendedRegulatoryPathway: drug.DevelopmentFeasibility?.recommendedRegulatoryPathway ?? drug.recommendedRegulatoryPathway ?? "",
        overallCmcComplexityRating: drug.DevelopmentFeasibility?.overallCmcComplexityRating ?? drug.overallCmcComplexityRating ?? "",
        estimatedDsDevelopmentTimelineMonths: drug.DevelopmentFeasibility?.estimatedDsDevelopmentTimelineMonths ?? drug.estimatedDsDevelopmentTimelineMonths ?? "",
        estimatedDpDevelopmentTimelineMonths: drug.DevelopmentFeasibility?.estimatedDpDevelopmentTimelineMonths ?? drug.estimatedDpDevelopmentTimelineMonths ?? "",
        estimatedTotalTimeToFilingMonths: drug.DevelopmentFeasibility?.estimatedTotalTimeToFilingMonths ?? drug.estimatedTotalTimeToFilingMonths ?? "",
        keyDevelopmentRiskFlags: drug.DevelopmentFeasibility?.keyDevelopmentRiskFlags ?? drug.keyDevelopmentRiskFlags ?? "",
        firstToFile180DayExclusivityOpportunity: drug.DevelopmentFeasibility?.firstToFile180DayExclusivityOpportunity ?? drug.firstToFile180DayExclusivityOpportunity ?? "",
        therapeuticEquivalenceTeCode: drug.DevelopmentFeasibility?.therapeuticEquivalenceTeCode ?? drug.therapeuticEquivalenceTeCode ?? "",
        bdRecommendation: drug.DevelopmentFeasibility?.bdRecommendation ?? drug.bdRecommendation ?? "",

        // Regulatory Insights
        regulatoryInsights: drug.RegulatoryInsights?.regulatoryInsights ?? drug.regulatoryInsights ?? "",
        regionalApproval: drug.RegulatoryInsights?.regionalApproval ?? drug.regionalApproval ?? "",
        approvalDetails: drug.RegulatoryInsights?.approvalDetails ?? drug.approvalDetails ?? [],
        specialDesignations: drug.RegulatoryInsights?.specialDesignations ?? drug.specialDesignations ?? [],
        exclusivityInfo: drug.RegulatoryInsights?.exclusivityInfo ?? drug.exclusivityInfo ?? [],
        patentInformation: drug.RegulatoryInsights?.patentInformation ?? drug.patentInformation ?? drug.RegulatoryInsights?.drugPatents ?? drug.drugPatents ?? [],
        drugPatents: drug.RegulatoryInsights?.patentInformation ?? drug.patentInformation ?? drug.RegulatoryInsights?.drugPatents ?? drug.drugPatents ?? [],
        additionalInfo: drug.RegulatoryInsights?.additionalInfo ?? drug.additionalInfo ?? [],

        // Generic Entrants
        genericEntrants: drug.GenericEntrants?.genericEntrants ?? drug.genericEntrants ?? [],
        genericsApprovedByEma: drug.GenericEntrants?.genericsApprovedByEma ?? drug.genericsApprovedByEma ?? [],

        // Physical & Chemical Properties
        innName: drug.PhysicalChemicalProperties?.innName ?? drug.innName ?? "",
        synonyms: drug.PhysicalChemicalProperties?.synonyms ?? drug.synonyms ?? "",
        iupacName: drug.PhysicalChemicalProperties?.iupacName ?? drug.iupacName ?? "",
        molecularWeight: drug.PhysicalChemicalProperties?.molecularWeight ?? drug.molecularWeight ?? "",
        molecularFormula: drug.PhysicalChemicalProperties?.molecularFormula ?? drug.molecularFormula ?? "",
        bcsClass: drug.PhysicalChemicalProperties?.bcsClass ?? drug.bcsClass ?? "",
        monoisotopicMass: drug.PhysicalChemicalProperties?.monoisotopicMass ?? drug.monoisotopicMass ?? "",
        structure: drug.PhysicalChemicalProperties?.structure ?? drug.structure ?? "",
        stereochemistry: drug.PhysicalChemicalProperties?.stereochemistry ?? drug.stereochemistry ?? "",
        solubility: drug.PhysicalChemicalProperties?.solubility ?? drug.solubility ?? "",
        aqueousSolubility: drug.PhysicalChemicalProperties?.aqueousSolubility ?? drug.aqueousSolubility ?? [],
        pka: drug.PhysicalChemicalProperties?.pka ?? drug.pka ?? "",
        logp: drug.PhysicalChemicalProperties?.logp ?? drug.logp ?? "",
        logd: drug.PhysicalChemicalProperties?.logd ?? drug.logd ?? "",
        compendialStatus: drug.PhysicalChemicalProperties?.compendialStatus ?? drug.compendialStatus ?? "",
        referenceStandard: drug.PhysicalChemicalProperties?.referenceStandard ?? drug.referenceStandard ?? "",
        hygroscopicity: drug.PhysicalChemicalProperties?.hygroscopicity ?? drug.hygroscopicity ?? "",
        photostability: drug.PhysicalChemicalProperties?.photostability ?? drug.photostability ?? "",
        particleSizeDistribution: drug.PhysicalChemicalProperties?.particleSizeDistribution ?? drug.particleSizeDistribution ?? "",
        individualSolvent: drug.PhysicalChemicalProperties?.individualSolvent ?? drug.individualSolvent ?? [],

        // Drug Substance
        availableDmfVendors: drug.DrugSubstance?.availableDmfVendors ?? drug.availableDmfVendors ?? [],
        ksmAvailability: drug.DrugSubstance?.ksmAvailability ?? drug.ksmAvailability ?? drug.DrugSubstance?.regulatoryStartingMaterials ?? (typeof drug.regulatoryStartingMaterials === 'string' ? [{ rsmName: drug.regulatoryStartingMaterials, supplier: "" }] : (drug.regulatoryStartingMaterials ?? [])),
        regulatoryStartingMaterials: drug.DrugSubstance?.regulatoryStartingMaterials ?? drug.regulatoryStartingMaterials ?? "",
        manufacturingRoutes: drug.DrugSubstance?.manufacturingRoutes ?? drug.manufacturingRoutes ?? [],
        stableAndCommerciallyUsedPolymorphicForm: drug.DrugSubstance?.stableAndCommerciallyUsedPolymorphicForm ?? drug.stableAndCommerciallyUsedPolymorphicForm ?? "",
        drugSubstanceSpecifications: drug.DrugSubstance?.drugSubstanceSpecifications ?? drug.drugSubstanceSpecifications ?? [],
        dsImpurities: drug.DrugSubstance?.dsImpurities ?? drug.dsImpurities ?? [],
        forcedDegradationStudies: drug.DrugSubstance?.forcedDegradationStudies ?? drug.forcedDegradationStudies ?? [],
        genotoxicImpurities: drug.DrugSubstance?.genotoxicImpurities ?? drug.genotoxicImpurities ?? [],
        nitrosaminesAssessment: drug.DrugSubstance?.nitrosaminesAssessment ?? drug.nitrosaminesAssessment ?? [],
        recommendedStorageCondition: drug.DrugSubstance?.recommendedStorageCondition ?? drug.recommendedStorageCondition ?? "",
        stabilityData: drug.DrugSubstance?.stabilityData ?? drug.stabilityData ?? drug.DrugSubstance?.stability ?? drug.stability ?? [],
        packaging: drug.DrugSubstance?.packaging ?? drug.packaging ?? "",
        otherInformation: drug.DrugSubstance?.otherInformation ?? drug.otherInformation ?? "",

        // Drug Product Information
        presentation: drug.DrugProductInformation?.presentation ?? drug.presentation ?? drug.DrugProductInformation?.dosageFormAndStrength ?? drug.dosageFormAndStrength ?? [],
        containerClosureSystem: drug.DrugProductInformation?.containerClosureSystem ?? drug.containerClosureSystem ?? [],
        excipientsCompliance: drug.DrugProductInformation?.excipientsCompliance ?? drug.excipientsCompliance ?? [],
        manufacturingTechnology: drug.DrugProductInformation?.manufacturingTechnology ?? drug.manufacturingTechnology ?? "",
        manufacturingProcess: drug.DrugProductInformation?.manufacturingProcess ?? drug.manufacturingProcess ?? [],
        maximumDailyDose: drug.DrugProductInformation?.maximumDailyDose ?? drug.maximumDailyDose ?? "",
        storageAndShippingConditions: drug.DrugProductInformation?.storageAndShippingConditions ?? drug.storageAndShippingConditions ?? "",
        drugProductSpecifications: drug.DrugProductInformation?.drugProductSpecifications ?? drug.drugProductSpecifications ?? [],
        dpImpurities: drug.DrugProductInformation?.dpImpurities ?? drug.dpImpurities ?? [],
        nitrosamineStatement: drug.DrugProductInformation?.nitrosamineStatement ?? drug.nitrosamineStatement ?? "",
        stabilityStudies: drug.DrugProductInformation?.stabilityStudies ?? drug.stabilityStudies ?? [],
        dissolutionMethod: drug.DrugProductInformation?.dissolutionMethod ?? drug.dissolutionMethod ?? drug.DrugProductInformation?.dissolutionStudies ?? drug.dissolutionStudies ?? [],
        dosageFormAndStrength: drug.DrugProductInformation?.dosageFormAndStrength ?? drug.dosageFormAndStrength ?? [],
        supplyChain: drug.DrugProductInformation?.supplyChain ?? drug.supplyChain ?? [],
        shelfLife: drug.DrugProductInformation?.shelfLife ?? drug.shelfLife ?? [],
        pharmacokinetics: drug.DrugProductInformation?.pharmacokinetics ?? drug.pharmacokinetics ?? [],
        formulationChallenges: drug.DrugProductInformation?.formulationChallenges ?? drug.formulationChallenges ?? "",
        excipientsGrade: drug.DrugProductInformation?.excipientsGrade ?? drug.excipientsGrade ?? "",
        unmetClinicalNeed: drug.DrugProductInformation?.unmetClinicalNeed ?? drug.unmetClinicalNeed ?? "",

        // Labeling
        labelingInformation: drug.LabelingInformation?.labelingInformation ?? (Array.isArray(drug.LabelingInformation) ? drug.LabelingInformation : (drug.labelingInformation ?? [])),

        // BA/BE Studies
        baBeStudies: drug.BaBeStudies?.baBeStudies ?? drug.baBeStudies ?? [],
        biowaiverRequest: drug.BaBeStudies?.biowaiverRequest ?? drug.biowaiverRequest ?? "",
        dissolutionTestMethodAndSamplingTimes: drug.BaBeStudies?.dissolutionTestMethodAndSamplingTimes ?? drug.dissolutionTestMethodAndSamplingTimes ?? "",

        // Sources / Glossary / Appendices
        sources: extractSources(drug.Sources ?? drug.sources),
        glossary: extractGlossary(drug.Glossary ?? drug.glossary),
        appendices: extractAppendices(drug.Appendices ?? drug.appendices),
    };
};

/**
 * Recursively scans the object for File objects and converts them to Base64 ImageObjects.
 */
async function processImagesToBase64(data: any): Promise<any> {
    if (!data || typeof data !== 'object') return data;

    if (Array.isArray(data)) {
        return Promise.all(data.map(item => processImagesToBase64(item)));
    }

    const result: any = {};
    for (const key in data) {
        const val = data[key];

        if (val instanceof File) {
            // Convert single File to ImageObject
            const base64 = await fileToBase64(val);
            result[key] = {
                fileName: val.name,
                contentType: val.type,
                imageData: base64
            };
        } else if (Array.isArray(val) && val.length > 0 && val[0] instanceof File) {
            // Convert Array of Files
            const converted = await Promise.all(val.map(async (file: File) => ({
                fileName: file.name,
                contentType: file.type,
                imageData: await fileToBase64(file)
            })));
            result[key] = converted.length === 1 ? converted[0] : converted;
        } else if (typeof val === 'object') {
            result[key] = await processImagesToBase64(val);
        } else {
            result[key] = val;
        }
    }
    return result;
}

/**
 * Formats flat form data into sectioned MongoDB drug structure.
 */
export const formatCreatedDrug = async (formData: any): Promise<any> => {
    const rawResult = {
        _id: formData._id,
        original_id: formData.original_id,
        cid: formData.cid,
        createdBy: formData.createdBy,
        createdByName: formData.createdByName,
        createdByEmail: formData.createdByEmail,
        createdAt: formData.createdAt,
        updatedAt: formData.updatedAt,
        version: formData.version || "1.0",
        ExecutiveSummary: formData.executiveSummary,
        ProductOverview: {
            version: formData.version || "1.0",
            drugName: formData.drugName,
            apiName: formData.apiName,
            mechanismOfAction: formData.mechanismOfAction,
            companyName: formData.companyName,
            approvedIndications: formData.approvedIndications,
            therapeuticArea: formData.therapeuticArea,
            firstApprovedDate: formData.firstApprovedDate,
            firstApprovedRegion: formData.firstApprovedRegion,
            dosageForms: (Array.isArray(formData.dosageFormsAndStrengths) && formData.dosageFormsAndStrengths.length > 0)
                ? formData.dosageFormsAndStrengths.map((d: any) => [d.dosageForm, d.doseStrength].filter(Boolean).join(" ")).filter(Boolean).join(", ")
                : (Array.isArray(formData.dosageFormAndStrength) && formData.dosageFormAndStrength.length > 0
                    ? formData.dosageFormAndStrength.map((d: any) => [d.dosageForm, d.doseStrength].filter(Boolean).join(" ")).filter(Boolean).join(", ")
                    : (formData.dosageForms || "")),
            dosageFormAndStrength: formData.dosageFormsAndStrengths || formData.dosageFormAndStrength || [],
            dosageFormsAndStrengths: formData.dosageFormsAndStrengths || formData.dosageFormAndStrength || [],
            globalAnnualRevenue: formData.globalAnnualRevenue || [],
            marketingRights: formData.marketingRights || formData.marketingDistributionRights || [],
            marketingDistributionRights: formData.marketingRights || formData.marketingDistributionRights || [],
            timeFromLoeToFirstGenericLaunchMonths: formData.timeFromLoeToFirstGenericLaunchMonths ?? formData.timeFromLoeToFirstGenericLaunch ?? "",
            timeFromLoeToFirstGenericLaunch: formData.timeFromLoeToFirstGenericLaunchMonths ?? formData.timeFromLoeToFirstGenericLaunch ?? "",
            createdBy: formData.createdBy,
            createdByName: formData.createdByName,
            createdByEmail: formData.createdByEmail,
            lossOfExclusivity: formData.exclusivityCode || formData.country || formData.regulatoryBody || formData.expiredDate ? [
                {
                    exclusivityCode: formData.exclusivityCode,
                    country: formData.country,
                    regulatoryBody: formData.regulatoryBody,
                    expiredDate: formData.expiredDate,
                }
            ] : (formData.lossOfExclusivity || []),
            lossOfExclusivityDate: formData.expiredDate || formData.lossOfExclusivityDate,
            expiredDate: formData.expiredDate,
        },
        DevelopmentFeasibility: {
            recommendedRegulatoryPathway: formData.recommendedRegulatoryPathway,
            overallCmcComplexityRating: formData.overallCmcComplexityRating,
            estimatedDsDevelopmentTimelineMonths: formData.estimatedDsDevelopmentTimelineMonths,
            estimatedDpDevelopmentTimelineMonths: formData.estimatedDpDevelopmentTimelineMonths,
            estimatedTotalTimeToFilingMonths: formData.estimatedTotalTimeToFilingMonths,
            keyDevelopmentRiskFlags: formData.keyDevelopmentRiskFlags,
            firstToFile180DayExclusivityOpportunity: formData.firstToFile180DayExclusivityOpportunity,
            therapeuticEquivalenceTeCode: formData.therapeuticEquivalenceTeCode,
            bdRecommendation: formData.bdRecommendation,
        },
        RegulatoryInsights: {
            regulatoryInsights: formData.regulatoryInsights,
            regionalApproval: formData.regionalApproval,
            approvalDetails: formData.approvalDetails,
            specialDesignations: formData.specialDesignations,
            exclusivityInfo: formData.exclusivityInfo,
            patentInformation: formData.patentInformation || formData.drugPatents || [],
            drugPatents: formData.patentInformation || formData.drugPatents || [],
            additionalInfo: formData.additionalInfo,
        },
        GenericEntrants: {
            genericEntrants: formData.genericEntrants,
            genericsApprovedByEma: formData.genericsApprovedByEma,
        },
        PhysicalChemicalProperties: {
            innName: formData.innName,
            synonyms: formData.synonyms,
            iupacName: formData.iupacName,
            molecularWeight: formData.molecularWeight,
            molecularFormula: formData.molecularFormula,
            bcsClass: formData.bcsClass,
            monoisotopicMass: formData.monoisotopicMass,
            structure: formData.structure,
            stereochemistry: formData.stereochemistry,
            solubility: formData.solubility,
            aqueousSolubility: formData.aqueousSolubility,
            pka: formData.pka,
            logp: formData.logp,
            logd: formData.logd,
            compendialStatus: formData.compendialStatus,
            referenceStandard: formData.referenceStandard,
            hygroscopicity: formData.hygroscopicity,
            photostability: formData.photostability,
            particleSizeDistribution: formData.particleSizeDistribution,
            individualSolvent: formData.individualSolvent,
        },
        DrugSubstance: {
            availableDmfVendors: formData.availableDmfVendors,
            ksmAvailability: formData.ksmAvailability,
            regulatoryStartingMaterials: formData.regulatoryStartingMaterials || (Array.isArray(formData.ksmAvailability) ? formData.ksmAvailability.map((k: any) => k.rsmName).filter(Boolean).join(", ") : ""),
            manufacturingRoutes: formData.manufacturingRoutes,
            stableAndCommerciallyUsedPolymorphicForm: formData.stableAndCommerciallyUsedPolymorphicForm,
            drugSubstanceSpecifications: formData.drugSubstanceSpecifications,
            dsImpurities: formData.dsImpurities,
            forcedDegradationStudies: formData.forcedDegradationStudies,
            genotoxicImpurities: formData.genotoxicImpurities,
            nitrosaminesAssessment: formData.nitrosaminesAssessment,
            recommendedStorageCondition: formData.recommendedStorageCondition,
            stabilityData: formData.stabilityData,
            stability: formData.stabilityData || formData.stability,
            packaging: formData.packaging,
            otherInformation: formData.otherInformation,
        },
        DrugProductInformation: {
            presentation: formData.presentation,
            containerClosureSystem: formData.containerClosureSystem,
            excipientsCompliance: formData.excipientsCompliance,
            manufacturingTechnology: formData.manufacturingTechnology,
            manufacturingProcess: formData.manufacturingProcess,
            maximumDailyDose: formData.maximumDailyDose,
            storageAndShippingConditions: formData.storageAndShippingConditions,
            drugProductSpecifications: formData.drugProductSpecifications,
            dpImpurities: formData.dpImpurities,
            nitrosamineStatement: formData.nitrosamineStatement,
            stabilityStudies: formData.stabilityStudies,
            dissolutionMethod: formData.dissolutionMethod,
            dosageFormAndStrength: formData.presentation || formData.dosageFormAndStrength,
            supplyChain: formData.supplyChain,
            shelfLife: formData.shelfLife,
            dissolutionStudies: formData.dissolutionMethod || formData.dissolutionStudies,
            pharmacokinetics: formData.pharmacokinetics,
            formulationChallenges: formData.formulationChallenges,
            excipientsGrade: formData.excipientsGrade,
            unmetClinicalNeed: formData.unmetClinicalNeed,
        },
        LabelingInformation: formData.labelingInformation,
        BaBeStudies: {
            baBeStudies: formData.baBeStudies,
            biowaiverRequest: formData.biowaiverRequest,
            dissolutionTestMethodAndSamplingTimes: formData.dissolutionTestMethodAndSamplingTimes,
        },
        Sources: formData.sources,
        Glossary: formData.glossary,
        Appendices: formData.appendices,
    };

    // First convert images to Base64 strings
    const withImages = await processImagesToBase64(rawResult);

    // Then convert dates to Unix
    return convertDatesToUnix(withImages);
};
