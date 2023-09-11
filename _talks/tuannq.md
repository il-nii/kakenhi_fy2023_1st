---
name: "From stable model condition to learning normal rules in the form of program matrices"
speakers:
  - Tuan Nguyen
categories:
  - Afternoon Session 2 (Day1)

# links:
#   - name: Recodring
#     icon: video
#     absolute_url: https://media.ccc.de/
#   - name: Wikipedia
#     absolute_url: https://en.wikipedia.org
---

  Linear algebraic approaches have been introduced recently for logic programming. Although they have provided a very fast way to compute least models for definite programs, stable models for normal logic programs have not been computed efficiently, since they usually assume an exponential number of guesses in the initial matrix. In order to make linear algebraic approaches really useful in practice, this paper proposes two main improvements to the linear algebraic method for stable model computation of normal logic programs by Sakama .et .al. The first improvement is to employ a fast and robust way to generate the initial matrix. The second one is to employ the idea of unfolding rules in the language of linear algebra for both $And$-rules and $Or$-rules. We further incorporate a technique for handling loops in linear algebraic computation. An experimental evaluation with the graph coloring problem is shown to verify the performance of these improvements.
