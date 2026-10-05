/* ==========================================================================
   Staff QR Hub — links.js
   --------------------------------------------------------------------------
   แก้ไขเมนูทั้งหมดได้ที่ไฟล์นี้เท่านั้น (ไม่ต้องแก้ index.html)

   แต่ละรายการประกอบด้วย:
     id          : ตัวเลขไม่ซ้ำกัน
     title       : ชื่อเมนูที่แสดงบน Card
     description : คำอธิบายสั้น ๆ 1 บรรทัด
     icon        : ชื่อไอคอน (ดูรายชื่อที่ใช้ได้ด้านล่าง)
     url         : ลิงก์ปลายทาง

   ไอคอนที่ใช้ได้ (กำหนดไว้ใน assets/js/app.js):
     link, document, form, calendar, people, chat,
     folder, clock, chart, shield, phone, tool

   เพิ่มหรือลดจำนวนรายการได้อิสระ (6, 8, 10, 12 ...) หน้าเว็บจะจัด Layout ให้เอง
   ========================================================================== */

const staffLinks = [
    {
        id: 1,
        title: "เมนูที่ 1",
        description: "รายละเอียดเมนูที่ 1",
        icon: "document",
        url: "https://example.com"
    },
    {
        id: 2,
        title: "เมนูที่ 2",
        description: "รายละเอียดเมนูที่ 2",
        icon: "form",
        url: "https://example.com"
    },
    {
        id: 3,
        title: "เมนูที่ 3",
        description: "รายละเอียดเมนูที่ 3",
        icon: "calendar",
        url: "https://example.com"
    },
    {
        id: 4,
        title: "เมนูที่ 4",
        description: "รายละเอียดเมนูที่ 4",
        icon: "people",
        url: "https://example.com"
    },
    {
        id: 5,
        title: "เมนูที่ 5",
        description: "รายละเอียดเมนูที่ 5",
        icon: "chart",
        url: "https://example.com"
    },
    {
        id: 6,
        title: "เมนูที่ 6",
        description: "รายละเอียดเมนูที่ 6",
        icon: "chat",
        url: "https://example.com"
    }
];
