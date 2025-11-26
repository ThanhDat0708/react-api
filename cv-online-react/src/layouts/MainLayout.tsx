import { useEffect, useState } from 'react'
import '../../public/scss/style.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { Link, Outlet } from 'react-router-dom'

library.add(fas, far, fab)

function MainLayout() {
  const[isShowMore, setIsShowMore] = useState(false)
  useEffect(() => {
    // const saved = localStorage.getItem('originList');
    // if (saved) {
    //   setListActiveLink(JSON.parse(saved));
    // }
    const path = window.location.pathname;
    const route =['/', '/skills', '/projects'];
    const index = route.indexOf(path);
    if(index !== -1){
      activeLink(index);
    }
  }, []);

  function toggleShowMore(){
    setIsShowMore(!isShowMore);

  }
  const originList = [false, false, false];
  const [listActiveLink, setListActiveLink] = useState(originList);
  function activeLink(i: number){
    originList[i] = true;
    setListActiveLink(originList);
    // localStorage.setItem('originList', JSON.stringify(originList));
  }

  return (
    <>
       <nav>
        <ul className="nav">
            <li className="nav-item">
               <Link onClick={() =>activeLink(0)} to ="/" 
               className={`nav-item-text ${listActiveLink[0] ? 'active' : ''}`}>
                   <FontAwesomeIcon className="icon"icon="fa-solid fa-user"/>
                    <span>Thông tin</span>
                </Link>
            </li>
            <li className="nav-item">
                <Link onClick={() =>activeLink(1)} to ="/skills" 
                className={`nav-item-text ${listActiveLink[1] ? 'active' : ''}`}>
                    <FontAwesomeIcon className="icon" icon ="fa-solid fa-meteor"/>
                    <span>Kỹ năng</span>
                </Link>
            </li>
            <li className="nav-item">
                <Link onClick={() =>activeLink(2)} to ="/projects" 
                className={`nav-item-text ${listActiveLink[2] ? 'active' : ''}`}>
                    <FontAwesomeIcon className="icon" icon ="fa-solid fa-list-check"/>
                    <span>Dự án</span>
                </Link>
            </li>
            <li className="nav-item">
                <Link to ="#" className="nav-item-text" onClick={() => toggleShowMore()}>
                    <FontAwesomeIcon className="icon" icon="fa-solid fa-bars"/>
                    <span>Xem thêm</span>
                </Link>
            </li>
        </ul>
    </nav>
    <main id="main">
    <Outlet/>

    </main>
    {isShowMore &&
    (<div className="show-more">
        <ul className="sm-container">
            <li><a href="#" download>Tải CV(EN)</a></li>
            <li><a href="#" download>Tải CV(VN)</a></li>
        </ul>
    </div>)
}
    </>
  )
}

export default MainLayout;
