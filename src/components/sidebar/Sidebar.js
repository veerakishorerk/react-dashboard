const Sidebar = ({sidebar, closeSidebar}) =>{

    return(
        <div className={sidebar ? "sidebar-responsive" : ""} id="sidebar">
            <div className="sidebar__title">
                <div className="sidebar__img">
                    <h1>ISYS Corp.</h1>
                </div>
                <i
                    className="fas fa-times "
                    id="sidebarIcon"
                ></i>
            </div>

            <div className="sidebar__menu">
                <div className="sidebar__link active_menu_link">
                    <i className="fas fa-tachometer-alt"></i>
                    <a href="#">Overview</a>
                </div>
                <div className="sidebar__link">
                    <i className="fas fa-users-cog"></i>
                    <a href="#">Admine</a>
                </div>
                <div className="sidebar__link">
                    <i className="fas fa-building"></i>
                    <a href="#">Company</a>
                </div>
                <div className="sidebar__link">
                    <i className="fas fa-users"></i>
                    <a href="#">Employee</a>
                </div>
                <div className="sidebar__link">
                    <i className="fas fa-info-circle"></i>
                    <a href="#">Contracts</a>
                </div>
                <div className="sidebar__link">
                    <i className="far fa-question-circle"></i>
                    <a href="#">Request</a>
                </div>
            </div>
        </div>
    );
}

export default Sidebar