export const selector_example = `

  /* Select all elements with class="red" */
    .red {
        color: red;
    }

    /*  Select all elements with class="large" */
    .large {
        font-size: 20px;
    }

    /* Select all elements with class="arial" */
    .arial {
        font-family: Arial;
    }

    /* Select  element with id = "myId" */
    #myId {
        color: blue;
        font-size: 20px;
        font-family: Arial;
    }
`;

export const padding_margin_example = `
    /* padding example  */                                                                        
    .padding-example {
        padding: 10px;
    }

    /* margin example */
    .margin-example {
        margin: 10px;
    }
`;

export const display_postion_float_layout = `
    /* display example */
    .display-example {
        display: block;
    }

    /* position example */

    .position-example {
        position: absolute;
    }

    /* float example */

    .float-example {
        float: left;
    }

    /* layout example */

    .layout-example {
        display: flex;
    }

`;

export const example_display = `
.element {
    display: block;
    position: relative;
    float: left;
  }
    `;

export const background_example = `
    /* background example  color change*/
    .background-example {
        background-color: red;

    }

    /* background example  image change*/
    .background-example {
        background-image: url("img_tree.png");
    }
    `;

export const center_element = `
/* example make element center  horizontal and vertical  using flex*/
.center-example {
    display: flex;
    justify-content: center;
    align-items: center;
}

  /* example make element center  horizontal and vertical  using  grid*/
    .center-example {
        display: grid;
        place-items: center;
    }


    /* example make element center  horizontal and vertical  using  position*/
    .center-example {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

    }


    `;

export const responsive_layout = `
/* Default styles for all devices */
.element {
  width: 100%;
}

/* Styles for devices with a viewport width of 800px or more */
@media (min-width: 800px) {
  .element {
    width: 50%;
  }
}

/* Styles for devices with a viewport width of 400px or more */
@media (min-width: 400px) {
  .element {
    width: 75%;
  }
}
`;

export const animation_example = `
/* example animation  */
@keyframes example {
    from {background-color: red;}
    to {background-color: yellow;}
}

/* example animation  */
@keyframes example {
    0%   {background-color: red;}
    25%  {background-color: yellow;}
    50%  {background-color: blue;}
    100% {background-color: green;}
}

`;

export const responsive_image_galary = `
.image-gallery {
    display: flex;
    flex-wrap: wrap;
  }
  
  .image-gallery img {
    width: 33%;
  }
  
  /* Styles for devices with a viewport width of 800px or more */
  @media (min-width: 800px) {
    .image-gallery img {
      width: 25%;
    }
  }
  
  /* Styles for devices with a viewport width of 400px or more */
  @media (min-width: 400px) {
    .image-gallery img {
      width: 50%;
    }
  }
`;

export const dropdown_menu = `
/* Dropdown Button */

.dropbtn {
    background-color: #4CAF50;
    color: white;
    padding: 16px;
    font-size: 16px;
    border: none;
    cursor: pointer;
    }

/* The container <div> - needed to position the dropdown content */
.dropdown {
    position: relative;
    display: inline-block;
    }

/* Dropdown Content (Hidden by Default) */
.dropdown-content {
    display: none;
    position: absolute;
    background-color: #f1f1f1;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
    }

/* Links inside the dropdown */
.dropdown-content a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    }

/* Change color of dropdown links on hover */
.dropdown-content a:hover {background-color: #ddd;}

/* Show the dropdown menu on hover */
.dropdown:hover .dropdown-content {display: block;}

/* Change the background color of the dropdown button when the dropdown content is shown */
.dropdown:hover .dropbtn {background-color: #3e8e41;}
`;

export const sticky_header = `
/* Make the header stick to the top of the page when you reach its scroll position */
.header {
    position: sticky;
    top: 0;
    background-color: #f1f1f1;
    padding: 50px;
    font-size: 40px;
    }
`;

export const parallax_scrolling = `
/* Create a parallax scrolling effect */
.bgimg-1, .bgimg-2, .bgimg-3 {
    position: relative;
    opacity: 0.65;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    }

/* First image (Logo. Full height) */
.bgimg-1 {
    background-image: url('img_forest.jpg');
    min-height: 100%;
    }

/* Second image (Portfolio) */
.bgimg-2 {
    background-image: url('img_snow.jpg');
    min-height: 400px;
    }

/* Third image (Contact) */
.bgimg-3 {
    background-image: url('img_mountains.jpg');
    min-height: 400px;
    }

/* Turn off parallax scrolling for tablets and phones */
@media only screen and (max-device-width: 1024px) {
    .bgimg-1, .bgimg-2, .bgimg-3 {
        background-attachment: scroll;
    }
}
    `;

export const full_screen_background_image = `
/* Full height image header */
.bgimg-1 {
    background-position: center;
    background-size: cover;
    background-image: url("img_forest.jpg");
    min-height: 100%;
    }

`;
export const selector_example_all = `
  /* select by element name */
    p {
        color: red;
    }

    /* select by id */
    #id-example {
        color: red;
    }

    /* select by class */
    .class-example {
        color: red;
    }

    /* select by attribute */
    [attribute-example] {
        color: red;
    }

   /* select by pseudo-class */
    a:hover {
        color: red;
    }

    /* select by pseudo-element */
    p::first-line {
        color: red;
    }

    `;
export const zindex_example = `
    .z-index-example {
        position: relative;
        width: 200px;
        height: 200px;
        background-color: red;
        z-index: 2;
    }
 `;

export const border_example = `
    .border-example {
        border: 1px solid red;
    }

    .border-example {
        border-width: 1px;
        border-style: solid;
        border-color: red;
        border-radius: 5px;
    }

    .border-example {
        border-top: 1px solid red;
        border-right: 1px solid red;
        border-bottom: 1px solid red;
        border-left: 1px solid red;
    }
`;

export const box_sizing_exmaple = `
    .box-sizing-example {
        width: 200px;
        height: 200px;
        padding: 10px;
        border: 1px solid red;
        box-sizing: border-box;
    }

    .box-sizing-example {
        width: 200px;
        height: 200px;
        padding: 10px;
        border: 1px solid red;
        box-sizing: content-box;
    }
`;

export const box_shadow_exmaple = `
    .box-shadow-example {
        width: 200px;
        height: 200px;
        background-color: red;
        box-shadow: 10px 10px 5px #888888;
    }
`;

export const before_pseudo_element_example = `
    .before-pseudo-element-example {
        position: relative;
        width: 200px;
        height: 200px;
        background-color: red;
    }

    .before-pseudo-element-example::before {
        content: "Hello World";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: blue;
        opacity: 0.5;
    }
`;

export const after_pseudo_element_example = `
    .after-pseudo-element-example {
        position: relative;
        width: 200px;
        height: 200px;
        background-color: red;
    }

    .after-pseudo-element-example::after {
        content: "Hello World";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: blue;
        opacity: 0.5;
    }
`;

export const css_grid_example = `
    .grid-container {
        display: grid;
        grid-template-columns: auto auto auto;
        grid-gap: 10px;
        background-color: #2196F3;
        padding: 10px;
    }

    .grid-item {
        background-color: rgba(255, 255, 255, 0.8);
        border: 1px solid rgba(0, 0, 0, 0.8);
        padding: 20px;
        font-size: 30px;
        text-align: center;
    }
`;

export const flexbox_example = `
    .flex-container {
        display: flex;
        background-color: DodgerBlue;
    }

    .flex-container > div {
        background-color: #f1f1f1;
        margin: 10px;
        padding: 20px;
        font-size: 30px;
    }
`;

export const hover_active_focus_example = `
    .hover-active-focus-example {
        background-color: red;
        width: 200px;
        height: 200px;
    }

    .hover-active-focus-example:hover {
        background-color: blue;
    }

    .hover-active-focus-example:active {
        background-color: green;
    }

    .hover-active-focus-example:focus {
        background-color: yellow;
    }
`;

export const before_after_example = `
    .before-after-example {
        position: relative;
        width: 200px;
        height: 200px;
        background-color: red;
    }

    .before-after-example::before {
        content: "Hello World";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: blue;
        opacity: 0.5;
    }

    .before-after-example::after {
        content: "Hello World";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: green;
        opacity: 0.5;
    }
`;

export const font_face_example = `
    @font-face {
        font-family: myFirstFont;
        src: url(sansation_light.woff);
    }

    .font-face-example {
        font-family: myFirstFont;
    }
`;
