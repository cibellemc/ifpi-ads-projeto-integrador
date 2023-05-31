import React from "react";
import "./reservas.css";

const ReservaPage = () => {
    return (
    <>
    <section id="content">
      <ul className="box-info">
        <li>
          <i className="bx bx-add-to-queue"></i>
          <span className="text">
            <h3>0</h3>
            <p>Novas Solicitações</p>
          </span>
        </li>
        <li>
          <i className="bx bx-alarm-exclamation"></i>
          <span className="text">
            <h3>2</h3>
            <p>Pendentes</p>
          </span>
        </li>
        <li>
          <i className="bx bxs-calendar-check"></i>
          <span className="text">
            <h3>3</h3>
            <p>Finalizadas</p>
          </span>
        </li>
      </ul>

      <div className="table-data">
        <div className="order">
          <div className="head">
            <h3>Solicitações Recentes</h3>
            <i className="bx bx-search"></i>
            <i className="bx bx-filter"></i>
          </div>
          <table>
            <thead>
              <tr>
                <th>Solicitação</th>
                <th>Data</th>
                <th>Status</th>
                <th>Declaração</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <p>1</p>
                </td>
                <td>01-10-2021</td>
                <td>
                  <span className="status completed">Completed</span>
                </td>
                <td>
                  <a href="#" className="btn-download-active">
                    <i className="bx bxs-cloud-download"></i>
                    <span className="text">Download PDF</span>
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <p>2</p>
                </td>
                <td>01-10-2021</td>
                <td>
                  <span className="status pending">Pending</span>
                </td>
                <td>
                  <a href="#" className="btn-download">
                    <i className="bx bxs-cloud-download"></i>
                    <span className="text">Download PDF</span>
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <p>3</p>
                </td>
                <td>01-10-2021</td>
                <td>
                  <span className="status process">Process</span>
                </td>
                <td>
                  <a href="#" className="btn-download">
                    <i className="bx bxs-cloud-download"></i>
                    <span className="text">Download PDF</span>
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <p>4</p>
                </td>
                <td>01-10-2021</td>
                <td>
                  <span className="status pending">Pending</span>
                </td>
                <td>
                  <a href="#" className="btn-download">
                    <i className="bx bxs-cloud-download"></i>
                    <span className="text">Download PDF</span>
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <p>5</p>
                </td>
                <td>01-10-2021</td>
                <td>
                  <span className="status completed">Completed</span>
                </td>
                <td>
                  <a href="#" className="btn-download-active">
                    <i className="bx bxs-cloud-download"></i>
                    <span className="text">Download PDF</span>
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* MAIN */}
    </section>
    </>)
};

export default ReservaPage;