# User feedback

📣 For more context and visual guides relating to user feedback usage on the [Source Design System website](https://www.theguardian.design/2a1e5182b/p/108ed3--user-feedback/b/3803b4)

## Usage

```tsx
import { InlineError, InlineSuccess } from "@guardian/source"

const Form = () => (
    <form>
        <label>First name</label>
        <InlineError>Please enter your name</InlineError>
        <input type="text">

        <label>Voucher code</label>
        <InlineSuccess>Your voucher code is valid</InlineSuccess>
        <input type="text">
    </form>
)
```

## Supported themes

-   `default`
-   `brand`
