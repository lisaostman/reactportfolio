import React from "react";
import '../../assets/css/style.css';
import pdf from '../../resume.pdf';

function Contact() {
  return (
    <div className="info container-fluid" id="resume">
        <h1>Contact</h1>
        <hr />
        <table className="table screenvrs">
            <thead className="thead-dark">
                <tr>
                    <th scope="col">LinkedIn</th>
                    <th scope="col">GitHub</th>
                    <th scope="col">Contact</th>
                    <th scope="col">Resume</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <a href="https://www.linkedin.com/in/lisa-p-ostman/" target="_blank">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTDQHRn8MV4PwxGNA6hWPIEsVAMfmp91aA-d3fs6lUhj5kzOwcN"
                                width="100px" />
                        </a>
                    </td>
                    <td>
                        <a href="https://github.com/lisaostman/" target="_blank">
                            <img src="https://image.flaticon.com/icons/png/512/25/25231.png" width="100px" />
                        </a>
                    </td>
                    <td>
                        Ph: 0417 204 744 <br/>
                        Email: peolina@live.com.au
                    </td>
                    <td>
                            <div className="container text-right">
                                <button type="submit" className="btn btn-info"> <a href={pdf}>Click here for my pdf</a></button>
                            </div>
                    </td>
                </tr>
            </tbody>
        </table>

        <table className="table mobilevrs">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">LinkedIn</th>
                        <th scope="col">GitHub</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <a href="https://www.linkedin.com/in/lisa-p-ostman/" target="_blank">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTDQHRn8MV4PwxGNA6hWPIEsVAMfmp91aA-d3fs6lUhj5kzOwcN"
                                    width="100px" />
                            </a>
                        </td>
                        <td>
                            <a href="https://github.com/lisaostman/" target="_blank">
                                <img src="https://image.flaticon.com/icons/png/512/25/25231.png" width="100px" />
                            </a>
                        </td>
                    </tr>
                </tbody>
            </table>

            <table className="table mobilevrs">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">Contact</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                Ph: 0417 204 744 <br />
                                Email: peolina@live.com.au
                            </td>
                        </tr>
                    </tbody>
                </table>

                <table className="table mobilevrs">
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col">Resume</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                <div className="container text-right">
                                <button type="submit" className="btn btn-info"> <a href={pdf}>Click here for my pdf</a></button>
                            </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>


    </div>
  );
}

export default Contact;
