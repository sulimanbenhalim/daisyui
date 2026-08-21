import { prefix } from "$lib/stores"

// A bare `popover` attribute means popover={true} in JSX, but React types it as an enumerated
// string, so the attribute is dropped and the element is not a popover at all. Anchored on the end
// of the span so it cannot match popovertarget.
const barePopoverSpan = new RegExp(
  '(<span style="color:var\\(--syntax-attr-name\\)">\\s*popover</span>)' +
    '(?!<span style="color:var\\(--syntax-punctuation\\)">=</span>)',
  "g",
)
const popoverValue =
  '<span style="color:var(--syntax-punctuation)">=</span>' +
  '<span style="color:var(--syntax-punctuation)">"</span>' +
  '<span style="color:var(--syntax-attr-value)">auto</span>' +
  '<span style="color:var(--syntax-punctuation)">"</span>'

const replaceStrings = (content, replacements) => {
  const re = new RegExp(
    Object.keys(replacements)
      .map((key) => key.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))
      .join("|"),
    "gi",
  )

  return content.replace(re, (matched) => replacements[matched.toLowerCase()])
}

// SVG presentation attributes are ALSO css property names, so renaming them by plain text
// substitution corrupts css inside a style attribute or an embedded <style> element. Match the
// highlighted attribute-name span instead, so only real attributes are renamed.
const svgAttrsToReplace = {
  "clip-rule": "clipRule",
  "fill-opacity": "fillOpacity",
  "fill-rule": "fillRule",
  "stroke-dasharray": "strokeDasharray",
  "stroke-dashoffset": "strokeDashoffset",
  "stroke-linecap": "strokeLinecap",
  "stroke-linejoin": "strokeLinejoin",
  "stroke-miterlimit": "strokeMiterlimit",
  "stroke-opacity": "strokeOpacity",
  "stroke-width": "strokeWidth",
}

const svgAttrSpan = new RegExp(
  `(<span style="color:var\\(--syntax-attr-name\\)">\\s*)(${Object.keys(svgAttrsToReplace).join("|")})(</span>)`,
  "gi",
)

export const prefixClassNames = (node) => {
  const originalContent = node.innerHTML ?? ""
  let prefixValue

  const update = () => {
    node.innerHTML = originalContent.replaceAll("$$", prefixValue)
  }

  const unsubscribe = prefix.subscribe((value) => {
    prefixValue = value
    update()
  })

  update()

  return {
    update,
    destroy: unsubscribe, // Unsubscribe when the component is destroyed
  }
}

export const htmlToJsx = (node) => {
  const originalContent = node.innerHTML ?? ""

  const stringsToReplace = {
    onclick: "onClick",
    '"0"': "{0}",
    "&lt;!--": "{/*",
    "--&gt;": "*/}",
    '<span style="color:var(--syntax-attr-name)">minlength</span>':
      '<span style="color:var(--syntax-attr-name)">minLength</span>',
    '<span style="color:var(--syntax-attr-name)"> minlength</span>':
      '<span style="color:var(--syntax-attr-name)"> minLength</span>',
    '<span style="color:var(--syntax-attr-name)">    minlength</span>':
      '<span style="color:var(--syntax-attr-name)">    minLength</span>',
    '<span style="color:var(--syntax-attr-name)">maxlength</span>':
      '<span style="color:var(--syntax-attr-name)">maxLength</span>',
    '<span style="color:var(--syntax-attr-name)"> maxlength</span>':
      '<span style="color:var(--syntax-attr-name)"> maxLength</span>',
    '<span style="color:var(--syntax-attr-name)">    maxlength</span>':
      '<span style="color:var(--syntax-attr-name)">    maxLength</span>',

    '<span style="color:var(--syntax-attr-name)">class</span>':
      '<span style="color:var(--syntax-attr-name)">className</span>',
    '<span style="color:var(--syntax-attr-name)"> class</span>':
      '<span style="color:var(--syntax-attr-name)"> className</span>',
    '<span style="color:var(--syntax-attr-name)">  class</span>':
      '<span style="color:var(--syntax-attr-name)">  className</span>',
    '<span style="color:var(--syntax-attr-name)">    class</span>':
      '<span style="color:var(--syntax-attr-name)">    className</span>',
    '<span style="color:var(--syntax-attr-name)">      class</span>':
      '<span style="color:var(--syntax-attr-name)">      className</span>',
    '<span style="color:var(--syntax-attr-name)">        class</span>':
      '<span style="color:var(--syntax-attr-name)">        className</span>',
    '<span style="color:var(--syntax-attr-name)">          class</span>':
      '<span style="color:var(--syntax-attr-name)">          className</span>',
    '<span style="color:var(--syntax-attr-name)">            class</span>':
      '<span style="color:var(--syntax-attr-name)">            className</span>',
    '<span style="color:var(--syntax-attr-name)">              class</span>':
      '<span style="color:var(--syntax-attr-name)">              className</span>',
    '<span style="color:var(--syntax-attr-name)"> for</span>':
      '<span style="color:var(--syntax-attr-name)"> htmlFor</span>',
    '<span style="color:var(--syntax-attr-name)"> checked</span><span style="color:var(--syntax-punctuation)">=</span><span style="color:var(--syntax-punctuation)">"</span><span style="color:var(--syntax-attr-value)">checked</span><span style="color:var(--syntax-punctuation)">"</span>':
      '<span style="color:var(--syntax-attr-name)"> defaultChecked</span>',
    '<span style="color:var(--syntax-token)"><span style="color:var(--syntax-token)"><span style="color:var(--syntax-punctuation)"&lt;</span>br</span><span style="color:var(--syntax-punctuation)"&gt;</span></span>':
      '<span style="color:var(--syntax-token)"><span style="color:var(--syntax-token)"><span style="color:var(--syntax-punctuation)"&lt;</span>br /</span><span style="color:var(--syntax-punctuation)"&gt;</span></span>',
    '<span style="color:var(--syntax-punctuation)">"</span><span style="color:var(--syntax-attr-value)">0</span><span style="color:var(--syntax-punctuation)">"</span>':
      '<span style="color:var(--syntax-punctuation)">{</span><span style="color:var(--syntax-attr-value)">0</span><span style="color:var(--syntax-punctuation)">}</span>',
    '<span style="color:var(--syntax-punctuation)">"</span><span style="color:var(--syntax-attr-value)">-1</span><span style="color:var(--syntax-punctuation)">"</span>':
      '<span style="color:var(--syntax-punctuation)">{</span><span style="color:var(--syntax-attr-value)">-1</span><span style="color:var(--syntax-punctuation)">}</span>',
    tabindex: "tabIndex",
    autocomplete: "autoComplete",
    inputmode: "inputMode",
    // keep before popovertarget, which is a prefix of it and would match first
    popovertargetaction: "popoverTargetAction",
    popovertarget: "popoverTarget",
  }

  const update = () => {
    node.innerHTML = replaceStrings(originalContent, stringsToReplace)
      .replace(
        svgAttrSpan,
        (_m, before, name, after) => before + svgAttrsToReplace[name.toLowerCase()] + after,
      )
      .replace(barePopoverSpan, `$1${popoverValue}`)
      // fix the broken tabIndex={0} in JSX tab
      .replaceAll(
        'var(--syntax-punctuation)" tabIndex={0}>',
        'var(--syntax-punctuation)" tabindex="0">',
      )
  }

  update()

  return {
    update,
  }
}
