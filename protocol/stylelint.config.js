/* eslint-env node */

module.exports = {
    'rules': {
        'color-no-invalid-hex': true,
        'font-family-no-duplicate-names': true,
        'font-family-name-quotes': 'always-where-recommended',
        'function-name-case': 'lower',
        'function-url-no-scheme-relative': true,
        'function-url-quotes': 'always',
        'number-no-trailing-zeros': true,
        'length-zero-no-unit': true,
        'unit-case': 'lower',
        'unit-no-unknown': true,
        'property-case': 'lower',
        'property-no-unknown': true,
        'keyframe-declaration-no-important': true,
        'declaration-no-important': true,
        'declaration-block-no-shorthand-property-overrides': true,
        'declaration-block-single-line-max-declarations': 1,
        'declaration-block-trailing-semicolon': 'always',
        'declaration-block-semicolon-newline-after': 'always-multi-line',
        'block-no-empty': true,
        'selector-pseudo-class-no-unknown': true,
        'selector-pseudo-element-no-unknown': true,
        'selector-pseudo-element-case': 'lower',
        'selector-type-case': 'lower',
        'selector-type-no-unknown': true,
        'selector-max-empty-lines': 0,
        'media-feature-name-case': 'lower',
        'media-feature-name-no-unknown': [true, {
            ignoreMediaFeatureNames: ['min--moz-device-pixel-ratio']
        }],
        'comment-no-empty': true,
        'max-nesting-depth': 5,
        'no-invalid-double-slash-comments': true,
        'no-unknown-animations': true,
        'no-extra-semicolons': true,
        'no-missing-end-of-source-newline': true,
        'no-eol-whitespace': true
    }
};
