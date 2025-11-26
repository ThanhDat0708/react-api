function NotFound() {
    return (
    <>
        <div style={{
            minHeight: '70vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem',
            background: 'linear-gradient(135deg, #f8fafc 0%, #eef2ff 50%, #fef3c7 100%)'
        }}>
            <div style={{
                textAlign: 'center',
                maxWidth: 760,
                width: '100%',
                padding: '2rem',
                borderRadius: 16,
                boxShadow: '0 10px 30px rgba(16,24,40,0.08)',
                background: 'rgba(255,255,255,0.7)',
                backdropFilter: 'blur(6px)'
            }}>
                <div style={{fontSize: 84, lineHeight: 1, marginBottom: 8}}>😕</div>
                <h1 style={{fontSize: 32, margin: '0.25rem 0'}}>404 — Trang không tìm thấy</h1>
                <p style={{color: '#475569', marginTop: 8, marginBottom: 20}}>
                    Có vẻ như trang bạn đang tìm kiếm không tồn tại hoặc đã được di chuyển.
                    Hãy thử quay lại trang chủ hoặc liên hệ nếu cần trợ giúp.
                </p>
                <div style={{display: 'flex', justifyContent: 'center', gap: 12, flexWrap: 'wrap'}}>
                    <a href="/" style={{
                        background: '#2563eb',
                        color: '#ffffff',
                        padding: '10px 18px',
                        borderRadius: 10,
                        textDecoration: 'none',
                        fontWeight: 600
                    }}>
                        Trở về trang chủ
                    </a>
                    <a href="mailto:support@example.com" style={{
                        background: '#f1f5f9',
                        color: '#0f172a',
                        padding: '10px 18px',
                        borderRadius: 10,
                        textDecoration: 'none',
                        fontWeight: 600
                    }}>
                        Liên hệ hỗ trợ
                    </a>
                </div>
            </div>
        </div>
    </>
)}
export default NotFound;