import React, { Component } from 'react'
import { TokenAnnotator } from 'react-text-annotate'

//const TEXT = document.querySelector('#document-text').innerText.trim();
//const IMAGE_URL = document.querySelector('#document-image').innerText.trim();
//const METADATA = document.querySelector('#metadata').innerText.trim();

var TEXT = 'jonathan.smith@gmail.com Villaviciosa de Arriba, 08291, Espa\u00f1a\n_NEW_ 67961190\n_NEW_ \n_NEW_ Jonathan Smith\n_NEW_ O P E R A T I O N S M A N A G E R\n_NEW_ \n_NEW_ jonathan.smith@gmail.com Villaviciosa de Arriba, 08291, Espa\u00f1a\n_NEW_ 67961190\n_NEW_ \n_NEW_ PerlE\n_NEW_ \n_NEW_ Ejecutivo realizado y orientado a objetivos que ofrece m\u00e1s de 15 a\u00f1os de amplia experiencia en gesti\u00f3n y liderazgo empresarial t\u00e1ctico. Ofrece experiencia que abarca la administraci\u00f3n de empresas y la gesti\u00f3n del cambio, logrando resultados \u00f3ptimos con una plani\u00e9caci\u00f3n competente, organizaci\u00f3n y enfoque orientado a las soluciones, a la vez que impulsa el crecimiento empresarial, la rentabilidad y las alianzas estratLgicas. \u00ed/der diplom\u00e1tico y pensador anal/tico capaz de inspirar y cultivar relaciones de trabajo productivas con empleados y socios.\n_NEW_ \n_NEW_ xpiernecan bE oDr E\n_NEW_ \n_NEW_ Manager de Operaciones, Deliphush, S.L., Atlantida, Galicia\n_NEW_ Octubre 2016 \u2014 Presente\n_NEW_ \n_NEW_ \u00eda empresa se centra en la movilizaci\u00f3n de la gesti\u00f3noptimizaci\u00f3n de programas mundiales, lo que incluye el desarrollo y la evaluaci\u00f3n de pol/ticas y procedimientos operacionales.\n_NEW_ \n_NEW_ P Asegurar la comprensi\u00f3n total de la administraci\u00f3n y los empleados de las necesidades del negocio, auditando el cumplimiento, seguimiento del progreso hacia las metas y realizando an\u00e1lisis de las &R\u00ed y IOC.\n_NEW_ P \u00faonvertir del kltimo al primero en el ran%ing de la Iegi\u00f3n Oriental, desplegando planes mes a mes mientras se mantiene una recolecci\u00f3n del 98;.\n_NEW_ P Ayudar con el desarrollo de presupuestos anuales, est\u00e1ndares operativos y objetivos empresariales estratLgicos.\n_NEW_ P Administrar &R\u00ed a travLs de la evaluaci\u00f3n de los estados \u00e9nancieros, an\u00e1lisis de tendencias de datos \u00e9nancieros, y otros indicadores de desempe\u00f1o para evaluar la posici\u00f3n de la empresa y la posici\u00f3n \u00e9nanciera, adem\u00e1s de calibrar los costos operativos correspondientes.\n_NEW_ P &ublicidad directa, mar%eting y programas de ventas, incluyendo econom/as de escalaF asignar recursos entre los clientes y los ingresos.\n_NEW_ P Sacilitar la elaboraci\u00f3n del presupuesto anual, los procesos operativos y los objetivos empresariales estratLgicos, elaborando propuestas adaptadas para aumentar la e\u00e9ciencia y reducir los costos operativos, al tiempo que se mitigan los problemas de producci\u00f3n o de la cadena de suministro.\n_NEW_ \n_NEW_ P &articipar en negociaciones de alto nivel, generando contratos lucrativos, y crear asociaciones bene\u00e9ciosas con los clientes a travLs de una comunicaci\u00f3n regular y productiva.\n_NEW_ P Asegurar que todos los documentos legales y reglamentarios sean archivados y\n_NEW_ vigilar el cumplimiento de las leyes y reglamentos.\n_NEW_ \n_NEW_ Gerente de Operaciones del Distrito, JLC Company, Barakaldo, Vizcaya\n_NEW_ Diciembre 2013 \u2014 Julio 2017\n_NEW_ \n_NEW_ P -upervisar a m\u00e1s de 100 empleados, asegurando la consistencia de las pol/ticas,\n_NEW_ procedimientos y est\u00e1ndares operativos en el territorio asignado.\n_NEW_ \n_NEW_ tes EEeC\n_NEW_ Villaviciosa de Arriba, 08291, Espa\u00f1a\n_NEW_ 67961190\n_NEW_ jonathan.smith@gmail.com\n_NEW_ Nacionalidad\n_NEW_ Estadounidense\n_NEW_ Fecha de nacimiento\n_NEW_ 11G25G1979\n_NEW_ \n_NEW_ mDIiesecan C\n_NEW_ Desti\u00f3n de riesgos\n_NEW_ Estrategias de cambio\n_NEW_ &enetraci\u00f3n en el mercado\n_NEW_ \n_NEW_ Desti\u00f3n de proveedores (esarrollo de negocios\n_NEW_ \n_NEW_ Desti\u00f3n de la calidad\n_NEW_ Administraci\u00f3n corporativa Sinanzas )&resupuestos, &R\u00edM\n_NEW_ \n_NEW_ (esarrollo organizativo\n_NEW_ \n_NEW_ Tejora del proceso\n_NEW_ Deneraci\u00f3n de revenue )IOCM &lani\u00e9caci\u00f3n y ejecuci\u00f3n\n_NEW_ \n_NEW_ dunDI C\n_NEW_ CnglLs\n_NEW_ SrancLs\n_NEW_ Espa\u00f1olF \u00faastellano\n_NEW_ \n_NEW_ jonathan.smith@gmail.com Villaviciosa de Arriba, 08291, Espa\u00f1a\n_NEW_ 67961190\n_NEW_ \n_NEW_ P Auditar y analizar los objetivos de ingresos, los procesos operativos y los controles de gastos en toda la regi\u00f3n.\n_NEW_ P &roporcionar una direcci\u00f3n global y desarroll\u00f3 un trabajo en equipo utilizando principios operativos s\u00f3lidos para alcanzar los objetivos \u00e9nancieros y operativos regionales a corto y largo plazo.\n_NEW_ P Evaluar los datos de producci\u00f3n para plani\u00e9car las mLtricas, realizar cambios estratLgicos hacia la capacitaci\u00f3n y las normas operativas para impulsar el Lxito de los equipos en los objetivos del plan de negocios establecido.\n_NEW_ P Ievisar el programa de producci\u00f3n diario con los gerentes de pr\u00e1ctica, determinando los mLtodos para la reducci\u00f3n de costos, el aumento de los ingresos y la mejora del rendimiento general.\n_NEW_ P Cncrementar la producci\u00f3n de todas las l/neas de especialidad en m\u00e1s de 6,6 millones de d\u00f3lares en un a\u00f1o.\n_NEW_ P Brabaj\u00f3 estrechamente con el personal clave y la gerencia para proporcionar un liderazgo estratLgico de alta calidad, implementando planes y pol/ticas en todo el territorio especi\u00e9cado.\n_NEW_ \n_NEW_ xu\u00f3a anHc\n_NEW_ M\u00e1ster en Administraci\u00f3n de Empresas, Universidad de Washington State, Washington, US\n_NEW_ Agosto 2008 \u2014 Junio 2010\n_NEW_ \n_NEW_ Grado en Gesti\u00f3n de Operaciones, Universidad de Par\u00eds, Par\u00eds\n_NEW_ Agosto 2005 \u2014 Junio 2008\n_NEW_ \n_NEW_ T onEnu ueCb\u00e9yacna C\n_NEW_ Microsoft Ofxce Suite\n_NEW_ DentriI\n_NEW_ Eaglesoft\n_NEW_ \n_NEW_ (ntegrify\n_NEW_ \n_NEW_ m\u00f3rCDC\n_NEW_ SiI Sigma Green Belt 2019)7, simplilearn.com\n_NEW_ Management de producci\u00f3n y inventario 2019N7, AP(CS\n_NEW_ Certixed (nternational Professional Tegotiator 2C(PT7, uiti.org Gesti\u00f3n de Cadena de Suministro 2019N7, AP(CS\n_NEW_ \n_NEW_ PreInDCbAbreaDcDanInecsDC\n_NEW_ 8op Performing Manager 2019- 4 019)7, Deliphus, S.L.\n_NEW_ Empleado del Mes 291 veces en un periodo de \u00f1 aFos7, JLC Company /undadorqCapit\u00e1n del e6uipo 21jq019N7, Golden Cabuns\n_NEW_ Octubre 2020\n_NEW_ Equipo de (cid:68)aseball Amateur\n_NEW_ P &roporcionar liderazgo a los compa\u00f1eros de equipo, tanto dentro como fuera del\n_NEW_ campoF hacer estrategias en los planes de juego.\n_NEW_ \n_NEW_ jonathan.smith@gmail.com Villaviciosa de Arriba, 08291, Espa\u00f1a\n_NEW_ 67961190\n_NEW_ \n_NEW_ P (irigir los ejercicios de acondicionamiento y las rutinas de calentamiento previas al juegoF animar a los jugadores y promover el buen esp/ritu deportivo.\n_NEW_ flEn anHcbirDveCnDc E\n_NEW_ La Sociedad de Gesti\u00f3n de Operaciones, Miem(cid:64)ro\n_NEW_ Enero 2014 \u2014 Presente\n_NEW_ \n_NEW_ Asociaci\u00f3n de Gesti\u00f3n de la Producci\u00f3n y las Operaciones, Miem(cid:64)ro\n_NEW_ Octubre 2016 \u2014 Presente\n_NEW_ \n_NEW_ fasn(cid:31)nu ueCbepsr ba\u00f3rrna\u00f3E reC\n_NEW_ Meditaci\u00f3n\n_NEW_ Tavegar\n_NEW_ Automatizaci\u00f3n\n_NEW_ /\u00f3rmula 9'
const IMAGE_URL = 'file:///Users/rodzanto/Documents/Accounts/Adevinta/Infojobs/GroudTruth%20Majauts/taggingmvp/step1_cvs_pdf/manager_2_spanish_resumeio_07.pdf'
const METADATA = '{"labels": [[835, 854, "TITLE"], [91, 105, "PersonalFullName"], [69, 77, "PersonalPhone"], [159, 183, "PersonalEmail"], [25, 62, "PersonalAddress"], [114, 145, "PersonalJobtitle"], [868, 890, "ExperienceJobtitle"], [892, 907, "ExperienceCompany"], [971, 2365, "ExperienceDetails"], [934, 957, "ExperienceDate"], [909, 927, "ExperienceLocation"], [2713, 2748, "ExperienceJobtitle"], [2750, 2761, "ExperienceCompany"], [2829, 2982, "ExperienceDetails"], [2788, 2802, "ExperienceDate"], [2805, 2815, "ExperienceDate"], [2763, 2781, "ExperienceLocation"], [5505, 5519, "ExperienceCompany"], [5526, 5628, "ExperienceDetails"], [5467, 5470, "ExperienceDate"], [5482, 5494, "ExperienceDate"], [5496, 5501, "ExperienceDate"], [4840, 4876, "StudyName"], [4878, 4909, "StudyOrganization"], [4932, 4943, "StudyDate"], [4946, 4956, "StudyDate"], [4911, 4921, "StudyLocation"], [4970, 5001, "StudyName"], [5003, 5023, "StudyOrganization"], [5037, 5061, "StudyDate"], [5102, 5123, "StudyName"], [5083, 5095, "StudyOrganization"], [5224, 5228, "StudyDate"], [6257, 6291, "StudyName"], [6314, 6326, "StudyDate"], [6329, 6337, "StudyDate"], [860, 868, "ExperienceNEW"], [2705, 2713, "ExperienceNEW"], [4962, 4970, "StudyNEW"]], "meta": {"dataset": "aws_demo", "parser_version": "1.0.2", "file": "manager_2_spanish_resumeio_07.pdf"}}'

var METAJSON = JSON.parse(METADATA)
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
var start_token
var end_token
var MAPA = []
//const TOKENS = TEXT_ORIG.replace(/(?:\r\n|\r|\n)_NEW_/g, '').split(' ');
TEXT = TEXT.replace(/(?:\r\n|\r|\n)/g, '<br/>')
//TEXT = TEXT.replace(/\r?\n/g, '\r\n');
const TOKENS = TEXT.split(' ')

function GetValues(item1, index1) {
  GetTokens(item1[0], item1[1])
  VALUES.push({start: + start_token , end: + end_token , tokens:[ MAPA ], tag: item1[2] , color: TAG_COLORS[item1[2]]})
  //{"start":38,"end":44,"tokens":["Ejecutivo","realizado","y","orientado","a","objetivos"],"tag":"TITLE","color":"#154360"}
}

function GetTokens(start, end) {
  let j = 0
  MAPA = []
  TOKENS.forEach(GetMapa);
  function GetMapa(item, index) {
    if (start <= j && MAPA.length === 0) { //starting token
      start_token = index;
      MAPA.push(item);
    } else if (start < j && j <= (end+1)) { //middle or final token
      MAPA.push(item);
      end_token = index;
    }
    j = j + item.length + 1;
  }
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
             <TokenAnnotator
                style={{
                  fontFamily: 'sans-serif',
                  maxWidth: "100%",
                  margin: 5,
                  lineHeight: 1.4
                }}
                tokens={TEXT.split(' ')}
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
        <pre hidden>{JSON.stringify(this.state, null, 2)}</pre>
      </div>
    )
    
  }
}

export default App
