# Team photos

Put team headshots here, then reference them in `data/team.ts`:

```ts
{
  name: "Jane Doe, PhD",
  role: "Postdoctoral Fellow",
  photo: "/team/jane-doe.jpg",   // this file lives at public/team/jane-doe.jpg
  alt: "Jane Doe, smiling, wearing a white lab coat", // REQUIRED — real description
}
```

Guidelines:
- Square images work best (they render in a circle). ~600×600px is plenty.
- Always write a real `alt` description (accessibility requirement).
- Keep file sizes small (<300KB) for fast loading.
