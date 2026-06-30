with open(".jules/sentinel.md", "r") as f:
    lines = f.readlines()
# keep the first occurrence of the entry
first_occur = -1
for i, line in enumerate(lines):
    if line.strip() == "## 2025-06-29 - Prevent DOM-based form action hijacking":
        first_occur = i
        break
with open(".jules/sentinel.md", "w") as f:
    if first_occur != -1:
        f.writelines(lines[:first_occur + 5])
