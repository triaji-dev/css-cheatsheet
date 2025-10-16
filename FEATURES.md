# CSS Cheatsheet - Fitur Layout Dokumentasi Tech

## ✨ Fitur Utama

### 1. **Sidebar Navigation** 
- Sidebar tetap di sebelah kiri dengan navigasi lengkap
- Icon untuk setiap section
- Active state dengan border kiri dan background highlight
- Smooth scrolling pada sidebar

### 2. **Section Switching**
- Hanya section yang dipilih yang ditampilkan
- Section lain tersembunyi secara otomatis
- Animasi fade-in saat section muncul
- Performa optimal karena tidak perlu scroll panjang

### 3. **Modern Design**
- Header gradient di atas dengan logo
- Warna less saturated (soft blues & greens)
- Background animated blobs yang subtle
- Shadow dan border yang halus

### 4. **Interaktif & Animasi**
- Hover effects pada cards
- Navigation active state animation
- Pulse animation pada active indicator
- Smooth transitions di semua elemen

### 5. **Responsive Design**
- Mobile: Sidebar slide-in dari kiri
- Hamburger menu untuk mobile
- Grid otomatis menyesuaikan kolom
- Touch-friendly interface

## 🎯 Cara Penggunaan

1. **Desktop**: Klik item di sidebar untuk berpindah section
2. **Mobile**: Tap hamburger menu (☰) untuk membuka sidebar
3. **Keyboard**: Gunakan arrow keys untuk navigasi (↑↓)

## 🎨 Design System

### Colors
- Primary: `#5a67d8` (Indigo)
- Accent: `#48bb78` (Green)
- Text: `#2d3748` (Dark Gray)
- Background: `#f7fafc` (Light Gray)

### Layout
- Sidebar Width: `280px`
- Header Height: `60px`
- Border Radius: `6px - 16px`
- Shadows: Multiple levels (sm, md, lg, hover)

### Typography
- System Font Stack
- Font sizes: Responsive dengan `clamp()`
- Line height: `1.6` untuk readability

## 📱 Breakpoints

- Desktop: `> 768px` - Sidebar tetap terlihat
- Mobile: `≤ 768px` - Sidebar collapse, hamburger menu
- Small: `≤ 480px` - Font size & spacing disesuaikan

## ⚡ Performance

- CSS Variables untuk konsistensi
- Optimal animations dengan `transform` & `opacity`
- Reduced motion support untuk accessibility
- Minimal reflows dengan fixed positioning
