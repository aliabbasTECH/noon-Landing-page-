import { FaUserAlt, FaOpencart } from "react-icons/fa";

function Navbar() {
    return <>
        <nav className="navbar navbar-expand-lg navbar-light bg-warning">
            <div className="container-fluid">
                <a className="navbar-brand" href="#"><img src='https://z.nooncdn.com/s/app/com/noon/images/logos/noon-black-en.svg' width='120px' /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                
                        <input className="form-control me-3  shadow-none border-light w-75 "  type="search" placeholder="Search" aria-label="Search" />
                        
                    
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">English</a>
                        </li>
                        
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false"> <img style={{width:"20px"}} src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAb1BMVEX/////AAAAAAAAcy/D38+Dg4MAZgoAaRYlJSX/tbX/Cwv/JSUAaSu10r//6uq1tbULCwsLfDr/r68AWgAAcSG10sAAYBYAdzHGzL3n8ev/8PCKeXmLi4vW1tb/vr7/NDT5JSVDJSUkJSU0NDS+vr7XiB+8AAABGUlEQVR4nO3ZN24EUQxEwZFfee/9Svc/oxJBKYU/AXsHVSfoB4acJgAAAAAAAAAAAAAAAFieq60h1/vpbk5/Cw+PhgpPdtJdKlTYHVBSqFBhP4UKFfZTqFBhP4UKFfZTqFBhP4UKFfZTqFBhP4ULKLydV3h3kO5+5g0fduM9zis8mzaGQoX5FCrMp1BhPoUK8ylUmE+hwnwKFeZTqDCfQoX5FCrMp1BhvsHCp+7d/zdY+LyX7uV1XuF2vvOlF14oVBhPocLu/TWFCrv31xQq7N5fU6iwe39NocLu/TWFCrv31xQq7N5fU6iwe39NocLu/TWFSyocCtyAwr8f8Nv78YCPz9V6FW399T0BAAAAAAAAAAAAAADA8vwAvlith6Dzw1IAAAAASUVORK5CYII='></img> UAE</a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="#"> <img style={{width:"20px"}} src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAb1BMVEX/////AAAAAAAAcy/D38+Dg4MAZgoAaRYlJSX/tbX/Cwv/JSUAaSu10r//6uq1tbULCwsLfDr/r68AWgAAcSG10sAAYBYAdzHGzL3n8ev/8PCKeXmLi4vW1tb/vr7/NDT5JSVDJSUkJSU0NDS+vr7XiB+8AAABGUlEQVR4nO3ZN24EUQxEwZFfee/9Svc/oxJBKYU/AXsHVSfoB4acJgAAAAAAAAAAAAAAAFieq60h1/vpbk5/Cw+PhgpPdtJdKlTYHVBSqFBhP4UKFfZTqFBhP4UKFfZTqFBhP4UKFfZTqFBhP4ULKLydV3h3kO5+5g0fduM9zis8mzaGQoX5FCrMp1BhPoUK8ylUmE+hwnwKFeZTqDCfQoX5FCrMp1BhvsHCp+7d/zdY+LyX7uV1XuF2vvOlF14oVBhPocLu/TWFCrv31xQq7N5fU6iwe39NocLu/TWFCrv31xQq7N5fU6iwe39NocLu/TWFSyocCtyAwr8f8Nv78YCPz9V6FW399T0BAAAAAAAAAAAAAADA8vwAvlith6Dzw1IAAAAASUVORK5CYII='></img> UAE</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#"><img style={{width:"20px"}} src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAb1BMVEX/////AAAAAAAAcy/D38+Dg4MAZgoAaRYlJSX/tbX/Cwv/JSUAaSu10r//6uq1tbULCwsLfDr/r68AWgAAcSG10sAAYBYAdzHGzL3n8ev/8PCKeXmLi4vW1tb/vr7/NDT5JSVDJSUkJSU0NDS+vr7XiB+8AAABGUlEQVR4nO3ZN24EUQxEwZFfee/9Svc/oxJBKYU/AXsHVSfoB4acJgAAAAAAAAAAAAAAAFieq60h1/vpbk5/Cw+PhgpPdtJdKlTYHVBSqFBhP4UKFfZTqFBhP4UKFfZTqFBhP4UKFfZTqFBhP4ULKLydV3h3kO5+5g0fduM9zis8mzaGQoX5FCrMp1BhPoUK8ylUmE+hwnwKFeZTqDCfQoX5FCrMp1BhvsHCp+7d/zdY+LyX7uV1XuF2vvOlF14oVBhPocLu/TWFCrv31xQq7N5fU6iwe39NocLu/TWFCrv31xQq7N5fU6iwe39NocLu/TWFSyocCtyAwr8f8Nv78YCPz9V6FW399T0BAAAAAAAAAAAAAADA8vwAvlith6Dzw1IAAAAASUVORK5CYII='></img> KSA</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#"><img style={{width:"20px"}} src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAb1BMVEX/////AAAAAAAAcy/D38+Dg4MAZgoAaRYlJSX/tbX/Cwv/JSUAaSu10r//6uq1tbULCwsLfDr/r68AWgAAcSG10sAAYBYAdzHGzL3n8ev/8PCKeXmLi4vW1tb/vr7/NDT5JSVDJSUkJSU0NDS+vr7XiB+8AAABGUlEQVR4nO3ZN24EUQxEwZFfee/9Svc/oxJBKYU/AXsHVSfoB4acJgAAAAAAAAAAAAAAAFieq60h1/vpbk5/Cw+PhgpPdtJdKlTYHVBSqFBhP4UKFfZTqFBhP4UKFfZTqFBhP4UKFfZTqFBhP4ULKLydV3h3kO5+5g0fduM9zis8mzaGQoX5FCrMp1BhPoUK8ylUmE+hwnwKFeZTqDCfQoX5FCrMp1BhvsHCp+7d/zdY+LyX7uV1XuF2vvOlF14oVBhPocLu/TWFCrv31xQq7N5fU6iwe39NocLu/TWFCrv31xQq7N5fU6iwe39NocLu/TWFSyocCtyAwr8f8Nv78YCPz9V6FW399T0BAAAAAAAAAAAAAADA8vwAvlith6Dzw1IAAAAASUVORK5CYII='></img> Egypt</a></li>
                            </ul>
                        </li>
                        <button type="submit" class="btn btn btn-none"> Sign In <FaUserAlt/> </button>
                        
                        <button type="submit" class="btn btn btn-none"> Cart <FaOpencart/> </button>
                    </ul>
                    
                </div>
            </div>
        </nav>


    </>
}
export default Navbar