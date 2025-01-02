# Z Vue Pagination

#### _The Vue.js 3 Pagination Library_

<img  src="./assets/demo.gif"  alt="z-vue-pagination">

[![bilaldanny - z-vue-pagination](https://img.shields.io/static/v1?label=bilaldanny&message=z-vue-pagination&color=yellow&logo=github)](https://github.com/bilaldanny/z-vue-pagination "Go to GitHub repo")

[![npm version](https://img.shields.io/npm/v/z-vue-pagination.svg)](http://badge.fury.io/js/z-vue-pagination) [![npm downloads](https://img.shields.io/npm/dm/z-vue-pagination.svg)](http://badge.fury.io/js/z-vue-pagination) [![License](https://img.shields.io/badge/License-MIT-blue)](https://github.com/bilaldanny/z-vue-pagination/blob/main/LICENSE)

Z Vue Paginate is a modern and powerfull vue js pagination library with a large set of various pagination components that are flexible, very lightweight, SEO friendly, customizable with pure CSS and very easy to use.

## Key Features

- All pagination functionalities are built in to the package with 0 dependants.

- Various different types of pagination components that you can enable or disable according to your needs, and what suits your website best.

- Complete customization support for every component using pure CSS.

- Complete RTL support.

- Search Engine Optimization friendly.

- Different localizations support.

- Package is built with typescript and vite with complete support for vue.js (3x)

&nbsp;

# Table of Contents

- [**_Demo_**](#demo)

- [**_Requirements_**](#requirements)

- [**_Installation_**](#installation)

- [**_Vue.js_**](#vuejs)

- [**_Usage_**](#usage)

- [**_API_**](#api)

- [**_Component Attributes_**](#Component-Attributes)

- [**_Class Name Attributes_**](#Class-Name-Attributes)

- [**_Slot Names_**](#Slot-Names)

- [**_Events_**](#Events)

- [**_Author_**](#author)

- [**_License_**](#license)

&nbsp;

![Demo](./assets/demo.gif)

## Requirements

This package supports vue.js, you are required to use:

- Vue.js 3.x

&nbsp;

## Installation

To use the package you must first add the it to your dependencies in your project.

```bash

$  npm  i  z-vue-pagination

```

Then you have to register the package in your project as well as import a necessary css file that comes with the package.

### Vue.js

Global Import Component

```javascript
import { createApp } from "vue";

import App from "./App.vue";

// import the package

import ZVuePagination from 'z-vue-pagination';

// Register the package

createApp(App).use(ZVuePagination).mount("#app");
```

Local Import Component

```javascript
import ZVuePagination from 'z-vue-pagination';

// Register the package

export default {
  ...
  components: {
    ZVuePagination
  }
  ...
}
```

&nbsp;

## Usage

A complete z-vue-pagination component example with some custom CSS customization would be like this:

```html
<script setup lang="ts">
  import {ref} from 'vue'

  const onClickHandler = (page: number) => {
    console.log(page);
  };

  const currentPage = ref(1);
  const totalItems = 150;
  const perPage = 10;
</script>

<template>
  <z-vue-pagination 
    :totalItems="totalItems"
    :items-per-page="perPage"
    :max-pages-shown="5"
    v-model="currentPage"
    :showDisabled="true"
    :disableBreakpointButtons="true"
    :showEndingButtons="true"
    :showJumpButtons="true"
    @click="onClickHandler"
  />
</template>
```

##### Result of the above code:

<img  src="./assets/demo.jpg"  width="500" />

&nbsp;

&nbsp;

&nbsp;

&nbsp;

## Required Attributes

Total required attributes to build a full pagination for your website is only two attributes, the component will handle all the other functionalities and attributes by default

as simple as this example:

```html
<z-vue-pagination :total-items="200" v-model="currentPage" />
```

##### Result of the above code:

<img  src="./assets/demo1.jpg"  width="500" />

&nbsp;

&nbsp;

&nbsp;

&nbsp;

## Configurations

You have total control over your pagination component, you can configure every element's appearence, number and behavior.

Example: you can set items per single page, maximum pagination buttons to show and a click event handler.

```html
<z-vue-pagination
  :total-items="50"
  v-model="currentPage"
  :items-per-page="5"
  :max-pages-shown="5"
  @click="onClickHandler"
/>
```

##### Result of the above code:

<img  src="./assets/demo1.jpg"  width="500" />

&nbsp;

&nbsp;

&nbsp;

&nbsp;

## (Show/Hide) or (Enable/Disable) breakpoint buttons

Breakpoint buttons are clickable and shown by default, if you click on them you will get a jump of max-pages-shown / 2 in the pagination

You can Disable/Enable or Hide/Show them through attributes

```html
<!-- Hide Breakpoint Buttons -->

<z-vue-pagination
  :total-items="50"
  v-model="currentPage"
  :items-per-page="5"
  :max-pages-shown="5"
  :showBreakpointButtons="true"
  @click="onClickHandler"
/>

<!-- Disable Breakpoint Buttons -->

<z-vue-pagination
  :total-items="50"
  v-model="currentPage"
  :items-per-page="5"
  :max-pages-shown="5"
  @click="onClickHandler"
  :disableBreakpointButtons="true"
/>
```

&nbsp;

&nbsp;

&nbsp;

## Show Ending Buttons (First and Last Page Buttons)

You can hide/show Ending buttons to be able to navigate to first and last page of the pagination component

```html
<!-- Hide the Prev/Next buttons permanently -->

<z-vue-pagination
  :total-items="50"
  v-model="currentPage"
  :items-per-page="5"
  :max-pages-shown="5"
  :showEndingButtons="true"
  :showDisabled="true"
/>
```

##### Result of the above code:

<img  src="./assets/demo2.jpg"  width="500" />

&nbsp;

&nbsp;

&nbsp;

&nbsp;

## Hide Prev/Next buttons

You can hide prev/next buttons in two ways

```html
<!-- Hide the Prev/Next buttons permanently -->

<z-vue-pagination
  :total-items="50"
  v-model="currentPage"
  :items-per-page="5"
  :max-pages-shown="5"
  @click="onClickHandler"
  :hide-prev-next="true"
/>

<!-- Hide the Prev button only when pagination is at the beginning and hide next button only when pagination reaches the end -->

<z-vue-pagination
  :total-items="50"
  v-model="currentPage"
  :items-per-page="5"
  :max-pages-shown="5"
  @click="onClickHandler"
  :hide-prev-next-when-ends="true"
/>
```

##### Result of the above code:

<img  src="./assets/demo3.jpg"  width="500" >

&nbsp;

&nbsp;

&nbsp;

&nbsp;

## Change buttons content

You can change the content inside the prev/next buttons in two ways:

1- Pass a string to **prev-button-content** or **next-button-content** attributes

```html
<z-vue-pagination
  :total-items="50"
  v-model="currentPage"
  :items-per-page="5"
  :max-pages-shown="5"
  @click="onClickHandler"
  prev-button-content="<<<"
  next-button-content=">>>"
/>
```

##### Result of the above code:

<img  src="./assets/demo4.jpg"  width="500" />

&nbsp;

&nbsp;

2- Inject your own HTML content into the buttons through custom slots

```html
<z-vue-pagination
  :total-items="50"
  v-model="currentPage"
  :items-per-page="5"
  :max-pages-shown="5"
  @click="onClickHandler"
>
  <template #prev-button>
    <span>
      <img src="./assets/backward-arrow-icon.png" height="18" />
    </span>
  </template>

  <template #next-button>
    <span>
      <img src="./assets/forward-arrow-icon.png" height="18" />
    </span>
  </template>
</z-vue-pagination>
```

##### Result of the above code:

<img  src="./assets/demo5.jpg"  width="500" />

&nbsp;

&nbsp;

&nbsp;

&nbsp;