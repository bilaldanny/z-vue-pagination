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

- [**_Hide\Show Attributes_**](#HideShow-Attributes)

- [**_Class Name Attributes_**](#Class-Name-Attributes)

- [**_Content Attributes_**](#Content-Attributes)

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

## Custom Slots

**This 2nd method of injecting html through custom slots in to elements in the previous example is available for all the other controlling elements like breakpoint buttons and jump buttons etc...**

You can see all the slots in the slots table at API section

&nbsp;

&nbsp;

&nbsp;

&nbsp;

## Show Jump Buttons

Jump Buttons are extra layers on top of Prev/Next buttons, if you enable them they will appear at each ends of the component, you can customize and configure them just like any other elements of the component and if you click on them it will have the same behavior as clicking on breakppoint buttons which is jumping by (max-pages-show/2)

```html
<z-vue-pagination
  :total-items="50"
  v-model="currentPage"
  :items-per-page="5"
  :max-pages-shown="5"
  :showBreakpointButtons="false"
  :showJumpButtons="true"
/>
```

##### Result of the above code:

<img  src="./assets/demo6.jpg"  width="500" />

&nbsp;

&nbsp;

&nbsp;

&nbsp;

## Make the component SEO friendly

Pagination components can have a great impact on SEO, it's important to make your pagination elements links, so that when crawlers crawl your page, they will be able to find the pagination elements and extract the links from them.

In order to achive this you can replace the button elements with anchor tag elements by changing **type** attribute to "link" and specify a **linkUrl** attribute to tell crawlers and search engines where this pagination element is pointing to.

**linkUrl** attribute must be a string url to where the pagination element is pointing to, and the string must include \[page\] placeholder, which will be replaced with the actual page number.

example:

```html
<z-vue-pagination
  :total-items="50"
  v-model="currentPage"
  :items-per-page="5"
  :max-pages-shown="5"
  @click="onClickHandler"
  type="link"
  link-url="/blog/posts?page=[page]"
/>
```

**Note:** Changing buttons to anchor tags won't affect the functionality or the behavior of the component, it's just a way to make the component SEO friendly. you will still have to handle the navigation logic yourself in **on-click** event attribute.

&nbsp;

&nbsp;

&nbsp;

&nbsp;

## RTL and Locale Support

There are complete supports for RTL and different localizations without using any other 3rd party libraries

```html
<z-vue-pagination
  :total-items="50"
  v-model="currentPage"
  :items-per-page="5"
  :max-pages-shown="5"
  dir="rtl"
  locale="ar"
/>
```

##### Result of the above code:

<img  src="./assets/demo7.jpg"  width="500" />

&nbsp;

&nbsp;

&nbsp;

&nbsp;

## Custom Styles

By default pagination buttons have the default html styles, you can customize every element of the component through the default class names that are set for each element, or you can set your own class names for any element you want.

```html
<template>
  <z-vue-pagination
    :total-items="50"
    v-model="currentPage"
    :items-per-page="5"
    :max-pages-shown="5"
    paginate-buttons-class="btn"
    active-page-class="btn-active"
    back-button-class="back-btn"
    next-button-class="next-btn"
  />
</template>

<style>
  .btn {
    height: 40px;

    width: 40px;

    border: none;

    margin-inline: 5px;

    cursor: pointer;
  }

  .back-btn {
    background-color: red;
  }

  .next-btn {
    background-color: red;
  }

  .btn-active {
    background-color: blue;

    color: white;
  }
</style>
```

##### Result of the above code:

<img  src="./assets/demo8.jpg"  width="500" />

You don't necessarily need to set class names for the elements if you don't want to, you can just use their default class names that are available in the class names table in the API section.

**Important Note:** If the <style> tag of the parent component is scoped, you have to use the ::deep combinator in order to apply the styles to the elements of the component.

&nbsp;

&nbsp;

&nbsp;

## API

### Component Attributes

Note that all the attributes in the table below can be written in both camel case and kebab case styles.

| Key | Description | Type | Options | Default | Validations |
| - | - | - | - | - | - |
| totalItems | Total Number of items that you want to paginate | Number |  |  | Required |
| itemsPerPage | Total Number of items that you explicitly want to show per one page | Number |  | 10 | Must be greater than 0 |
| maxPagesShown | Maximum pagination buttons (Number Buttons only) to be shown | Number |  | 5 | Must be greater than 0 |
| v-model | Current active page | Number |  | 1 | Required and must be greater than 0 |
| dir | Direction of the component (RTL Support) | String | "ltr" \| "rtl" | "ltr" | Must be one of either options |
| type | HTML Element type of the pagination component | String | "button" \| "link" | "button" | Must be either a link or button |
| linkUrl | The url string that the anchor tag is pointing to | String |  | "#" | required when type attribute is set to 'link', and must include "\[page\]" placeholder in order to be replaced with the actual page number during rendering |
| locale | Localization of the component (currently only Arabic, English and Persian locales are supported, more localization options will be added! | String | "en" \| "ar" \| "ir" | "en" | Must be one of the available options) |
| onClick (Deprecated, use @click event handler instead) | A function that runs when the user changes a page by clicking any of the elements of the component (Passing the new active page to the function as a parameter) | Function |  | ()=>{} |  |

&nbsp;

&nbsp;

### Hide\Show Attributes
All the attributes have a default value.

| Key | Description | Type | Options | Default | Validations |
| - | - | - | - | - | - |
| showEndingButtons | Show First and Last page buttons on each endings of the pagination component | Boolean | true \| false | false |  |
| hidePrevNext | Hide the Prev and Next buttons | Boolean | true \| false | false |  |
| showBreakpointButtons | Show/Hide the breakpoint buttons | Boolean | true \| false | true |  |
| disableBreakpointButtons | Enable/Disable the breakpoint buttons | Boolean | true \| false | false |  |
| showJumpButtons | Show/Hide the jump buttons | Boolean | true \| false | false |  |
| disablePagination | Enable/Disable the whole component buttons | Boolean | true \| false | false |  |
| showDisabled | Show/Hide the disabled buttons | Boolean | true \| false | false |  |

&nbsp;

&nbsp;

### Class Name Attributes
All the class names have a default value.

| Key | Description | Type | Options | Default | Validations |
| - | - | - | - | - | - |
| paginationContainerClass | Styles for this class will be applied for the container of the whole component | String |  | pagination-container |  |
| nextItemClass | Styles for this class will be applied for the next button li | String |  | next |  |
| nextButtonClass | Styles for this class will be applied for the next button | String |  | next-button |  |
| disabledNextButtonClass | Styles for this class will be applied for the next button disabled | String |  | disabled-next-button |  |
| backItemClass | Styles for this class will be applied for the back button li | String |  | previous |  |
| backButtonClass | Styles for this class will be applied for the back button | String |  | back-button |  |
| disabledBackButtonClass | Styles for this class will be applied for the back button disabled | String |  | disabled-back-button |  |
| activeItemClass | Styles for this class will be applied for the active li | String |  | active |  |
| activePageClass | Styles for this class will be applied for the active button | String |  | active-page |  |
| firstPageButtonClass | Styles for this class will be applied for the first page button | String |  | first-page-button |  |
| firstPageItemClass | Styles for this class will be applied for the first page li | String |  | first-page-item |  |
| paginateItemsClass | A global class name, styles for this class will be applied for all of the li inside the component | String |  | paginate_button page-item |  |
| paginateButtonsClass | A global class name, styles for this class will be applied for all of the button inside the component | String |  | page-link |  |
| disabledPaginateButtonsClass | A global class name, styles for this class will be applied for all of the disabled button inside the component | String |  | disabled |  |
| disabledPaginateItemsClass | A global class name, styles for this class will be applied for all of the disabled li inside the component | String |  | disabled |  |
| numberButtonsClass | A global class name, styles for this class will be applied for all of the number buttons inside the component | String |  | number-buttons |  |
| lastPageItemClass | Styles for this class will be applied for the last page button li | String |  | last_page_item |  |
| lastPageButtonClass | Styles for this class will be applied for the last page button | String |  | last-page-button |  |
| disabledLastButtonClass | Styles for this class will be applied for the last page button disabled | String |  | disabled-last-button |  |
| startingBreakpointButtonClass | Styles for this class will be applied for the starting breakpoint button | String |  | starting-breakpoint-button |  |
| endingBreakpointButtonClass | Styles for this class will be applied for the ending breakpoint button | String |  | ending-breakpoint-button |  |
| disabledBreakPointButtonClass | Styles for this class will be applied for the breakpoint button disabled | String |  | disabled-breakpoint-button |  |
| forwardJumpItemClass | Styles for this class will be applied for the forward jump item | String |  | forward_jump_item |  |
| forwardJumpButtonClass | Styles for this class will be applied for the forward jump button | String |  | forward-jump-button |  |
| disabledForwardJumpButtonClass | Styles for this class will be applied for the forward jump button disabled | String |  | disabled-forward-jump-button |  |
| backwardJumpItemClass | Styles for this class will be applied for the backward jump item | String |  | backward-page-jump |  |
| backwardJumpButtonClass | Styles for this class will be applied for the backward jump button | String |  | backward-jump-button |  |
| disabledBackwardJumpButtonClass | Styles for this class will be applied for the backward jump button disabled | String |  | disabled-backward-jump-button |  |

&nbsp;

&nbsp;

### Content Attributes
All the attributes have a default value.

| Key | Description | Type | Options | Default | Validations |
| - | - | - | - | - | - |
| firstPageContent | Content to be shown in the first page button | String | String \| Slot | First | Must be either a string or a custom slot |
| lastPageContent | Content to be shown in the last page button | String | String \| Slot | Last | Must be either a string or a custom slot |
| prevButtonContent | Content to be shown in the prev button | String | String \| Slot | Prev | Must be either a string or a custom slot |
| nextButtonContent | Content to be shown in the next button | String | String \| Slot | Next | Must be either a string or a custom slot |
| startingBreakpointContent | Content to be shown in the starting breakpoint button | String | String \| Slot | ... | Must be either a string or a custom slot |
| endingBreakpointButtonContent | Content to be shown in the ending breakpoint button | String | String \| Slot | ... | Must be either a string or a custom slot |
| forwardJumpButtonContent | Content to be shown in the forward jump button | String | String \| Slot | >> | Must be either a string or a custom slot |
| backwardJumpButtonContent | Content to be shown in the backward jump button | String | String \| Slot | << | Must be either a string or a custom slot |
