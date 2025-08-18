document.addEventListener('DOMContentLoaded', function() {
    const lockedLinks = document.querySelectorAll('.locked-feature a');
    
    lockedLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Thay alert bằng cách hiển thị khác nếu cần
            const releaseDate = new Date('2026-01-02');
            const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
            const formattedDate = releaseDate.toLocaleDateString('vi-VN', options);
            
            // Tạo popup tùy chỉnh thay vì dùng alert()
            const popup = document.createElement('div');
            popup.style.position = 'fixed';
            popup.style.top = '50%';
            popup.style.left = '50%';
            popup.style.transform = 'translate(-50%, -50%)';
            popup.style.backgroundColor = 'white';
            popup.style.padding = '20px';
            popup.style.borderRadius = '5px';
            popup.style.boxShadow = '0 0 10px rgba(0,0,0,0.3)';
            popup.style.zIndex = '1000';
            popup.innerHTML = `
                <p>Hệ thống sẽ ra mắt vào ngày ${formattedDate}</p>
                <button onclick="this.parentElement.remove()">Đóng</button>
            `;
            
            document.body.appendChild(popup);
        });
    });
});
