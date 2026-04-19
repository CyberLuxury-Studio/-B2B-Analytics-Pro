import os

page_path = "src/app/page.tsx"
with open(page_path, "r") as f:
    content = f.read()

# Fix the 'use client' directive issue
if '"use client";' in content:
    content = content.replace('"use client";', '')

content = '"use client";\n\n' + content

with open(page_path, "w") as f:
    f.write(content)
