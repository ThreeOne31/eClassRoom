import React from "react"

class LectureRecordingTab extends React.Component{
    render(){
        return(
            <div className="lecures-container">
                <div >
                    <ul className="recent-lectures">
                        <li className="lecture-card">
                            <video className="lecture-video" controls>
                                <source src="assets/lectures/node_tutorial.mp4" type="video/mp4" />
                            </video>
                            <div className="lecture-footer">
                                <div className="lecture-title">Lecture 3</div>
                                <div className="record-date">18 Sep</div>
                            </div>
                            <div>Building RESTful services with express</div>
                        </li>
                        <li className="lecture-card">
                            <video className="lecture-video" controls>
                                <source src="assets/lectures/node_tutorial.mp4" type="video/mp4" />
                            </video>
                            <div className="lecture-footer">
                                <div className="lecture-title">Lecture 2</div>
                                <div className="record-date">17 Sep</div>
                            </div>
                            <div>Building RESTful services with express</div>
                        </li>
                        <li className="lecture-card">
                            <video className="lecture-video" controls>
                                <source src="assets/lectures/node_tutorial.mp4" type="video/mp4" />
                            </video>
                            <div className="lecture-footer">
                                <div className="lecture-title">Lecture 1</div>
                                <div className="record-date">16 Sep</div>
                            </div>
                            <div>Building RESTful services with express</div>
                        </li>
                    </ul>
                </div>
                <ul className="lecures-list">
                    <li className="lecture-list-tile">
                            
                    </li>
                </ul>
            </div>
        )
    }
}
export default LectureRecordingTab