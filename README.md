# Awesome Federated Domain Generalization

[![Awesome](https://awesome.re/badge.svg)](https://awesome.re) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)

A curated companion reading list for our survey:

> **A Systematic Review on Federated Domain Generalization: Interactions and Trade-offs among Security, Communication Efficiency, and Architecture Design**
>
> Thinh Nguyen, Trung Phan, Nhi Trinh, Anh Tran, Anh Hoang, Shih Yin Ooi, and Kok-Seng Wong.
>
> [SSRN preprint](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5467730), posted 10 September 2025. [DOI: 10.2139/ssrn.5467730](https://doi.org/10.2139/ssrn.5467730) · [BibTeX](survey.bib)

Federated domain generalization (FedDG) learns from distributed source domains to generalize to unseen domains. Following the survey, this repository organizes the literature around three connected questions: **what information is exposed, what collaboration costs, and how the federation and model are designed**. A paper can therefore appear under several lenses.

This is a living reading list, updated independently of the archived preprint. The archive link identifies the 2025 SSRN version, not a claim of journal acceptance or a later manuscript revision.

**Literature update: 2026-10-12.** We prioritize A/A* main-track conferences and Q1 journals, with selective preprints kept separate. Venue rankings depend on the ranking system, subject category, and year; inherited ranking claims have not all been re-audited. See the [curation policy](docs/curation.md) and [verification register](docs/verification.md). This list is not an exhaustive census.

## Contents

- [Scope and how to read this list](#scope-and-how-to-read-this-list)
- [Security](#security)
- [Communication Efficiency](#communication-efficiency)
- [Architecture Design](#architecture-design)
- [Benchmarks and further reading](#benchmarks-and-further-reading)
- [Papers by year](docs/papers-by-year.md)
- [Selective preprints](docs/preprints.md)
- [Verification register](docs/verification.md)
- [Update notes](docs/update-notes-2026-10-12.md)
- [Contributing](#contributing)
- [Citation](#citation)

## Scope and how to read this list

- **Direct FedDG only.** The method or evaluation must explicitly address generalization from federated source domains to an unseen domain. Generic FL, standalone centralized DG, and general security or compression foundations are not paper entries here.
- **Source-only is the reference protocol.** Strict target-free FedDG does not use target data to train, select, adapt, or choose an attachment topology. Ordinary prediction on an incoming example is not, by itself, adaptation. Known target-exposed and protocol-sensitive extensions are labelled separately.
- **Clients are not necessarily domains.** One client can contain mixed latent domains, and one domain can span clients. Read client-domain mappings when interpreting invariance, aggregation, and held-out-domain results.
- **Themes are analytical lenses, not endorsements.** A privacy-motivated paper is not necessarily a formal privacy defense; a compact model is not necessarily a measured bandwidth saving. A non-centralized name does not establish a server-free implementation.
- **One record, multiple placements.** Titles, links, and publication status come from [data/papers.json](data/papers.json). Repeated thematic entries refer to the same record. Conference and journal articles may be related publications, not independent methods.
- **Verification is explicit.** A publisher metadata check does not constitute a full protocol audit. Per-paper records distinguish inherited metadata from records checked in this update; uncertain identities are held out of the main lists.

Within each subsection, papers are ordered by publication year, newest first. Issue year is used when assigned; online-first availability is labelled separately. Code links are included only when retained from the existing list or verified as an author implementation.

## Security

FedDG avoids centralizing raw training data, but it still exchanges models, statistics, or generated knowledge. This lens separates privacy-motivated designs, coordination integrity, and the information exposed by those exchanged artifacts. Inclusion here does not certify differential privacy, secure aggregation, or resistance to poisoning.

### Privacy-motivated representations and knowledge transfer

These papers directly connect FedDG with privacy or information-exposure concerns. Read their threat models and evaluations before treating the proposed mechanism as a security guarantee.

- **PARDON: Privacy-Aware and Robust Federated Domain Generalization**. ICDCS 2025. [[paper](https://doi.org/10.1109/ICDCS63083.2025.00074)] [[code](https://github.com/judydnguyen/PARDON-FedDG)] [[record](docs/papers-by-year.md#p041)]
- **Federated Domain Generalization with Latent Space Inversion**. ICDM 2025. [[paper](https://doi.org/10.1109/ICDM65498.2025.00072)] [[code](https://github.com/ragjapk/Latent-Space-Inversion)] [[record](docs/papers-by-year.md#p031)]
- **Bilateral Proxy Federated Domain Generalization for Privacy-Preserving Medical Image Diagnosis**. IEEE J-BHI 2025. [[paper](https://doi.org/10.1109/JBHI.2024.3456440)] [[record](docs/papers-by-year.md#p066)]
- **A Federated Distillation Domain Generalization Framework for Machinery Fault Diagnosis with Data Privacy**. Engineering Applications of Artificial Intelligence 2024. [[paper](https://doi.org/10.1016/j.engappai.2023.107765)] [[code](https://github.com/CHAOZHAO-1/FDDG)] [[record](docs/papers-by-year.md#p064)]
- **Federated Domain Generalization: A Secure and Robust Framework for Intelligent Fault Diagnosis**. IEEE TII 2024. [[paper](https://doi.org/10.1109/TII.2023.3296894)] [[code](https://github.com/CHAOZHAO-1/FedDGMC)] [[record](docs/papers-by-year.md#p069)]
- **Federated Adversarial Domain Hallucination for Privacy-Preserving Domain Generalization**. IEEE TMM 2024. [[paper](https://doi.org/10.1109/TMM.2023.3257566)] [[record](docs/papers-by-year.md#p067)]
- **Fusing Consensus Knowledge: A Federated Learning Method for Fault Diagnosis via Privacy-Preserving Reference Under Domain Shift**. Information Fusion 2024. [[paper](https://doi.org/10.1016/j.inffus.2024.102290)] [[record](docs/papers-by-year.md#p070)]
- **Federated Adversarial Domain Generalization Network: A Novel Machinery Fault Diagnosis Method with Data Privacy**. Knowledge-Based Systems 2022. [[paper](https://doi.org/10.1016/j.knosys.2022.109880)] [[record](docs/papers-by-year.md#p086)]

### Coordination integrity and trust

Ledger-backed coordination changes who can validate updates and how aggregation is governed. It does not automatically conceal the contents of an update.

- **A Blockchain-Empowered Secure Federated Domain Generalization Framework for Machinery Fault Diagnosis**. Advanced Engineering Informatics 2024. [[paper](https://doi.org/10.1016/j.aei.2024.102756)] [[record](docs/papers-by-year.md#p061)]

### Shared artifacts and their exposure surface

These are direct FedDG methods exchanging styles, prompts, or domain knowledge. Their inclusion is an analytical connection to the survey, not a claim that every paper proposes or evaluates a privacy defense.

- **Decentralized Domain Generalization with Style Sharing: Formal Model and Convergence Analysis**. IEEE INFOCOM 2026. [[paper](https://doi.org/10.1109/INFOCOM59046.2026.11571206)] [[record](docs/papers-by-year.md#style-ddg-2026)]
- **Federated Domain Generalization via Prompt Learning and Aggregation**. IEEE TIFS 2026. [[paper](https://doi.org/10.1109/TIFS.2026.3655520)] [[record](docs/papers-by-year.md#p014)]
- **Enhancing Foundation Models with Federated Domain Knowledge Infusion**. ICML 2025. [[paper](https://icml.cc/virtual/2025/poster/46374)] [[code](https://github.com/JackqqWang/fedag)] [[record](docs/papers-by-year.md#p028)]
- **DiPrompT: Disentangled Prompt Tuning for Multiple Latent Domain Generalization in Federated Learning**. CVPR 2024. [[paper](https://openaccess.thecvf.com/content/CVPR2024/html/Bai_DiPrompT_Disentangled_Prompt_Tuning_for_Multiple_Latent_Domain_Generalization_in_CVPR_2024_paper.html)] [[record](docs/papers-by-year.md#p053)]
- **StableFDG: Style and Attention Based Learning for Federated Domain Generalization**. NeurIPS 2023. [[paper](https://proceedings.neurips.cc/paper_files/paper/2023/hash/dae8bdacd265399b193e6b43d44a80f0-Abstract-Conference.html)] [[record](docs/papers-by-year.md#p078)]
- **Federated Domain Generalization for Image Recognition via Cross-Client Style Transfer**. WACV 2023. [[paper](https://openaccess.thecvf.com/content/WACV2023/html/Chen_Federated_Domain_Generalization_for_Image_Recognition_via_Cross-Client_Style_Transfer_WACV_2023_paper.html)] [[code](https://github.com/JeremyCJM/CCST)] [[record](docs/papers-by-year.md#p079)]
- **FedDG: Federated Domain Generalization on Medical Image Segmentation via Episodic Learning in Continuous Frequency Space**. CVPR 2021. [[paper](https://openaccess.thecvf.com/content/CVPR2021/html/Liu_FedDG_Federated_Domain_Generalization_on_Medical_Image_Segmentation_via_Episodic_CVPR_2021_paper.html)] [[code](https://github.com/liuquande/FedDG-ELCFS)] [[record](docs/papers-by-year.md#p087)]

## Communication Efficiency

Communication depends on what is sent, how often, and along which links. The papers below connect FedDG to compact model components, shared domain summaries, or alternative coordination. Parameter efficiency alone is not evidence of lower end-to-end bandwidth: count both directions, extra artifacts, rounds, and any peer or edge traffic at comparable unseen-domain performance.

### Prompts, lightweight components, and selective updates

Prompt-based and lightweight designs can reduce the trainable or exchanged state, depending on the actual update regime. Frozen-backbone and full-model settings must not be conflated.

- **Multi-Modal Style Transfer-based Prompt Tuning for Efficient Federated Domain Generalization**. AAAI 2026. [[paper](https://ojs.aaai.org/index.php/AAAI/article/view/39177)] [[record](docs/papers-by-year.md#p006)]
- **FedHAP: Federated Hierarchical Adaptive Prompt Learning for Cross-Domain Generalization**. Applied Soft Computing 2026. [[paper](https://doi.org/10.1016/j.asoc.2026.115193)] [[record](docs/papers-by-year.md#p011)]
- **FedBPrompt: Federated Domain Generalization Person Re-Identification via Body Distribution Aware Visual Prompts**. CVPR 2026. [[paper](https://openaccess.thecvf.com/content/CVPR2026/html/Xu_FedBPrompt_Federated_Domain_Generalization_Person_Re-Identification_via_Body_Distribution_Aware_CVPR_2026_paper.html)] [[record](docs/papers-by-year.md#p096)]
- **Federated Domain Generalization via Prompt Learning and Aggregation**. IEEE TIFS 2026. [[paper](https://doi.org/10.1109/TIFS.2026.3655520)] [[record](docs/papers-by-year.md#p014)]
- **Token-Level Prompt Mixture With Parameter-Free Routing for Federated Domain Generalization**. IEEE TIP 2026. [[paper](https://doi.org/10.1109/TIP.2026.3652431)] [[code](https://github.com/GongShuai8210/TRIP)] [[record](docs/papers-by-year.md#p015)]
- **Embracing Knowledge Integration from the Vision-Language Model for Federated Domain Generalization on Multi-Source Fused Data**. Information Fusion 2026. [[paper](https://doi.org/10.1016/j.inffus.2025.103714)] [[record](docs/papers-by-year.md#p017)]
- **Federated Domain Generalization with Domain-Specific Soft Prompts Generation**. ICCV 2025. [[paper](https://openaccess.thecvf.com/content/ICCV2025/papers/Wu_Federated_Domain_Generalization_with_Domain-specific_Soft_Prompts_Generation_ICCV_2025_paper.pdf)] [[record](docs/papers-by-year.md#p029)]
- **Federated Domain Generalization with Latent Space Inversion**. ICDM 2025. [[paper](https://doi.org/10.1109/ICDM65498.2025.00072)] [[code](https://github.com/ragjapk/Latent-Space-Inversion)] [[record](docs/papers-by-year.md#p031)]
- **Lightweight Federated Domain Generalization With Global-Local Contrastive Learning for Machine Fault Diagnosis**. IEEE IoT-J 2025. [[paper](https://doi.org/10.1109/JIOT.2025.3590721)] [[record](docs/papers-by-year.md#p048)]
- **FedMGP: Personalized Federated Learning with Multi-Group Text-Visual Prompts**. NeurIPS 2025. [[paper](https://proceedings.neurips.cc/paper_files/paper/2025/hash/4a4d5fca4bbb93ead4548854f1f28c0f-Abstract-Conference.html)] [[code](https://github.com/weihao-bo/FedMGP)] [[record](docs/papers-by-year.md#fed-mgp-2025)]
- **DiPrompT: Disentangled Prompt Tuning for Multiple Latent Domain Generalization in Federated Learning**. CVPR 2024. [[paper](https://openaccess.thecvf.com/content/CVPR2024/html/Bai_DiPrompT_Disentangled_Prompt_Tuning_for_Multiple_Latent_Domain_Generalization_in_CVPR_2024_paper.html)] [[record](docs/papers-by-year.md#p053)]

### Styles, prototypes, distilled knowledge, and domain summaries

Compact summaries can convey cross-domain knowledge without transmitting raw images. Check whether models are also exchanged and include the summary-generation and transmission costs.

- **Decentralized Domain Generalization with Style Sharing: Formal Model and Convergence Analysis**. IEEE INFOCOM 2026. [[paper](https://doi.org/10.1109/INFOCOM59046.2026.11571206)] [[record](docs/papers-by-year.md#style-ddg-2026)]
- **DPBGFL: Debiased Prototype Bidirectional Guided Federated Learning for Human Activity Recognition**. Knowledge-Based Systems 2026. [[paper](https://doi.org/10.1016/j.knosys.2026.115895)] [[record](docs/papers-by-year.md#p019)]
- **FedFAT: Frequency Adaptive Interpolation for Federated Domain Generalization on Heterogeneous Medical Images**. Pattern Recognition 2026. [[paper](https://doi.org/10.1016/j.patcog.2025.112459)] [[record](docs/papers-by-year.md#p022)]
- **Unified Alignment Protocol: Making Sense of the Unlabeled Data in New Domains**. WACV 2026. [[paper](https://openaccess.thecvf.com/content/WACV2026/papers/Ahmed_Unified_Alignment_Protocol_Making_Sense_of_the_Unlabeled_Data_in_WACV_2026_paper.pdf)] [[record](docs/papers-by-year.md#p010)]
- **PARDON: Privacy-Aware and Robust Federated Domain Generalization**. ICDCS 2025. [[paper](https://doi.org/10.1109/ICDCS63083.2025.00074)] [[code](https://github.com/judydnguyen/PARDON-FedDG)] [[record](docs/papers-by-year.md#p041)]
- **Federated Graph Learning under Domain Shift with Generalizable Prototypes**. AAAI 2024. [[paper](https://ojs.aaai.org/index.php/AAAI/article/view/29468)] [[record](docs/papers-by-year.md#p057)]
- **A Federated Distillation Domain Generalization Framework for Machinery Fault Diagnosis with Data Privacy**. Engineering Applications of Artificial Intelligence 2024. [[paper](https://doi.org/10.1016/j.engappai.2023.107765)] [[code](https://github.com/CHAOZHAO-1/FDDG)] [[record](docs/papers-by-year.md#p064)]
- **StableFDG: Style and Attention Based Learning for Federated Domain Generalization**. NeurIPS 2023. [[paper](https://proceedings.neurips.cc/paper_files/paper/2023/hash/dae8bdacd265399b193e6b43d44a80f0-Abstract-Conference.html)] [[record](docs/papers-by-year.md#p078)]
- **Federated Domain Generalization for Image Recognition via Cross-Client Style Transfer**. WACV 2023. [[paper](https://openaccess.thecvf.com/content/WACV2023/html/Chen_Federated_Domain_Generalization_for_Image_Recognition_via_Cross-Client_Style_Transfer_WACV_2023_paper.html)] [[code](https://github.com/JeremyCJM/CCST)] [[record](docs/papers-by-year.md#p079)]
- **FedDG: Federated Domain Generalization on Medical Image Segmentation via Episodic Learning in Continuous Frequency Space**. CVPR 2021. [[paper](https://openaccess.thecvf.com/content/CVPR2021/html/Liu_FedDG_Federated_Domain_Generalization_on_Medical_Image_Segmentation_via_Episodic_CVPR_2021_paper.html)] [[code](https://github.com/liuquande/FedDG-ELCFS)] [[record](docs/papers-by-year.md#p087)]

### Communication-aware coordination and topology

Hierarchical, peer-assisted, and translation-based collaboration redistribute computation and traffic. A reduction in server traffic need not mean a reduction in total network traffic.

- **HFedATM: Hierarchical Federated Domain Generalization via Optimal Transport and Regularized Mean Aggregation**. CVPR 2026. [[paper](https://openaccess.thecvf.com/content/CVPR2026/papers/Nguyen_HFedATM_Hierarchical_Federated_Domain_Generalization_via_Optimal_Transport_and_Regularized_CVPR_2026_paper.pdf)] [[record](docs/papers-by-year.md#p009)]
- **Decentralized Domain Generalization with Style Sharing: Formal Model and Convergence Analysis**. IEEE INFOCOM 2026. [[paper](https://doi.org/10.1109/INFOCOM59046.2026.11571206)] [[record](docs/papers-by-year.md#style-ddg-2026)]
- **Heterogeneous Federated Learning: Client-Side Collaborative Update Interdomain Generalization Method for Intelligent Fault Diagnosis**. IEEE IoT-J 2025. [[paper](https://doi.org/10.1109/JIOT.2024.3489617)] [[code](https://github.com/JC952/P2PCHF)] [[record](docs/papers-by-year.md#p046)]
- **FedITA: A Cloud-Edge Collaboration Framework for Domain Generalization-Based Federated Fault Diagnosis of Machine-Level Industrial Motors**. Advanced Engineering Informatics 2024. [[paper](https://doi.org/10.1016/j.aei.2024.102853)] [[record](docs/papers-by-year.md#p062)]
- **Decentralized Federated Domain Generalization with Cluster Alignment for Fault Diagnosis**. Control Engineering Practice 2024. [[paper](https://doi.org/10.1016/j.conengprac.2024.105951)] [[record](docs/papers-by-year.md#p063)]
- **Efficient Federated Domain Translation**. ICLR 2023. [[paper](https://openreview.net/forum?id=uhLAcrAZ9cJ)] [[code](https://github.com/inouye-lab/fedinb)] [[record](docs/papers-by-year.md#efficient-fdt-2023)]

## Architecture Design

Architecture has two levels in this list: the federation topology that connects clients and the model/learning design that transfers knowledge across domains. Keeping them separate avoids calling hierarchical prompts a hierarchical federation, or equating decentralized data ownership with server-free optimization.

### Server-coordinated learning and aggregation

Representative server-coordinated designs establish how source knowledge is aggregated. This is not an exhaustive list of every paper that uses a server.

- **Federated Domain Generalization with Data-Free On-Server Matching Gradient**. ICLR 2025. [[paper](https://openreview.net/forum?id=8TERgu1Lb2)] [[code](https://github.com/skydvn/fedomg)] [[record](docs/papers-by-year.md#p026)]
- **Federated Domain Generalization With Generalization Adjustment**. CVPR 2023. [[paper](https://openaccess.thecvf.com/content/CVPR2023/html/Zhang_Federated_Domain_Generalization_With_Generalization_Adjustment_CVPR_2023_paper.html)] [[code](https://github.com/MediaBrain-SJTU/FedDG-GA)] [[record](docs/papers-by-year.md#p075)]
- **Out-of-Distribution Generalization of Federated Learning via Implicit Invariant Relationships**. ICML 2023. [[paper](https://proceedings.mlr.press/v202/guo23b.html)] [[code](https://github.com/YamingGuo98/FedIIR)] [[record](docs/papers-by-year.md#p077)]
- **Collaborative Semantic Aggregation and Calibration for Federated Domain Generalization**. IEEE TKDE 2023. [[paper](https://doi.org/10.1109/TKDE.2023.3271851)] [[record](docs/papers-by-year.md#p081)]
- **FedSR: A Simple and Effective Domain Generalization Method for Federated Learning**. NeurIPS 2022. [[paper](https://proceedings.neurips.cc/paper_files/paper/2022/hash/fd946a6c99541fddc3d64a3ea39a1bc2-Abstract-Conference.html)] [[code](https://github.com/atuannguyen/FedSR)] [[record](docs/papers-by-year.md#p085)]
- **FedDG: Federated Domain Generalization on Medical Image Segmentation via Episodic Learning in Continuous Frequency Space**. CVPR 2021. [[paper](https://openaccess.thecvf.com/content/CVPR2021/html/Liu_FedDG_Federated_Domain_Generalization_on_Medical_Image_Segmentation_via_Episodic_CVPR_2021_paper.html)] [[code](https://github.com/liuquande/FedDG-ELCFS)] [[record](docs/papers-by-year.md#p087)]
- **Collaborative Optimization and Aggregation for Decentralized Domain Generalization and Adaptation**. ICCV 2021. [[paper](https://openaccess.thecvf.com/content/ICCV2021/html/Wu_Collaborative_Optimization_and_Aggregation_for_Decentralized_Domain_Generalization_and_Adaptation_ICCV_2021_paper.html)] [[record](docs/papers-by-year.md#p088)] — Includes both domain generalization and domain adaptation.

### Hierarchical and cloud-edge federation

Use this category for explicit coordination tiers, not merely a hierarchy inside the neural network.

- **HFedATM: Hierarchical Federated Domain Generalization via Optimal Transport and Regularized Mean Aggregation**. CVPR 2026. [[paper](https://openaccess.thecvf.com/content/CVPR2026/papers/Nguyen_HFedATM_Hierarchical_Federated_Domain_Generalization_via_Optimal_Transport_and_Regularized_CVPR_2026_paper.pdf)] [[record](docs/papers-by-year.md#p009)]
- **FedITA: A Cloud-Edge Collaboration Framework for Domain Generalization-Based Federated Fault Diagnosis of Machine-Level Industrial Motors**. Advanced Engineering Informatics 2024. [[paper](https://doi.org/10.1016/j.aei.2024.102853)] [[record](docs/papers-by-year.md#p062)]

### Decentralized, peer-assisted, and ledger-backed coordination

These designs have different server, peer, and consensus roles. The category intentionally does not assert that every listed system is fully server-free.

- **Decentralized Domain Generalization with Style Sharing: Formal Model and Convergence Analysis**. IEEE INFOCOM 2026. [[paper](https://doi.org/10.1109/INFOCOM59046.2026.11571206)] [[record](docs/papers-by-year.md#style-ddg-2026)]
- **Heterogeneous Federated Learning: Client-Side Collaborative Update Interdomain Generalization Method for Intelligent Fault Diagnosis**. IEEE IoT-J 2025. [[paper](https://doi.org/10.1109/JIOT.2024.3489617)] [[code](https://github.com/JC952/P2PCHF)] [[record](docs/papers-by-year.md#p046)]
- **A Blockchain-Empowered Secure Federated Domain Generalization Framework for Machinery Fault Diagnosis**. Advanced Engineering Informatics 2024. [[paper](https://doi.org/10.1016/j.aei.2024.102756)] [[record](docs/papers-by-year.md#p061)]
- **Decentralized Federated Domain Generalization with Cluster Alignment for Fault Diagnosis**. Control Engineering Practice 2024. [[paper](https://doi.org/10.1016/j.conengprac.2024.105951)] [[record](docs/papers-by-year.md#p063)]

### Foundation models, prompts, and knowledge infusion

Pretrained backbones and prompt modules change where shared knowledge resides and which components need collaboration.

- **Reconciling Discriminability and Stability: Task-guided Feature Calibration and Prototype Anchoring for Federated Domain Generalization in Medical Imaging**. Expert Systems with Applications, online 2026; issue 2027. [[paper](https://doi.org/10.1016/j.eswa.2026.133985)] [[record](docs/papers-by-year.md#tcpa-online-2026)]
- **Multi-Modal Style Transfer-based Prompt Tuning for Efficient Federated Domain Generalization**. AAAI 2026. [[paper](https://ojs.aaai.org/index.php/AAAI/article/view/39177)] [[record](docs/papers-by-year.md#p006)]
- **FedHAP: Federated Hierarchical Adaptive Prompt Learning for Cross-Domain Generalization**. Applied Soft Computing 2026. [[paper](https://doi.org/10.1016/j.asoc.2026.115193)] [[record](docs/papers-by-year.md#p011)]
- **FedBPrompt: Federated Domain Generalization Person Re-Identification via Body Distribution Aware Visual Prompts**. CVPR 2026. [[paper](https://openaccess.thecvf.com/content/CVPR2026/html/Xu_FedBPrompt_Federated_Domain_Generalization_Person_Re-Identification_via_Body_Distribution_Aware_CVPR_2026_paper.html)] [[record](docs/papers-by-year.md#p096)]
- **Federated Domain Generalization via Prompt Learning and Aggregation**. IEEE TIFS 2026. [[paper](https://doi.org/10.1109/TIFS.2026.3655520)] [[record](docs/papers-by-year.md#p014)]
- **Token-Level Prompt Mixture With Parameter-Free Routing for Federated Domain Generalization**. IEEE TIP 2026. [[paper](https://doi.org/10.1109/TIP.2026.3652431)] [[code](https://github.com/GongShuai8210/TRIP)] [[record](docs/papers-by-year.md#p015)]
- **Embracing Knowledge Integration from the Vision-Language Model for Federated Domain Generalization on Multi-Source Fused Data**. Information Fusion 2026. [[paper](https://doi.org/10.1016/j.inffus.2025.103714)] [[record](docs/papers-by-year.md#p017)]
- **Federated Domain Generalization with Domain-Specific Soft Prompts Generation**. ICCV 2025. [[paper](https://openaccess.thecvf.com/content/ICCV2025/papers/Wu_Federated_Domain_Generalization_with_Domain-specific_Soft_Prompts_Generation_ICCV_2025_paper.pdf)] [[record](docs/papers-by-year.md#p029)]
- **Enhancing Foundation Models with Federated Domain Knowledge Infusion**. ICML 2025. [[paper](https://icml.cc/virtual/2025/poster/46374)] [[code](https://github.com/JackqqWang/fedag)] [[record](docs/papers-by-year.md#p028)]
- **FedDGKA: Federated Domain Generalization Using Knowledge Alignment**. IEEE Access 2025. [[paper](https://doi.org/10.1109/ACCESS.2025.3635473)] [[record](docs/papers-by-year.md#p050)]
- **Boosting Federated Domain Generalization: Understanding the Role of Advanced Pretrained Architectures**. IEEE IoT-J 2025. [[paper](https://doi.org/10.1109/JIOT.2025.3579372)] [[record](docs/papers-by-year.md#p044)]
- **Kindle Federated Generalization With Domain Specialized and Invariant Knowledge**. IEEE TIFS 2025. [[paper](https://doi.org/10.1109/TIFS.2025.3550071)] [[record](docs/papers-by-year.md#p049)]
- **FedMGP: Personalized Federated Learning with Multi-Group Text-Visual Prompts**. NeurIPS 2025. [[paper](https://proceedings.neurips.cc/paper_files/paper/2025/hash/4a4d5fca4bbb93ead4548854f1f28c0f-Abstract-Conference.html)] [[code](https://github.com/weihao-bo/FedMGP)] [[record](docs/papers-by-year.md#fed-mgp-2025)]
- **DiPrompT: Disentangled Prompt Tuning for Multiple Latent Domain Generalization in Federated Learning**. CVPR 2024. [[paper](https://openaccess.thecvf.com/content/CVPR2024/html/Bai_DiPrompT_Disentangled_Prompt_Tuning_for_Multiple_Latent_Domain_Generalization_in_CVPR_2024_paper.html)] [[record](docs/papers-by-year.md#p053)]

### Personalization, normalization, and modular models

These methods separate shared and local behavior or assemble multiple components to handle heterogeneous source domains.

- **Federated Domain Generalization with Source Knowledge Preservation via Discriminative Ensembles**. Information Sciences 2026. [[paper](https://doi.org/10.1016/j.ins.2025.122804)] [[record](docs/papers-by-year.md#p024)]
- **Federated Learning with Domain Shift Eraser**. CVPR 2025. [[paper](https://openaccess.thecvf.com/content/CVPR2025/html/Wang_Federated_Learning_with_Domain_Shift_Eraser_CVPR_2025_paper.html)] [[record](docs/papers-by-year.md#p030)]
- **A Unified Personalized Federated Learning Framework Ensuring Domain Generalization**. Expert Systems with Applications 2025. [[paper](https://doi.org/10.1016/j.eswa.2024.125700)] [[record](docs/papers-by-year.md#p043)]
- **Bilateral Proxy Federated Domain Generalization for Privacy-Preserving Medical Image Diagnosis**. IEEE J-BHI 2025. [[paper](https://doi.org/10.1109/JBHI.2024.3456440)] [[record](docs/papers-by-year.md#p066)]
- **Efficiently Assemble Normalization Layers and Regularization for Federated Domain Generalization**. CVPR 2024. [[paper](https://openaccess.thecvf.com/content/CVPR2024/html/Le_Efficiently_Assemble_Normalization_Layers_and_Regularization_for_Federated_Domain_Generalization_CVPR_2024_paper.html)] [[code](https://github.com/lhkhiem28/gPerXAN)] [[record](docs/papers-by-year.md#p054)]
- **Heterogeneous Federated Domain Generalization Network With Common Representation Learning for Cross-Load Machinery Fault Diagnosis**. IEEE TSMC: Systems 2024. [[paper](https://doi.org/10.1109/TSMC.2024.3408058)] [[record](docs/papers-by-year.md#p068)]
- **Collaborative Optimization and Aggregation for Decentralized Domain Generalization and Adaptation**. ICCV 2021. [[paper](https://openaccess.thecvf.com/content/ICCV2021/html/Wu_Collaborative_Optimization_and_Aggregation_for_Decentralized_Domain_Generalization_and_Adaptation_ICCV_2021_paper.html)] [[record](docs/papers-by-year.md#p088)] — Includes both domain generalization and domain adaptation.

### Causal, debiased, and information-constrained representations

These approaches target spurious or domain-specific dependencies. Causal terminology is not by itself a proof of identifiability or invariance.

- **FedSDWC: Federated Synergistic Dual-Representation Weak Causal Learning for OOD**. AAAI 2026. [[paper](https://ojs.aaai.org/index.php/AAAI/article/view/39364)] [[record](docs/papers-by-year.md#p007)]
- **The Aggregated Model is a Confounder: Enabling Deconfounded Federated Learning for OOD Generalization**. IEEE INFOCOM 2026. [[paper](https://doi.org/10.1109/INFOCOM59046.2026.11571547)] [[record](docs/papers-by-year.md#p008)]
- **Dual Debiasing Learning for Single-Source Federated Domain Generalization under Data Imbalance**. Neurocomputing 2026. [[paper](https://doi.org/10.1016/j.neucom.2026.134251)] [[record](docs/papers-by-year.md#p095)]
- **Causality Inspired Federated Learning for OOD Generalization**. ICML 2025. [[paper](https://proceedings.mlr.press/v267/zhang25ba.html)] [[record](docs/papers-by-year.md#p027)]
- **Federated Deconfounding and Debiasing Learning for Out-of-Distribution Generalization**. IJCAI 2025. [[paper](https://www.ijcai.org/proceedings/2025/677)] [[record](docs/papers-by-year.md#p038)]
- **CUOM: A Causal Unbiased Optimization Method for Federated Domain Generalization**. Knowledge-Based Systems 2025. [[paper](https://doi.org/10.1016/j.knosys.2025.114249)] [[record](docs/papers-by-year.md#p042)]
- **Federated Learning via Reweighting Information Bottleneck with Domain Generalization**. Information Sciences 2024. [[paper](https://doi.org/10.1016/j.ins.2024.120825)] [[record](docs/papers-by-year.md#p071)]

### Invariant learning, alignment, and robust optimization

This group covers optimization and representation mechanisms that support the architecture, including gradients, flatness, prototypes, and semantic calibration.

- **Reconciling Discriminability and Stability: Task-guided Feature Calibration and Prototype Anchoring for Federated Domain Generalization in Medical Imaging**. Expert Systems with Applications, online 2026; issue 2027. [[paper](https://doi.org/10.1016/j.eswa.2026.133985)] [[record](docs/papers-by-year.md#tcpa-online-2026)]
- **DFA-FedDG: A Federated Domain Generalization Network Anomaly Detection System Based on Dynamic Feature Alignment**. Computer Networks 2026. [[paper](https://doi.org/10.1016/j.comnet.2026.112356)] [[record](docs/papers-by-year.md#p012)]
- **Image Style Transfer-Empowered Federated Domain Generalization**. IEEE TIP 2026. [[paper](https://doi.org/10.1109/TIP.2026.3720516)] [[record](docs/papers-by-year.md#style-transfer-tip-2026)]
- **Enhancing Federated Domain Generalization by Data Influences on Global Model Update**. IEEE TKDE 2026. [[paper](https://doi.org/10.1109/TKDE.2026.3691040)] [[record](docs/papers-by-year.md#data-influences-2026)]
- **Using Class and Domain Information to Address Domain Shift in Federated Learning**. IEEE TNNLS 2026. [[paper](https://doi.org/10.1109/TNNLS.2026.3658584)] [[record](docs/papers-by-year.md#p025)]
- **DPBGFL: Debiased Prototype Bidirectional Guided Federated Learning for Human Activity Recognition**. Knowledge-Based Systems 2026. [[paper](https://doi.org/10.1016/j.knosys.2026.115895)] [[record](docs/papers-by-year.md#p019)]
- **FedCode: Addressing Federated Domain Shift by Contrastive Feature Decoupling**. Neurocomputing 2026. [[paper](https://doi.org/10.1016/j.neucom.2026.133151)] [[record](docs/papers-by-year.md#p013)]
- **Federated Domain Generalization via Data-Centric Flatness Optimization**. Pattern Recognition 2026. [[paper](https://doi.org/10.1016/j.patcog.2025.113023)] [[record](docs/papers-by-year.md#p023)]
- **Federated Unsupervised Domain Generalization Using Global and Local Alignment of Gradients**. AAAI 2025. [[paper](https://ojs.aaai.org/index.php/AAAI/article/view/34197)] [[code](https://github.com/MahdiyarMM/FedGaLA)] [[record](docs/papers-by-year.md#p034)]
- **Improving Federated Domain Generalization Through Dynamical Weights Calculated from Data Influences on Global Model Update**. AAAI 2025. [[paper](https://ojs.aaai.org/index.php/AAAI/article/view/34468)] [[record](docs/papers-by-year.md#p035)]
- **Federated Domain Generalization with Latent Space Inversion**. ICDM 2025. [[paper](https://doi.org/10.1109/ICDM65498.2025.00072)] [[code](https://github.com/ragjapk/Latent-Space-Inversion)] [[record](docs/papers-by-year.md#p031)]
- **Federated Domain Generalization with Data-Free On-Server Matching Gradient**. ICLR 2025. [[paper](https://openreview.net/forum?id=8TERgu1Lb2)] [[code](https://github.com/skydvn/fedomg)] [[record](docs/papers-by-year.md#p026)]
- **A Gradient Alignment Federated Domain Generalization Framework for Rotating Machinery Fault Diagnosis**. IEEE IoT-J 2025. [[paper](https://doi.org/10.1109/JIOT.2025.3558163)] [[record](docs/papers-by-year.md#p047)]
- **Lightweight Federated Domain Generalization With Global-Local Contrastive Learning for Machine Fault Diagnosis**. IEEE IoT-J 2025. [[paper](https://doi.org/10.1109/JIOT.2025.3590721)] [[record](docs/papers-by-year.md#p048)]
- **Federated Domain Generalization with Decision Insight Matrix**. IJCAI 2025. [[paper](https://www.ijcai.org/proceedings/2025/633)] [[record](docs/papers-by-year.md#p037)]
- **Margin-Guided Parameter Decoupling-Consensus Framework for Federated Domain Generalization in Machinery Fault Diagnosis**. Knowledge-Based Systems 2025. [[paper](https://doi.org/10.1016/j.knosys.2025.114446)] [[record](docs/papers-by-year.md#p051)]
- **Federated Graph Learning under Domain Shift with Generalizable Prototypes**. AAAI 2024. [[paper](https://ojs.aaai.org/index.php/AAAI/article/view/29468)] [[record](docs/papers-by-year.md#p057)]
- **Multi-Source Collaborative Gradient Discrepancy Minimization for Federated Domain Generalization**. AAAI 2024. [[paper](https://ojs.aaai.org/index.php/AAAI/article/view/29510)] [[code](https://github.com/weiyikang/FedGM)] [[record](docs/papers-by-year.md#p055)]
- **Local and Global Flatness for Federated Domain Generalization**. ECCV 2024. [[paper](https://doi.org/10.1007/978-3-031-73010-8_5)] [[code](https://github.com/cnyanhao/FedLGF)] [[record](docs/papers-by-year.md#p059)]
- **Contrastive-Enhanced Domain Generalization With Federated Learning**. IEEE TAI 2024. [[paper](https://doi.org/10.1109/TAI.2023.3298297)] [[record](docs/papers-by-year.md#p065)]
- **Federated Domain Generalization: A Secure and Robust Framework for Intelligent Fault Diagnosis**. IEEE TII 2024. [[paper](https://doi.org/10.1109/TII.2023.3296894)] [[code](https://github.com/CHAOZHAO-1/FedDGMC)] [[record](docs/papers-by-year.md#p069)]
- **RFDG: Reinforcement Federated Domain Generalization**. IEEE TKDE 2024. [[paper](https://doi.org/10.1109/TKDE.2023.3301036)] [[record](docs/papers-by-year.md#p073)]
- **FOOGD: Federated Collaboration for Both Out-of-Distribution Generalization and Detection**. NeurIPS 2024. [[paper](https://papers.nips.cc/paper_files/paper/2024/hash/efd1e27afcb94addd03b9e14c8d9f78f-Abstract-Conference.html)] [[code](https://github.com/XeniaLLL/FOOGD-main)] [[record](docs/papers-by-year.md#p060)]
- **Federated Domain Generalization With Generalization Adjustment**. CVPR 2023. [[paper](https://openaccess.thecvf.com/content/CVPR2023/html/Zhang_Federated_Domain_Generalization_With_Generalization_Adjustment_CVPR_2023_paper.html)] [[code](https://github.com/MediaBrain-SJTU/FedDG-GA)] [[record](docs/papers-by-year.md#p075)]
- **Rethinking Federated Learning With Domain Shift: A Prototype View**. CVPR 2023. [[paper](https://doi.org/10.1109/CVPR52729.2023.01565)] [[code](https://github.com/WenkeHuang/RethinkFL)] [[record](docs/papers-by-year.md#p076)]
- **Out-of-Distribution Generalization of Federated Learning via Implicit Invariant Relationships**. ICML 2023. [[paper](https://proceedings.mlr.press/v202/guo23b.html)] [[code](https://github.com/YamingGuo98/FedIIR)] [[record](docs/papers-by-year.md#p077)]
- **Federated Learning for IoT Devices With Domain Generalization**. IEEE IoT-J 2023. [[paper](https://doi.org/10.1109/JIOT.2023.3234977)] [[record](docs/papers-by-year.md#p082)]
- **Collaborative Semantic Aggregation and Calibration for Federated Domain Generalization**. IEEE TKDE 2023. [[paper](https://doi.org/10.1109/TKDE.2023.3271851)] [[record](docs/papers-by-year.md#p081)]
- **Federated Domain Generalization with Global Robust Model Aggregation Strategy for Bearing Fault Diagnosis**. Measurement Science and Technology 2023. [[paper](https://doi.org/10.1088/1361-6501/ace841)] [[record](docs/papers-by-year.md#p084)]
- **Federated Adversarial Domain Generalization Network: A Novel Machinery Fault Diagnosis Method with Data Privacy**. Knowledge-Based Systems 2022. [[paper](https://doi.org/10.1016/j.knosys.2022.109880)] [[record](docs/papers-by-year.md#p086)]
- **FedSR: A Simple and Effective Domain Generalization Method for Federated Learning**. NeurIPS 2022. [[paper](https://proceedings.neurips.cc/paper_files/paper/2022/hash/fd946a6c99541fddc3d64a3ea39a1bc2-Abstract-Conference.html)] [[code](https://github.com/atuannguyen/FedSR)] [[record](docs/papers-by-year.md#p085)]

### Domain diversity, augmentation, and task-specific designs

These methods enrich source-domain variation or specialize the learning design for graphs, medical imaging, re-identification, time series, and other direct FedDG settings.

- **CO-EVO: Co-evolving Semantic Anchoring and Style Diversification for Federated DG-ReID**. ACL 2026. [[paper](https://aclanthology.org/2026.acl-long.1493/)] [[code](https://github.com/NanYiyuzurn/ACL-LGPS-2026)] [[record](docs/papers-by-year.md#p100)]
- **Image Style Transfer-Empowered Federated Domain Generalization**. IEEE TIP 2026. [[paper](https://doi.org/10.1109/TIP.2026.3720516)] [[record](docs/papers-by-year.md#style-transfer-tip-2026)]
- **FDGReID: Federated Domain Generalization for Person Re-identification**. Machine Learning 2026. [[paper](https://link.springer.com/article/10.1007/s10994-025-06974-z)] [[record](docs/papers-by-year.md#p016)]
- **FedSemiDG: Domain Generalized Federated Semi-Supervised Medical Image Segmentation**. Medical Image Analysis 2026. [[paper](https://doi.org/10.1016/j.media.2026.104096)] [[record](docs/papers-by-year.md#p020)]
- **Advancing Federated Domain Generalization in Ophthalmology: Vision Enhancement and Consistency Assurance for Multicenter Fundus Image Segmentation**. Pattern Recognition 2026. [[paper](https://doi.org/10.1016/j.patcog.2025.111993)] [[record](docs/papers-by-year.md#p021)]
- **FedFAT: Frequency Adaptive Interpolation for Federated Domain Generalization on Heterogeneous Medical Images**. Pattern Recognition 2026. [[paper](https://doi.org/10.1016/j.patcog.2025.112459)] [[record](docs/papers-by-year.md#p022)]
- **Unified Alignment Protocol: Making Sense of the Unlabeled Data in New Domains**. WACV 2026. [[paper](https://openaccess.thecvf.com/content/WACV2026/papers/Ahmed_Unified_Alignment_Protocol_Making_Sense_of_the_Unlabeled_Data_in_WACV_2026_paper.pdf)] [[record](docs/papers-by-year.md#p010)]
- **FedDiG: Frequency-Guided Diffusion Diversity for Generalizable Federated Time Series Classification**. WWW 2026. [[paper](https://dl.acm.org/doi/10.1145/3774904.3792329)] [[record](docs/papers-by-year.md#p005)]
- **FedGOG: Federated Graph Out-of-Distribution Generalization**. AAAI 2025. [[paper](https://ojs.aaai.org/index.php/AAAI/article/view/34459)] [[record](docs/papers-by-year.md#p036)]
- **Federated Graph Out-of-Distribution Generalization via Representation Propagation and Scattering**. ICDM 2025. [[paper](https://doi.org/10.1109/ICDM65498.2025.00107)] [[record](docs/papers-by-year.md#p032)]
- **Federated Domain Generalization for Fault Diagnosis: Cross-Client Style Integration and Dual Alignment Representation**. IEEE IoT-J 2025. [[paper](https://doi.org/10.1109/JIOT.2025.3551339)] [[record](docs/papers-by-year.md#p045)]
- **Multi-Source Collaborative Style Augmentation and Domain-Invariant Learning for Federated Domain Generalization**. IJCAI 2025. [[paper](https://arxiv.org/abs/2505.10152)] [[record](docs/papers-by-year.md#p039)]
- **Diversity-Authenticity Co-constrained Stylization for Federated Domain Generalization in Person Re-identification**. AAAI 2024. [[paper](https://ojs.aaai.org/index.php/AAAI/article/view/28468)] [[record](docs/papers-by-year.md#p056)]
- **A Federated Distillation Domain Generalization Framework for Machinery Fault Diagnosis with Data Privacy**. Engineering Applications of Artificial Intelligence 2024. [[paper](https://doi.org/10.1016/j.engappai.2023.107765)] [[code](https://github.com/CHAOZHAO-1/FDDG)] [[record](docs/papers-by-year.md#p064)]
- **Federated Analytics With Data Augmentation in Domain Generalization Toward Future Networks**. IEEE TMLCN 2024. [[paper](https://doi.org/10.1109/TMLCN.2024.3393892)] [[record](docs/papers-by-year.md#p074)]
- **Federated Adversarial Domain Hallucination for Privacy-Preserving Domain Generalization**. IEEE TMM 2024. [[paper](https://doi.org/10.1109/TMM.2023.3257566)] [[record](docs/papers-by-year.md#p067)]
- **Fusing Consensus Knowledge: A Federated Learning Method for Fault Diagnosis via Privacy-Preserving Reference Under Domain Shift**. Information Fusion 2024. [[paper](https://doi.org/10.1016/j.inffus.2024.102290)] [[record](docs/papers-by-year.md#p070)]
- **Federated Domain Generalization for Condition Monitoring in Ultrasonic Metal Welding**. Journal of Manufacturing Systems 2024. [[paper](https://doi.org/10.1016/j.jmsy.2024.09.023)] [[code](https://github.com/AhmadrezaNia/FDG-CM)] [[record](docs/papers-by-year.md#p072)]
- **Efficient Federated Domain Translation**. ICLR 2023. [[paper](https://openreview.net/forum?id=uhLAcrAZ9cJ)] [[code](https://github.com/inouye-lab/fedinb)] [[record](docs/papers-by-year.md#efficient-fdt-2023)]
- **Federated Condition Generalization on Low-Dose CT Reconstruction via Cross-Domain Learning**. MICCAI 2023. [[paper](https://doi.org/10.1007/978-3-031-43898-1_5)] [[record](docs/papers-by-year.md#p080)]
- **StableFDG: Style and Attention Based Learning for Federated Domain Generalization**. NeurIPS 2023. [[paper](https://proceedings.neurips.cc/paper_files/paper/2023/hash/dae8bdacd265399b193e6b43d44a80f0-Abstract-Conference.html)] [[record](docs/papers-by-year.md#p078)]
- **Federated Domain Generalization for Image Recognition via Cross-Client Style Transfer**. WACV 2023. [[paper](https://openaccess.thecvf.com/content/WACV2023/html/Chen_Federated_Domain_Generalization_for_Image_Recognition_via_Cross-Client_Style_Transfer_WACV_2023_paper.html)] [[code](https://github.com/JeremyCJM/CCST)] [[record](docs/papers-by-year.md#p079)]
- **FedDG: Federated Domain Generalization on Medical Image Segmentation via Episodic Learning in Continuous Frequency Space**. CVPR 2021. [[paper](https://openaccess.thecvf.com/content/CVPR2021/html/Liu_FedDG_Federated_Domain_Generalization_on_Medical_Image_Segmentation_via_Episodic_CVPR_2021_paper.html)] [[code](https://github.com/liuquande/FedDG-ELCFS)] [[record](docs/papers-by-year.md#p087)]

### Deployment-sensitive and target-exposed FedDG extensions

Keep these extensions separate when comparing source-only generalization. Test-time adaptation, target-based model selection, and source-only prediction are different experimental protocols.

- **FedCA: Federated Domain Generalization for Medical Image Segmentation via Cross-Client Feature Style Transfer and Adaptive Style Alignment**. Expert Systems with Applications 2026. [[paper](https://doi.org/10.1016/j.eswa.2026.131394)] [[record](docs/papers-by-year.md#p018)] — Deployment protocol requires inspection.
- **TTA-FedDG: Leveraging Test-Time Adaptation to Address Federated Domain Generalization**. AAAI 2025. [[paper](https://ojs.aaai.org/index.php/AAAI/article/view/34053)] [[code](https://github.com/520haoyuanliang/TTA-FedDG)] [[record](docs/papers-by-year.md#p033)] — Target-exposed / test-time adaptation.
- **BTFL: A Bayesian-based Test-Time Generalization Method for Internal and External Data Distributions in Federated Learning**. KDD 2025. [[paper](https://doi.org/10.1145/3690624.3709309)] [[record](docs/papers-by-year.md#p040)] — Deployment protocol requires inspection.
- **Feature Diversification and Adaptation for Federated Domain Generalization**. ECCV 2024. [[paper](https://www.ecva.net/papers/eccv_2024/papers_ECCV/papers/09073.pdf)] [[record](docs/papers-by-year.md#p058)] — Target-exposed / test-time adaptation.

**Test-time attachment matters.** For an unseen client, report which existing nodes or components it can use, how neighbors or clusters are chosen, whether target data influence that choice, and whether any local adaptation occurs. Training topology alone does not define this deployment rule. Do not infer an attachment policy from a held-out-domain accuracy result.

## Benchmarks and further reading

These resources support comparison and context; they are not additional FedDG method entries.

- **Benchmarking Algorithms for Federated Domain Generalization**. ICLR 2024. [[paper](https://proceedings.iclr.cc/paper_files/paper/2024/hash/d4ee9e805cc90f636c66778225181036-Abstract-Conference.html)] [[code](https://github.com/inouye-lab/FedDG_Benchmark)] [[record](docs/papers-by-year.md#p052)]
- **Enhancing Domain Generalization in the AI-Based Analysis of Chest Radiographs with Federated Learning**. Scientific Reports 2023. [[paper](https://doi.org/10.1038/s41598-023-49956-8)] [[code](https://github.com/tayebiarasteh/FLdomain)] [[record](docs/papers-by-year.md#p083)]
- **Federated Domain Generalization: A Survey**. Proceedings of the IEEE, 2025. [[paper](https://doi.org/10.1109/JPROC.2025.3596173)] — a complementary direct FedDG survey.
- **DomainBed**. [[code](https://github.com/facebookresearch/DomainBed)] — a centralized DG evaluation toolkit, not a federated benchmark.

For the complete retained publication index, use [papers by year](docs/papers-by-year.md). [Selective preprints](docs/preprints.md) are deliberately separate from published work; unresolved identities and lower-priority publication records are documented in the [verification register](docs/verification.md).

## Contributing

Please follow [CONTRIBUTING.md](CONTRIBUTING.md): provide a primary source, explain the direct FedDG setting, and justify each thematic placement. Edit the catalogue first, then regenerate the views with `node scripts/build.mjs --write`. Validate with `node scripts/build.mjs`.

## Citation

If this survey or its organization helps your work, please cite the archived survey. The BibTeX below is based on the verified SSRN record; [download it here](survey.bib).

```bibtex
@misc{nguyen2025systematic,
  author = {Nguyen, Thinh and Phan, Trung and Trinh, Nhi and Tran, Anh and Hoang, Anh and Ooi, Shih Yin and Wong, Kok-Seng},
  title = {A Systematic Review on Federated Domain Generalization: Interactions and Trade-offs among Security, Communication Efficiency, and Architecture Design},
  year = {2025},
  month = sep,
  doi = {10.2139/ssrn.5467730},
  url = {https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5467730},
  note = {SSRN preprint, posted 10 September 2025}
}
```
