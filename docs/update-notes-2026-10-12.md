# Update Notes: 12 October 2026

[Back to README](../README.md)

## Structure and scope

- Introduced the authors' survey before the reading list and organized the main list around Security, Communication Efficiency, and Architecture Design.
- Repeated cross-cutting papers in substantiated groups, while keeping one underlying catalogue record.
- Retained a once-per-publication chronological index; separated selective manuscripts, target-exposed extensions, and unresolved identities.
- Kept only direct FedDG paper entries, with no generic FL security or compression foundations.
- Preserved the pre-existing removal of the old "Borderline / Excluded Papers" section.
- Removed the MIT badge because the repository did not contain a license file; no new license has been imposed.

## Survey archive correction

The previous README used SSRN abstract ID 5199400. The primary [SSRN record](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5467730) identifies the survey as **A Systematic Review on Federated Domain Generalization: Interactions and Trade-offs among Security, Communication Efficiency, and Architecture Design**, by Thinh Nguyen, Trung Phan, Nhi Trinh, Anh Tran, Anh Hoang, Shih Yin Ooi, and Kok-Seng Wong. It was posted on 10 September 2025.

The correct archive is SSRN abstract ID **5467730**, DOI [10.2139/ssrn.5467730](https://doi.org/10.2139/ssrn.5467730). The BibTeX describes that preprint, not an unverified journal publication.

## Seven additional publication/manuscript records

These include older omissions as well as recent work. They are not seven newly released 2026 methods.

### Efficient Federated Domain Translation

- Record: `efficient-fdt-2023`.
- Venue/year: ICLR 2023; status: `published`.
- Primary record: [paper](https://openreview.net/forum?id=uhLAcrAZ9cJ).

Federated pseudodata generation with explicit communication/computation analysis and a downstream domain-generalization evaluation.

### Decentralized Domain Generalization with Style Sharing: Formal Model and Convergence Analysis

- Record: `style-ddg-2026`.
- Venue/year: IEEE INFOCOM 2026; status: `published`.
- Primary record: [paper](https://doi.org/10.1109/INFOCOM59046.2026.11571206).

StyleDDG exchanges models and style information with one-hop peers; a held-out-domain test does not by itself specify new-node attachment.

### Enhancing Federated Domain Generalization by Data Influences on Global Model Update

- Record: `data-influences-2026`.
- Venue/year: IEEE TKDE 2026; status: `published`.
- Primary record: [paper](https://doi.org/10.1109/TKDE.2026.3691040).

Journal article on influence-based aggregation; related to the AAAI 2025 Data Influences entry, not a separate method count.

### Image Style Transfer-Empowered Federated Domain Generalization

- Record: `style-transfer-tip-2026`.
- Venue/year: IEEE TIP 2026; status: `published`.
- Primary record: [paper](https://doi.org/10.1109/TIP.2026.3720516).

Combines local style transfer with server aggregation using an unlabeled public reference dataset; public-data assumptions should be reported.

### FedMGP: Personalized Federated Learning with Multi-Group Text-Visual Prompts

- Record: `fed-mgp-2025`.
- Venue/year: NeurIPS 2025; status: `published`.
- Primary record: [paper](https://proceedings.neurips.cc/paper_files/paper/2025/hash/4a4d5fca4bbb93ead4548854f1f28c0f-Abstract-Conference.html).

Includes domain-generalization evaluation alongside personalization; similarity-guided prompt-group sampling changes the communication payload.

### Reconciling Discriminability and Stability: Task-guided Feature Calibration and Prototype Anchoring for Federated Domain Generalization in Medical Imaging

- Record: `tcpa-online-2026`.
- Venue/year: Expert Systems with Applications 2027; status: `online-first`.
- Primary record: [paper](https://doi.org/10.1016/j.eswa.2026.133985).

Available online 13 August 2026; assigned to the January 2027 issue. Client feature calibration and server prototype anchoring use a frozen pretrained backbone.

### FedCFM: Federated Continual Domain Generalization for Fake Speech Detection via Conditional Flow Matching

- Record: `fed-cfm-2026`.
- Venue/year: arXiv 2026; status: `preprint`.
- Primary record: [paper](https://arxiv.org/abs/2610.01242).

Selective preprint: extends FedDG to continual spoof-domain shifts through conditional-flow generation and cross-client generator exchange. The arXiv comments report IEEE SLT 2026 acceptance; no published proceedings record or priority-tier rank is asserted here.

## Corrected inherited records

The entries below document 25 correction events, some affecting the same record. A metadata correction is not a full protocol or venue-rank audit.

### p061: A Blockchain-Empowered Secure Federated Domain Generalization Framework for Machinery Fault Diagnosis

Existing DOI resolved to steel-plate shuffling, not this FedDG paper.

- paper: `https://doi.org/10.1016/j.aei.2024.102392` → `https://doi.org/10.1016/j.aei.2024.102756`.

Evidence: [primary or publisher-deposited source](https://api.crossref.org/works/10.1016/j.aei.2024.102756).

### p062: FedITA: A Cloud-Edge Collaboration Framework for Domain Generalization-Based Federated Fault Diagnosis of Machine-Level Industrial Motors

Replace the incorrect FedITA DOI with the publisher-deposited record.

- paper: `https://doi.org/10.1016/j.aei.2024.102533` → `https://doi.org/10.1016/j.aei.2024.102853`.

Evidence: [primary or publisher-deposited source](https://api.crossref.org/works/10.1016/j.aei.2024.102853).

### p064: A Federated Distillation Domain Generalization Framework for Machinery Fault Diagnosis with Data Privacy

Existing DOI resolved to a steel-beam displacement paper.

- paper: `https://doi.org/10.1016/j.engappai.2024.108932` → `https://doi.org/10.1016/j.engappai.2023.107765`.

Evidence: [primary or publisher-deposited source](https://api.crossref.org/works/10.1016/j.engappai.2023.107765).

### p070: Fusing Consensus Knowledge: A Federated Learning Method for Fault Diagnosis via Privacy-Preserving Reference Under Domain Shift

Existing DOI resolved to a review of cancer data fusion.

- paper: `https://doi.org/10.1016/j.inffus.2024.102361` → `https://doi.org/10.1016/j.inffus.2024.102290`.

Evidence: [primary or publisher-deposited source](https://api.crossref.org/works/10.1016/j.inffus.2024.102290).

### p042: CUOM: A Causal Unbiased Optimization Method for Federated Domain Generalization

Existing DOI returned not found; title match identifies CUOM.

- paper: `https://doi.org/10.1016/j.knosys.2025.112220` → `https://doi.org/10.1016/j.knosys.2025.114249`.

Evidence: [primary or publisher-deposited source](https://api.crossref.org/works/10.1016/j.knosys.2025.114249).

### p051: Margin-Guided Parameter Decoupling-Consensus Framework for Federated Domain Generalization in Machinery Fault Diagnosis

Existing DOI returned not found; replace by the exact-title record.

- paper: `https://doi.org/10.1016/j.knosys.2025.112585` → `https://doi.org/10.1016/j.knosys.2025.114446`.

Evidence: [primary or publisher-deposited source](https://api.crossref.org/works/10.1016/j.knosys.2025.114446).

### p047: A Gradient Alignment Federated Domain Generalization Framework for Rotating Machinery Fault Diagnosis

Existing DOI returned not found; replace by the exact-title record.

- paper: `https://doi.org/10.1109/JIOT.2025.3552312` → `https://doi.org/10.1109/JIOT.2025.3558163`.

Evidence: [primary or publisher-deposited source](https://api.crossref.org/works/10.1109/JIOT.2025.3558163).

### p048: Lightweight Federated Domain Generalization With Global-Local Contrastive Learning for Machine Fault Diagnosis

Existing DOI returned not found; replace by the exact-title record.

- paper: `https://doi.org/10.1109/JIOT.2025.3569397` → `https://doi.org/10.1109/JIOT.2025.3590721`.

Evidence: [primary or publisher-deposited source](https://api.crossref.org/works/10.1109/JIOT.2025.3590721).

### p081: Collaborative Semantic Aggregation and Calibration for Federated Domain Generalization

Existing DOI returned not found; confirmed by the accepted author manuscript and Crossref.

- paper: `https://doi.org/10.1109/TKDE.2023.3273882` → `https://doi.org/10.1109/TKDE.2023.3271851`.

Evidence: [primary or publisher-deposited source](https://api.crossref.org/works/10.1109/TKDE.2023.3271851).

### p082: Federated Learning for IoT Devices With Domain Generalization

Existing DOI returned not found; confirmed by the author manuscript and institutional record.

- paper: `https://doi.org/10.1109/JIOT.2022.3173489` → `https://doi.org/10.1109/JIOT.2023.3234977`.

Evidence: [primary or publisher-deposited source](https://api.crossref.org/works/10.1109/JIOT.2023.3234977).

### p042: CUOM: A Causal Unbiased Optimization Method for Federated Domain Generalization

Restore the method acronym in the published title.

- title: `A Causal Unbiased Optimization Method for Federated Domain Generalization` → `CUOM: A Causal Unbiased Optimization Method for Federated Domain Generalization`.

Evidence: [primary or publisher-deposited source](https://www.sciencedirect.com/science/article/abs/pii/S0950705125012900).

### p066: Bilateral Proxy Federated Domain Generalization for Privacy-Preserving Medical Image Diagnosis

Use the final issue year consistently with the chronological index.

- year: `2024` → `2025`.

Evidence: [primary or publisher-deposited source](https://doi.org/10.1109/JBHI.2024.3456440).

### p018: FedCA: Federated Domain Generalization for Medical Image Segmentation via Cross-Client Feature Style Transfer and Adaptive Style Alignment

Restore the published FedCA prefix.

- title: `Federated Domain Generalization for Medical Image Segmentation via Cross-Client Feature Style Transfer and Adaptive Style Alignment` → `FedCA: Federated Domain Generalization for Medical Image Segmentation via Cross-Client Feature Style Transfer and Adaptive Style Alignment`.

Evidence: [primary or publisher-deposited source](https://api.crossref.org/works/10.1016/j.eswa.2026.131394).

### p027: Causality Inspired Federated Learning for OOD Generalization

Prefer the official proceedings over the inherited OpenReview identifier.

- paper: `https://openreview.net/forum?id=pWWUJw2qew` → `https://proceedings.mlr.press/v267/zhang25ba.html`.

Evidence: [primary or publisher-deposited source](https://proceedings.mlr.press/v267/zhang25ba.html).

### p039: Multi-Source Collaborative Style Augmentation and Domain-Invariant Learning for Federated Domain Generalization

Remove an unverified code-paper association; the linked arXiv record states IJCAI 2025.

- code: `https://github.com/weiyikang/FedAdvSty` → `(removed)`.

Evidence: [primary or publisher-deposited source](https://arxiv.org/abs/2505.10152).

### p041: PARDON: Privacy-Aware and Robust Federated Domain Generalization

Add the authors' official implementation.

- code: `(not recorded)` → `https://github.com/judydnguyen/PARDON-FedDG`.

Evidence: [primary or publisher-deposited source](https://github.com/judydnguyen/PARDON-FedDG).

### p091: FedSDAF: Leveraging Source Domain Awareness for Enhanced Federated Domain Generalization

Old title did not match FedSDAF; old arXiv link was a mathematics paper.

- title: `FedSDAF: A Federated Learning Framework for Domain Generalization via Sample Difficulty-Aware Forgetting` → `FedSDAF: Leveraging Source Domain Awareness for Enhanced Federated Domain Generalization`.
- paper: `https://arxiv.org/abs/2501.01020` → `https://arxiv.org/abs/2505.02515`.
- code: `(not recorded)` → `https://github.com/pizzareapers/FedSDAF`.

Evidence: [primary or publisher-deposited source](https://arxiv.org/abs/2505.02515).

### p095: Dual Debiasing Learning for Single-Source Federated Domain Generalization under Data Imbalance

Promote the SSRN preprint to its published journal version.

- venue: `SSRN` → `Neurocomputing`.
- year: `2025` → `2026`.
- paper: `https://doi.org/10.2139/ssrn.5774586` → `https://doi.org/10.1016/j.neucom.2026.134251`.
- status: `preprint` → `published`.

Evidence: [primary or publisher-deposited source](https://www.sciencedirect.com/science/article/pii/S0925231226016498).

### p096: FedBPrompt: Federated Domain Generalization Person Re-Identification via Body Distribution Aware Visual Prompts

Replace the unrelated arXiv link and incorrect title with the CVPR main-track publication.

- title: `FedBPrompt: Federated Domain Generalization with Augmented Bag Prompts for Vision-Language Person ReID` → `FedBPrompt: Federated Domain Generalization Person Re-Identification via Body Distribution Aware Visual Prompts`.
- venue: `arXiv` → `CVPR`.
- year: `2026` → `2026`.
- paper: `https://arxiv.org/abs/2601.03723` → `https://openaccess.thecvf.com/content/CVPR2026/html/Xu_FedBPrompt_Federated_Domain_Generalization_Person_Re-Identification_via_Body_Distribution_Aware_CVPR_2026_paper.html`.
- status: `preprint` → `published`.

Evidence: [primary or publisher-deposited source](https://openaccess.thecvf.com/content/CVPR2026/html/Xu_FedBPrompt_Federated_Domain_Generalization_Person_Re-Identification_via_Body_Distribution_Aware_CVPR_2026_paper.html).

### p100: CO-EVO: Co-evolving Semantic Anchoring and Style Diversification for Federated DG-ReID

Old arXiv link resolved to CLAY, an unrelated paper; use the ACL long-paper record.

- title: `CO-EVO: Co-evolving Semantic Anchoring and Style Diversification for Federated Domain Generalization in Person Re-identification` → `CO-EVO: Co-evolving Semantic Anchoring and Style Diversification for Federated DG-ReID`.
- venue: `arXiv` → `ACL`.
- year: `2026` → `2026`.
- paper: `https://arxiv.org/abs/2604.11539` → `https://aclanthology.org/2026.acl-long.1493/`.
- code: `(not recorded)` → `https://github.com/NanYiyuzurn/ACL-LGPS-2026`.
- status: `preprint` → `published`.

Evidence: [primary or publisher-deposited source](https://aclanthology.org/2026.acl-long.1493/).

### p098: Fed-DIP: Federated Domain Generalization by Synergizing Implicit Disentanglement and Context-Aware Prompting

Correct the title and public submission identifier without claiming acceptance.

- title: `FED-DIP: Federated Domain Generalization` → `Fed-DIP: Federated Domain Generalization by Synergizing Implicit Disentanglement and Context-Aware Prompting`.
- paper: `https://openreview.net/forum?id=ROrCLTyQb1` → `https://openreview.net/forum?id=VbmV3rs284`.

Evidence: [primary or publisher-deposited source](https://openreview.net/pdf?id=VbmV3rs284).

### p093: Federated Out-of-Distribution Generalization: A Causal Augmentation View

Do not mislabel an accepted IJCNN paper as merely under review.

- venue: `arXiv` → `IJCNN`.
- status: `preprint` → `other-publication`.

Evidence: [primary or publisher-deposited source](https://arxiv.org/abs/2504.19882).

### p090: FedTAIL: A Federated Learning Framework for Domain Generalization via Tail Manipulation

Quarantine unresolved metadata instead of retaining a misleading active entry.

- status: `preprint` → `needs-verification`.

Evidence: [primary or publisher-deposited source](https://openreview.net/).

### p097: FedSSG: Style-Selective Global Aggregation for Federated Domain Generalization in Medical Image Classification

Quarantine unresolved metadata instead of retaining a misleading active entry.

- status: `preprint` → `needs-verification`.

Evidence: [primary or publisher-deposited source](https://arxiv.org/abs/2601.00934).

### p099: FedHyMoe: Heterogeneous One-Shot Federated Learning with Model-Agnostic Mixture-of-Experts

Quarantine unresolved metadata instead of retaining a misleading active entry.

- status: `preprint` → `needs-verification`.

Evidence: [primary or publisher-deposited source](https://openreview.net/).

## Interpretation safeguards

- FedHAP's hierarchical prompt design is not presented as a client-edge-cloud federation.
- COPA includes DG and DA, with server-based feature-extractor aggregation; its title does not establish server-free training.
- PARDON's privacy-aware style design is not labelled a differential-privacy or cryptographic guarantee.
- FedBPrompt's communication-saving interpretation is limited to its frozen-backbone PFTS regime.
- Unified Alignment Protocol's unlabelled source clients are not labelled as target adaptation without evidence.
- CSAC is not described as communicating only prototypes: its data-free layer-wise model aggregation is distinguished from the calibration mechanism.
- A network anomaly-detection task is not equated with security of the learning process.
- The journal Data Influences article and its related AAAI article are separate publication records, not two independently counted methods.

## Remaining uncertainty

Additional classification checks removed an unsubstantiated security placement for MGPDC, distinguished FedSDAF adapters from prompts, and recorded TreeFedDG's tree topology and inference-time model-chain selection. The author implementation for latent-space inversion was added from its repository, alongside its explicit privacy/communication motivation. FedCFM remains a separately labelled manuscript; its arXiv comments report IEEE SLT 2026 acceptance, but a published proceedings record was not verified.

Three inherited identities are unresolved and withheld from the main reading lists: FedTAIL, FedSSG, and FedHyMoe. The [verification register](verification.md) preserves the questionable original strings and explains the ambiguity. They have not been declared fabricated solely because a matching source was not found.

The publisher metadata of many inherited records was checked, but full-text target-access conditions, all code associations, and all legacy A/A*/Q1 classifications remain outside this completed restructuring. The list should not be used as a fully rank-certified or exhaustive systematic-review corpus.
