---
aliases: [Octave How To]
title: Octave How To
tags: ["numerical"]
date: 2020-12-20 21:28:08
draft: false
---

## Octave How To

### Octave Packages

- [Octave Forge - Packages](https://octave.sourceforge.io/packages.php)

### Install, load, list package

`pkg install -forge package_name`  
`pkg load package_name`  
`pkg list`

### Draw pole, zero, grid, sgrid

```octave
sys=tf([1 1],[1 2])
pzmap(sys)
grid on
sgrid on
```
