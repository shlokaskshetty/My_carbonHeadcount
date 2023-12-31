/**
 * Copyright IBM Corp. 2016, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _rollupPluginBabelHelpers = require('../../_virtual/_rollupPluginBabelHelpers.js');
var iconsReact = require('@carbon/icons-react');
var cx = require('classnames');
var PropTypes = require('prop-types');
var React = require('react');
var index = require('../../internal/focus/index.js');
var useId = require('../../internal/useId.js');
var usePrefix = require('../../internal/usePrefix.js');
var events = require('../../tools/events.js');
var useMergedRefs = require('../../internal/useMergedRefs.js');
var deprecate = require('../../prop-types/deprecate.js');
require('../FluidForm/FluidForm.js');
var FormContext = require('../FluidForm/FormContext.js');
var match = require('../../internal/keyboard/match.js');
var keys = require('../../internal/keyboard/keys.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var cx__default = /*#__PURE__*/_interopDefaultLegacy(cx);
var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var _Close;
const Search = /*#__PURE__*/React__default["default"].forwardRef(function Search(_ref, forwardRef) {
  let {
    autoComplete = 'off',
    className,
    closeButtonLabelText = 'Clear search input',
    defaultValue,
    disabled,
    isExpanded = true,
    id,
    labelText,
    // @ts-expect-error: deprecated prop
    light,
    onChange = () => {},
    onClear = () => {},
    onKeyDown,
    onExpand,
    placeholder = 'Search',
    renderIcon,
    role = 'searchbox',
    size = 'md',
    type = 'text',
    value,
    ...rest
  } = _ref;
  const hasPropValue = value || defaultValue ? true : false;
  const prefix = usePrefix.usePrefix();
  const {
    isFluid
  } = React.useContext(FormContext.FormContext);
  const inputRef = React.useRef(null);
  const ref = useMergedRefs.useMergedRefs([forwardRef, inputRef]);
  const expandButtonRef = React.useRef(null);
  const inputId = useId.useId('search-input');
  const uniqueId = id || inputId;
  const searchId = `${uniqueId}-search`;
  const [hasContent, setHasContent] = React.useState(hasPropValue || false);
  const [prevValue, setPrevValue] = React.useState(value);
  const searchClasses = cx__default["default"]({
    [`${prefix}--search`]: true,
    [`${prefix}--search--sm`]: size === 'sm',
    [`${prefix}--search--md`]: size === 'md',
    [`${prefix}--search--lg`]: size === 'lg',
    [`${prefix}--search--light`]: light,
    [`${prefix}--search--disabled`]: disabled,
    [`${prefix}--search--fluid`]: isFluid
  }, className);
  const clearClasses = cx__default["default"]({
    [`${prefix}--search-close`]: true,
    [`${prefix}--search-close--hidden`]: !hasContent || !isExpanded
  });
  if (value !== prevValue) {
    setHasContent(!!value);
    setPrevValue(value);
  }
  function clearInput() {
    if (!value && inputRef.current) {
      inputRef.current.value = '';
    }
    const inputTarget = Object.assign({}, inputRef.current, {
      value: ''
    });
    const clearedEvt = {
      target: inputTarget,
      type: 'change'
    };
    onChange(clearedEvt);
    onClear();
    setHasContent(false);
    index.focus(inputRef);
  }
  function handleChange(event) {
    setHasContent(event.target.value !== '');
  }
  function handleKeyDown(event) {
    if (match.match(event, keys.Escape)) {
      event.stopPropagation();
      if (inputRef.current?.value) {
        clearInput();
      }
      // ExpandableSearch closes on escape when isExpanded, focus search activation button
      else if (onExpand && isExpanded) {
        expandButtonRef.current?.focus();
      }
    }
  }
  function handleExpandButtonKeyDown(event) {
    if (match.match(event, keys.Enter) || match.match(event, keys.Space)) {
      event.stopPropagation();
      if (onExpand) {
        onExpand(event);
      }
    }
  }
  return /*#__PURE__*/React__default["default"].createElement("div", {
    role: "search",
    "aria-label": placeholder,
    className: searchClasses
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    "aria-labelledby": onExpand ? uniqueId : undefined,
    role: onExpand ? 'button' : undefined,
    className: `${prefix}--search-magnifier`,
    onClick: onExpand,
    onKeyDown: handleExpandButtonKeyDown,
    tabIndex: onExpand && !isExpanded ? 1 : -1,
    ref: expandButtonRef,
    "aria-expanded": onExpand && isExpanded ? true : undefined,
    "aria-controls": onExpand ? uniqueId : undefined
  }, /*#__PURE__*/React__default["default"].createElement(CustomSearchIcon, {
    icon: renderIcon
  })), /*#__PURE__*/React__default["default"].createElement("label", {
    id: searchId,
    htmlFor: uniqueId,
    className: `${prefix}--label`
  }, labelText), /*#__PURE__*/React__default["default"].createElement("input", _rollupPluginBabelHelpers["extends"]({
    autoComplete: autoComplete,
    className: `${prefix}--search-input`,
    defaultValue: defaultValue,
    disabled: disabled,
    role: role,
    ref: ref,
    id: uniqueId,
    onChange: events.composeEventHandlers([onChange, handleChange]),
    onKeyDown: events.composeEventHandlers([onKeyDown, handleKeyDown]),
    placeholder: placeholder,
    type: type,
    value: value,
    tabIndex: onExpand && !isExpanded ? -1 : undefined
  }, rest)), /*#__PURE__*/React__default["default"].createElement("button", {
    "aria-label": closeButtonLabelText,
    className: clearClasses,
    disabled: disabled,
    onClick: clearInput,
    title: closeButtonLabelText,
    type: "button"
  }, _Close || (_Close = /*#__PURE__*/React__default["default"].createElement(iconsReact.Close, null))));
});
Search.displayName = 'Search';
Search.propTypes = {
  /**
   * Specify an optional value for the `autocomplete` property on the underlying
   * `<input>`, defaults to "off"
   */
  autoComplete: PropTypes__default["default"].string,
  /**
   * Specify an optional className to be applied to the container node
   */
  className: PropTypes__default["default"].string,
  /**
   * Specify a label to be read by screen readers on the "close" button
   */
  closeButtonLabelText: PropTypes__default["default"].string,
  /**
   * Optionally provide the default value of the `<input>`
   */
  defaultValue: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].number]),
  /**
   * Specify whether the `<input>` should be disabled
   */
  disabled: PropTypes__default["default"].bool,
  /**
   * Specify a custom `id` for the input
   */
  id: PropTypes__default["default"].string,
  /**
   * Specify whether or not ExpandableSearch should render expanded or not
   */
  isExpanded: PropTypes__default["default"].bool,
  /**
   * Provide the label text for the Search icon
   */
  labelText: PropTypes__default["default"].node.isRequired,
  /**
   * Specify light version or default version of this control
   */
  light: deprecate["default"](PropTypes__default["default"].bool, 'The `light` prop for `Search` is no longer needed and has ' + 'been deprecated in v11 in favor of the new `Layer` component. It will be moved in the next major release.'),
  /**
   * Optional callback called when the search value changes.
   */
  onChange: PropTypes__default["default"].func,
  /**
   * Optional callback called when the search value is cleared.
   */
  onClear: PropTypes__default["default"].func,
  /**
   * Optional callback called when the magnifier icon is clicked in ExpandableSearch.
   */
  onExpand: PropTypes__default["default"].func,
  /**
   * Provide a handler that is invoked on the key down event for the input
   */
  onKeyDown: PropTypes__default["default"].func,
  /**
   * Provide an optional placeholder text for the Search.
   * Note: if the label and placeholder differ,
   * VoiceOver on Mac will read both
   */
  placeholder: PropTypes__default["default"].string,
  /**
   * Rendered icon for the Search.
   * Can be a React component class
   */
  // @ts-expect-error: PropTypes are not expressive enough to cover this case
  renderIcon: PropTypes__default["default"].oneOfType([PropTypes__default["default"].func, PropTypes__default["default"].object]),
  /**
   * Specify the role for the underlying `<input>`, defaults to `searchbox`
   */
  role: PropTypes__default["default"].string,
  /**
   * Specify the size of the Search
   */
  size: PropTypes__default["default"].oneOf(['sm', 'md', 'lg']),
  /**
   * Optional prop to specify the type of the `<input>`
   */
  type: PropTypes__default["default"].string,
  /**
   * Specify the value of the `<input>`
   */
  value: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].number])
};
function CustomSearchIcon(_ref2) {
  let {
    icon: Icon
  } = _ref2;
  const prefix = usePrefix.usePrefix();
  if (Icon) {
    return /*#__PURE__*/React__default["default"].createElement(Icon, {
      className: `${prefix}--search-magnifier-icon`
    });
  }
  return /*#__PURE__*/React__default["default"].createElement(iconsReact.Search, {
    className: `${prefix}--search-magnifier-icon`
  });
}
CustomSearchIcon.propTypes = {
  /**
   * Rendered icon for the Search. Can be a React component class
   */
  icon: PropTypes__default["default"].oneOfType([PropTypes__default["default"].func, PropTypes__default["default"].object])
};

exports["default"] = Search;
