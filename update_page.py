import os

page_path = "src/app/page.tsx"
with open(page_path, "r") as f:
    content = f.read()

import_stmt = 'import { MetricCardsSection } from "./MetricCardsSection";'
content = import_stmt + "\n" + content

content = content.replace('{/* Hero Section */}',
                         '{/* Hero Section */}')
                         
# Let's insert it right after the Hero section and before the Feature Grid
content = content.replace('        {/* Feature Grid */}',
                         '        <MetricCardsSection />\n\n        {/* Feature Grid */}')

with open(page_path, "w") as f:
    f.write(content)
