# 3 - Applying Responsive Web Design Styles

1. The Basic Structure 
    ```html
     <!-- index.html -->
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <!-- good for printing -->
        <link rel="stylesheet" href="c/base.css">
        <!-- not good for printing -->
        <link rel="stylesheet" media="not print" href="c/mq.css">


         <!-- Browsers  who don't support media query with just have the largest resolution layout  -->
        <!-- [if (lte IE8)&(!IEMobile)]>
            <link rel="stylesheet" media="screen" href="c/nomq.css">
        <!endif]-->
    </head>
    ```
    * need viewport meta tag 
    * initial scale  = 1.0 = actual width
2. CSS files (using Sass)
    ```scss
    /*base.css*/
    /* same as html meta tag but in css for more browser support*/
    @-ms-viewport{
        width: device-width;
    }

    /*Beginning*/
    @import "reset";

    /* smallest layout to be supported */
    @import "smallest";

    /* hiding things for printing  */
    @media print {
        @import "print";
    }
    ```
    ```scss
    /*(scss)mq.css*/
    /*blocks of media queries*/
    /*additive css*/
    @media (min-width:30em){
        @include "min-width-30";
    }

    @media (min-width: 60em){
        @include "min-width-60em";
    }
    ```
    ```scss
    /*(scss)nomq.css*/
    /* for browsers that don't support media queries*/
    @include "min-width-30";
    @include "min-width-60em";
3. Using EM-Based media Queries
    * more proportional
    * layout adjust on font-size (zooming in and out change layout)
    * wroks RWD better
4. RWD Patterns: Navigation
    * high resolution show normal nav as get smaller show sandwich bar
        - need javascript (think what happens if JS disabled)
5. RWD Patterns: Tables and Figures
    1. Tables
        * solution depends on data
    2. Figures
        * picture element
        * be careful of js solutions
            - may run into JS optimization problems


