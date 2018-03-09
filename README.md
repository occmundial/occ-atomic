# R12 Common
---
This library contains a collection of shareable styled React components, ready to use for the applications developed by OCC.

R12-common uses the concept of [Atomic Design](http://atomicdesign.bradfrost.com/chapter-2/), in which the components are conceived starting for an atomic component, the simplest element, with no sub-components needed to work.

The Atomic Design's model states 5 stages for componentes:

- Atoms
- Molecules
- Organisms
- Templates
- Pages

Templates and Pages are the result of the application of the other 3 above. So the library consists of Atoms, Molecules and Organisms. It also includes another 'level', called in this library Subatomic.

## Describing each level
---
### Subatomic
Subatomic, which is not an original part of the Atomic Design, is the concept used in this library to refer to 'libraries' that in a way constitute the Atoms. This is, sets of colors, fonts, icons, etc. Basically, they are a set of constants.

### Atoms (Elements)
R12-common refers to Atoms as Elements. The Elements are usually React components with a few html tags, and don't depend on other components. These are the most flexible components, being so simple, are not attached to any specific use case.

### Molecules
The Molecules are components which can be created using combinations of Elements and/or another Molecules. They are still pretty flexible.

### Organisms
These components usually have a more specific use case. They are a section of the template. Organisms are created combining Elements and Molecules.

## Instalation and usage
---
To install this library, use the next command:
```
npm install --save git+https://git@gitlab.occ.com.mx/recluta/r12-common.git#master
```
To use its components, you just have to import them like this:
```
import { Button } from 'r12-common';
```
For more details, check how to implement each component:

- [Subatomic]()
- [Elements]()
- [Molecules]()
- [Organisms]()