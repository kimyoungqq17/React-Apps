import React, {Component} from 'react';
import TOC from "./components/TOC";
import ReadContent from './components/ReadContent';
import Subject from './components/Subject';
import Control from "./components/Control";
import './App.css';
import CreateContent from './components/CreateContent';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode:'read',
      selected_content_id:2,
      welcome:{title:"Welcome", sub:"hello react"},
      shutup:{title:"please", sub:"shut up"},
      subject:{title:"Web", sub:"World Wide Web"},
      contents:[
        {id: 1, title:'HTML', desc:"HTML is for information"},
        {id: 2, title:'CSS', desc:"CSS is for design"},
        {id: 3, title:'Javascript', desc:"Javascript is for interactive"}
      ]
    }
  }



  render () {
    var _title, _desc, _article = null;
    if(this.state.mode === 'welcome') {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.sub;
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>

    } else if(this.state.mode === 'read') {
      var i = 0;
      while(i < this.state.contents.length) {
        var data = this.state.contents[i];
        if(data.id === this.state.selected_content_id) {
          _title = data.title;
          _desc = data.desc; 
          break;
        }
        i = i + 1;
      }
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>
    }
    else if(this.state.mode === "create") {
      _article = <CreateContent></CreateContent>
    }
    return (
      <div className="App">
      {/* <Subject title="hello" sub="world you web"></Subject> */}
      <Subject 
      title= {this.state.subject.title}
      sub={this.state.subject.sub}
      onChangePage={
        function(){
          this.setState({
            mode:'welcome',
          });
        }.bind(this)
      }>
      </Subject>

      {/* <header>
          <h1><a href="/" onClick={function(e) {
            // debugger;
            e.preventDefault();

            this.setState({
              mode:'welcome'
            });
          }.bind(this)}> {this.state.subject.title}</a></h1>
          {this.state.subject.sub}
      </header> */}
      {/* <Subject 
        title={this.state.shutup.title} 
        sub={this.state.shutup.sub}
        
        
        ></Subject> */}
      <TOC 
        onChangePage={function(id){
          this.setState(
            {mode:"read",
            selected_content_id:Number(id)
          });
        }.bind(this)}
        data={this.state.contents}></TOC>

      <Control onChangeMode={function(_mode){
        this.setState({
          mode:_mode
        });

      }.bind(this)}></Control>
      {_article}
        
      </div>
    );
  }
}


export default App;
