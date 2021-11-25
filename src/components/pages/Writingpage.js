import React from 'react';
import '../../App.css';
import './Writingpage.css';
function Writing() {

    return (
        <>
                <div className='writing' to='writing'>
                <div className="container">
                <form method='POST' className='form1'>
                <div className="row">
                    <div className="col-25">
                    <label htmlFor="fname">Series</label>
                    </div>
                    <div className="col-75">
                    <input type="text" id="sname" name="sname" placeholder="Type Series name.."/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-25">
                    <label htmlFor="genre">Genre</label>
                    </div>
                    <div className="col-75">
                    <input type="text" id="genre" name="genre" placeholder="Type Genre Here.."/>
                    </div>
                </div>
                
                <div className="row">
                    <div className="col-25">
                    <label htmlFor="subject">Your View</label>
                    </div>
                    <div className="col-75">
                    <textarea id="review" name="review" placeholder="Write here.."></textarea>
                    </div>
                </div>
                <br/>
                <div className="row">
                    <input type="submit" value="Submit"/>
                </div>
                </form>
                </div></div>




        </>
    );
}

export default Writing;
