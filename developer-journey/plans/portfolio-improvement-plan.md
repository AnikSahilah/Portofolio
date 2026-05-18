# Portfolio Improvement Plan — Anik Sahilah

## Overview
Meningkatkan portfolio website [`developer-journey`](/) dengan fitur-fitur yang membuatnya lebih valuable untuk rekrutmen. Implementasi semua fitur dari P1, P2, dan P3.

---

## 📋 Daftar Fitur per Prioritas

### 🔥 P1 — High Impact
| # | Fitur | File yang Diubah/Dibuat |
|---|-------|------------------------|
| 1 | Tombol berfungsi (scroll, download CV, live demo) | [`HeroSection.jsx`](src/sections/HeroSection.jsx), [`ProjectsSection.jsx`](src/sections/ProjectsSection.jsx) |
| 2 | Smooth scroll Navbar + active section highlight | [`Navbar.jsx`](src/components/Navbar.jsx) |
| 3 | Skill Section dengan visual icons | [`src/sections/SkillsSection.jsx`](src/sections/SkillsSection.jsx) (baru) |
| 4 | Social links (LinkedIn, Instagram, dll) | [`ContactSection.jsx`](src/sections/ContactSection.jsx) |

### 🔥 P2 — Medium Impact
| # | Fitur | File yang Diubah/Dibuat |
|---|-------|------------------------|
| 5 | Project Case Study modal/halaman detail | [`src/components/ProjectModal.jsx`](src/components/ProjectModal.jsx) (baru), [`ProjectsSection.jsx`](src/sections/ProjectsSection.jsx) |
| 6 | Resume/CV download button berfungsi | [`HeroSection.jsx`](src/sections/HeroSection.jsx), [`public/resume.pdf`](public/resume.pdf) (baru) |
| 7 | Contact form kirim email (EmailJS) | [`ContactSection.jsx`](src/sections/ContactSection.jsx) |
| 8 | SEO meta tags + favicon | [`index.html`](index.html), [`public/favicon.svg`](public/favicon.svg) |

### 🔥 P3 — Polish
| # | Fitur | File yang Diubah/Dibuat |
|---|-------|------------------------|
| 9 | Dark/Light mode toggle | [`src/context/ThemeContext.jsx`](src/context/ThemeContext.jsx) (baru), [`Navbar.jsx`](src/components/Navbar.jsx), [`App.jsx`](src/App.jsx), [`index.css`](src/index.css) |
| 10 | Scroll-to-top button | [`src/components/ScrollToTop.jsx`](src/components/ScrollToTop.jsx) (baru), [`App.jsx`](src/App.jsx) |
| 11 | Page transition animation | [`src/animations/pageTransition.js`](src/animations/pageTransition.js) (baru) |
| 12 | Loading skeleton / lazy loading | [`src/components/LazySection.jsx`](src/components/LazySection.jsx) (baru), [`App.jsx`](src/App.jsx) |

---

## 🏗️ Arsitektur Perubahan

### Struktur File Setelah Implementasi
```
src/
├── components/
│   ├── Navbar.jsx              # ✏️ DIUPDATE: smooth scroll + active section + dark mode toggle
│   ├── TypingText.jsx          # ✅ TIDAK BERUBAH
│   ├── ProjectModal.jsx        # 🆕 BARU: modal detail project
│   ├── ScrollToTop.jsx         # 🆕 BARU: tombol scroll to top
│   └── LazySection.jsx         # 🆕 BARU: lazy loading wrapper
├── sections/
│   ├── HeroSection.jsx         # ✏️ DIUPDATE: tombol berfungsi
│   ├── AboutSection.jsx        # ✅ TIDAK BERUBAH
│   ├── SkillsSection.jsx       # 🆕 BARU: skill dengan icons
│   ├── JourneySection.jsx      # ✅ TIDAK BERUBAH
│   ├── ProjectsSection.jsx     # ✏️ DIUPDATE: modal + link berfungsi
│   └── ContactSection.jsx      # ✏️ DIUPDATE: +social links +contact form
├── context/
│   └── ThemeContext.jsx         # 🆕 BARU: dark/light mode state
├── animations/
│   └── pageTransition.js       # 🆕 BARU: variasi animasi Framer Motion
├── data/
│   └── skills.js               # 🆕 BARU: data skill dengan icons
├── App.jsx                     # ✏️ DIUPDATE: integrasi semua komponen baru
├── index.css                   # ✏️ DIUPDATE: +light mode styles
└── main.jsx                    # ✅ TIDAK BERUBAH
```

### Dependency Baru
```json
{
  "dependencies": {
    "@emailjs/browser": "^4.4.1",    // Untuk contact form
    "react-icons": "^5.4.0"           // Untuk icon skill & social
  }
}
```

---

## 📝 Breakdown Implementasi per Fitur

### 1. Tombol Berfungsi (P1)
**File:** [`HeroSection.jsx`](src/sections/HeroSection.jsx), [`ProjectsSection.jsx`](src/sections/ProjectsSection.jsx)

- **View Projects** → `onClick` scroll ke `#projects` menggunakan `lenis.scrollTo()`
- **Download CV** → `onClick` download file dari `public/resume.pdf`
- **Live Demo** → Buka link project di tab baru (tambah field `link` di data project)
- **View Case Study** → Buka modal detail project

### 2. Smooth Scroll Navbar (P1)
**File:** [`Navbar.jsx`](src/components/Navbar.jsx)

- Gunakan `lenis.scrollTo()` untuk smooth scroll ke section
- Deteksi section aktif berdasarkan scroll position (Intersection Observer)
- Highlight nav item yang aktif
- Tambah hamburger menu untuk mobile

### 3. Skill Section (P1)
**File:** [`SkillsSection.jsx`](src/sections/SkillsSection.jsx) (baru), [`data/skills.js`](src/data/skills.js) (baru)

- Kategori: Frontend, Backend, Database, Tools
- Tiap skill: icon (react-icons), nama, level progress bar
- Animasi scroll reveal per kategori
- Filter interaktif: klik kategori, highlight skill terkait

### 4. Social Links (P1)
**File:** [`ContactSection.jsx`](src/sections/ContactSection.jsx)

- Tambah LinkedIn, Instagram, Twitter/X
- Gunakan icon dari react-icons
- Layout card yang sama dengan yang sudah ada

### 5. Project Case Study Modal (P2)
**File:** [`ProjectModal.jsx`](src/components/ProjectModal.jsx) (baru)

- Modal overlay dengan animasi Framer Motion
- Detail: gambar besar, deskripsi lengkap, tech stack, tantangan, solusi
- Link GitHub + Live Demo
- Close on click outside / ESC key

### 6. Resume Download (P2)
**File:** [`HeroSection.jsx`](src/sections/HeroSection.jsx)

- Tombol download file PDF dari `public/resume.pdf`
- Fallback jika file tidak ada

### 7. Contact Form (P2)
**File:** [`ContactSection.jsx`](src/sections/ContactSection.jsx)

- Form: Nama, Email, Subjek, Pesan
- Integrasi EmailJS (kirim email tanpa backend)
- Loading state, success/error toast
- Validasi input

### 8. SEO + Favicon (P2)
**File:** [`index.html`](index.html)

- Meta tags: description, keywords, author, Open Graph
- Favicon yang proper (bukan default Vite)
- Title dinamis

### 9. Dark/Light Mode (P3)
**File:** [`ThemeContext.jsx`](src/context/ThemeContext.jsx) (baru)

- Context API untuk theme state
- Toggle di Navbar (icon sun/moon)
- CSS variables untuk light theme
- Persist preference ke localStorage

### 10. Scroll-to-Top (P3)
**File:** [`ScrollToTop.jsx`](src/components/ScrollToTop.jsx) (baru)

- Tombol muncul setelah scroll > 300px
- Smooth scroll ke atas
- Animasi masuk/keluar

### 11. Page Transition (P3)
**File:** [`animations/pageTransition.js`](src/animations/pageTransition.js) (baru)

- Variasi animasi Framer Motion yang bisa dipakai ulang
- fadeIn, slideUp, slideLeft, scaleIn

### 12. Lazy Loading (P3)
**File:** [`LazySection.jsx`](src/components/LazySection.jsx) (baru)

- Wrapper component untuk lazy load section
- Fallback skeleton saat loading
- Intersection Observer trigger

---

## 📊 Data Flow Diagram

```mermaid
flowchart TD
    App[App.jsx] --> ThemeProvider[ThemeContext Provider]
    App --> Navbar[Navbar.jsx]
    App --> Hero[HeroSection.jsx]
    App --> About[AboutSection.jsx]
    App --> Skills[SkillsSection.jsx]
    App --> Journey[JourneySection.jsx]
    App --> Projects[ProjectsSection.jsx]
    App --> Contact[ContactSection.jsx]
    App --> ScrollTop[ScrollToTop.jsx]

    Navbar --> Lenis[Lenis scrollTo]
    Navbar --> ThemeContext[useTheme]

    Hero --> Lenis
    Hero --> Resume[public/resume.pdf]

    Projects --> Modal[ProjectModal.jsx]
    Projects --> ProjectData[data/projects.js]

    Skills --> SkillData[data/skills.js]
    Skills --> ReactIcons[react-icons]

    Contact --> EmailJS[@emailjs/browser]
    Contact --> ReactIcons

    Modal --> FramerMotion[framer-motion]
    ScrollTop --> FramerMotion
```

---

## ✅ Urutan Implementasi

| Step | Fitur | Estimasi File |
|------|-------|---------------|
| 1 | Install dependencies baru (react-icons, emailjs) | `package.json` |
| 2 | SEO meta tags + favicon | `index.html` |
| 3 | Data files (skills, projects update) | `src/data/skills.js` |
| 4 | Animasi reusable | `src/animations/pageTransition.js` |
| 5 | ThemeContext (dark/light mode) | `src/context/ThemeContext.jsx` |
| 6 | Navbar update (smooth scroll + active + theme toggle + mobile) | `Navbar.jsx` |
| 7 | HeroSection update (tombol berfungsi) | `HeroSection.jsx` |
| 8 | SkillsSection baru | `SkillsSection.jsx` |
| 9 | ProjectsSection update + ProjectModal | `ProjectsSection.jsx`, `ProjectModal.jsx` |
| 10 | ContactSection update (form + social links) | `ContactSection.jsx` |
| 11 | ScrollToTop component | `ScrollToTop.jsx` |
| 12 | LazySection component | `LazySection.jsx` |
| 13 | App.jsx integrasi semua | `App.jsx` |
| 14 | index.css update light mode | `index.css` |

---

## 🔧 Technical Notes

- **Lenis** sudah terinstall — bisa langsung pakai `window.lenis.scrollTo()` atau akses dari global
- **Framer Motion** sudah terinstall — animasi tinggal pakai
- **Tailwind CSS v4** — pakai `@import "tailwindcss"` (versi 4), tidak perlu config file
- **react-icons** — pakai icon dari `react-icons/fa`, `react-icons/si`, `react-icons/hi`
- **EmailJS** — perlu register di emailjs.com untuk dapat Service ID, Template ID, Public Key
- **Light mode** — pakai CSS variables + class `dark` di `<html>` untuk Tailwind dark mode
