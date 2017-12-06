# 1 - Responsive Web Design (RWD) 101

* **The web is _not_ fixed width**
* honor the proportion of the design
* RWD === primary CSS
* RWD = fluid foundation + flexible content + media queries
* ie. RWD = proportional (responsive) design

1. A Fluid Foundation  
    * responsive grid
    * % grid instead of pixel (px) grid
    *  % = target px / context px * 100
    * ex. 300px wide grid
    ```css  
    /* FIXED-WIDTH */
  
        .span-1 {
                width: 100px;
            }
    ```
    VS.

    ```css   
    /* FLUID */
        .span-1 {
                width: 30%; /* % = 100px / 300px * 100 */
            }
    ```

    
2. Rounding and Semantic Grids Systems
    * proportional design isn't pixel perfect and that's okay!
3. Flexible Content
    * responsive context inside responsive grid
    * Images and video
    ```css 
        img {
                max-width: 100%
            }
        
    ```
    image render at native resolution unless it is wider than it's container
4. Media Queries
    * Media Types
        - **_all_** = everything and is the default
        - braille, embossed, speech, handheld, projection, **_screen_**, tv, **_print_**
    * Media Features
        * **_width_** (current browser width), height, device-width (width of actual device), device-height, **_orientation_** (portrait vs landscape), grid, aspect-ratio, grid and more!
    * Large Resolution First
        - Start css with largest layout use max-width to change layout for smaller devices (subtractive  css)
        - PROS: Easy old IE support
        - CONS: Small Devices load all assets
    * Small Resolution First
        - start css smallest layout  use min-width to change layout for larger devices (additve css) 
        - end up with smaller style sheets
        - PROS: More logical (build up vs tear down)
        - CONS: OLD IE is tricky
    * [Media Query Bookmarklet](https://github.com/sparkbox/mediaQueryBookmarklet) tool to find where media queries need to be added
5. Other Considerations for RWD
    * Touch Target Area 
        - 44px X 44px is smallest target on a phone 
        use padding instead of margin
    * Hover State
        - don't hide stuff behind :hover
        - use modernizer
    * Contrast
        - test site in sun, in bed in dark room, experiment
    * Readabiltiy 
        -increase font size for
         
    
    
    
    
