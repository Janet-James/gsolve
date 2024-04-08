import { useEffect, useState  } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
//import GenralInformation from './General-Information';



import PlusIcon from './../../dist/images/plus-icon-green.svg'
import CalendarIcon from './../../dist/images/calendar-icon.svg'
import BuildingIcon from './../../dist/images/site-assessment/building-icon.svg'
import GroundIcon from './../../dist/images/site-assessment/ground-icon.svg'
import CarportIcon from './../../dist/images/site-assessment/carport-icon.svg'
import ElectrictyIcon from './../../dist/images/site-assessment/electricity-icon.svg'
import BatteryIcon from './../../dist/images/site-assessment/battery-icon.svg'
import EnvironmentIcon from './../../dist/images/site-assessment/environment-icon.svg'
import WeatherIcon from './../../dist/images/site-assessment/weather-icon.svg'
import LogisticIcon from './../../dist/images/site-assessment/delivery-icon.svg'



function App() {
    const [validated, setValidated] = useState(false);
    //const [data, setData] = useState([]);

    // const [rows, setRows] = useState([
    //     { id: 1, Equipment: '', EquipmentType: '', Wattage: '', Qty: '' } // Initial row
    // ]);

    // const [tabsCol, settabsCol] = useState([
    //     { eventKey: "0", title: "Room 1" },
    //     // Initial tabs, you can add more if needed
    // ]);


    // const initialFormData = useState({
    //     DateOfSurvey: '',
    //     ContactNumber1: '',
    //     ContactNumber2: '',
    //     EarthingPitVisibility: '',
    // });
    // tabsCol.forEach((tab, tabIndex) =>{
    //     rows.forEach((row, rowIndex) => {
    //         initialFormData[`Equipment-${tabIndex}-${rowIndex}`] = '';
    //         initialFormData[`EquipmentType-${tabIndex}-${rowIndex}`] = '';
    //         initialFormData[`Wattage-${tabIndex}-${rowIndex}`] = '';
    //         initialFormData[`Qty-${tabIndex}-${rowIndex}`] = '';
    //     });
    // })

    //const [formData, setFormData] = useState(initialFormData);


    // const handleAddRow = () => {
    //     const newId = rows.length + 1;
    //     setRows([...rows, { id: newId, Equipment: '', EquipmentType: '', Wattage: '', Qty: '' }]);
    // };
    
    // const handleAddTab = () => {
    //     const newKey = String(tabsCol.length);
    //     const newTitle = `Room ${tabsCol.length + 1}`;
    //     settabsCol([...tabsCol, { eventKey: newKey, title: newTitle }]);
    // };
    

    // Event handler to update form data on input change
    // const handleInputChange = (event, id) => {
    //     const { name, value } = event.target;
    //     setFormData(prevState => ({
    //         ...prevState,
    //         [name]: value
    //     }));
    //     const updatedRows = rows.map(row => {
    //         if (row.id === id) {
    //             return { ...row, [name]: value };
    //         }   
    //         return row;
    //     });
    //     setRows(updatedRows);
    //     setFormData({
    //         ...formData, ...rows,
    //         [name]: value
    //     });
    // };

    // function handleInputChangePhone1(name, value) {
    //     setFormData({
    //         ...formData,
    //         [name]: value
    //     });
    // }

    // function handleInputChangePhone2(name, value) {
    //     setFormData({
    //         ...formData,
    //         [name]: value
    //     });
    // }

    // Event handler to handle form submission
    const handleSubmit = (event) => {
        
        //event.preventDefault();
        // Access form data here
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
            
        }else {
            //alert();
            //console.log(formData);
            event.preventDefault();
            event.stopPropagation();
        }
        
        setValidated(true);
    };

    const [clicked, setClicked] = useState(false);
    const handleSidebarActive = (e) => {
        setClicked(!clicked);
    }

    const [buildingData, setBuildingData] = useState([]);

    useEffect(() => {
        // Simulating fetching data from a local JSON file
        const fetchData = async () => {
          try {
            const response = await fetch('/building-json.json'); // Assuming your JSON file is named data.json
            const jsonData = await response.json();
            setBuildingData(jsonData.building_details); // Extracting building details and storing in state
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData(); // Fetch data when the component mounts
    }, []);
    
    
    return (
        <>
            <div className={`siteassesment-wrap ${clicked ? 'active' : ''}`}>
                
                {/* <Row>
                    <Col>
                        <div className='site-title'>
                            <h2>USAID / RTI International / 3456789</h2>
                        </div>
                        <div className='site-gallary'></div>
                    </Col>
                </Row> */}
                <Row className='mt-4 mx-0'>
                    <Col xs={1} className='left-side-bar'>
                        <ul>
                            <li className='active'>
                                <img src={BuildingIcon} alt=''/>
                                <span>Building <br/>& Roof</span>
                                <button onClick={handleSidebarActive} className='sidebar-arrow'></button>
                            </li>
                            <li>
                                <img src={GroundIcon} alt=''/>
                                <span>Ground</span>
                            </li>
                            <li>
                                <img src={CarportIcon} alt=''/>
                                <span>Carport</span>
                            </li>
                            <li>
                                <img src={ElectrictyIcon} alt=''/>
                                <span>Electricity Details</span>
                            </li>
                            <li>
                                <img src={BatteryIcon} alt=''/>
                                <span>Battery</span>
                            </li>
                            <li>
                                <img src={EnvironmentIcon} alt=''/>
                                <span>Environment</span>
                            </li>
                            <li>
                                <img src={WeatherIcon} alt=''/>
                                <span>Weather Reports</span>
                            </li>
                            <li>
                                <img src={LogisticIcon} alt=''/>
                                <span>logistics</span>
                            </li>
                        </ul>
                    </Col>
                    <Col xs={12}>
                        <div className="accordion-wrap">
                            <Row className='mb-3'>
                                <Col className='d-flex align-items-center'>
                                    <div className='site-title d-flex flex-column'>
                                        <h2>Southern Highlands Provincial Health Authority - <span>View Details</span></h2> 
                                        <span className='date-text'> <img src={CalendarIcon} alt='' />23-MAR-2024</span>
                                    </div>
                                    <Button className='ms-auto add-buidling'><span><img src={PlusIcon} alt='' /></span> Add New Building</Button>
                                </Col>
                            </Row>
                            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                                <Accordion defaultActiveKey="1" >
                                    {buildingData.map((building, index) => (
                                        <Accordion.Item eventKey={index + 1}>
                                            <Accordion.Header>Building {index + 1}</Accordion.Header>
                                            <Accordion.Body>   
                                                <GenralInformation 
                                                    building={building} // Pass the building object directly
                                                    index={index} // Pass index as a prop
                                                    key={index} 
                                                />
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    ))}
                                </Accordion>
                                <Row>
                                    <Col className='text-end'>
                                        <Button type="submit">Next</Button>
                                    </Col>
                                </Row>
                            </Form>
                        </div>    
                    </Col>
                </Row>
            </div>
        </>
    )
}

function GenralInformation({ building, index }) {

    return (
        <>  
            <Row>
                <Col xs={8}>
                    <Row>
                        <Form.Group className="mb-3 col-md-3" >
                            <FloatingLabel
                                controlId="building_function_name"
                                label="Building Functional Name*"
                                className=""
                            >
                                <Form.Control 
                                    type="text" 
                                    placeholder=""  
                                    value={building[`building_${index + 1}`].building_function_name}
                                    name="building_function_name"
                                />
                            </FloatingLabel>
                        </Form.Group>
                        <Form.Group className="mb-3 col-md-3" >
                            <FloatingLabel
                                controlId="building_location"
                                label="Building Location*"
                                className=""
                            >
                                <Form.Control 
                                    type="text" 
                                    placeholder=""  
                                    value={building[`building_${index + 1}`].building_location}
                                    name="building_location"
                                />
                            </FloatingLabel>
                        </Form.Group>
                        <Form.Group className="mb-3 col-md-6" >
                            <FloatingLabel
                                controlId="Building Type"
                                label=""
                                className=""
                            >
                                <Form.Control 
                                    as="select" 
                                    type="select" 
                                    controlId="building_type" 
                                    name="building_type" 
                                    className='col-12 form-select px-0'
                                    value={building[`building_${index + 1}`].building_type}
                                >
                                    <option value="">---Building Type---</option>
                                    <option value="concrete">Concrete</option>
                                    <option value="steel">Steel</option>
                                    <option value="wood">Wood</option>
                                </Form.Control>
                            </FloatingLabel>
                        </Form.Group>
                    </Row>
                </Col>
                <Col xs={4}>
                    <div className='building-images'>
                        <div className='top-tab'>
                            <ul>
                                <li className='active'>Building {index + 1}</li>
                                <li>
                                    <Form.Control 
                                        as="select" 
                                        type="select" 
                                        controlId="room_images" 
                                        name="room_images" 
                                        className='form-select px-0'
                                        value=''
                                    >
                                        <option value="room1">Room 1</option>
                                        <option value="room2">Room 2</option>
                                    </Form.Control>
                                </li>
                                <li>Roof</li>
                            </ul>
                        </div>
                        <div className='building-tab-content'>
                            <div className='tab-content-item'>
                                <div className='content-inner-tab'>
                                    <ul>
                                        <li>Images </li>
                                        <li>Videos </li>
                                        <li>Drawings</li>
                                        <li>Marked & Raw Images</li>
                                    </ul>
                                </div>
                                <div className='inner-content-item'>
                                    <ul>
                                        <li>image 1</li>
                                        <li>image 2</li>
                                        <li>image 3</li>
                                        <li>image 4</li>
                                    </ul>
                                    <Form.Group controlId="formFile" className="mb-3 upload-wrap text-right">
                                        <Form.Control type="file" />
                                        <Form.Label>Upload</Form.Label>
                                    </Form.Group>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row>
                <Accordion >
                    {building.room_details.map((room, roomIndex) => (
                        <Accordion.Item eventKey={roomIndex}>
                            <Accordion.Header>Room {roomIndex + 1}</Accordion.Header>
                            <Accordion.Body>
                            <div key={roomIndex}>
                                <p>Room Functional Name: {room[`room_${roomIndex + 1}`].room_functional_name}</p>
                                {/* Render other room details here */}
                            </div>
                            </Accordion.Body>
                        </Accordion.Item>
                    ))}
                </Accordion> 
            </Row>
            
        </>
    )
}

export default App;
