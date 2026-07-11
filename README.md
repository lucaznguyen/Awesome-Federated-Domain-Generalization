# Awesome Federated Domain Generalization (FedDG)

[![Awesome](https://awesome.re/badge.svg)](https://awesome.re)
![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)
![License](https://img.shields.io/badge/license-MIT-black.svg)
![Stars](https://img.shields.io/github/stars/lucaznguyen/awesome-federated-domain-generalization?style=social)

A curated list of **Federated Domain Generalization (FedDG)** papers, surveys, benchmarks, code, and related resources.

**Core inclusion policy:** only papers that are relevant to broad FedDG and are published in **CORE A*/A main-track conferences** or **Q1 journals** are included in the main paper list.

**Format rule:**  
`- Title (**Venue Year**) [[paper](link)] [[code](link)] <sub><img alt="tags: vision, prompt" src="https://img.shields.io/static/v1?label=tags&amp;message=vision%20%7C%20prompt&amp;color=1f6feb&amp;style=flat-square" height="16"></sub>`

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

Each item ends with one compact badge. Use one to four lowercase labels: a scope label (`vision`, `medical`, `graph`, `iot`, `fault`, `ts`, `general`), an optional task label (`cls`, `seg`, `reid`, `ood`, `tta`, `survey`, `benchmark`), and concise method labels such as `align`, `style`, `augment`, `grad`, `optim`, `agg`, `hfl`, `prompt`, `vlm`, `causal`, `freq`, `norm`, `flatness`, `ot`, or `decentral`.

---

## Related Awesome Repositories

- Awesome Federated Machine Learning [[github](https://github.com/innovation-cat/Awesome-Federated-Machine-Learning)]
- Awesome Domain Generalization [[github](https://github.com/junkunyuan/Awesome-Domain-Generalization)]
- OOD Machine Learning: Detection, Robustness, and Generalization [[github](https://github.com/huytransformer/Awesome-Out-Of-Distribution-Detection)]

---

## Surveys

- Federated Domain Generalization: A Survey (**Proceedings of the IEEE 2025**) [[paper](https://doi.org/10.1109/JPROC.2025.3596173)] <sub><img alt="tags: survey" src="https://img.shields.io/static/v1?label=tags&amp;message=survey&amp;color=d73a49&amp;style=flat-square" height="16"></sub>
- Federated Learning for Generalization, Robustness, Fairness: A Survey and Benchmark (**IEEE TPAMI 2024**) [[paper](https://arxiv.org/abs/2311.06750)] <sub><img alt="tags: survey, benchmark" src="https://img.shields.io/static/v1?label=tags&amp;message=survey%20%7C%20benchmark&amp;color=d73a49&amp;style=flat-square" height="16"></sub>
- A Systematic Review on Federated Domain Generalization: Interactions and Trade-offs among Security, Communication Efficiency, and Architecture Design (**SSRN 2025**) [[paper](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5199400)] <sub><img alt="tags: survey, preprint" src="https://img.shields.io/static/v1?label=tags&amp;message=survey%20%7C%20preprint&amp;color=d73a49&amp;style=flat-square" height="16"></sub>

---

## Benchmarks

- Benchmarking Algorithms for Federated Domain Generalization (**ICLR 2024**) [[paper](https://proceedings.iclr.cc/paper_files/paper/2024/hash/d4ee9e805cc90f636c66778225181036-Abstract-Conference.html)] [[code](https://github.com/inouye-lab/FedDG_Benchmark)] <sub><img alt="tags: benchmark" src="https://img.shields.io/static/v1?label=tags&amp;message=benchmark&amp;color=2ea44f&amp;style=flat-square" height="16"></sub>
- DomainBed (**Resource**) [[github](https://github.com/facebookresearch/DomainBed)] <sub><img alt="tags: benchmark, resource" src="https://img.shields.io/static/v1?label=tags&amp;message=benchmark%20%7C%20resource&amp;color=2ea44f&amp;style=flat-square" height="16"></sub>
- Federated Learning for Generalization, Robustness, Fairness: A Survey and Benchmark (**IEEE TPAMI 2024**) [[paper](https://arxiv.org/abs/2311.06750)] <sub><img alt="tags: survey, benchmark" src="https://img.shields.io/static/v1?label=tags&amp;message=survey%20%7C%20benchmark&amp;color=d73a49&amp;style=flat-square" height="16"></sub>

---

# Papers by Year

## 2026

- FedDiG: Frequency-Guided Diffusion Diversity for Generalizable Federated Time Series Classification (**WWW 2026**) [[paper](https://dl.acm.org/doi/10.1145/3774904.3792329)] <sub><img alt="tags: ts, cls, freq" src="https://img.shields.io/static/v1?label=tags&amp;message=ts%20%7C%20cls%20%7C%20freq&amp;color=0969da&amp;style=flat-square" height="16"></sub>
- Multi-Modal Style Transfer-based Prompt Tuning for Efficient Federated Domain Generalization (**AAAI 2026**) [[paper](https://ojs.aaai.org/index.php/AAAI/article/view/39177)] <sub><img alt="tags: vision, vlm, prompt, style" src="https://img.shields.io/static/v1?label=tags&amp;message=vision%20%7C%20vlm%20%7C%20prompt%20%7C%20style&amp;color=1f6feb&amp;style=flat-square" height="16"></sub>
- FedSDWC: Federated Synergistic Dual-Representation Weak Causal Learning for OOD (**AAAI 2026**) [[paper](https://ojs.aaai.org/index.php/AAAI/article/view/39364)] <sub><img alt="tags: general, ood, causal" src="https://img.shields.io/static/v1?label=tags&amp;message=general%20%7C%20ood%20%7C%20causal&amp;color=6e7781&amp;style=flat-square" height="16"></sub>
- The Aggregated Model is a Confounder: Enabling Deconfounded Federated Learning for OOD Generalization (**IEEE INFOCOM 2026**) [[paper](https://doi.org/10.1109/INFOCOM59046.2026.11571547)] <sub><img alt="tags: general, ood, causal" src="https://img.shields.io/static/v1?label=tags&amp;message=general%20%7C%20ood%20%7C%20causal&amp;color=6e7781&amp;style=flat-square" height="16"></sub>
- HFedATM: Hierarchical Federated Domain Generalization via Optimal Transport and Regularized Mean Aggregation (**CVPR 2026**) [[paper](https://openaccess.thecvf.com/content/CVPR2026/papers/Nguyen_HFedATM_Hierarchical_Federated_Domain_Generalization_via_Optimal_Transport_and_Regularized_CVPR_2026_paper.pdf)] <sub><img alt="tags: vision, hfl, ot, agg" src="https://img.shields.io/static/v1?label=tags&amp;message=vision%20%7C%20hfl%20%7C%20ot%20%7C%20agg&amp;color=1f6feb&amp;style=flat-square" height="16"></sub>
- Unified Alignment Protocol: Making Sense of the Unlabeled Data in New Domains (**WACV 2026**) [[paper](https://openaccess.thecvf.com/content/WACV2026/papers/Ahmed_Unified_Alignment_Protocol_Making_Sense_of_the_Unlabeled_Data_in_WACV_2026_paper.pdf)] <sub><img alt="tags: vision, ood, align" src="https://img.shields.io/static/v1?label=tags&amp;message=vision%20%7C%20ood%20%7C%20align&amp;color=1f6feb&amp;style=flat-square" height="16"></sub>
- FedHAP: Federated Hierarchical Adaptive Prompt Learning for Cross-Domain Generalization (**Applied Soft Computing 2026**) [[paper](https://doi.org/10.1016/j.asoc.2026.115193)] <sub><img alt="tags: vision, vlm, prompt" src="https://img.shields.io/static/v1?label=tags&amp;message=vision%20%7C%20vlm%20%7C%20prompt&amp;color=1f6feb&amp;style=flat-square" height="16"></sub>
- DFA-FedDG: A Federated Domain Generalization Network Anomaly Detection System Based on Dynamic Feature Alignment (**Computer Networks 2026**) [[paper](https://doi.org/10.1016/j.comnet.2026.112356)] <sub><img alt="tags: iot, detect, align" src="https://img.shields.io/static/v1?label=tags&amp;message=iot%20%7C%20detect%20%7C%20align&amp;color=00897b&amp;style=flat-square" height="16"></sub>
- FedCode: Addressing Federated Domain Shift by Contrastive Feature Decoupling (**Neurocomputing 2026**) [[paper](https://doi.org/10.1016/j.neucom.2026.133151)] <sub><img alt="tags: general, align, contrastive" src="https://img.shields.io/static/v1?label=tags&amp;message=general%20%7C%20align%20%7C%20contrastive&amp;color=6e7781&amp;style=flat-square" height="16"></sub>
- Federated Domain Generalization via Prompt Learning and Aggregation (**IEEE TIFS 2026**) [[paper](https://doi.org/10.1109/TIFS.2026.3655520)] <sub><img alt="tags: vision, vlm, prompt" src="https://img.shields.io/static/v1?label=tags&amp;message=vision%20%7C%20vlm%20%7C%20prompt&amp;color=1f6feb&amp;style=flat-square" height="16"></sub>
- Token-Level Prompt Mixture With Parameter-Free Routing for Federated Domain Generalization (**IEEE TIP 2026**) [[paper](https://doi.org/10.1109/TIP.2026.3652431)] [[code](https://github.com/GongShuai8210/TRIP)] <sub><img alt="tags: vision, vlm, prompt" src="https://img.shields.io/static/v1?label=tags&amp;message=vision%20%7C%20vlm%20%7C%20prompt&amp;color=1f6feb&amp;style=flat-square" height="16"></sub>
- FDGReID: Federated Domain Generalization for Person Re-identification (**Machine Learning 2026**) [[paper](https://link.springer.com/article/10.1007/s10994-025-06974-z)] <sub><img alt="tags: vision, reid, style" src="https://img.shields.io/static/v1?label=tags&amp;message=vision%20%7C%20reid%20%7C%20style&amp;color=1f6feb&amp;style=flat-square" height="16"></sub>
- Embracing Knowledge Integration from the Vision-Language Model for Federated Domain Generalization on Multi-Source Fused Data (**Information Fusion 2026**) [[paper](https://doi.org/10.1016/j.inffus.2025.103714)] <sub><img alt="tags: multimodal, vlm, distill" src="https://img.shields.io/static/v1?label=tags&amp;message=multimodal%20%7C%20vlm%20%7C%20distill&amp;color=8250df&amp;style=flat-square" height="16"></sub>
- Federated Domain Generalization for Medical Image Segmentation via Cross-Client Feature Style Transfer and Adaptive Style Alignment (**Expert Systems with Applications 2026**) [[paper](https://doi.org/10.1016/j.eswa.2026.131394)] <sub><img alt="tags: medical, seg, style, align" src="https://img.shields.io/static/v1?label=tags&amp;message=medical%20%7C%20seg%20%7C%20style%20%7C%20align&amp;color=cf222e&amp;style=flat-square" height="16"></sub>
- DPBGFL: Debiased Prototype Bidirectional Guided Federated Learning for Human Activity Recognition (**Knowledge-Based Systems 2026**) [[paper](https://doi.org/10.1016/j.knosys.2026.115895)] <sub><img alt="tags: iot, cls, proto" src="https://img.shields.io/static/v1?label=tags&amp;message=iot%20%7C%20cls%20%7C%20proto&amp;color=00897b&amp;style=flat-square" height="16"></sub>
- FedSemiDG: Domain Generalized Federated Semi-Supervised Medical Image Segmentation (**Medical Image Analysis 2026**) [[paper](https://doi.org/10.1016/j.media.2026.104096)] <sub><img alt="tags: medical, seg, semi-supervised" src="https://img.shields.io/static/v1?label=tags&amp;message=medical%20%7C%20seg%20%7C%20semi-supervised&amp;color=cf222e&amp;style=flat-square" height="16"></sub>
- Advancing Federated Domain Generalization in Ophthalmology: Vision Enhancement and Consistency Assurance for Multicenter Fundus Image Segmentation (**Pattern Recognition 2026**) [[paper](https://doi.org/10.1016/j.patcog.2025.111993)] <sub><img alt="tags: medical, seg, align" src="https://img.shields.io/static/v1?label=tags&amp;message=medical%20%7C%20seg%20%7C%20align&amp;color=cf222e&amp;style=flat-square" height="16"></sub>
- FedFAT: Frequency Adaptive Interpolation for Federated Domain Generalization on Heterogeneous Medical Images (**Pattern Recognition 2026**) [[paper](https://doi.org/10.1016/j.patcog.2025.112459)] <sub><img alt="tags: medical, freq, augment" src="https://img.shields.io/static/v1?label=tags&amp;message=medical%20%7C%20freq%20%7C%20augment&amp;color=cf222e&amp;style=flat-square" height="16"></sub>
- Federated Domain Generalization via Data-Centric Flatness Optimization (**Pattern Recognition 2026**) [[paper](https://doi.org/10.1016/j.patcog.2025.113023)] <sub><img alt="tags: general, optim, flatness" src="https://img.shields.io/static/v1?label=tags&amp;message=general%20%7C%20optim%20%7C%20flatness&amp;color=6e7781&amp;style=flat-square" height="16"></sub>
- Federated Domain Generalization with Source Knowledge Preservation via Discriminative Ensembles (**Information Sciences 2026**) [[paper](https://doi.org/10.1016/j.ins.2025.122804)] <sub><img alt="tags: general, agg, ensemble" src="https://img.shields.io/static/v1?label=tags&amp;message=general%20%7C%20agg%20%7C%20ensemble&amp;color=6e7781&amp;style=flat-square" height="16"></sub>
- Using Class and Domain Information to Address Domain Shift in Federated Learning (**IEEE TNNLS 2026**) [[paper](https://doi.org/10.1109/TNNLS.2026.3658584)] <sub><img alt="tags: general, proto, agg" src="https://img.shields.io/static/v1?label=tags&amp;message=general%20%7C%20proto%20%7C%20agg&amp;color=6e7781&amp;style=flat-square" height="16"></sub>

---

## 2025

- Federated Domain Generalization with Data-Free On-Server Matching Gradient (**ICLR 2025**) [[paper](https://openreview.net/forum?id=8TERgu1Lb2)] [[code](https://github.com/skydvn/fedomg)] <sub><img alt="tags: general, grad, data-free" src="https://img.shields.io/static/v1?label=tags&amp;message=general%20%7C%20grad%20%7C%20data-free&amp;color=6e7781&amp;style=flat-square" height="16"></sub>
- Causality Inspired Federated Learning for OOD Generalization (**ICML 2025**) [[paper](https://openreview.net/forum?id=pWWUJw2qew)] <sub><img alt="tags: general, ood, causal" src="https://img.shields.io/static/v1?label=tags&amp;message=general%20%7C%20ood%20%7C%20causal&amp;color=6e7781&amp;style=flat-square" height="16"></sub>
- Enhancing Foundation Models with Federated Domain Knowledge Infusion (**ICML 2025**) [[paper](https://icml.cc/virtual/2025/poster/46374)] [[code](https://github.com/JackqqWang/fedag)] <sub><img alt="tags: fm, align" src="https://img.shields.io/static/v1?label=tags&amp;message=fm%20%7C%20align&amp;color=8250df&amp;style=flat-square" height="16"></sub>
- Federated Domain Generalization with Domain-Specific Soft Prompts Generation (**ICCV 2025**) [[paper](https://openaccess.thecvf.com/content/ICCV2025/papers/Wu_Federated_Domain_Generalization_with_Domain-specific_Soft_Prompts_Generation_ICCV_2025_paper.pdf)] <sub><img alt="tags: vision, vlm, prompt" src="https://img.shields.io/static/v1?label=tags&amp;message=vision%20%7C%20vlm%20%7C%20prompt&amp;color=1f6feb&amp;style=flat-square" height="16"></sub>
- Federated Learning with Domain Shift Eraser (**CVPR 2025**) [[paper](https://openaccess.thecvf.com/content/CVPR2025/html/Wang_Federated_Learning_with_Domain_Shift_Eraser_CVPR_2025_paper.html)] <sub><img alt="tags: vision, align" src="https://img.shields.io/static/v1?label=tags&amp;message=vision%20%7C%20align&amp;color=1f6feb&amp;style=flat-square" height="16"></sub>
- Federated Domain Generalization with Latent Space Inversion (**ICDM 2025**) [[paper](https://doi.org/10.1109/ICDM65498.2025.00072)] <sub><img alt="tags: general, privacy, agg" src="https://img.shields.io/static/v1?label=tags&amp;message=general%20%7C%20privacy%20%7C%20agg&amp;color=6e7781&amp;style=flat-square" height="16"></sub>
- Federated Graph Out-of-Distribution Generalization via Representation Propagation and Scattering (**ICDM 2025**) [[paper](https://doi.org/10.1109/ICDM65498.2025.00107)] <sub><img alt="tags: graph, ood, prop" src="https://img.shields.io/static/v1?label=tags&amp;message=graph%20%7C%20ood%20%7C%20prop&amp;color=6f42c1&amp;style=flat-square" height="16"></sub>
- TTA-FedDG: Leveraging Test-Time Adaptation to Address Federated Domain Generalization (**AAAI 2025**) [[paper](https://ojs.aaai.org/index.php/AAAI/article/view/34053)] [[code](https://github.com/520haoyuanliang/TTA-FedDG)] <sub><img alt="tags: vision, tta" src="https://img.shields.io/static/v1?label=tags&amp;message=vision%20%7C%20tta&amp;color=1f6feb&amp;style=flat-square" height="16"></sub>
- Federated Unsupervised Domain Generalization Using Global and Local Alignment of Gradients (**AAAI 2025**) [[paper](https://ojs.aaai.org/index.php/AAAI/article/view/34197)] [[code](https://github.com/MahdiyarMM/FedGaLA)] <sub><img alt="tags: general, grad, align" src="https://img.shields.io/static/v1?label=tags&amp;message=general%20%7C%20grad%20%7C%20align&amp;color=6e7781&amp;style=flat-square" height="16"></sub>
- Improving Federated Domain Generalization Through Dynamical Weights Calculated from Data Influences on Global Model Update (**AAAI 2025**) [[paper](https://ojs.aaai.org/index.php/AAAI/article/view/34468)] <sub><img alt="tags: general, agg, optim" src="https://img.shields.io/static/v1?label=tags&amp;message=general%20%7C%20agg%20%7C%20optim&amp;color=6e7781&amp;style=flat-square" height="16"></sub>
- FedGOG: Federated Graph Out-of-Distribution Generalization (**AAAI 2025**) [[paper](https://ojs.aaai.org/index.php/AAAI/article/view/34459)] <sub><img alt="tags: graph, ood" src="https://img.shields.io/static/v1?label=tags&amp;message=graph%20%7C%20ood&amp;color=6f42c1&amp;style=flat-square" height="16"></sub>
- Federated Domain Generalization with Decision Insight Matrix (**IJCAI 2025**) [[paper](https://www.ijcai.org/proceedings/2025/633)] <sub><img alt="tags: general, optim" src="https://img.shields.io/static/v1?label=tags&amp;message=general%20%7C%20optim&amp;color=6e7781&amp;style=flat-square" height="16"></sub>
- Federated Deconfounding and Debiasing Learning for Out-of-Distribution Generalization (**IJCAI 2025**) [[paper](https://www.ijcai.org/proceedings/2025/677)] <sub><img alt="tags: vision, ood, causal" src="https://img.shields.io/static/v1?label=tags&amp;message=vision%20%7C%20ood%20%7C%20causal&amp;color=1f6feb&amp;style=flat-square" height="16"></sub>
- Multi-Source Collaborative Style Augmentation and Domain-Invariant Learning for Federated Domain Generalization (**IJCAI 2025**) [[paper](https://arxiv.org/abs/2505.10152)] [[code](https://github.com/weiyikang/FedAdvSty)] <sub><img alt="tags: vision, style, align" src="https://img.shields.io/static/v1?label=tags&amp;message=vision%20%7C%20style%20%7C%20align&amp;color=1f6feb&amp;style=flat-square" height="16"></sub>
- BTFL: A Bayesian-based Test-Time Generalization Method for Internal and External Data Distributions in Federated Learning (**KDD 2025**) [[paper](https://doi.org/10.1145/3690624.3709309)] <sub><img alt="tags: general, tta, ood" src="https://img.shields.io/static/v1?label=tags&amp;message=general%20%7C%20tta%20%7C%20ood&amp;color=6e7781&amp;style=flat-square" height="16"></sub>
- PARDON: Privacy-Aware and Robust Federated Domain Generalization (**ICDCS 2025**) [[paper](https://doi.org/10.1109/ICDCS63083.2025.00074)] <sub><img alt="tags: vision, privacy, style" src="https://img.shields.io/static/v1?label=tags&amp;message=vision%20%7C%20privacy%20%7C%20style&amp;color=1f6feb&amp;style=flat-square" height="16"></sub>
- A Causal Unbiased Optimization Method for Federated Domain Generalization (**Knowledge-Based Systems 2025**) [[paper](https://doi.org/10.1016/j.knosys.2025.112220)] <sub><img alt="tags: general, causal, optim" src="https://img.shields.io/static/v1?label=tags&amp;message=general%20%7C%20causal%20%7C%20optim&amp;color=6e7781&amp;style=flat-square" height="16"></sub>
- A Unified Personalized Federated Learning Framework Ensuring Domain Generalization (**Expert Systems with Applications 2025**) [[paper](https://doi.org/10.1016/j.eswa.2024.125700)] <sub><img alt="tags: general, personal" src="https://img.shields.io/static/v1?label=tags&amp;message=general%20%7C%20personal&amp;color=6e7781&amp;style=flat-square" height="16"></sub>
- Boosting Federated Domain Generalization: Understanding the Role of Advanced Pretrained Architectures (**IEEE IoT-J 2025**) [[paper](https://doi.org/10.1109/JIOT.2025.3579372)] <sub><img alt="tags: iot, vision, pretrained" src="https://img.shields.io/static/v1?label=tags&amp;message=iot%20%7C%20vision%20%7C%20pretrained&amp;color=00897b&amp;style=flat-square" height="16"></sub>
- Federated Domain Generalization for Fault Diagnosis: Cross-Client Style Integration and Dual Alignment Representation (**IEEE IoT-J 2025**) [[paper](https://doi.org/10.1109/JIOT.2025.3551339)] <sub><img alt="tags: iot, fault, style, align" src="https://img.shields.io/static/v1?label=tags&amp;message=iot%20%7C%20fault%20%7C%20style%20%7C%20align&amp;color=00897b&amp;style=flat-square" height="16"></sub>
- Heterogeneous Federated Learning: Client-Side Collaborative Update Interdomain Generalization Method for Intelligent Fault Diagnosis (**IEEE IoT-J 2025**) [[paper](https://doi.org/10.1109/JIOT.2024.3489617)] [[code](https://github.com/JC952/P2PCHF)] <sub><img alt="tags: iot, fault, decentral" src="https://img.shields.io/static/v1?label=tags&amp;message=iot%20%7C%20fault%20%7C%20decentral&amp;color=00897b&amp;style=flat-square" height="16"></sub>
- A Gradient Alignment Federated Domain Generalization Framework for Rotating Machinery Fault Diagnosis (**IEEE IoT-J 2025**) [[paper](https://doi.org/10.1109/JIOT.2025.3552312)] <sub><img alt="tags: iot, fault, grad" src="https://img.shields.io/static/v1?label=tags&amp;message=iot%20%7C%20fault%20%7C%20grad&amp;color=00897b&amp;style=flat-square" height="16"></sub>
- Lightweight Federated Domain Generalization With Global-Local Contrastive Learning for Machine Fault Diagnosis (**IEEE IoT-J 2025**) [[paper](https://doi.org/10.1109/JIOT.2025.3569397)] <sub><img alt="tags: iot, fault, align" src="https://img.shields.io/static/v1?label=tags&amp;message=iot%20%7C%20fault%20%7C%20align&amp;color=00897b&amp;style=flat-square" height="16"></sub>
- Kindle Federated Generalization With Domain Specialized and Invariant Knowledge (**IEEE TIFS 2025**) [[paper](https://doi.org/10.1109/TIFS.2025.3550071)] <sub><img alt="tags: general, ood, moe" src="https://img.shields.io/static/v1?label=tags&amp;message=general%20%7C%20ood%20%7C%20moe&amp;color=6e7781&amp;style=flat-square" height="16"></sub>
- FedDGKA: Federated Domain Generalization Using Knowledge Alignment (**IEEE Access 2025**) [[paper](https://doi.org/10.1109/ACCESS.2025.3635473)] <sub><img alt="tags: vision, vlm, align" src="https://img.shields.io/static/v1?label=tags&amp;message=vision%20%7C%20vlm%20%7C%20align&amp;color=1f6feb&amp;style=flat-square" height="16"></sub>
- Margin-Guided Parameter Decoupling-Consensus Framework for Federated Domain Generalization in Machinery Fault Diagnosis (**Knowledge-Based Systems 2025**) [[paper](https://doi.org/10.1016/j.knosys.2025.112585)] <sub><img alt="tags: fault, optim" src="https://img.shields.io/static/v1?label=tags&amp;message=fault%20%7C%20optim&amp;color=f66a0a&amp;style=flat-square" height="16"></sub>

---

## 2024

- Benchmarking Algorithms for Federated Domain Generalization (**ICLR 2024**) [[paper](https://proceedings.iclr.cc/paper_files/paper/2024/hash/d4ee9e805cc90f636c66778225181036-Abstract-Conference.html)] [[code](https://github.com/inouye-lab/FedDG_Benchmark)] <sub><img alt="tags: benchmark" src="https://img.shields.io/static/v1?label=tags&amp;message=benchmark&amp;color=2ea44f&amp;style=flat-square" height="16"></sub>
- DiPrompT: Disentangled Prompt Tuning for Multiple Latent Domain Generalization in Federated Learning (**CVPR 2024**) [[paper](https://openaccess.thecvf.com/content/CVPR2024/html/Bai_DiPrompT_Disentangled_Prompt_Tuning_for_Multiple_Latent_Domain_Generalization_in_CVPR_2024_paper.html)] <sub><img alt="tags: vision, vlm, prompt" src="https://img.shields.io/static/v1?label=tags&amp;message=vision%20%7C%20vlm%20%7C%20prompt&amp;color=1f6feb&amp;style=flat-square" height="16"></sub>
- Efficiently Assemble Normalization Layers and Regularization for Federated Domain Generalization (**CVPR 2024**) [[paper](https://openaccess.thecvf.com/content/CVPR2024/html/Le_Efficiently_Assemble_Normalization_Layers_and_Regularization_for_Federated_Domain_Generalization_CVPR_2024_paper.html)] [[code](https://github.com/lhkhiem28/gPerXAN)] <sub><img alt="tags: vision, norm" src="https://img.shields.io/static/v1?label=tags&amp;message=vision%20%7C%20norm&amp;color=1f6feb&amp;style=flat-square" height="16"></sub>
- Multi-Source Collaborative Gradient Discrepancy Minimization for Federated Domain Generalization (**AAAI 2024**) [[paper](https://ojs.aaai.org/index.php/AAAI/article/view/29510)] [[code](https://github.com/weiyikang/FedGM)] <sub><img alt="tags: vision, grad, align" src="https://img.shields.io/static/v1?label=tags&amp;message=vision%20%7C%20grad%20%7C%20align&amp;color=1f6feb&amp;style=flat-square" height="16"></sub>
- Diversity-Authenticity Co-constrained Stylization for Federated Domain Generalization in Person Re-identification (**AAAI 2024**) [[paper](https://ojs.aaai.org/index.php/AAAI/article/view/28468)] <sub><img alt="tags: vision, reid, style" src="https://img.shields.io/static/v1?label=tags&amp;message=vision%20%7C%20reid%20%7C%20style&amp;color=1f6feb&amp;style=flat-square" height="16"></sub>
- Federated Graph Learning under Domain Shift with Generalizable Prototypes (**AAAI 2024**) [[paper](https://ojs.aaai.org/index.php/AAAI/article/view/29468)] <sub><img alt="tags: graph, proto, contrastive" src="https://img.shields.io/static/v1?label=tags&amp;message=graph%20%7C%20proto%20%7C%20contrastive&amp;color=6f42c1&amp;style=flat-square" height="16"></sub>
- Feature Diversification and Adaptation for Federated Domain Generalization (**ECCV 2024**) [[paper](https://www.ecva.net/papers/eccv_2024/papers_ECCV/papers/09073.pdf)] <sub><img alt="tags: vision, augment, tta" src="https://img.shields.io/static/v1?label=tags&amp;message=vision%20%7C%20augment%20%7C%20tta&amp;color=1f6feb&amp;style=flat-square" height="16"></sub>
- Local and Global Flatness for Federated Domain Generalization (**ECCV 2024**) [[paper](https://doi.org/10.1007/978-3-031-73010-8_5)] [[code](https://github.com/cnyanhao/FedLGF)] <sub><img alt="tags: vision, flatness, optim" src="https://img.shields.io/static/v1?label=tags&amp;message=vision%20%7C%20flatness%20%7C%20optim&amp;color=1f6feb&amp;style=flat-square" height="16"></sub>
- FOOGD: Federated Collaboration for Both Out-of-Distribution Generalization and Detection (**NeurIPS 2024**) [[paper](https://papers.nips.cc/paper_files/paper/2024/hash/efd1e27afcb94addd03b9e14c8d9f78f-Abstract-Conference.html)] [[code](https://github.com/XeniaLLL/FOOGD-main)] <sub><img alt="tags: general, ood, detect" src="https://img.shields.io/static/v1?label=tags&amp;message=general%20%7C%20ood%20%7C%20detect&amp;color=6e7781&amp;style=flat-square" height="16"></sub>
- A Blockchain-Empowered Secure Federated Domain Generalization Framework for Machinery Fault Diagnosis (**Advanced Engineering Informatics 2024**) [[paper](https://doi.org/10.1016/j.aei.2024.102392)] <sub><img alt="tags: fault, decentral" src="https://img.shields.io/static/v1?label=tags&amp;message=fault%20%7C%20decentral&amp;color=f66a0a&amp;style=flat-square" height="16"></sub>
- FedITA: A Cloud-Edge Collaboration Framework for Domain Generalization-Based Federated Fault Diagnosis of Machine-Level Industrial Motors (**Advanced Engineering Informatics 2024**) [[paper](https://doi.org/10.1016/j.aei.2024.102533)] <sub><img alt="tags: fault, decentral" src="https://img.shields.io/static/v1?label=tags&amp;message=fault%20%7C%20decentral&amp;color=f66a0a&amp;style=flat-square" height="16"></sub>
- Decentralized Federated Domain Generalization with Cluster Alignment for Fault Diagnosis (**Control Engineering Practice 2024**) [[paper](https://doi.org/10.1016/j.conengprac.2024.105951)] <sub><img alt="tags: fault, decentral, align" src="https://img.shields.io/static/v1?label=tags&amp;message=fault%20%7C%20decentral%20%7C%20align&amp;color=f66a0a&amp;style=flat-square" height="16"></sub>
- A Federated Distillation Domain Generalization Framework for Machinery Fault Diagnosis with Data Privacy (**Engineering Applications of Artificial Intelligence 2024**) [[paper](https://doi.org/10.1016/j.engappai.2024.108932)] [[code](https://github.com/CHAOZHAO-1/FDDG)] <sub><img alt="tags: fault, distill, agg" src="https://img.shields.io/static/v1?label=tags&amp;message=fault%20%7C%20distill%20%7C%20agg&amp;color=f66a0a&amp;style=flat-square" height="16"></sub>
- Contrastive-Enhanced Domain Generalization With Federated Learning (**IEEE TAI 2024**) [[paper](https://doi.org/10.1109/TAI.2023.3298297)] <sub><img alt="tags: vision, align, contrastive" src="https://img.shields.io/static/v1?label=tags&amp;message=vision%20%7C%20align%20%7C%20contrastive&amp;color=1f6feb&amp;style=flat-square" height="16"></sub>
- Bilateral Proxy Federated Domain Generalization for Privacy-Preserving Medical Image Diagnosis (**IEEE J-BHI 2024**) [[paper](https://doi.org/10.1109/JBHI.2024.3456440)] <sub><img alt="tags: medical, dx, align" src="https://img.shields.io/static/v1?label=tags&amp;message=medical%20%7C%20dx%20%7C%20align&amp;color=cf222e&amp;style=flat-square" height="16"></sub>
- Federated Adversarial Domain Hallucination for Privacy-Preserving Domain Generalization (**IEEE TMM 2024**) [[paper](https://doi.org/10.1109/TMM.2023.3257566)] <sub><img alt="tags: vision, augment" src="https://img.shields.io/static/v1?label=tags&amp;message=vision%20%7C%20augment&amp;color=1f6feb&amp;style=flat-square" height="16"></sub>
- Heterogeneous Federated Domain Generalization Network With Common Representation Learning for Cross-Load Machinery Fault Diagnosis (**IEEE TSMC: Systems 2024**) [[paper](https://doi.org/10.1109/TSMC.2024.3408058)] <sub><img alt="tags: fault, align" src="https://img.shields.io/static/v1?label=tags&amp;message=fault%20%7C%20align&amp;color=f66a0a&amp;style=flat-square" height="16"></sub>
- Federated Domain Generalization: A Secure and Robust Framework for Intelligent Fault Diagnosis (**IEEE TII 2024**) [[paper](https://doi.org/10.1109/TII.2023.3296894)] [[code](https://github.com/CHAOZHAO-1/FedDGMC)] <sub><img alt="tags: fault, robust" src="https://img.shields.io/static/v1?label=tags&amp;message=fault%20%7C%20robust&amp;color=f66a0a&amp;style=flat-square" height="16"></sub>
- Fusing Consensus Knowledge: A Federated Learning Method for Fault Diagnosis via Privacy-Preserving Reference Under Domain Shift (**Information Fusion 2024**) [[paper](https://doi.org/10.1016/j.inffus.2024.102361)] <sub><img alt="tags: fault, align" src="https://img.shields.io/static/v1?label=tags&amp;message=fault%20%7C%20align&amp;color=f66a0a&amp;style=flat-square" height="16"></sub>
- Federated Learning via Reweighting Information Bottleneck with Domain Generalization (**Information Sciences 2024**) [[paper](https://doi.org/10.1016/j.ins.2024.120825)] <sub><img alt="tags: general, ood, causal" src="https://img.shields.io/static/v1?label=tags&amp;message=general%20%7C%20ood%20%7C%20causal&amp;color=6e7781&amp;style=flat-square" height="16"></sub>
- Federated Domain Generalization for Condition Monitoring in Ultrasonic Metal Welding (**Journal of Manufacturing Systems 2024**) [[paper](https://doi.org/10.1016/j.jmsy.2024.09.023)] [[code](https://github.com/AhmadrezaNia/FDG-CM)] <sub><img alt="tags: fault, cls, align" src="https://img.shields.io/static/v1?label=tags&amp;message=fault%20%7C%20cls%20%7C%20align&amp;color=f66a0a&amp;style=flat-square" height="16"></sub>
- RFDG: Reinforcement Federated Domain Generalization (**IEEE TKDE 2024**) [[paper](https://doi.org/10.1109/TKDE.2023.3301036)] <sub><img alt="tags: general, rl, decorrelation" src="https://img.shields.io/static/v1?label=tags&amp;message=general%20%7C%20rl%20%7C%20decorrelation&amp;color=6e7781&amp;style=flat-square" height="16"></sub>
- Federated Analytics With Data Augmentation in Domain Generalization Toward Future Networks (**IEEE TMLCN 2024**) [[paper](https://doi.org/10.1109/TMLCN.2024.3393892)] <sub><img alt="tags: iot, augment, gan" src="https://img.shields.io/static/v1?label=tags&amp;message=iot%20%7C%20augment%20%7C%20gan&amp;color=00897b&amp;style=flat-square" height="16"></sub>

---

## 2023

- Federated Domain Generalization With Generalization Adjustment (**CVPR 2023**) [[paper](https://openaccess.thecvf.com/content/CVPR2023/html/Zhang_Federated_Domain_Generalization_With_Generalization_Adjustment_CVPR_2023_paper.html)] [[code](https://github.com/MediaBrain-SJTU/FedDG-GA)] <sub><img alt="tags: vision, optim" src="https://img.shields.io/static/v1?label=tags&amp;message=vision%20%7C%20optim&amp;color=1f6feb&amp;style=flat-square" height="16"></sub>
- Rethinking Federated Learning With Domain Shift: A Prototype View (**CVPR 2023**) [[paper](https://doi.org/10.1109/CVPR52729.2023.01565)] [[code](https://github.com/WenkeHuang/RethinkFL)] <sub><img alt="tags: vision, proto, align" src="https://img.shields.io/static/v1?label=tags&amp;message=vision%20%7C%20proto%20%7C%20align&amp;color=1f6feb&amp;style=flat-square" height="16"></sub>
- Out-of-Distribution Generalization of Federated Learning via Implicit Invariant Relationships (**ICML 2023**) [[paper](https://proceedings.mlr.press/v202/guo23b.html)] [[code](https://github.com/YamingGuo98/FedIIR)] <sub><img alt="tags: general, ood" src="https://img.shields.io/static/v1?label=tags&amp;message=general%20%7C%20ood&amp;color=6e7781&amp;style=flat-square" height="16"></sub>
- StableFDG: Style and Attention Based Learning for Federated Domain Generalization (**NeurIPS 2023**) [[paper](https://proceedings.neurips.cc/paper_files/paper/2023/hash/dae8bdacd265399b193e6b43d44a80f0-Abstract-Conference.html)] <sub><img alt="tags: vision, style" src="https://img.shields.io/static/v1?label=tags&amp;message=vision%20%7C%20style&amp;color=1f6feb&amp;style=flat-square" height="16"></sub>
- Federated Domain Generalization for Image Recognition via Cross-Client Style Transfer (**WACV 2023**) [[paper](https://openaccess.thecvf.com/content/WACV2023/html/Chen_Federated_Domain_Generalization_for_Image_Recognition_via_Cross-Client_Style_Transfer_WACV_2023_paper.html)] [[code](https://github.com/JeremyCJM/CCST)] <sub><img alt="tags: vision, style" src="https://img.shields.io/static/v1?label=tags&amp;message=vision%20%7C%20style&amp;color=1f6feb&amp;style=flat-square" height="16"></sub>
- Federated Condition Generalization on Low-Dose CT Reconstruction via Cross-Domain Learning (**MICCAI 2023**) [[paper](https://doi.org/10.1007/978-3-031-43898-1_5)] <sub><img alt="tags: medical, recon" src="https://img.shields.io/static/v1?label=tags&amp;message=medical%20%7C%20recon&amp;color=cf222e&amp;style=flat-square" height="16"></sub>
- Collaborative Semantic Aggregation and Calibration for Federated Domain Generalization (**IEEE TKDE 2023**) [[paper](https://doi.org/10.1109/TKDE.2023.3273882)] <sub><img alt="tags: general, agg, data-free" src="https://img.shields.io/static/v1?label=tags&amp;message=general%20%7C%20agg%20%7C%20data-free&amp;color=6e7781&amp;style=flat-square" height="16"></sub>
- Federated Learning for IoT Devices With Domain Generalization (**IEEE IoT-J 2023**) [[paper](https://doi.org/10.1109/JIOT.2022.3173489)] <sub><img alt="tags: iot" src="https://img.shields.io/static/v1?label=tags&amp;message=iot&amp;color=00897b&amp;style=flat-square" height="16"></sub>
- Enhancing Domain Generalization in the AI-Based Analysis of Chest Radiographs with Federated Learning (**Scientific Reports 2023**) [[paper](https://doi.org/10.1038/s41598-023-49956-8)] [[code](https://github.com/tayebiarasteh/FLdomain)] <sub><img alt="tags: medical, dx" src="https://img.shields.io/static/v1?label=tags&amp;message=medical%20%7C%20dx&amp;color=cf222e&amp;style=flat-square" height="16"></sub>
- Federated Domain Generalization with Global Robust Model Aggregation Strategy for Bearing Fault Diagnosis (**Measurement Science and Technology 2023**) [[paper](https://doi.org/10.1088/1361-6501/ace841)] <sub><img alt="tags: fault, agg" src="https://img.shields.io/static/v1?label=tags&amp;message=fault%20%7C%20agg&amp;color=f66a0a&amp;style=flat-square" height="16"></sub>

---

## 2022

- FedSR: A Simple and Effective Domain Generalization Method for Federated Learning (**NeurIPS 2022**) [[paper](https://proceedings.neurips.cc/paper_files/paper/2022/hash/fd946a6c99541fddc3d64a3ea39a1bc2-Abstract-Conference.html)] [[code](https://github.com/atuannguyen/FedSR)] <sub><img alt="tags: general, optim" src="https://img.shields.io/static/v1?label=tags&amp;message=general%20%7C%20optim&amp;color=6e7781&amp;style=flat-square" height="16"></sub>
- Federated Adversarial Domain Generalization Network: A Novel Machinery Fault Diagnosis Method with Data Privacy (**Knowledge-Based Systems 2022**) [[paper](https://doi.org/10.1016/j.knosys.2022.109880)] <sub><img alt="tags: fault, align" src="https://img.shields.io/static/v1?label=tags&amp;message=fault%20%7C%20align&amp;color=f66a0a&amp;style=flat-square" height="16"></sub>

---

## 2021

- FedDG: Federated Domain Generalization on Medical Image Segmentation via Episodic Learning in Continuous Frequency Space (**CVPR 2021**) [[paper](https://openaccess.thecvf.com/content/CVPR2021/html/Liu_FedDG_Federated_Domain_Generalization_on_Medical_Image_Segmentation_via_Episodic_CVPR_2021_paper.html)] [[code](https://github.com/liuquande/FedDG-ELCFS)] <sub><img alt="tags: medical, seg, freq" src="https://img.shields.io/static/v1?label=tags&amp;message=medical%20%7C%20seg%20%7C%20freq&amp;color=cf222e&amp;style=flat-square" height="16"></sub>
- Collaborative Optimization and Aggregation for Decentralized Domain Generalization and Adaptation (**ICCV 2021**) [[paper](https://openaccess.thecvf.com/content/ICCV2021/html/Wu_Collaborative_Optimization_and_Aggregation_for_Decentralized_Domain_Generalization_and_Adaptation_ICCV_2021_paper.html)] <sub><img alt="tags: vision, decentral, da" src="https://img.shields.io/static/v1?label=tags&amp;message=vision%20%7C%20decentral%20%7C%20da&amp;color=1f6feb&amp;style=flat-square" height="16"></sub>

---

# Related: Federated Domain Adaptation

This section tracks related **Federated Domain Adaptation (FedDA)** papers. These papers may use target-domain data during training or adaptation, so they are not mixed with the core FedDG list unless they also evaluate true domain generalization.

- Collaborative Optimization and Aggregation for Decentralized Domain Generalization and Adaptation (**ICCV 2021**) [[paper](https://openaccess.thecvf.com/content/ICCV2021/html/Wu_Collaborative_Optimization_and_Aggregation_for_Decentralized_Domain_Generalization_and_Adaptation_ICCV_2021_paper.html)] <sub><img alt="tags: vision, decentral, da" src="https://img.shields.io/static/v1?label=tags&amp;message=vision%20%7C%20decentral%20%7C%20da&amp;color=1f6feb&amp;style=flat-square" height="16"></sub>

---

# Preprints / Under Review

This section tracks promising FedDG-related works that are arXiv-only, under review, or not yet verified as CORE A*/A main-track or Q1 journal publications.

- FedTAIL: A Federated Learning Framework for Domain Generalization via Tail Manipulation (**OpenReview / Preprint**) [[paper](https://openreview.net/forum?id=0rhID2uB1L)] <sub><img alt="tags: preprint" src="https://img.shields.io/static/v1?label=tags&amp;message=preprint&amp;color=6e7781&amp;style=flat-square" height="16"></sub>
- FedSDAF: A Federated Learning Framework for Domain Generalization via Sample Difficulty-Aware Forgetting (**arXiv 2025**) [[paper](https://arxiv.org/abs/2501.01020)] <sub><img alt="tags: preprint" src="https://img.shields.io/static/v1?label=tags&amp;message=preprint&amp;color=6e7781&amp;style=flat-square" height="16"></sub>
- FedDAG: Federated Domain Adversarial Generation Towards Generalizable Medical Image Analysis (**arXiv 2025**) [[paper](https://arxiv.org/abs/2501.13967)] <sub><img alt="tags: medical, augment, preprint" src="https://img.shields.io/static/v1?label=tags&amp;message=medical%20%7C%20augment%20%7C%20preprint&amp;color=cf222e&amp;style=flat-square" height="16"></sub>
- Federated Out-of-Distribution Generalization: A Causal Augmentation View (**arXiv 2025**) [[paper](https://arxiv.org/abs/2504.19882)] <sub><img alt="tags: vision, ood, causal, preprint" src="https://img.shields.io/static/v1?label=tags&amp;message=vision%20%7C%20ood%20%7C%20causal%20%7C%20preprint&amp;color=1f6feb&amp;style=flat-square" height="16"></sub>
- TreeFedDG: Alleviating Global Drift in Federated Domain Generalization for Medical Image Segmentation (**arXiv 2025**) [[paper](https://arxiv.org/abs/2510.18268)] <sub><img alt="tags: medical, seg, agg, preprint" src="https://img.shields.io/static/v1?label=tags&amp;message=medical%20%7C%20seg%20%7C%20agg%20%7C%20preprint&amp;color=cf222e&amp;style=flat-square" height="16"></sub>
- Dual Debiasing Learning for Single-Source Federated Domain Generalization under Data Imbalance (**SSRN 2025**) [[paper](https://doi.org/10.2139/ssrn.5774586)] <sub><img alt="tags: general, causal, preprint" src="https://img.shields.io/static/v1?label=tags&amp;message=general%20%7C%20causal%20%7C%20preprint&amp;color=6e7781&amp;style=flat-square" height="16"></sub>
- FedBPrompt: Federated Domain Generalization with Augmented Bag Prompts for Vision-Language Person ReID (**arXiv 2026**) [[paper](https://arxiv.org/abs/2601.03723)] <sub><img alt="tags: vision, reid, prompt, preprint" src="https://img.shields.io/static/v1?label=tags&amp;message=vision%20%7C%20reid%20%7C%20prompt%20%7C%20preprint&amp;color=1f6feb&amp;style=flat-square" height="16"></sub>
- FedSSG: Style-Selective Global Aggregation for Federated Domain Generalization in Medical Image Classification (**arXiv 2026**) [[paper](https://arxiv.org/abs/2601.00934)] <sub><img alt="tags: medical, cls, style, preprint" src="https://img.shields.io/static/v1?label=tags&amp;message=medical%20%7C%20cls%20%7C%20style%20%7C%20preprint&amp;color=cf222e&amp;style=flat-square" height="16"></sub>
- FED-DIP: Federated Domain Generalization (**OpenReview 2026 Submission**) [[paper](https://openreview.net/forum?id=ROrCLTyQb1)] <sub><img alt="tags: fm, preprint" src="https://img.shields.io/static/v1?label=tags&amp;message=fm%20%7C%20preprint&amp;color=8250df&amp;style=flat-square" height="16"></sub>
- FedHyMoe: Heterogeneous One-Shot Federated Learning with Model-Agnostic Mixture-of-Experts (**OpenReview 2026 Submission**) [[paper](https://openreview.net/forum?id=8AT6UBjpVV)] <sub><img alt="tags: moe, preprint" src="https://img.shields.io/static/v1?label=tags&amp;message=moe%20%7C%20preprint&amp;color=6e7781&amp;style=flat-square" height="16"></sub>
- CO-EVO: Co-evolving Semantic Anchoring and Style Diversification for Federated Domain Generalization in Person Re-identification (**arXiv 2026**) [[paper](https://arxiv.org/abs/2604.11539)] <sub><img alt="tags: vision, reid, style, preprint" src="https://img.shields.io/static/v1?label=tags&amp;message=vision%20%7C%20reid%20%7C%20style%20%7C%20preprint&amp;color=1f6feb&amp;style=flat-square" height="16"></sub>
- FedStain: Modeling Higher-Order Stain Statistics for Federated Domain Generalization in Computational Pathology (**arXiv 2026**) [[paper](https://arxiv.org/abs/2605.14590)] <sub><img alt="tags: medical, style, preprint" src="https://img.shields.io/static/v1?label=tags&amp;message=medical%20%7C%20style%20%7C%20preprint&amp;color=cf222e&amp;style=flat-square" height="16"></sub>
- FedCoda: Calibrating and Debiasing Prototypes for Federated Domain Generalization (**SSRN 2026**) [[paper](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6986034)] <sub><img alt="tags: general, proto, preprint" src="https://img.shields.io/static/v1?label=tags&amp;message=general%20%7C%20proto%20%7C%20preprint&amp;color=6e7781&amp;style=flat-square" height="16"></sub>

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
| FedAlign: Federated Domain Generalization With Cross-Client Feature Alignment | CVPR Workshop 2025 | Workshop paper; workshops are excluded from the core list. |
| Global Intervention and Distillation for Federated Out-of-Distribution Generalization | ICME 2025 | Relevant, but ICME is below CORE A under the current policy. |
| Federated Open-Set Domain Generalization with Adaptive Adjustment Boundary and Weights | ICME 2025 | Relevant, but ICME is below CORE A under the current policy. |
| Federated Joint Learning for Domain and Class Generalization | ICASSP 2026 | Relevant, but ICASSP is below CORE A under the current policy. |
| SCOPE: Shared Content Orchestration of Parameter-Efficient Experts for Federated Domain Generalization | CVPR Workshop 2026 | Workshop paper; workshops are excluded from the core list. |
| FedLOE: Federated Domain Generalization via Locally Overfit Ensemble | TMLR 2026 | Relevant, but TMLR is Q2 in the latest verifiable SJR data used for this update. |

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

   `- Title (**Venue Year**) [[paper](link)] [[code](link)] <sub><img ...></sub>`

   If code is unavailable:

   `- Title (**Venue Year**) [[paper](link)] <sub><img ...></sub>`

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
