# Selective FedDG Preprints

[Back to README](../README.md)

These manuscripts are kept separate from peer-reviewed publications. An arXiv, SSRN, or OpenReview entry alone does not establish acceptance. Retention is selective, based on distinctive FedDG settings or mechanisms; it is not a claim that every preprint meets the venue priority.

The `preprint` status means a peer-reviewed publication was not established in this update, not necessarily that none exists. Please contribute a verified publisher record when available.

<a id="fed-cfm-2026"></a>
### FedCFM: Federated Continual Domain Generalization for Fake Speech Detection via Conditional Flow Matching

**arXiv 2026**. [[paper](https://arxiv.org/abs/2610.01242)]

- Lenses: Architecture Design: Domain diversity, augmentation, and task-specific designs; Architecture Design: Personalization, normalization, and modular models.
- Protocol: Not individually audited for target-access conditions.
- Metadata check: checked-2026-10-12; [source](https://arxiv.org/abs/2610.01242).
- Topic tags: speech, continual, generation.

Selective manuscript: extends FedDG to continual spoof-domain shifts through conditional-flow generation and cross-client generator exchange. The authors report IEEE SLT 2026 acceptance in the arXiv comments; a published proceedings record has not been verified.

<a id="p101"></a>
### FedStain: Modeling Higher-Order Stain Statistics for Federated Domain Generalization in Computational Pathology

**arXiv 2026**. [[paper](https://arxiv.org/abs/2605.14590)]

- Lenses: Security: Shared artifacts and their exposure surface; Communication Efficiency: Styles, prototypes, distilled knowledge, and domain summaries; Architecture Design: Domain diversity, augmentation, and task-specific designs.
- Protocol: Not individually audited for target-access conditions.
- Metadata check: checked-2026-10-12; [source](https://arxiv.org/abs/2605.14590).
- Topic tags: medical, style.

Selective preprint: shares higher-order stain descriptors, including skewness and kurtosis, to address non-Gaussian pathology stain shifts. Compact statistics do not by themselves establish formal privacy.

<a id="p098"></a>
### Fed-DIP: Federated Domain Generalization by Synergizing Implicit Disentanglement and Context-Aware Prompting

**OpenReview 2026**. [[paper](https://openreview.net/forum?id=VbmV3rs284)]

- Lenses: Architecture Design: Foundation models, prompts, and knowledge infusion; Architecture Design: Personalization, normalization, and modular models.
- Protocol: Not individually audited for target-access conditions.
- Metadata check: checked-2026-10-12; [source](https://openreview.net/forum?id=VbmV3rs284).
- Topic tags: fm.

Selective manuscript: combines implicit disentanglement and context-aware prompting. Public ICLR 2026 submission manuscript located; an acceptance decision has not been verified.

<a id="p102"></a>
### FedCoda: Calibrating and Debiasing Prototypes for Federated Domain Generalization

**SSRN 2026**. [[paper](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6986034)]

- Lenses: Architecture Design: Invariant learning, alignment, and robust optimization.
- Protocol: Not individually audited for target-access conditions.
- Metadata check: checked-2026-10-12; [source](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6986034).
- Topic tags: general, proto.

Retained inherited preprint on prototype calibration and debiasing in FedDG; SSRN identity verified, but peer-reviewed publication status and a full protocol audit are not established.

<a id="p092"></a>
### FedDAG: Federated Domain Adversarial Generation Towards Generalizable Medical Image Analysis

**arXiv 2025**. [[paper](https://arxiv.org/abs/2501.13967)]

- Lenses: Architecture Design: Domain diversity, augmentation, and task-specific designs; Architecture Design: Invariant learning, alignment, and robust optimization.
- Protocol: Not individually audited for target-access conditions.
- Metadata check: checked-2026-10-12; [source](https://arxiv.org/abs/2501.13967).
- Topic tags: medical, augment.

Selective preprint: adversarially generates novel domains rather than relying only on source-style recombination, with sharpness-aware aggregation in medical FedDG.

<a id="p091"></a>
### FedSDAF: Leveraging Source Domain Awareness for Enhanced Federated Domain Generalization

**arXiv 2025**. [[paper](https://arxiv.org/abs/2505.02515)] [[code](https://github.com/pizzareapers/FedSDAF)]

- Lenses: Security: Shared artifacts and their exposure surface; Communication Efficiency: Prompts, lightweight components, and selective updates; Architecture Design: Personalization, normalization, and modular models.
- Protocol: Not individually audited for target-access conditions.
- Metadata check: checked-2026-10-12; [source](https://arxiv.org/abs/2505.02515).

Selective preprint: separates local domain-aware and shared domain-invariant adapters with bidirectional knowledge distillation. Adapter modularity is not automatically a prompt-learning method.

<a id="p094"></a>
### TreeFedDG: Alleviating Global Drift in Federated Domain Generalization for Medical Image Segmentation

**arXiv 2025**. [[paper](https://arxiv.org/abs/2510.18268)]

- Lenses: Architecture Design: Hierarchical and cloud-edge federation; Architecture Design: Personalization, normalization, and modular models; Architecture Design: Deployment-sensitive and target-exposed FedDG extensions.
- Protocol: Deployment protocol requires inspection.
- Metadata check: checked-2026-10-12; [source](https://arxiv.org/abs/2510.18268).
- Topic tags: medical, seg, agg.

Selective preprint: tree-structured aggregation with feature-similarity-guided model-chain retrieval at inference. Inspect the deployment routing and target-information assumptions before a strict target-free comparison.
