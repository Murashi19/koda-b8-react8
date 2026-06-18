# Minitask Login

## Deskripsi

Minitask sederhana ini dibuat menggunakan React. Minitask ini menerapkan fitur login dan logout dengan memanfaatkan Context (`useContext`) untuk mengelola state autentikasi secara global serta React Router DOM untuk navigasi halaman.

---

## Fitur

- Login pengguna
- Logout pengguna
- Manajemen autentikasi menggunakan Context
- Navigasi halaman menggunakan React Router DOM
- Menampilkan informasi pengguna yang sedang login
- Redirect ke halaman login jika pengguna belum melakukan login

---

## Teknologi yang Digunakan

- React
- Vite
- React Router DOM
- Context (`useContext`)
- Tailwind CSS

---

## Instalasi

### Membuat Project React dengan Vite

```bash
npm create vite@latest nama-project -- --template react
```

### Masuk ke Direktori Project

```bash
cd nama-project
```

### Install Dependencies

```bash
npm install
```

### Install React Router DOM

```bash
npm install react-router-dom
```

### Install Tailwind CSS

```bash
npm install tailwindcss @tailwindcss/vite
```

### Menjalankan Project

```bash
npm run dev
```

---

## Struktur Project

```text
src/
│
├── context/
│   └── AuthContext.jsx
│
├── pages/
│   ├── LoginPage.jsx
│   └── HomePage.jsx
│
├── App.jsx
└── main.jsx
```

---

## Data Login

```text
Email    : zidan@mail.com
Password : zidan
```

```text
Email    : ahmad@mail.com
Password : ahmad
```

---

## Alur Autentikasi

1. Pengguna memasukkan email dan password.
2. Data login akan dicocokkan dengan data pengguna yang tersedia.
3. Jika data sesuai:
   - Informasi pengguna disimpan ke Context.
   - Pengguna diarahkan ke halaman Home.

4. Jika data tidak sesuai:
   - Muncul pesan kesalahan login.

5. Saat logout:
   - State autentikasi dihapus dari Context.
   - Pengguna diarahkan kembali ke halaman Login.

---

## Pembelajaran yang Dipraktikkan

- Membuat komponen React
- Menggunakan React Hooks:
  - `useState`
  - `useContext`

- Menggunakan Context untuk state global
- Menggunakan React Router DOM untuk routing
- Mengelola form login
- Membuat autentikasi sederhana
- Membuat proteksi halaman berdasarkan status login
- Styling menggunakan Tailwind CSS

---

## Catatan

Project ini menggunakan Context untuk menyimpan status login pengguna. Karena data hanya disimpan pada state React, status login akan kembali ke kondisi awal ketika halaman browser di-refresh.
