# Awesome Federated Domain Generalization (FedDG)

[![Awesome](https://awesome.re/badge.svg)](https://awesome.re)
![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)
![License](https://img.shields.io/badge/license-MIT-black.svg)
![Stars](https://img.shields.io/github/stars/lucaznguyen/awesome-federated-domain-generalization?style=social)

A curated list of **Federated Domain Generalization (FedDG)** papers, surveys, benchmarks, code, and related resources.

**Core inclusion policy:** only papers that are relevant to broad FedDG and are published in **CORE A*/A main-track conferences** or **Q1 journals** are included in the main paper list.

**Format rule:**  
`- [Tag1][Tag2][Tag3] Title (**Venue Year**) [[paper](link)] [[code](link)]`

If code is unavailable, omit the code tag.

---

## What is Federated Domain Generalization?

**Federated Learning (FL)** enables multiple clients, such as hospitals, mobile devices, factories, or institutions, to collaboratively train models without sharing raw data.

**Domain Generalization (DG)** aims to train models on several source domains so that they generalize well to unseen target domains.

**Federated Domain Generalization (FedDG)** combines these two settings. It studies how to learn a model from decentralized clients, where each client may represent a different domain, such that the learned model generalizes to unseen domains, unseen clients, unseen hospitals, unseen scanners, unseen sites, unseen environments, or out-of-distribution data.

FedDG is especially important for applications such as medical imaging, autonomous systems, fault diagnosis, IoT, graph learning, time series, and foundation models, where deployment environments may differ substantially from training clients.

### FedDG vs. Related Settings

- **Standard FL:** usually focuses on non-IID client data but may not explicitly evaluate unseen-domain generalization.
- **Centralized DG:** assumes data from multiple source domains can be pooled, which violates FL privacy constraints.
- **Federated Domain Adaptation (FedDA):** usually uses target-domain data during training or adaptation. FedDA papers are listed separately in this repository.
- **Test-Time Adaptation / Generalization:** included only when explicitly connected to FedDG or unseen-domain evaluation.

---

## Inclusion Policy

Core papers must satisfy both conditions:

1. The paper is relevant to broad FedDG, including:
   - Federated Domain Generalization.
   - Federated learning with unseen-domain or unseen-client generalization.
   - Federated out-of-distribution generalization.
   - Federated graph OOD generalization.
   - Federated test-time generalization or adaptation under unseen-domain evaluation.
   - Decentralized domain generalization.
   - Privacy-preserving domain generalization in federated or decentralized settings.
   - Medical, IoT, fault diagnosis, NLP, graph, time-series, multimodal, or foundation-model FedDG.

2. The venue is one of:
   - CORE A* conference, main track only.
   - CORE A conference, main track only.
   - Q1 journal according to SCImago SJR or JCR.

### Excluded from Core List

The following are not included in the core paper list:

- Workshop-only papers.
- arXiv-only papers.
- Under-review papers.
- Standard non-IID FL papers without explicit unseen-domain or domain-shift generalization.
- Centralized DG papers without FL or decentralized learning.
- Federated Domain Adaptation papers that require target-domain data, unless they also evaluate true DG.
- Papers from conferences below CORE A or journals below Q1.

Preprints and FedDA papers are tracked in separate sections.

---

## Tags

### Domain Tags

`[CV]` `[Medical]` `[Graph]` `[NLP]` `[FM]` `[Multimodal]` `[IoT]` `[Fault Diagnosis]` `[Time Series]` `[General]`

### Task Tags

`[Classification]` `[Segmentation]` `[Detection]` `[Reconstruction]` `[Diagnosis]` `[OOD]` `[TTA]` `[DA]` `[Benchmark]` `[Survey]`

### Method Tags

`[Alignment]` `[StyleAug]` `[FeatureAug]` `[Gradient]` `[Optimization]` `[Aggregation]` `[Personalization]` `[Prompt]` `[Foundation Model]` `[Causal]` `[Frequency]` `[Normalization]` `[Sharpness]` `[Data-Free]` `[Decentralized]`

---

## Related Awesome Repositories

- Awesome Federated Machine Learning [[github](https://github.com/innovation-cat/Awesome-Federated-Machine-Learning)]
- Awesome Domain Generalization [[github](https://github.com/junkunyuan/Awesome-Domain-Generalization)]
- OOD Machine Learning: Detection, Robustness, and Generalization [[github](https://github.com/huytransformer/Awesome-Out-Of-Distribution-Detection)]

---

## Surveys

- [Survey][Preprint] Federated Domain Generalization: A Survey (**arXiv 2023/2024**) [[paper](https://arxiv.org/abs/2306.01334)]
- [Survey][Benchmark] Federated Learning for Generalization, Robustness, Fairness: A Survey and Benchmark (**IEEE TPAMI 2024**) [[paper](https://arxiv.org/abs/2311.06750)]
- [Survey][Preprint] A Systematic Review on Federated Domain Generalization: Interactions and Trade-offs among Security, Communication Efficiency, and Architecture Design (**SSRN 2025**) [[paper](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5199400)]

---

## Benchmarks

- [Benchmark][Preprint] Federated Domain Generalization Benchmark (**OpenReview 2024**) [[paper](https://openreview.net/forum?id=wprSv7ichW)] [[code](https://github.com/inouye-lab/FedDG_Benchmark)]
- [Benchmark] DomainBed (**Resource**) [[github](https://github.com/facebookresearch/DomainBed)]
- [Survey][Benchmark] Federated Learning for Generalization, Robustness, Fairness: A Survey and Benchmark (**IEEE TPAMI 2024**) [[paper](https://arxiv.org/abs/2311.06750)]

---

# Papers by Year

## 2026

- [Time Series][Classification][Frequency] FedDiG: Frequency-Guided Diffusion Diversity for Generalizable Federated Time Series Classification (**WWW 2026**) [[paper](https://dl.acm.org/doi/10.1145/3774904.3792329)]
- [CV][FM][Prompt][StyleAug] Multi-Modal Style Transfer-based Prompt Tuning for Efficient Federated Domain Generalization (**AAAI 2026**) [[paper](https://ojs.aaai.org/index.php/AAAI/article/view/39177)]
- [CV][Alignment][OOD] Unified Alignment Protocol: Making Sense of the Unlabeled Data in New Domains (**WACV 2026**) [[paper](https://openaccess.thecvf.com/content/WACV2026/papers/Ahmed_Unified_Alignment_Protocol_Making_Sense_of_the_Unlabeled_Data_in_WACV_2026_paper.pdf)]
- [CV][Prompt][FM] Token-Level Prompt Mixture With Parameter-Free Routing for Federated Domain Generalization (**IEEE TIP 2026**) [[paper](https://doi.org/10.1109/TIP.2026.3652431)] [[code](https://github.com/GongShuai8210/TRIP)]
- [CV][ReID][StyleAug] FDGReID: Federated Domain Generalization for Person Re-identification (**Machine Learning 2026**) [[paper](https://link.springer.com/article/10.1007/s10994-025-06974-z)]
- [Medical][Segmentation][StyleAug][Alignment] Federated Domain Generalization for Medical Image Segmentation via Cross-Client Feature Style Transfer and Adaptive Style Alignment (**Expert Systems with Applications 2026**) [[paper](https://doi.org/10.1016/j.eswa.2026.131394)]
- [Medical][Segmentation][Alignment] Advancing Federated Domain Generalization in Ophthalmology: Vision Enhancement and Consistency Assurance for Multicenter Fundus Image Segmentation (**Pattern Recognition 2026**) [[paper](https://doi.org/10.1016/j.patcog.2025.111993)]
- [General][Optimization][Sharpness] Federated Domain Generalization via Data-Centric Flatness Optimization (**Pattern Recognition 2026**) [[paper](https://doi.org/10.1016/j.patcog.2025.113023)]
- [General][Aggregation] Federated Domain Generalization with Source Knowledge Preservation via Discriminative Ensembles (**Information Sciences 2026**) [[paper](https://doi.org/10.1016/j.ins.2025.122804)]

---

## 2025

- [General][Gradient][Data-Free] Federated Domain Generalization with Data-Free On-Server Matching Gradient (**ICLR 2025**) [[paper](https://openreview.net/forum?id=8TERgu1Lb2)] [[code](https://github.com/skydvn/fedomg)]
- [FM][Foundation Model][Alignment] Enhancing Foundation Models with Federated Domain Knowledge Infusion (**ICML 2025**) [[paper](https://icml.cc/virtual/2025/poster/46374)] [[code](https://github.com/JackqqWang/fedag)]
- [CV][Prompt][FM] Federated Domain Generalization with Domain-Specific Soft Prompts Generation (**ICCV 2025**) [[paper](https://openaccess.thecvf.com/content/ICCV2025/papers/Wu_Federated_Domain_Generalization_with_Domain-specific_Soft_Prompts_Generation_ICCV_2025_paper.pdf)]
- [CV][Alignment] Federated Learning with Domain Shift Eraser (**CVPR 2025**) [[paper](https://openaccess.thecvf.com/content/CVPR2025/html/Wang_Federated_Learning_with_Domain_Shift_Eraser_CVPR_2025_paper.html)]
- [CV][TTA] TTA-FedDG: Leveraging Test-Time Adaptation to Address Federated Domain Generalization (**AAAI 2025**) [[paper](https://ojs.aaai.org/index.php/AAAI/article/view/34053)] [[code](https://github.com/520haoyuanliang/TTA-FedDG)]
- [General][Gradient][Alignment] Federated Unsupervised Domain Generalization Using Global and Local Alignment of Gradients (**AAAI 2025**) [[paper](https://ojs.aaai.org/index.php/AAAI/article/view/34197)] [[code](https://github.com/MahdiyarMM/FedGaLA)]
- [General][Aggregation][Optimization] Improving Federated Domain Generalization Through Dynamical Weights Calculated from Data Influences on Global Model Update (**AAAI 2025**) [[paper](https://ojs.aaai.org/index.php/AAAI/article/view/34468)]
- [Graph][OOD] FedGOG: Federated Graph Out-of-Distribution Generalization (**AAAI 2025**) [[paper](https://ojs.aaai.org/index.php/AAAI/article/view/34459)]
- [General][Optimization] Federated Domain Generalization with Decision Insight Matrix (**IJCAI 2025**) [[paper](https://www.ijcai.org/proceedings/2025/633)]
- [CV][StyleAug][Alignment] Multi-Source Collaborative Style Augmentation and Domain-Invariant Learning for Federated Domain Generalization (**IJCAI 2025**) [[paper](https://arxiv.org/abs/2505.10152)] [[code](https://github.com/weiyikang/FedAdvSty)]
- [General][TTA][OOD] BTFL: A Bayesian-based Test-Time Generalization Method for Internal and External Data Distributions in Federated Learning (**KDD 2025**) [[paper](https://doi.org/10.1145/3690624.3709309)]
- [General][Causal][Optimization] A Causal Unbiased Optimization Method for Federated Domain Generalization (**Knowledge-Based Systems 2025**) [[paper](https://doi.org/10.1016/j.knosys.2025.112220)]
- [General][Personalization] A Unified Personalized Federated Learning Framework Ensuring Domain Generalization (**Expert Systems with Applications 2025**) [[paper](https://doi.org/10.1016/j.eswa.2024.125700)]
- [IoT][Fault Diagnosis][StyleAug][Alignment] Federated Domain Generalization for Fault Diagnosis: Cross-Client Style Integration and Dual Alignment Representation (**IEEE IoT-J 2025**) [[paper](https://doi.org/10.1109/JIOT.2025.3551339)]
- [IoT][Fault Diagnosis][Decentralized] Heterogeneous Federated Learning: Client-Side Collaborative Update Interdomain Generalization Method for Intelligent Fault Diagnosis (**IEEE IoT-J 2025**) [[paper](https://doi.org/10.1109/JIOT.2024.3489617)] [[code](https://github.com/JC952/P2PCHF)]
- [IoT][Fault Diagnosis][Gradient] A Gradient Alignment Federated Domain Generalization Framework for Rotating Machinery Fault Diagnosis (**IEEE IoT-J 2025**) [[paper](https://doi.org/10.1109/JIOT.2025.3552312)]
- [IoT][Fault Diagnosis][Alignment] Lightweight Federated Domain Generalization With Global-Local Contrastive Learning for Machine Fault Diagnosis (**IEEE IoT-J 2025**) [[paper](https://doi.org/10.1109/JIOT.2025.3569397)]
- [Fault Diagnosis][Optimization] Margin-Guided Parameter Decoupling-Consensus Framework for Federated Domain Generalization in Machinery Fault Diagnosis (**Knowledge-Based Systems 2025**) [[paper](https://doi.org/10.1016/j.knosys.2025.112585)]

---

## 2024

- [CV][Prompt][FM] DiPrompT: Disentangled Prompt Tuning for Multiple Latent Domain Generalization in Federated Learning (**CVPR 2024**) [[paper](https://openaccess.thecvf.com/content/CVPR2024/html/Bai_DiPrompT_Disentangled_Prompt_Tuning_for_Multiple_Latent_Domain_Generalization_in_CVPR_2024_paper.html)]
- [CV][Normalization] Efficiently Assemble Normalization Layers and Regularization for Federated Domain Generalization (**CVPR 2024**) [[paper](https://openaccess.thecvf.com/content/CVPR2024/html/Le_Efficiently_Assemble_Normalization_Layers_and_Regularization_for_Federated_Domain_Generalization_CVPR_2024_paper.html)] [[code](https://github.com/lhkhiem28/gPerXAN)]
- [CV][Gradient][Alignment] Multi-Source Collaborative Gradient Discrepancy Minimization for Federated Domain Generalization (**AAAI 2024**) [[paper](https://ojs.aaai.org/index.php/AAAI/article/view/29510)] [[code](https://github.com/weiyikang/FedGM)]
- [CV][ReID][StyleAug] Diversity-Authenticity Co-constrained Stylization for Federated Domain Generalization in Person Re-identification (**AAAI 2024**) [[paper](https://ojs.aaai.org/index.php/AAAI/article/view/28468)]
- [CV][Sharpness][Optimization] Local and Global Flatness for Federated Domain Generalization (**ECCV 2024**) [[paper](https://doi.org/10.1007/978-3-031-73010-8_5)] [[code](https://github.com/cnyanhao/FedLGF)]
- [CV][FeatureAug] Federated Adversarial Domain Hallucination for Privacy-Preserving Domain Generalization (**IEEE TMM 2024**) [[paper](https://doi.org/10.1109/TMM.2023.3257566)]
- [Medical][Diagnosis][Alignment] Bilateral Proxy Federated Domain Generalization for Privacy-Preserving Medical Image Diagnosis (**IEEE J-BHI 2024**) [[paper](https://doi.org/10.1109/JBHI.2024.3456440)]
- [Fault Diagnosis][Decentralized][Alignment] Decentralized Federated Domain Generalization with Cluster Alignment for Fault Diagnosis (**Control Engineering Practice 2024**) [[paper](https://doi.org/10.1016/j.conengprac.2024.105951)]
- [Fault Diagnosis][Decentralized] A Blockchain-Empowered Secure Federated Domain Generalization Framework for Machinery Fault Diagnosis (**Advanced Engineering Informatics 2024**) [[paper](https://doi.org/10.1016/j.aei.2024.102392)]
- [Fault Diagnosis][Decentralized] FedITA: A Cloud-Edge Collaboration Framework for Domain Generalization-Based Federated Fault Diagnosis of Machine-Level Industrial Motors (**Advanced Engineering Informatics 2024**) [[paper](https://doi.org/10.1016/j.aei.2024.102533)]
- [Fault Diagnosis][Aggregation] A Federated Distillation Domain Generalization Framework for Machinery Fault Diagnosis with Data Privacy (**Engineering Applications of Artificial Intelligence 2024**) [[paper](https://doi.org/10.1016/j.engappai.2024.108932)] [[code](https://github.com/CHAOZHAO-1/FDDG)]
- [Fault Diagnosis][Alignment] Fusing Consensus Knowledge: A Federated Learning Method for Fault Diagnosis via Privacy-Preserving Reference Under Domain Shift (**Information Fusion 2024**) [[paper](https://doi.org/10.1016/j.inffus.2024.102361)]
- [Fault Diagnosis][Alignment] Heterogeneous Federated Domain Generalization Network With Common Representation Learning for Cross-Load Machinery Fault Diagnosis (**IEEE TSMC: Systems 2024**) [[paper](https://doi.org/10.1109/TSMC.2024.3408058)]
- [Fault Diagnosis][General] Federated Domain Generalization: A Secure and Robust Framework for Intelligent Fault Diagnosis (**IEEE TII 2024**) [[paper](https://doi.org/10.1109/TII.2023.3296894)] [[code](https://github.com/CHAOZHAO-1/FedDGMC)]

---

## 2023

- [CV][Optimization] Federated Domain Generalization With Generalization Adjustment (**CVPR 2023**) [[paper](https://openaccess.thecvf.com/content/CVPR2023/html/Zhang_Federated_Domain_Generalization_With_Generalization_Adjustment_CVPR_2023_paper.html)] [[code](https://github.com/MediaBrain-SJTU/FedDG-GA)]
- [CV][Alignment] Rethinking Federated Learning With Domain Shift: A Prototype View (**CVPR 2023**) [[paper](https://doi.org/10.1109/CVPR52729.2023.01565)] [[code](https://github.com/WenkeHuang/RethinkFL)]
- [General][OOD] Out-of-Distribution Generalization of Federated Learning via Implicit Invariant Relationships (**ICML 2023**) [[paper](https://proceedings.mlr.press/v202/guo23b.html)] [[code](https://github.com/YamingGuo98/FedIIR)]
- [CV][StyleAug] StableFDG: Style and Attention Based Learning for Federated Domain Generalization (**NeurIPS 2023**) [[paper](https://proceedings.neurips.cc/paper_files/paper/2023/hash/dae8bdacd265399b193e6b43d44a80f0-Abstract-Conference.html)]
- [CV][StyleAug] Federated Domain Generalization for Image Recognition via Cross-Client Style Transfer (**WACV 2023**) [[paper](https://openaccess.thecvf.com/content/WACV2023/html/Chen_Federated_Domain_Generalization_for_Image_Recognition_via_Cross-Client_Style_Transfer_WACV_2023_paper.html)] [[code](https://github.com/JeremyCJM/CCST)]
- [Medical][Reconstruction] Federated Condition Generalization on Low-Dose CT Reconstruction via Cross-Domain Learning (**MICCAI 2023**) [[paper](https://doi.org/10.1007/978-3-031-43898-1_5)]
- [General][Aggregation][Data-Free] Collaborative Semantic Aggregation and Calibration for Federated Domain Generalization (**IEEE TKDE 2023**) [[paper](https://doi.org/10.1109/TKDE.2023.3273882)]
- [IoT][General] Federated Learning for IoT Devices With Domain Generalization (**IEEE IoT-J 2023**) [[paper](https://doi.org/10.1109/JIOT.2022.3173489)]
- [Medical][Diagnosis] Enhancing Domain Generalization in the AI-Based Analysis of Chest Radiographs with Federated Learning (**Scientific Reports 2023**) [[paper](https://doi.org/10.1038/s41598-023-49956-8)] [[code](https://github.com/tayebiarasteh/FLdomain)]
- [Fault Diagnosis][Aggregation] Federated Domain Generalization with Global Robust Model Aggregation Strategy for Bearing Fault Diagnosis (**Measurement Science and Technology 2023**) [[paper](https://doi.org/10.1088/1361-6501/ace841)]

---

## 2022

- [General][Optimization] FedSR: A Simple and Effective Domain Generalization Method for Federated Learning (**NeurIPS 2022**) [[paper](https://proceedings.neurips.cc/paper_files/paper/2022/hash/fd946a6c99541fddc3d64a3ea39a1bc2-Abstract-Conference.html)] [[code](https://github.com/atuannguyen/FedSR)]
- [Fault Diagnosis][Alignment] Federated Adversarial Domain Generalization Network: A Novel Machinery Fault Diagnosis Method with Data Privacy (**Knowledge-Based Systems 2022**) [[paper](https://doi.org/10.1016/j.knosys.2022.109880)]

---

## 2021

- [Medical][Segmentation][Frequency] FedDG: Federated Domain Generalization on Medical Image Segmentation via Episodic Learning in Continuous Frequency Space (**CVPR 2021**) [[paper](https://openaccess.thecvf.com/content/CVPR2021/html/Liu_FedDG_Federated_Domain_Generalization_on_Medical_Image_Segmentation_via_Episodic_CVPR_2021_paper.html)] [[code](https://github.com/liuquande/FedDG-ELCFS)]
- [CV][Decentralized][DA] Collaborative Optimization and Aggregation for Decentralized Domain Generalization and Adaptation (**ICCV 2021**) [[paper](https://openaccess.thecvf.com/content/ICCV2021/html/Wu_Collaborative_Optimization_and_Aggregation_for_Decentralized_Domain_Generalization_and_Adaptation_ICCV_2021_paper.html)]

---

# Related: Federated Domain Adaptation

This section tracks related **Federated Domain Adaptation (FedDA)** papers. These papers may use target-domain data during training or adaptation, so they are not mixed with the core FedDG list unless they also evaluate true domain generalization.

- [CV][Decentralized][DA] Collaborative Optimization and Aggregation for Decentralized Domain Generalization and Adaptation (**ICCV 2021**) [[paper](https://openaccess.thecvf.com/content/ICCV2021/html/Wu_Collaborative_Optimization_and_Aggregation_for_Decentralized_Domain_Generalization_and_Adaptation_ICCV_2021_paper.html)]

---

# Preprints / Under Review

This section tracks promising FedDG-related works that are arXiv-only, under review, or not yet verified as CORE A*/A main-track or Q1 journal publications.

- [Preprint][Prompt] PLAN: Federated Domain Generalization via Prompt Learning and Aggregation (**arXiv 2024**) [[paper](https://arxiv.org/abs/2407.08226)]
- [Preprint] FedTAIL: A Federated Learning Framework for Domain Generalization via Tail Manipulation (**OpenReview / Preprint**) [[paper](https://openreview.net/forum?id=0rhID2uB1L)]
- [Preprint] FedSDAF: A Federated Learning Framework for Domain Generalization via Sample Difficulty-Aware Forgetting (**arXiv 2025**) [[paper](https://arxiv.org/abs/2501.01020)]
- [Preprint][Prompt] FedBPrompt: Federated Domain Generalization with Augmented Bag Prompts for Vision-Language Person ReID (**arXiv 2026**) [[paper](https://arxiv.org/abs/2601.03723)]
- [Preprint][Medical][Classification] FedSSG: Style-Selective Global Aggregation for Federated Domain Generalization in Medical Image Classification (**arXiv 2026**) [[paper](https://arxiv.org/abs/2601.00934)]
- [Preprint][FM] FED-DIP: Federated Domain Generalization (**OpenReview 2026 Submission**) [[paper](https://openreview.net/forum?id=ROrCLTyQb1)]
- [Preprint] FedHyMoe: Heterogeneous One-Shot Federated Learning with Model-Agnostic Mixture-of-Experts (**OpenReview 2026 Submission**) [[paper](https://openreview.net/forum?id=8AT6UBjpVV)]
- [Preprint][CV][ReID][StyleAug] CO-EVO: Co-evolving Semantic Anchoring and Style Diversification for Federated Domain Generalization in Person Re-identification (**arXiv 2026**) [[paper](https://arxiv.org/abs/2604.11539)]

---

# Borderline / Excluded Papers

These papers are related to FedDG but are not included in the core list because they do not satisfy the current repository policy.

| Title | Venue | Reason |
|---|---|---|
| FedTG: Text-guided Federated Domain Generalization | ICASSP 2025 | Relevant, but ICASSP is below CORE A under the current policy. |
| Federated Domain Generalization with Label Smoothing and Balanced Decentralized Training | ICASSP 2025 | Relevant, but ICASSP is below CORE A under the current policy. |
| Frequency-Based Federated Domain Generalization for Polyp Segmentation | ICASSP 2025 | Relevant, but ICASSP is below CORE A under the current policy. |
| FedPartWhole: Federated Domain Generalization via Consistent Part-Whole Hierarchies | Pattern Analysis and Applications 2025 | Relevant, but journal ranking needs Q1 verification; currently treated as non-core. |
| Feature Distribution Matching for Federated Domain Generalization | ACML 2022 | Relevant, but ACML is below CORE A under the current policy. |
| FL Games: A Federated Learning Framework for Distribution Shifts | NeurIPS FL Workshop 2022 | Workshop paper; workshops are excluded from the core list. |
| Domain Generalization for Foreground Segmentation Using Federated Learning | ISVC 2023 | Relevant, but ISVC is below CORE A under the current policy. |
| FedDG-MoE: Test-Time Mixture-of-Experts Fusion for Federated Domain Generalization | CVPR Workshop 2025 | Workshop paper; workshops are excluded from the core list. |
| Federated Domain Generalization for Intelligent Fault Diagnosis Based on Pseudo-Siamese Network and Robust Global Model Aggregation | International Journal of Machine Learning and Cybernetics 2024 | Relevant, but Q1 status needs verification before core inclusion. |

---

# Contributing

Contributions are welcome.

Please follow these rules:

1. **Core eligibility**
   - CORE A* or CORE A conference papers, main track only.
   - Q1 journal papers according to SCImago SJR or JCR.
   - The paper must be relevant to broad FedDG.

2. **Non-core papers**
   - arXiv-only papers should go to `Preprints / Under Review`.
   - Workshop papers should not be added to the core list.
   - Federated Domain Adaptation papers should go to `Related: Federated Domain Adaptation`.

3. **Required format**

   `- [Tag1][Tag2][Tag3] Title (**Venue Year**) [[paper](link)] [[code](link)]`

   If code is unavailable:

   `- [Tag1][Tag2][Tag3] Title (**Venue Year**) [[paper](link)]`

4. **Sorting rule**
   - Sort by year in descending order.
   - Inside each year, sort by:
     1. CORE A* conference papers.
     2. CORE A conference papers.
     3. Q1 journal papers.
     4. Venue name.
     5. Paper title.

5. **Metadata**
   - Prefer official paper pages, DOI pages, publisher pages, CVF, OpenReview, PMLR, IEEE, ACM, Springer, Elsevier, or journal pages.
   - Use arXiv only as a secondary link when an accepted version exists.
   - Do not add unofficial code unless it is clearly linked to the paper or authors.

6. **Do not include**
   - Standard non-IID FL papers without unseen-domain or domain-shift generalization.
   - Centralized DG papers without federated or decentralized learning.
   - Privacy-only, fairness-only, communication-only, or robustness-only FL papers unless they explicitly address domain shift or unseen-domain generalization.
   - Papers with unclear venue ranking or unclear FedDG relevance.

---

# Maintainer Notes

Recommended update workflow:

1. Search new papers using keywords such as:
   - `federated domain generalization`
   - `FedDG`
   - `federated OOD generalization`
   - `federated unseen domain generalization`
   - `federated learning domain shift generalization`
   - `federated graph out-of-distribution generalization`
   - `federated test-time generalization`
   - `federated prompt tuning domain generalization`
   - `federated foundation model domain generalization`

2. Check venue rank:
   - CORE ranking for conferences.
   - SCImago SJR or JCR for journals.

3. Classify the paper:
   - Core FedDG.
   - Related FedDA.
   - Preprint / Under Review.
   - Borderline / Excluded.
   - Needs Verification.

4. Add concise tags.

5. Prefer official links and avoid hallucinated metadata.

---

# License

This repository is released under the MIT License.
