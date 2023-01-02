export const scss_example = `
    /* scss example */
    $color: #f00; 
    .example {
        color: $color;
        .example2 {
            font-size: 20px;
        }
    }
    `;
export const sass_example = `
    /* sass example */
    $color: #f00;
    .example
        color: $color
        .example2
            font-size: 20px
    `;
export const scss_vs_css_example = `
    /* scss example */
    $color: #f00;
    .example {
        color: $color;
        .example2 {
            font-size: 20px;
        }
    }

    /* css example */
    .example {
        color: #f00;
    }
    .example .example2 {
        font-size: 20px;
    }
    
    `;
export const scss_variables_example = `
    /* scss variables example */
    $color: #f00;
    $large-font: 20px;
    $font-family: Arial;
    .example {
        color: $color;
        font-size: $large-font;
        font-family: $font-family;
    }
    `;
export const scss_nested_css_example = `
    /* scss nested css example */
    .example {
        color: #f00;
        .example2 {
            font-size: 20px;
        }
    }
    `;
export const mixins_example = `
    /* mixins example */
    @mixin large-text {
        font-size: 20px;
        font-family: Arial;
    }
    .example {
        @include large-text;
    }
    `;
export const functions_example = `
    /* functions example */
    @function double($n) {
        @return $n * 2;
    }
    .example {
        width: double(5px);
    }
    `;
export const loop_example = `
    /* for loop example */
    @for $i from 1 through 3 {
        .item-#{$i} { width: 2em * $i; }
    }

    /* while loop example */
    $i: 6;
    @while $i > 0 {
        .item-#{$i} { width: 2em * $i; }
        $i: $i - 2;
    }

    
    `;
export const functions_dynamic_style_example = `
    /* functions dynamic style example */
    @function double($n) {
        @return $n * 2;
    }

    .example {
        width: double(5px);
    }

    .example2 {
        width: double(10px);
    }
    `;
export const control_directives_example = `
    /* control directives example */
    @if 1 + 1 == 2 {
        .example {
            color: #f00;
        }
    }
    @else {
        .example {
            color: #00f;
        }
    }
    `;
export const extend_example = `
    /* extend example */
    .message {
        border: 1px solid #ccc;
        padding: 10px;
        color: #333;
    }
    .success {
        @extend .message;
        border-color: green;
    }
    .error {
        @extend .message;
        border-color: red;
    }
`;
export const each_example = `
    /* each example */
    $list: apple, orange, banana;
    @each $fruit in $list {
        .#{$fruit} {
            background-image: url('/images/#{$fruit}.png');
        }
    }
`;

export const for_loop_based_on_list_example = `
    /* for loop based on list example */
    $list: apple, orange, banana;
    @for $i from 1 through length($list) {
        .item-#{nth($list, $i)} {
            background-image: url('/images/#{$fruit}.png');
        }

    }
`;
export const import_example = `
    /* import example */
    @import 'example';

    .example_1 {
        color: #f00;

    }
`;
export const media_example = `
    /* media example */
    @media screen and (max-width: 600px) {
        .example {
            color: #f00;
        }

    }
`;

export const at_root_example = `
    /* at-root example */
    .example {
        color: #f00;
        @at-root .example2 {
            color: #00f;
        }
    }

`;
