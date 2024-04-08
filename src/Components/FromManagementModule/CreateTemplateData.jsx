import React from "react";
import { useState, useEffect } from 'react';
import { Row, Col, FloatingLabel, Form , Container } from "react-bootstrap";

import Arrow from './../../dist/images/arrow.png';
import DocIcon from './../../dist/images/formManagementImg/doc.png';
import TeamIcon from './../../dist/images/formManagementImg/team-icon.png';

function CreateProposalData() {
  
  const [proposalTemplateName, setProposalTemplateName] = useState('');
  const [birdToModules, setBirdToModules] = useState('');
  const [solution, setSolution] = useState('');
  const [uploadDocument, setUploadDocument] = useState('');
  const [fileNames, setFileNames] = useState([]);
  const [solarSolutions, setSolarSolutions] = useState([]);
  const [templateModes, setTemplateModes] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/template_mode/')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network Error');
        }
        return response.json();
      })
      .then(data => {
        const modes = data.map(item => ({ id: item.id, template_mode: item.template_mode }));
        setTemplateModes(modes);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);  

  useEffect(() => {
    fetch('http://127.0.0.1:8000/solar_solutions_list/')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network Error');
        }
        return response.json();
      })
      .then(data => {
        const solar_solutions = data.map(item => ({ id: item.id, solar_solutions: item.solar_solutions }));
        setSolarSolutions(solar_solutions);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/link_google_docs_list/')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network Error');
        }
        return response.json();
      })
      .then(data => {
        const names = data.map(item => item['File Name']);
        setFileNames(names);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

  const handleProposalTemplateNameChange = (event) => {
    setProposalTemplateName(event.target.value);
  };

  const handleBirdToModulesChange = (event) => {
    setBirdToModules(event.target.value);
  };

  const handleSolutionChange = (event) => {
    setSolution(event.target.value);
  };

  const handleUploadDocumentChange = (event) => {
    setUploadDocument(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      proposalTemplateName,
      birdToModules,
      solution,
      uploadDocument
    };
    fetch('http://127.0.0.1:8000/create_new_template/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network Error');
      }
      return response.json();
    })
    .then(data => {
      console.log('Success:', data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  };  

  return (
    <Container className="createProposalDsn secPad">
      <form onSubmit={handleSubmit} className="bgWhite">
        <Row>
          <Col xs={5}>
            <h3 className="mb-4"><img src={Arrow} alt="Arrow" width="17"/> Create a New Template</h3>
            <FloatingLabel controlId="floatingInput" label="Template Name*" className="mb-4 floatInputDsn">
              <Form.Control type="text" placeholder="Template Name" onChange={handleProposalTemplateNameChange} value={proposalTemplateName}/>
            </FloatingLabel>
            <FloatingLabel controlId="floatingSelectBirdToModules" label="" className="mb-4 floatSelectDsn">
              <Form.Select aria-label="Bird to Modules" onChange={handleBirdToModulesChange} value={birdToModules}>
                <option>Bird to Modules*</option>
              {templateModes.map((mode, index) => (
                <option key={index} value={mode.id}>{mode.template_mode}</option>
              ))}
              </Form.Select>
            </FloatingLabel>
            <FloatingLabel controlId="floatingSelectSolution" label="" className="mb-4 floatSelectDsn">
              <Form.Select aria-label="Solution" onChange={handleSolutionChange} value={solution}>
                <option>Solution*</option>
                {solarSolutions.map((solarSolution, index) => (
                  <option key={index} value={solarSolution.id}>{solarSolution.solar_solutions}</option>
                ))}
              </Form.Select>
            </FloatingLabel>
            <FloatingLabel controlId="floatingSelectUploadDocument" label="" className="mb-4 floatSelectDsn">
              <Form.Select aria-label="Upload Document" onChange={handleUploadDocumentChange} value={uploadDocument}>
                <option>Choose Document*</option>
                {fileNames.map((fileName, index) => (
                  <option key={index} value={fileName}>{fileName}</option>
                ))}
              </Form.Select>
            </FloatingLabel>
          </Col>
          <Col xs={7}>
            <h3 className="mb-4">Preview Documents</h3>
            <div className="previewDocDsn">
              <div className="content">
                <img src={DocIcon} alt="Document Preview" />
                <p>Not Yet Uploaded</p>
              </div>
            </div>
            <Row>
              <Col>
                <button type="button" className="btn-grn-bor-2 mb-3" disabled><img src={TeamIcon} alt="Team Icon" className="me-2" />Tag People</button>
              </Col>
              <Col md="auto">
                <button type="button" className="btn-green-2" disabled>Edit</button>
              </Col>
              <Col md="auto">
                <button type="submit" className="btn-green">Save</button>
              </Col>
            </Row>
          </Col>
        </Row>
      </form>
    </Container>
  );
}

export default CreateProposalData;
