import React, { Component } from 'react'
import {
    Route,
    NavLink,
    Routes,
    HashRouter
} from 'react-router-dom'
import Home from './home'
import OperationMode from './operation'
import TestMode from './test'
import Setting from './setting'

class Main extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <h1>금속검출기 프로그램</h1>
                    <ul className="header">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/operation">운영모드</NavLink></li>
                        <li><NavLink to="/test">테스트모드</NavLink></li>
                        <li><NavLink to="/setting">설정</NavLink></li>
                    </ul>
                    <div className="content">
                        <Routes>
                            <Route path="/" element={<Home />}/>
                            <Route path="/operation" element={<OperationMode />}/>
                            <Route path="/test" element={<TestMode />}/>
                            <Route path="/setting" element={<Setting />}/>
                        </Routes>
                    </div>
                </div>
            </HashRouter>
        )
    }
}

export default Main