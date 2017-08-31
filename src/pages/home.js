import React, {Component,PropTypes,render} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as actions from '../redux/actions/home'

class Home extends Component{
    constructor(props,context){
        super(props,context)
        this.doSomeThing=this.doSomeThing.bind(this)
    }
    doSomeThing(){
        console.log("a")
    }
    componentDidMount(){
        this.props.actions.fetchBanner()
    }
    render(){
        return (
            <div id="home">
                <div>asd</div>
            </div>
        )
    }
}
const mapStateToProps = (state)=>{
    return {
        banner:state.homeState.banner
    }
}
const mapDispatchToProps = (dispatch)=>{
    return {
        actions:bindActionCreators(actions,dispatch)
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Home)
