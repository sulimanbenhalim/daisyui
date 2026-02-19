---
title: Prompt
desc: Prompt is an AI chat input box with auto-growing textarea and action buttons. Pure CSS, zero JS.
source: https://raw.githubusercontent.com/saadeghi/daisyui/refs/heads/master/packages/daisyui/src/components/prompt.css
layout: components
classnames:
  component:
    - class: prompt
      desc: Container for the prompt input
    - class: prompt-input
      desc: For the textarea element inside prompt
    - class: prompt-actions
      desc: Bottom action bar for buttons
    - class: prompt-send
      desc: Send button modifier (dims when empty, activates when content exists)
  style:
    - class: prompt-ghost
      desc: ghost style
  color:
    - class: prompt-neutral
      desc: neutral color
    - class: prompt-primary
      desc: primary color
    - class: prompt-secondary
      desc: secondary color
    - class: prompt-accent
      desc: accent color
    - class: prompt-info
      desc: info color
    - class: prompt-success
      desc: success color
    - class: prompt-warning
      desc: warning color
    - class: prompt-error
      desc: error color
  size:
    - class: prompt-sm
      desc: Small size
    - class: prompt-md
      desc: Medium size
      default: true
    - class: prompt-lg
      desc: Large size
---

<script>
  import Component from "$components/Component.svelte"
  import Translate from "$components/Translate.svelte"
</script>

### ~Basic prompt

<div class="prompt w-full max-w-lg">
  <textarea class="prompt-input" placeholder="Ask anything..."></textarea>
  <div class="prompt-actions">
    <button class="btn btn-sm btn-circle btn-primary prompt-send">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-4"><path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" /></svg>
    </button>
  </div>
</div>

```html
<div class="$$prompt">
  <textarea class="$$prompt-input" placeholder="Ask anything..."></textarea>
  <div class="$$prompt-actions">
    <button class="$$btn $$btn-sm $$btn-circle $$btn-primary $$prompt-send">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-4"><path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" /></svg>
    </button>
  </div>
</div>
```

### ~With attachment button

<div class="prompt w-full max-w-lg">
  <textarea class="prompt-input" placeholder="Ask anything..."></textarea>
  <div class="prompt-actions justify-between">
    <button class="btn btn-sm btn-circle btn-ghost">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-4"><path fill-rule="evenodd" d="M18.97 3.659a2.25 2.25 0 0 0-3.182 0l-10.94 10.94a3.75 3.75 0 1 0 5.304 5.303l7.693-7.693a.75.75 0 0 1 1.06 1.06l-7.693 7.693a5.25 5.25 0 1 1-7.424-7.424l10.939-10.94a3.75 3.75 0 1 1 5.303 5.304L9.097 18.835a2.25 2.25 0 0 1-3.182-3.182l9.22-9.22a.75.75 0 0 1 1.06 1.061l-9.22 9.22a.75.75 0 0 0 1.061 1.06L18.97 6.84a2.25 2.25 0 0 0 0-3.182Z" clip-rule="evenodd" /></svg>
    </button>
    <button class="btn btn-sm btn-circle btn-primary prompt-send">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-4"><path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" /></svg>
    </button>
  </div>
</div>

```html
<div class="$$prompt">
  <textarea class="$$prompt-input" placeholder="Ask anything..."></textarea>
  <div class="$$prompt-actions justify-between">
    <button class="$$btn $$btn-sm $$btn-circle $$btn-ghost">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-4"><path fill-rule="evenodd" d="M18.97 3.659a2.25 2.25 0 0 0-3.182 0l-10.94 10.94a3.75 3.75 0 1 0 5.304 5.303l7.693-7.693a.75.75 0 0 1 1.06 1.06l-7.693 7.693a5.25 5.25 0 1 1-7.424-7.424l10.939-10.94a3.75 3.75 0 1 1 5.303 5.304L9.097 18.835a2.25 2.25 0 0 1-3.182-3.182l9.22-9.22a.75.75 0 0 1 1.06 1.061l-9.22 9.22a.75.75 0 0 0 1.061 1.06L18.97 6.84a2.25 2.25 0 0 0 0-3.182Z" clip-rule="evenodd" /></svg>
    </button>
    <button class="$$btn $$btn-sm $$btn-circle $$btn-primary $$prompt-send">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-4"><path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" /></svg>
    </button>
  </div>
</div>
```

### ~With keyboard hint

<div class="prompt w-full max-w-lg">
  <textarea class="prompt-input" placeholder="Ask anything..."></textarea>
  <div class="prompt-actions">
    <kbd class="kbd kbd-sm">&#x2318; Enter</kbd>
    <button class="btn btn-sm btn-circle btn-primary prompt-send">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-4"><path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" /></svg>
    </button>
  </div>
</div>

```html
<div class="$$prompt">
  <textarea class="$$prompt-input" placeholder="Ask anything..."></textarea>
  <div class="$$prompt-actions">
    <kbd class="$$kbd $$kbd-sm">&#x2318; Enter</kbd>
    <button class="$$btn $$btn-sm $$btn-circle $$btn-primary $$prompt-send">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-4"><path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" /></svg>
    </button>
  </div>
</div>
```

### ~Ghost variant

<div class="prompt prompt-ghost w-full max-w-lg">
  <textarea class="prompt-input" placeholder="Ask anything..."></textarea>
  <div class="prompt-actions">
    <button class="btn btn-sm btn-circle btn-primary prompt-send">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-4"><path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" /></svg>
    </button>
  </div>
</div>

```html
<div class="$$prompt $$prompt-ghost">
  <textarea class="$$prompt-input" placeholder="Ask anything..."></textarea>
  <div class="$$prompt-actions">
    <button class="$$btn $$btn-sm $$btn-circle $$btn-primary $$prompt-send">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-4"><path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" /></svg>
    </button>
  </div>
</div>
```

### ~Color variants

<div class="grid gap-4 w-full max-w-lg">
  <div class="prompt prompt-primary">
    <textarea class="prompt-input" placeholder="Primary"></textarea>
    <div class="prompt-actions">
      <button class="btn btn-sm btn-circle btn-primary prompt-send">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-4"><path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" /></svg>
      </button>
    </div>
  </div>
  <div class="prompt prompt-secondary">
    <textarea class="prompt-input" placeholder="Secondary"></textarea>
    <div class="prompt-actions">
      <button class="btn btn-sm btn-circle btn-secondary prompt-send">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-4"><path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" /></svg>
      </button>
    </div>
  </div>
  <div class="prompt prompt-accent">
    <textarea class="prompt-input" placeholder="Accent"></textarea>
    <div class="prompt-actions">
      <button class="btn btn-sm btn-circle btn-accent prompt-send">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-4"><path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" /></svg>
      </button>
    </div>
  </div>
</div>

```html
<div class="$$prompt $$prompt-primary">
  <textarea class="$$prompt-input" placeholder="Primary"></textarea>
  <div class="$$prompt-actions">
    <button class="$$btn $$btn-sm $$btn-circle $$btn-primary $$prompt-send">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-4"><path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" /></svg>
    </button>
  </div>
</div>

<div class="$$prompt $$prompt-secondary">
  <textarea class="$$prompt-input" placeholder="Secondary"></textarea>
  <div class="$$prompt-actions">
    <button class="$$btn $$btn-sm $$btn-circle $$btn-secondary $$prompt-send">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-4"><path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" /></svg>
    </button>
  </div>
</div>

<div class="$$prompt $$prompt-accent">
  <textarea class="$$prompt-input" placeholder="Accent"></textarea>
  <div class="$$prompt-actions">
    <button class="$$btn $$btn-sm $$btn-circle $$btn-accent $$prompt-send">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-4"><path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" /></svg>
    </button>
  </div>
</div>
```

### ~Size variants

<div class="flex flex-col gap-4 w-full max-w-lg">
  <div class="prompt prompt-sm">
    <textarea class="prompt-input" placeholder="Small"></textarea>
    <div class="prompt-actions">
      <button class="btn btn-xs btn-circle btn-primary prompt-send">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-3"><path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" /></svg>
      </button>
    </div>
  </div>
  <div class="prompt prompt-md">
    <textarea class="prompt-input" placeholder="Medium (default)"></textarea>
    <div class="prompt-actions">
      <button class="btn btn-sm btn-circle btn-primary prompt-send">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-4"><path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" /></svg>
      </button>
    </div>
  </div>
  <div class="prompt prompt-lg">
    <textarea class="prompt-input" placeholder="Large"></textarea>
    <div class="prompt-actions">
      <button class="btn btn-md btn-circle btn-primary prompt-send">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-5"><path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" /></svg>
      </button>
    </div>
  </div>
</div>

```html
<div class="$$prompt $$prompt-sm">
  <textarea class="$$prompt-input" placeholder="Small"></textarea>
  <div class="$$prompt-actions">
    <button class="$$btn $$btn-xs $$btn-circle $$btn-primary $$prompt-send">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-3"><path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" /></svg>
    </button>
  </div>
</div>

<div class="$$prompt $$prompt-md">
  <textarea class="$$prompt-input" placeholder="Medium (default)"></textarea>
  <div class="$$prompt-actions">
    <button class="$$btn $$btn-sm $$btn-circle $$btn-primary $$prompt-send">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-4"><path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" /></svg>
    </button>
  </div>
</div>

<div class="$$prompt $$prompt-lg">
  <textarea class="$$prompt-input" placeholder="Large"></textarea>
  <div class="$$prompt-actions">
    <button class="$$btn $$btn-md $$btn-circle $$btn-primary $$prompt-send">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-5"><path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" /></svg>
    </button>
  </div>
</div>
```

### ~Disabled

<div class="prompt w-full max-w-lg">
  <textarea class="prompt-input" placeholder="Ask anything..." disabled></textarea>
  <div class="prompt-actions">
    <button class="btn btn-sm btn-circle btn-primary prompt-send" disabled>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-4"><path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" /></svg>
    </button>
  </div>
</div>

```html
<div class="$$prompt">
  <textarea class="$$prompt-input" placeholder="Ask anything..." disabled></textarea>
  <div class="$$prompt-actions">
    <button class="$$btn $$btn-sm $$btn-circle $$btn-primary $$prompt-send" disabled>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-4"><path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" /></svg>
    </button>
  </div>
</div>
```

### ~Full example with chat bubbles

<div class="mx-auto flex w-full max-w-lg flex-col gap-4">
  <div class="flex flex-col gap-2">
    <div class="chat chat-start">
      <div class="chat-bubble">What is the meaning of life?</div>
    </div>
    <div class="chat chat-end">
      <div class="chat-bubble chat-bubble-primary">42. According to Douglas Adams, at least.</div>
    </div>
  </div>
  <div class="prompt">
    <textarea class="prompt-input" placeholder="Ask anything..."></textarea>
    <div class="prompt-actions justify-between">
      <div class="flex items-center gap-1">
        <button class="btn btn-sm btn-circle btn-ghost">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-4"><path fill-rule="evenodd" d="M18.97 3.659a2.25 2.25 0 0 0-3.182 0l-10.94 10.94a3.75 3.75 0 1 0 5.304 5.303l7.693-7.693a.75.75 0 0 1 1.06 1.06l-7.693 7.693a5.25 5.25 0 1 1-7.424-7.424l10.939-10.94a3.75 3.75 0 1 1 5.303 5.304L9.097 18.835a2.25 2.25 0 0 1-3.182-3.182l9.22-9.22a.75.75 0 0 1 1.06 1.061l-9.22 9.22a.75.75 0 0 0 1.061 1.06L18.97 6.84a2.25 2.25 0 0 0 0-3.182Z" clip-rule="evenodd" /></svg>
        </button>
      </div>
      <div class="flex items-center gap-1">
        <kbd class="kbd kbd-sm hidden sm:inline-flex">&#x2318; Enter</kbd>
        <button class="btn btn-sm btn-circle btn-primary prompt-send">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-4"><path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" /></svg>
        </button>
      </div>
    </div>
  </div>
</div>

```html
<div class="mx-auto flex w-full max-w-lg flex-col gap-4">
  <!-- Chat messages -->
  <div class="flex flex-col gap-2">
    <div class="$$chat $$chat-start">
      <div class="$$chat-bubble">What is the meaning of life?</div>
    </div>
    <div class="$$chat $$chat-end">
      <div class="$$chat-bubble $$chat-bubble-primary">42. According to Douglas Adams, at least.</div>
    </div>
  </div>
  <!-- Prompt input -->
  <div class="$$prompt">
    <textarea class="$$prompt-input" placeholder="Ask anything..."></textarea>
    <div class="$$prompt-actions justify-between">
      <div class="flex items-center gap-1">
        <button class="$$btn $$btn-sm $$btn-circle $$btn-ghost">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-4"><path fill-rule="evenodd" d="M18.97 3.659a2.25 2.25 0 0 0-3.182 0l-10.94 10.94a3.75 3.75 0 1 0 5.304 5.303l7.693-7.693a.75.75 0 0 1 1.06 1.06l-7.693 7.693a5.25 5.25 0 1 1-7.424-7.424l10.939-10.94a3.75 3.75 0 1 1 5.303 5.304L9.097 18.835a2.25 2.25 0 0 1-3.182-3.182l9.22-9.22a.75.75 0 0 1 1.06 1.061l-9.22 9.22a.75.75 0 0 0 1.061 1.06L18.97 6.84a2.25 2.25 0 0 0 0-3.182Z" clip-rule="evenodd" /></svg>
        </button>
      </div>
      <div class="flex items-center gap-1">
        <kbd class="$$kbd $$kbd-sm hidden sm:inline-flex">&#x2318; Enter</kbd>
        <button class="$$btn $$btn-sm $$btn-circle $$btn-primary $$prompt-send">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-4"><path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" /></svg>
        </button>
      </div>
    </div>
  </div>
</div>
```
