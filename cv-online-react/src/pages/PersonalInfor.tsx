import av from '../../public/img/avatar.jpg';
import bg from '../../public/img/background.jpg';
function PersonalInfor() {
    return <>
     <div className="personal-info">
    <div className="pictures">
        <div className="background">
            <img src={bg} alt="Ảnh Nền" />
        </div>
        <div className="avatar">
        <img src={av} alt="Ảnh Đại Diện" />
    </div>
    </div>
    
</div>
<div className="info">
    <div className="info-group">
        <h4 className="info-header">Mục tiêu nghề nghiệp</h4>
        <div className="info-body">Giám Đốc</div>
    </div>
    <div className="info-group">
        <h4 className="info-header">Học vấn</h4>
        <div className="info-body">Bằng Đại Học</div>
    </div>
    <div className="info-group">
        <h4 className="info-header">Email</h4>
        <div className="info-body">Lê Thành Đạt</div>
    </div>
    <div className="info-group">
        <h4 className="info-header">Liên Hệ</h4>
        <div className="info-body">0123456789</div>
    </div>
</div> 
    </>
}

export default  PersonalInfor;