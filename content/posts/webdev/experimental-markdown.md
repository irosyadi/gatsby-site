---
layout: default
author: irosyadi
title:  Experimental Markdown
date: 2020-11-26 21:10:40
category: development
tags: ["markdown"]
draft: false
---

#  Experimental Markdown

Experimental markdown to check markdown parser compatibility between Gatsby, Jekyll, Gitbook, and Hugo.

## Internal Link Reference
### Type 1

- [Interactive and Explorable Sites](../webapp/interactive-explorable-web.md)
- [Machine Learning Interactive Visualization](/research/ml-visualization)
- [Interactive Books](/book/interactive-book)
- [Data Visualization](/note/data-visualization)

Success in Gatsby. Success in Jekyll. Fail in Gitbook. Fail in Hugo.

### Type 2
- [app/Interactive and Explorable Sites](../webapp/interactive-explorable-web.md)
- [research/Machine Learning Interactive Visualization](../research/ml-visualization.md)
- [book/Interactive Books](../book/interactive-book.md)
- [note/Data Visualization](../note/data-visualization.md)

Fail in Gatsby. Success in Jekyll. Success in Gitbook. Fail in Hugo.

### Type 3
- [Interactive and Explorable Sites](../webapp/interactive-explorable-web.md)
- [Machine Learning Interactive Visualization](/research/ml-visualization.md)
- [Interactive Books](/book/interactive-book.md)
- [Data Visualization](/note/data-visualization.md)

Fail in Gatsby. Fail in Jekyll. Success in Gitbook. Fail in Hugo.

### Type 4
- [Interactive and Explorable Sites](../webapp/interactive-explorable-web.md)
- [Machine Learning Interactive Visualization](../research/ml-visualization)
- [Interactive Books](../book/interactive-book)
- [Data Visualization](../note/data-visualization)

Fail in Gatsby. Success in Jekyll. Success in Gitbook. Fail in Hugo.

## Number and Bullet

1. One
2. Two
- Three
    - Three.a
    - Three.b

4. Four
5. Five


- List A
2. List B
- List C

## Keyboard
<kbd>imron</kbd>

## Comment
`<!-- Write your comments here -->`

Here is the comment:  
<!-- Write your comments here -->

## Symbol List

💬 speech  
🌏️ globe  
⭐️ star  
🚀 rocket  
👣 footprints  
⚓️ anchor  
🔥 fire  
🎯 target  
📌 pin  
⛔ stop  
‼️ double warning  
❗️ warning
⁉️ question  
✔️☑️ check mark  
❌ cross  
ℹ️ info  
📧 email  
🌐 web  
▶▷ triangle  
⚠️ warning  
💥 danger  
📝 note  
☝️ remember  
⚡️ flash

## Image Hosting in Github

![QR Code Image-small](https://raw.githubusercontent.com/irosyadi/vnote.image/master/1608464780_20201220183102525_18817.png)

## Tittle YAML
- Cannot use `:` in tittle

## Content
- Cannot use `% {` in github.io
- Cannot use `|` in github.io


## SVG
github.io and gitbook.io cannot render svg

![crocodile](https://snapsvg.io/assets/images/crocodile.svg)

## Iframe
```
<iframe src="https://wttr.in" frameborder="0" width="480" height="299" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
```

<div>
<iframe src="https://wttr.in" frameborder="0" width="480" height="299" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
</div>

<div>
<iframe src="https://eth0.me/" frameborder="0" width="100" height="50"</iframe>
</div>

