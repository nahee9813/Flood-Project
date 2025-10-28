document.addEventListener('DOMContentLoaded', function() {
    // 1. เลือกองค์ประกอบ
    const hamburgerIcon = document.querySelector('.right-section .fa-solid.fa-bars');
    const sidebarMenu = document.querySelector('.sidebar-menu');
    // เพิ่มการเลือกปุ่มปิดเข้ามา
    const closeBtn = document.querySelector('.sidebar-menu .close-btn'); 

    // 2. ฟังก์ชันที่ใช้ซ่อน/เปิดเมนู (Toggle Function)
    function toggleSidebar() {
        sidebarMenu.classList.toggle('open');
        
        // (เสริม: สลับไอคอนแฮมเบอร์เกอร์กับ X ที่ปุ่มหลัก)
        if (hamburgerIcon) {
            hamburgerIcon.classList.toggle('fa-bars');
            hamburgerIcon.classList.toggle('fa-times'); 
        }
    }

    // 3. เมื่อคลิกที่ไอคอนแฮมเบอร์เกอร์ (เปิด/ปิด)
    if (hamburgerIcon) {
        hamburgerIcon.addEventListener('click', toggleSidebar);
    }
    
    // 4. เมื่อคลิกที่ปุ่มปิด (ปิดอย่างเดียว)
    if (closeBtn) {
        closeBtn.addEventListener('click', toggleSidebar); 
    }
});