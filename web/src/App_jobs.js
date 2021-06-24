import React, { Component } from 'react'
import { TextAnnotator } from 'react-text-annotate'

const TEXT = document.querySelector('#document-text').innerText.trim();
const IMAGE_URL = document.querySelector('#document-image').innerText.trim();
const METADATA = document.querySelector('#metadata').innerText.trim();

const METAJSON = JSON.parse(METADATA)
const LABELS = METAJSON.labels
const META = METAJSON.meta

const TAG_COLORS = {
  TITLE: '#154360',
  PersonalFullName: '#CBDCEB',
  PersonalPhone: '#76A6CD',
  PersonalEmail: '#5697CB',
  PersonalAddress: '#3287CC',
  PersonalJobtitle: '#0E78CF',
  ExperienceJobtitle: '#9ADFA2',
  ExperienceCompany: '#75DE81',
  ExperienceDetails: '#59E169',
  ExperienceDate: '#41DF53',
  ExperienceLocation: '#0EBE22',
  StudyName: '#DEC894',
  StudyOrganization: '#D9AC51',
  StudyDate: '#E08824',
  StudyLocation: '#F98808',
  ExperienceNEW: '#2BE183',
  StudyNEW: '#F56B06',
  SkillName: '#F50611',
}

var VALUES = []
//TEXT = TEXT.replace(/(?:\r\n|\r|\n)/g, '')
//TEXT = TEXT.replace(/\r?\n/g, '\r\n');

function GetValues(item1, index1) {
  VALUES.push({start: + item1[0] , end: + item1[1] , tag: item1[2] , color: TAG_COLORS[item1[2]]})
  //{start:38,end:44,tag:"TITLE",color:"#154360"}
}

const Card = ({ children }) => (
    <div> {children} </div>
    //Cards...
  )

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
       value: [],
       tag: 'TITLE',
       complete: false,
       notes: '',
       metadata: META
       //numPages: 1,
       //pageNumber: 1,
    };

    this.renderLabels = this.renderLabels.bind(this);
  }

  componentDidMount() {
    this.renderLabels();
  }
  
  handleChange = value => {
    this.setState({ value });
  }

  handleTagChange = e => {
    this.setState({ tag: e.target.value });
  }

  handleYesBtn = () => {
    this.setState({ claimResult: true });
  }

  handleNoBtn = () => {
    this.setState({ claimResult: false });
  }

  handleNotes = e => {
    this.setState({ notes: e.target.value });
  }

  renderLabels = () => {
    LABELS.forEach(GetValues);
    this.setState({value: VALUES}, () => {
      //console.log('DidMount... value:' + JSON.stringify(this.state) + 'Values:' + JSON.stringify(VALUES))
     })
  }

  render() {

    return (
      <div style={{ padding: 12, fontFamily: 'sans-serif'}}>

        <div className="row" style={{ fontFamily: 'sans-serif' }}>
            <div className="col" style={{ width: "100%" }}>
              <h5>Instrucciones</h5>
              <p> Revise o complemente el etiquetado como corresponda.</p>
            </div>
        </div>

        <div className="row" style={{ display: 'flex', marginBottom: 1 }}>
          <div style={{ boxShadow: '1px 2px 4px 1px rgba(0,0,0,.1)', margin: 4, width: "38%", height: "500", padding: 1}}>
              <div className="img_contain"  style={{ width: "96%", height: "450"}}>
                  <iframe title="CV" crossOrigin="anonymous" src={IMAGE_URL} width="100%" height="550">
                  </iframe>
              </div>
          </div>

          <div style={{ boxShadow: '1px 2px 4px 1px rgba(0,0,0,.1)', margin: 4, width: "60%", padding: 2}}>
            <div className="col-sm-5" style={{ paddingLeft: '1px' }}>
                <select name="list" id="Combo" className="form-control" onChange={this.handleTagChange} value={this.state.tag}>
                    <option value="TITLE">TITLE</option>
                    <option value="PersonalFullName">PersonalFullName</option>
                    <option value="PersonalPhone">PersonalPhone</option>
                    <option value="PersonalEmail">PersonalEmail</option>
                    <option value="PersonalAddress">PersonalAddress</option>
                    <option value="PersonalJobtitle">PersonalJobtitle</option>
                    <option value="ExperienceJobtitle">ExperienceJobtitle</option>
                    <option value="ExperienceCompany">ExperienceCompany</option>
                    <option value="ExperienceDetails">ExperienceDetails</option>
                    <option value="ExperienceDate">ExperienceDate</option>
                    <option value="ExperienceLocation">ExperienceLocation</option>
                    <option value="StudyName">StudyName</option>
                    <option value="StudyOrganization">StudyOrganization</option>
                    <option value="StudyDate">StudyDate</option>
                    <option value="StudyLocation">StudyLocation</option>
                    <option value="ExperienceNEW">ExperienceNEW</option>
                    <option value="StudyNEW">StudyNEW</option>
                    <option value="SkillName">SkillName</option>
                </select>
            </div>

            <div
              className="border border-success bg-light"
              style={{ width: "98%", height: 350, overflow: 'scroll', margin: 7}}
            >
             <TextAnnotator
                style={{
                  fontFamily: 'sans-serif',
                  maxWidth: "100%",
                  margin: 5,
                  lineHeight: 1.4
                }}
                content={TEXT}
                value={this.state.value}
                onChange={this.handleChange}
                getSpan={span => ({
                  ...span,
                  tag: this.state.tag,
                  color: TAG_COLORS[this.state.tag],
                })}
              />
            </div>

            <div className="form-row" style={{ width: "100%" }}>
                <div className="col-md-8">
                <div className="font-weight-bold">Notas</div>
                <textarea className="form-control" rows="5" onChange={this.handleNotes} value={this.state.notes}
                          name="notes" rows="2" cols="100%"> </textarea>
                </div>
                <div className="col">
                    <br></br>
                <h6 className="font-weight-bold">¿Etiquetado completo?</h6>
                <div className="col-md-8">
                      <button type="button" onClick={this.handleYesBtn}  className="btn btn-md btn-success btn-block" style={{ width:50 , height:30 , fontSize: 14 }} name="y_0">SI</button>
                </div>
                <div style={{ height: 5}}></div>
                <div className="col-md-8">
                      <button type="button" onClick={this.handleNoBtn}  className="btn btn-md btn-danger btn-block" style={{ width:50 , height:30, fontSize: 14 }} name="n_0">NO</button>
                </div>
                </div>
                <div className="col" style={{ width: "100%" }}>
                  <h6 className="font-weight-bold">Metadatos</h6>
                  <p>{JSON.stringify(META, undefined, 2)}</p>
                </div>
            </div>
          </div>
        </div>
        <pre hidden>{JSON.stringify(this.state, undefined, 2)}</pre>
      </div>
    )
    
  }
}

export default App
