# StarRating

Displays a rating, 1-5, using star SVGs. See the accompanying stories for visual examples.

📣 For more context and visual guides relating to `StarRating` usage, visit the [Source Design System website](https://www.theguardian.design).

## Use

```tsx
import { StarRating } from '@guardian/editorial';

const ReviewPage = () => (
    <article>
        <h1>Review Of A Film</h1>
        <StarRating
            rating={3}
            size="medium"
        />
        <p>Reasons why this film is 3 stars.</p>
    </article>
);
```

## `StarRating` Props

### `rating`

**`number`**

The rating itself - expected to be `1`, `2`, `3`, `4` or `5`.

### `size`

**`"large" | "medium" | "small"`**

Determines how large the stars are. See the accompanying stories for visual examples.
