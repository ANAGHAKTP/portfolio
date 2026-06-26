## 2023-10-27 - Remove False Affordances in Cards
**Learning:** Adding `cursor-pointer` to generic `div` containers (like Project cards) that lack real interactive event handlers or semantic interactive tags (`<button>`, `<a>`) creates a false affordance. This confuses keyboard and screen reader users who expect to be able to interact with the element but cannot.
**Action:** Only apply cursor-pointer and hover-state transformation cues (like arrows moving) to elements that are actually interactive.
