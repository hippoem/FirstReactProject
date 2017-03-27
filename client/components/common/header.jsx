import React from 'react'

class Header extends React.Component {
    render() {
        return (
            <div id="header">
                <a href="#"><img alt="" className="logo" src="./client/images/01-main-th_06.png"/></a>
                <div className="headoption">
                    <a href="#" className="hmore">Learn More</a>
                    <a href="#" className="hrent">ปล่อยรถเช่า</a>
                    <div className="hsocial">
                        <a href="#"><img alt="" src="./client/images/01-main-th_28.png"/></a>
                        <a href="#"><img alt="" src="./client/images/01-main-th_30.png"/></a>
                        <a href="#"><img alt="" src="./client/images/01-main-th_31.png"/></a>
                    </div>
                    <a href="#"><img alt="" className="hlang" src="./client/images/01-main-th_21.png"/></a>
                    <div className="hsignin">
                        <div className="hsignbox">
                            <img alt="" src="./client/images/01-main-th_24.png"/>
                            <div className="hsigndetail">
                                <h3 className="hsignhead">
                                    <a href="#">เข้าสู่ระบบ</a>
                                </h3>
                                <p className="hsignregist">
                                    <a href="#">สมัครสมาชิก</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="clear"></div>
            </div>
        );
    }
}

export default Header;