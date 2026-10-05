/* ==========================================================================
   Staff QR Hub — links.js
   --------------------------------------------------------------------------
   แก้ไขเมนูทั้งหมดได้ที่ไฟล์นี้เท่านั้น (ไม่ต้องแก้ index.html)

   แต่ละรายการประกอบด้วย:
     id          : ตัวเลขไม่ซ้ำกัน
     title       : ชื่อเมนูที่แสดงบน Card
     description : คำอธิบายสั้น ๆ 1 บรรทัด
     type        : "website" หรือ "line"  → ใช้แสดง Badge บน Card
     logo        : path รูปโลโก้ (Relative Path)
     url         : ลิงก์ปลายทาง

     icon        : (ทางเลือก) ชื่อไอคอน SVG ใช้เมื่อไม่มี logo
                   link, document, form, calendar, people, chat,
                   folder, clock, chart, shield, phone, tool

   เพิ่มหรือลดจำนวนรายการได้อิสระ (6, 8, 10, 12 ...) หน้าเว็บจะจัด Layout ให้เอง
   ========================================================================== */

const staffLinks = [
    {
        id: 1,
        title: "Premium Care",
        description: "เว็บไซต์ Premium Care",
        type: "website",
        logo: "assets/images/logos/Premiumcare - Logo 1.png",
        url: "https://www.premium-care.in.th/"
    },
    {
        id: 2,
        title: "Premium Carcare",
        description: "เว็บไซต์ Premium Carcare",
        type: "website",
        logo: "assets/images/logos/Premiumcare - Logo 2.jpg",
        url: "https://www.premium-carcare.com/"
    },
    {
        id: 3,
        title: "Premium Care",
        description: "LINE Official Account Premium Care",
        type: "line",
        logo: "assets/images/logos/Premiumcare - Logo 2.jpg",
        url: "https://lin.ee/neS1OQo"
    },
    {
        id: 4,
        title: "PremiumCare Bike",
        description: "LINE Official Account PremiumCare Bike",
        type: "line",
        logo: "assets/images/logos/PremiumCare - Bike 3.jpg",
        url: "https://lin.ee/QUCZyag"
    },
    {
        id: 5,
        title: "Premium Carcare",
        description: "LINE Official Account Premium Carcare",
        type: "line",
        logo: "assets/images/logos/PremiumCar - Logo 4.jpg",
        url: "https://lin.ee/s6jyBWbn"
    },
    {
        id: 6,
        title: "HR Connect",
        description: "LINE Official Account HR Connect",
        type: "line",
        logo: "assets/images/logos/Premiumcare - Logo 2.jpg",
        url: "https://lin.ee/RHL9bJN"
    }
];
