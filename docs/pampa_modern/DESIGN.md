# Design System Strategy: Laburito Editorial Marketplace

## 1. Overview & Creative North Star
**The Creative North Star: "The Curated Workshop"**

This design system moves away from the sterile, cookie-cutter "gig economy" aesthetic. Instead, it positions Laburito as an editorialized bridge between professional craftsmanship and household trust. We reject the "flat web" in favor of **Organic Layering**—a style that feels like physical sheets of premium paper and glass stacked on a warm workbench.

To achieve this, the system breaks the standard 12-column rigid grid. We utilize intentional asymmetry, allowing images of service providers to break out of their containers, and high-contrast typography scales that feel more like a high-end magazine than a utility app. The experience must feel human, intentional, and "warm" (embodying the Argentine 'vos' tone) rather than transactional.

---

### 2. Colors: Tonal Depth vs. Structural Lines
Our palette is rooted in the warmth of the Argentine home. We use a sophisticated Material 3-inspired tonal system to create depth without clutter.

**The "No-Line" Rule:**
Standard 1px borders are strictly prohibited for sectioning. Boundaries are defined exclusively through background color shifts. 
- A card should not have a border; it should be a `surface-container-lowest` object sitting on a `surface-container-low` background. 
- Visual separation is achieved through the contrast between `#faf9f5` (Background) and `#efeeea` (Surface Container).

**Surface Hierarchy & Nesting:**
Treat the UI as a physical stack.
*   **Base:** `surface` (#faf9f5) - The canvas.
*   **Sections:** `surface-container-low` (#f5f4f0) - To group large content areas.
*   **Interactive Cards:** `surface-container-lowest` (#ffffff) - To make "work" items pop.
*   **Overlays:** `surface-bright` with 80% opacity and 16px backdrop-blur for a "Glassmorphism" effect.

**Signature Textures:**
Main CTAs should never be a flat hex. Apply a subtle linear gradient from `primary` (#b22c00) to `primary_container` (#ff5c2e) at a 135° angle. This adds a "glow" that feels premium and tactile.

---

### 3. Typography: The Editorial Voice
We use **Inter** not as a generic sans-serif, but as a bold, authoritative typeface that speaks with confidence.

*   **Display (900 Weight):** Used for hero sections and major value propositions. The massive scale (`display-lg`: 3.5rem) paired with tight letter-spacing (-0.02em) creates a "poster" feel.
*   **Headline (700 Weight):** Used for section titles. These should be paired with the Argentine 'vos' form (e.g., "Encontrá a tu experto") to feel approachable yet professional.
*   **Body (400 Weight):** Set with generous line-height (1.6) to ensure readability on mobile devices under various lighting conditions (e.g., a technician outdoors).
*   **Labels (500 Weight):** Used for micro-copy and metadata. These are the "functional" units of the UI.

---

### 4. Elevation & Depth: The Layering Principle
We replace traditional shadows with **Tonal Layering**.

*   **Ambient Shadows:** If a component must float (like a bottom navigation bar or a FAB), use a "Sunlight Shadow."
    *   *Values:* `0px 12px 32px rgba(27, 28, 26, 0.06)`
    *   The shadow is never grey; it is a desaturated version of the `on-surface` color.
*   **The "Ghost Border" Fallback:** In rare accessibility cases where a border is needed, use `outline-variant` (#e3beb5) at **15% opacity**. It should be felt, not seen.
*   **Glassmorphism:** For mobile headers, use `surface` at 70% opacity with a `blur(20px)` effect. This allows the vibrant service photos to bleed through as the user scrolls, creating a sense of continuity.

---

### 5. Components

**Buttons (The Action Pillars)**
*   **Primary:** Gradient (Primary to Primary-Container), `xl` (1.5rem) rounded corners, white text. High-elevation shadow on hover.
*   **Secondary:** `surface-container-high` background with `on-surface` text. No border.
*   **Tertiary:** No background. Underlined on hover only. Use for "Cancel" or "Back" actions.

**Cards (Service & Provider)**
*   **Rule:** Forbid divider lines.
*   Use `md` (0.75rem) or `lg` (1rem) corner radius. 
*   Separate the service category (label-md) from the provider name (title-md) using 12px of vertical white space.

**Input Fields (The Trust Inputs)**
*   Background: `surface-container-highest` (#e3e2df).
*   Active State: Transition background to `surface-container-lowest` (#ffffff) and add a 2px `primary` ghost-border at 20% opacity.
*   Error State: Use `error` (#ba1a1a) for helper text and `error_container` for the background.

**Trust Badges (The "Laburito Verified" Seal)**
*   Background: `secondary` (#505b91).
*   Text: `on-secondary` (#ffffff).
*   Shape: Pill-shaped (`full` roundedness) to contrast against the softer `lg` corners of service cards.

---

### 6. Do’s and Don’ts

**Do:**
*   **Do** use asymmetrical layouts. Let a profile photo overlap the edge of its container by 8px to create "pop."
*   **Do** use the 'vos' form in all copy: "Subí tu perfil," "Buscá un plomero."
*   **Do** use white space as a functional tool. If two elements feel too close, increase the gap rather than adding a line.

**Don’t:**
*   **Don’t** use pure black (#000000) for text. Use `on-surface` (#1b1c1a) for a softer, premium contrast.
*   **Don’t** use standard Material Design blue for links. Use the `secondary` (#505b91) "Trust Color."
*   **Don’t** use sharp corners. Everything in Laburito should feel safe and approachable—minimum radius is `sm` (4px) for tiny tags, but `md` (12px) is our standard.