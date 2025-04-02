# Kredi Kartı Borç Takip Uygulaması

Bu uygulama, kredi kartı borçlarınızı takip etmenizi ve yönetmenizi sağlayan bir web uygulamasıdır.

## Özellikler

- Çoklu kredi kartı yönetimi
- Borç bakiyesi, son ödeme tarihi ve faiz oranı takibi
- Toplam borç ve minimum ödemeler için dashboard
- Borç azalma grafikleri
- Çoklu para birimi desteği
- Son ödeme tarihi bildirimleri
- Veri kalıcılığı

## Teknoloji Yığını

### Frontend
- React.js (TypeScript)
- Tailwind CSS
- Chart.js
- React Query
- React Router

### Backend
- Node.js + Express.js
- TypeScript
- PostgreSQL
- Prisma ORM

## Kurulum

1. Gerekli bağımlılıkları yükleyin:
```bash
# Frontend için
cd frontend
npm install

# Backend için
cd backend
npm install
```

2. Veritabanını oluşturun:
```bash
cd backend
npx prisma migrate dev
```

3. Uygulamayı başlatın:
```bash
# Frontend için
cd frontend
npm run dev

# Backend için
cd backend
npm run dev
```

## Lisans

MIT 