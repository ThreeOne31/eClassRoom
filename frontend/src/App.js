import React from "react"
import {BrowserRouter, Route, Link} from "react-router-dom"
import ResourceTab from "./tabs/ResourceTab"
import HomeTab from "./tabs/HomeTab"
import AnnouncementsTab from "./tabs/AnnouncementsTab"
import LecturesRecordingTab from "./tabs/LecturesRecordingTab"
import ChatsTab from "./tabs/ChatsTab"
import GradeBook from "./tabs/GradeBook"
import QuestionAndAnswersTab from "./tabs/QuestionAndAnswersTab"
import AssignmentsTab from "./tabs/AssignmentsTab"
import CourseHomeTab from "./tabs/CourseHomeTab"

class App extends React.Component{
    constructor(){
        super()
        this.panels = []
        this.openSideMenu = this.openSideMenu.bind(this)
        this.closeSideMenu = this.closeSideMenu.bind(this)
        this.accordion = this.accordion.bind(this)
    }

    openSideMenu(){
        document.querySelector(".side-menu").classList.add("open")
    }
    closeSideMenu(){
        document.querySelector(".side-menu").classList.remove("open")
    }
    
    accordion(event){
        // Toggle the clicked panel display between none and block
        let panel = event.target.parentElement.nextElementSibling
        this.panels.push(panel) 
        console.log(panel)
        // Set the previous panel display to none if any(i.e if defined)
        let prevPanel = this.panels.pop()
        console.log(prevPanel)

        if (panel.style.display === "block") {
            panel.style.display = "none"
        } else {
            panel.style.display = "block"
        }
        
        if(prevPanel !== undefined){
            prevPanel.style.display = "none"
        }
        // Keep track of the open panel
         
    }


    render(){
        return(
        <BrowserRouter>
        <div className="main-grid-container">
            
            <header className="header">
                <div className="brand-name">
                    <button onClick={this.openSideMenu} className="home-button">
                        &#9776;
                    </button>
                    <Link to="/">eClassRoom</Link>
                </div>
                <div className="nav-links">
                    <div>
                        <span>
                            <i className="fa fa-user">
                                <div className="dropdown-content">
                                    {
                                    <a href="#">Profile</a>
                                    /*
                                    // Add fontawesome accordion and styles
                                    <a href="#">Site Setup</a>
                                    <a href="#">Help</a>
                                    <a href="#">Log Out</a>
                                    */}
                                </div>
                            </i>
                        </span>
                    </div>
                </div>
            </header>
            <aside className="side-menu">
                <h2>Site Tabs</h2>
                <button onClick={this.closeSideMenu} className="side-menu-close-button">X</button>
                <ul className="side-menu-content">
                    <li onClick={this.accordion} className="accordion" >
                        <Link to="#">JAM100W</Link>
                    </li>
                        <ul className="panel">
                            <li><Link to="/resources">Resources</Link></li>
                            <li><Link to="/lectures">Lectures</Link></li>
                            <li><Link to="/announcements">Announcements</Link></li>
                            <li><Link to="/chats">Chats</Link></li>
                            <li><Link to="/gradebook">Gradebook</Link></li>
                            <li><Link to="/QnA">QnA</Link></li>
                            <li><Link to="/assignments">Assignments</Link></li>
                        </ul>                       
                    <li onClick={this.accordion} className="accordion" >
                        <a href="#">MAM101</a>
                    </li>
                        <ul className="panel">
                            <li><Link to="/resources">Resources</Link></li>
                            <li><Link to="/lectures">Lectures</Link></li>
                            <li><Link to="/announcements">Announcements</Link></li>
                            <li><Link to="/chats">Chats</Link></li>
                            <li><Link to="/gradebook">Gradebook</Link></li>
                            <li><Link to="/QnA">QnA</Link></li>
                            <li><Link to="/assignments">Assignments</Link></li>
                        </ul>
                    <li onClick={this.accordion} className="accordion" >
                        <a href="#">PHY101</a>
                    </li>
                        <ul className="panel">
                            <li><Link to="/resources">Resources</Link></li>
                            <li><Link to="/lectures">Lectures</Link></li>
                            <li><Link to="/announcements">Announcements</Link></li>
                            <li><Link to="/chats">Chats</Link></li>
                            <li><Link to="/gradebook">Gradebook</Link></li>
                            <li><Link to="/QnA">QnA</Link></li>
                            <li><Link to="/assignments">Assignments</Link></li>
                        </ul>
                    <li onClick={this.accordion} className="accordion" >
                        <a href="#">LAW101</a>
                    </li>
                        <ul className="panel">
                            <li><Link to="/resources">Resources</Link></li>
                            <li><Link to="/lectures">Lectures</Link></li>
                            <li><Link to="/announcements">Announcements</Link></li>
                            <li><Link to="/chats">Chats</Link></li>
                            <li><Link to="/gradebook">Gradebook</Link></li>
                            <li><Link to="/QnA">QnA</Link></li>
                            <li><Link to="/assignments">Assignments</Link></li>
                        </ul>
                    <li onClick={this.accordion} className="accordion" >
                        <a href="#">ENG101</a>
                    </li>
                        <ul className="panel">
                            <li><Link to="/resources">Resources</Link></li>
                            <li><Link to="/lectures">Lectures</Link></li>
                            <li><Link to="/announcements">Announcements</Link></li>
                            <li><Link to="/chats">Chats</Link></li>
                            <li><Link to="/gradebook">Gradebook</Link></li>
                            <li><Link to="/QnA">QnA</Link></li>
                            <li><Link to="/assignments">Assignments</Link></li>
                        </ul>
                </ul>
            </aside>
            <main className="main">               
                <Route path="/" exact component={HomeTab} />
                <Route path="/resources" component={ResourceTab} />
                <Route path="/announcements" component={AnnouncementsTab} />
                <Route path="/lectures" component={LecturesRecordingTab} />
                <Route path="/chats" component={ChatsTab} />
                <Route path="/gradebook" component={GradeBook} />
                <Route path="/QnA" component={QuestionAndAnswersTab} />
                <Route path="/assignments" component={AssignmentsTab} />
                <Route path="/coursehome" component={CourseHomeTab} />
            </main>
            <footer className="footer">
                <p>All rights reserved</p>
            </footer>
        </div>
        </BrowserRouter>
    )}

}

export default App
