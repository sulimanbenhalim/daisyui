---
title: OTP Input
desc: OTP Input is a single input element styled to look like separate digit boxes using pure CSS. No JavaScript required.
source: https://raw.githubusercontent.com/saadeghi/daisyui/refs/heads/master/packages/daisyui/src/components/otpinput.css
layout: components
classnames:
  component:
    - class: otp-input
      desc: For <input> element styled as OTP/PIN boxes
  style:
    - class: otp-input-ghost
      desc: ghost style
    - class: otp-input-separated
      desc: separated boxes style
  color:
    - class: otp-input-neutral
      desc: neutral color
    - class: otp-input-primary
      desc: primary color
    - class: otp-input-secondary
      desc: secondary color
    - class: otp-input-accent
      desc: accent color
    - class: otp-input-info
      desc: info color
    - class: otp-input-success
      desc: success color
    - class: otp-input-warning
      desc: warning color
    - class: otp-input-error
      desc: error color
  size:
    - class: otp-input-xs
      desc: Extra small size
    - class: otp-input-sm
      desc: Small size
    - class: otp-input-md
      desc: Medium size
      default: true
    - class: otp-input-lg
      desc: Large size
    - class: otp-input-xl
      desc: Extra large size
  digits:
    - class: otp-input-4
      desc: 4 digits
    - class: otp-input-5
      desc: 5 digits
    - class: otp-input-6
      desc: 6 digits
      default: true
    - class: otp-input-7
      desc: 7 digits
    - class: otp-input-8
      desc: 8 digits
---

<script>
  import Component from "$components/Component.svelte"
</script>

### ~OTP input

<input class="otp-input otp-input-6" type="text" maxlength="6" inputmode="numeric" autocomplete="one-time-code" pattern="\d{6}" placeholder="······" />

```html
<input class="$$otp-input $$otp-input-6" type="text" maxlength="6" inputmode="numeric" autocomplete="one-time-code" pattern="\d{6}" placeholder="······" />
```

### ~4-digit PIN

<input class="otp-input otp-input-4" type="text" maxlength="4" inputmode="numeric" autocomplete="one-time-code" pattern="\d{4}" placeholder="····" />

```html
<input class="$$otp-input $$otp-input-4" type="text" maxlength="4" inputmode="numeric" autocomplete="one-time-code" pattern="\d{4}" placeholder="····" />
```

### ~With fieldset and label

<fieldset class="fieldset">
  <legend class="fieldset-legend">Enter verification code</legend>
  <input class="otp-input otp-input-6" type="text" maxlength="6" inputmode="numeric" autocomplete="one-time-code" pattern="\d{6}" placeholder="······" />
  <label class="label">Check your email for the code</label>
</fieldset>

```html
<fieldset class="$$fieldset">
  <legend class="$$fieldset-legend">Enter verification code</legend>
  <input class="$$otp-input $$otp-input-6" type="text" maxlength="6" inputmode="numeric" autocomplete="one-time-code" pattern="\d{6}" placeholder="······" />
  <label class="$$label">Check your email for the code</label>
</fieldset>
```

### ~Separated boxes

<input class="otp-input otp-input-separated otp-input-6" type="text" maxlength="6" inputmode="numeric" autocomplete="one-time-code" pattern="\d{6}" placeholder="······" />

```html
<input class="$$otp-input $$otp-input-separated $$otp-input-6" type="text" maxlength="6" inputmode="numeric" autocomplete="one-time-code" pattern="\d{6}" placeholder="······" />
```

### ~Separated with color

<input class="otp-input otp-input-separated otp-input-primary otp-input-6" type="text" maxlength="6" inputmode="numeric" pattern="\d{6}" placeholder="······" />

```html
<input class="$$otp-input $$otp-input-separated $$otp-input-primary $$otp-input-6" type="text" maxlength="6" inputmode="numeric" pattern="\d{6}" placeholder="······" />
```

### ~Ghost variant

<input class="otp-input otp-input-ghost otp-input-6" type="text" maxlength="6" inputmode="numeric" autocomplete="one-time-code" pattern="\d{6}" placeholder="······" />

```html
<input class="$$otp-input $$otp-input-ghost $$otp-input-6" type="text" maxlength="6" inputmode="numeric" autocomplete="one-time-code" pattern="\d{6}" placeholder="······" />
```

### ~Color variants

<div class="grid gap-2">
  <input class="otp-input otp-input-primary otp-input-6" type="text" maxlength="6" inputmode="numeric" pattern="\d{6}" placeholder="······" />
  <input class="otp-input otp-input-secondary otp-input-6" type="text" maxlength="6" inputmode="numeric" pattern="\d{6}" placeholder="······" />
  <input class="otp-input otp-input-accent otp-input-6" type="text" maxlength="6" inputmode="numeric" pattern="\d{6}" placeholder="······" />
  <input class="otp-input otp-input-neutral otp-input-6" type="text" maxlength="6" inputmode="numeric" pattern="\d{6}" placeholder="······" />
  <input class="otp-input otp-input-info otp-input-6" type="text" maxlength="6" inputmode="numeric" pattern="\d{6}" placeholder="······" />
  <input class="otp-input otp-input-success otp-input-6" type="text" maxlength="6" inputmode="numeric" pattern="\d{6}" placeholder="······" />
  <input class="otp-input otp-input-warning otp-input-6" type="text" maxlength="6" inputmode="numeric" pattern="\d{6}" placeholder="······" />
  <input class="otp-input otp-input-error otp-input-6" type="text" maxlength="6" inputmode="numeric" pattern="\d{6}" placeholder="······" />
</div>

```html
<input class="$$otp-input $$otp-input-primary $$otp-input-6" type="text" maxlength="6" inputmode="numeric" pattern="\d{6}" placeholder="······" />
<input class="$$otp-input $$otp-input-secondary $$otp-input-6" type="text" maxlength="6" inputmode="numeric" pattern="\d{6}" placeholder="······" />
<input class="$$otp-input $$otp-input-accent $$otp-input-6" type="text" maxlength="6" inputmode="numeric" pattern="\d{6}" placeholder="······" />
<input class="$$otp-input $$otp-input-neutral $$otp-input-6" type="text" maxlength="6" inputmode="numeric" pattern="\d{6}" placeholder="······" />
<input class="$$otp-input $$otp-input-info $$otp-input-6" type="text" maxlength="6" inputmode="numeric" pattern="\d{6}" placeholder="······" />
<input class="$$otp-input $$otp-input-success $$otp-input-6" type="text" maxlength="6" inputmode="numeric" pattern="\d{6}" placeholder="······" />
<input class="$$otp-input $$otp-input-warning $$otp-input-6" type="text" maxlength="6" inputmode="numeric" pattern="\d{6}" placeholder="······" />
<input class="$$otp-input $$otp-input-error $$otp-input-6" type="text" maxlength="6" inputmode="numeric" pattern="\d{6}" placeholder="······" />
```

### ~Sizes

<div class="flex flex-col gap-4 items-center">
  <input class="otp-input otp-input-xs otp-input-6" type="text" maxlength="6" inputmode="numeric" pattern="\d{6}" placeholder="······" />
  <input class="otp-input otp-input-sm otp-input-6" type="text" maxlength="6" inputmode="numeric" pattern="\d{6}" placeholder="······" />
  <input class="otp-input otp-input-md otp-input-6" type="text" maxlength="6" inputmode="numeric" pattern="\d{6}" placeholder="······" />
  <input class="otp-input otp-input-lg otp-input-6" type="text" maxlength="6" inputmode="numeric" pattern="\d{6}" placeholder="······" />
  <input class="otp-input otp-input-xl otp-input-6" type="text" maxlength="6" inputmode="numeric" pattern="\d{6}" placeholder="······" />
</div>

```html
<input class="$$otp-input $$otp-input-xs $$otp-input-6" type="text" maxlength="6" inputmode="numeric" pattern="\d{6}" placeholder="······" />

<input class="$$otp-input $$otp-input-sm $$otp-input-6" type="text" maxlength="6" inputmode="numeric" pattern="\d{6}" placeholder="······" />

<input class="$$otp-input $$otp-input-md $$otp-input-6" type="text" maxlength="6" inputmode="numeric" pattern="\d{6}" placeholder="······" />

<input class="$$otp-input $$otp-input-lg $$otp-input-6" type="text" maxlength="6" inputmode="numeric" pattern="\d{6}" placeholder="······" />

<input class="$$otp-input $$otp-input-xl $$otp-input-6" type="text" maxlength="6" inputmode="numeric" pattern="\d{6}" placeholder="······" />
```

### ~Disabled

<input class="otp-input otp-input-6" type="text" maxlength="6" inputmode="numeric" pattern="\d{6}" placeholder="······" disabled />

```html
<input class="$$otp-input $$otp-input-6" type="text" maxlength="6" inputmode="numeric" pattern="\d{6}" placeholder="······" disabled />
```

### ~Alphanumeric (invite code)

<input class="otp-input otp-input-6 uppercase" type="text" maxlength="6" pattern="[A-Z0-9]{6}" placeholder="······" />

```html
<input class="$$otp-input $$otp-input-6 uppercase" type="text" maxlength="6" pattern="[A-Z0-9]{6}" placeholder="······" />
```
