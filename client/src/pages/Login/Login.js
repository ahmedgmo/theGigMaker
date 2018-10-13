import React, { Component } from 'react'
import { Tabs, Tab, Thumbnail, Image } from 'react-bootstrap';
import { Modal, Button } from 'react-bootstrap';
import Card from '../../components/Card';
import Column from '../../components/Column';
import Container from '../../components/Container';
import Row from '../../components/Row';
import cards from '../../cards.js';
import API from '../../utils/API';
import { FormBtn } from '../../components/Form';
import { LoggerOptions } from 'mongodb'
import "../../images"

class Login extends Component {

    loginmethod = () => {
        API.login()
        .then(res => {
            console.log(res)
        }).catch(err => {
            console.log(err)
        })
    }

    render() {
        return (
            <div>
                <div>
                    <h1>theGigMaker</h1>
                    <h3>Help others and find help!</h3>
                </div>
                <div>
                    <a href="/auth/google"><img src="sigininbtn.png" onClick={() => {this.loginmethod.bind(this)}} /></a>
                </div>
            </div>
                )
            }
         }
        
        export default Login
