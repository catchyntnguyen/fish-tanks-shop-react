import React from "react";

const AdminHome = () => {
    return (
        <>
            <h2>Trang chủ</h2>
            <div className="row">
                <div className="row-item">
                    <div className="row-item-top">
                        <div className="row-item-data">
                            <h1 className="h1-number">150</h1>
                            <h4 className="h4-nameItem">Đơn Hàng</h4>
                        </div>
                        <div className="row-item-icon">
                            <i className="fa-solid fa-cart-shopping" />
                        </div>
                    </div>
                    <div className="row-item-bottom">
                        Xem thêm <i className="fa-solid fa-circle-arrow-right" />
                    </div>
                </div>
                <div className="row-item">
                    <div className="row-item-top">
                        <div className="row-item-data">
                            <h1 className="h1-number">150</h1>
                            <h4 className="h4-nameItem">Đầu ra</h4>
                        </div>
                        <div className="row-item-icon">
                            <i className="fa-solid fa-chart-simple" />
                        </div>
                    </div>
                    <div className="row-item-bottom">
                        Xem thêm <i className="fa-solid fa-circle-arrow-right" />
                    </div>
                </div>
                <div className="row-item">
                    <div className="row-item-top">
                        <div className="row-item-data">
                            <h1 className="h1-number">150</h1>
                            <h4 className="h4-nameItem">Người dùng</h4>
                        </div>
                        <div className="row-item-icon">
                            <i className="fa-solid fa-user-plus" />
                        </div>
                    </div>
                    <div className="row-item-bottom">
                        Xem thêm <i className="fa-solid fa-circle-arrow-right" />
                    </div>
                </div>
                <div className="row-item">
                    <div className="row-item-top">
                        <div className="row-item-data">
                            <h1 className="h1-number">150</h1>
                            <h4 className="h4-nameItem">Danh thu</h4>
                        </div>
                        <div className="row-item-icon">
                            <i className="ion ion-pie-graph" />
                        </div>
                    </div>
                    <div className="row-item-bottom">
                        Xem thêm <i className="fa-solid fa-circle-arrow-right" />
                    </div>
                </div>
            </div>
            <div className="wrapper-chart">
                <div className="item-chart-left">
                    <canvas id="myChart" style={{ width: "100%", maxWidth: "100%" }} />
                </div>
                <div className="item-chart-right">
                    <div className="calendar">
                        <div className="month">
                            <ul>
                                <li className="prev">❮</li>
                                <li className="next">❯</li>
                                <li>
                                    August
                                    <br />
                                    <span style={{ fontSize: 18 }}>2021</span>
                                </li>
                            </ul>
                        </div>
                        <ul className="weekdays">
                            <li>Mo</li>
                            <li>Tu</li>
                            <li>We</li>
                            <li>Th</li>
                            <li>Fr</li>
                            <li>Sa</li>
                            <li>Su</li>
                        </ul>
                        <ul className="days">
                            <li>1</li>
                            <li>2</li>
                            <li>3</li>
                            <li>4</li>
                            <li>5</li>
                            <li>6</li>
                            <li>7</li>
                            <li>8</li>
                            <li>9</li>
                            <li>
                                <span className="active">10</span>
                            </li>
                            <li>11</li>
                            <li>12</li>
                            <li>13</li>
                            <li>14</li>
                            <li>15</li>
                            <li>16</li>
                            <li>17</li>
                            <li>18</li>
                            <li>19</li>
                            <li>20</li>
                            <li>21</li>
                            <li>22</li>
                            <li>23</li>
                            <li>24</li>
                            <li>25</li>
                            <li>26</li>
                            <li>27</li>
                            <li>28</li>
                            <li>29</li>
                            <li>30</li>
                            <li>31</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AdminHome;
