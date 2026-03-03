# Website Editing Guide for Non-Technical Staff

This guide helps you find and edit common elements on the SWVA Can Code website.

## 📚 Documentation Hub

- Full project documentation: `/PROJECT-DOCUMENTATION.md`
- Quick setup and overview: `/README.md`
- This beginner editing guide: `/src/EDITING-GUIDE.md`

## 🎨 Brand Colors Reference

When you see these color codes in the files, here's what they mean:
- `#00BCD4` = Cyan (bright blue)
- `#E53935` = Red
- `#1A237E` = Navy Blue (dark blue)
- `#F5F3EE` = Cream (off-white background)

## 📁 Where to Find Things

### Page Content (Most Text and Lists)
**Folder:** `/src/data/`

Most page copy, lists, and cards are now stored in data files so you can edit content without touching React code.

**Common files:**
- Home page: `/src/data/homeContent.ts`
- About page: `/src/data/aboutContent.ts`
- Contact page: `/src/data/contactContent.ts`
- Curriculum page: `/src/data/curriculumContent.ts`
- Find a Camp page: `/src/data/findCampContent.ts`
- Showcase page: `/src/data/showcaseContent.ts`
- Sponsor page: `/src/data/sponsorContent.ts`
- SWVA Can Create page: `/src/data/swvaCanCreateContent.ts`

### Navigation Menu (Top of Every Page)
**File:** `/src/components/Navbar.tsx`

**What you can edit:**
- Menu item names and links (look for the `navItems` array)
- Logo text ("Southwest Virginia" and "Can Code")
- Add or remove menu items

### Footer (Bottom of Every Page)
**File:** `/src/components/Footer.tsx`

**What you can edit:**
- Email address, phone number, location
- Quick links in footer
- Mission statement
- Copyright text

### Home Page
**File:** `/src/data/homeContent.ts`

**What you can edit:**
- Main headline and subheadline
- Statistics (500+ Students, 25+ Camps, etc.)
- The 4 "What We Offer" cards
- Upcoming camp listings (dates, locations, ages)
- Call-to-action buttons

**To add a new upcoming camp:**
1. Find the `upcomingCamps` list in `/src/data/homeContent.ts`
2. Copy one camp object (the part between `{` and `}`)
3. Paste it after the last camp, adding a comma
4. Edit the title, date, location, ages, and color

### Showcase Page (Projects + Pictures)
**Main file to edit:** `/src/data/showcaseContent.ts`

You can fully update Showcase content without editing React code.

#### 1) Update event text shown at the top of Showcase
In `showcaseContent.ts`, edit:
- `hero.subtitle`
- `eventDetails.dateAndVenue`
- `eventDetails.campus`
- `eventDetails.celebrationTitle`
- `eventDetails.posterSessionText`
- `eventDetails.pitchCompetitionText`

#### 2) Add a new student project card
Find the `projects: []` section and add items like this:

```ts
{
  id: 1,
  title: 'Flood Alert App',
  student: 'Jordan Smith',
  age: 14,
  description: 'An app prototype that alerts families when roads may flood.',
  skills: ['Figma', 'UX', 'Pitching'],
  image: 'https://your-image-link.jpg',
  projectUrl: 'https://your-project-link.com' // optional
}
```

Tips:
- Keep each `id` unique (`1`, `2`, `3`, etc.)
- If you do not have a project link yet, delete `projectUrl` or leave it out
- Keep the same punctuation style (commas and quotes)

#### 3) Add or replace gallery photos
Find `gallery.images` and update each image item:

```ts
{
  src: 'https://your-photo-link.jpg',
  alt: 'Short description of the photo'
}
```

Photo tips:
- Use clear horizontal photos when possible
- Write plain-English alt text (who/what is shown)
- You can add more photos by copying an existing object and pasting below it

#### 4) If projects are not ready yet
Edit `projectsEmptyMessage` so visitors see a clear status update.

This is the message shown automatically when the `projects` list is empty.

### Contact Page
**File:** `/src/data/contactContent.ts`

**What you can edit:**
- Contact information (email, phone, location, hours)
- Form field labels and placeholders
- FAQ questions and answers

**Form submissions (Formspree setup):**
- Contact form delivery is configured using an environment variable in the project root.
- Start from the template file `.env.example` in the project root.
- Copy `.env.example` to `.env`.
- Replace `yourFormId` in `VITE_FORMSPREE_ENDPOINT` with your real Formspree form ID.

**To add a new FAQ:**
1. Find the `faq.items` list in `/src/data/contactContent.ts`
2. Copy one FAQ object (the part between `{` and `}`)
3. Paste it after the last FAQ, adding a comma
4. Edit the question and answer text

### Sponsor Page (Logos + Packet)
**File:** `/src/data/sponsorContent.ts`

**What you can edit:**
- Sponsor card text and pricing (`tiers.items`)
- Current sponsor logos shown on page (`sponsors.items`)
- Sponsorship packet file used by the button (`packet.pdfFileName`)

**To add a new sponsor logo card:**
1. Add the image file to `/src/assets/sponsor logo/`
2. In `/src/data/sponsorContent.ts`, find `sponsors.items`
3. Copy an existing item and paste a new one
4. Update:
  - `name` (display name)
  - `fileName` (must exactly match the image filename)

**To change the sponsorship packet PDF:**
1. Add or replace the PDF in `/src/assets/sponsor logo/`
2. In `/src/data/sponsorContent.ts`, update `packet.pdfFileName`
3. Use the exact filename, including spaces and `.pdf`

## 🔧 Common Editing Tasks

### Changing Text
Most text now lives in `/src/data/*.ts` files. Find the text in the data file and replace it.

### Changing Links
Find the `to="/page-name"` or `href="/page-name"` and change the page name. For example:
```
<Link to="/old-page">Click Here</Link>
```
Change to:
```
<Link to="/new-page">Click Here</Link>
```

### Changing Colors
Find color codes like `#00BCD4` and replace them with another brand color. Use the reference at the top of this guide.

### Adding Items to Lists
Most lists are in arrays with this format:
```javascript
[
  { title: 'Item 1', description: 'Text...' },
  { title: 'Item 2', description: 'Text...' },
]
```
To add an item:
1. Copy one complete item (including the `{ }` and comma)
2. Paste it inside the array
3. Edit the values

## ⚠️ Important: What NOT to Edit

**Don't touch these parts:**
- Lines starting with `import` at the top of files
- Lines starting with `const`, `function`, or `export`
- Anything inside `{...}` after `className=`
- The word `useState` or code that looks like `useState(...)`
- Lines with `//` followed by "Don't edit" warnings

For Showcase updates, stay inside `/src/data/showcaseContent.ts` whenever possible.

**If you accidentally break something:**
1. Press Ctrl+Z (Windows) or Cmd+Z (Mac) to undo
2. Or, contact your developer to restore the file

## 📝 Best Practices

1. **Make small changes at a time** - Test after each change
2. **Keep backups** - Save a copy before making major edits
3. **Match the pattern** - When adding items, copy the existing format exactly
4. **Test on mobile** - Check how your changes look on phones/tablets
5. **Ask for help** - If something looks wrong, don't guess—ask your developer

## 🆘 Need More Help?

Look for comments in the code files that look like this:
```
/* ============================================
   SECTION NAME - What this does
   ============================================ */
```
These explain what each section does and often include editing instructions.
